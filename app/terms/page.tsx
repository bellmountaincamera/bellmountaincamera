import { createPageMetadata } from "@/lib/seo";
import { PageHeader } from "@/components/ui/PageHeader";
import { PolicyDocument } from "@/components/ui/PolicyDocument";
import { termsSections } from "@/lib/policies";

export const metadata = createPageMetadata({
  title: "Terms of Service",
  description:
    "Terms for Bell Mountain Camera film processing, used camera sales, local pickup, and camera service.",
  path: "/terms"
});

export default function TermsPage() {
  return (
    <main>
      <PageHeader
        label="Terms"
        title="Terms"
        description="Terms for shop, lab, and service use."
        meta={["SHOP", "LAB SERVICES", "CAMERA SERVICE"]}
        textOnly
      />
      <PolicyDocument sections={termsSections} />
    </main>
  );
}
