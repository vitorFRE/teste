import Image from "next/image";
import Link from "next/link";

import { cn } from "@/lib/utils";
import { buttonVariants } from "@/src/features/shared/components/ui/button";

export function CtaProposalSection() {
  return (
    <section
      id='quote'
      aria-labelledby='cta-proposal-heading'
      className='mt-8 w-full scroll-mt-28 sm:mt-10 lg:mt-[70px]'
    >
      <div className='mx-auto w-full max-w-[1240px] px-4 sm:px-6 md:px-8'>
        <div className='relative flex min-w-0 flex-col items-stretch gap-8 overflow-visible rounded-[45px] bg-brand-muted lg:flex-row lg:items-stretch lg:gap-0'>
          <div className='relative z-10 flex flex-1 flex-col gap-6 px-6 py-10 sm:px-10 sm:py-12 lg:max-w-[58%] lg:px-[60px] lg:py-14'>
            <h3
              id='cta-proposal-heading'
              className='font-medium text-type-h3 leading-normal text-black md:text-type-h3-dsk md:leading-normal'
            >
              Let&apos;s make things happen
            </h3>
            <p className='max-w-[500px] font-normal text-type-p leading-[24px] text-black md:text-type-p-dsk md:leading-normal'>
              Contact us today to learn more about how our digital marketing services can
              help your business grow and succeed online.
            </p>
            <Link
              href='#contact'
              className={cn(
                buttonVariants({ variant: "dark" }),
                "w-full justify-center lg:inline-flex lg:w-auto"
              )}
            >
              Get your free proposal
            </Link>
          </div>
          <div className='relative hidden overflow-visible lg:flex lg:min-h-0 lg:flex-none lg:basis-[40%] lg:items-center lg:justify-end'>
            <div className='relative flex w-full max-w-[359px] items-center justify-center overflow-visible px-4 pb-6 lg:absolute lg:inset-y-0 lg:right-0 lg:w-[359px] lg:max-w-[359px] lg:items-center lg:justify-end lg:px-0 lg:pb-0'>
              <Image
                  src='/figma/illustrations/Illustration2.png'
                alt='Illustration of a team discussing a marketing proposal'
                width={359}
                height={394}
                className='h-auto w-full max-w-[min(359px,100%)] object-contain lg:h-[394.27px] lg:w-[359px] lg:max-w-[359px]'
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
