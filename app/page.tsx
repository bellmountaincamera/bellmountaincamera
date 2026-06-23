import { ContactCTA } from "@/components/sections/ContactCTA";
import { HomeGifCarousel } from "@/components/sections/HomeGifCarousel";
import { HeroSection } from "@/components/sections/HeroSection";
import { VisitSection } from "@/components/sections/VisitSection";

export default function Home() {
  return (
    <main>
      <HeroSection />
      <HomeGifCarousel />
      <VisitSection />
      <ContactCTA />
    </main>
  );
}
