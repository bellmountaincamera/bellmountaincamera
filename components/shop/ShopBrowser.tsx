"use client";

import { useMemo, useState } from "react";
import { ProductCard } from "@/components/ui/ProductCard";
import type { Product } from "@/lib/products";

const filterOptions = ["Film", "Cameras", "35mm", "110", "Color", "Black & White", "Available"];

type ShopBrowserProps = {
  products: Product[];
  initialFilter?: string;
};

function productText(product: Product) {
  const fields = [
    product.name,
    product.category,
    product.description,
    product.status,
    product.kind,
    product.kind === "film" ? product.brand : product.brand,
    product.kind === "film" ? product.format : product.format,
    product.kind === "film" ? product.iso : product.model,
    product.kind === "film" ? product.filmType : product.condition,
    product.kind === "camera" ? product.testedStatus : "",
    product.kind === "camera" ? product.notes : ""
  ];

  return fields.join(" ").toLowerCase();
}

function matchesFilter(product: Product, filter: string) {
  if (filter === "Film") return product.kind === "film";
  if (filter === "Cameras") return product.kind === "camera";
  if (filter === "35mm") return productText(product).includes("35mm");
  if (filter === "110") return productText(product).includes("110");
  if (filter === "Color") return productText(product).includes("color");
  if (filter === "Black & White") return productText(product).includes("black & white");
  if (filter === "Available") return product.quantity > 0 && product.status !== "Sold";
  return true;
}

export function ShopBrowser({ products, initialFilter = "" }: ShopBrowserProps) {
  const [query, setQuery] = useState("");
  const [activeFilters, setActiveFilters] = useState<string[]>(
    initialFilter ? [initialFilter] : []
  );

  const filtered = useMemo(() => {
    const normalizedQuery = query.trim().toLowerCase();
    return products.filter((product) => {
      const text = productText(product);
      const queryMatches = !normalizedQuery || text.includes(normalizedQuery);
      const filtersMatch = activeFilters.every((filter) => matchesFilter(product, filter));
      return queryMatches && filtersMatch;
    });
  }, [activeFilters, products, query]);

  function toggleFilter(filter: string) {
    setActiveFilters((current) =>
      current.includes(filter)
        ? current.filter((item) => item !== filter)
        : [...current, filter]
    );
  }

  return (
    <div>
      <div className="mb-6 grid gap-3 border border-[#111111]/20 bg-[#f3eee5] p-4 lg:grid-cols-[1fr_auto] lg:items-end">
        <label className="block">
          <span className="mono text-xs font-semibold uppercase tracking-[0.14em] text-[#6f604f]">
            Search
          </span>
          <input
            value={query}
            onChange={(event) => setQuery(event.currentTarget.value)}
            onInput={(event) => setQuery(event.currentTarget.value)}
            placeholder="Search film, cameras, or products..."
            className="mt-2 w-full border border-[#111111]/20 bg-[#fffaf2] px-4 py-3 text-sm outline-none"
          />
        </label>
        <button
          type="button"
          onClick={() => {
            setQuery("");
            setActiveFilters(initialFilter ? [initialFilter] : []);
          }}
          className="cta-button cta-secondary"
        >
          Clear
        </button>
      </div>
      <div className="mb-8 flex flex-wrap gap-2">
        {filterOptions.map((filter) => (
          <button
            key={filter}
            type="button"
            onClick={() => toggleFilter(filter)}
            className={`mono border px-3 py-2 text-[0.7rem] font-semibold uppercase tracking-[0.14em] ${
              activeFilters.includes(filter)
                ? "border-[#111111] bg-[#111111] text-[#e8e2d8]"
                : "border-[#111111]/20 bg-[#f3eee5] text-[#6f604f]"
            }`}
          >
            {filter}
          </button>
        ))}
      </div>
      {filtered.length ? (
        <div className="grid gap-px overflow-hidden border border-[#111111]/20 bg-[#111111]/20 md:grid-cols-2 xl:grid-cols-3">
          {filtered.map((product) => (
            <ProductCard key={product.slug} product={product} />
          ))}
        </div>
      ) : (
        <div className="border border-[#111111]/20 bg-[#f3eee5] p-6 text-sm leading-7 text-[#4a4036]">
          No products found. Contact BMC for current availability.
        </div>
      )}
    </div>
  );
}
