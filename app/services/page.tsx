import type { Metadata } from "next";
import { TerminalStatusPanel } from "@/components/brand/TerminalStatusPanel";
import { CTAButton } from "@/components/ui/CTAButton";
import { PageHeader } from "@/components/ui/PageHeader";
import { TerminalLabel } from "@/components/ui/TerminalLabel";
import { cameraServiceMenu, serviceBundles } from "@/lib/site";

export const metadata: Metadata = {
  title: "Camera Services",
  description:
    "Diagnostics, cleaning, light seal replacement, and basic function checks for film cameras at Bell Mountain Camera."
};

export default function ServicesPage() {
  return (
    <main>
      <PageHeader
        label="Service Bench"
        title="Camera Services"
        description="Basic service for film cameras."
        meta={["CAMERA SERVICE INTAKE", "WALK-INS WELCOME", "APPOINTMENTS AVAILABLE"]}
      />
      <section className="mx-auto grid max-w-7xl gap-10 px-4 py-14 sm:px-6 sm:py-20 lg:grid-cols-[0.85fr_1.15fr] lg:px-8">
        <div>
          <TerminalLabel>Service Menu</TerminalLabel>
          <h2 className="mt-4 text-3xl font-semibold uppercase tracking-[0.02em]">
            Service scope and bundles
          </h2>
          <p className="mt-5 text-sm leading-7 text-[#111111]">
            BMC handles common film camera service: diagnosis, cleaning, light
            seals, and shutter speed adjustment when possible. Bring your
            camera in during business hours or contact BMC for service
            questions.
          </p>
          <div className="mt-7">
            <CTAButton href="/contact">Start Service Inquiry</CTAButton>
          </div>
          <div className="mt-6">
            <TerminalStatusPanel
              title="SERVICE BENCH STATUS"
              rows={[
                ["Diagnostics", "Available"],
                ["Cleaning", "Available"],
                ["Light Seals", "Available"],
                ["Shutter", "When Possible"]
              ]}
            />
          </div>
        </div>
        <div className="grid gap-6">
          <div>
            <TerminalLabel>Individual Services</TerminalLabel>
            <div className="mt-4 record-grid">
              {cameraServiceMenu.map((service) => (
                <article
                  key={service.title}
                  className="grid gap-4 record-cell p-5 sm:grid-cols-[1fr_auto]"
                >
                  <div>
                    <h3 className="text-xl font-semibold uppercase tracking-[0.03em]">
                      {service.title}
                    </h3>
                    <p className="mt-3 text-sm leading-7 text-[#111111]">
                      {service.text}
                    </p>
                  </div>
                  <p className="mono text-xs font-semibold uppercase tracking-[0.14em] text-[#2457C5]">
                    {service.price}
                  </p>
                </article>
              ))}
            </div>
          </div>
          <div>
            <TerminalLabel>Bundles</TerminalLabel>
            <div className="mt-4 record-grid sm:grid-cols-2">
              {serviceBundles.map((bundle) => (
                <article key={bundle.title} className="record-cell p-5">
                  <p className="text-lg font-semibold uppercase tracking-[0.03em]">
                    {bundle.title}
                  </p>
                  <p className="mono mt-4 text-sm font-semibold uppercase tracking-[0.14em] text-[#2457C5]">
                    {bundle.price}
                  </p>
                </article>
              ))}
            </div>
          </div>
        </div>
      </section>
      <section className="mx-auto grid max-w-7xl gap-8 px-4 py-14 sm:px-6 sm:py-20 lg:grid-cols-[0.8fr_1.2fr] lg:px-8">
        <div>
          <TerminalLabel>Camera Service Intake</TerminalLabel>
          <h2 className="mt-4 text-3xl font-semibold uppercase tracking-[0.02em]">
            Tell BMC what the camera is doing
          </h2>
          <p className="mt-5 text-sm leading-7 text-[#111111]">
            Use this form to send camera service details before drop-off or
            appointment.
          </p>
        </div>
        <div className="terminal-panel p-6">
          <div className="grid gap-4 sm:grid-cols-2">
            {[
              "Name",
              "Email",
              "Phone",
              "Camera brand",
              "Camera model",
              "Service requested",
              "Known issue",
              "Last time camera worked",
              "Battery type if known",
              "Has film been tested through it?",
              "Notes"
            ].map((label) => (
              <div key={label} className={label === "Notes" ? "sm:col-span-2" : ""}>
                <label className="mono text-[0.7rem] uppercase tracking-[0.14em] text-[#FFFFFF]">
                  {label}
                </label>
                <div className="mt-2 min-h-11 border border-[#FFFFFF]/25 bg-[#FFFFFF]/5" />
              </div>
            ))}
          </div>
        </div>
      </section>
      <section className="border-t border-[#111111]/15 bg-[#111111] text-[#FFFFFF]">
        <div className="mx-auto max-w-7xl px-4 py-14 sm:px-6 sm:py-20 lg:px-8">
          <TerminalLabel tone="dark">Service Disclaimer</TerminalLabel>
          <p className="mt-5 max-w-3xl text-base leading-8 text-[#FFFFFF]">
            Service depends on the camera model, condition, and issue. Some
            cameras may need parts or repairs beyond what Bell Mountain Camera
            can provide in-house.
          </p>
        </div>
      </section>
    </main>
  );
}
