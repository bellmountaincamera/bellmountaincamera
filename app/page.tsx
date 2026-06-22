import { ContactCTA } from "@/components/sections/ContactCTA";
import { HeroSection } from "@/components/sections/HeroSection";
import { ServicesGrid } from "@/components/sections/ServicesGrid";
import { VisitSection } from "@/components/sections/VisitSection";

export default function Home() {
  return (
    <main>
      <HeroSection />
      <ServicesGrid />
      <VisitSection />
      <ContactCTA />
    </main>
  );
}
