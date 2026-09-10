import { CTAButton } from "@/components/ui/CTAButton";
import { TerminalLabel } from "@/components/ui/TerminalLabel";

export function ContactCTA() {
  return (
    <section className="contact-band section-band">
      <div className="section-container">
        <TerminalLabel>At the counter</TerminalLabel>
        <h2>Film to develop?<br />Camera to check?</h2>
        <div className="mt-6"><CTAButton href="/contact">Talk to BMC</CTAButton></div>
      </div>
    </section>
  );
}
