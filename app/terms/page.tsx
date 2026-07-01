import type { Metadata } from "next";
import { PageHeader } from "@/components/ui/PageHeader";
import { TerminalLabel } from "@/components/ui/TerminalLabel";

export const metadata: Metadata = {
  title: "Terms of Service",
  description:
    "Terms for Bell Mountain Camera film processing, used camera sales, local pickup, shipping, and camera service."
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
          <TerminalLabel>Terms</TerminalLabel>
          <p className="mt-5 text-sm leading-7 text-[#111111]">
            By using BMC services, customers understand that film processing,
            used camera sales, and camera service involve some risk due to film
            condition, camera condition, age, storage, and mechanical limits.
          </p>
        </div>
      </section>
    </main>
  );
}
