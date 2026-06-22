"use client";

import { FormEvent, useState } from "react";
import { AsciiLineLogo } from "@/components/brand/AsciiLineLogo";
import { MetadataLine } from "@/components/ui/MetadataLine";

type LockScreenProps = {
  onUnlock?: () => void;
};

const unlockCode = "92395";

export function LockScreen({ onUnlock }: LockScreenProps) {
  const [code, setCode] = useState("");
  const [error, setError] = useState("");

  function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();

    if (code.trim() === unlockCode) {
      setError("");
      onUnlock?.();
      return;
    }

    setError("Code not recognized.");
  }

  return (
    <main className="min-h-screen border-[#2A2A2A] bg-[#FAFAF8] text-[#111111]">
      <section className="mx-auto flex min-h-screen max-w-5xl flex-col justify-between px-4 py-6 sm:px-6 sm:py-8 lg:px-8">
        <div className="flex items-center justify-between border-b border-[#2A2A2A] pb-4">
          <div className="flex items-center gap-3">
            <span className="grid h-9 w-9 place-items-center border border-[#111111] bg-[#111111] text-[#FAFAF8]">
              <span className="mono text-xs font-semibold">BM</span>
            </span>
            <div>
              <p className="text-sm font-semibold uppercase tracking-[0.08em]">
                Bell Mountain Camera
              </p>
              <p className="mono text-[0.68rem] uppercase tracking-[0.16em] text-[#666666]">
                Apple Valley, CA
              </p>
            </div>
          </div>
          <p className="mono hidden text-[0.68rem] font-semibold uppercase tracking-[0.16em] text-[#2457C5] sm:block">
            Site Locked
          </p>
        </div>

        <div className="py-14 sm:py-20">
          <div className="max-w-5xl">
            <h1 className="mono max-w-5xl text-3xl font-semibold uppercase leading-[1.02] tracking-[0.08em] sm:text-5xl lg:text-6xl">
              Film cameras and equipment in Apple Valley, CA.
            </h1>
            <div className="mt-8">
              <MetadataLine
                items={["SITE IS LOCKED", "COMING SOON", "APPLE VALLEY, CA"]}
              />
            </div>
            <div className="my-10 border-y border-[#2A2A2A] py-8">
              <AsciiLineLogo variant="full" />
            </div>
            <div className="grid gap-3 border-b border-[#D8D8D2] pb-8 text-sm sm:grid-cols-3">
              {[
                ["Status", "Coming soon"],
                ["Focus", "Film cameras / equipment"],
                ["Location", "Apple Valley, CA"]
              ].map(([label, value]) => (
                <div key={label} className="border-t border-[#D8D8D2] pt-3">
                  <p className="mono text-[0.68rem] uppercase tracking-[0.18em] text-[#666666]">
                    {label}
                  </p>
                  <p className="mt-2 font-medium">{value}</p>
                </div>
              ))}
            </div>
            <form
              onSubmit={handleSubmit}
              className="mt-8 grid max-w-sm gap-3 sm:grid-cols-[1fr_auto]"
            >
              <label className="block">
                <span className="mono text-[0.68rem] font-semibold uppercase tracking-[0.16em] text-[#666666]">
                  Preview code
                </span>
                <input
                  value={code}
                  onChange={(event) => setCode(event.currentTarget.value)}
                  inputMode="numeric"
                  autoComplete="off"
                  className="mt-2 w-full border border-[#2A2A2A] bg-[#FFFFFF] px-4 py-3 text-sm outline-none focus:border-[#2457C5]"
                  aria-describedby={error ? "unlock-error" : undefined}
                />
              </label>
              <button
                type="submit"
                className="cta-button cta-primary self-end"
              >
                Unlock
              </button>
              {error ? (
                <p
                  id="unlock-error"
                  className="mono text-[0.68rem] uppercase tracking-[0.12em] text-[#2457C5] sm:col-span-2"
                >
                  {error}
                </p>
              ) : null}
            </form>
          </div>
        </div>

        <div className="border-t border-[#2A2A2A] pt-4">
          <p className="mono text-[0.68rem] uppercase tracking-[0.16em] text-[#666666]">
            Bell Mountain Camera / High Desert Film Camera Shop
          </p>
        </div>
      </section>
    </main>
  );
}
