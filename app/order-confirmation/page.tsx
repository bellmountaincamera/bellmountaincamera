import type { Metadata } from "next";
import { CTAButton } from "@/components/ui/CTAButton";
import { PageHeader } from "@/components/ui/PageHeader";
import { TerminalLabel } from "@/components/ui/TerminalLabel";

export const metadata: Metadata = {
  title: "Order Confirmation",
  description:
    "Order confirmation placeholder for Bell Mountain Camera ecommerce checkout."
};

export default function OrderConfirmationPage() {
  return (
    <main>
      <PageHeader
        label="Order Confirmation Preview"
        title="Order Confirmation Preview"
        description="This preview page shows where a future real order confirmation can live after checkout is connected."
        meta={["DEMO ORDER", "STATUS: PREVIEW", "CUSTOMER COPY"]}
      />
      <section className="mx-auto max-w-7xl px-4 py-14 sm:px-6 sm:py-20 lg:px-8">
        <div className="document-panel max-w-3xl p-6">
          <TerminalLabel>Next Steps</TerminalLabel>
          <div className="mt-6 grid gap-4 text-sm leading-7 text-[#4a4036]">
            <p>1. Customer receives an email receipt.</p>
            <p>2. BMC confirms inventory and fulfillment method.</p>
            <p>3. Order status moves to processing, pickup ready, shipped, or complete.</p>
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
