import type { Metadata } from "next";
import { ContactCTA } from "@/components/sections/ContactCTA";
import { PageHeader } from "@/components/ui/PageHeader";
import { TerminalLabel } from "@/components/ui/TerminalLabel";
import { site } from "@/lib/site";

export const metadata: Metadata = {
  title: "About",
  description:
    "Bell Mountain Camera is named after Bell Mountain and rooted in High Desert film photography culture."
};

export default function AboutPage() {
  return (
    <main>
      <PageHeader
        label="Local Record"
        title="About Bell Mountain Camera"
        description="Bell Mountain Camera started with a simple goal: give the High Desert a place for film photography."
        meta={["LOCATION: APPLE VALLEY", "FOCUS: FILM", "OWNER: ISAI TORRES"]}
      />
      <section className="mx-auto grid max-w-7xl gap-10 px-4 py-14 sm:px-6 sm:py-20 lg:grid-cols-[1fr_0.8fr] lg:px-8">
        <div className="max-w-3xl">
          <TerminalLabel>Shop Statement</TerminalLabel>
          <div className="mt-5 space-y-5 text-base leading-8 text-[#3a342e]">
            <p>
              Bell Mountain Camera is a film camera shop and film lab located
              inside Wild Goose Vintage & Thrift Store in Apple Valley,
              California. BMC offers film cameras, film stock, film
              development, scanning, and basic film camera service for the High
              Desert film community.
            </p>
            <p>
              Named after Bell Mountain, BMC is a small shop built around
              cameras, film, development, scanning, and keeping analog
              photography active in the desert.
            </p>
            <p>
              The shop serves Apple Valley, Victorville, Hesperia, and the
              wider High Desert area with a practical walk-in counter, film
              drop-off and pickup, camera service intake, and local analog
              photography culture.
            </p>
          </div>
        </div>
        <aside className="document-panel h-fit p-6">
          <p className="mono text-xs font-semibold uppercase tracking-[0.16em] text-[#8c7b6a]">
            Archive Card
          </p>
          <dl className="mt-5 grid gap-4 text-sm">
            <div>
              <dt className="mono text-[0.7rem] uppercase tracking-[0.14em] text-[#6f604f]">
                Named for
              </dt>
              <dd className="mt-1 font-semibold">Bell Mountain</dd>
            </div>
            <div>
              <dt className="mono text-[0.7rem] uppercase tracking-[0.14em] text-[#6f604f]">
                Region
              </dt>
              <dd className="mt-1 font-semibold">Apple Valley / High Desert</dd>
            </div>
            <div>
              <dt className="mono text-[0.7rem] uppercase tracking-[0.14em] text-[#6f604f]">
                Owner / Operator
              </dt>
              <dd className="mt-1 font-semibold">{site.owner}</dd>
            </div>
            <div>
              <dt className="mono text-[0.7rem] uppercase tracking-[0.14em] text-[#6f604f]">
                Work
              </dt>
              <dd className="mt-1 font-semibold">
                Film lab, scanning, used cameras, camera services
              </dd>
            </div>
            <div>
              <dt className="mono text-[0.7rem] uppercase tracking-[0.14em] text-[#6f604f]">
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
