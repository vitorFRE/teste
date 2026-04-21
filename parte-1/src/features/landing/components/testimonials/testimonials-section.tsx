"use client";

import Image from "next/image";
import { useCallback, useEffect, useLayoutEffect, useRef, useState } from "react";

import { cn } from "@/lib/utils";

import { SectionHeading } from "@/src/features/landing/components/common/section-heading";

const ASSETS = {
  bubble: "/figma/testimonials/bubble.svg",
  arrow: "/figma/testimonials/arrow-left.svg",
  starPath:
    "M7.0099 2.05941L14 0L11.9604 7.0099L14 14L7.0099 11.9604L0 14L2.05941 7.0099L0 0L7.0099 2.05941Z",
} as const;

function CarouselNavStar({
  active,
  className,
}: {
  active: boolean;
  className?: string;
}) {
  return (
    <svg
      width={14}
      height={14}
      viewBox="0 0 14 14"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className={cn(active ? "text-brand-lime" : "text-white", className)}
      aria-hidden
    >
      <path d={ASSETS.starPath} fill="currentColor" />
    </svg>
  );
}

const QUOTE =
  '"We have been working with Positivus for the past year and have seen a significant increase in website traffic and leads as a result of their efforts. The team is professional, responsive, and truly cares about the success of our business. We highly recommend Positivus to any company looking to grow their online presence."';

const SLIDE_COUNT = 3;

function scrollSlideToCenter(
  scroller: HTMLDivElement,
  slide: HTMLElement,
  behavior: "auto" | "smooth",
) {
  const left =
    slide.offsetLeft - (scroller.clientWidth - slide.offsetWidth) / 2;
  scroller.scrollTo({
    left: Math.max(0, left),
    behavior,
  });
}

function TestimonialSlide() {
  return (
    <div className="flex w-[min(606px,calc(100vw-3rem))] shrink-0 snap-center snap-always flex-col items-stretch gap-5">
      <div className="relative mx-auto min-h-[300px] w-full max-w-[606px] sm:min-h-[320px]">
        <Image
          src={ASSETS.bubble}
          alt=""
          width={606}
          height={266}
          className="pointer-events-none absolute inset-0 z-0 h-full w-full select-none object-fill"
          draggable={false}
        />
        <div className="relative z-10 px-[7%] pb-24 pt-10 sm:px-[52px] sm:pb-28 sm:pt-12">
          <p className="font-normal text-type-p leading-relaxed text-white sm:text-type-h4 sm:leading-normal md:text-type-p-dsk md:leading-normal">
            {QUOTE}
          </p>
        </div>
      </div>
      <div className="w-full max-w-[526px] self-end px-1 text-left sm:text-right">
        <p className="font-medium text-type-h4-dsk text-brand-lime">John Smith</p>
        <p className="mt-1 font-normal text-type-h4 text-white md:text-type-p-dsk md:leading-normal">
          Marketing Director at XYZ Corp
        </p>
      </div>
    </div>
  );
}

