import Image from "next/image";
import { labPhotos } from "@/lib/photo-sets";

export function FilmLabPhotoCarousel() {
  return (
    <section className="section-band">
      <div className="section-container">
        <div className="section-heading ruled-heading"><h2>Lab photos</h2></div>
        <div className="scan-track lab-photo-track" tabIndex={0} role="region" aria-label="Photos from the BMC lab">
          {labPhotos.map((frame) => <article key={frame.src}>
            <div className="scan-image">
              <Image src={frame.src} alt={frame.alt ?? frame.title} fill
                sizes="(min-width: 1024px) 360px, (min-width: 640px) 40vw, 86vw" className="object-contain" />
            </div>
          </article>)}
        </div>
      </div>
    </section>
  );
}
