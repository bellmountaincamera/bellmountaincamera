"use client";

import { FormEvent, useMemo, useState } from "react";
import { TerminalLabel } from "@/components/ui/TerminalLabel";
import { site } from "@/lib/site";

export function EmailSignupSection() {
  const [email, setEmail] = useState("");

  const mailtoHref = useMemo(() => {
    const subject = "BMC email list signup";
    const body = [
      "Hi Bell Mountain Camera,",
      "",
      "Please add me to the BMC email list.",
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
  }

  return (
    <section className="border-b border-[#111111]/15">
      <div className="mx-auto max-w-5xl px-4 py-10 text-center sm:px-6 sm:py-14 lg:px-8">
        <TerminalLabel>Email Signup</TerminalLabel>
        <h2 className="mx-auto mt-4 max-w-3xl text-3xl font-semibold uppercase tracking-[0.02em] sm:text-4xl">
          Get BMC updates
        </h2>
        <p className="mx-auto mt-4 max-w-xl text-sm leading-7 text-[#111111]">
          Join the Bell Mountain Camera email list for film lab updates, camera
          drops, film stock notes, and shop announcements.
        </p>
        <form
          onSubmit={handleSubmit}
          className="mx-auto mt-7 grid max-w-xl gap-3 sm:grid-cols-[1fr_auto]"
        >
          <label className="sr-only" htmlFor="bmc-email-signup">
            Email address
          </label>
          <input
            id="bmc-email-signup"
            type="email"
            value={email}
            onChange={(event) => setEmail(event.currentTarget.value)}
            required
            className="w-full border border-[#111111] bg-[#FFFFFF] px-4 py-3 text-center text-base outline-none focus:border-[#2457C5] sm:text-left"
          />
          <button type="submit" className="cta-button cta-primary">
            Sign Up
          </button>
        </form>
        <p className="ocr mt-4 text-[0.66rem] uppercase text-[#2457C5]">
          Opens an email draft to BMC
        </p>
      </div>
    </section>
  );
}