export function TestimonialsSection() {
  const scrollerRef = useRef<HTMLDivElement>(null);
  const slideRefs = useRef<(HTMLDivElement | null)[]>([]);
  const [active, setActive] = useState(0);
  const scrollRaf = useRef<number | null>(null);

  const updateActiveFromScroll = useCallback(() => {
    const scroller = scrollerRef.current;
    if (!scroller) return;
    const center = scroller.scrollLeft + scroller.clientWidth / 2;
    let best = 0;
    let bestDist = Infinity;
    slideRefs.current.forEach((el, i) => {
      if (!el) return;
      const mid = el.offsetLeft + el.offsetWidth / 2;
      const d = Math.abs(center - mid);
      if (d < bestDist) {
        bestDist = d;
        best = i;
      }
    });
    setActive(best);
  }, []);

  const goTo = useCallback((index: number) => {
    const next = Math.max(0, Math.min(SLIDE_COUNT - 1, index));
    const scroller = scrollerRef.current;
    const slide = slideRefs.current[next];
    if (!scroller || !slide) return;
    setActive(next);
    scrollSlideToCenter(scroller, slide, "smooth");
  }, []);

  useLayoutEffect(() => {
    const scroller = scrollerRef.current;
    const slide = slideRefs.current[0];
    if (!scroller || !slide) return;
    scrollSlideToCenter(scroller, slide, "auto");
    updateActiveFromScroll();
  }, [updateActiveFromScroll]);

  useEffect(() => {
    const scroller = scrollerRef.current;
    if (!scroller) return;

    const onScroll = () => {
      if (scrollRaf.current != null) cancelAnimationFrame(scrollRaf.current);
      scrollRaf.current = requestAnimationFrame(() => {
        updateActiveFromScroll();
        scrollRaf.current = null;
      });
    };

    scroller.addEventListener("scroll", onScroll, { passive: true });
    window.addEventListener("resize", onScroll);
    return () => {
      scroller.removeEventListener("scroll", onScroll);
      window.removeEventListener("resize", onScroll);
      if (scrollRaf.current != null) cancelAnimationFrame(scrollRaf.current);
    };
  }, [updateActiveFromScroll]);

  return (
    <section
      id="testimonials"
      aria-labelledby="testimonials-heading"
      className="mt-10 w-full scroll-mt-28 sm:mt-12 md:mt-16 lg:mt-[100px]"
    >
      <div className="mx-auto flex w-full max-w-[1240px] flex-col gap-0 px-4 sm:px-6 md:px-8">
        <SectionHeading title="Testimonials" headingId="testimonials-heading">
          Hear from Our Satisfied Clients: Read Our Testimonials to Learn More about Our
          Digital Marketing Services
        </SectionHeading>

        <div className="overflow-hidden rounded-[45px] bg-brand-dark py-10 sm:py-12 md:py-14">
          <div
            ref={scrollerRef}
            className="flex snap-x snap-mandatory gap-8 overflow-x-auto scroll-smooth pb-2 [-ms-overflow-style:none] [scrollbar-width:none] sm:gap-10 [&::-webkit-scrollbar]:hidden"
          >
            {Array.from({ length: SLIDE_COUNT }).map((_, i) => (
              <div
                key={i}
                ref={(el) => {
                  slideRefs.current[i] = el;
                }}
                className="flex shrink-0 justify-center first:pl-[max(1rem,calc(50%-min(303px,47vw)))] last:pr-[max(1rem,calc(50%-min(303px,47vw)))]"
              >
                <TestimonialSlide />
              </div>
            ))}
          </div>

          <div className="mx-auto mt-10 flex w-full max-w-[564px] items-center justify-between gap-4 px-4 sm:mt-12">
            <button
              type="button"
              className="group flex size-10 shrink-0 cursor-pointer items-center justify-center rounded-full text-white transition-all duration-200 ease-out hover:bg-white disabled:cursor-not-allowed disabled:hover:bg-transparent disabled:opacity-30"
              aria-label="Depoimento anterior"
              disabled={active === 0}
              onClick={() => goTo(active - 1)}
            >
              <Image
                src={ASSETS.arrow}
                alt=""
                width={20}
                height={20}
                className="h-5 w-5 transition-transform group-hover:invert"
              />
            </button>

            <div
              className="flex items-center gap-4"
              role="tablist"
              aria-label="Slides de depoimentos"
            >
              {Array.from({ length: SLIDE_COUNT }).map((_, i) => (
                <button
                  key={i}
                  type="button"
                  role="tab"
                  aria-selected={active === i}
                  aria-label={`Ir para depoimento ${i + 1}`}
                  onClick={() => goTo(i)}
                  className="group flex size-10 shrink-0 cursor-pointer items-center justify-center rounded-full transition-all duration-200 ease-out hover:bg-white focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-brand-lime focus-visible:ring-offset-2 focus-visible:ring-offset-brand-dark"
                >
                  <CarouselNavStar
                    active={active === i}
                    className={active === i ? undefined : "group-hover:text-brand-lime"}
                  />
                </button>
              ))}
            </div>

            <button
              type="button"
              className="group flex size-10 shrink-0 cursor-pointer items-center justify-center rounded-full text-white transition-all duration-200 ease-out hover:bg-white disabled:cursor-not-allowed disabled:hover:bg-transparent disabled:opacity-30"
              aria-label="Próximo depoimento"
              disabled={active === SLIDE_COUNT - 1}
              onClick={() => goTo(active + 1)}
            >
              <Image
                src={ASSETS.arrow}
                alt=""
                width={20}
                height={20}
                className="h-5 w-5 scale-x-[-1] transition-transform group-hover:invert"
              />
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}
