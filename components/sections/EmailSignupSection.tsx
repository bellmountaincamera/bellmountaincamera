"use client";

import { FormEvent, useMemo, useState } from "react";
import Link from "next/link";
import { TerminalLabel } from "@/components/ui/TerminalLabel";
import { site } from "@/lib/site";
import { policyUpdated } from "@/lib/policies";

export function EmailSignupSection() {
  const [email, setEmail] = useState("");
  const [opened, setOpened] = useState(false);

  const mailtoHref = useMemo(() => {
    const subject = "BMC email list signup";
    const body = [
      "Hi Bell Mountain Camera,",
      "",
      "Please add me to the BMC email list.",
      "I agree to receive BMC email updates. I can unsubscribe by emailing BMC.",
      `Privacy policy version: ${policyUpdated}`,
      "",
      `Email: ${email}`,
      "",
      "Thank you."
    ].join("\n");

    return `mailto:${site.email}?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`;
  }, [email]);

  function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    window.location.href = mailtoHref;
    setOpened(true);
  }

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
        <form
          onSubmit={handleSubmit}
          onChange={() => setOpened(false)}
          aria-label="BMC email updates signup"
          className="mx-auto mt-7 grid max-w-xl gap-3 sm:grid-cols-[1fr_auto]"
        >
          <label className="sr-only" htmlFor="bmc-email-signup">
            Email address (required)
          </label>
          <input
            id="bmc-email-signup"
            type="email"
            autoComplete="email"
            placeholder="Your email address"
            value={email}
            onChange={(event) => setEmail(event.currentTarget.value)}
            required
            className="w-full min-w-0 border border-[#111111] bg-[#FFFFFF] px-4 py-3 text-center text-base focus:border-[#496787] sm:text-left"
          />
          <button type="submit" className="cta-button cta-primary">
            Request signup
          </button>
          <label className="form-consent sm:col-span-2" htmlFor="bmc-updates-consent">
            <input id="bmc-updates-consent" name="marketing-consent" type="checkbox" required />
            <span>I want BMC email updates. (Required to sign up.)</span>
          </label>
        </form>
        <p className="form-note mx-auto max-w-xl text-left">
          Opens an email draft. Send it to request signup. Unsubscribe by emailing BMC. <Link href="/privacy">Privacy policy</Link>.
        </p>
        {opened && <p className="form-result" role="status">Send the draft in your email app to request BMC updates.</p>}
      </div>
    </section>
  );
}
