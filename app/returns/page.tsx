import type { Metadata } from "next";
import { PageHeader } from "@/components/ui/PageHeader";
import { TerminalLabel } from "@/components/ui/TerminalLabel";
import { policyCopy } from "@/lib/site";

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
        textOnly
      />
      <section className="mx-auto max-w-7xl px-4 py-14 sm:px-6 sm:py-20 lg:px-8">
        <div className="record-grid md:grid-cols-2">
          {[
            [
              "Returns",
              policyCopy.returns
            ],
            [
              "Before Returning",
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
