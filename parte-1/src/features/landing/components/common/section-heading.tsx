import type { ReactNode } from "react";

import { cn } from "@/lib/utils";

type SectionHeadingProps = {
  title: string;
  headingId?: string;
  className?: string;
  children: ReactNode;
};

export function SectionHeading({
  title,
  headingId,
  className,
  children,
}: SectionHeadingProps) {
  return (
    <div
      className={cn(
        "mb-8 flex w-full min-w-0 flex-col gap-6 md:mb-10 md:flex-row md:items-start md:gap-8 lg:mb-[80px] lg:gap-10",
        className,
      )}
    >
      <div className='shrink-0'>
        <h2
          id={headingId}
          className='m-0 inline-block rounded-[7px] bg-brand-lime px-[7px] py-0 font-medium text-type-h2 leading-normal text-black md:text-type-h2-dsk md:leading-normal'
        >
          {title}
        </h2>
      </div>
      <p className='m-0 max-w-[580px] font-normal text-type-p leading-[24px] text-black md:text-type-p-dsk md:leading-normal'>
        {children}
      </p>
    </div>
  );
}
