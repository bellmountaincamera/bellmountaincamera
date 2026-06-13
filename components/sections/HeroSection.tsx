import Image from "next/image";
import { AsciiBlockLogo } from "@/components/brand/AsciiBlockLogo";
import { TerminalStatusPanel } from "@/components/brand/TerminalStatusPanel";
import { CTAButton } from "@/components/ui/CTAButton";
import { MetadataLine } from "@/components/ui/MetadataLine";
import { TerminalLabel } from "@/components/ui/TerminalLabel";
import { sampleRoll, site } from "@/lib/site";

export function HeroSection() {
  return (
    <section className="border-b border-[#D8D8D2]">
      <div className="mx-auto grid max-w-7xl gap-8 px-4 py-10 sm:px-6 sm:py-16 lg:grid-cols-[0.9fr_1.1fr] lg:px-8">
        <div className="flex flex-col justify-center">
          <TerminalLabel>PUBLIC FILE / BMC-001</TerminalLabel>
          <h1 className="mt-5 text-5xl font-semibold uppercase leading-[0.92] tracking-[0.01em] sm:text-7xl lg:text-8xl">
            Film cameras, film development, and scanning in Apple Valley.
          </h1>
          <p className="mt-4 max-w-xl text-sm leading-7 text-[#333333]">
            {site.name} is a High Desert film camera shop and film lab located
            inside Wild Goose Vintage & Thrift Store in Apple Valley,
            California.
          </p>
          <div className="mt-8 grid gap-3 sm:grid-cols-3">
            <CTAButton href="/contact">Visit the Shop</CTAButton>
            <CTAButton href="/lab" variant="secondary">
              Film Lab
            </CTAButton>
            <CTAButton href="/shop" variant="secondary">
              Shop Preview
            </CTAButton>
          </div>
          <div className="mt-9">
            <MetadataLine items={sampleRoll} />
          </div>
          <div className="mt-6 max-w-xl">
            <TerminalStatusPanel
              title="CURRENT LAB / SHOP STATUS"
              rows={[
                ["Process", "C-41"],
                ["Status", "Accepting Orders"],
                ["Location", "Apple Valley, CA"],
                ["Delivery", "Digital Scans"]
              ]}
            />
          </div>
        </div>
        <div className="border border-[#2A2A2A] bg-[#FAFAF8] p-3">
          <div className="photo-grain relative aspect-[4/3] border border-[#111111]/20 bg-[#1a1a1a]">
            <Image
              src="/images/film-lab-workbench.png"
              alt="Film lab workbench with a camera, film rolls, and processing paperwork"
              fill
              priority
              sizes="(min-width: 1024px) 52vw, 100vw"
              className="object-cover"
            />
          </div>
          <div className="mono mt-3 grid grid-cols-2 gap-2 text-[0.68rem] uppercase tracking-[0.12em] text-[#666666] sm:grid-cols-4">
            <span>FRAME 01</span>
            <span>ISO 400</span>
            <span>SCAN SET A</span>
            <span>APPLE VALLEY</span>
          </div>
          <div className="mt-4 border-t border-[#2A2A2A] pt-4">
            <AsciiBlockLogo />
          </div>
        </div>
      </div>
    </section>
  );
}
