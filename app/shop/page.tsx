import type { Metadata } from "next";
import { TerminalStatusPanel } from "@/components/brand/TerminalStatusPanel";
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
            <p className="mt-4 text-sm leading-7 text-[#333333]">
              Online ordering is coming soon. For now, search the preview
              catalog and contact BMC for current availability, local pickup,
              or shipping questions.
            </p>
          </div>
        </div>
        <ShopBrowser products={products} />
      </section>
      <section className="border-t border-[#111111]/15 bg-[#111111] text-[#FAFAF8]">
        <div className="mx-auto grid max-w-7xl gap-8 px-4 py-14 sm:px-6 sm:py-20 lg:grid-cols-2 lg:px-8">
          <div>
            <TerminalLabel tone="dark">Pickup / Shipping Info</TerminalLabel>
            <h2 className="mt-4 text-3xl font-semibold uppercase tracking-[0.02em]">
              Shipping planned, pickup available
            </h2>
            <p className="mt-5 text-sm leading-7 text-[#D8D8D2]">
              Online ordering and shipping are being prepared. Until checkout is
              connected, contact BMC for availability, shipping questions, and
              local pickup.
            </p>
          </div>
          <TerminalStatusPanel
            title="FULFILLMENT STATUS / PREVIEW"
            tone="dark"
            rows={[
              ["Online", "Coming Soon"],
              ["Pickup", "Available"],
              ["Shipping", "Planned"],
              ["Hours", site.hoursShort]
            ]}
          />
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
