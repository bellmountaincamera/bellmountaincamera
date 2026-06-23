"use client";

import Image from "next/image";
import { useState } from "react";
import { TerminalLabel } from "@/components/ui/TerminalLabel";

const labFrames = [
  {
    src: "/images/test-rolls/lab-processor-vertical.jpg",
    label: "PROCESSOR",
    title: "Noritsu Film Processor",
    text: "Film transport and processor detail from the BMC lab setup."
  },
  {
    src: "/images/test-rolls/lab-processor-soft.jpg",
    label: "PROCESSOR DETAIL",
    title: "Processor Path Detail",
    text: "Soft-focus processor frame showing the mechanical film path."
  },
  {
    src: "/images/test-rolls/lab-processor-wide.jpg",
    label: "PROCESSOR PATH",
    title: "Open Processor Bed",
    text: "Wide view of the processor channel and film handling area."
  },
  {
    src: "/images/test-rolls/processor-lines.jpg",
    label: "REGULAR SCAN",
    title: "Regular Border Sample",
    text: "A cropped scan sample focused on the image area."
  },
  {
    src: "/images/test-rolls/processor-open.jpg",
    label: "TRANSPORT",
    title: "Open Transport Section",
    text: "Processor transport section used as a technical lab reference frame."
  },
  {
    src: "/images/test-rolls/chemistry-bottles.jpg",
    label: "CHEMISTRY",
    title: "Color Chemistry",
    text: "Kodak color chemistry bottles used as lab environment photography."
  },
  {
    src: "/images/test-rolls/full-border-kodak.jpg",
    label: "FULL BORDER",
    title: "Full Border Sample",
    text: "A full-border scan showing the frame edge and surrounding film area."
  },
  {
    src: "/images/test-rolls/full-border-detail.jpg",
    label: "FULL BORDER DETAIL",
    title: "Frame Edge Detail",
    text: "Full-border detail frame with visible film edge and lab texture."
  },
  {
    src: "/images/test-rolls/camera-shelf.jpg",
    label: "TEST FRAME",
    title: "Camera Shelf Frame",
    text: "A test-roll frame with shop gear and camera shelf detail."
  },
  {
    src: "/images/test-rolls/archive-audio-shelf.jpg",
    label: "ARCHIVE FRAME",
    title: "Archival Shelf Frame",
    text: "A test-roll frame with archival storage and analog equipment texture."
  }
];

export function FilmLabPhotoCarousel() {
  const [activeIndex, setActiveIndex] = useState(0);
  const activeFrame = labFrames[activeIndex];

  return (
    <section className="border-y border-[#111111]/15 bg-[#FAFAF8]">
      <div className="mx-auto max-w-7xl px-4 py-12 sm:px-6 sm:py-16 lg:px-8">
        <div className="mb-8 max-w-3xl">
          <TerminalLabel>Lab Photo Index</TerminalLabel>
          <h2 className="mt-4 text-3xl font-semibold uppercase tracking-[0.02em]">
            Film lab reference photos
          </h2>
          <p className="mt-5 text-sm leading-7 text-[#333333]">
            Processor details, chemistry, scan examples, and test-roll frames
            from Bell Mountain Camera. These images show the working lab style
            behind the film development page.
          </p>
        </div>

        <div className="grid gap-6 lg:grid-cols-[1.15fr_0.85fr]">
          <div className="border border-[#2A2A2A] bg-[#FAFAF8] p-3">
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
                <p className="mono text-[0.68rem] font-semibold uppercase tracking-[0.16em] text-[#2457C5]">
                  {activeFrame.label}
                </p>
                <h3 className="mt-2 text-xl font-semibold uppercase tracking-[0.03em]">
                  {activeFrame.title}
                </h3>
              </div>
              <p className="max-w-md text-sm leading-7 text-[#333333]">
                {activeFrame.text}
              </p>
            </div>
          </div>

          <div className="record-grid sm:grid-cols-2 lg:grid-cols-1">
            {labFrames.map((frame, index) => {
              const isActive = index === activeIndex;

              return (
                <button
                  key={frame.src}
                  type="button"
                  onClick={() => setActiveIndex(index)}
                  className={`record-cell p-3 text-left transition ${
                    isActive
                      ? "border-[#2457C5] bg-white"
                      : "hover:border-[#2457C5]"
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
                      <p className="mono text-[0.64rem] font-semibold uppercase tracking-[0.16em] text-[#2457C5]">
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
