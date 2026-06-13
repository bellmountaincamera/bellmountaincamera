import Link from "next/link";
import { services } from "@/lib/site";
import { TerminalLabel } from "@/components/ui/TerminalLabel";

export function ServicesGrid() {
  return (
    <section className="mx-auto max-w-7xl px-4 py-14 sm:px-6 sm:py-20 lg:px-8">
      <div className="mb-8 flex flex-col gap-4 sm:flex-row sm:items-end sm:justify-between">
        <div>
          <TerminalLabel>Service Index</TerminalLabel>
          <h2 className="mt-4 text-3xl font-semibold uppercase tracking-[0.02em] sm:text-4xl">
            What BMC does
          </h2>
        </div>
        <p className="max-w-md text-sm leading-7 text-[#333333]">
          Film cameras, 35mm film stock, film development, scanning, film
          drop-off and pickup, and basic camera service for the High Desert film
          community.
        </p>
      </div>
      <div className="grid gap-px overflow-hidden border border-[#111111]/20 bg-[#111111]/20 sm:grid-cols-2 lg:grid-cols-3">
        {services.map((service) => (
          <Link key={service.title} href={service.href} className="bg-[#FAFAF8] p-6 hover:bg-[#FFFFFF]">
            <p className="mono text-[0.7rem] font-semibold uppercase tracking-[0.14em] text-[#2457C5]">
              {service.code}
            </p>
            <h3 className="mt-4 text-xl font-semibold uppercase tracking-[0.03em]">
              {service.title}
            </h3>
            <p className="mt-4 text-sm leading-7 text-[#333333]">
              {service.text}
            </p>
          </Link>
        ))}
      </div>
    </section>
  );
}
