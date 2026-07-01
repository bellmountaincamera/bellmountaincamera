import type { Metadata } from "next";
import Image from "next/image";
import { ContactCTA } from "@/components/sections/ContactCTA";
import { FilmLabPhotoCarousel } from "@/components/sections/FilmLabPhotoCarousel";
import { MetadataLine } from "@/components/ui/MetadataLine";
import { PageHeader } from "@/components/ui/PageHeader";
import { TerminalLabel } from "@/components/ui/TerminalLabel";
import { filmLabDisclaimer, filmLabPricing } from "@/lib/site";

export const metadata: Metadata = {
  title: "Film Lab",
  description:
    "Film development, scanning, JPEG and TIFF delivery, regular-border scans, and full-border scans from Bell Mountain Camera."
};

const faqs = [
  [
    "What film can I drop off?",
    "Disposable cameras, 35mm, 110, and APS film are accepted."
  ],
  [
    "What processes are available?",
    "C-41 is the main process. Black-and-white and E-6 are handled in specialty batches, so turnaround may be longer."
  ],
  [
    "What is the difference between JPEG and TIFF?",
    "JPEG files are smaller, easy to share, and work well for everyday posting, texting, and general use. TIFF files are larger and keep more image information, which makes them better for editing, archiving, and higher-quality output."
  ],
  [
    "Can I get full-border scans?",
    "Yes. Regular scans crop to the image area. Full-border scans show the film edge and frame border for a more archival look."
  ],
  [
    "Can C-41 be pushed or pulled?",
    "Yes. Push and pull development is available for C-41 orders at $3 per stop."
  ],
  [
    "Where do I drop off film?",
    "Drop off film at Bell Mountain Camera inside Wild Goose Vintage & Thrift Store in Apple Valley during business hours."
  ]
];

export default function LabPage() {
  return (
    <main>
      <PageHeader
        label="Lab Counter"
        title="Film Lab"
        description="Film developing and scanning in Apple Valley."
        meta={[]}
        photoSet="lab"
      />

      <section className="mx-auto max-w-7xl px-4 py-10 sm:px-6 sm:py-14 lg:px-8">
        <TerminalLabel>Film Lab Pricing</TerminalLabel>
        <h2 className="mt-4 text-3xl font-semibold uppercase tracking-[0.02em]">
          Current development menu
        </h2>
        <div className="mt-8 border border-[#111111] bg-[#111111]">
          <div className="hidden grid-cols-[1fr_0.55fr_1.6fr] gap-px text-left md:grid">
            {["Service", "Price / Detail", "Notes"].map((heading) => (
              <div
                key={heading}
                className="mono bg-[#111111] px-4 py-3 text-xs font-semibold uppercase tracking-[0.14em] text-[#FFFFFF]"
              >
                {heading}
              </div>
            ))}
          </div>
          <div className="grid gap-px">
            {filmLabPricing.map((item) => (
              <article
                key={item.title}
                className="grid gap-3 bg-[#FFFFFF] p-4 text-center md:grid-cols-[1fr_0.55fr_1.6fr] md:items-center md:gap-px md:p-0 md:text-left"
              >
                <h3 className="text-sm font-semibold uppercase tracking-[0.03em] md:px-4 md:py-4">
                  {item.title}
                </h3>
                <p className="mono text-sm font-semibold uppercase tracking-[0.12em] text-[#2457C5] md:px-4 md:py-4">
                  {item.price}
                </p>
                <p className="mx-auto max-w-md text-sm leading-6 text-[#111111] md:mx-0 md:max-w-none md:px-4 md:py-4">
                  {item.text}
                </p>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-[#111111] text-[#FFFFFF]">
        <div className="mx-auto max-w-7xl px-4 py-14 sm:px-6 sm:py-20 lg:px-8">
          <div className="mb-8 max-w-3xl">
            <TerminalLabel tone="dark">Scan Options</TerminalLabel>
            <h2 className="mt-4 text-3xl font-semibold uppercase tracking-[0.02em]">
              Full-border DSLR scans
            </h2>
            <p className="mt-5 text-sm leading-7 text-[#FFFFFF]">
              Full-border scans are made with a DSLR setup and include the film
              edge around each frame.
            </p>
          </div>

          <div className="overflow-x-auto">
            <div className="flex min-w-max gap-4 pb-2">
              {[
                {
                  src: "/images/test-rolls/full-border-dslr-01.jpg",
                  alt: "Full-border DSLR scan sample of a house between trees"
                },
                {
                  src: "/images/test-rolls/full-border-dslr-02.jpg",
                  alt: "Full-border DSLR scan sample of Half Dome"
                },
                {
                  src: "/images/test-rolls/full-border-dslr-03.jpg",
                  alt: "Full-border DSLR scan sample of a mountain wall"
                }
              ].map((sample, index) => (
                <article key={sample.src} className="w-[18rem] shrink-0 border border-[#FFFFFF]/20 p-3 sm:w-[22rem] lg:w-[24rem]">
                  <div className="photo-grain relative aspect-square overflow-hidden bg-[#111111]">
                    <Image
                      src={sample.src}
                      alt={sample.alt}
                      fill
                      sizes="(min-width: 1024px) 24rem, (min-width: 640px) 22rem, 18rem"
                      className="object-contain"
                    />
                  </div>
                  <div className="mt-4">
                    <MetadataLine
                      tone="dark"
                      items={[`DSLR SAMPLE ${String(index + 1).padStart(2, "0")}`, "FULL BORDER"]}
                    />
                  </div>
                </article>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-4 py-12 sm:px-6 sm:py-16 lg:px-8">
        <div className="mb-8 max-w-3xl">
          <TerminalLabel>Important Notes</TerminalLabel>
          <h2 className="mt-4 text-3xl font-semibold uppercase tracking-[0.02em]">
            Before you drop off film
          </h2>
          <p className="mt-5 text-sm leading-7 text-[#111111]">
            Write your name, phone number, film type, and scan preference with
            each order. Specialty film may need extra time.
          </p>
        </div>
      </section>

      <FilmLabPhotoCarousel />

      <section className="border-y border-[#111111]/15">
        <div className="mx-auto max-w-7xl px-4 py-10 sm:px-6 lg:px-8">
          <TerminalLabel>Film Lab Policy</TerminalLabel>
          <p className="mt-5 max-w-4xl text-sm leading-7 text-[#111111]">
            {filmLabDisclaimer}
          </p>
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-4 py-12 sm:px-6 sm:py-16 lg:px-8">
        <TerminalLabel>FAQ</TerminalLabel>
        <div className="mt-6 record-grid">
          {faqs.map(([question, answer]) => (
            <details key={question} className="group record-cell p-5">
              <summary className="cursor-pointer text-lg font-semibold uppercase tracking-[0.03em]">
                {question}
              </summary>
              <p className="mt-4 text-sm leading-7 text-[#111111]">{answer}</p>
            </details>
          ))}
        </div>
      </section>

      <ContactCTA />
    </main>
  );
}
