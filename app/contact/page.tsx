import type { Metadata } from "next";
import { site } from "@/lib/site";
import { CTAButton } from "@/components/ui/CTAButton";
import { EmailDraftForm } from "@/components/ui/EmailDraftForm";
import { PageHeader } from "@/components/ui/PageHeader";
import { TerminalLabel } from "@/components/ui/TerminalLabel";

export const metadata: Metadata = {
  title: "Contact",
  description: "Visit Bell Mountain Camera in Apple Valley for film development, used cameras, and camera service."
};

export default function ContactPage() {
  const directionsUrl = "https://www.google.com/maps/search/?api=1&query=Bell%20Mountain%20Camera%2021810%20CA-18%20Unit%20%232%20Apple%20Valley%20CA%2092307";
  const appointmentMailto = `mailto:${site.email}?subject=${encodeURIComponent(site.appointmentEmailSubject)}&body=${encodeURIComponent(site.appointmentEmailBody)}`;
  return (
    <main>
      <PageHeader label="Contact" title="Contact" description="Drop off film, ask about a camera, or schedule service."
        meta={["Apple Valley, CA", "Walk-ins welcome"]} textOnly />
      <section className="section-band">
        <div className="section-container contact-layout">
          <div className="contact-details">
            <div><TerminalLabel>Email</TerminalLabel><a href={`mailto:${site.email}`}>{site.email}</a></div>
            <div><TerminalLabel>Instagram</TerminalLabel><a href="https://www.instagram.com/bellmountaincamera/">{site.instagram}</a></div>
            <div><TerminalLabel>Visit</TerminalLabel><p>{site.locationName}<br />{site.street}<br />{site.cityStateZip}</p><p className="mt-3">{site.vendorNumber} / By the cashier</p></div>
            <div><TerminalLabel>Hours</TerminalLabel>{site.hours.map((item) => <p key={item.days}>{item.days}<br />{item.time}</p>)}</div>
            <div><TerminalLabel>Appointments</TerminalLabel><p>Available by request.</p></div>
            <div className="flex flex-wrap justify-center gap-3">
              <CTAButton href={directionsUrl} variant="secondary">Get directions</CTAButton>
              <CTAButton href="#appointments" variant="secondary">Appointments</CTAButton>
            </div>
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
      <section className="section-band" id="appointments">
        <div className="section-container service-layout">
          <div className="service-intro">
            <TerminalLabel>By appointment</TerminalLabel>
            <h2 className="mt-4">Plan your visit.</h2>
            <p className="mt-5 text-base leading-7 text-[#686c72]">For camera service, detailed lab questions, and pickup timing.</p>
            <div className="mt-7"><CTAButton href={appointmentMailto}>Request appointment</CTAButton></div>
          </div>
          <div className="record-grid">
            {site.appointmentAvailability.map((item) => <article key={item.days} className="record-cell p-6 text-center">
              <TerminalLabel>{item.days}</TerminalLabel><p className="mt-3 text-base">{item.time}</p>
            </article>)}
          </div>
        </div>
      </section>
      <section className="section-band">
        <div className="section-container">
          <div className="section-heading"><TerminalLabel>Apple Valley, CA</TerminalLabel><h2>Find the shop.</h2></div>
          <iframe title="Map to Bell Mountain Camera inside Wild Goose Vintage and Thrift Store"
            src="https://www.google.com/maps?q=21810%20CA-18%20Unit%20%232%20Apple%20Valley%20CA%2092307&output=embed"
            className="h-80 w-full border border-[#d8dce0] sm:h-96" loading="lazy" />
          <div className="mt-6 text-center"><CTAButton href={directionsUrl} variant="secondary">Open directions</CTAButton></div>
        </div>
      </section>
    </main>
  );
}
