import type { Metadata } from "next";
import { CTAButton } from "@/components/ui/CTAButton";
import { PageHeader } from "@/components/ui/PageHeader";
import { TerminalLabel } from "@/components/ui/TerminalLabel";
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
        description="Browse film stock and used cameras."
        meta={["ONLINE SHOP COMING SOON", "LOCAL PICKUP", "SHIPPING PLANNED"]}
      />
      <section className="mx-auto max-w-7xl px-4 py-12 sm:px-6 sm:py-16 lg:px-8">
        <div className="record-grid md:grid-cols-2">
          <article className="record-cell p-6">
            <TerminalLabel>Film Side</TerminalLabel>
            <h2 className="mt-4 text-2xl font-semibold uppercase tracking-[0.02em]">
              Film stock
            </h2>
            <p className="mt-4 text-sm leading-7 text-[#111111]">
              35mm, 110, instant film, and rotating specialty stock.
            </p>
            <div className="mt-6">
              <CTAButton href="/shop/film" variant="secondary">
                Shop Film
              </CTAButton>
            </div>
          </article>
          <article className="record-cell p-6">
            <TerminalLabel>Camera Side</TerminalLabel>
            <h2 className="mt-4 text-2xl font-semibold uppercase tracking-[0.02em]">
              Used cameras
            </h2>
            <p className="mt-4 text-sm leading-7 text-[#111111]">
              Used film cameras with model notes and basic specs.
            </p>
            <div className="mt-6">
              <CTAButton href="/shop/cameras" variant="secondary">
                Shop Cameras
              </CTAButton>
            </div>
          </article>
        </div>
      </section>
      <section className="border-t border-[#111111]/15 bg-[#111111] text-[#FFFFFF]">
        <div className="mx-auto max-w-7xl px-4 py-12 sm:px-6 sm:py-16 lg:px-8">
          <div>
            <TerminalLabel tone="dark">Pickup / Shipping Info</TerminalLabel>
            <h2 className="mt-4 text-3xl font-semibold uppercase tracking-[0.02em]">
              Shipping planned, pickup available
            </h2>
            <p className="mt-5 text-sm leading-7 text-[#FFFFFF]">
              Online checkout is not live yet. Contact BMC for availability,
              local pickup, or shipping questions.
            </p>
            <p className="mono mt-4 text-[0.72rem] uppercase tracking-[0.14em] text-[#FFFFFF]/70">
              Pickup: {site.hoursShort}
            </p>
          </div>
        </div>
      </section>
      <section className="mx-auto max-w-7xl px-4 py-14 sm:px-6 sm:py-20 lg:px-8">
        <TerminalLabel>Store Policies</TerminalLabel>
        <h2 className="mt-4 text-3xl font-semibold uppercase tracking-[0.02em]">
          Shop policies
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
