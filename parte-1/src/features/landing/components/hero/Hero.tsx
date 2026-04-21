import Image from "next/image";
import Link from "next/link";

import { cn } from "@/lib/utils";
import { buttonVariants } from "@/src/features/shared/components/ui/button";

export function Hero() {
  return (
    <section aria-labelledby="hero-heading" className="mt-14 w-full sm:mt-16 lg:mt-[70px]">
      <div className="mx-auto grid min-w-0 w-full max-w-[1240px] grid-cols-1 gap-y-[35px] px-4 pb-8 sm:px-6 sm:pb-10 md:px-8 lg:grid-cols-2 lg:gap-x-16 lg:pb-0">
        <h1
          id="hero-heading"
          className="w-full max-w-full text-pretty text-type-h1 text-black md:text-type-h1-dsk lg:col-start-1 lg:row-start-1 lg:max-w-[531px]"
        >
          Navigating the digital landscape for success
        </h1>

        <div
          className={cn(
            "flex w-full min-w-0 justify-center justify-self-stretch",
            "lg:col-start-2 lg:row-span-3 lg:row-start-1 lg:block lg:max-w-none lg:justify-self-end lg:self-center",
          )}
        >
          <div
            className={cn(
              "flex w-full max-h-[515px] min-h-0 max-w-[600px] items-center justify-center",
              "mx-auto lg:ml-auto lg:mr-0",
            )}
          >
            <Image
              src="/figma/illustrations/Illustration.svg"
              alt=""
              width={601}
              height={515}
              priority
              className="h-auto max-h-full w-full object-contain object-center"
            />
          </div>
        </div>

        <p className="w-full max-w-full text-pretty font-normal text-type-h4 leading-normal text-black md:text-type-h4-dsk md:leading-normal lg:col-start-1 lg:row-start-2 lg:max-w-[498px]">
          Our digital marketing agency helps businesses grow and succeed online
          through a range of services including SEO, PPC, social media marketing,
          and content creation.
        </p>

        <div className="w-full min-w-0 lg:col-start-1 lg:row-start-3 lg:w-auto">
          <Link
            href="#consultation"
            className={cn(
              buttonVariants({ variant: "dark" }),
              "w-full justify-center lg:inline-flex lg:w-auto",
            )}
          >
            Book a consultation
          </Link>
        </div>
      </div>
    </section>
  );
}
