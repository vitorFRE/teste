"use client";

import { motion } from "motion/react";
import { useState } from "react";

import { cn } from "@/lib/utils";

import { SectionHeading } from "@/src/features/landing/components/common/section-heading";

const STEPS = [
  {
    number: "01",
    title: "Consultation",
    body: "During the initial consultation, we will discuss your business goals and objectives, target audience, and current marketing efforts. This will allow us to understand your needs and tailor our services to best fit your requirements.",
  },
  {
    number: "02",
    title: "Research and Strategy Development",
    body: "We audit your current channels, competitors, and audience insights, then define a clear roadmap with priorities, KPIs, and timelines so every initiative ties back to measurable business outcomes.",
  },
  {
    number: "03",
    title: "Implementation",
    body: "Our team launches campaigns, updates your site and content, and configures tracking tools. You receive a structured rollout plan with milestones, owners, and quality checks at each step.",
  },
  {
    number: "04",
    title: "Monitoring and Optimization",
    body: "We watch performance daily, run A/B tests where it matters, and reallocate budget and creative based on data—so spend goes toward what actually converts, not guesswork.",
  },
  {
    number: "05",
    title: "Reporting and Communication",
    body: "You get concise reports with context, not just screenshots of charts. We schedule review calls to explain trends, answer questions, and agree on next actions together.",
  },
  {
    number: "06",
    title: "Continual Improvement",
    body: "Marketing is never “done.” We iterate on creatives, keywords, and funnels each quarter, document learnings, and refine the strategy as your market and offers evolve.",
  },
] as const;

function ToggleIcon({ open }: { open: boolean }) {
  return (
    <motion.span
      className="relative flex size-[58px] shrink-0 items-center justify-center rounded-full border border-brand-dark bg-brand-muted"
      aria-hidden
      animate={{ rotate: open ? 180 : 0 }}
      transition={{ type: "spring", stiffness: 260, damping: 22 }}
    >
      <span className="pointer-events-none absolute left-1/2 top-1/2 block h-[2.5px] w-[22px] -translate-x-1/2 -translate-y-1/2 rounded-full bg-brand-dark" />
      <motion.span
        className="pointer-events-none absolute left-1/2 top-1/2 block h-[22px] w-[2.5px] -translate-x-1/2 -translate-y-1/2 rounded-full bg-brand-dark"
        initial={false}
        animate={{
          scaleY: open ? 0 : 1,
          opacity: open ? 0 : 1,
        }}
        transition={{ type: "spring", stiffness: 320, damping: 26 }}
      />
    </motion.span>
  );
}

export function WorkingProcessSection() {
  const [openIndex, setOpenIndex] = useState(0);

  return (
    <section
      id="process"
      aria-labelledby="process-heading"
      className="mt-12 w-full scroll-mt-28 sm:mt-16 md:mt-24 lg:mt-[140px]"
    >
      <div className="mx-auto flex w-full max-w-[1240px] flex-col gap-0 px-4 sm:px-6 md:px-8">
        <SectionHeading title="Our Working Process" headingId="process-heading">
          Step-by-Step Guide to Achieving Your Business Goals
        </SectionHeading>

        <ul className="flex w-full flex-col gap-[30px]">
          {STEPS.map((step, index) => {
            const open = index === openIndex;
            return (
              <li key={step.number}>
                <div
                  className={cn(
                    "rounded-[45px] border border-brand-dark px-6 py-8 shadow-[0px_5px_0px_0px_#191a23] sm:px-[60px] sm:py-[41px]",
                    open ? "bg-brand-lime" : "bg-brand-muted",
                  )}
                >
                  <button
                    type="button"
                    className="flex w-full cursor-pointer items-center justify-between gap-4 text-left"
                    onClick={() => setOpenIndex(open ? -1 : index)}
                    aria-expanded={open}
                  >
                    <span className="flex min-w-0 items-center gap-4 sm:gap-6">
                      <span className="font-medium leading-none text-type-h2-dsk text-black sm:text-type-h1-dsk">
                        {step.number}
                      </span>
                      <span className="font-medium text-type-h3 leading-normal text-black md:text-type-h3-dsk md:leading-normal">
                        {step.title}
                      </span>
                    </span>
                    <ToggleIcon open={open} />
                  </button>
                  {open ? (
                    <>
                      <div className="my-6 h-px w-full bg-brand-dark sm:my-8" />
                      <p className="font-normal text-type-h4 leading-normal text-black md:text-type-p-dsk md:leading-normal">
                        {step.body}
                      </p>
                    </>
                  ) : null}
                </div>
              </li>
            );
          })}
        </ul>
      </div>
    </section>
  );
}
