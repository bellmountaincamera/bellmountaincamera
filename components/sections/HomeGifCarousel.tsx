"use client";

import Link from "next/link";
import { useEffect, useRef } from "react";
import { ArrowUpRight } from "lucide-react";
import { CarouselControls } from "@/components/ui/CarouselControls";
import { MetadataLine } from "@/components/ui/MetadataLine";
import { useSlideshow } from "@/lib/use-slideshow";

const clips = ["01", "04", "05", "08", "09", "10", "11", "13", "14"];

export function HomeGifCarousel() {
  const slideshow = useSlideshow(clips.length);
  const videoRef = useRef<HTMLVideoElement>(null);

  useEffect(() => {
    const video = videoRef.current;
    if (!video) return;
    if (slideshow.paused) video.pause();
    else video.play().catch(() => { /* The poster remains visible if autoplay is unavailable. */ });
  }, [slideshow.index, slideshow.paused]);
  return (
    <section className="home-film-section">
      <div className="hero-film" role="region" aria-roledescription="carousel" aria-label="Inside the BMC film lab">
        <video ref={videoRef} key={clips[slideshow.index]} src={`/videos/clip-${clips[slideshow.index]}.mp4`}
          poster={`/videos/clip-${clips[slideshow.index]}.jpg`} muted playsInline loop preload="metadata"
          className="hero-film-image" aria-label="Film processing at Bell Mountain Camera" />
        <div className="hero-film-content">
          <p className="hero-eyebrow mono">Bell Mountain Camera</p>
          <h1>Film Lab<br />Cameras<br />and Equipment</h1>
          <p className="hero-location mono">In Apple Valley, CA</p>
        </div>
      </div>
      <div className="hero-film-footer">
        <CarouselControls index={slideshow.index} count={clips.length} paused={slideshow.paused}
          onPrevious={slideshow.previous} onNext={slideshow.next} onToggle={slideshow.toggle} />
        <Link href="/lab" className="cta-button cta-primary">Film Development &amp; Info <ArrowUpRight size={17} /></Link>
        <MetadataLine items={["Process accepted: 35mm C-41 and B&W", "Local pickup only"]} />
      </div>
    </section>
  );
}
