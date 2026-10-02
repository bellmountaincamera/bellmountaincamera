import type { Metadata } from "next";
import { ContinuousPhotoCarousel } from "@/components/ui/ContinuousPhotoCarousel";
import { ContactCTA } from "@/components/sections/ContactCTA";
import { FilmLabPhotoCarousel } from "@/components/sections/FilmLabPhotoCarousel";
import { PageHeader } from "@/components/ui/PageHeader";
import { TerminalLabel } from "@/components/ui/TerminalLabel";
import { filmLabDisclaimer, filmLabPricing, labInfo } from "@/lib/site";

export const metadata: Metadata = {
  title: "Film Lab",
  description: "Film development, scanning, JPEG and TIFF delivery, and full-border DSLR scans from Bell Mountain Camera in Apple Valley."
};

const faqs = [
  ["What film can I drop off?", "Disposable cameras, 35mm, 110, and APS film are accepted."],
  ["What processes are available?", "C-41 is the main process. Black-and-white is handled in specialty batches; turnaround may be longer."],
  ["JPEG or TIFF?", "JPEG files are smaller and ready to share. TIFF files retain more image information for editing and archiving."],
  ["Can I get full-border scans?", "Yes. Regular scans show the image area. Full-border scans also include the film edge."]
];
const samples = [
  { src: "/images/test-rolls/full-border-dslr-01.jpg", alt: "Full-border DSLR scan of a house between trees, with Kodak film edges visible" },
  { src: "/images/test-rolls/full-border-dslr-02.jpg", alt: "Full-border DSLR scan of Half Dome, with the film edges visible" },
  { src: "/images/test-rolls/full-border-dslr-03.jpg", alt: "Full-border DSLR scan of a mountain wall, with the film edges visible" }
];

export default function LabPage() {
  return (
    <main className="lab-type">
      <PageHeader label="Film Lab" title="Film Lab" description="Film developing and scanning in Apple Valley."
        meta={[`${labInfo.process} IN-HOUSE`, "JPEG / TIFF SCANS"]} textOnly hideIntro />
      <section className="section-band" id="pricing">
        <div className="section-container">
          <div className="section-heading">
            <TerminalLabel>Film development</TerminalLabel>
            <h2>Lab menu</h2>
            <p className="turnaround mono"><span>Current turnaround</span>C-41: {labInfo.turnaround}</p>
          </div>
          <div className="lab-menu">
            <div className="lab-menu-heading mono" aria-hidden="true"><span>Service</span><span>Per roll</span></div>
            {filmLabPricing.map((item) => <article key={item.title} className="lab-menu-row">
              <div><h3>{item.title}</h3><p>{item.text}</p></div>
              <strong>{item.price}</strong>
            </article>)}
            <div className="lab-menu-notes">
              <p><span>Accepted film</span>35mm, 110, APS &amp; disposable cameras</p>
              <p><span>Processes</span>C-41 / B&amp;W specialty batch</p>
              <p><span>Scan files</span>JPEG / TIFF by download link</p>
            </div>
          </div>
        </div>
      </section>
      <section className="section-band" id="drop-off">
        <div className="section-container">
          <div className="section-heading"><h2>How to drop off film</h2></div>
          <ol className="dropoff-steps">
            <li>Bring film to BMC inside Wild Goose Vintage &amp; Thrift.</li>
            <li>Include name, contact info, film type, and scan preference.</li>
            <li>Scans are delivered by download link.</li>
          </ol>
        </div>
      </section>
      <section className="section-band scan-section">
        <div className="section-container">
          <div className="section-heading">
            <TerminalLabel tone="dark">Scan options</TerminalLabel>
            <h2>Full-border DSLR scans</h2>
            <p className="mx-auto mt-4 max-w-xl text-base leading-7">Made with a DSLR setup. Film edges included.</p>
          </div>
          <ContinuousPhotoCarousel frames={samples} label="Full-border scan examples" />
        </div>
      </section>
      <FilmLabPhotoCarousel />
      <section className="section-band">
        <div className="section-container text-center">
          <TerminalLabel>Film lab policy</TerminalLabel>
          <p className="mx-auto mt-5 max-w-2xl text-left text-base leading-7 text-[#686c72]">{filmLabDisclaimer}</p>
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
