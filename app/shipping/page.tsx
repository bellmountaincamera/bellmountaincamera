import type { Metadata } from "next";
import { PageHeader } from "@/components/ui/PageHeader";
import { TerminalLabel } from "@/components/ui/TerminalLabel";
import { businessInfo, policyCopy } from "@/lib/site";

export const metadata: Metadata = {
  title: "No Shipping",
  description:
    "Shipping and local pickup information for Bell Mountain Camera."
};

export default function ShippingPage() {
  return (
    <main>
      <PageHeader
        label="Store Policy"
        title="No Shipping"
        description="Local pickup only."
        meta={["NO SHIPPING", "LOCAL PICKUP ONLY", "CONTACT BMC"]}
        textOnly
      />
      <section className="mx-auto grid max-w-7xl gap-6 px-4 py-14 text-center sm:px-6 sm:py-20 lg:grid-cols-2 lg:px-8">
        {[
          [
            "Shipping",
            policyCopy.shipping
          ],
          [
            "Local pickup",
            `${policyCopy.localPickup} Pickup hours are ${businessInfo.hours}.`
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
