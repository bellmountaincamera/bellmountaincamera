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
        description="Bell Mountain Camera plans to support shipped online orders and local pickup from the Apple Valley shop."
        meta={["SHIP TO ADDRESS", "LOCAL PICKUP", "RATES TO BE CONFIGURED"]}
      />
      <section className="mx-auto grid max-w-7xl gap-6 px-4 py-14 sm:px-6 sm:py-20 lg:grid-cols-3 lg:px-8">
        {[
          [
            "Domestic shipping",
            "Shipping rules are not finalized yet. Domestic shipping rates, processing time, shipping carriers, and lost or damaged package policy are editable placeholders before live checkout."
          ],
          [
            "Local pickup",
            `${site.name} offers local pickup at ${site.locationName}, ${site.street}, ${site.cityStateZip}. Pickup hours are ${site.hoursShort}.`
          ],
          [
            "Order timing",
            "Shipping and pickup timing depend on inventory, order volume, and final fulfillment setup."
          ],
          [
            "Free shipping threshold",
            "A free shipping threshold can be added later if BMC decides to offer one."
          ]
        ].map(([title, text]) => (
          <article key={title} className="document-panel p-6">
            <TerminalLabel>{title}</TerminalLabel>
            <p className="mt-5 text-sm leading-7 text-[#4a4036]">{text}</p>
          </article>
        ))}
      </section>
    </main>
  );
}
