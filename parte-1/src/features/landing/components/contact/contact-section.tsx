"use client";

import Image from "next/image";
import { FormEvent, useState } from "react";

import { cn } from "@/lib/utils";
import { buttonVariants } from "@/src/features/shared/components/ui/button";

import { SectionHeading } from "@/src/features/landing/components/common/section-heading";

type ContactIntent = "hi" | "quote";

function IntentRadio({
  intent,
  value,
  onChange,
  label,
}: {
  intent: ContactIntent;
  value: ContactIntent;
  onChange: (v: ContactIntent) => void;
  label: string;
}) {
  const checked = intent === value;
  return (
    <label className="flex cursor-pointer items-center gap-3 font-normal text-type-h4 leading-normal text-black">
      <input
        type="radio"
        name="intent"
        checked={checked}
        onChange={() => onChange(value)}
        className="peer sr-only"
      />
      <span
        className={cn(
          "box-border flex size-7 shrink-0 items-center justify-center rounded-full border-2 border-black bg-transparent",
          "peer-focus-visible:outline-none peer-focus-visible:ring-2 peer-focus-visible:ring-brand-lime peer-focus-visible:ring-offset-2 peer-focus-visible:ring-offset-brand-muted",
        )}
        aria-hidden
      >
        {checked ? (
          <span className="flex size-6 items-center justify-center rounded-full bg-white">
            <span className="size-[14px] shrink-0 rounded-full bg-brand-lime" aria-hidden />
          </span>
        ) : (
          <span className="size-6 shrink-0 rounded-full bg-brand-muted" aria-hidden />
        )}
      </span>
      {label}
    </label>
  );
}

export function ContactSection() {
  const [intent, setIntent] = useState<ContactIntent>("hi");

  function onSubmit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault();
  }

  return (
    <section
      id="contact"
      aria-labelledby="contact-heading"
      className="mb-12 mt-12 w-full scroll-mt-28 sm:mb-16 sm:mt-16 md:mb-24 md:mt-24 lg:mb-[140px] lg:mt-[140px]"
    >
      <div className="mx-auto flex w-full max-w-[1240px] flex-col gap-0 px-4 sm:px-6 md:px-8">
        <SectionHeading title="Contact Us" headingId="contact-heading">
          Connect with Us: Let&apos;s Discuss Your Digital Marketing Needs
        </SectionHeading>

        <div className="flex min-w-0 flex-col gap-10 overflow-hidden rounded-[45px] bg-brand-muted lg:flex-row lg:items-stretch lg:gap-0">
          <form
            onSubmit={onSubmit}
            className="relative z-10 flex min-w-0 flex-1 flex-col gap-8 px-6 py-10 sm:px-10 sm:py-12 lg:w-[58%] lg:max-w-[720px] lg:flex-none lg:shrink-0 lg:px-[100px] lg:pb-20 lg:pt-[60px]"
          >
            <fieldset className="flex flex-wrap gap-6 gap-x-9 border-0 p-0">
              <legend className="sr-only">Reason for contact</legend>
              <IntentRadio intent={intent} value="hi" onChange={setIntent} label="Say Hi" />
              <IntentRadio intent={intent} value="quote" onChange={setIntent} label="Get a Quote" />
            </fieldset>

            <div className="flex flex-col gap-6">
              <div className="flex flex-col gap-1">
                <label htmlFor="contact-name" className="font-normal text-type-p leading-[24px] text-black md:text-type-p-dsk md:leading-normal">
                  Name
                </label>
                <input
                  id="contact-name"
                  name="name"
                  placeholder="Name"
                  className="rounded-[14px] border border-black bg-white px-[30px] py-[18px] font-normal text-type-h4 text-black placeholder:text-[#898989] focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-black md:text-type-p-dsk md:leading-normal"
                />
              </div>
              <div className="flex flex-col gap-1">
                <label htmlFor="contact-email" className="font-normal text-type-p leading-[24px] text-black md:text-type-p-dsk md:leading-normal">
                  Email*
                </label>
                <input
                  id="contact-email"
                  name="email"
                  type="email"
                  required
                  placeholder="Email"
                  className="rounded-[14px] border border-black bg-white px-[30px] py-[18px] font-normal text-type-h4 text-black placeholder:text-[#898989] focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-black md:text-type-p-dsk md:leading-normal"
                />
              </div>
              <div className="flex flex-col gap-1">
                <label
                  htmlFor="contact-message"
                  className="font-normal text-type-p leading-[24px] text-black md:text-type-p-dsk md:leading-normal"
                >
                  Message*
                </label>
                <textarea
                  id="contact-message"
                  name="message"
                  required
                  rows={5}
                  placeholder="Message"
                  className="min-h-[190px] resize-y rounded-[14px] border border-black bg-white px-[30px] py-[18px] font-normal text-type-h4 text-black placeholder:text-[#898989] focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-black md:text-type-p-dsk md:leading-normal"
                />
              </div>
            </div>

            <button
              type="submit"
              className={cn(
                buttonVariants({ variant: "dark" }),
                "w-full justify-center lg:max-w-[556px]",
              )}
            >
              Send Message
            </button>
          </form>

          <div className="relative hidden min-h-0 min-w-0 flex-1 overflow-hidden lg:flex lg:items-stretch lg:justify-end lg:self-stretch lg:pr-0">
            <div className="relative flex h-full w-full min-h-0 min-w-0 items-center justify-end overflow-hidden">
              <Image
                src="/figma/contact/Illustration3.png"
                alt="Illustration inviting visitors to get in touch with Positivus"
                width={692}
                height={649}
                sizes="(min-width: 1024px) 45vw, 100vw"
                className="h-auto max-h-[649px] w-[min(100%,692px)] max-w-none object-contain object-right lg:h-[min(100%,649px)] lg:w-auto lg:max-w-[692px] lg:translate-x-1/2"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
