import { CTAButton } from "@/components/ui/CTAButton";
import { MetadataLine } from "@/components/ui/MetadataLine";
import { TerminalLabel } from "@/components/ui/TerminalLabel";
import { site } from "@/lib/site";

export function VisitSection() {
  return (
    <section className="border-y border-[#111111]/15 bg-[#c7b8a3]">
      <div className="mx-auto grid max-w-7xl gap-8 px-4 py-14 sm:px-6 sm:py-20 lg:grid-cols-[0.8fr_1.2fr] lg:px-8">
        <div>
          <TerminalLabel>Visit BMC</TerminalLabel>
          <h2 className="mt-4 text-3xl font-semibold uppercase tracking-[0.02em] sm:text-5xl">
            Walk-ins welcome in Apple Valley
          </h2>
          <p className="mt-6 text-sm leading-7 text-[#2f2a24]">
            {site.locationCopy}
          </p>
          <div className="mt-8">
            <CTAButton href="/contact" variant="secondary">
              Contact BMC
            </CTAButton>
          </div>
        </div>
        <div className="document-panel p-6">
          <MetadataLine
            items={["WALK-INS WELCOME", "FILM DROP-OFF", "CAMERA SERVICE INTAKE"]}
          />
          <div className="mt-6 grid gap-5 sm:grid-cols-2">
            <div>
              <p className="mono text-[0.7rem] uppercase tracking-[0.14em] text-[#6f604f]">
                Location
              </p>
              <p className="mt-2 text-lg font-semibold leading-7">
                {site.locationName}
                <br />
                {site.street}
                <br />
                {site.cityStateZip}
              </p>
            </div>
            <div>
              <p className="mono text-[0.7rem] uppercase tracking-[0.14em] text-[#6f604f]">
                Hours
              </p>
              {site.hours.map((item) => (
                <p key={item.days} className="mt-2 text-lg font-semibold leading-7">
                  {item.days}
                  <br />
                  {item.time}
                </p>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
