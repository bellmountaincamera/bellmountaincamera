"use client";

import { useMemo, useState } from "react";
import { AsciiLineLogo } from "@/components/brand/AsciiLineLogo";
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
      <div className="mb-6 grid gap-3 border border-[#2A2A2A] record-cell p-4 lg:grid-cols-[1fr_auto] lg:items-end">
        <label className="block">
          <span className="mono text-xs font-semibold uppercase tracking-[0.14em] text-[#2457C5]">
            Search
          </span>
          <input
            value={query}
            onChange={(event) => setQuery(event.currentTarget.value)}
            onInput={(event) => setQuery(event.currentTarget.value)}
            placeholder="Search film, cameras, or products..."
            className="mt-2 w-full border border-[#D8D8D2] bg-[#FFFFFF] px-4 py-3 text-sm outline-none focus:border-[#2457C5]"
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
                ? "border-[#2457C5] bg-[#111111] text-[#FAFAF8]"
                : "border-[#D8D8D2] bg-[#FAFAF8] text-[#666666] hover:border-[#2457C5]"
            }`}
          >
            {filter}
          </button>
        ))}
      </div>
      {filtered.length ? (
        <div className="record-grid md:grid-cols-2 xl:grid-cols-3">
          {filtered.map((product) => (
            <ProductCard key={product.slug} product={product} />
          ))}
        </div>
      ) : (
        <div className="border border-[#2A2A2A] record-cell p-6 text-sm leading-7 text-[#333333]">
          <AsciiLineLogo
            className="mb-4"
            lines={["SEARCH", "NO MATCH", "ASK BMC"]}
          />
          No products found. Contact BMC for current availability.
        </div>
      )}
    </div>
  );
}
