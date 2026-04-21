import Link from "next/link";

import { cn } from "@/lib/utils";
import { buttonVariants } from "@/src/features/shared/components/ui/button";

import { SectionHeading } from "@/src/features/landing/components/common/section-heading";

import { TEAM_MEMBERS } from "./team-data";
import { TeamMemberCard } from "./team-member-card";

export function TeamSection() {
  return (
    <section
      id="team"
      aria-labelledby="team-heading"
      className="mt-12 w-full scroll-mt-28 sm:mt-16 md:mt-24 lg:mt-[140px]"
    >
      <div className="mx-auto flex w-full max-w-[1240px] flex-col gap-0 px-4 sm:px-6 md:px-8">
        <SectionHeading title="Team" headingId="team-heading">
          Meet the skilled and experienced team behind our successful digital marketing
          strategies
        </SectionHeading>

        <div className="grid grid-cols-1 justify-items-center gap-[40px] md:grid-cols-2 lg:grid-cols-3">
          {TEAM_MEMBERS.map((m) => (
            <TeamMemberCard key={m.name} member={m} />
          ))}
        </div>

        <div className="mt-10 flex justify-center lg:justify-end">
          <Link
            href="#contact"
            className={cn(
              buttonVariants({ variant: "dark" }),
              "w-full max-w-[269px] justify-center",
            )}
          >
            See all team
          </Link>
        </div>
      </div>
    </section>
  );
}
