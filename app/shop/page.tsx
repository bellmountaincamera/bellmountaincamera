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

const cameraCategories = [
  {
    title: "SLRs",
    code: "CAMERA / SLR",
    text: "Manual and electronic 35mm SLR cameras.",
    href: "/shop/cameras"
  },
  {
    title: "Camcorders",
    code: "VIDEO / TAPE",
    text: "Analog video cameras and camcorders when available.",
    href: "/shop/cameras"
  },
  {
    title: "Point and Shoots",
    code: "CAMERA / P+S",
    text: "Compact autofocus and fixed-lens film cameras.",
    href: "/shop/cameras"
  }
];

const shopCategories = [
  {
    title: "Film",
    code: "FILM STOCK",
    text: "35mm, 110, instant, and rotating specialty film.",
    href: "/shop/film"
  },
  {
    title: "Accessories",
    code: "ACCESSORIES",
    text: "Straps, cases, lens caps, and small camera extras.",
    href: "/contact"
  },
  {
    title: "Batteries",
    code: "BATTERIES",
    text: "Common camera batteries when available.",
    href: "/contact"
  },
  {
    title: "Miscellaneous",
    code: "MISC",
    text: "Rotating oddities, supplies, and shop finds.",
    href: "/contact"
  }
];

export default function ShopPage() {
  return (
    <main>
      <PageHeader
        label="Inventory Desk"
        title="Shop"
        description="Film, used cameras, and shop inventory from BMC."
        meta={["ONLINE SHOP COMING SOON", "LOCAL PICKUP", "SHIPPING PLANNED"]}
      />
      <section className="mx-auto max-w-5xl px-4 py-12 text-center sm:px-6 sm:py-16 lg:px-8">
        <div className="mx-auto mb-8 max-w-3xl">
          <TerminalLabel>Shop Menu</TerminalLabel>
          <h2 className="mt-4 text-3xl font-semibold uppercase tracking-[0.02em]">
            Choose a section
          </h2>
        </div>

        <div className="grid gap-8 lg:grid-cols-[1fr_1fr]">
          <section className="record-cell p-6">
            <TerminalLabel>Camera Categories</TerminalLabel>
            <h3 className="mt-4 text-2xl font-semibold uppercase tracking-[0.02em]">
              Cameras
            </h3>
            <div className="mt-6 grid gap-3">
              {cameraCategories.map((category) => (
                <CTAButton key={category.title} href={category.href} variant="secondary">
                  {category.title}
                </CTAButton>
              ))}
            </div>
          </section>

          <section className="record-cell p-6">
            <TerminalLabel>Shop Categories</TerminalLabel>
            <h3 className="mt-4 text-2xl font-semibold uppercase tracking-[0.02em]">
              Film and supplies
            </h3>
            <div className="mt-6 grid gap-3">
              {shopCategories.map((category) => (
                <CTAButton key={category.title} href={category.href} variant="secondary">
                  {category.title}
                </CTAButton>
              ))}
            </div>
          </section>
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
              Online checkout is coming soon. For now, contact BMC for current
              inventory, local pickup, or shipping.
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
