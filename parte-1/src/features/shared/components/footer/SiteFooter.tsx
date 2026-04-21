import Image from "next/image";
import Link from "next/link";

import { cn } from "@/lib/utils";

import { HEADER_NAV_LINKS } from "../header/nav-links";

const FOOTER_SOCIAL_LINKS = [
  { href: "#contact", label: "LinkedIn", iconSrc: "/figma/social/linkedin.svg" },
  { href: "#contact", label: "Facebook", iconSrc: "/figma/social/facebook.svg" },
  { href: "#contact", label: "Twitter", iconSrc: "/figma/social/twitter.svg" },
] as const;

export function SiteFooter() {
  return (
    <footer className="mt-auto w-full px-4 pt-16 pb-0 sm:px-6 md:px-8">
      <div className="mx-auto w-full max-w-[1240px] rounded-t-[45px] bg-brand-dark px-6 pt-12 pb-0 sm:px-10 sm:pt-14 sm:pb-0 md:px-[60px]">
        <div className="flex flex-col gap-12 lg:gap-16">
          <div className="flex flex-col gap-10 lg:gap-[66px]">
            <div className="flex flex-col items-start gap-8 lg:flex-row lg:items-center lg:justify-between lg:gap-10">
              <Link href="/" className="inline-block" aria-label="Positivus home">
                <Image
                  src="/Logo.svg"
                  alt="Positivus"
                  width={180}
                  height={29}
                  className="h-7 w-auto brightness-0 invert"
                />
              </Link>
              <nav
                className="flex flex-wrap gap-6 font-normal text-type-h4 leading-normal text-white underline decoration-solid underline-offset-4 lg:gap-10"
                aria-label="Footer"
              >
                {HEADER_NAV_LINKS.map((item) => (
                  <Link key={item.href} href={item.href} className="whitespace-nowrap">
                    {item.label}
                  </Link>
                ))}
              </nav>
              <div className="flex gap-3">
                {FOOTER_SOCIAL_LINKS.map(({ href, label, iconSrc }) => (
                  <Link
                    key={label}
                    href={href}
                    className="relative block shrink-0 transition-opacity hover:opacity-90"
                    aria-label={label}
                  >
                    <Image
                      src={iconSrc}
                      alt=""
                      width={30}
                      height={30}
                      className="size-[30px]"
                    />
                  </Link>
                ))}
              </div>
            </div>

            <div className="flex flex-col gap-10 lg:flex-row lg:items-start lg:justify-between lg:gap-16">
              <div className="flex min-w-0 flex-col gap-6 lg:max-w-[min(100%,480px)]">
                <span className="inline-block w-fit rounded-[7px] bg-brand-lime px-[7px] font-medium text-type-h4-dsk leading-normal text-black">
                  Contact us:
                </span>
                <address className="flex flex-col gap-5 font-normal text-type-h4 leading-normal not-italic text-white md:text-type-p-dsk md:leading-normal">
                  <p>Email: info@positivus.com</p>
                  <p>Phone: 555-567-8901</p>
                  <p>
                    Address: 1234 Main St
                    <br />
                    Moonstone City, Stardust State 12345
                  </p>
                </address>
              </div>

              <div className="flex w-full max-w-[600px] shrink-0 flex-col gap-4 rounded-[14px] bg-[#292a32] px-6 py-8 sm:flex-row sm:items-center sm:gap-5 sm:px-10 sm:py-[58px] lg:ml-auto lg:w-full lg:max-w-[600px]">
                <input
                  type="email"
                  placeholder="Email"
                  className="min-h-[52px] w-full rounded-[14px] border border-white bg-transparent px-[35px] py-[22px] font-normal text-type-h4 leading-normal text-white placeholder:text-white focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-white sm:max-w-[285px] md:text-type-p-dsk"
                />
                <button
                  type="button"
                  className={cn(
                    "inline-flex h-[68px] shrink-0 cursor-pointer items-center justify-center rounded-[14px] border border-transparent bg-brand-lime px-[35px] font-normal text-type-h4-dsk leading-normal text-black transition-all duration-200 ease-out hover:border-black hover:bg-white hover:text-black active:scale-[0.99]",
                  )}
                >
                  Subscribe to news
                </button>
              </div>
            </div>
          </div>

          <div className="border-t border-white/20 py-[50px]">
            <div className="flex flex-col gap-4 font-normal text-type-h4 leading-normal text-white sm:flex-row sm:gap-10 md:text-type-p-dsk md:leading-normal">
              <p>© {new Date().getFullYear()} Positivus. All Rights Reserved.</p>
              <Link href="#contact" className="underline decoration-solid underline-offset-4">
                Privacy Policy
              </Link>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
