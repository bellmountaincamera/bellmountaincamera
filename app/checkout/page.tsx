import type { Metadata } from "next";
import { CTAButton } from "@/components/ui/CTAButton";
import { EmailDraftForm } from "@/components/ui/EmailDraftForm";
import { PageHeader } from "@/components/ui/PageHeader";
import { TerminalLabel } from "@/components/ui/TerminalLabel";
import { site } from "@/lib/site";

export const metadata: Metadata = {
  title: "Checkout",
  description:
    "Checkout information for Bell Mountain Camera local pickup."
};

export default function CheckoutPage() {
  return (
    <main>
      <PageHeader
        label="Pickup Desk"
        title="Checkout"
        description="Contact BMC for availability."
        meta={["CONTACT BMC", "LOCAL PICKUP ONLY"]}
        textOnly
      />
      <section className="mx-auto grid max-w-7xl gap-8 px-4 py-14 text-center sm:px-6 sm:py-20 lg:grid-cols-[1.1fr_0.9fr] lg:px-8">
        <EmailDraftForm id="pickup" title="Pickup inquiry" subject="BMC pickup inquiry" submitLabel="Ask about pickup"
          fields={[
            { name: "name", label: "Name", required: true, autoComplete: "name" },
            { name: "email", label: "Email", type: "email", required: true, autoComplete: "email" },
            { name: "item", label: "Pickup item", required: true },
            { name: "notes", label: "Notes", type: "textarea" }
          ]} />
        <aside className="document-panel h-fit p-6">
          <TerminalLabel>Fulfillment</TerminalLabel>
          <p className="mt-5 text-sm leading-7 text-[#111111]">
            Local pickup available at:
          </p>
          <p className="mt-4 text-lg font-semibold leading-8">
            {site.name}
            <br />
            {site.locationName}
            <br />
            {site.street}
            <br />
            {site.cityStateZip}
          </p>
          <p className="mono mt-5 text-xs uppercase tracking-[0.14em] text-[#496787]">
            Pickup hours: {site.hoursShort}
          </p>
          <p className="mt-5 text-sm leading-7 text-[#111111]">
            Contact BMC for current inventory and pickup.
          </p>
          <div className="mt-6">
            <CTAButton href="/contact">Contact BMC</CTAButton>
          </div>
        </aside>
      </section>
    </main>
  );
}
