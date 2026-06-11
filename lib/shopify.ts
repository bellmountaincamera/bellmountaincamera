import type { Product } from "@/lib/products";

// Future server-only Shopify configuration:
// SHOPIFY_STORE_DOMAIN=bell-mountain-camera.myshopify.com
// SHOPIFY_STOREFRONT_ACCESS_TOKEN=...
// SHOPIFY_API_VERSION=2026-04
//
// Keep Shopify Admin API tokens private and server-only. The public frontend
// should use the Storefront API token only through server components/actions or
// a narrow API route when checkout is connected.

export type ShopifyConfig = {
  storeDomain: string;
  storefrontAccessToken: string;
  apiVersion: string;
};

export type ShopifyProductMapping = {
  slug: string;
  shopifyProductId: string;
  shopifyVariantId: string;
};

export function getShopifyConfig(): ShopifyConfig | null {
  const storeDomain = process.env.SHOPIFY_STORE_DOMAIN;
  const storefrontAccessToken = process.env.SHOPIFY_STOREFRONT_ACCESS_TOKEN;
  const apiVersion = process.env.SHOPIFY_API_VERSION;

  if (!storeDomain || !storefrontAccessToken || !apiVersion) {
    return null;
  }

  return {
    storeDomain,
    storefrontAccessToken,
    apiVersion
  };
}

export function hasShopifyCredentials() {
  return getShopifyConfig() !== null;
}

export function mapProductToShopifyDraft(product: Product) {
  return {
    handle: product.slug,
    title: product.name,
    vendor: "brand" in product ? product.brand : "Bell Mountain Camera",
    productType: product.category,
    description: product.description,
    sku: product.sku,
    taxable: product.taxable ?? true,
    requiresShipping: product.requiresShipping ?? product.shippingAvailable,
    quantity: product.kind === "camera" ? Math.min(product.quantity, 1) : product.quantity,
    price: product.price,
    images: product.images ?? [product.image],
    metafields: {
      localPickup: product.pickupEligible ?? product.localPickup,
      condition: product.kind === "camera" ? product.condition : undefined,
      testedStatus: product.kind === "camera" ? product.testedStatus : undefined,
      conditionGrade: product.kind === "camera" ? product.conditionGrade : undefined
    }
  };
}
