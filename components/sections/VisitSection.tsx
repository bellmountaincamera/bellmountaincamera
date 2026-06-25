import Link from "next/link";
import { TerminalLabel } from "@/components/ui/TerminalLabel";
import { site } from "@/lib/site";

export function VisitSection() {
  return (
    <section className="border-y border-[#111111]/15 bg-[#FFFFFF]">
      <div className="mx-auto grid max-w-7xl gap-8 px-4 py-10 sm:px-6 sm:py-12 lg:grid-cols-[1fr_1.1fr] lg:items-end lg:px-8">
        <div>
          <TerminalLabel>Visit BMC</TerminalLabel>
          <h2 className="mt-4 text-3xl font-semibold uppercase tracking-[0.02em] sm:text-4xl">
            Located inside Wild Goose Vintage & Thrift
          </h2>
        </div>
        <div className="grid gap-3 text-sm leading-6 text-[#111111] sm:grid-cols-[1fr_auto] sm:items-end">
          <div>
            <p className="font-semibold uppercase tracking-[0.03em]">
              Unit #2 / {site.vendorNumber}
            </p>
            <p>Find Bell Mountain Camera by the cashier.</p>
            <p>{site.street}</p>
            <p>{site.cityStateZip}</p>
            <p className="mono mt-2 text-[0.72rem] uppercase tracking-[0.14em] text-[#2457C5]">
              {site.hoursShort} / Walk-ins welcome
            </p>
          </div>
          <Link
            href="/contact"
            className="mono text-[0.72rem] font-semibold uppercase tracking-[0.14em] text-[#2457C5] underline-offset-4 hover:underline"
          >
            Contact details
          </Link>
        </div>
      </div>
    </section>
  );
}
