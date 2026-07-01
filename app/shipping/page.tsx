import type { Metadata } from "next";
import { PageHeader } from "@/components/ui/PageHeader";
import { TerminalLabel } from "@/components/ui/TerminalLabel";
import { site } from "@/lib/site";

export const metadata: Metadata = {
  title: "Shipping Policy",
  description:
    "Shipping and local pickup information for Bell Mountain Camera online orders."
};

export default function ShippingPage() {
  return (
    <main>
      <PageHeader
        label="Store Policy"
        title="Shipping Policy"
        description="Shipping is planned. Local pickup is available."
        meta={["LOCAL PICKUP", "SHIPPING QUESTIONS", "CONTACT BMC"]}
      />
      <section className="mx-auto grid max-w-7xl gap-6 px-4 py-14 sm:px-6 sm:py-20 lg:grid-cols-3 lg:px-8">
        {[
          [
            "Domestic shipping",
            "Online checkout is coming soon. For shipping questions, contact BMC before ordering."
          ],
          [
            "Local pickup",
            `${site.name} offers local pickup at ${site.locationName}, ${site.street}, ${site.cityStateZip}. Pickup hours are ${site.hoursShort}.`
          ],
          [
            "Order timing",
            "Pickup and shipping timing depend on current inventory and order volume."
          ],
          [
            "Before ordering",
            "Confirm current inventory, pickup timing, and shipping options with BMC."
          ]
        ].map(([title, text]) => (
          <article key={title} className="document-panel p-6">
            <TerminalLabel>{title}</TerminalLabel>
            <p className="mt-5 text-sm leading-7 text-[#111111]">{text}</p>
          </article>
        ))}
      </section>
    </main>
  );
}
