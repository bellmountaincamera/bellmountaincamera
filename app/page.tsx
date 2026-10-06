import { createPageMetadata } from "@/lib/seo";
import { ContactCTA } from "@/components/sections/ContactCTA";
import { FilmStripShowcase } from "@/components/sections/FilmStripShowcase";
import { HomeGifCarousel } from "@/components/sections/HomeGifCarousel";
import { CameraCutoutSection } from "@/components/sections/CameraCutoutSection";
import { HeroSection } from "@/components/sections/HeroSection";
import { VisitSection } from "@/components/sections/VisitSection";

export const metadata = createPageMetadata({
  title: "Bell Mountain Camera | Film Developing in Apple Valley",
  description:
    "C-41 film developing and scanning for 35mm and 110, used cameras, film stock, and basic camera service in Apple Valley, California’s High Desert.",
  path: "/",
  absoluteTitle: true
});

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
