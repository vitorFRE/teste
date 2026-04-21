import Link from "next/link";

import { SectionHeading } from "@/src/features/landing/components/common/section-heading";

const CASES = [
  {
    text: "For a local restaurant, we implemented a targeted PPC campaign that resulted in a 50% increase in website traffic and a 25% increase in sales.",
  },
  {
    text: "For a B2B software company, we developed an SEO strategy that resulted in a first page ranking for key keywords and a 200% increase in organic traffic.",
  },
  {
    text: "For a national retail chain, we created a social media marketing campaign that increased followers by 25% and generated a 20% increase in online sales.",
  },
] as const;

export function CaseStudiesSection() {
  return (
    <section
      id="case-studies"
      aria-labelledby="case-studies-heading"
      className="mt-12 w-full scroll-mt-28 sm:mt-16 md:mt-24 lg:mt-[140px]"
    >
      <div className="mx-auto flex w-full max-w-[1240px] flex-col gap-0 px-4 sm:px-6 md:px-8">
        <SectionHeading title="Case Studies" headingId="case-studies-heading">
          Explore Real-Life Examples of Our Proven Digital Marketing Success through Our Case
          Studies
        </SectionHeading>

        <div className="rounded-[45px] bg-brand-dark px-6 py-10 sm:px-10 sm:py-12 md:px-[60px] md:py-[70px]">
          <div className="flex flex-col divide-y divide-white/20 md:flex-row md:divide-x md:divide-y-0">
            {CASES.map((item, i) => (
              <div
                key={i}
                className="flex min-w-0 flex-1 flex-col gap-5 py-8 first:pt-0 last:pb-0 md:px-8 md:py-0 md:first:pl-0 md:last:pr-0"
              >
                <p className="font-normal text-type-h4 leading-normal text-white md:text-type-p-dsk md:leading-normal">
                  {item.text}
                </p>
                <Link
                  href="#services"
                  className="inline-flex cursor-pointer items-center gap-[15px] font-normal text-type-h4-dsk leading-normal text-brand-lime transition-all duration-200 ease-out hover:text-white active:scale-[0.99]"
                >
                  Learn more
                  <svg
                    width="18"
                    height="10"
                    viewBox="0 0 18 10"
                    fill="none"
                    className="shrink-0 -rotate-12"
                    aria-hidden
                  >
                    <path
                      d="M12 1L17 5M17 5L12 9M17 5H1"
                      stroke="currentColor"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                  </svg>
                </Link>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
