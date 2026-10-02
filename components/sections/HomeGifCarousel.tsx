"use client";

import Link from "next/link";
import { useEffect, useRef, useState } from "react";
import { ArrowUpRight } from "lucide-react";
import { CarouselControls } from "@/components/ui/CarouselControls";
import { MetadataLine } from "@/components/ui/MetadataLine";
import { useSlideshow } from "@/lib/use-slideshow";

const clips = ["01", "04", "05", "08", "09", "10", "11", "13", "14"];

export function HomeGifCarousel() {
  const slideshow = useSlideshow(clips.length);
  const videoRefs = useRef<(HTMLVideoElement | null)[]>([null, null]);
  const [slots, setSlots] = useState<[number, number]>([0, 1]);
  const [ready, setReady] = useState<[boolean, boolean]>([false, false]);
  const [activeSlot, setActiveSlot] = useState(0);

  useEffect(() => {
    const standby = 1 - activeSlot;
    const target = slots[activeSlot] === slideshow.index ? (slideshow.index + 1) % clips.length : slideshow.index;
    if (slots[standby] !== target) {
      setReady((current) => current.map((value, slot) => slot === standby ? false : value) as [boolean, boolean]);
      setSlots((current) => current.map((value, slot) => slot === standby ? target : value) as [number, number]);
    } else if (slots[activeSlot] !== slideshow.index && ready[standby]) {
      setActiveSlot(standby);
    }
  }, [activeSlot, ready, slideshow.index, slots]);

  useEffect(() => {
    videoRefs.current.forEach((video, slot) => {
      if (!video) return;
      if (slot !== activeSlot || slideshow.paused) video.pause();
      else video.play().catch(() => { /* Keep the poster visible if autoplay is unavailable. */ });
    });
  }, [activeSlot, slideshow.paused, slots]);
  return (
    <section className="home-film-section">
      <div className="hero-film" role="region" aria-roledescription="carousel" aria-label="Inside the BMC film lab">
        {slots.map((clipIndex, slot) => <video key={slot} ref={(node) => { videoRefs.current[slot] = node; }}
          src={`/videos/clip-${clips[clipIndex]}.mp4`} poster={`/videos/clip-${clips[clipIndex]}.jpg`}
          muted playsInline loop preload="auto" aria-hidden="true"
          onCanPlay={() => setReady((current) => current[slot] ? current : current.map((value, position) => position === slot ? true : value) as [boolean, boolean])}
          className={`hero-film-image ${slot === activeSlot ? "is-active" : ""}`} />)}
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
        <MetadataLine items={["C-41 color negative / 35mm + 110", "Local pickup only"]} />
      </div>
    </section>
  );
}
