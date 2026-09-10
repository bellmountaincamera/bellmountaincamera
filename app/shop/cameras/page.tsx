import type { Metadata } from "next";
import { PageHeader } from "@/components/ui/PageHeader";
import { PagePhotoSlideshow } from "@/components/sections/PagePhotoSlideshow";
import { CTAButton } from "@/components/ui/CTAButton";
import { cameraRecords } from "@/lib/photo-sets";

export const metadata: Metadata = { title: "Shop Cameras", description: "Used film cameras at Bell Mountain Camera in Apple Valley." };

export default function ShopCamerasPage() {
  return (
    <main>
      <PageHeader label="Camera Shelf" title="Shop Cameras" description="Used film cameras and basic specs."
        meta={["Local pickup only", "Rotating stock"]} photoSet="camera" />
      <section className="section-band">
        <div className="section-container">
          <div className="section-heading"><h2>The camera shelf</h2></div>
          <div className="camera-records">
            {cameraRecords.map((camera) => <article key={camera.name} className="camera-record">
              <PagePhotoSlideshow frames={camera.photos} label={`${camera.name} photos`} aspect="portrait" />
              <h3>{camera.name}</h3>
              <p>{camera.specs}</p>
            </article>)}
          </div>
          <div className="mt-10 text-center"><CTAButton href="/contact">Ask about availability</CTAButton></div>
        </div>
      </section>
    </main>
  );
}
