import { ContinuousPhotoCarousel } from "@/components/ui/ContinuousPhotoCarousel";
import { labPhotos } from "@/lib/photo-sets";

export function FilmLabPhotoCarousel() {
  return (
    <section className="section-band">
      <div className="section-container">
        <div className="section-heading ruled-heading"><h2>Lab photos</h2></div>
        <ContinuousPhotoCarousel frames={labPhotos.map((frame) => ({ src: frame.src, alt: frame.alt ?? frame.title }))} label="Photos from the BMC lab" />
      </div>
    </section>
  );
}
