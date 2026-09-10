"use client";

import { ArrowLeft, ArrowRight, Pause, Play } from "lucide-react";

type CarouselControlsProps = {
  index: number;
  count: number;
  paused: boolean;
  onPrevious: () => void;
  onNext: () => void;
  onToggle: () => void;
};

export function CarouselControls({ index, count, paused, onPrevious, onNext, onToggle }: CarouselControlsProps) {
  return (
    <div className="carousel-controls">
      <button type="button" className="icon-button" onClick={onPrevious} aria-label="Previous photo" title="Previous photo"><ArrowLeft size={17} /></button>
      <span className="frame-counter mono" aria-label={`Photo ${index + 1} of ${count}`}>
        {String(index + 1).padStart(2, "0")} <span>/</span> {String(count).padStart(2, "0")}
      </span>
      <button type="button" className="icon-button" onClick={onNext} aria-label="Next photo" title="Next photo"><ArrowRight size={17} /></button>
      <button type="button" className="icon-button playback-button" onClick={onToggle} aria-label={paused ? "Play slideshow" : "Pause slideshow"} title={paused ? "Play slideshow" : "Pause slideshow"}>
        {paused ? <Play size={14} /> : <Pause size={14} />}
      </button>
    </div>
  );
}
