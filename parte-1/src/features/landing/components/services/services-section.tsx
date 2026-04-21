import type { ComponentProps } from "react";

import { SectionHeading } from "@/src/features/landing/components/common/section-heading";

import { ServiceCard } from "./service-card";

const ROWS: {
  cards: ComponentProps<typeof ServiceCard>[];
}[] = [
  {
    cards: [
      {
        title: ["Search engine", "optimization"],
        titleLineStyles: ["lime", "lime"],
        variant: "grey",
        imageSrc: "/figma/illustrations/tokyo/tokyo-magnifier-web-search-with-elements-2.svg",
        imageWidth: 210,
        imageHeight: 170,
      },
      {
        title: ["Pay-per-click", "advertising"],
        titleLineStyles: ["white", "white"],
        variant: "lime",
        imageSrc: "/figma/illustrations/tokyo/tokyo-selecting-a-value-in-the-browser-window-1.svg",
        imageWidth: 210,
        imageHeight: 148,
      },
    ],
  },
  {
    cards: [
      {
        title: ["Social Media", "Marketing"],
        titleLineStyles: ["white", "white"],
        variant: "dark",
        imageSrc: "/figma/illustrations/tokyo/tokyo-browser-window-with-emoticon-likes-and-stars-around-2.svg",
        imageWidth: 210,
        imageHeight: 210,
      },
      {
        title: ["Email", "Marketing"],
        titleLineStyles: ["lime", "lime"],
        variant: "grey",
        imageSrc: "/figma/illustrations/tokyo/tokyo-sending-messages-from-one-place-to-another-1.svg",
        imageWidth: 210,
        imageHeight: 193,
        flipImage: true,
      },
    ],
  },
  {
    cards: [
      {
        title: ["Content", "Creation"],
        titleLineStyles: ["white", "white"],
        variant: "lime",
        imageSrc: "/figma/illustrations/tokyo/tokyo-many-browser-windows-with-different-information-1.svg",
        imageWidth: 210,
        imageHeight: 196,
      },
      {
        title: ["Analytics and ", "Tracking"],
        titleLineStyles: ["lime", "lime"],
        variant: "dark",
        imageSrc: "/figma/illustrations/tokyo/tokyo-volumetric-analytics-of-different-types-in-web-browsers-2.svg",
        imageWidth: 210,
        imageHeight: 170,
      },
    ],
  },
];

export function ServicesSection() {
  return (
    <section
      id="services"
      aria-labelledby="services-heading"
      className="mt-8 w-full scroll-mt-28 sm:mt-10 lg:mt-[70px]"
    >
      <div className="mx-auto flex w-full max-w-[1240px] flex-col gap-0 px-4 sm:px-6 md:px-8">
        <SectionHeading title="Services" headingId="services-heading">
          At our digital marketing agency, we offer a range of services to help businesses
          grow and succeed online. These services include:
        </SectionHeading>

        <div className="flex flex-col gap-8 lg:gap-10">
          {ROWS.map((row, rowIdx) => (
            <div
              key={rowIdx}
              className="grid grid-cols-1 gap-8 lg:grid-cols-2 lg:gap-10"
            >
              {row.cards.map((card, i) => (
                <ServiceCard key={`${rowIdx}-${i}`} {...card} />
              ))}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
