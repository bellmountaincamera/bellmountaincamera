"use client";

import { useEffect, useRef, useState } from "react";
import Link from "next/link";
import { site } from "@/lib/site";

export function MailerLiteSignup() {
  const frame = useRef<HTMLIFrameElement>(null);
  const [opened, setOpened] = useState(false);
  const [attempt, setAttempt] = useState(0);
  const [status, setStatus] = useState<"loading" | "ready" | "error">("loading");
  const [height, setHeight] = useState(420);

  useEffect(() => {
    if (!opened) return;
    const timeout = window.setTimeout(() => setStatus("error"), 15000);
    function receive(event: MessageEvent) {
      if (event.source !== frame.current?.contentWindow || event.origin !== window.location.origin) return;
      const data = event.data;
      if (!data || data.type !== "bmc-newsletter") return;
      if (typeof data.height === "number" && Number.isFinite(data.height)) {
        setHeight(Math.min(1600, Math.max(240, Math.ceil(data.height))));
      }
      if (data.status === "ready" || data.status === "error") {
        window.clearTimeout(timeout);
        setStatus(data.status);
      }
    }
    window.addEventListener("message", receive);
    return () => {
      window.clearTimeout(timeout);
      window.removeEventListener("message", receive);
    };
  }, [opened, attempt]);

  function open() {
    setStatus("loading");
    setHeight(420);
    setAttempt((value) => value + 1);
    setOpened(true);
  }

  return (
    <div className="mx-auto mt-7 max-w-xl">
      {!opened && <button type="button" className="cta-button cta-primary" onClick={open}>Open email signup</button>}
      {opened && (
        <>
          <p role="status" aria-live="polite" className={status === "ready" ? "sr-only" : "form-note"}>
            {status === "loading" ? "Loading signup..." : status === "error" ? "Signup is unavailable right now. Try again or email BMC." : "Signup form loaded."}
          </p>
          <iframe
            key={attempt}
            ref={frame}
            src="/newsletter/embed.html"
            title="BMC email newsletter signup"
            className="newsletter-embed"
            hidden={status === "error"}
            style={{ height }}
            referrerPolicy="strict-origin-when-cross-origin"
          />
          <div className="mt-3 flex flex-wrap justify-center gap-3">
            {status === "error" && <button className="cta-button cta-secondary" type="button" onClick={open}>Retry signup</button>}
            <button className="cta-button cta-secondary" type="button" onClick={() => setOpened(false)}>Close signup</button>
          </div>
        </>
      )}
      <p className="form-note text-left">
        Opening signup connects to MailerLite, which records form activity and may use cookies. Unsubscribe from any update. <Link href="/privacy">Privacy</Link> · <Link href="/cookies">Cookies</Link>.
      </p>
      <p className="form-note text-center"><a href={`mailto:${site.email}`}>Email BMC</a></p>
    </div>
  );
}
