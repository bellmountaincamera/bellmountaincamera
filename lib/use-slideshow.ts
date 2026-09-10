"use client";

import { useEffect, useState } from "react";

export function useSlideshow(count: number) {
  const [index, setIndex] = useState(0);
  const [paused, setPaused] = useState(false);
  const [reducedMotion, setReducedMotion] = useState(false);
  const [interacting, setInteracting] = useState(false);

  useEffect(() => {
    const preference = window.matchMedia("(prefers-reduced-motion: reduce)");
    const update = () => { setReducedMotion(preference.matches); setPaused(preference.matches); };
    update();
    preference.addEventListener("change", update);
    return () => preference.removeEventListener("change", update);
  }, []);

  useEffect(() => {
    if (paused || interacting || count < 2) return;
    const timer = window.setInterval(() => {
      if (!document.hidden) setIndex((current) => (current + 1) % count);
    }, 3000);
    return () => window.clearInterval(timer);
  }, [paused, interacting, count, index]);

  const previous = () => setIndex((current) => (current - 1 + count) % count);
  const next = () => setIndex((current) => (current + 1) % count);
  const toggle = () => {
    setInteracting(false);
    setPaused((current) => !current);
  };
  return { index, paused, reducedMotion, previous, next, toggle, setInteracting };
}
