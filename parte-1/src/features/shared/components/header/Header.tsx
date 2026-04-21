"use client";

import Image from "next/image";
import Link from "next/link";
import { useEffect, useState } from "react";

import { cn } from "@/lib/utils";
import { buttonVariants } from "@/src/features/shared/components/ui/button";

import { HEADER_NAV_LINKS } from "./nav-links";

/** Tabler Icons: outline / menu-2 (MIT) */
function IconMenu2({ className }: { className?: string }) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width={24}
      height={24}
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth={2}
      strokeLinecap="round"
      strokeLinejoin="round"
      className={className}
      aria-hidden
    >
      <path d="M0 0h24v24H0z" fill="none" stroke="none" />
      <path d="M4 6h16" />
      <path d="M4 12h16" />
      <path d="M4 18h16" />
    </svg>
  );
}

export function Header() {
  const [isPinned, setIsPinned] = useState(false);

  useEffect(() => {
    const update = () => {
      setIsPinned(window.scrollY > 2);
    };
    update();
    window.addEventListener("scroll", update, { passive: true });
    return () => window.removeEventListener("scroll", update);
  }, []);

  return (
    <header
      className={cn(
        "sticky top-0 z-50 mt-4 w-full border-b bg-white/80 text-black backdrop-blur-md transition-[box-shadow,border-color,padding,background-color] duration-200 md:mt-[60px]",
        isPinned ? "py-1" : "py-0",
        isPinned
          ? "border-black/10 shadow-[0_12px_32px_-16px_rgba(25,26,35,0.18)]"
          : "border-transparent shadow-none",
      )}
    >
      <div
        className={cn(
          "mx-auto flex min-h-0 w-full max-w-[1240px] items-center px-4 sm:px-6 md:px-8",
          isPinned ? "min-h-[68px]" : "h-[68px] max-h-[68px]",
        )}
      >
        <div className='flex min-w-0 flex-1 justify-start'>
          <Link href='/' className='inline-flex shrink-0' aria-label='Positivus home'>
            <Image
              src='/Logo.svg'
              alt='Positivus'
              width={220}
              height={36}
              priority
              className='h-8 w-auto sm:h-9'
            />
          </Link>
        </div>

        <nav
          className='hidden flex-1 justify-center gap-8 font-normal text-type-h4-dsk leading-normal tracking-normal text-black min-[1230px]:flex min-[1230px]:gap-10'
          aria-label='Primary'
        >
          {HEADER_NAV_LINKS.map((item) => (
            <Link
              key={item.href}
              href={item.href}
              className='whitespace-nowrap transition-opacity hover:opacity-70'
            >
              {item.label}
            </Link>
          ))}
        </nav>

        <div className='flex flex-1 items-center justify-end gap-3'>
          <Link
            href='#quote'
            className={cn(
              buttonVariants({ variant: "outline" }),
              "hidden min-[1230px]:inline-flex",
            )}
          >
            Request a quote
          </Link>

          <details className='relative min-[1230px]:hidden'>
            <summary
              className='flex size-10 cursor-pointer list-none items-center justify-center rounded-[10px] border border-black text-black [&::-webkit-details-marker]:hidden focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-black'
              aria-label='Open menu'
            >
              <IconMenu2 className='size-6 shrink-0' />
            </summary>
            <div className='absolute right-0 mt-2 w-56 rounded-[10px] border border-black/10 bg-white/95 py-2 shadow-lg backdrop-blur-md'>
              <nav className='flex flex-col' aria-label='Primary mobile'>
                {HEADER_NAV_LINKS.map((item) => (
                  <Link
                    key={item.href}
                    href={item.href}
                    className='px-4 py-2.5 font-normal text-type-h4-dsk leading-normal tracking-normal text-black hover:bg-brand-muted'
                  >
                    {item.label}
                  </Link>
                ))}
                <Link
                  href='#quote'
                  className={cn(
                    buttonVariants({ variant: "outline" }),
                    "mx-2 mt-1 flex w-auto",
                  )}
                >
                  Request a quote
                </Link>
              </nav>
            </div>
          </details>
        </div>
      </div>
    </header>
  );
}
