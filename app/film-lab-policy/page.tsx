import type { Metadata } from "next";
import { PageHeader } from "@/components/ui/PageHeader";
import { TerminalLabel } from "@/components/ui/TerminalLabel";
import { filmLabDisclaimer } from "@/lib/site";

export const metadata: Metadata = {
  title: "Film Lab Policy",
  description:
    "Film lab risk policy for Bell Mountain Camera film processing and scanning."
};

export default function FilmLabPolicyPage() {
  return (
    <main>
      <PageHeader
        label="Lab Policy"
        title="Film Lab Policy"
        description="Film processing carries inherent risk. This policy explains the customer-facing risk language for film age, exposure, storage, camera condition, and development variables."
        meta={["FILM AGE", "EXPOSURE", "STORAGE CONDITION"]}
      />
      <section className="mx-auto max-w-7xl px-4 py-14 sm:px-6 sm:py-20 lg:px-8">
        <div className="document-panel p-6">
          <TerminalLabel>Processing Risk</TerminalLabel>
          <p className="mt-5 text-sm leading-7 text-[#4a4036]">
            {filmLabDisclaimer}
          </p>
        </div>
      </section>
    </main>
  );
}
