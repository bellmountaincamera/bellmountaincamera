import { ContactCTA } from "@/components/sections/ContactCTA";
import { EmailSignupSection } from "@/components/sections/EmailSignupSection";
import { FeaturedPhotosCarousel } from "@/components/sections/FeaturedPhotosCarousel";
import { HomeGifCarousel } from "@/components/sections/HomeGifCarousel";
import { HeroSection } from "@/components/sections/HeroSection";
import { VisitSection } from "@/components/sections/VisitSection";

export default function Home() {
  return (
    <main>
      <HeroSection />
      <HomeGifCarousel />
      <FeaturedPhotosCarousel />
      <VisitSection />
      <EmailSignupSection />
      <ContactCTA />
    </main>
  );
}
