import type { Metadata } from "next";
import { PageHeader } from "@/components/ui/PageHeader";
import { TerminalLabel } from "@/components/ui/TerminalLabel";

export const metadata: Metadata = {
  title: "Returns Policy",
  description:
    "Returns policy framework for Bell Mountain Camera film, cameras, and accessories."
};

export default function ReturnsPage() {
  return (
    <main>
      <PageHeader
        label="Store Policy"
        title="Returns Policy"
        description="Return notes for film, cameras, and services."
        meta={["FILM STOCK", "USED CAMERAS", "CONDITION NOTES"]}
      />
      <section className="mx-auto max-w-7xl px-4 py-14 sm:px-6 sm:py-20 lg:px-8">
        <div className="record-grid md:grid-cols-2 lg:grid-cols-4">
          {[
            [
              "Film stock",
              "Film return rules should account for storage, expiration, and unopened condition before live checkout launches."
            ],
            [
              "Used cameras",
              "Used camera returns should reference the listed condition, tested status, notes, and any sold-as-is language."
            ],
            [
              "Lab services",
              "Lab service return rules are not finalized yet and should account for film processing risk before live checkout."
            ],
            [
              "Damaged shipping items",
              "Damaged shipping item rules are not finalized yet. Customers should contact BMC with order details and photos if a shipped item arrives damaged."
            ]
          ].map(([title, text]) => (
            <article key={title} className="record-cell p-6">
              <TerminalLabel>{title}</TerminalLabel>
              <p className="mt-5 text-sm leading-7 text-[#111111]">{text}</p>
            </article>
          ))}
        </div>
      </section>
    </main>
  );
}
