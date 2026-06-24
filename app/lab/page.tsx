import type { Metadata } from "next";
import Image from "next/image";
import { ContactCTA } from "@/components/sections/ContactCTA";
import { FilmLabPhotoCarousel } from "@/components/sections/FilmLabPhotoCarousel";
import { CTAButton } from "@/components/ui/CTAButton";
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
        description="Simple film development and scanning in Apple Valley. C-41 is the main process, with black-and-white and E-6 handled in specialty batches."
        meta={["C-41 MAIN PROCESS", "B&W / E-6 SPECIALTY", "JPEG OR TIFF SCANS"]}
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

      <section className="border-t border-[#111111]/15">
        <div className="mx-auto grid max-w-7xl gap-10 px-4 py-12 sm:px-6 sm:py-16 lg:grid-cols-[0.95fr_1.05fr] lg:px-8">
          <div>
            <TerminalLabel>Film Development</TerminalLabel>
            <h2 className="mt-4 text-3xl font-semibold uppercase tracking-[0.02em]">
              Drop off film. Get clean scans.
            </h2>
            <p className="mt-5 text-sm leading-7 text-[#111111]">
              Bell Mountain Camera develops disposable cameras, 35mm, 110, and
              APS film. Scans are delivered digitally as JPEG or TIFF files.
              C-41 push and pull processing is available by request.
            </p>
            <div className="mt-7 flex flex-col gap-3 sm:flex-row">
              <CTAButton href="/contact">Start a Film Order</CTAButton>
              <CTAButton href="/contact" variant="secondary">
                Contact the Lab
              </CTAButton>
            </div>
          </div>

          <div className="record-grid">
            {[
              ["Main", "C-41 color negative film"],
              ["Specialty", "B&W and E-6 may take longer"],
              ["Files", "JPEG or TIFF scan delivery"]
            ].map(([label, value]) => (
              <article key={label} className="record-cell p-5">
                <p className="mono text-[0.68rem] font-semibold uppercase tracking-[0.16em] text-[#0B3D91]">
                  {label}
                </p>
                <p className="mt-4 text-lg font-semibold uppercase tracking-[0.03em]">
                  {value}
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
              Regular border or full border
            </h2>
            <p className="mt-5 text-sm leading-7 text-[#FFFFFF]">
              Regular scans focus on the image. Full-border scans include the
              film edge and frame border for a more archival look.
            </p>
          </div>

          <div className="grid gap-5 md:grid-cols-2">
            <div className="border border-[#FFFFFF]/20 p-3">
              <div className="photo-grain relative aspect-[4/3] overflow-hidden bg-[#111111]">
                <Image
                  src="/images/test-rolls/processor-lines.jpg"
                  alt="Regular-border scan sample of film lab processor lines"
                  fill
                  sizes="(min-width: 768px) 50vw, 100vw"
                  className="scale-110 object-cover opacity-80"
                />
              </div>
              <div className="mt-4">
                <h3 className="text-xl font-semibold uppercase tracking-[0.03em]">
                  Regular Border Scan
                </h3>
                <p className="mt-3 text-sm leading-7 text-[#FFFFFF]">
                  A clean crop focused on the photograph. Best for sharing,
                  printing, and everyday delivery.
                </p>
                <div className="mt-4">
                  <MetadataLine
                    tone="dark"
                    items={["CROP: IMAGE AREA", "FILES: JPEG / TIFF"]}
                  />
                </div>
              </div>
            </div>

            <div className="border border-[#FFFFFF]/20 p-3">
              <div className="bg-[#FFFFFF] p-3">
                <div className="photo-grain relative aspect-[4/3] overflow-hidden bg-[#111111]">
                  <Image
                    src="/images/test-rolls/full-border-kodak.jpg"
                    alt="Full-border scan sample with visible film edge"
                    fill
                    sizes="(min-width: 768px) 50vw, 100vw"
                    className="object-cover opacity-80"
                  />
                </div>
              </div>
              <div className="mt-4">
                <h3 className="text-xl font-semibold uppercase tracking-[0.03em]">
                  Full Border Scan
                </h3>
                <p className="mt-3 text-sm leading-7 text-[#FFFFFF]">
                  Shows the frame edge and surrounding border. Good for
                  contact-sheet style previews and archival presentation.
                </p>
                <div className="mt-4">
                  <MetadataLine
                    tone="dark"
                    items={["CROP: FULL FRAME", "FILES: JPEG / TIFF"]}
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-4 py-12 sm:px-6 sm:py-16 lg:px-8">
        <div className="mb-8 max-w-3xl">
          <TerminalLabel>Important Notes</TerminalLabel>
          <h2 className="mt-4 text-3xl font-semibold uppercase tracking-[0.02em]">
            Specialty orders may take longer
          </h2>
          <p className="mt-5 text-sm leading-7 text-[#111111]">
            Black-and-white and E-6 are processed in specialty batches. C-41 is
            the standard process and is the fastest regular lab option.
          </p>
        </div>
        <div className="record-grid md:grid-cols-3">
          {[
            ["C-41", "Main color negative process"],
            ["B&W / E-6", "Specialty batch processing"],
            ["Push / Pull", "$3 per stop for C-41 orders"]
          ].map(([label, value]) => (
            <article key={label} className="record-cell p-5">
              <p className="mono text-[0.68rem] font-semibold uppercase tracking-[0.16em] text-[#0B3D91]">
                {label}
              </p>
              <p className="mt-4 text-lg font-semibold uppercase tracking-[0.03em]">
                {value}
              </p>
            </article>
          ))}
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
