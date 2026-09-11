import type { Metadata } from "next";
import { CTAButton } from "@/components/ui/CTAButton";
import { EmailDraftForm } from "@/components/ui/EmailDraftForm";
import { PageHeader } from "@/components/ui/PageHeader";
import { TerminalLabel } from "@/components/ui/TerminalLabel";
import { cameraServiceMenu, serviceBundles, serviceDisclaimer } from "@/lib/site";

export const metadata: Metadata = {
  title: "Camera Services",
  description: "Diagnostics, cleaning, light seal replacement, and basic function checks for film cameras at Bell Mountain Camera."
};

export default function ServicesPage() {
  return (
    <main>
      <PageHeader label="Service Bench" title="Services" description="Basic service for film cameras."
        meta={["Walk-ins welcome", "Appointments available"]} textOnly />
      <section className="section-band">
        <div className="section-container service-layout">
          <div className="service-intro">
            <TerminalLabel>Workbench</TerminalLabel>
            <h2 className="mt-4">Camera service menu</h2>
            <p className="mt-5 text-base leading-7 text-[#686c72]">Diagnosis, cleaning, light seals, and shutter checks when possible.</p>
            <p className="workbench-status mono">Workbench status: Available</p>
            <div className="mt-6"><CTAButton href="#service-intake">Service inquiry</CTAButton></div>
          </div>
          <div>
            <div className="service-menu-group">
              <TerminalLabel>Individual services</TerminalLabel>
              <div className="price-list">
                {cameraServiceMenu.map((service) => <article key={service.title} className="price-row">
                  <h3>{service.title}</h3><p className="price mono">{service.price}</p>
                  <p className="price-description">{service.text}</p>
                </article>)}
              </div>
            </div>
            <div className="service-menu-group">
              <TerminalLabel>Bundles</TerminalLabel>
              <div className="price-list">
                {serviceBundles.map((bundle) => <article key={bundle.title} className="price-row">
                  <h3>{bundle.title}</h3><p className="price mono">{bundle.price}</p>
                  {"text" in bundle && <p className="price-description">{bundle.text}</p>}
                </article>)}
              </div>
            </div>
          </div>
        </div>
      </section>
      <section className="section-band" id="service-intake">
        <div className="section-container service-layout">
          <div className="service-intro">
            <TerminalLabel>Service intake</TerminalLabel>
            <h2 className="mt-4">Tell us about your camera.</h2>
            <p className="mt-5 text-base leading-7 text-[#686c72]">Send model, issue, and drop-off notes.</p>
          </div>
          <EmailDraftForm id="service" title="Camera details" subject="Camera service request" submitLabel="Open service email" columns
            fields={[
              { name: "name", label: "Name", required: true, autoComplete: "name" },
              { name: "email", label: "Email", type: "email", required: true, autoComplete: "email" },
              { name: "brand", label: "Camera brand", required: true },
              { name: "model", label: "Camera model", required: true },
              { name: "service", label: "Service requested", type: "select", options: ["Diagnosis", "Cleaning", "Light seal replacement", "Shutter speed adjustment", "Full service", "Not sure"] },
              { name: "last-worked", label: "Last worked" },
              { name: "battery", label: "Battery type, if known" },
              { name: "film-tested", label: "Film tested?", type: "select", options: ["Yes", "No", "Not sure"] },
              { name: "issue", label: "Issue and notes", type: "textarea", required: true, fullWidth: true }
            ]} />
        </div>
      </section>
      <section className="section-band">
        <div className="section-container text-center">
          <TerminalLabel>Service note</TerminalLabel>
          <p className="mx-auto mt-5 max-w-2xl text-left text-base leading-8 text-[#686c72]">{serviceDisclaimer}</p>
        </div>
      </section>
    </main>
  );
}
