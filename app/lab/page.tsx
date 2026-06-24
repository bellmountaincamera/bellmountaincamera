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
        <div className="mt-8 overflow-x-auto border border-[#111111]">
          <table className="w-full min-w-[44rem] border-collapse text-left">
            <caption className="sr-only">
              Bell Mountain Camera film development pricing and processing notes
            </caption>
            <thead className="bg-[#111111] text-[#FFFFFF]">
              <tr>
                <th scope="col" className="mono px-4 py-3 text-xs uppercase tracking-[0.14em]">
                  Service
                </th>
                <th scope="col" className="mono px-4 py-3 text-xs uppercase tracking-[0.14em]">
                  Price / Detail
                </th>
                <th scope="col" className="mono px-4 py-3 text-xs uppercase tracking-[0.14em]">
                  Notes
                </th>
              </tr>
            </thead>
            <tbody>
              {filmLabPricing.map((item) => (
                <tr key={item.title} className="border-t border-[#111111] bg-[#FFFFFF]">
                  <th
                    scope="row"
                    className="px-4 py-4 text-sm font-semibold uppercase tracking-[0.03em]"
                  >
                    {item.title}
                  </th>
                  <td className="mono px-4 py-4 text-sm font-semibold uppercase tracking-[0.12em] text-[#0B3D91]">
                    {item.price}
                  </td>
                  <td className="px-4 py-4 text-sm leading-6 text-[#111111]">
                    {item.text}
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
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
              Full-border scans are DSLR scanned for higher-detail files and
              include the film edge around the frame.
            </p>
          </div>

          <div className="grid gap-4 lg:grid-cols-3">
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
              <article key={sample.src} className="border border-[#FFFFFF]/20 p-3">
                <div className="photo-grain relative aspect-[4/5] overflow-hidden bg-[#111111]">
                  <Image
                    src={sample.src}
                    alt={sample.alt}
                    fill
                    sizes="(min-width: 1024px) 33vw, 100vw"
                    className="object-cover"
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
