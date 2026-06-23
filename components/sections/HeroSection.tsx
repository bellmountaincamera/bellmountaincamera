import Image from "next/image";
import { AsciiLineLogo } from "@/components/brand/AsciiLineLogo";
import { CTAButton } from "@/components/ui/CTAButton";
import { site } from "@/lib/site";

export function HeroSection() {
  return (
    <section className="border-b border-[#111111]/15">
      <div className="mx-auto grid max-w-7xl gap-8 px-4 py-10 sm:px-6 sm:py-16 lg:grid-cols-[1fr_0.78fr] lg:px-8">
        <div className="flex flex-col justify-center">
          <div className="mb-6 border-b border-[#111111] pb-5">
            <AsciiLineLogo variant="full" />
          </div>
          <h1 className="max-w-4xl text-4xl font-semibold uppercase leading-[0.96] tracking-[0.01em] sm:text-6xl lg:text-7xl">
            Film cameras and film development in Apple Valley.
          </h1>
          <p className="mt-5 max-w-2xl text-base leading-7 text-[#111111]">
            {site.name} is a High Desert film camera shop and film lab inside
            Wild Goose Vintage & Thrift Store.
          </p>
          <div className="mt-8 flex flex-col gap-3 sm:flex-row">
            <CTAButton href="/contact">Visit the Shop</CTAButton>
            <CTAButton href="/lab" variant="secondary">
              Film Lab
            </CTAButton>
            <CTAButton href="/shop" variant="secondary">
              Shop Preview
            </CTAButton>
          </div>
        </div>
        <div className="border border-[#111111] bg-[#FFFFFF] p-3">
          <div className="photo-grain relative aspect-[4/3] border border-[#111111]/20 bg-[#111111]">
            <Image
              src="/images/home-camera-counter.jpg"
              alt="Hands holding a Nikon Nikkormat film camera over a counter of used cameras"
              fill
              priority
              sizes="(min-width: 1024px) 38vw, 100vw"
              className="object-cover"
            />
          </div>
          <div className="mono mt-3 grid grid-cols-2 gap-2 text-[0.68rem] uppercase tracking-[0.12em] text-[#0B3D91] sm:grid-cols-4">
            <span>35MM</span>
            <span>USED CAMERAS</span>
            <span>APPLE VALLEY</span>
            <span>SHOP COUNTER</span>
          </div>
        </div>
      </div>
    </section>
  );
}
