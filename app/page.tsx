import { ContactCTA } from "@/components/sections/ContactCTA";
import { HeroSection } from "@/components/sections/HeroSection";
import { VisitSection } from "@/components/sections/VisitSection";

export default function Home() {
  return (
    <main>
      <HeroSection />
      <VisitSection />
      <ContactCTA />
    </main>
  );
}
