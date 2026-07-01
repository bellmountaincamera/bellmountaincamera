import type { Metadata } from "next";
import { ContactCTA } from "@/components/sections/ContactCTA";
import { PageHeader } from "@/components/ui/PageHeader";
import { TerminalLabel } from "@/components/ui/TerminalLabel";
import { site } from "@/lib/site";

export const metadata: Metadata = {
  title: "About",
  description:
    "Bell Mountain Camera is a film lab and used camera shop in Apple Valley, CA."
};

export default function AboutPage() {
  return (
    <main>
      <PageHeader
        label="Local Record"
        title="About Bell Mountain Camera"
        description="A High Desert film lab and camera shop."
        meta={["LOCATION: APPLE VALLEY", "FOCUS: FILM", "OWNER: ISAI TORRES"]}
      />
      <section className="mx-auto grid max-w-7xl gap-10 px-4 py-14 sm:px-6 sm:py-20 lg:grid-cols-[1fr_0.8fr] lg:px-8">
        <div className="max-w-3xl">
          <TerminalLabel>Shop Statement</TerminalLabel>
          <div className="mt-5 space-y-5 text-base leading-8 text-[#111111]">
            <p>
              Bell Mountain Camera started in the High Desert as a way to keep
              film cameras in use and make film processing more accessible
              locally.
            </p>
            <p>
              BMC operates inside Wild Goose Vintage &amp; Thrift in Apple Valley
              and focuses on C-41 film development, used cameras, film stock,
              and basic camera service.
            </p>
            <p>
              Walk-ins are welcome during shop hours. Appointments are best for
              service questions, lab questions, or pickup timing.
            </p>
          </div>
        </div>
        <aside className="document-panel h-fit p-6">
          <p className="mono text-xs font-semibold uppercase tracking-[0.16em] text-[#2457C5]">
            Archive Card
          </p>
          <dl className="mt-5 grid gap-4 text-sm">
            <div>
              <dt className="mono text-[0.7rem] uppercase tracking-[0.14em] text-[#2457C5]">
                Named for
              </dt>
              <dd className="mt-1 font-semibold">Bell Mountain</dd>
            </div>
            <div>
              <dt className="mono text-[0.7rem] uppercase tracking-[0.14em] text-[#2457C5]">
                Region
              </dt>
              <dd className="mt-1 font-semibold">Apple Valley / High Desert</dd>
            </div>
            <div>
              <dt className="mono text-[0.7rem] uppercase tracking-[0.14em] text-[#2457C5]">
                Owner / Operator
              </dt>
              <dd className="mt-1 font-semibold">{site.owner}</dd>
            </div>
            <div>
              <dt className="mono text-[0.7rem] uppercase tracking-[0.14em] text-[#2457C5]">
                Work
              </dt>
              <dd className="mt-1 font-semibold">
                Film lab, scanning, used cameras, camera services
              </dd>
            </div>
            <div>
              <dt className="mono text-[0.7rem] uppercase tracking-[0.14em] text-[#2457C5]">
                Location
              </dt>
              <dd className="mt-1 font-semibold">
                {site.locationName}
                <br />
                {site.street}
                <br />
                {site.cityStateZip}
              </dd>
            </div>
          </dl>
        </aside>
      </section>
      <ContactCTA />
    </main>
  );
}
