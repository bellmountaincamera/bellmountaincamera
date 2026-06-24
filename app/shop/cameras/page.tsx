import type { Metadata } from "next";
import Image from "next/image";
import { ShopBrowser } from "@/components/shop/ShopBrowser";
import { PageHeader } from "@/components/ui/PageHeader";
import { TerminalLabel } from "@/components/ui/TerminalLabel";
import { cameraPhotos } from "@/lib/photo-sets";
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
        photoSet="camera"
      />
      <section className="mx-auto max-w-7xl px-4 py-12 sm:px-6 sm:py-16 lg:px-8">
        <div className="mb-8 max-w-3xl">
          <TerminalLabel>Camera Photo Index</TerminalLabel>
          <h2 className="mt-4 text-3xl font-semibold uppercase tracking-[0.02em]">
            Cameras photographed for BMC inventory
          </h2>
          <p className="mt-5 text-sm leading-7 text-[#111111]">
            Short reference files for camera models, film format, lens range,
            and camera type.
          </p>
        </div>
        <div className="record-grid sm:grid-cols-2 lg:grid-cols-3">
          {cameraPhotos.map((camera) => (
            <article key={camera.src} className="record-cell p-4">
              <div className="photo-grain relative aspect-[4/5] overflow-hidden border border-[#111111]/20 bg-[#111111]">
                <Image
                  src={camera.src}
                  alt={camera.title}
                  fill
                  sizes="(min-width: 1024px) 33vw, (min-width: 640px) 50vw, 100vw"
                  className="object-cover"
                />
              </div>
              <p className="mono mt-4 text-[0.68rem] font-semibold uppercase tracking-[0.16em] text-[#0B3D91]">
                {camera.label}
              </p>
              <h3 className="mt-2 text-lg font-semibold uppercase tracking-[0.03em]">
                {camera.title}
              </h3>
              <p className="mt-3 text-sm leading-7 text-[#111111]">
                {camera.text}
              </p>
            </article>
          ))}
        </div>
      </section>
      <section className="mx-auto grid max-w-7xl gap-8 px-4 py-14 sm:px-6 sm:py-20 lg:grid-cols-[0.8fr_1.2fr] lg:px-8">
        <div>
          <TerminalLabel>Listing Details</TerminalLabel>
          <p className="mt-5 text-sm leading-7 text-[#111111]">
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
              <div key={image.src} className="border border-[#111111] bg-[#FFFFFF] p-3">
                <div className="photo-grain relative aspect-[4/3] overflow-hidden bg-[#111111]">
                  <Image
                    src={image.src}
                    alt={image.alt}
                    fill
                    sizes="(min-width: 1024px) 28vw, 100vw"
                    className="object-cover"
                  />
                </div>
                <p className="mono mt-3 text-[0.68rem] font-semibold uppercase tracking-[0.16em] text-[#0B3D91]">
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
