import type { Metadata } from "next";
import Image from "next/image";
import { ContinuousPhotoCarousel } from "@/components/ui/ContinuousPhotoCarousel";
import { ContactCTA } from "@/components/sections/ContactCTA";
import { PageHeader } from "@/components/ui/PageHeader";
import { TerminalLabel } from "@/components/ui/TerminalLabel";
import { filmLabDisclaimer, filmLabPricing, labInfo, labWorkflow } from "@/lib/site";

export const metadata: Metadata = {
  title: "Film Lab",
  description: "C-41 color negative film development and scanning for 35mm and 110 in Apple Valley, CA. View per-roll prices and slide scanning."
};

const faqs = [
  ["What film can I drop off?", "BMC processes 35mm and 110 C-41 color negative film."],
  ["What if my negatives are already developed?", "Choose scanning only. Development is not included."],
  ["Do you develop slides?", "No. BMC scans already-developed positive slides at $10 per 36 slides."],
  ["Can I get full-border scans?", "Ask BMC about full-border scans, which include the film edge around the image."]
];

const samples = [
  { src: "/images/test-rolls/full-border-dslr-01.jpg", alt: "Full-border DSLR scan of a house between trees, with Kodak film edges visible" },
  { src: "/images/test-rolls/full-border-dslr-02.jpg", alt: "Full-border DSLR scan of Half Dome, with the film edges visible" },
  { src: "/images/test-rolls/full-border-dslr-03.jpg", alt: "Full-border DSLR scan of a mountain wall, with the film edges visible" }
];

export default function LabPage() {
  return (
    <main className="lab-type">
      <PageHeader label="Film Lab" title="Film Lab" description="C-41 color negative film development and scanning in Apple Valley."
        meta={[labInfo.formats, "C-41 ONLY"]} textOnly />

      <section className="section-band lab-pricing-band" id="pricing">
        <div className="section-container">
          <div className="section-heading">
            <TerminalLabel>Film development</TerminalLabel>
            <h2>Film lab menu</h2>
            <p className="lab-menu-intro">35mm and 110 C-41 color negative film. All prices are in USD, per roll.</p>
          </div>
          <div className="lab-menu-photo">
            <Image src="/images/test-rolls/processor-open.jpg" alt="Noritsu film processor at Bell Mountain Camera" fill
              sizes="(min-width: 768px) 800px, 100vw" className="lab-menu-image" priority />
            <div className="lab-menu-surface">
              <p className="lab-menu-kicker ocr">BMC / C-41 / PER ROLL</p>
              <table className="lab-menu-table">
                <caption className="sr-only">Film development and scanning prices per roll in US dollars</caption>
                <colgroup><col className="lab-service-column" /><col /><col /></colgroup>
                <thead><tr><th scope="col">Service</th><th scope="col">35mm</th><th scope="col">110</th></tr></thead>
                <tbody>
                  {filmLabPricing.map((item, index) => (
                    <tr key={item.title} className={index === 0 ? "lab-featured-price" : ""}>
                      <th scope="row"><span>{item.title}</span><small>{item.description}</small></th>
                      <td>{item.prices["35mm"]}</td><td>{item.prices["110"]}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        </div>
      </section>

      <section className="section-band lab-detail-band" id="slides" data-editor-name="Positive slide scanning">
        <div className="section-container lab-detail-content">
          <TerminalLabel>Positive slide scanning</TerminalLabel>
          <h2>$10 <span>/ 36 slides</span></h2>
          <p>Scanning for already-developed positive slides. Slide development is not available.</p>
        </div>
      </section>

      <section className="section-band lab-detail-band" id="delivery" data-editor-name="Digital delivery">
        <div className="section-container lab-detail-content">
          <TerminalLabel>Digital delivery</TerminalLabel>
          <p>{labInfo.scanDelivery}</p>
        </div>
      </section>

      <section className="section-band" id="drop-off">
        <div className="section-container">
          <div className="section-heading"><h2>How to leave film</h2></div>
          <ol className="dropoff-steps">
            {labWorkflow.map((item) => <li key={item.step}>{item.text}</li>)}
          </ol>
        </div>
      </section>

      <section className="section-band scan-section">
        <div className="section-container">
          <div className="section-heading">
            <TerminalLabel tone="dark">Scan examples</TerminalLabel>
            <h2>Full-border DSLR scans</h2>
            <p className="mx-auto mt-4 max-w-xl text-base leading-7">Made with a DSLR setup. Film edges included.</p>
          </div>
          <ContinuousPhotoCarousel frames={samples} label="Full-border scan examples" />
        </div>
      </section>

      <section className="section-band" id="lab-policy" data-editor-name="Film lab policy">
        <div className="section-container text-center">
          <TerminalLabel>Film lab policy</TerminalLabel>
          <p className="lab-policy-copy">{filmLabDisclaimer}</p>
        </div>
      </section>

      <section className="section-band">
        <div className="section-container">
          <div className="section-heading"><h2>Good to know</h2></div>
          <div className="record-grid mx-auto max-w-4xl">
            {faqs.map(([question, answer]) => <details key={question} className="record-cell">
              <summary>{question}</summary><p className="mt-4">{answer}</p>
            </details>)}
          </div>
        </div>
      </section>
      <ContactCTA />
    </main>
  );
}
