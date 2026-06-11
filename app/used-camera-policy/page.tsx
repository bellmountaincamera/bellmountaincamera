import type { Metadata } from "next";
import { PageHeader } from "@/components/ui/PageHeader";
import { TerminalLabel } from "@/components/ui/TerminalLabel";

export const metadata: Metadata = {
  title: "Used Camera Policy",
  description:
    "Used camera condition and listing policy for Bell Mountain Camera."
};

export default function UsedCameraPolicyPage() {
  return (
    <main>
      <PageHeader
        label="Store Policy"
        title="Used Camera Policy"
        description="Used cameras are inspected and described as accurately as possible. Condition varies by item."
        meta={["CONDITION VARIES", "KNOWN ISSUES LISTED", "SOLD STATUS"]}
      />
      <section className="mx-auto max-w-7xl px-4 py-14 sm:px-6 sm:py-20 lg:px-8">
        <div className="document-panel p-6">
          <TerminalLabel>Used Camera Notes</TerminalLabel>
          <p className="mt-5 text-sm leading-7 text-[#4a4036]">
            Some vintage cameras may show cosmetic wear or age-related
            limitations. Any known issues will be listed in the product
            description. Camera listings should include tested status, known
            issues, cosmetic condition, light meter status, battery compartment
            condition, lens condition, sample photos if available, return
            policy, and sold-as-is language if needed.
          </p>
        </div>
      </section>
    </main>
  );
}
