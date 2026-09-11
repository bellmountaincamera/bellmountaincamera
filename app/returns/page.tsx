import type { Metadata } from "next";
import { PageHeader } from "@/components/ui/PageHeader";
import { PolicyDocument } from "@/components/ui/PolicyDocument";
import { returnSections } from "@/lib/policies";

export const metadata: Metadata = {
  title: "Returns and Refunds",
  description:
    "Returns policy for Bell Mountain Camera film, used cameras, equipment, and lab services."
};

export default function ReturnsPage() {
  return (
    <main>
      <PageHeader
        label="Store Policy"
        title="Returns"
        description="Return notes for film, cameras, and services."
        meta={["FILM STOCK", "USED CAMERAS", "CONDITION NOTES"]}
        textOnly
      />
      <PolicyDocument sections={returnSections} />
    </main>
  );
}
