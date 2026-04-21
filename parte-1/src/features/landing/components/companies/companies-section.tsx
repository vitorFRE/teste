import {
  InfiniteCompanyLogos,
  type CompanyLogoItem,
} from "./infinite-company-logos";

const COMPANIES: CompanyLogoItem[] = [
  {
    name: "amazon",
    src: "/figma/companies/Amazon.svg",
    alt: "Amazon",
    width: 125,
    height: 48,
  },
  {
    name: "dribbble",
    src: "/figma/companies/dribbble.svg",
    alt: "Dribbble",
    width: 127,
    height: 48,
  },
  {
    name: "hubspot",
    src: "/figma/companies/Hubspot.svg",
    alt: "HubSpot",
    width: 129,
    height: 48,
  },
  {
    name: "notion",
    src: "/figma/companies/notion.svg",
    alt: "Notion",
    width: 146,
    height: 48,
  },
  {
    name: "netflix",
    src: "/figma/companies/netflix.svg",
    alt: "Netflix",
    width: 126,
    height: 48,
  },
  {
    name: "zoom",
    src: "/figma/companies/zoom.svg",
    alt: "Zoom",
    width: 111,
    height: 48,
  },
];

const COMPANIES_ROW_1 = COMPANIES.slice(0, 3);
const COMPANIES_ROW_2 = COMPANIES.slice(3, 6);

export function CompaniesSection() {
  return (
    <section
      className="mb-8 mt-10 w-full bg-white sm:mb-10 sm:mt-12 md:mb-12 md:mt-16 lg:mb-[10px] lg:mt-[70px]"
      aria-label="Partner companies"
    >
      <div className="mx-auto flex w-full max-w-[1240px] min-w-0 flex-col items-center px-4 sm:px-6 md:px-8">
        <div className="flex w-full flex-col gap-6 md:hidden">
          <InfiniteCompanyLogos
            items={COMPANIES_ROW_1}
            direction="left"
            speed="slow"
            className="max-w-none"
          />
          <InfiniteCompanyLogos
            items={COMPANIES_ROW_2}
            direction="left"
            speed="slow"
            className="max-w-none"
          />
        </div>

        <InfiniteCompanyLogos
          items={COMPANIES}
          direction="left"
          speed="slow"
          className="hidden max-w-none md:block"
        />
      </div>
    </section>
  );
}
