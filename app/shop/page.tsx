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
    href: "#slrs"
  },
  {
    title: "Camcorders",
    code: "VIDEO / TAPE",
    text: "Analog video cameras and camcorders when available.",
    href: "#camcorders"
  },
  {
    title: "Point and Shoots",
    code: "CAMERA / P+S",
    text: "Compact autofocus and fixed-lens film cameras.",
    href: "#point-and-shoots"
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
    href: "#accessories"
  },
  {
    title: "Batteries",
    code: "BATTERIES",
    text: "Common camera batteries when available.",
    href: "#batteries"
  },
  {
    title: "Miscellaneous",
    code: "MISC",
    text: "Rotating oddities, supplies, and shop finds.",
    href: "#miscellaneous"
  }
];

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
        <div className="mb-8 max-w-3xl">
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

      <section className="mx-auto max-w-7xl px-4 pb-12 sm:px-6 sm:pb-16 lg:px-8">
        <div className="record-grid md:grid-cols-2 lg:grid-cols-3">
          {[...cameraCategories, ...shopCategories].map((category) => (
            <article
              key={category.title}
              id={category.href.startsWith("#") ? category.href.slice(1) : undefined}
              className="record-cell p-5"
            >
              <p className="mono text-[0.68rem] font-semibold uppercase tracking-[0.16em] text-[#2457C5]">
                {category.code}
              </p>
              <h3 className="mt-3 text-xl font-semibold uppercase tracking-[0.03em]">
                {category.title}
              </h3>
              <p className="mt-3 text-sm leading-7 text-[#111111]">
                {category.text}
              </p>
            </article>
          ))}
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
