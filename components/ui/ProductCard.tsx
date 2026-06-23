import Link from "next/link";
import { ProductImage } from "@/components/ui/ProductImage";
import {
  formatPrice,
  getContactCta,
  getInventoryStatus,
  getProductImages,
  type Product
} from "@/lib/products";

type ProductCardProps = {
  product: Product;
};

export function ProductCard({ product }: ProductCardProps) {
  return (
    <article className="group record-cell p-4 transition-colors hover:bg-[#FFFFFF]">
      <Link href={`/shop/${product.slug}`} className="block">
        <ProductImage
          src={getProductImages(product)[0]}
          alt={`${product.name} product photo`}
          label={product.name}
        />
      </Link>
      <div className="mt-4 flex items-start justify-between gap-4 border-t border-[#111111]/15 pt-4">
        <div>
          <p className="mono text-[0.68rem] uppercase tracking-[0.14em] text-[#0B3D91]">
            INV / {product.category}
          </p>
          <h3 className="mt-2 text-lg font-semibold uppercase tracking-[0.03em]">
            <Link href={`/shop/${product.slug}`}>{product.name}</Link>
          </h3>
        </div>
        <p className="mono text-xs font-semibold uppercase tracking-[0.12em] text-[#111111]">
          {formatPrice(product.price)}
        </p>
      </div>
      <p className="mt-3 text-sm leading-6 text-[#111111]">{product.description}</p>
      <div className="mt-4 flex flex-wrap gap-2">
        <span className="mono border border-[#0B3D91] px-2 py-1 text-[0.65rem] uppercase tracking-[0.12em] text-[#0B3D91]">
          {getInventoryStatus(product)}
        </span>
        {product.localPickup ? (
          <span className="mono border border-[#111111]/15 px-2 py-1 text-[0.65rem] uppercase tracking-[0.12em] text-[#0B3D91]">
            Local Pickup
          </span>
        ) : null}
        {product.shippingAvailable ? (
          <span className="mono border border-[#111111]/15 px-2 py-1 text-[0.65rem] uppercase tracking-[0.12em] text-[#0B3D91]">
            Ships
          </span>
        ) : null}
      </div>
      <div className="mt-5 grid gap-2">
        <Link
          href={`/shop/${product.slug}`}
          className="cta-button cta-primary"
        >
          {getContactCta(product)}
        </Link>
        <Link href="/local-pickup" className="cta-button cta-secondary">
          Local Pickup Available
        </Link>
      </div>
    </article>
  );
}
