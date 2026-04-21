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
      viewBox="0 0 14 14"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className={cn(
        "size-3 shrink-0 sm:size-[14px]",
        active ? "text-brand-lime" : "text-white",
        className,
      )}
      aria-hidden
    >
      <path d={ASSETS.starPath} fill="currentColor" />
    </svg>
  );
}

const TESTIMONIALS = [
  {
    quote:
      '"We have been working with Positivus for the past year and have seen a significant increase in website traffic and leads as a result of their efforts. The team is professional, responsive, and truly cares about the success of our business. We highly recommend Positivus to any company looking to grow their online presence."',
    name: "John Smith",
    role: "Marketing Director at XYZ Corp",
  },
  {
    quote:
      '"Positivus helped us rebuild our funnel end-to-end. Campaign reporting is clearer, and we finally have a predictable pipeline. Communication was excellent week to week."',
    name: "Sarah Chen",
    role: "Head of Growth at Northline",
  },
  {
    quote:
      '"From SEO to paid social, the work was thoughtful and data-driven. Our cost per lead dropped within two quarters, and the creative stayed on-brand across every channel."',
    name: "Marcus Webb",
    role: "COO at Brightfield Studio",
  },
  {
    quote:
      '"They treated our launch like their own. Fast iterations, honest feedback, and measurable outcomes. We would partner with them again without hesitation."',
    name: "Elena Rossi",
    role: "Founder at Loop & Co",
  },
  {
    quote:
      '"Our site performance and conversion rate both improved after the engagement. The team is structured, easy to work with, and focused on results—not vanity metrics."',
    name: "David Okonkwo",
    role: "VP Digital at Apex Retail",
  },
] as const;

const SLIDE_COUNT = TESTIMONIALS.length;

function scrollSlideToCenter(
  scroller: HTMLDivElement,
  slide: HTMLElement,
  behavior: "auto" | "smooth",
) {
  const scrollerRect = scroller.getBoundingClientRect();
  const slideRect = slide.getBoundingClientRect();
  const scrollerCenter = scrollerRect.left + scroller.clientWidth / 2;
  const slideCenter = slideRect.left + slideRect.width / 2;
  const delta = slideCenter - scrollerCenter;
  const nextLeft = scroller.scrollLeft + delta;
  const maxScroll = Math.max(0, scroller.scrollWidth - scroller.clientWidth);
  scroller.scrollTo({
    left: Math.min(maxScroll, Math.max(0, nextLeft)),
    behavior,
  });
}

