import { AsciiLineLogo } from "@/components/brand/AsciiLineLogo";

export function HeroSection() {
  return (
    <section>
      <div className="mx-auto max-w-7xl px-4 pt-8 sm:px-6 sm:pt-12 lg:px-8">
        <div className="border-b border-[#111111] pb-5">
          <AsciiLineLogo variant="full" />
        </div>
      </div>
    </section>
  );
}
