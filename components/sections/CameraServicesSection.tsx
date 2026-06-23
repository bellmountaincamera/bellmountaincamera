import { TerminalStatusPanel } from "@/components/brand/TerminalStatusPanel";
import { CTAButton } from "@/components/ui/CTAButton";
import { TerminalLabel } from "@/components/ui/TerminalLabel";

export function CameraServicesSection() {
  return (
    <section className="mx-auto max-w-7xl px-4 py-14 sm:px-6 sm:py-20 lg:px-8">
      <div className="grid gap-8 lg:grid-cols-[0.9fr_1.1fr]">
        <TerminalStatusPanel
          title="SERVICE TICKET / BASIC"
          rows={[
            ["Diagnose", "Open"],
            ["Cleaning", "Open"],
            ["Light Seals", "Open"],
            ["Shutter", "By Camera"]
          ]}
        />
        <div>
          <TerminalLabel>Camera Services</TerminalLabel>
          <h2 className="mt-4 text-3xl font-semibold uppercase tracking-[0.02em] sm:text-5xl">
            Basic camera work before the next roll
          </h2>
          <p className="mt-6 max-w-xl text-sm leading-7 text-[#111111]">
            Camera services focus on practical checks and maintenance: cleaning,
            battery compartment review, light seals, diagnosis, and basic
            shutter speed adjustment when possible.
          </p>
          <div className="mt-8">
            <CTAButton href="/services">Service Inquiry</CTAButton>
          </div>
        </div>
      </div>
    </section>
  );
}
