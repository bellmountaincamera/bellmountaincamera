import Image from "next/image";
import { CTAButton } from "@/components/ui/CTAButton";
import { TerminalLabel } from "@/components/ui/TerminalLabel";
import { site } from "@/lib/site";

export function VisitSection() {
  return (
    <section className="visit-section section-band">
      <div className="section-container">
        <div className="section-heading">
          <TerminalLabel>Visit BMC</TerminalLabel>
          <h2>Your local film counter.</h2>
        </div>
        <div className="visit-layout">
          <div className="visit-photo">
            <Image src="/images/home-camera-counter.jpg" alt="The BMC camera counter in black and white" fill sizes="(min-width: 1024px) 600px, 92vw" className="object-cover" />
          </div>
          <div className="visit-details">
            <h3>Inside Wild Goose<br />Vintage &amp; Thrift</h3>
            <p className="visit-vendor mono">Unit #2 / {site.vendorNumber} / By the cashier</p>
            <div className="visit-record">
              <span className="terminal-label">Find us</span>
              <p>{site.street}<br />{site.cityStateZip}</p>
            </div>
            <div className="visit-record">
              <span className="terminal-label">Shop hours</span>
              <p>Tuesday - Saturday<br />10 AM - 4 PM</p>
            </div>
            <CTAButton href="/contact" variant="secondary">Visit &amp; Contact</CTAButton>
          </div>
        </div>
      </div>
    </section>
  );
}
