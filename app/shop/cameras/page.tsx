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

const cameraPhotos = [
  {
    src: "/images/camera-photos/olympus-closeup.jpg",
    title: "Olympus Superzoom 105",
    code: "BMC-23",
    text: "Close detail of an Olympus point-and-shoot with quartz date marking and compact zoom body."
  },
  {
    src: "/images/camera-photos/canon-z115-closeup.jpg",
    title: "Canon Sure Shot Z115",
    code: "BMC-2",
    text: "Autofocus Canon compact with 38-115mm zoom lens and built-in flash."
  },
  {
    src: "/images/camera-photos/superzoom-detail.jpg",
    title: "Olympus Superzoom 105 Detail",
    code: "BMC-22",
    text: "Close-up of the viewfinder, flash, and front control area on the Olympus Superzoom."
  },
  {
    src: "/images/camera-photos/pentax-iqzoom.jpg",
    title: "Pentax IQZoom 110",
    code: "BMC-13",
    text: "Black Pentax IQZoom point-and-shoot with 38-110mm autofocus zoom lens."
  },
  {
    src: "/images/camera-photos/canon-sureshot-film.jpg",
    title: "Canon Sure Shot 85 Zoom",
    code: "BMC-8",
    text: "Canon compact camera photographed with 35mm film rolls and other shop cameras."
  },
  {
    src: "/images/camera-photos/olympus-twin-flatlay.jpg",
    title: "Olympus Infinity Twin",
    code: "BMC CAMERAS-7",
    text: "Flatlay with an Olympus Infinity Twin, Kodak 400 film, lenses, and assorted point-and-shoot cameras."
  },
  {
    src: "/images/camera-photos/canon-owl-flatlay.jpg",
    title: "Canon Sure Shot Owl Date",
    code: "BMC CAMERAS-2",
    text: "Canon Sure Shot Owl Date flatlay with film and camera accessories."
  },
  {
    src: "/images/camera-photos/minolta-7-rangefinder.jpg",
    title: "Minolta Hi-Matic 7s",
    code: "BMC-21",
    text: "Classic Minolta rangefinder photographed on a wood counter with warm shop light."
  },
  {
    src: "/images/camera-photos/canon-a1-flatlay-wide.jpg",
    title: "Canon A-1 System",
    code: "CAMERA-2",
    text: "Canon A-1 SLR shown with Kodak Portra 400, lenses, and camera service tools."
  },
  {
    src: "/images/camera-photos/canon-ae1-flatlay.jpg",
    title: "Canon AE-1 Program",
    code: "CAMERA-3",
    text: "Canon AE-1 Program flatlay with Kodak 400 film and surrounding lenses."
  },
  {
    src: "/images/camera-photos/olympus-superzoom-flatlay.jpg",
    title: "Olympus Superzoom 105",
    code: "CAMERA-1",
    text: "Full camera layout showing the Olympus Superzoom 105 among film and lenses."
  },
  {
    src: "/images/camera-photos/canon-a1-closeup.jpg",
    title: "Canon A-1 Close-Up",
    code: "BMC CAM-2",
    text: "Close frame on the Canon A-1 body and FD lens, useful for condition and listing reference."
  },
  {
    src: "/images/camera-photos/olympus-superzoom-closeup.jpg",
    title: "Olympus Superzoom 105 Close-Up",
    code: "BMC CAM-3",
    text: "Straight-on product-style view of the Olympus Superzoom 105 with surrounding compact cameras."
  }
];

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
      <section className="mx-auto max-w-7xl px-4 py-12 sm:px-6 sm:py-16 lg:px-8">
        <div className="mb-8 max-w-3xl">
          <TerminalLabel>Camera Photo Index</TerminalLabel>
          <h2 className="mt-4 text-3xl font-semibold uppercase tracking-[0.02em]">
            Cameras photographed for BMC inventory
          </h2>
          <p className="mt-5 text-sm leading-7 text-[#333333]">
            These photos document the camera inventory style for Bell Mountain
            Camera. Listings can later use the same structure for model,
            condition, tested status, price, and pickup or shipping notes.
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
              <p className="mono mt-4 text-[0.68rem] font-semibold uppercase tracking-[0.16em] text-[#2457C5]">
                {camera.code}
              </p>
              <h3 className="mt-2 text-lg font-semibold uppercase tracking-[0.03em]">
                {camera.title}
              </h3>
              <p className="mt-3 text-sm leading-7 text-[#333333]">
                {camera.text}
              </p>
            </article>
          ))}
        </div>
      </section>
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
