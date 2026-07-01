import { CTAButton } from "@/components/ui/CTAButton";
import { MetadataLine } from "@/components/ui/MetadataLine";
import { site } from "@/lib/site";

export function ContactCTA() {
  return (
    <section className="mx-auto max-w-7xl px-4 py-10 sm:px-6 sm:py-14 lg:px-8">
      <div className="terminal-panel p-6 sm:p-8">
        <div className="grid gap-6 lg:grid-cols-[1fr_auto] lg:items-center">
          <div>
            <MetadataLine
              tone="dark"
              items={[
                "WALK-INS WELCOME",
                "APPOINTMENTS AVAILABLE",
                "APPLE VALLEY, CA"
              ]}
            />
            <h2 className="mt-5 max-w-2xl text-2xl font-semibold uppercase tracking-[0.02em] sm:text-4xl">
              Drop off film, ask about a camera, or schedule service.
            </h2>
            <p className="mt-4 max-w-2xl text-sm leading-7 text-[#FFFFFF]">
              For appointments, BMC is usually available 11 AM - 1 PM Tuesday
              through Thursday, and most of the day Friday and Saturday. Request
              one week in advance for best availability.
            </p>
          </div>
          <CTAButton href="/contact" variant="dark">
            Contact Bell Mountain Camera
          </CTAButton>
        </div>
      </div>
    </section>
  );
}
