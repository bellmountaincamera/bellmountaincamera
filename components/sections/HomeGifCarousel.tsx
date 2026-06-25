"use client";

import Link from "next/link";
import { useEffect, useState } from "react";
const clips = [
  {
    src: "/images/home-carousel/clip-01.gif",
    label: "Clip 01",
    caption: "Camera counter detail"
  },
  {
    src: "/images/home-carousel/clip-04.gif",
    label: "Clip 04",
    caption: "Film shop motion"
  },
  {
    src: "/images/home-carousel/clip-05.gif",
    label: "Clip 05",
    caption: "Used camera shelf"
  },
  {
    src: "/images/home-carousel/clip-08.gif",
    label: "Clip 08",
    caption: "Analog workspace"
  },
  {
    src: "/images/home-carousel/clip-09.gif",
    label: "Clip 09",
    caption: "High Desert film lab"
  },
  {
    src: "/images/home-carousel/clip-10.gif",
    label: "Clip 10",
    caption: "Shop process"
  },
  {
    src: "/images/home-carousel/clip-11.gif",
    label: "Clip 11",
    caption: "Camera handling"
  },
  {
    src: "/images/home-carousel/clip-13.gif",
    label: "Clip 13",
    caption: "Film camera detail"
  },
  {
    src: "/images/home-carousel/clip-14.gif",
    label: "Clip 14",
    caption: "BMC preview loop"
  }
];

export function HomeGifCarousel() {
  const [activeIndex, setActiveIndex] = useState(0);
  const activeClip = clips[activeIndex];

  useEffect(() => {
    const timer = window.setInterval(() => {
      setActiveIndex((current) => (current === clips.length - 1 ? 0 : current + 1));
    }, 3000);

    return () => window.clearInterval(timer);
  }, []);

  return (
    <section className="border-b border-[#111111]/15">
      <div className="mx-auto max-w-7xl px-4 py-8 sm:px-6 sm:py-10 lg:px-8">
        <div className="border border-[#111111] bg-[#FFFFFF] p-3">
          <div className="photo-grain relative mx-auto aspect-[9/16] max-h-[36rem] max-w-sm overflow-hidden border border-[#111111]/20 bg-[#111111] sm:max-h-[42rem] lg:aspect-[16/9] lg:max-h-[36rem] lg:max-w-none">
            <img
              key={activeClip.src}
              src={activeClip.src}
              alt={`${activeClip.caption} animated GIF`}
              className="h-full w-full object-cover"
            />
            <div className="pointer-events-none absolute inset-x-4 top-1/2 -translate-y-1/2 border border-[#FFFFFF]/35 bg-[#111111]/20 px-3 py-4 text-center mix-blend-screen sm:inset-x-8 sm:py-6">
              <h1 className="mx-auto max-w-4xl text-3xl font-semibold uppercase leading-[0.96] tracking-[0.01em] text-[#FFFFFF] opacity-80 sm:text-5xl lg:text-7xl">
                Film cameras and film development in Apple Valley.
              </h1>
            </div>
          </div>
          <div className="mono mt-3 flex flex-wrap justify-between gap-2 text-[0.68rem] uppercase tracking-[0.12em] text-[#2457C5]">
            <span>{activeClip.caption}</span>
            <span>3 SEC LOOP</span>
            <span>{activeClip.label}</span>
          </div>
          <div className="mt-4 flex justify-center">
            <Link
              href="/lab"
              className="mono inline-flex border border-[#111111] bg-[#FFFFFF] px-4 py-3 text-xs font-semibold uppercase tracking-[0.14em] text-[#111111] transition hover:border-[#2457C5] hover:text-[#2457C5]"
            >
              Film Development &amp; Info
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}
