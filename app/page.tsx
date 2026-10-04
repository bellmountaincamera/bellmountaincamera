import { ContactCTA } from "@/components/sections/ContactCTA";
import { FilmStripShowcase } from "@/components/sections/FilmStripShowcase";
import { HomeGifCarousel } from "@/components/sections/HomeGifCarousel";
import { CameraCutoutSection } from "@/components/sections/CameraCutoutSection";
import { HeroSection } from "@/components/sections/HeroSection";
import { VisitSection } from "@/components/sections/VisitSection";

export default function Home() {
  return (
    <main>
      <HeroSection />
      <HomeGifCarousel />
      <CameraCutoutSection />
      <ContactCTA cameraOnly />
      <FilmStripShowcase />
      <VisitSection />
    </main>
  );
}
