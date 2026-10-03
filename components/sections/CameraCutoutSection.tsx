import Image from "next/image";
import Link from "next/link";
import type { CSSProperties } from "react";
import { ArrowUpRight } from "lucide-react";

const cameras = [
  { name: "Canon A-1", type: "35mm SLR", image: "/images/camera-cutouts/canon-a1.webp" },
  { name: "Minolta 7", type: "35mm rangefinder", image: "/images/camera-cutouts/minolta-7.webp" },
  { name: "Sure Shot Owl", type: "35mm point & shoot", image: "/images/camera-cutouts/canon-owl.webp" },
  { name: "Canon Sure Shot 85 Zoom", type: "35mm point & shoot", image: "/images/camera-cutouts/canon-sureshot-85.webp" },
  { name: "Olympus Superzoom 105", type: "35mm point & shoot", image: "/images/camera-cutouts/olympus-superzoom-105.webp" }
];

export function CameraCutoutSection() {
  return (
    <section className="section-band camera-cutout-section" aria-labelledby="camera-cutout-title">
      <div className="section-container">
        <div className="section-heading">
          <h2 id="camera-cutout-title">Cameras at BMC</h2>
          <p className="camera-cutout-intro">Used camera inventory changes regularly.</p>
        </div>
        <div className="camera-cutout-grid">
          {cameras.map((camera, index) => (
            <figure className={`camera-cutout camera-cutout-${index + 1}`} key={camera.name}>
              <div className="camera-cutout-stage" style={{ "--camera-mask": `url("${camera.image}")` } as CSSProperties}>
                <Image src={camera.image} alt={camera.name} width={900} height={600}
                  sizes="(max-width: 639px) 43vw, (max-width: 1023px) 27vw, 260px" />
              </div>
              <figcaption>
                <strong>{camera.name}</strong>
                <span>{camera.type}</span>
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
