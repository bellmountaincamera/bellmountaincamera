import type { Metadata } from "next";
import { CTAButton } from "@/components/ui/CTAButton";
import { PageHeader } from "@/components/ui/PageHeader";

export const metadata: Metadata = {
  title: "Policies",
  description:
    "Bell Mountain Camera store, shipping, returns, used camera, film lab, local pickup, privacy, and terms policies."
};

const policyLinks = [
  ["/shipping", "Shipping Policy"],
  ["/returns", "Returns Policy"],
  ["/used-camera-policy", "Used Camera Policy"],
  ["/film-lab-policy", "Film Lab Policy"],
  ["/local-pickup", "Local Pickup Policy"],
  ["/privacy", "Privacy Policy"],
  ["/terms", "Terms of Service"]
];

export default function PoliciesPage() {
  return (
    <main>
      <PageHeader
        label="Policy Index"
        title="Policies"
        description="Editable policy pages for online orders, local pickup, used cameras, film lab work, privacy, and terms."
        meta={["STORE POLICY", "LOCAL PICKUP", "SHIPPING"]}
      />
      <section className="mx-auto grid max-w-7xl gap-3 px-4 py-14 sm:px-6 sm:py-20 md:grid-cols-2 lg:grid-cols-3 lg:px-8">
        {policyLinks.map(([href, label]) => (
          <CTAButton key={href} href={href} variant="secondary">
            {label}
          </CTAButton>
        ))}
      </section>
    </main>
  );
}
