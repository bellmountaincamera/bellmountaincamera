import { CTAButton } from "@/components/ui/CTAButton";
import { TerminalLabel } from "@/components/ui/TerminalLabel";

export function AboutPreviewSection() {
  return (
    <section className="border-y border-[#111111]/15 bg-[#FFFFFF]">
      <div className="mx-auto max-w-7xl px-4 py-14 sm:px-6 sm:py-20 lg:px-8">
        <div className="mx-auto max-w-3xl text-center">
          <TerminalLabel>About BMC</TerminalLabel>
          <h2 className="mt-4 text-3xl font-semibold uppercase tracking-[0.02em] sm:text-5xl">
            High Desert film lab
          </h2>
          <p className="mx-auto mt-6 max-w-xl text-base leading-8 text-[#111111]">
            Film processing, used cameras, film stock, and basic service in
            Apple Valley.
          </p>
          <div className="mt-8">
            <CTAButton href="/about" variant="secondary">
              About the Shop
            </CTAButton>
          </div>
        </div>
      </div>
    </section>
  );
}
