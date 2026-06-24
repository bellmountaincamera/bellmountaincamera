"use client";

import { useEffect, useState } from "react";
import { TerminalLabel } from "@/components/ui/TerminalLabel";

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
      <div className="mx-auto grid max-w-7xl gap-8 px-4 py-12 sm:px-6 sm:py-16 lg:grid-cols-[0.8fr_1.2fr] lg:items-center lg:px-8">
        <div>
          <TerminalLabel>Moving Frames</TerminalLabel>
          <h2 className="mt-4 text-3xl font-semibold uppercase tracking-[0.02em] sm:text-4xl">
            Film cameras, lab tools, and shop motion
          </h2>
          <p className="mt-5 text-sm leading-7 text-[#111111]">
            Short motion loops from Bell Mountain Camera. Each clip plays for
            three seconds before moving to the next frame.
          </p>
          <div className="mono mt-7 grid max-w-sm grid-cols-3 gap-2 text-[0.68rem] uppercase tracking-[0.12em] text-[#0B3D91]">
            <span>GIF LOOP</span>
            <span>3 SEC</span>
            <span>{String(activeIndex + 1).padStart(2, "0")} / {clips.length}</span>
          </div>
        </div>

        <div className="border border-[#111111] bg-[#FFFFFF] p-3">
          <div className="photo-grain relative mx-auto aspect-[9/16] max-h-[34rem] max-w-sm overflow-hidden border border-[#111111]/20 bg-[#111111] md:max-h-[40rem]">
            <img
              key={activeClip.src}
              src={activeClip.src}
              alt={`${activeClip.caption} animated GIF`}
              className="h-full w-full object-cover"
            />
            <div
              aria-hidden="true"
              className="pointer-events-none absolute inset-x-4 top-1/2 -translate-y-1/2 border border-[#FFFFFF]/35 bg-[#111111]/20 px-3 py-4 text-center mix-blend-screen"
            >
              <p className="mono text-xl font-semibold uppercase leading-tight tracking-[0.08em] text-[#FFFFFF] opacity-75 sm:text-2xl">
                Film cameras and film development in Apple Valley.
              </p>
            </div>
          </div>
          <div className="mono mt-3 flex flex-wrap justify-between gap-2 text-[0.68rem] uppercase tracking-[0.12em] text-[#0B3D91]">
            <span>{activeClip.caption}</span>
            <span>{activeClip.label}</span>
          </div>
        </div>
      </div>
    </section>
  );
}
