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
      <div className="mx-auto grid max-w-7xl gap-8 px-4 py-14 text-center sm:px-6 sm:py-20 lg:grid-cols-[1fr_1fr] lg:px-8">
        <div>
          <TerminalLabel>Shop Stock</TerminalLabel>
          <h2 className="mt-4 text-3xl font-semibold uppercase tracking-[0.02em] sm:text-5xl">
            Film and cameras
          </h2>
          <p className="mx-auto mt-5 max-w-xl text-sm leading-7 text-[#111111]">
            Rotating stock. Local pickup only.
          </p>
          <div className="mt-8 grid gap-3 sm:grid-cols-2">
            <CTAButton href="/shop/film">Shop Film</CTAButton>
            <CTAButton href="/shop/cameras" variant="secondary">
              Shop Cameras
            </CTAButton>
            <CTAButton href="/contact" variant="secondary">
              Visit the Store
            </CTAButton>
            <CTAButton href="/local-pickup" variant="secondary">
              Local Pickup
            </CTAButton>
          </div>
        </div>
        <div>
          <AsciiLineLogo
            className="mb-5"
            lines={["STOCK", "LOCAL", "PICKUP"]}
          />
          <MetadataPanel
            rows={items.map((item, index) => [
              `INV-${String(index + 1).padStart(2, "0")}`,
              item
            ])}
          />
          <p className="mx-auto mt-5 max-w-xl text-sm leading-7 text-[#111111]">
            Contact BMC for current stock.
          </p>
        </div>
      </div>
      <div className="mx-auto max-w-7xl px-4 pb-14 sm:px-6 sm:pb-20 lg:px-8">
        <div className="mb-6">
          <TerminalDivider label="FEATURED STOCK" />
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
