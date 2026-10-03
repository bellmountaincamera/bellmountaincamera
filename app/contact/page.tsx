import type { Metadata } from "next";
import { appleMapsUrl, site } from "@/lib/site";
import { CTAButton } from "@/components/ui/CTAButton";
import { EmailDraftForm } from "@/components/ui/EmailDraftForm";
import { PageHeader } from "@/components/ui/PageHeader";
import { TerminalLabel } from "@/components/ui/TerminalLabel";
import { LocationMap } from "@/components/ui/LocationMap";

export const metadata: Metadata = {
  title: "Contact",
  description: "Visit Bell Mountain Camera in Apple Valley for film development, used cameras, and camera service."
};

export default function ContactPage() {
  return (
    <main className="contact-page">
      <PageHeader label="Contact" title="Contact" description="Visit the shop or email BMC about film and cameras."
        meta={["Apple Valley, CA", "Walk-ins welcome"]} textOnly />
      <section className="section-band contact-main-band" data-editor-name="Visit and contact">
        <div className="section-container contact-layout">
          <h2 className="sr-only">Visit and contact BMC</h2>
          <div className="contact-details">
            <div className="contact-location"><TerminalLabel>Visit</TerminalLabel>
              <a className="contact-address" href={appleMapsUrl} target="_blank" rel="noopener noreferrer">
                {site.locationName}<br />{site.street}<br />{site.cityStateZip}
              </a>
              <p className="mt-3">{site.vendorNumber} / By the cashier</p>
            </div>
            <div id="hours" className="contact-hours"><TerminalLabel>Hours</TerminalLabel>{site.hours.map((item) => <p key={item.days}>{item.days}<br />{item.time}</p>)}</div>
            <div><TerminalLabel>Email</TerminalLabel><a href={`mailto:${site.email}`} aria-label={`Email BMC at ${site.email}`}>{site.email}</a></div>
            <div><TerminalLabel>Instagram</TerminalLabel><a href="https://www.instagram.com/bellmountaincamera/" target="_blank" rel="noopener noreferrer" aria-label="Bell Mountain Camera on Instagram">{site.instagram}</a></div>
            <div className="contact-directions"><CTAButton href={appleMapsUrl} variant="secondary">Open in Apple Maps</CTAButton></div>
          </div>
          <EmailDraftForm id="contact" title="Email BMC" subject="BMC shop inquiry" submitLabel="Open email draft"
            fields={[
              { name: "name", label: "Name", required: true, autoComplete: "name" },
              { name: "email", label: "Email", type: "email", required: true, autoComplete: "email" },
              { name: "reason", label: "Reason for contact", type: "select", required: true, options: ["Film drop-off", "Film scanning", "Camera service", "Film stock", "Camera inventory", "Local pickup", "General question"] },
              { name: "message", label: "Message", type: "textarea", required: true }
            ]} />
        </div>
      </section>
      <section className="section-band contact-map-band">
        <div className="section-container">
          <div className="section-heading"><TerminalLabel>Apple Valley, CA</TerminalLabel><h2>Find the shop.</h2></div>
          <LocationMap />
          <div className="mt-6 text-center"><CTAButton href={appleMapsUrl} variant="secondary">Open in Apple Maps</CTAButton></div>
        </div>
      </section>
    </main>
  );
}
