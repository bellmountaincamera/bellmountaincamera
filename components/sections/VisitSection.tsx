import { CTAButton } from "@/components/ui/CTAButton";
import { MetadataPanel } from "@/components/brand/MetadataPanel";
import { MetadataLine } from "@/components/ui/MetadataLine";
import { TerminalLabel } from "@/components/ui/TerminalLabel";
import { site } from "@/lib/site";

export function VisitSection() {
  return (
    <section className="border-y border-[#D8D8D2] bg-[#FAFAF8]">
      <div className="mx-auto grid max-w-7xl gap-8 px-4 py-14 sm:px-6 sm:py-20 lg:grid-cols-[0.8fr_1.2fr] lg:px-8">
        <div>
          <TerminalLabel>Visit BMC</TerminalLabel>
          <h2 className="mt-4 text-3xl font-semibold uppercase tracking-[0.02em] sm:text-5xl">
            Walk-ins welcome in Apple Valley
          </h2>
          <p className="mt-6 text-sm leading-7 text-[#333333]">
            {site.locationCopy}
          </p>
          <div className="mt-8">
            <CTAButton href="/contact" variant="secondary">
              Contact BMC
            </CTAButton>
          </div>
        </div>
        <div>
          <MetadataLine
            items={["WALK-INS WELCOME", "FILM DROP-OFF", "CAMERA SERVICE INTAKE"]}
          />
          <div className="mt-6">
            <MetadataPanel
              rows={[
                ["Location", `${site.locationName} / ${site.street} / ${site.cityStateZip}`],
                ["Hours", site.hoursShort],
                ["Access", "Walk-ins welcome"],
                ["Appointment", "Email or phone"]
              ]}
            />
          </div>
        </div>
      </div>
    </section>
  );
}
