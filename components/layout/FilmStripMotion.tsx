"use client";

import { useEffect } from "react";

export function FilmStripMotion() {
  useEffect(() => {
    const media = window.matchMedia("(prefers-reduced-motion: reduce)");
    let frame = 0;

    function update() {
      frame = 0;
      document.documentElement.style.setProperty(
        "--film-strip-offset",
        media.matches ? "0px" : `${-Math.round(window.scrollY * 0.6)}px`
      );
    }

    function onScroll() {
      if (!frame) frame = window.requestAnimationFrame(update);
    }

    update();
    window.addEventListener("scroll", onScroll, { passive: true });
    media.addEventListener("change", update);
    return () => {
      window.removeEventListener("scroll", onScroll);
      media.removeEventListener("change", update);
      if (frame) window.cancelAnimationFrame(frame);
      document.documentElement.style.removeProperty("--film-strip-offset");
    };
  }, []);

  return null;
}
