import { HeroSection } from "./components/landing/hero-section";
import { LandingSections } from "./components/landing/landing-sections";
import { SiteFooter } from "./components/landing/site-footer";
import { SiteHeader } from "./components/landing/site-header";

export default function Home() {
  return (
    <div className='min-h-screen bg-zinc-950 text-white'>
      <SiteHeader />
      <HeroSection />
      <LandingSections />
      <SiteFooter />
    </div>
  );
}
