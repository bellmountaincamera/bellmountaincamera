import type { Metadata } from "next";
import { CTAButton } from "@/components/ui/CTAButton";
import { PageHeader } from "@/components/ui/PageHeader";
import { TerminalLabel } from "@/components/ui/TerminalLabel";
import { formatPrice, products } from "@/lib/products";

export const metadata: Metadata = {
  title: "Cart",
  description:
    "Shopping cart preview for Bell Mountain Camera online film and camera purchases."
};

const cartItems = products.slice(0, 2);
const subtotal = cartItems.reduce((sum, item) => sum + item.price, 0);

export default function CartPage() {
  return (
    <main>
      <PageHeader
        label="Cart Preview"
        title="Cart Preview"
        description="Preview how a future cart can work. Real checkout is not connected yet; contact BMC for product availability."
        meta={["DEMO ONLY", "LOCAL PICKUP", "SHIPPING PLANNED"]}
      />
      <section className="mx-auto grid max-w-7xl gap-10 px-4 py-14 sm:px-6 sm:py-20 lg:grid-cols-[1.2fr_0.8fr] lg:px-8">
        <div className="grid gap-px border border-[#111111]/20 bg-[#111111]/20">
          {cartItems.map((item) => (
            <article
              key={item.slug}
              className="grid gap-4 bg-[#f3eee5] p-5 sm:grid-cols-[1fr_auto]"
            >
              <div>
                <p className="mono text-xs uppercase tracking-[0.14em] text-[#8c7b6a]">
                  {item.category} / Qty 1
                </p>
                <h2 className="mt-2 text-xl font-semibold uppercase tracking-[0.03em]">
                  {item.name}
                </h2>
                <p className="mt-3 text-sm leading-7 text-[#4a4036]">
                  {item.localPickup ? "Local pickup available. " : ""}
                  {item.shippingAvailable ? "Shipping available." : ""}
                </p>
              </div>
              <p className="mono text-sm font-semibold uppercase tracking-[0.12em] text-[#6f604f]">
                {formatPrice(item.price)}
              </p>
            </article>
          ))}
        </div>
        <aside className="document-panel h-fit p-6">
          <TerminalLabel>Order Summary</TerminalLabel>
          <div className="mt-6 grid gap-4 text-sm">
            <div className="flex justify-between border-b border-[#111111]/15 pb-3">
              <span>Subtotal</span>
              <span className="mono">{formatPrice(subtotal)}</span>
            </div>
            <div className="flex justify-between border-b border-[#111111]/15 pb-3">
              <span>Shipping</span>
              <span className="mono">Calculated later</span>
            </div>
            <div className="flex justify-between border-b border-[#111111]/15 pb-3">
              <span>Pickup</span>
              <span className="mono">Available</span>
            </div>
          </div>
          <p className="mt-5 text-sm leading-7 text-[#4a4036]">
            This is a preview cart. Live checkout will require a payment
            processor, inventory source, and shipping setup before customers can
            complete real purchases.
          </p>
          <div className="mt-6">
            <CTAButton href="/contact">Contact for Availability</CTAButton>
          </div>
        </aside>
      </section>
    </main>
  );
}
