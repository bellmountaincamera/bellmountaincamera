import type { Metadata } from "next";
import { CTAButton } from "@/components/ui/CTAButton";
import { PageHeader } from "@/components/ui/PageHeader";
import { TerminalLabel } from "@/components/ui/TerminalLabel";
import { filmLabDisclaimer, serviceDisclaimer, site } from "@/lib/site";

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
    text:
      "Film and camera inventory may be limited and may rotate often. Online checkout is not live yet. Sold-out and sold items should not allow checkout once Shopify is connected."
  },
  {
    title: "Used Camera Policy",
    text:
      "Used cameras are inspected and described as accurately as possible. Condition varies by item, and known issues should be listed on the product page, including tested status, cosmetic condition, included lens or accessories, and sold-as-is language if needed."
  },
  {
    title: "Film Lab Policy",
    text: filmLabDisclaimer
  },
  {
    title: "Service Policy",
    text: serviceDisclaimer
  },
  {
    title: "Pickup Policy Summary",
    text: `Local pickup is available at ${site.name} inside ${site.locationName}, ${site.street}, ${site.cityStateZip}. Pickup hours are ${site.hoursShort}. Walk-ins are welcome during business hours.`
  },
  {
    title: "Contact for Questions",
    text: `Questions about film, cameras, service, pickup, shipping, or policies can be sent to ${site.email} or ${site.phone}.`
  }
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
