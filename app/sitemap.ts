import type { MetadataRoute } from "next";
import { site } from "@/lib/site";

import { products } from "@/lib/products";

const routes = [
  "",
  "/lab",
  "/shop",
  "/shop/film",
  "/shop/cameras",
  "/cart",
  "/checkout",
  "/order-confirmation",
  "/services",
  "/about",
  "/contact",
  "/shipping",
  "/returns",
  "/policies",
  "/store-policy",
  "/used-camera-policy",
  "/film-lab-policy",
  "/local-pickup",
  "/privacy",
  "/terms",
  "/faq"
];

export default function sitemap(): MetadataRoute.Sitemap {
  return [
    ...routes.map((route) => ({
      url: `https://${site.domain}${route}`,
      lastModified: new Date(),
      changeFrequency: "monthly" as const,
      priority: route === "" ? 1 : 0.8
    })),
    ...products.map((product) => ({
      url: `https://${site.domain}/shop/${product.slug}`,
      lastModified: new Date(),
      changeFrequency: "weekly" as const,
      priority: 0.7
    }))
  ];
}
