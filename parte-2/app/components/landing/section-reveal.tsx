"use client";

import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { type ReactNode, useRef } from "react";

gsap.registerPlugin(ScrollTrigger);

function prefersReducedMotion(): boolean {
  if (typeof window === "undefined") return false;
  return window.matchMedia("(prefers-reduced-motion: reduce)").matches;
}

type SectionRevealProps = {
  children: ReactNode;
  className?: string;
  headerSelector?: string;
  itemSelector?: string;
};

const DEFAULT_HEADER = "[data-reveal-header]";
const DEFAULT_ITEM = "[data-reveal-item]";

export function SectionReveal({
  children,
  className,
  headerSelector = DEFAULT_HEADER,
  itemSelector = DEFAULT_ITEM,
}: SectionRevealProps) {
  const root = useRef<HTMLDivElement>(null);

  useGSAP(
    () => {
      const el = root.current;
      if (!el) return;

      const headers = gsap.utils.toArray<HTMLElement>(
        el.querySelectorAll(headerSelector),
      );
      const items = gsap.utils.toArray<HTMLElement>(
        el.querySelectorAll(itemSelector),
      );
      const targets = [...headers, ...items];
      if (targets.length === 0) return;

      if (prefersReducedMotion()) {
        gsap.set(targets, { autoAlpha: 1, y: 0 });
        return;
      }

      gsap.set(targets, { autoAlpha: 0, y: 40 });

      const tl = gsap.timeline({
        scrollTrigger: {
          trigger: el,
          start: "top 85%",
          toggleActions: "play none none none",
          invalidateOnRefresh: true,
        },
      });

      if (headers.length) {
        tl.to(headers, {
          autoAlpha: 1,
          y: 0,
          duration: 0.75,
          ease: "power3.out",
        });
      }
      if (items.length) {
        tl.to(
          items,
          {
            autoAlpha: 1,
            y: 0,
            duration: 0.62,
            stagger: 0.085,
            ease: "power3.out",
          },
          headers.length ? "-=0.42" : 0,
        );
      }

      const refresh = () => {
        ScrollTrigger.refresh();
      };
      requestAnimationFrame(refresh);
      const t = window.setTimeout(refresh, 120);

      return () => {
        window.clearTimeout(t);
        tl.scrollTrigger?.kill();
        tl.kill();
      };
    },
    { scope: root, dependencies: [headerSelector, itemSelector] },
  );

  return (
    <div ref={root} className={className}>
      {children}
    </div>
  );
}
