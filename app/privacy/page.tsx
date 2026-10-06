import { createPageMetadata } from "@/lib/seo";
import { PageHeader } from "@/components/ui/PageHeader";
import { PolicyDocument } from "@/components/ui/PolicyDocument";
import { privacySections } from "@/lib/policies";

export const metadata = createPageMetadata({
  title: "Privacy Policy",
  description:
    "Privacy policy for Bell Mountain Camera customer messages, film orders, and service requests.",
  path: "/privacy"
});

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
