import Image from "next/image";
import Link from "next/link";
import type { CSSProperties } from "react";
import { ArrowUpRight } from "lucide-react";

const cameras: { name: string; image: string; height?: number }[] = [
  { name: "Canon A-1", image: "/images/camera-cutouts/canon-a1.webp" },
  { name: "Minolta 7", image: "/images/camera-cutouts/minolta-7.webp" },
  { name: "Sure Shot Owl", image: "/images/camera-cutouts/canon-owl.webp" },
  { name: "Canon Sure Shot 85 Zoom", image: "/images/camera-cutouts/canon-sureshot-85.webp" },
  { name: "Olympus Superzoom 105", image: "/images/camera-cutouts/olympus-superzoom-105.webp" },
  { name: "Pentax IQZoom 110", image: "/images/camera-cutouts/pentax-iqzoom.webp", height: 946 },
  { name: "Canon AE-1 Program", image: "/images/camera-cutouts/canon-ae1.webp" },
  { name: "Olympus Infinity Twin", image: "/images/camera-cutouts/olympus-infinity-twin.webp", height: 403 }
];

export function CameraCutoutSection() {
  return (
    <section className="section-band camera-cutout-section" aria-labelledby="camera-cutout-title">
      <div className="section-container">
        <div className="section-heading">
          <h2 id="camera-cutout-title" className="ocr">Cameras at BMC</h2>
          <p className="camera-cutout-intro">Used camera inventory changes regularly.</p>
        </div>
        <div className="camera-cutout-grid" role="list" aria-label="Cameras at BMC">
          {cameras.map((camera, index) => (
            <figure className={`camera-cutout camera-cutout-${index + 1}`} key={camera.name} role="listitem">
              <div className="camera-cutout-stage" style={{ "--camera-mask": `url("${camera.image}")` } as CSSProperties}>
                <Image src={camera.image} alt={camera.name} width={900} height={camera.height ?? 600}
                  sizes="(max-width: 639px) 42vw, (max-width: 1023px) 29vw, 230px" />
              </div>
              <figcaption>
                <strong>{camera.name}</strong>
              </figcaption>
            </figure>
          ))}
        </div>
        <div className="camera-cutout-action">
          <Link href="/contact" className="cta-button cta-secondary">Ask about cameras <ArrowUpRight size={17} /></Link>
        </div>
      </div>
    </section>
  );
}
