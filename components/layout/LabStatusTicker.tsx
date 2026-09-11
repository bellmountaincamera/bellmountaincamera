"use client";

import { useState } from "react";
import { Pause, Play } from "lucide-react";

// Five columns of seven pixels per glyph, like a single-line LED sign.
const glyphs: Record<string, number[]> = {
  A: [126, 9, 9, 9, 126], B: [127, 73, 73, 73, 54], C: [62, 65, 65, 65, 34],
  D: [127, 65, 65, 34, 28], E: [127, 73, 73, 73, 65], F: [127, 9, 9, 9, 1],
  G: [62, 65, 73, 73, 122], H: [127, 8, 8, 8, 127], I: [0, 65, 127, 65, 0],
  J: [32, 64, 65, 63, 1], K: [127, 8, 20, 34, 65], L: [127, 64, 64, 64, 64],
  M: [127, 2, 12, 2, 127], N: [127, 4, 8, 16, 127], O: [62, 65, 65, 65, 62],
  P: [127, 9, 9, 9, 6], Q: [62, 65, 81, 33, 94], R: [127, 9, 25, 41, 70],
  S: [38, 73, 73, 73, 50], T: [1, 1, 127, 1, 1], U: [63, 64, 64, 64, 63],
  V: [31, 32, 64, 32, 31], W: [63, 64, 56, 64, 63], X: [99, 20, 8, 20, 99],
  Y: [7, 8, 112, 8, 7], Z: [97, 81, 73, 69, 67],
  "0": [62, 81, 73, 69, 62], "1": [0, 66, 127, 64, 0], "2": [98, 81, 73, 73, 70],
  "3": [34, 65, 73, 73, 54], "4": [24, 20, 18, 127, 16], "5": [39, 69, 69, 69, 57],
  "6": [60, 74, 73, 73, 48], "7": [1, 113, 9, 5, 3], "8": [54, 73, 73, 73, 54],
  "9": [6, 73, 73, 41, 30], "-": [8, 8, 8, 8, 8], " ": [0, 0, 0, 0, 0],
  "&": [54, 73, 85, 34, 80], "/": [64, 32, 8, 2, 1], ":": [0, 0, 36, 0, 0],
};

function matrixPath(text: string) {
  return [...text].flatMap((character, index) =>
    glyphs[character].flatMap((column, x) =>
      Array.from({ length: 7 }, (_, y) => {
        if (!(column & (1 << y))) return "";
        const left = (index * 6 + x) * 3 + 0.5;
        const top = y * 3 + 1.5;
        return `M${left},${top}a1,1 0 1,0 2,0a1,1 0 1,0 -2,0`;
      })
    )
  ).join("");
}

export function LabStatusTicker({ text }: { text: string }) {
  const [paused, setPaused] = useState(false);
  const message = text.toUpperCase();
  const supported = [...message].every((character) => glyphs[character]);
  const path = supported ? matrixPath(message) : "";
  const width = message.length * 18;

  return (
    <div className="lab-status-bar" data-paused={paused}>
      <span className="sr-only">Film lab status: {text}</span>
      <div className="led-sign">
        <div className="led-viewport" aria-hidden="true">
          <div className="led-track">
            {[0, 1].map((copy) => (
              <div className="led-message" key={copy}>
                {supported ? <svg width={width} height="21" viewBox={`0 0 ${width} 21`} focusable="false"><path d={path} fill="currentColor" /></svg> : message}
              </div>
            ))}
          </div>
        </div>
        <span className="led-static" aria-hidden="true">{text}</span>
        <button type="button" className="led-control" onClick={() => setPaused(!paused)}
          aria-label={paused ? "Play lab status animation" : "Pause lab status animation"}
          title={paused ? "Play lab status animation" : "Pause lab status animation"}>
          {paused ? <Play size={15} aria-hidden="true" /> : <Pause size={15} aria-hidden="true" />}
        </button>
      </div>
    </div>
  );
}
