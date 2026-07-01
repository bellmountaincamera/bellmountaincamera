import type { Metadata } from "next";
import { PageHeader } from "@/components/ui/PageHeader";
import { TerminalLabel } from "@/components/ui/TerminalLabel";
import { policyCopy } from "@/lib/site";

export const metadata: Metadata = {
  title: "Privacy Policy",
  description:
    "Privacy policy for Bell Mountain Camera customer messages, film orders, and service requests."
};

export default function PrivacyPage() {
  return (
    <main>
      <PageHeader
        label="Privacy"
        title="Privacy Policy"
        description="How BMC handles customer information."
        meta={["CUSTOMER DATA", "EMAIL", "ORDER INFO"]}
        textOnly
      />
      <section className="mx-auto max-w-7xl px-4 py-14 sm:px-6 sm:py-20 lg:px-8">
        <div className="document-panel p-6">
          <TerminalLabel>Privacy Policy</TerminalLabel>
          <p className="mt-5 text-sm leading-7 text-[#111111]">
            {policyCopy.privacy}
          </p>
        </div>
      </section>
    </main>
  );
}
