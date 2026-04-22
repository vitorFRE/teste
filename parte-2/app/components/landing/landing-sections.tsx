import { ExpertsSection } from "@/app/components/landing/sections/experts-section";
import { FaqSection } from "@/app/components/landing/sections/faq-section";
import { PricingSection } from "@/app/components/landing/sections/pricing-section";
import { ProjectsSection } from "@/app/components/landing/sections/projects-section";
import { TrailsSection } from "@/app/components/landing/sections/trails-section";
import { ValueSection } from "@/app/components/landing/sections/value-section";

export function LandingSections() {
  return (
    <>
      <ValueSection />
      <TrailsSection />
      <ProjectsSection />
      <ExpertsSection />
      <PricingSection />
      <FaqSection />
    </>
  );
}
