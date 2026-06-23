import type { Metadata } from "next";
import Image from "next/image";
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
          <TerminalLabel>Listing Details</TerminalLabel>
          <p className="mt-5 text-sm leading-7 text-[#333333]">
            Camera product pages are structured for tested status, known
            issues, cosmetic condition, light meter status, battery compartment
            condition, lens condition, sample photos when available, return
            policy, and sold-as-is language if needed.
          </p>
          <div className="mt-8 grid gap-3 sm:grid-cols-2 lg:grid-cols-1">
            {[
              {
                src: "/images/camera-photos/olympus-superzoom-closeup.jpg",
                alt: "Olympus Superzoom film camera closeup",
                label: "POINT + SHOOT"
              },
              {
                src: "/images/camera-photos/minolta-7-rangefinder.jpg",
                alt: "Minolta 7 rangefinder camera on a wood surface",
                label: "RANGEFINDER"
              }
            ].map((image) => (
              <div key={image.src} className="border border-[#2A2A2A] bg-[#FAFAF8] p-3">
                <div className="photo-grain relative aspect-[4/3] overflow-hidden bg-[#111111]">
                  <Image
                    src={image.src}
                    alt={image.alt}
                    fill
                    sizes="(min-width: 1024px) 28vw, 100vw"
                    className="object-cover"
                  />
                </div>
                <p className="mono mt-3 text-[0.68rem] font-semibold uppercase tracking-[0.16em] text-[#2457C5]">
                  {image.label}
                </p>
              </div>
            ))}
          </div>
        </div>
        <ShopBrowser products={cameras} initialFilter="Cameras" />
      </section>
    </main>
  );
}