function TestimonialSlide({
  quote,
  name,
  role,
}: {
  quote: string;
  name: string;
  role: string;
}) {
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
            {quote}
          </p>
        </div>
      </div>
      <div className="w-full max-w-[526px] self-end px-1 text-left sm:text-right">
        <p className="font-medium text-type-h4-dsk text-brand-lime">{name}</p>
        <p className="mt-1 font-normal text-type-h4 text-white md:text-type-p-dsk md:leading-normal">
          {role}
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
  const programmaticScrollRef = useRef(false);
  const programmaticScrollTimeoutRef = useRef<ReturnType<typeof setTimeout> | null>(null);

  const updateActiveFromScroll = useCallback(() => {
    const scroller = scrollerRef.current;
    if (!scroller) return;
    if (programmaticScrollRef.current) return;

    const maxScroll = Math.max(0, scroller.scrollWidth - scroller.clientWidth);
    const edgeEps = 2;
    if (maxScroll <= edgeEps) {
      setActive(0);
      return;
    }
    if (scroller.scrollLeft <= edgeEps) {
      setActive(0);
      return;
    }
    if (scroller.scrollLeft >= maxScroll - edgeEps) {
      setActive(SLIDE_COUNT - 1);
      return;
    }

    const scrollerRect = scroller.getBoundingClientRect();
    const centerX = scrollerRect.left + scroller.clientWidth / 2;
    let best = 0;
    let bestDist = Infinity;
    slideRefs.current.forEach((el, i) => {
      if (!el) return;
      const r = el.getBoundingClientRect();
      const mid = r.left + r.width / 2;
      const d = Math.abs(centerX - mid);
      if (d < bestDist) {
        bestDist = d;
        best = i;
      }
    });
    setActive(best);
  }, []);

  const goTo = useCallback(
    (index: number) => {
      const next = Math.max(0, Math.min(SLIDE_COUNT - 1, index));
      const scroller = scrollerRef.current;
      const slide = slideRefs.current[next];
      if (!scroller || !slide) return;
      if (programmaticScrollTimeoutRef.current != null) {
        clearTimeout(programmaticScrollTimeoutRef.current);
        programmaticScrollTimeoutRef.current = null;
      }
      programmaticScrollRef.current = true;
      setActive(next);
      scrollSlideToCenter(scroller, slide, "smooth");
      programmaticScrollTimeoutRef.current = setTimeout(() => {
        programmaticScrollTimeoutRef.current = null;
        programmaticScrollRef.current = false;
        updateActiveFromScroll();
      }, 500);
    },
    [updateActiveFromScroll],
  );

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

    const endProgrammaticScroll = () => {
      if (programmaticScrollTimeoutRef.current != null) {
        clearTimeout(programmaticScrollTimeoutRef.current);
        programmaticScrollTimeoutRef.current = null;
      }
      programmaticScrollRef.current = false;
      updateActiveFromScroll();
    };

    const onScroll = () => {
      if (scrollRaf.current != null) cancelAnimationFrame(scrollRaf.current);
      scrollRaf.current = requestAnimationFrame(() => {
        updateActiveFromScroll();
        scrollRaf.current = null;
      });
    };

    scroller.addEventListener("scroll", onScroll, { passive: true });
    scroller.addEventListener("scrollend", endProgrammaticScroll);
    window.addEventListener("resize", onScroll);
    return () => {
      scroller.removeEventListener("scroll", onScroll);
      scroller.removeEventListener("scrollend", endProgrammaticScroll);
      window.removeEventListener("resize", onScroll);
      if (scrollRaf.current != null) cancelAnimationFrame(scrollRaf.current);
      if (programmaticScrollTimeoutRef.current != null) {
        clearTimeout(programmaticScrollTimeoutRef.current);
        programmaticScrollTimeoutRef.current = null;
      }
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
            className="relative flex snap-x snap-mandatory gap-8 overflow-x-auto scroll-smooth pb-2 [-ms-overflow-style:none] [scrollbar-width:none] sm:gap-10 [&::-webkit-scrollbar]:hidden"
          >
            {TESTIMONIALS.map((item, i) => (
              <div
                key={`${item.name}-${i}`}
                ref={(el) => {
                  slideRefs.current[i] = el;
                }}
                className="flex shrink-0 justify-center first:pl-[max(1rem,calc(50%-min(303px,47vw)))] last:pr-[max(1rem,calc(50%-min(303px,47vw)))]"
              >
                <TestimonialSlide quote={item.quote} name={item.name} role={item.role} />
              </div>
            ))}
          </div>

          <div className="mx-auto mt-10 flex w-full max-w-[564px] items-center justify-between gap-1.5 px-3 sm:mt-12 sm:gap-4 sm:px-4">
            <button
              type="button"
              className="group flex size-9 shrink-0 cursor-pointer items-center justify-center rounded-full text-white transition-all duration-200 ease-out hover:bg-white disabled:cursor-not-allowed disabled:hover:bg-transparent disabled:opacity-30 sm:size-10"
              aria-label="Depoimento anterior"
              disabled={active === 0}
              onClick={() => goTo(active - 1)}
            >
              <Image
                src={ASSETS.arrow}
                alt=""
                width={20}
                height={20}
                className="h-4 w-4 transition-transform group-hover:invert sm:h-5 sm:w-5"
              />
            </button>

            <div
              className="flex min-w-0 flex-1 justify-center sm:flex-none"
            >
              <div
                className="flex max-w-full items-center justify-center gap-1 overflow-x-auto overflow-y-hidden py-1 [-ms-overflow-style:none] [scrollbar-width:none] sm:gap-4 sm:overflow-visible sm:py-0 [&::-webkit-scrollbar]:hidden"
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
                    className="group flex size-8 shrink-0 cursor-pointer items-center justify-center rounded-full transition-all duration-200 ease-out hover:bg-white focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-brand-lime focus-visible:ring-offset-2 focus-visible:ring-offset-brand-dark sm:size-10"
                  >
                    <CarouselNavStar
                      active={active === i}
                      className={active === i ? undefined : "group-hover:text-brand-lime"}
                    />
                  </button>
                ))}
              </div>
            </div>

            <button
              type="button"
              className="group flex size-9 shrink-0 cursor-pointer items-center justify-center rounded-full text-white transition-all duration-200 ease-out hover:bg-white disabled:cursor-not-allowed disabled:hover:bg-transparent disabled:opacity-30 sm:size-10"
              aria-label="Próximo depoimento"
              disabled={active === SLIDE_COUNT - 1}
              onClick={() => goTo(active + 1)}
            >
              <Image
                src={ASSETS.arrow}
                alt=""
                width={20}
                height={20}
                className="h-4 w-4 scale-x-[-1] transition-transform group-hover:invert sm:h-5 sm:w-5"
              />
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}
