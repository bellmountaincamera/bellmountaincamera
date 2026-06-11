import { CTAButton } from "@/components/ui/CTAButton";
import { MetadataLine } from "@/components/ui/MetadataLine";
import { site } from "@/lib/site";

export function ContactCTA() {
  return (
    <section className="mx-auto max-w-7xl px-4 py-14 sm:px-6 sm:py-20 lg:px-8">
      <div className="terminal-panel p-6 sm:p-8">
        <div className="grid gap-8 lg:grid-cols-[1fr_auto] lg:items-center">
          <div>
            <MetadataLine
              tone="dark"
              items={["WALK-INS WELCOME", site.hoursShort, "APPLE VALLEY, CA"]}
            />
            <h2 className="mt-5 max-w-2xl text-3xl font-semibold uppercase tracking-[0.02em] sm:text-5xl">
              Drop off film, ask about a camera, or check current inventory.
            </h2>
          </div>
          <CTAButton href="/contact" variant="dark">
            Contact Bell Mountain Camera
          </CTAButton>
        </div>
      </div>
    </section>
  );
}
