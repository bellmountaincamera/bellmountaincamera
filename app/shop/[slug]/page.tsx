import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { TerminalDivider } from "@/components/brand/TerminalDivider";
import { CTAButton } from "@/components/ui/CTAButton";
import { MetadataLine } from "@/components/ui/MetadataLine";
import { PageHeader } from "@/components/ui/PageHeader";
import { ProductGallery } from "@/components/ui/ProductGallery";
import { TerminalLabel } from "@/components/ui/TerminalLabel";
import {
  formatPrice,
  getContactCta,
  getInventoryStatus,
  getProduct,
  getProductImages,
  products
} from "@/lib/products";
import { site } from "@/lib/site";

type ProductPageProps = {
  params: Promise<{
    slug: string;
  }>;
};

export function generateStaticParams() {
  return products.map((product) => ({
    slug: product.slug
  }));
}

export async function generateMetadata({
  params
}: ProductPageProps): Promise<Metadata> {
  const { slug } = await params;
  const product = getProduct(slug);

  if (!product) {
    return {
      title: "Product Not Found"
    };
  }

  return {
    title: product.name,
    description: product.description
  };
}

export default async function ProductPage({ params }: ProductPageProps) {
  const { slug } = await params;
  const product = getProduct(slug);

  if (!product) {
    notFound();
  }

  const detailRows =
    product.kind === "film"
      ? [
          ["Brand", product.brand],
          ["Format", product.format],
          ["ISO", product.iso],
          ["Film type", product.filmType],
          ["Inventory quantity", String(product.quantity)],
          ["Availability", getInventoryStatus(product)]
        ]
      : [
          ["Brand", product.brand],
          ["Model", product.model],
          ["Format", product.format],
          ["Condition", product.condition],
          ["Tested status", product.testedStatus],
          ["Included", product.included],
          ["Inventory quantity", String(product.quantity)],
          ["Availability", getInventoryStatus(product)]
        ];

  return (
    <main>
      <PageHeader
        label="Product File"
        title={product.name}
        description={product.description}
        meta={[product.category, getInventoryStatus(product), formatPrice(product.price)]}
      />
      <section className="mx-auto grid max-w-7xl gap-10 px-4 py-14 sm:px-6 sm:py-20 lg:grid-cols-[0.9fr_1.1fr] lg:px-8">
        <ProductGallery images={getProductImages(product)} productName={product.name} />
        <div>
          <TerminalLabel>Online Shop Coming Soon</TerminalLabel>
          <h2 className="mt-4 text-3xl font-semibold uppercase tracking-[0.02em]">
            {formatPrice(product.price)}
          </h2>
          <p className="mt-5 text-sm leading-7 text-[#111111]">
            Online purchasing is coming soon. Until real checkout is connected,
            contact BMC to confirm availability, shipping, and local pickup for
            this item.
          </p>
          <div className="mt-6">
            <MetadataLine
              items={[
                product.localPickup ? "LOCAL PICKUP AVAILABLE" : "NO PICKUP",
                product.shippingAvailable ? "SHIP TO ADDRESS" : "NO SHIPPING",
                "CONTACT FOR AVAILABILITY"
              ]}
            />
          </div>
          <div className="mt-8 grid gap-3 sm:grid-cols-2">
            <CTAButton href="/contact">
              {getContactCta(product)}
            </CTAButton>
            <CTAButton href="/local-pickup" variant="secondary">
              Local Pickup Available
            </CTAButton>
          </div>
          <div className="mt-8 record-grid">
            <div className="record-cell p-4">
              <TerminalDivider label="PRODUCT SPEC / PREVIEW" />
            </div>
            {detailRows.map(([label, value]) => (
              <div
                key={label}
                className="grid gap-2 record-cell p-4 sm:grid-cols-[12rem_1fr]"
              >
                <p className="mono text-xs uppercase tracking-[0.14em] text-[#0B3D91]">
                  {label}
                </p>
                <p className="text-sm leading-6 text-[#111111]">{value}</p>
              </div>
            ))}
          </div>
          {product.kind === "camera" ? (
            <p className="mt-5 text-sm leading-7 text-[#111111]">
              {product.notes}
            </p>
          ) : null}
        </div>
      </section>
      <section className="border-t border-[#111111]/15">
        <div className="mx-auto max-w-7xl px-4 py-14 sm:px-6 lg:px-8">
          <TerminalLabel>Pickup Location</TerminalLabel>
          <p className="mt-4 text-lg font-semibold leading-8">
            {site.name}
            <br />
            {site.locationName}
            <br />
            {site.street}
            <br />
            {site.cityStateZip}
          </p>
          <p className="mono mt-5 text-xs uppercase tracking-[0.14em] text-[#0B3D91]">
            {site.hoursShort}
          </p>
        </div>
      </section>
    </main>
  );
}
