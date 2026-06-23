"use client";

import { useState } from "react";

type ProductImageProps = {
  src?: string;
  alt: string;
  label?: string;
  className?: string;
};

export function ProductImage({ src, alt, label, className = "" }: ProductImageProps) {
  const [failed, setFailed] = useState(!src);

  return (
    <div className={`product-photo overflow-hidden ${className}`}>
      {src && !failed ? (
        // eslint-disable-next-line @next/next/no-img-element
        <img
          src={src}
          alt={alt}
          className="h-full w-full object-cover"
          onError={() => setFailed(true)}
        />
      ) : (
        <>
          <span className="mono text-[0.68rem] uppercase tracking-[0.14em] text-[#0B3D91]">
            Product image coming soon
          </span>
          <span className="mt-3 text-center text-xl font-semibold uppercase tracking-[0.03em]">
            {label ?? alt}
          </span>
        </>
      )}
    </div>
  );
}
