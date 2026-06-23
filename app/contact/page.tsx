import type { Metadata } from "next";
import { site } from "@/lib/site";
import { CTAButton } from "@/components/ui/CTAButton";
import { PageHeader } from "@/components/ui/PageHeader";
import { TerminalLabel } from "@/components/ui/TerminalLabel";

export const metadata: Metadata = {
  title: "Contact",
  description:
    "Contact Bell Mountain Camera in Apple Valley for film drop-off, development, scanning, film stock, appointments, local pickup, and camera service."
};

export default function ContactPage() {
  const directionsUrl =
    "https://www.google.com/maps/search/?api=1&query=Bell%20Mountain%20Camera%2021810%20CA-18%20Unit%20%232%20Apple%20Valley%20CA%2092307";
  const appointmentMailto = `mailto:${site.email}?subject=${encodeURIComponent(
    site.appointmentEmailSubject
  )}&body=${encodeURIComponent(site.appointmentEmailBody)}`;

  return (
    <main>
      <PageHeader
        label="Contact Desk"
        title="Contact"
        description="Have a question about film, cameras, development, scanning, film stock, local pickup, or camera service? Walk in during business hours or request an appointment."
        meta={["WALK-INS WELCOME", "APPOINTMENTS AVAILABLE", "APPLE VALLEY, CA"]}
      />
      <section className="mx-auto grid max-w-7xl gap-8 px-4 py-14 sm:px-6 sm:py-20 lg:grid-cols-[0.9fr_1.1fr] lg:px-8">
        <div className="document-panel p-6">
          <TerminalLabel>Direct Lines</TerminalLabel>
          <div className="mt-6 grid gap-5 text-sm">
            <div>
              <p className="mono text-[0.7rem] uppercase tracking-[0.14em] text-[#666666]">
                Email
              </p>
              <a
                href={`mailto:${site.email}`}
                className="mt-1 block text-lg font-semibold hover:underline"
              >
                {site.email}
              </a>
            </div>
            <div>
              <p className="mono text-[0.7rem] uppercase tracking-[0.14em] text-[#666666]">
                Phone
              </p>
              <a
                href={`tel:${site.phone.replaceAll("-", "")}`}
                className="mt-1 block text-lg font-semibold hover:underline"
              >
                {site.phone}
              </a>
            </div>
            <div>
              <p className="mono text-[0.7rem] uppercase tracking-[0.14em] text-[#666666]">
                Instagram
              </p>
              <p className="mt-1 text-lg font-semibold">{site.instagram}</p>
            </div>
            <div>
              <p className="mono text-[0.7rem] uppercase tracking-[0.14em] text-[#666666]">
                Visit
              </p>
              <p className="mt-1 text-lg font-semibold">
                {site.locationName}
                <br />
                {site.street}
                <br />
                {site.cityStateZip}
              </p>
            </div>
            <div>
              <p className="mono text-[0.7rem] uppercase tracking-[0.14em] text-[#666666]">
                Hours
              </p>
              {site.hours.map((item) => (
                <p key={item.days} className="mt-1 text-lg font-semibold">
                  {item.days}: {item.time}
                </p>
              ))}
            </div>
            <div>
              <p className="mono text-[0.7rem] uppercase tracking-[0.14em] text-[#666666]">
                Appointments
              </p>
              <p className="mt-1 text-lg font-semibold">
                Request appointments one week in advance for best availability.
                Questions are always welcome by email or phone.
              </p>
            </div>
            <div className="grid gap-3 sm:grid-cols-2">
              <CTAButton href={`tel:${site.phone.replaceAll("-", "")}`}>
                Call BMC
              </CTAButton>
              <CTAButton href={`mailto:${site.email}`} variant="secondary">
                Email BMC
              </CTAButton>
              <CTAButton href={appointmentMailto} variant="secondary">
                Request Appointment
              </CTAButton>
              <CTAButton href={directionsUrl} variant="secondary">
                Get Directions
              </CTAButton>
              <CTAButton href="/local-pickup" variant="secondary">
                Visit the Shop
              </CTAButton>
            </div>
          </div>
        </div>
        <div className="terminal-panel p-6">
          <p className="mono text-xs font-semibold uppercase tracking-[0.16em] text-[#666666]">
            Email Intake Sheet
          </p>
          <div className="mt-6 grid gap-4">
            {["Name", "Email", "Phone", "Reason for contact", "Message"].map((label) => (
              <div key={label}>
                <label className="mono text-[0.7rem] uppercase tracking-[0.14em] text-[#D8D8D2]">
                  {label}
                </label>
                <div className="mt-2 min-h-11 border border-[#FAFAF8]/25 bg-[#FAFAF8]/5" />
              </div>
            ))}
          </div>
          <p className="mt-5 text-sm leading-7 text-[#D8D8D2]">
            No backend is connected in version 1. The public action is a mailto
            link so the site stays static, fast, and deployment-ready.
          </p>
          <div className="mt-5 grid gap-2 text-sm text-[#D8D8D2] sm:grid-cols-2">
            {[
              "Film drop-off",
              "Film scanning",
              "Camera service",
              "Film stock question",
              "Camera inventory question",
              "Online order question",
              "Shipping question",
              "Local pickup question",
              "General question"
            ].map((reason) => (
              <p key={reason} className="mono text-xs uppercase tracking-[0.12em]">
                {reason}
              </p>
            ))}
          </div>
          <div className="mt-6">
            <CTAButton href={`mailto:${site.email}`} variant="dark">
              Email the Shop
            </CTAButton>
          </div>
        </div>
      </section>
      <section className="border-t border-[#111111]/15 bg-[#FAFAF8]">
        <div className="mx-auto grid max-w-7xl gap-8 px-4 py-14 sm:px-6 sm:py-20 lg:grid-cols-[0.85fr_1.15fr] lg:px-8">
          <div>
            <TerminalLabel>Appointment Request</TerminalLabel>
            <h2 className="mt-4 text-3xl font-semibold uppercase tracking-[0.02em]">
              Plan a camera or lab visit
            </h2>
            <p className="mt-5 text-sm leading-7 text-[#333333]">
              Appointments are helpful for camera questions, service intake,
              film lab questions, pickup timing, or anything that may need a
              little more attention than a quick walk-in.
            </p>
            <div className="mt-7">
              <CTAButton href={appointmentMailto}>
                Request Appointment
              </CTAButton>
            </div>
          </div>
          <div className="record-grid">
            {site.appointmentAvailability.map((item) => (
              <article key={item.days} className="record-cell p-5">
                <p className="mono text-[0.68rem] font-semibold uppercase tracking-[0.16em] text-[#2457C5]">
                  {item.days}
                </p>
                <p className="mt-4 text-lg font-semibold uppercase tracking-[0.03em]">
                  {item.time}
                </p>
              </article>
            ))}
            <article className="record-cell p-5">
              <p className="mono text-[0.68rem] font-semibold uppercase tracking-[0.16em] text-[#2457C5]">
                Questions
              </p>
              <p className="mt-4 text-lg font-semibold uppercase tracking-[0.03em]">
                Contact BMC anytime for information before stopping by.
              </p>
            </article>
          </div>
        </div>
      </section>
      <section className="border-t border-[#111111]/15">
        <div className="mx-auto grid max-w-7xl gap-8 px-4 py-14 sm:px-6 sm:py-20 lg:grid-cols-[0.8fr_1.2fr] lg:px-8">
          <div>
            <TerminalLabel>Google Maps</TerminalLabel>
            <h2 className="mt-4 text-3xl font-semibold uppercase tracking-[0.02em]">
              Visit Bell Mountain Camera
            </h2>
            <p className="mt-5 text-sm leading-7 text-[#333333]">
              {site.locationName}
              <br />
              {site.street}
              <br />
              {site.cityStateZip}
            </p>
          </div>
          <iframe
            title="Map to Bell Mountain Camera inside Wild Goose Vintage and Thrift Store"
            src="https://www.google.com/maps?q=21810%20CA-18%20Unit%20%232%20Apple%20Valley%20CA%2092307&output=embed"
            className="min-h-[22rem] w-full border border-[#111111]/20"
            loading="lazy"
          />
          <div className="mt-4">
            <CTAButton href={directionsUrl} variant="secondary">
              Open Directions
            </CTAButton>
          </div>
        </div>
      </section>
    </main>
  );
}
