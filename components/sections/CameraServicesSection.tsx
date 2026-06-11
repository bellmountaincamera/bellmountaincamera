import { CTAButton } from "@/components/ui/CTAButton";
import { TerminalLabel } from "@/components/ui/TerminalLabel";

export function CameraServicesSection() {
  return (
    <section className="mx-auto max-w-7xl px-4 py-14 sm:px-6 sm:py-20 lg:px-8">
      <div className="grid gap-8 lg:grid-cols-[0.9fr_1.1fr]">
        <div className="document-panel p-6">
          <p className="mono text-xs font-semibold uppercase tracking-[0.16em] text-[#8c7b6a]">
            Service Ticket / Basic
          </p>
          <div className="mt-5 grid gap-3 text-sm">
            {["Diagnose", "Cleaning", "Light seal replacement", "Shutter speed adjustment"].map(
              (item) => (
                <div
                  key={item}
                  className="flex items-center justify-between border-b border-[#111111]/15 pb-3"
                >
                  <span>{item}</span>
                  <span className="mono text-xs text-[#6f604f]">OPEN</span>
                </div>
              )
            )}
          </div>
        </div>
        <div>
          <TerminalLabel>Camera Services</TerminalLabel>
          <h2 className="mt-4 text-3xl font-semibold uppercase tracking-[0.02em] sm:text-5xl">
            Basic camera work before the next roll
          </h2>
          <p className="mt-6 max-w-xl text-sm leading-7 text-[#4a4036]">
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
