import { CameraServicesSection } from "@/components/sections/CameraServicesSection";
import { ContactCTA } from "@/components/sections/ContactCTA";
import { FilmLabSection } from "@/components/sections/FilmLabSection";
import { HeroSection } from "@/components/sections/HeroSection";
import { ServicesGrid } from "@/components/sections/ServicesGrid";
import { ShopPreviewSection } from "@/components/sections/ShopPreviewSection";
import { VisitSection } from "@/components/sections/VisitSection";

export default function Home() {
  return (
    <main>
      <HeroSection />
      <ServicesGrid />
      <VisitSection />
      <ShopPreviewSection />
      <FilmLabSection />
      <CameraServicesSection />
      <ContactCTA />
    </main>
  );
}
