"use client";

import Image from "next/image";
import { MetadataLine } from "@/components/ui/MetadataLine";
import { TerminalLabel } from "@/components/ui/TerminalLabel";
import { labPhotos } from "@/lib/photo-sets";

export function FilmLabPhotoCarousel() {
  return (
    <section className="border-y border-[#111111]/15 bg-[#FFFFFF]">
      <div className="mx-auto max-w-7xl px-4 py-12 sm:px-6 sm:py-16 lg:px-8">
        <div className="mb-8 max-w-3xl">
          <TerminalLabel>Lab Photo Index</TerminalLabel>
          <h2 className="mt-4 text-3xl font-semibold uppercase tracking-[0.02em]">
            Lab reference photos
          </h2>
          <p className="mt-5 text-sm leading-7 text-[#111111]">
            Processor photos, chemistry setup, scan samples, and test frames
            from the lab.
          </p>
        </div>

        <div className="overflow-x-auto">
          <div className="flex min-w-max gap-4 pb-2">
            {labPhotos.map((frame, index) => (
              <article key={frame.src} className="w-[18rem] shrink-0 border border-[#111111] bg-[#FFFFFF] p-3 sm:w-[22rem] lg:w-[24rem]">
                <div className="photo-grain relative aspect-square overflow-hidden bg-[#111111]">
                  <Image
                    src={frame.src}
                    alt={frame.title}
                    fill
                    sizes="(min-width: 1024px) 24rem, (min-width: 640px) 22rem, 18rem"
                    className="object-cover"
                  />
                </div>
                <div className="mt-4">
                  <MetadataLine
                    items={[String(index + 1).padStart(2, "0"), frame.label]}
                  />
                </div>
                <h3 className="mt-3 text-lg font-semibold uppercase tracking-[0.03em]">
                  {frame.title}
                </h3>
              </article>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
