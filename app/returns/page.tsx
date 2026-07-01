import type { Metadata } from "next";
import { PageHeader } from "@/components/ui/PageHeader";
import { TerminalLabel } from "@/components/ui/TerminalLabel";

export const metadata: Metadata = {
  title: "Returns Policy",
  description:
    "Returns policy for Bell Mountain Camera film, used cameras, equipment, and lab services."
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
              "Film, opened consumables, and items affected by storage condition are not returnable."
            ],
            [
              "Used cameras",
              "Used cameras and equipment are sold according to their listed condition."
            ],
            [
              "Lab services",
              "Completed film development and scan services are not returnable."
            ],
            [
              "Damaged shipping items",
              "Contact BMC with order details and photos before returning any item."
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
