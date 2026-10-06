import { createPageMetadata } from "@/lib/seo";
import { ContactCTA } from "@/components/sections/ContactCTA";
import { PageHeader } from "@/components/ui/PageHeader";
import { TerminalLabel } from "@/components/ui/TerminalLabel";
import { site } from "@/lib/site";

export const metadata = createPageMetadata({
  title: "About Our High Desert Film & Camera Shop",
  description:
    "Meet Bell Mountain Camera, a local film lab and used camera shop inside Wild Goose Vintage & Thrift in Apple Valley, California.",
  path: "/about"
});

export default function AboutPage() {
  return (
    <main>
      <PageHeader
        label="Local Record"
        title="About"
        description="A High Desert film lab and camera shop."
        meta={["LOCATION: APPLE VALLEY", "FOCUS: FILM", "OWNER: ISAI TORRES"]}
      />
      <section className="mx-auto grid max-w-7xl gap-10 px-4 py-14 text-center sm:px-6 sm:py-20 lg:grid-cols-[1fr_0.8fr] lg:px-8">
        <div className="mx-auto max-w-3xl">
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
          </div>
        </div>
        <aside className="document-panel h-fit p-6">
          <p className="mono text-xs font-semibold uppercase tracking-[0.16em] text-[#496787]">
            Archive Card
          </p>
          <dl className="mt-5 grid gap-4 text-sm">
            <div>
              <dt className="mono text-[0.7rem] uppercase tracking-[0.14em] text-[#496787]">
                Named for
              </dt>
              <dd className="mt-1 font-semibold">Bell Mountain</dd>
            </div>
            <div>
              <dt className="mono text-[0.7rem] uppercase tracking-[0.14em] text-[#496787]">
                Region
              </dt>
              <dd className="mt-1 font-semibold">Apple Valley / High Desert</dd>
            </div>
            <div>
              <dt className="mono text-[0.7rem] uppercase tracking-[0.14em] text-[#496787]">
                Owner / Operator
              </dt>
              <dd className="mt-1 font-semibold">{site.owner}</dd>
            </div>
            <div>
              <dt className="mono text-[0.7rem] uppercase tracking-[0.14em] text-[#496787]">
                Work
              </dt>
              <dd className="mt-1 font-semibold">
                Film lab, scanning, used cameras, camera services
              </dd>
            </div>
            <div>
              <dt className="mono text-[0.7rem] uppercase tracking-[0.14em] text-[#496787]">
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
