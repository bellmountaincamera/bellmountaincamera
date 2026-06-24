import type { Metadata } from "next";
import { PageHeader } from "@/components/ui/PageHeader";
import { TerminalLabel } from "@/components/ui/TerminalLabel";

export const metadata: Metadata = {
  title: "Terms of Service",
  description:
    "Terms of service placeholder for Bell Mountain Camera online orders, local pickup, shipping, and lab services."
};

export default function TermsPage() {
  return (
    <main>
      <PageHeader
        label="Terms"
        title="Terms of Service"
        description="Terms for shop, lab, and service use."
        meta={["ONLINE ORDERS", "LAB SERVICES", "CAMERA SERVICE"]}
      />
      <section className="mx-auto max-w-7xl px-4 py-14 sm:px-6 sm:py-20 lg:px-8">
        <div className="document-panel p-6">
          <TerminalLabel>Editable Terms</TerminalLabel>
          <p className="mt-5 text-sm leading-7 text-[#111111]">
            This page is a placeholder for final terms. It should be reviewed
            before payment processing, live inventory, shipping rates, customer
            accounts, or online order submission are enabled.
          </p>
        </div>
      </section>
    </main>
  );
}
