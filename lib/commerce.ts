import {
  getCameraProducts,
  getFeaturedProducts,
  getFilmProducts,
  getProduct,
  products,
  type Product
} from "@/lib/products";

export type CommerceProvider = "mock" | "shopify";

export type CommerceProduct = Product;

export const activeCommerceProvider: CommerceProvider = "mock";

export async function getCommerceProducts(): Promise<CommerceProduct[]> {
  return products;
}

export async function getCommerceProduct(
  slug: string
): Promise<CommerceProduct | undefined> {
  return getProduct(slug);
}

export async function getCommerceFilmProducts(): Promise<CommerceProduct[]> {
  return getFilmProducts();
}

export async function getCommerceCameraProducts(): Promise<CommerceProduct[]> {
  return getCameraProducts();
}

export async function getCommerceFeaturedProducts(): Promise<CommerceProduct[]> {
  return getFeaturedProducts();
}

export function isLiveCheckoutEnabled() {
  return false;
}
