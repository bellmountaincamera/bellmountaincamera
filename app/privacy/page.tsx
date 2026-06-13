import type { Metadata } from "next";
import { PageHeader } from "@/components/ui/PageHeader";
import { TerminalLabel } from "@/components/ui/TerminalLabel";

export const metadata: Metadata = {
  title: "Privacy Policy",
  description:
    "Privacy policy placeholder for Bell Mountain Camera online orders and contact forms."
};

export default function PrivacyPage() {
  return (
    <main>
      <PageHeader
        label="Privacy"
        title="Privacy Policy"
        description="Editable privacy policy page for future ecommerce checkout, contact forms, email notifications, and customer order data."
        meta={["CUSTOMER DATA", "EMAIL", "ORDER INFO"]}
      />
      <section className="mx-auto max-w-7xl px-4 py-14 sm:px-6 sm:py-20 lg:px-8">
        <div className="document-panel p-6">
          <TerminalLabel>Editable Policy</TerminalLabel>
          <p className="mt-5 text-sm leading-7 text-[#333333]">
            This page is a placeholder for final privacy language. It should be
            reviewed before live checkout, analytics, customer accounts, or
            email notification integrations are connected.
          </p>
        </div>
      </section>
    </main>
  );
}
