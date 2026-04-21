import { CaseStudiesSection } from "@/src/features/landing/components/case-studies/case-studies-section";
import { CompaniesSection } from "@/src/features/landing/components/companies/companies-section";
import { ContactSection } from "@/src/features/landing/components/contact/contact-section";
import { CtaProposalSection } from "@/src/features/landing/components/cta/cta-proposal-section";
import { Hero } from "@/src/features/landing/components/hero/Hero";
import { ServicesSection } from "@/src/features/landing/components/services/services-section";
import { TeamSection } from "@/src/features/landing/components/team/team-section";
import { TestimonialsSection } from "@/src/features/landing/components/testimonials/testimonials-section";
import { WorkingProcessSection } from "@/src/features/landing/components/working-process/working-process-section";
import { SiteFooter } from "@/src/features/shared/components/footer/SiteFooter";

export default function Home() {
  return (
    <>
      <main className="flex flex-1 flex-col">
        <Hero />
        <CompaniesSection />
        <ServicesSection />
        <CtaProposalSection />
        <CaseStudiesSection />
        <WorkingProcessSection />
        <TeamSection />
        <TestimonialsSection />
        <ContactSection />
      </main>
      <SiteFooter />
    </>
  );
}
