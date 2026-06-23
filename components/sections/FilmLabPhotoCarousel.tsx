"use client";

import Image from "next/image";
import { useState } from "react";
import { TerminalLabel } from "@/components/ui/TerminalLabel";
import { labPhotos } from "@/lib/photo-sets";

export function FilmLabPhotoCarousel() {
  const [activeIndex, setActiveIndex] = useState(0);
  const activeFrame = labPhotos[activeIndex];

  return (
    <section className="border-y border-[#111111]/15 bg-[#FFFFFF]">
      <div className="mx-auto max-w-7xl px-4 py-12 sm:px-6 sm:py-16 lg:px-8">
        <div className="mb-8 max-w-3xl">
          <TerminalLabel>Lab Photo Index</TerminalLabel>
          <h2 className="mt-4 text-3xl font-semibold uppercase tracking-[0.02em]">
            Film lab reference photos
          </h2>
          <p className="mt-5 text-sm leading-7 text-[#111111]">
            Processor details, chemistry, scan examples, and test-roll frames
            from Bell Mountain Camera. These images show the working lab style
            behind the film development page.
          </p>
        </div>

        <div className="grid gap-6 lg:grid-cols-[1.15fr_0.85fr]">
          <div className="border border-[#111111] bg-[#FFFFFF] p-3">
            <div className="photo-grain relative aspect-[4/3] overflow-hidden bg-[#111111]">
              <Image
                src={activeFrame.src}
                alt={activeFrame.title}
                fill
                priority={activeIndex === 0}
                sizes="(min-width: 1024px) 58vw, 100vw"
                className="object-cover"
              />
            </div>
            <div className="mt-4 flex flex-col gap-3 border-t border-[#111111]/15 pt-4 sm:flex-row sm:items-start sm:justify-between">
              <div>
                <p className="mono text-[0.68rem] font-semibold uppercase tracking-[0.16em] text-[#0B3D91]">
                  {activeFrame.label}
                </p>
                <h3 className="mt-2 text-xl font-semibold uppercase tracking-[0.03em]">
                  {activeFrame.title}
                </h3>
              </div>
              <p className="max-w-md text-sm leading-7 text-[#111111]">
                {activeFrame.text}
              </p>
            </div>
          </div>

          <div className="record-grid sm:grid-cols-2 lg:grid-cols-1">
            {labPhotos.map((frame, index) => {
              const isActive = index === activeIndex;

              return (
                <button
                  key={frame.src}
                  type="button"
                  onClick={() => setActiveIndex(index)}
                  className={`record-cell p-3 text-left transition ${
                    isActive
                      ? "border-[#0B3D91] bg-[#FFFFFF]"
                      : "hover:border-[#0B3D91]"
                  }`}
                >
                  <div className="flex gap-3">
                    <div className="photo-grain relative h-20 w-20 shrink-0 overflow-hidden border border-[#111111]/20 bg-[#111111]">
                      <Image
                        src={frame.src}
                        alt=""
                        fill
                        sizes="80px"
                        className="object-cover"
                      />
                    </div>
                    <div>
                      <p className="mono text-[0.64rem] font-semibold uppercase tracking-[0.16em] text-[#0B3D91]">
                        {String(index + 1).padStart(2, "0")} / {frame.label}
                      </p>
                      <p className="mt-2 text-sm font-semibold uppercase tracking-[0.03em]">
                        {frame.title}
                      </p>
                    </div>
                  </div>
                </button>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}
