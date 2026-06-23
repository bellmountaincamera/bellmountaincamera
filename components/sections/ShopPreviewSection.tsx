import { AsciiLineLogo } from "@/components/brand/AsciiLineLogo";
import { MetadataPanel } from "@/components/brand/MetadataPanel";
import { TerminalDivider } from "@/components/brand/TerminalDivider";
import { CTAButton } from "@/components/ui/CTAButton";
import { ProductCard } from "@/components/ui/ProductCard";
import { TerminalLabel } from "@/components/ui/TerminalLabel";
import { getFeaturedProducts } from "@/lib/products";

const items = ["Used 35mm cameras", "Film stock", "Batteries", "Straps and accessories"];

export function ShopPreviewSection() {
  const featured = getFeaturedProducts();

  return (
    <section className="border-b border-[#111111]/15">
      <div className="mx-auto grid max-w-7xl gap-8 px-4 py-14 sm:px-6 sm:py-20 lg:grid-cols-[1fr_1fr] lg:px-8">
        <div>
          <TerminalLabel>Online Shop Coming Soon</TerminalLabel>
          <h2 className="mt-4 text-3xl font-semibold uppercase tracking-[0.02em] sm:text-5xl">
            Featured film and rotating camera inventory
          </h2>
          <p className="mt-5 text-sm leading-7 text-[#111111]">
            Preview film stock, cameras, and rotating inventory. Contact BMC for
            availability while online checkout is being prepared.
          </p>
          <div className="mt-8 grid gap-3 sm:grid-cols-2">
            <CTAButton href="/shop/film">Shop Film</CTAButton>
            <CTAButton href="/shop/cameras" variant="secondary">
              Shop Cameras
            </CTAButton>
            <CTAButton href="/contact" variant="secondary">
              Visit the Store
            </CTAButton>
            <CTAButton href="/shipping" variant="secondary">
              Local Pickup Available
            </CTAButton>
          </div>
        </div>
        <div>
          <AsciiLineLogo
            className="mb-5"
            lines={["STOCK", "PREVIEW", "INQUIRE"]}
          />
          <MetadataPanel
            rows={items.map((item, index) => [
              `INV-${String(index + 1).padStart(2, "0")}`,
              item
            ])}
          />
          <p className="mt-5 text-sm leading-7 text-[#111111]">
            Inventory changes often. Stop by during business hours or contact
            BMC to ask about current film cameras, 35mm film stock, batteries,
            straps, accessories, shipping, and local pickup.
          </p>
        </div>
      </div>
      <div className="mx-auto max-w-7xl px-4 pb-14 sm:px-6 sm:pb-20 lg:px-8">
        <div className="mb-6">
          <TerminalDivider label="FEATURED STOCK / PREVIEW" />
        </div>
        <div className="record-grid md:grid-cols-3">
          {featured.map((product) => (
            <ProductCard key={product.slug} product={product} />
          ))}
        </div>
      </div>
    </section>
  );
}
