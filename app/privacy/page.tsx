import type { Metadata } from "next";
import { PageHeader } from "@/components/ui/PageHeader";
import { PolicyDocument } from "@/components/ui/PolicyDocument";
import { privacySections } from "@/lib/policies";

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
        title="Privacy"
        description="How BMC handles customer information."
        meta={["CUSTOMER DATA", "EMAIL", "ORDER INFO"]}
        textOnly
      />
      <PolicyDocument sections={privacySections} />
    </main>
  );
}
