"use client";

import Image from "next/image";
import { useEffect, useState } from "react";
import { TerminalLabel } from "@/components/ui/TerminalLabel";
import { cameraPhotos, labPhotos } from "@/lib/photo-sets";

const featuredPhotos = [
  labPhotos[12],
  cameraPhotos[8],
  labPhotos[13],
  cameraPhotos[5],
  labPhotos[14],
  cameraPhotos[10],
  labPhotos[15]
].filter(Boolean);

export function FeaturedPhotosCarousel() {
  const [activeIndex, setActiveIndex] = useState(0);
  const activePhoto = featuredPhotos[activeIndex];

  useEffect(() => {
    if (featuredPhotos.length <= 1) return;

    const timer = window.setInterval(() => {
      setActiveIndex((current) =>
        current === featuredPhotos.length - 1 ? 0 : current + 1
      );
    }, 3000);

    return () => window.clearInterval(timer);
  }, []);

  if (!activePhoto) return null;

  return (
    <section className="border-b border-[#111111]/15 bg-[#FFFFFF]">
      <div className="mx-auto max-w-6xl px-4 py-10 text-center sm:px-6 sm:py-14 lg:px-8">
        <TerminalLabel>Featured Photos</TerminalLabel>
        <h2 className="mx-auto mt-4 max-w-3xl text-3xl font-semibold uppercase tracking-[0.02em] sm:text-4xl">
          Film files from BMC
        </h2>
        <p className="mx-auto mt-4 max-w-xl text-sm leading-7 text-[#111111]">
          Rotating scan samples, camera photos, and shop reference frames from
          Bell Mountain Camera.
        </p>

        <div className="mx-auto mt-8 max-w-4xl border border-[#111111] bg-[#FFFFFF] p-3">
          <div className="photo-grain relative aspect-[4/3] overflow-hidden bg-[#111111] sm:aspect-[16/10]">
            <Image
              key={activePhoto.src}
              src={activePhoto.src}
              alt={activePhoto.alt ?? activePhoto.title}
              fill
              sizes="(min-width: 1024px) 56rem, 100vw"
              className="object-cover"
              priority={activeIndex === 0}
            />
          </div>
          <div className="mt-4 grid gap-2 text-center sm:grid-cols-[1fr_auto_1fr] sm:items-center">
            <p className="ocr text-[0.66rem] uppercase text-[#2457C5] sm:text-left">
              {activePhoto.label}
            </p>
            <h3 className="text-lg font-semibold uppercase tracking-[0.03em]">
              {activePhoto.title}
            </h3>
            <p className="ocr text-[0.66rem] uppercase text-[#2457C5] sm:text-right">
              {String(activeIndex + 1).padStart(2, "0")} /{" "}
              {String(featuredPhotos.length).padStart(2, "0")}
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
