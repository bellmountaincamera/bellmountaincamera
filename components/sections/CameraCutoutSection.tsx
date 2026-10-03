"use client";

import Image from "next/image";
import Link from "next/link";
import type { CSSProperties } from "react";
import { useCallback, useEffect, useRef, useState } from "react";
import { ArrowUpRight, ChevronLeft, ChevronRight } from "lucide-react";

const cameras: { name: string; type: string; image: string; height?: number }[] = [
  { name: "Canon A-1", type: "35mm SLR", image: "/images/camera-cutouts/canon-a1.webp" },
  { name: "Minolta 7", type: "35mm rangefinder", image: "/images/camera-cutouts/minolta-7.webp" },
  { name: "Sure Shot Owl", type: "35mm point & shoot", image: "/images/camera-cutouts/canon-owl.webp" },
  { name: "Canon Sure Shot 85 Zoom", type: "35mm point & shoot", image: "/images/camera-cutouts/canon-sureshot-85.webp" },
  { name: "Olympus Superzoom 105", type: "35mm point & shoot", image: "/images/camera-cutouts/olympus-superzoom-105.webp" },
  { name: "Pentax IQZoom 110", type: "35mm point & shoot", image: "/images/camera-cutouts/pentax-iqzoom.webp", height: 946 },
  { name: "Canon AE-1 Program", type: "35mm SLR", image: "/images/camera-cutouts/canon-ae1.webp" },
  { name: "Olympus Infinity Twin", type: "35mm point & shoot", image: "/images/camera-cutouts/olympus-infinity-twin.webp", height: 403 }
];

export function CameraCutoutSection() {
  const galleryRef = useRef<HTMLDivElement>(null);
  const [canPrevious, setCanPrevious] = useState(false);
  const [canNext, setCanNext] = useState(true);

  const updateControls = useCallback(() => {
    const gallery = galleryRef.current;
    if (!gallery) return;
    setCanPrevious(gallery.scrollLeft > 2);
    setCanNext(gallery.scrollLeft + gallery.clientWidth < gallery.scrollWidth - 2);
  }, []);

  useEffect(() => {
    const gallery = galleryRef.current;
    if (!gallery) return;
    const observer = new ResizeObserver(updateControls);
    observer.observe(gallery);
    updateControls();
    return () => observer.disconnect();
  }, [updateControls]);

  const scrollCameras = (direction: -1 | 1) => {
    const gallery = galleryRef.current;
    if (!gallery) return;
    const firstCamera = gallery.querySelector<HTMLElement>(".camera-cutout");
    const gap = Number.parseFloat(window.getComputedStyle(gallery).columnGap) || 0;
    gallery.scrollBy({ left: direction * ((firstCamera?.offsetWidth ?? gallery.clientWidth) + gap), behavior: "smooth" });
  };

  return (
    <section className="section-band camera-cutout-section" aria-labelledby="camera-cutout-title">
      <div className="section-container">
        <div className="section-heading">
          <h2 id="camera-cutout-title" className="ocr">Cameras at BMC</h2>
          <p className="camera-cutout-intro">Used camera inventory changes regularly.</p>
        </div>
        <div className="camera-cutout-grid" ref={galleryRef} role="list" tabIndex={0}
          aria-label="Cameras at BMC, scroll horizontally to view more" onScroll={updateControls}
          onKeyDown={(event) => {
            if (event.key !== "ArrowLeft" && event.key !== "ArrowRight") return;
            event.preventDefault();
            scrollCameras(event.key === "ArrowLeft" ? -1 : 1);
          }}>
          {cameras.map((camera, index) => (
            <figure className={`camera-cutout camera-cutout-${index + 1}`} key={camera.name} role="listitem">
              <div className="camera-cutout-stage" style={{ "--camera-mask": `url("${camera.image}")` } as CSSProperties}>
                <Image src={camera.image} alt={camera.name} width={900} height={camera.height ?? 600}
                  sizes="(max-width: 639px) 42vw, (max-width: 1023px) 29vw, 230px" />
              </div>
              <figcaption>
                <strong>{camera.name}</strong>
                <span>{camera.type}</span>
              </figcaption>
            </figure>
          ))}
        </div>
        <div className="camera-cutout-action">
          <button type="button" className="camera-scroll-button" aria-label="Previous cameras" title="Previous cameras"
            onClick={() => scrollCameras(-1)} disabled={!canPrevious}><ChevronLeft size={20} /></button>
          <Link href="/contact" className="cta-button cta-secondary">Ask about cameras <ArrowUpRight size={17} /></Link>
          <button type="button" className="camera-scroll-button" aria-label="Next cameras" title="Next cameras"
            onClick={() => scrollCameras(1)} disabled={!canNext}><ChevronRight size={20} /></button>
        </div>
      </div>
    </section>
  );
}
