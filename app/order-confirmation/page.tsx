import { createPageMetadata } from "@/lib/seo";
import { CTAButton } from "@/components/ui/CTAButton";
import { PageHeader } from "@/components/ui/PageHeader";
import { TerminalLabel } from "@/components/ui/TerminalLabel";

export const metadata = createPageMetadata({
  title: "Order Confirmation",
  description:
    "Order confirmation information for Bell Mountain Camera.",
  path: "/order-confirmation",
  noIndex: true
});

export default function OrderConfirmationPage() {
  return (
    <main>
      <PageHeader
        label="Pickup Desk"
        title="Order Confirmation"
        description="BMC confirms inventory before pickup."
        meta={["CONTACT BMC", "LOCAL PICKUP ONLY"]}
        textOnly
      />
      <section className="mx-auto max-w-7xl px-4 py-14 text-center sm:px-6 sm:py-20 lg:px-8">
        <div className="document-panel mx-auto max-w-3xl p-6">
          <TerminalLabel>Next Steps</TerminalLabel>
          <div className="mt-6 grid gap-4 text-sm leading-7 text-[#111111]">
            <p>1. Email BMC about the item.</p>
            <p>2. BMC confirms availability.</p>
            <p>3. Pickup is arranged during shop hours.</p>
          </div>
          <div className="mt-8">
            <CTAButton href="/shop" variant="secondary">
              Return to Shop
            </CTAButton>
          </div>
        </div>
      </section>
    </main>
  );
}
