"use client";

import Image from "next/image";
import { useEffect, useState } from "react";
import type { PhotoFrame } from "@/lib/photo-sets";

type PagePhotoSlideshowProps = {
  frames: PhotoFrame[];
  label?: string;
  aspect?: "wide" | "portrait";
};

export function PagePhotoSlideshow({
  frames,
  label = "Photo File",
  aspect = "wide"
}: PagePhotoSlideshowProps) {
  const [activeIndex, setActiveIndex] = useState(0);
  const activeFrame = frames[activeIndex] ?? frames[0];

  useEffect(() => {
    if (frames.length <= 1) return;

    const timer = window.setInterval(() => {
      setActiveIndex((current) => (current === frames.length - 1 ? 0 : current + 1));
    }, 3000);

    return () => window.clearInterval(timer);
  }, [frames.length]);

  if (!activeFrame) return null;

  return (
    <div className="border border-[#111111] bg-[#FFFFFF] p-3">
      <div
        className={[
          "photo-grain relative overflow-hidden border border-[#111111]/20 bg-[#111111]",
          aspect === "portrait" ? "aspect-[4/5]" : "aspect-[4/3]"
        ].join(" ")}
      >
        <Image
          key={activeFrame.src}
          src={activeFrame.src}
          alt={activeFrame.alt ?? activeFrame.title}
          fill
          sizes="(min-width: 1024px) 38vw, 100vw"
          className="object-cover"
        />
      </div>
      <div className="mono mt-3 grid grid-cols-2 gap-2 text-[0.68rem] uppercase tracking-[0.12em] text-[#0B3D91] sm:grid-cols-4">
        <span>{label}</span>
        <span>{activeFrame.label}</span>
        <span>{String(activeIndex + 1).padStart(2, "0")} / {frames.length}</span>
        <span>3 SEC</span>
      </div>
    </div>
  );
}
