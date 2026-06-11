import type { Metadata } from "next";
import { PageHeader } from "@/components/ui/PageHeader";
import { TerminalLabel } from "@/components/ui/TerminalLabel";

export const metadata: Metadata = {
  title: "Store Policy",
  description:
    "Store policy framework for Bell Mountain Camera ecommerce, inventory, pickup, and shipping."
};

export default function StorePolicyPage() {
  return (
    <main>
      <PageHeader
        label="Store Rules"
        title="Store Policy"
        description="The online shop is being built to support limited inventory, rotating stock, local pickup, shipping, and future coupons or discounts."
        meta={["LIMITED STOCK", "SOLD STATUS", "FUTURE COUPONS"]}
      />
      <section className="mx-auto max-w-7xl px-4 py-14 sm:px-6 sm:py-20 lg:px-8">
        <div className="grid gap-px border border-[#111111]/20 bg-[#111111]/20 md:grid-cols-2">
          {[
            [
              "Inventory",
              "Film and camera inventory may be limited and may rotate often. Sold-out and sold items should not allow checkout."
            ],
            [
              "Used cameras",
              "One-off camera listings should show availability, condition, tested status, included lens or accessories, notes, and price."
            ],
            [
              "Checkout preview",
              "Checkout preview pages show the planned ship-to-address and local pickup flow. Real payment and order submission are not connected yet."
            ],
            [
              "Admin-ready",
              "Products are structured so a future admin or CMS can update prices, stock, photos, and listings without rebuilding the whole site."
            ]
          ].map(([title, text]) => (
            <article key={title} className="bg-[#f3eee5] p-6">
              <TerminalLabel>{title}</TerminalLabel>
              <p className="mt-5 text-sm leading-7 text-[#4a4036]">{text}</p>
            </article>
          ))}
        </div>
      </section>
    </main>
  );
}
