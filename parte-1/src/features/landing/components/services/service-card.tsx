import Image from "next/image";
import Link from "next/link";

import { cn } from "@/lib/utils";

function LearnMoreLink({
  inverted,
  href = "#services",
}: {
  inverted?: boolean;
  href?: string;
}) {
  return (
    <p className='m-0'>
      <Link
        href={href}
        className={cn(
          "inline-flex cursor-pointer items-center gap-[15px] font-normal text-type-p leading-[24px] transition-all duration-200 ease-out active:scale-[0.99] md:text-type-p-dsk md:leading-normal",
          inverted ? "text-white hover:text-white/90" : "text-black hover:opacity-90",
        )}
      >
        <span
          className={cn(
            "flex size-[41px] shrink-0 items-center justify-center rounded-full transition-all duration-200 ease-out",
            inverted
              ? "bg-white text-black hover:bg-brand-lime"
              : "bg-brand-lime text-black hover:bg-white",
          )}
          aria-hidden
        >
          <svg width="18" height="18" viewBox="0 0 24 24" fill="none" aria-hidden>
            <path
              d="M7 17L17 7M17 7H9M17 7V15"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
          </svg>
        </span>
        Learn more
      </Link>
    </p>
  );
}

export type ServiceCardVariant = "grey" | "lime" | "dark";

type TitleLineStyle = "lime" | "white";

export type ServiceCardProps = {
  title: [string, string];
  titleLineStyles: [TitleLineStyle, TitleLineStyle];
  variant: ServiceCardVariant;
  imageSrc: string;
  imageWidth: number;
  imageHeight: number;
  imageClassName?: string;
  imageContainerClassName?: string;
  flipImage?: boolean;
};

export function ServiceCard({
  title,
  titleLineStyles,
  variant,
  imageSrc,
  imageWidth,
  imageHeight,
  imageClassName,
  imageContainerClassName,
  flipImage,
}: ServiceCardProps) {
  const bg =
    variant === "grey"
      ? "bg-brand-muted"
      : variant === "lime"
        ? "bg-brand-lime"
        : "bg-brand-dark";

  const line = (text: string, style: TitleLineStyle) => (
    <span
      className={cn(
        "inline-flex rounded-[7px] px-[7px] font-medium text-type-h3 leading-normal text-black md:text-type-h3-dsk md:leading-normal",
        style === "lime" ? "bg-brand-lime" : "bg-white",
      )}
    >
      {text}
    </span>
  );

  return (
    <article
      className={cn(
        "flex min-h-0 w-full min-w-0 flex-col gap-8 rounded-[45px] border border-brand-dark p-8 shadow-[0px_5px_0px_0px_#191a23] sm:flex-row sm:items-center sm:justify-between sm:gap-6 sm:p-[50px] lg:min-h-[310px]",
        bg,
      )}
    >
      <div className="flex min-w-0 flex-col gap-10 sm:gap-[93px]">
        <h3 className="m-0 flex flex-col items-start gap-2">
          {line(title[0], titleLineStyles[0])}
          {line(title[1], titleLineStyles[1])}
        </h3>
        <LearnMoreLink inverted={variant === "dark"} />
      </div>
      <div
        className={cn(
          "relative mx-auto flex w-full max-w-[210px] shrink-0 items-center justify-center sm:mx-0",
          imageContainerClassName,
        )}
      >
        <div className={cn(flipImage && "-scale-y-100 rotate-180")}>
          <Image
            src={imageSrc}
            alt=""
            width={imageWidth}
            height={imageHeight}
            className={cn("h-auto w-full object-contain", imageClassName)}
          />
        </div>
      </div>
    </article>
  );
}
