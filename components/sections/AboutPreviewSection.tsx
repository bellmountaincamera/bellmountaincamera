import { CTAButton } from "@/components/ui/CTAButton";
import { TerminalLabel } from "@/components/ui/TerminalLabel";

export function AboutPreviewSection() {
  return (
    <section className="border-y border-[#111111]/15 bg-[#c7b8a3]">
      <div className="mx-auto max-w-7xl px-4 py-14 sm:px-6 sm:py-20 lg:px-8">
        <div className="max-w-3xl">
          <TerminalLabel>High Desert Archive</TerminalLabel>
          <h2 className="mt-4 text-3xl font-semibold uppercase tracking-[0.02em] sm:text-5xl">
            Named after Bell Mountain, rooted in local film culture
          </h2>
          <p className="mt-6 text-base leading-8 text-[#2f2a24]">
            Bell Mountain Camera keeps the focus on film photography: processing
            rolls, scanning negatives, getting cameras back into hands, and
            supporting the people documenting Apple Valley, Victorville,
            Hesperia, and the wider High Desert.
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
