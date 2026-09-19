import { TerminalLabel } from "@/components/ui/TerminalLabel";
import { MailerLiteSignup } from "@/components/sections/MailerLiteSignup";

export function EmailSignupSection() {
  return (
    <section className="newsletter-section section-band">
      <div className="section-container text-center">
        <TerminalLabel>From the lab</TerminalLabel>
        <h2 className="mx-auto mt-4 max-w-3xl text-3xl font-semibold uppercase tracking-[0.02em] sm:text-4xl">
          Get BMC updates
        </h2>
        <p className="mx-auto mt-4 max-w-xl text-sm leading-7 text-[#111111]">
          Film lab updates, camera drops, and shop notes.
        </p>
        <MailerLiteSignup />
      </div>
    </section>
  );
}
