"use client";

import Image from "next/image";
import type { PhotoFrame } from "@/lib/photo-sets";
import { useSlideshow } from "@/lib/use-slideshow";
import { CarouselControls } from "@/components/ui/CarouselControls";

type PagePhotoSlideshowProps = {
  frames: PhotoFrame[];
  label?: string;
  aspect?: "wide" | "portrait";
  priority?: boolean;
};

export function PagePhotoSlideshow({ frames, label = "BMC photos", aspect = "wide", priority = false }: PagePhotoSlideshowProps) {
  const slideshow = useSlideshow(frames.length);
  const activeFrame = frames[slideshow.index] ?? frames[0];
  if (!activeFrame) return null;

  return (
    <div className="photo-slideshow" role="region" aria-roledescription="carousel" aria-label={label}
      onMouseEnter={() => slideshow.setInteracting(true)} onMouseLeave={() => slideshow.setInteracting(false)}
      onFocusCapture={() => slideshow.setInteracting(true)}
      onBlurCapture={(event) => { if (!event.currentTarget.contains(event.relatedTarget)) slideshow.setInteracting(false); }}
      onKeyDown={(event) => { if (event.key === "ArrowLeft") { event.preventDefault(); slideshow.previous(); } if (event.key === "ArrowRight") { event.preventDefault(); slideshow.next(); } }}>
      <div className={`slideshow-image ${aspect === "portrait" ? "portrait" : ""}`}>
        <Image src={activeFrame.src} alt={activeFrame.alt ?? activeFrame.title} fill
          sizes="(min-width: 1200px) 1000px, (min-width: 768px) 85vw, 94vw" className="object-contain" priority={priority && slideshow.index === 0} />
      </div>
      {frames.length > 1 && <CarouselControls index={slideshow.index} count={frames.length} paused={slideshow.paused}
        onPrevious={slideshow.previous} onNext={slideshow.next} onToggle={slideshow.toggle} />}
    </div>
  );
}
