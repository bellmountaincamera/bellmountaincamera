import type { Metadata } from "next";
import { CTAButton } from "@/components/ui/CTAButton";
import { PageHeader } from "@/components/ui/PageHeader";
import { TerminalLabel } from "@/components/ui/TerminalLabel";
import { site } from "@/lib/site";

export const metadata: Metadata = {
  title: "Checkout",
  description:
    "Checkout flow placeholder for Bell Mountain Camera online orders, shipping, and local pickup."
};

const fields = [
  "Name",
  "Email",
  "Phone",
  "Shipping address",
  "City",
  "State",
  "ZIP code",
  "Order notes"
];

export default function CheckoutPage() {
  return (
    <main>
      <PageHeader
        label="Checkout Preview"
        title="Checkout Preview"
        description="Preview the future checkout flow. Real payment processing is not connected yet."
        meta={["DEMO ONLY", "SHIPPING ADDRESS", "LOCAL PICKUP"]}
      />
      <section className="mx-auto grid max-w-7xl gap-8 px-4 py-14 sm:px-6 sm:py-20 lg:grid-cols-[1.1fr_0.9fr] lg:px-8">
        <div className="terminal-panel p-6">
          <p className="mono text-xs font-semibold uppercase tracking-[0.16em] text-[#8c7b6a]">
            Customer Information
          </p>
          <div className="mt-6 grid gap-4 sm:grid-cols-2">
            {fields.map((field) => (
              <div key={field} className={field === "Order notes" ? "sm:col-span-2" : ""}>
                <label className="mono text-[0.7rem] uppercase tracking-[0.14em] text-[#c7b8a3]">
                  {field}
                </label>
                <div className="mt-2 min-h-11 border border-[#e8e2d8]/25 bg-[#e8e2d8]/5" />
              </div>
            ))}
          </div>
          <div className="mt-6 grid gap-px border border-[#e8e2d8]/20 bg-[#e8e2d8]/20 sm:grid-cols-2">
            {["Ship to address", "Local pickup in store"].map((option) => (
              <div key={option} className="bg-[#111111] p-4">
                <p className="mono text-xs uppercase tracking-[0.14em] text-[#e8e2d8]">
                  {option}
                </p>
              </div>
            ))}
          </div>
        </div>
        <aside className="document-panel h-fit p-6">
          <TerminalLabel>Fulfillment</TerminalLabel>
          <p className="mt-5 text-sm leading-7 text-[#4a4036]">
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
          <p className="mono mt-5 text-xs uppercase tracking-[0.14em] text-[#6f604f]">
            Pickup hours: {site.hoursShort}
          </p>
          <p className="mt-5 text-sm leading-7 text-[#4a4036]">
            Payment processing, shipping rate setup, and final order submission
            are not connected yet. This page shows where those integrations can
            connect later.
          </p>
          <div className="mt-6">
            <CTAButton href="/contact">Contact BMC</CTAButton>
          </div>
        </aside>
      </section>
    </main>
  );
}
