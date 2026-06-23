"use client";

import { useState } from "react";
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

  function goToPrevious() {
    setActiveIndex((current) => (current === 0 ? clips.length - 1 : current - 1));
  }

  function goToNext() {
    setActiveIndex((current) => (current === clips.length - 1 ? 0 : current + 1));
  }

  return (
    <section className="border-b border-[#111111]/15">
      <div className="mx-auto grid max-w-7xl gap-8 px-4 py-12 sm:px-6 sm:py-16 lg:grid-cols-[0.8fr_1.2fr] lg:items-center lg:px-8">
        <div>
          <TerminalLabel>Moving Frames</TerminalLabel>
          <h2 className="mt-4 text-3xl font-semibold uppercase tracking-[0.02em] sm:text-4xl">
            Film cameras, lab tools, and shop motion
          </h2>
          <p className="mt-5 text-sm leading-7 text-[#333333]">
            Short motion loops from Bell Mountain Camera. Use the controls to
            scan through the clips without leaving the homepage.
          </p>
          <div className="mt-7 flex gap-3">
            <button
              type="button"
              onClick={goToPrevious}
              className="cta-button cta-secondary"
              aria-label="Show previous clip"
            >
              Prev
            </button>
            <button
              type="button"
              onClick={goToNext}
              className="cta-button cta-primary"
              aria-label="Show next clip"
            >
              Next
            </button>
          </div>
        </div>

        <div className="border border-[#2A2A2A] bg-[#FAFAF8] p-3">
          <div className="grid gap-4 md:grid-cols-[minmax(0,0.8fr)_minmax(0,0.2fr)]">
            <div className="photo-grain relative aspect-[9/16] max-h-[34rem] overflow-hidden border border-[#111111]/20 bg-[#111111] md:max-h-[40rem]">
              <img
                key={activeClip.src}
                src={activeClip.src}
                alt={`${activeClip.caption} animated GIF`}
                className="h-full w-full object-cover"
              />
            </div>
            <div className="grid grid-cols-3 gap-2 md:grid-cols-1">
              {clips.map((clip, index) => (
                <button
                  key={clip.src}
                  type="button"
                  onClick={() => setActiveIndex(index)}
                  className={[
                    "mono border px-2 py-2 text-[0.62rem] font-semibold uppercase tracking-[0.12em]",
                    index === activeIndex
                      ? "border-[#2457C5] bg-[#111111] text-[#FAFAF8]"
                      : "border-[#2A2A2A] bg-[#FAFAF8] text-[#111111]"
                  ].join(" ")}
                  aria-label={`Show ${clip.label}`}
                  aria-current={index === activeIndex ? "true" : undefined}
                >
                  {clip.label}
                </button>
              ))}
            </div>
          </div>
          <div className="mono mt-3 flex flex-wrap justify-between gap-2 text-[0.68rem] uppercase tracking-[0.12em] text-[#666666]">
            <span>{activeClip.caption}</span>
            <span>{activeClip.label}</span>
          </div>
        </div>
      </div>
    </section>
  );
}
