"use client";

import Image from "next/image";
import { ArrowLeft, ArrowRight, Pause, Play } from "lucide-react";
import { useEffect, useId, useRef, useState } from "react";
import { LedAccent } from "@/components/brand/LedAccent";

type Frame = { src: string; alt: string };

export function ContinuousPhotoCarousel({ frames, label }: { frames: Frame[]; label: string }) {
  const id = useId();
  const viewport = useRef<HTMLDivElement>(null);
  const group = useRef<HTMLDivElement>(null);
  const [paused, setPaused] = useState(false);
  const [reducedMotion, setReducedMotion] = useState(true);

  useEffect(() => {
    const preference = window.matchMedia("(prefers-reduced-motion: reduce)");
    const update = () => setReducedMotion(preference.matches);
    update();
    preference.addEventListener("change", update);
    return () => preference.removeEventListener("change", update);
  }, []);

  useEffect(() => {
    const element = viewport.current;
    const sequence = group.current;
    if (!element || !sequence || paused || reducedMotion || frames.length < 2) return;
    let width = sequence.getBoundingClientRect().width;
    let offset = element.scrollLeft;
    let written = offset;
    let previous = 0;
    let visible = false;
    let animation = 0;
    const resize = new ResizeObserver(() => { width = sequence.getBoundingClientRect().width; });
    const intersection = new IntersectionObserver(([entry]) => { visible = entry.isIntersecting; });
    resize.observe(sequence);
    intersection.observe(element);

    function tick(time: number) {
      const elapsed = previous ? Math.min(time - previous, 50) : 0;
      previous = time;
      if (element && visible && !document.hidden && width > 0) {
        if (Math.abs(element.scrollLeft - written) > 1) offset = element.scrollLeft;
        // Keep subpixel progress separately: browsers round scrollLeft on some displays.
        offset = (offset + elapsed * 0.032) % width;
        element.scrollLeft = offset;
        written = element.scrollLeft;
      }
      animation = requestAnimationFrame(tick);
    }
    animation = requestAnimationFrame(tick);
    return () => {
      cancelAnimationFrame(animation);
      resize.disconnect();
      intersection.disconnect();
    };
  }, [paused, reducedMotion, frames.length]);

  function move(direction: number) {
    setPaused(true);
    const element = viewport.current;
    const sequence = group.current;
    if (!element || !sequence) return;
    const width = sequence.getBoundingClientRect().width;
    if (!width) return;
    const step = width / frames.length;
    const position = element.scrollLeft % width;
    if (!reducedMotion && direction < 0 && position < step) element.scrollLeft = position + width;
    else if (!reducedMotion) element.scrollLeft = position;
    element.scrollBy({ left: step * direction, behavior: reducedMotion ? "instant" : "smooth" });
  }

  return (
    <div className="continuous-gallery" role="region" aria-label={label} aria-roledescription="carousel">
      <div id={id} ref={viewport} className="continuous-viewport" role="group" tabIndex={0}
        aria-label={`${label}. Use arrow keys to browse.`}
        onFocus={() => setPaused(true)} onPointerDown={() => setPaused(true)} onWheel={() => setPaused(true)}
        onKeyDown={(event) => {
          if (event.key === "ArrowLeft" || event.key === "ArrowRight") {
            event.preventDefault();
            move(event.key === "ArrowLeft" ? -1 : 1);
          }
        }}>
        <div className="continuous-track">
          {[0, 1].map((copy) => (
            <div className={`continuous-group${copy ? " continuous-copy" : ""}`} key={copy}
              ref={copy === 0 ? group : undefined} aria-hidden={copy === 1 ? true : undefined}>
              {frames.map((frame) => (
                <div className="continuous-frame" key={frame.src}>
                  <Image src={frame.src} alt={copy ? "" : frame.alt} fill
                    sizes="(min-width: 480px) 360px, 80vw" className="object-contain" />
                </div>
              ))}
            </div>
          ))}
        </div>
      </div>
      <div className="continuous-controls">
        <LedAccent />
        <button type="button" className="icon-button" onClick={() => move(-1)} aria-controls={id}
          aria-label={`Previous photo in ${label}`} title="Previous photo"><ArrowLeft size={18} aria-hidden="true" /></button>
        {!reducedMotion && <button type="button" className="icon-button" onClick={() => setPaused(!paused)} aria-controls={id}
          aria-label={`${paused ? "Play" : "Pause"} ${label}`} title={paused ? "Play gallery" : "Pause gallery"}>
          {paused ? <Play size={18} aria-hidden="true" /> : <Pause size={18} aria-hidden="true" />}
        </button>}
        <button type="button" className="icon-button" onClick={() => move(1)} aria-controls={id}
          aria-label={`Next photo in ${label}`} title="Next photo"><ArrowRight size={18} aria-hidden="true" /></button>
        <LedAccent />
      </div>
    </div>
  );
}
