import { CTAButton } from "@/components/ui/CTAButton";
import { TerminalLabel } from "@/components/ui/TerminalLabel";

export function ContactCTA({ cameraOnly = false }: { cameraOnly?: boolean }) {
  return (
    <section className={`contact-band section-band${cameraOnly ? " camera-contact-band" : ""}`}>
      <div className="section-container">
        {!cameraOnly && <TerminalLabel>At the counter</TerminalLabel>}
        <h2>{cameraOnly ? "Camera to check?" : <>Film to develop?<br />Camera to check?</>}</h2>
        <div className="mt-6"><CTAButton href="/contact">Talk to BMC</CTAButton></div>
      </div>
    </section>
  );
}
