import type { Metadata } from "next";
import Image from "next/image";
import { AsciiLineLogo } from "@/components/brand/AsciiLineLogo";
import { TerminalDivider } from "@/components/brand/TerminalDivider";
import { TerminalStatusPanel } from "@/components/brand/TerminalStatusPanel";
import { ContactCTA } from "@/components/sections/ContactCTA";
import { CTAButton } from "@/components/ui/CTAButton";
import { MetadataLine } from "@/components/ui/MetadataLine";
import { PageHeader } from "@/components/ui/PageHeader";
import { TerminalLabel } from "@/components/ui/TerminalLabel";
import { filmLabDisclaimer, filmLabPricing, labWorkflow } from "@/lib/site";

export const metadata: Metadata = {
  title: "Film Lab",
  description:
    "C-41 film processing, black-and-white and E-6 specialty processing, scanning, and film order information for Bell Mountain Camera."
};

const faqs = [
  [
    "What film processes are available?",
    "C-41 is the main process. Black-and-white and E-6 are available as specialty orders and may have delayed delivery."
  ],
  [
    "How long is turnaround?",
    "Turnaround depends on current volume and film process. Specialty black-and-white and E-6 orders may take longer than standard C-41 orders."
  ],
  [
    "How are scans delivered?",
    "Scans are delivered digitally as JPEG or TIFF files. Customers should download and back up their files after delivery."
  ],
  [
    "What film formats can I drop off?",
    "BMC accepts disposable cameras, 35mm, 110, and APS film."
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
        description="Drop off disposable cameras, 35mm, 110, or APS film at Bell Mountain Camera. C-41 is the main process, with black-and-white and E-6 handled as specialty orders."
        meta={["C-41 MAIN PROCESS", "B&W / E-6 SPECIALTY", "JPEG OR TIFF SCANS"]}
      />
      <section className="mx-auto grid max-w-7xl gap-10 px-4 py-14 sm:px-6 sm:py-20 lg:grid-cols-[0.9fr_1.1fr] lg:px-8">
        <div>
          <TerminalLabel>Order Workflow</TerminalLabel>
          <h2 className="mt-4 text-3xl font-semibold uppercase tracking-[0.02em]">
            A clear path from roll to scan
          </h2>
          <p className="mt-5 text-sm leading-7 text-[#333333]">
            BMC develops disposable cameras, 35mm, 110, and APS film. C-41 is
            the main process. Black-and-white and E-6 are specialty orders and
            may have delayed delivery depending on batch timing.
          </p>
          <div className="mt-6">
            <TerminalStatusPanel
              title="LAB PROCESS LOG"
              rows={[
                ["Main", "C-41"],
                ["Specialty", "B&W / E-6"],
                ["Formats", "35mm / 110 / APS"],
                ["Scans", "JPEG / TIFF"]
              ]}
            />
          </div>
          <div className="mt-7 flex flex-col gap-3 sm:flex-row">
            <CTAButton href="/contact">Start a Film Order</CTAButton>
            <CTAButton href="/contact" variant="secondary">
              Contact the Lab
            </CTAButton>
          </div>
        </div>
        <div className="record-grid">
          {labWorkflow.map((item) => (
            <article key={item.step} className="record-cell p-5">
              <p className="mono text-xs font-semibold uppercase tracking-[0.16em] text-[#666666]">
                STEP {item.step}
              </p>
              <h3 className="mt-3 text-xl font-semibold uppercase tracking-[0.03em]">
                {item.title}
              </h3>
              <p className="mt-3 text-sm leading-7 text-[#333333]">{item.text}</p>
            </article>
          ))}
        </div>
      </section>
      <section className="bg-[#111111] text-[#FAFAF8]">
        <div className="mx-auto max-w-7xl px-4 py-14 sm:px-6 sm:py-20 lg:px-8">
          <div className="mb-8 grid gap-6 lg:grid-cols-[1fr_auto] lg:items-end">
            <div>
              <TerminalLabel tone="dark">Scan Samples</TerminalLabel>
              <h2 className="mt-4 text-3xl font-semibold uppercase tracking-[0.02em]">
                Sample scan reference frames
              </h2>
            </div>
            <AsciiLineLogo tone="dark" variant="full" />
          </div>
          <div className="grid gap-4 sm:grid-cols-3">
            {[1, 2, 3].map((frame) => (
              <div key={frame} className="border border-[#FAFAF8]/20 p-3">
                <div className="photo-grain relative aspect-[4/3] bg-[#1A1A1A]">
                  <Image
                    src="/images/film-lab-workbench.png"
                    alt={`Film scan reference frame ${frame}`}
                    fill
                    sizes="(min-width: 768px) 33vw, 100vw"
                    className="object-cover opacity-75"
                  />
                </div>
                <MetadataLine
                  tone="dark"
                  items={[`FRAME 0${frame}`, "SCAN: SAMPLE", "JPEG / TIFF"]}
                />
              </div>
            ))}
          </div>
        </div>
      </section>
      <section className="border-b border-[#111111]/15 bg-[#111111] text-[#FAFAF8]">
        <div className="mx-auto grid max-w-7xl gap-8 px-4 py-14 sm:px-6 sm:py-20 lg:grid-cols-[0.8fr_1.2fr] lg:px-8">
          <div>
            <TerminalLabel tone="dark">Film Order Intake</TerminalLabel>
            <h2 className="mt-4 text-3xl font-semibold uppercase tracking-[0.02em]">
              Prepare a roll for drop-off
            </h2>
            <p className="mt-5 text-sm leading-7 text-[#D8D8D2]">
              This static intake form is ready for a future backend. For now,
              customers can use it as a guide for what to include when asking
              about film development.
            </p>
          </div>
          <div className="grid gap-4">
            {[
              "Name",
              "Email",
              "Phone",
              "Number of rolls",
              "Film format",
              "Film process: C-41 / B&W / E-6",
              "Develop only / Develop + scan",
              "Scan file type: JPEG / TIFF",
              "Push / pull notes",
              "Digital delivery email",
              "Comments"
            ].map((label) => (
              <div key={label}>
                <label className="mono text-[0.7rem] uppercase tracking-[0.14em] text-[#D8D8D2]">
                  {label}
                </label>
                <div className="mt-2 min-h-11 border border-[#FAFAF8]/25 bg-[#FAFAF8]/5" />
              </div>
            ))}
            {[
              "I understand old, expired, heat-damaged, or improperly loaded film may produce poor or blank results.",
              "I understand scans are delivered digitally as JPEG or TIFF files.",
              "I understand black-and-white and E-6 specialty orders may have delayed delivery."
            ].map((label) => (
              <div key={label} className="flex gap-3">
                <div className="mt-1 h-4 w-4 border border-[#FAFAF8]/40" />
                <p className="text-sm leading-6 text-[#D8D8D2]">{label}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
      <section className="mx-auto max-w-7xl px-4 py-14 sm:px-6 sm:py-20 lg:px-8">
        <div className="mb-10">
          <TerminalDivider label="LAB PRICE TABLE / EDITABLE" />
        </div>
        <div className="mb-8 max-w-3xl">
          <TerminalLabel>Editable Lab Pricing</TerminalLabel>
          <h2 className="mt-4 text-3xl font-semibold uppercase tracking-[0.02em]">
            Film lab pricing
          </h2>
          <p className="mt-5 text-sm leading-7 text-[#333333]">
            Develop + scan is $15. Develop only is $10. C-41 push or pull
            development is $3 per stop. Black-and-white and E-6 are specialty
            orders and may have delayed delivery.
          </p>
        </div>
        <div className="record-grid md:grid-cols-2 lg:grid-cols-3">
          {filmLabPricing.map((item) => (
            <article key={item.title} className="record-cell p-5">
              <div className="flex items-start justify-between gap-4">
                <h3 className="text-lg font-semibold uppercase tracking-[0.03em]">
                  {item.title}
                </h3>
                <p className="mono text-xs font-semibold uppercase tracking-[0.12em] text-[#666666]">
                  {item.price}
                </p>
              </div>
              <p className="mt-4 text-sm leading-7 text-[#333333]">{item.text}</p>
            </article>
          ))}
        </div>
      </section>
      <section className="border-y border-[#111111]/15">
        <div className="mx-auto max-w-7xl px-4 py-14 sm:px-6 lg:px-8">
          <TerminalLabel>Film Lab Policy</TerminalLabel>
          <p className="mt-5 max-w-4xl text-sm leading-7 text-[#333333]">
            {filmLabDisclaimer}
          </p>
        </div>
      </section>
      <section className="mx-auto max-w-7xl px-4 py-14 sm:px-6 sm:py-20 lg:px-8">
        <TerminalLabel>FAQ</TerminalLabel>
        <div className="mt-6 record-grid">
          {faqs.map(([question, answer]) => (
            <details key={question} className="group record-cell p-5">
              <summary className="cursor-pointer text-lg font-semibold uppercase tracking-[0.03em]">
                {question}
              </summary>
              <p className="mt-4 text-sm leading-7 text-[#333333]">{answer}</p>
            </details>
          ))}
        </div>
      </section>
      <ContactCTA />
    </main>
  );
}
