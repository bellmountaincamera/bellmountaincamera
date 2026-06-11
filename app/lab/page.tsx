import type { Metadata } from "next";
import Image from "next/image";
import { ContactCTA } from "@/components/sections/ContactCTA";
import { CTAButton } from "@/components/ui/CTAButton";
import { MetadataLine } from "@/components/ui/MetadataLine";
import { PageHeader } from "@/components/ui/PageHeader";
import { TerminalLabel } from "@/components/ui/TerminalLabel";
import { filmLabDisclaimer, filmLabPricing, labWorkflow } from "@/lib/site";

export const metadata: Metadata = {
  title: "Film Lab",
  description:
    "C-41 film processing, scanning, digital delivery, and film order information for Bell Mountain Camera."
};

const faqs = [
  [
    "What film process is available first?",
    "BMC is focused on 35mm C-41 color negative film development and scanning. Black-and-white and E-6 are not listed as active services until confirmed."
  ],
  [
    "How long is turnaround?",
    "Typical turnaround is usually 3-7 business days depending on volume. BMC keeps this flexible instead of guaranteeing a fixed timeline."
  ],
  [
    "How are scans delivered?",
    "Scans are delivered digitally through a download link. Customers should download and back up their files after delivery."
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
        description="Drop off your film at Bell Mountain Camera inside Wild Goose Vintage & Thrift Store. BMC logs each order, tracks each roll, develops and scans the film, then sends digital scans by email."
        meta={["35MM FILM", "C-41 PROCESS", "SCANS DELIVERED DIGITALLY"]}
      />
      <section className="mx-auto grid max-w-7xl gap-10 px-4 py-14 sm:px-6 sm:py-20 lg:grid-cols-[0.9fr_1.1fr] lg:px-8">
        <div>
          <TerminalLabel>Order Workflow</TerminalLabel>
          <h2 className="mt-4 text-3xl font-semibold uppercase tracking-[0.02em]">
            A clear path from roll to scan
          </h2>
          <p className="mt-5 text-sm leading-7 text-[#4a4036]">
            BMC uses a hands-on film lab workflow with order tracking, roll
            numbers, scanning, and digital delivery. Typical turnaround is
            usually 3-7 business days depending on volume.
          </p>
          <div className="mt-7 flex flex-col gap-3 sm:flex-row">
            <CTAButton href="/contact">Start a Film Order</CTAButton>
            <CTAButton href="/contact" variant="secondary">
              Contact the Lab
            </CTAButton>
          </div>
        </div>
        <div className="grid gap-px border border-[#111111]/20 bg-[#111111]/20">
          {labWorkflow.map((item) => (
            <article key={item.step} className="bg-[#f3eee5] p-5">
              <p className="mono text-xs font-semibold uppercase tracking-[0.16em] text-[#8c7b6a]">
                STEP {item.step}
              </p>
              <h3 className="mt-3 text-xl font-semibold uppercase tracking-[0.03em]">
                {item.title}
              </h3>
              <p className="mt-3 text-sm leading-7 text-[#4a4036]">{item.text}</p>
            </article>
          ))}
        </div>
      </section>
      <section className="bg-[#111111] text-[#e8e2d8]">
        <div className="mx-auto max-w-7xl px-4 py-14 sm:px-6 sm:py-20 lg:px-8">
          <div className="mb-8">
            <TerminalLabel tone="dark">Scan Samples</TerminalLabel>
            <h2 className="mt-4 text-3xl font-semibold uppercase tracking-[0.02em]">
              Sample scan reference frames
            </h2>
          </div>
          <div className="grid gap-4 sm:grid-cols-3">
            {[1, 2, 3].map((frame) => (
              <div key={frame} className="border border-[#e8e2d8]/20 p-3">
                <div className="photo-grain relative aspect-[4/3] bg-[#2b2925]">
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
                  items={[`FRAME 0${frame}`, "SCAN: SAMPLE", "COLOR: C-41"]}
                />
              </div>
            ))}
          </div>
        </div>
      </section>
      <section className="border-b border-[#111111]/15 bg-[#111111] text-[#e8e2d8]">
        <div className="mx-auto grid max-w-7xl gap-8 px-4 py-14 sm:px-6 sm:py-20 lg:grid-cols-[0.8fr_1.2fr] lg:px-8">
          <div>
            <TerminalLabel tone="dark">Film Order Intake</TerminalLabel>
            <h2 className="mt-4 text-3xl font-semibold uppercase tracking-[0.02em]">
              Prepare a roll for drop-off
            </h2>
            <p className="mt-5 text-sm leading-7 text-[#c7b8a3]">
              This static intake form is ready for a future backend, email
              notification, or lab manager connection.
            </p>
          </div>
          <div className="grid gap-4">
            {[
              "Name",
              "Email",
              "Phone",
              "Number of rolls",
              "Film format",
              "Film process",
              "Develop only / Develop + scan",
              "Scan resolution",
              "Push / pull notes",
              "Dropbox delivery email",
              "Comments"
            ].map((label) => (
              <div key={label}>
                <label className="mono text-[0.7rem] uppercase tracking-[0.14em] text-[#c7b8a3]">
                  {label}
                </label>
                <div className="mt-2 min-h-11 border border-[#e8e2d8]/25 bg-[#e8e2d8]/5" />
              </div>
            ))}
            {[
              "I understand old, expired, heat-damaged, or improperly loaded film may produce poor or blank results.",
              "I understand scans are delivered digitally.",
              "I understand turnaround depends on current volume."
            ].map((label) => (
              <div key={label} className="flex gap-3">
                <div className="mt-1 h-4 w-4 border border-[#e8e2d8]/40" />
                <p className="text-sm leading-6 text-[#c7b8a3]">{label}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
      <section className="mx-auto max-w-7xl px-4 py-14 sm:px-6 sm:py-20 lg:px-8">
        <div className="mb-8 max-w-3xl">
          <TerminalLabel>Editable Lab Pricing</TerminalLabel>
          <h2 className="mt-4 text-3xl font-semibold uppercase tracking-[0.02em]">
            Film lab prices are not confirmed yet
          </h2>
          <p className="mt-5 text-sm leading-7 text-[#4a4036]">
            C-41 film development, film scanning, develop + scan, film
            drop-off, film pickup, and Dropbox digital scan delivery are listed
            here as editable pricing fields. No film lab prices are invented on
            this site.
          </p>
        </div>
        <div className="grid gap-px border border-[#111111]/20 bg-[#111111]/20 md:grid-cols-2 lg:grid-cols-3">
          {filmLabPricing.map((item) => (
            <article key={item.title} className="bg-[#f3eee5] p-5">
              <div className="flex items-start justify-between gap-4">
                <h3 className="text-lg font-semibold uppercase tracking-[0.03em]">
                  {item.title}
                </h3>
                <p className="mono text-xs font-semibold uppercase tracking-[0.12em] text-[#8c7b6a]">
                  {item.price}
                </p>
              </div>
              <p className="mt-4 text-sm leading-7 text-[#4a4036]">{item.text}</p>
            </article>
          ))}
        </div>
      </section>
      <section className="border-y border-[#111111]/15">
        <div className="mx-auto max-w-7xl px-4 py-14 sm:px-6 lg:px-8">
          <TerminalLabel>Film Lab Policy</TerminalLabel>
          <p className="mt-5 max-w-4xl text-sm leading-7 text-[#4a4036]">
            {filmLabDisclaimer}
          </p>
        </div>
      </section>
      <section className="mx-auto max-w-7xl px-4 py-14 sm:px-6 sm:py-20 lg:px-8">
        <TerminalLabel>FAQ</TerminalLabel>
        <div className="mt-6 grid gap-px border border-[#111111]/20 bg-[#111111]/20">
          {faqs.map(([question, answer]) => (
            <details key={question} className="group bg-[#f3eee5] p-5">
              <summary className="cursor-pointer text-lg font-semibold uppercase tracking-[0.03em]">
                {question}
              </summary>
              <p className="mt-4 text-sm leading-7 text-[#4a4036]">{answer}</p>
            </details>
          ))}
        </div>
      </section>
      <ContactCTA />
    </main>
  );
}
