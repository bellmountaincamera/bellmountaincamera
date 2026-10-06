import type { MetadataRoute } from "next";
import { siteUrl } from "@/lib/seo";

import { isIndexableProduct, products } from "@/lib/products";

const routes = [
  "",
  "/lab",
  "/shop",
  "/shop/film",
  "/shop/cameras",
  "/services",
  "/about",
  "/contact",
  "/shipping",
  "/returns",
  "/policies",
  "/local-pickup",
  "/privacy",
  "/cookies",
  "/terms",
  "/faq"
];

export default function sitemap(): MetadataRoute.Sitemap {
  return [
    ...routes.map((route) => ({
      url: `${siteUrl}${route}`
    })),
    ...products.filter(isIndexableProduct).map((product) => ({
      url: `${siteUrl}/shop/${product.slug}`
    }))
  ];
}
