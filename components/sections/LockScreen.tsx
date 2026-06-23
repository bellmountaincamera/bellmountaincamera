"use client";

import { FormEvent, useState } from "react";
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
    <main className="min-h-screen border-[#111111] bg-[#FFFFFF] text-[#111111]">
      <section className="mx-auto flex min-h-screen max-w-5xl flex-col justify-between px-4 py-5 sm:px-6 sm:py-8 lg:px-8">
        <div className="flex items-center justify-between gap-4 border-b border-[#111111] pb-4">
          <div className="flex items-center gap-3">
            <span className="grid h-8 w-8 shrink-0 place-items-center border border-[#111111] bg-[#111111] text-[#FFFFFF] sm:h-9 sm:w-9">
              <span className="mono text-[0.68rem] font-semibold sm:text-xs">BM</span>
            </span>
            <div>
              <p className="text-xs font-semibold uppercase tracking-[0.08em] sm:text-sm">
                Bell Mountain Camera
              </p>
              <p className="mono mt-0.5 text-[0.62rem] uppercase tracking-[0.14em] text-[#0B3D91] sm:text-[0.68rem] sm:tracking-[0.16em]">
                Apple Valley, CA
              </p>
            </div>
          </div>
          <p className="mono hidden text-[0.68rem] font-semibold uppercase tracking-[0.16em] text-[#0B3D91] sm:block">
            Site Locked
          </p>
        </div>

        <div className="grid gap-8 py-10 sm:py-14 lg:grid-cols-[1fr_0.72fr] lg:items-center">
          <div>
            <h1 className="max-w-4xl text-[2.35rem] font-semibold uppercase leading-[0.98] tracking-[0.01em] sm:text-6xl lg:text-7xl">
              Film cameras and equipment in Apple Valley, CA.
            </h1>
            <div className="mt-6 sm:mt-8">
              <MetadataLine
                items={["SITE IS LOCKED", "COMING SOON", "APPLE VALLEY, CA"]}
              />
            </div>
            <form
              onSubmit={handleSubmit}
              className="mt-7 grid w-full max-w-sm gap-3 sm:mt-8 sm:grid-cols-[1fr_auto]"
            >
              <label className="block">
                <span className="mono text-[0.68rem] font-semibold uppercase tracking-[0.16em] text-[#0B3D91]">
                  Preview code
                </span>
                <input
                  value={code}
                  onChange={(event) => setCode(event.currentTarget.value)}
                  inputMode="numeric"
                  autoComplete="off"
                  className="mt-2 w-full border border-[#111111] bg-[#FFFFFF] px-4 py-3 text-base outline-none focus:border-[#0B3D91] sm:text-sm"
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
                  className="mono text-[0.68rem] uppercase tracking-[0.12em] text-[#0B3D91] sm:col-span-2"
                >
                  {error}
                </p>
              ) : null}
            </form>
          </div>
        </div>

        <div className="border-t border-[#111111] pt-4">
          <p className="mono text-[0.62rem] uppercase leading-5 tracking-[0.14em] text-[#0B3D91] sm:text-[0.68rem] sm:tracking-[0.16em]">
            Bell Mountain Camera / High Desert Film Camera Shop
          </p>
        </div>
      </section>
    </main>
  );
}
