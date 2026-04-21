import { HeroSection } from "./components/landing/hero-section";
import { SiteHeader } from "./components/landing/site-header";

export default function Home() {
  return (
    <div className="min-h-screen bg-black text-white">
      <SiteHeader />
      <HeroSection />
    </div>
  );
}
