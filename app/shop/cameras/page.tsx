import type { Metadata } from "next";
import { AsciiLineLogo } from "@/components/brand/AsciiLineLogo";
import { ShopBrowser } from "@/components/shop/ShopBrowser";
import { PageHeader } from "@/components/ui/PageHeader";
import { TerminalLabel } from "@/components/ui/TerminalLabel";
import { getCameraProducts } from "@/lib/products";

export const metadata: Metadata = {
  title: "Shop Cameras",
  description:
    "Shop used film cameras from Bell Mountain Camera with condition notes, tested status, local pickup, and shipping support."
};

export default function ShopCamerasPage() {
  const cameras = getCameraProducts();

  return (
    <main>
      <PageHeader
        label="Camera Shelf"
        title="Shop Cameras"
        description="Used camera inventory changes often. Contact BMC with any questions about condition, functionality, or availability."
        meta={["USED CAMERAS", "SOLD STATUS", "SHIPPING + PICKUP"]}
      />
      <section className="mx-auto grid max-w-7xl gap-8 px-4 py-14 sm:px-6 sm:py-20 lg:grid-cols-[0.8fr_1.2fr] lg:px-8">
        <div>
          <AsciiLineLogo
            className="mb-5"
            lines={["CAMERA", "SHELF", "TESTED"]}
          />
          <TerminalLabel>Listing Details</TerminalLabel>
          <p className="mt-5 text-sm leading-7 text-[#333333]">
            Camera product pages are structured for tested status, known
            issues, cosmetic condition, light meter status, battery compartment
            condition, lens condition, sample photos when available, return
            policy, and sold-as-is language if needed.
          </p>
        </div>
        <ShopBrowser products={cameras} initialFilter="Cameras" />
      </section>
    </main>
  );
}
