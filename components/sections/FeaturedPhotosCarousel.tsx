import { PagePhotoSlideshow } from "@/components/sections/PagePhotoSlideshow";
import { labPhotos } from "@/lib/photo-sets";

const featuredPhotos = [...labPhotos.slice(12), ...labPhotos.slice(10, 12)];

export function FeaturedPhotosCarousel() {
  return (
    <section className="featured-section section-band">
      <div className="section-container">
        <div className="section-heading ruled-heading"><h2>Scanned By BMC</h2></div>
        <PagePhotoSlideshow frames={featuredPhotos} label="Scanned by BMC" />
      </div>
    </section>
  );
}
