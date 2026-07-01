import type { Metadata } from "next";
import { PageHeader } from "@/components/ui/PageHeader";
import { TerminalLabel } from "@/components/ui/TerminalLabel";
import { site } from "@/lib/site";

export const metadata: Metadata = {
  title: "Local Pickup Policy",
  description:
    "Local pickup policy and pickup location for Bell Mountain Camera online orders."
};

export default function LocalPickupPage() {
  return (
    <main>
      <PageHeader
        label="Pickup Policy"
        title="Local Pickup"
        description="Pickup at BMC during business hours."
        meta={["LOCAL PICKUP", site.hoursShort, "APPLE VALLEY"]}
        textOnly
      />
      <section className="mx-auto grid max-w-7xl gap-8 px-4 py-14 sm:px-6 sm:py-20 lg:grid-cols-2 lg:px-8">
        <div className="document-panel p-6">
          <TerminalLabel>Pickup Address</TerminalLabel>
          <p className="mt-5 text-lg font-semibold leading-8">
            {site.name}
            <br />
            {site.locationName}
            <br />
            {site.street}
            <br />
            {site.cityStateZip}
          </p>
          <p className="mono mt-5 text-xs uppercase tracking-[0.14em] text-[#2457C5]">
            Pickup hours: {site.hoursShort}
          </p>
        </div>
        <div className="document-panel p-6">
          <TerminalLabel>Pickup Notes</TerminalLabel>
          <p className="mt-5 text-sm leading-7 text-[#111111]">
            Walk-ins are welcome during business hours. Customers can also call
            or email to arrange pickup for online orders.
          </p>
        </div>
      </section>
    </main>
  );
}
