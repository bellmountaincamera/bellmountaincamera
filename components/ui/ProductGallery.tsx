"use client";

import { useState } from "react";
import { ProductImage } from "@/components/ui/ProductImage";

type ProductGalleryProps = {
  images: string[];
  productName: string;
};

export function ProductGallery({ images, productName }: ProductGalleryProps) {
  const usableImages = images.length ? images : [""];
  const [index, setIndex] = useState(0);
  const current = usableImages[index] ?? usableImages[0];

  function previous() {
    setIndex((value) => (value === 0 ? usableImages.length - 1 : value - 1));
  }

  function next() {
    setIndex((value) => (value + 1) % usableImages.length);
  }

  return (
    <div className="document-panel p-4">
      <ProductImage
        src={current}
        alt={`${productName} product photo ${index + 1}`}
        label={productName}
        className="min-h-[24rem]"
      />
      <div className="mt-3 flex items-center justify-between gap-3">
        <p className="mono text-xs uppercase tracking-[0.12em] text-[#2457C5]">
          Photo {index + 1} / {usableImages.length}
        </p>
        <div className="flex gap-2">
          <button
            type="button"
            onClick={previous}
            className="cta-button cta-secondary min-h-0 px-3 py-2 text-xs"
            aria-label="Previous product image"
          >
            Prev
          </button>
          <button
            type="button"
            onClick={next}
            className="cta-button cta-secondary min-h-0 px-3 py-2 text-xs"
            aria-label="Next product image"
          >
            Next
          </button>
        </div>
      </div>
      <div className="mt-3 grid grid-cols-4 gap-2">
        {usableImages.map((image, imageIndex) => (
          <button
            type="button"
            key={`${image}-${imageIndex}`}
            onClick={() => setIndex(imageIndex)}
            className={`min-w-0 border p-2 ${
              imageIndex === index ? "border-[#2457C5]" : "border-[#D8D8D2]"
            }`}
            aria-label={`Show image ${imageIndex + 1}`}
          >
            <span className="mono block text-xs uppercase tracking-[0.12em] text-[#666666]">
              {String(imageIndex + 1).padStart(2, "0")}
            </span>
          </button>
        ))}
      </div>
    </div>
  );
}
