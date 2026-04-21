"use client";

import Image from "next/image";
import React, { useEffect, useState } from "react";

import { cn } from "@/lib/utils";

export type CompanyLogoItem = {
  src: string;
  alt: string;
  name: string;
  width: number;
  height: number;
};

const logoImageClass =
  "h-8 w-auto max-w-[min(100%,140px)] object-contain grayscale md:h-10 md:max-w-[min(100%,160px)]";

export function CompanyLogoMark({
  item,
  className,
}: {
  item: CompanyLogoItem;
  className?: string;
}) {
  return (
    <Image
      src={item.src}
      alt={item.alt}
      width={item.width}
      height={item.height}
      className={cn(logoImageClass, className)}
    />
  );
}

export function InfiniteCompanyLogos({
  items,
  direction = "left",
  speed = "normal",
  pauseOnHover = true,
  className,
}: {
  items: CompanyLogoItem[];
  direction?: "left" | "right";
  speed?: "fast" | "normal" | "slow";
  pauseOnHover?: boolean;
  className?: string;
}) {
  const containerRef = React.useRef<HTMLDivElement>(null);
  const scrollerRef = React.useRef<HTMLUListElement>(null);
  const [start, setStart] = useState(false);

  useEffect(() => {
    function addAnimation() {
      if (!containerRef.current || !scrollerRef.current) return;

      const scrollerContent = Array.from(scrollerRef.current.children);
      scrollerContent.forEach((node) => {
        const duplicated = node.cloneNode(true);
        scrollerRef.current?.appendChild(duplicated);
      });

      if (direction === "left") {
        containerRef.current.style.setProperty(
          "--animation-direction",
          "forwards",
        );
      } else {
        containerRef.current.style.setProperty(
          "--animation-direction",
          "reverse",
        );
      }

      if (speed === "fast") {
        containerRef.current.style.setProperty("--animation-duration", "20s");
      } else if (speed === "normal") {
        containerRef.current.style.setProperty("--animation-duration", "40s");
      } else {
        containerRef.current.style.setProperty("--animation-duration", "80s");
      }

      setStart(true);
    }

    addAnimation();
  }, [direction, speed]);

  return (
    <div
      ref={containerRef}
      className={cn(
        "scroller relative z-20 w-full max-w-7xl overflow-hidden mask-[linear-gradient(to_right,transparent,white_12%,white_88%,transparent)]",
        className,
      )}
    >
      <ul
        ref={scrollerRef}
        className={cn(
          "flex w-max min-w-full shrink-0 flex-nowrap items-center justify-center gap-4 py-2 md:py-4",
          start && "animate-scroll",
          pauseOnHover && "hover:[animation-play-state:paused]",
        )}
      >
        {items.map((item) => (
          <li
            key={item.name}
            className="relative flex shrink-0 items-center justify-center px-3 md:px-6"
          >
            <CompanyLogoMark item={item} />
          </li>
        ))}
      </ul>
    </div>
  );
}
