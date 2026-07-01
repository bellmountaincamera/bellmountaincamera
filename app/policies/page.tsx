import type { Metadata } from "next";
import { CTAButton } from "@/components/ui/CTAButton";
import { PageHeader } from "@/components/ui/PageHeader";
import { TerminalLabel } from "@/components/ui/TerminalLabel";
import { businessInfo, policyCopy } from "@/lib/site";

export const metadata: Metadata = {
  title: "Policies",
  description:
    "Bell Mountain Camera store, shipping, returns, used camera, film lab, local pickup, privacy, and terms policies."
};

const policyLinks = [
  ["/shipping", "Shipping Policy"],
  ["/returns", "Returns Policy"],
  ["/local-pickup", "Local Pickup Policy"],
  ["/privacy", "Privacy Policy"],
  ["/terms", "Terms of Service"]
];

const policySections = [
  {
    title: "Store Policy",
    text: policyCopy.store
  },
  {
    title: "Film Lab Policy",
    text: policyCopy.filmLab
  },
  {
    title: "Used Camera Policy",
    text: policyCopy.usedCamera
  },
  {
    title: "Camera Service Policy",
    text: policyCopy.cameraService
  },
  {
    title: "Local Pickup",
    text: `${policyCopy.localPickup} Pickup hours are ${businessInfo.hours}.`
  },
  {
    title: "Shipping",
    text: policyCopy.shipping
  },
  {
    title: "Returns",
    text: policyCopy.returns
  },
  {
    title: "Privacy",
    text: policyCopy.privacy
  },
  {
    title: "Terms",
    text: policyCopy.terms
  }
];

export default function PoliciesPage() {
  return (
    <main>
      <PageHeader
        label="Policy Index"
        title="Policies"
        description="Store, pickup, shipping, lab, and service policies."
        meta={["STORE POLICY", "LOCAL PICKUP", "SHIPPING"]}
        textOnly
      />
      <section className="mx-auto max-w-7xl px-4 py-14 sm:px-6 sm:py-20 lg:px-8">
        <div className="record-grid md:grid-cols-2">
          {policySections.map((section) => (
            <article key={section.title} className="record-cell p-6">
              <TerminalLabel>{section.title}</TerminalLabel>
              <p className="mt-5 text-sm leading-7 text-[#111111]">
                {section.text}
              </p>
            </article>
          ))}
        </div>

        <div className="mt-10 grid gap-3 md:grid-cols-2 lg:grid-cols-3">
          {policyLinks.map(([href, label]) => (
            <CTAButton key={href} href={href} variant="secondary">
              {label}
            </CTAButton>
          ))}
        </div>
      </section>
    </main>
  );
}
