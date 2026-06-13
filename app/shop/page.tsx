import type { Metadata } from "next";
import { CTAButton } from "@/components/ui/CTAButton";
import { PageHeader } from "@/components/ui/PageHeader";
import { ShopBrowser } from "@/components/shop/ShopBrowser";
import { TerminalLabel } from "@/components/ui/TerminalLabel";
import { products } from "@/lib/products";
import { site } from "@/lib/site";

export const metadata: Metadata = {
  title: "Shop",
  description:
    "Preview film stock, cameras, and rotating inventory from Bell Mountain Camera. Online shop coming soon, with shipping planned and local pickup available."
};

export default function ShopPage() {
  return (
    <main>
      <PageHeader
        label="Inventory Desk"
        title="Shop"
        description="Online shop coming soon. Preview film stock, cameras, and rotating inventory, then contact BMC for availability or choose local pickup at the Apple Valley shop."
        meta={["ONLINE SHOP COMING SOON", "LOCAL PICKUP", "SHIPPING PLANNED"]}
      />
      <section className="mx-auto max-w-7xl px-4 py-14 sm:px-6 sm:py-20 lg:px-8">
        <div className="mb-8 flex flex-col gap-5 lg:flex-row lg:items-end lg:justify-between">
          <div className="max-w-2xl">
            <TerminalLabel>All Products</TerminalLabel>
            <h2 className="mt-4 text-3xl font-semibold uppercase tracking-[0.02em]">
              Film, cameras, and rotating inventory
            </h2>
            <p className="mt-4 text-sm leading-7 text-[#4a4036]">
              Online ordering is coming soon. For now, search the preview
              catalog and contact BMC for current availability, local pickup,
              or shipping questions.
            </p>
          </div>
        </div>
        <ShopBrowser products={products} />
      </section>
      <section className="border-t border-[#111111]/15 bg-[#111111] text-[#e8e2d8]">
        <div className="mx-auto grid max-w-7xl gap-8 px-4 py-14 sm:px-6 sm:py-20 lg:grid-cols-2 lg:px-8">
          <div>
            <TerminalLabel tone="dark">Pickup / Shipping Info</TerminalLabel>
            <h2 className="mt-4 text-3xl font-semibold uppercase tracking-[0.02em]">
              Shipping planned, pickup available
            </h2>
            <p className="mt-5 text-sm leading-7 text-[#c7b8a3]">
              Online ordering and shipping are being prepared. Until checkout is
              connected, contact BMC for availability, shipping questions, and
              local pickup.
            </p>
          </div>
          <div className="grid gap-px border border-[#e8e2d8]/20 bg-[#e8e2d8]/20">
            {[
              ["SHIP TO ADDRESS", "Domestic shipping rates to be configured."],
              ["LOCAL PICKUP", `${site.locationName}, ${site.street}, ${site.cityStateZip}`],
              ["PICKUP HOURS", site.hoursShort],
              ["ORDER STATUS", "Future admin can track processing, pickup, shipped, and complete."]
            ].map(([label, text]) => (
              <div key={label} className="bg-[#111111] p-5">
                <p className="mono text-xs uppercase tracking-[0.14em] text-[#8c7b6a]">
                  {label}
                </p>
                <p className="mt-3 text-sm leading-7 text-[#e8e2d8]">{text}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
      <section className="mx-auto max-w-7xl px-4 py-14 sm:px-6 sm:py-20 lg:px-8">
        <TerminalLabel>Store Policies</TerminalLabel>
        <h2 className="mt-4 text-3xl font-semibold uppercase tracking-[0.02em]">
          Ready for future checkout rules and policies
        </h2>
        <div className="mt-8 grid gap-3 sm:grid-cols-2 lg:grid-cols-4">
          <CTAButton href="/shipping" variant="secondary">
            Shipping Policy
          </CTAButton>
          <CTAButton href="/returns" variant="secondary">
            Returns Policy
          </CTAButton>
          <CTAButton href="/policies" variant="secondary">
            Store Policies
          </CTAButton>
          <CTAButton href="/faq" variant="secondary">
            FAQ
          </CTAButton>
        </div>
      </section>
    </main>
  );
}
