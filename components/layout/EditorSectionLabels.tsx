"use client";

import { useEffect } from "react";
import { usePathname } from "next/navigation";
import { showEditorSectionLabels } from "@/lib/site";

export function EditorSectionLabels() {
  const pathname = usePathname();

  useEffect(() => {
    if (!showEditorSectionLabels) return;

    const page = pathname === "/" ? "HOME" : pathname.replace(/^\/+|\/+$/g, "").replace(/\//g, "-").toUpperCase();
    const sections = document.querySelectorAll<HTMLElement>("#main-content main section, #main-content main > .section-band, #main-content main article[data-editor-name]");

    sections.forEach((section, index) => {
      const heading = section.querySelector("h1, h2, h3")?.textContent?.trim();
      const name = (section.dataset.editorName || heading || section.id || "Section").replace(/\s+/g, " ").slice(0, 32);
      section.dataset.editorLabel = `${page} ${String(index + 1).padStart(2, "0")} / ${name}`;
    });

    const footer = document.querySelector<HTMLElement>(".site-footer");
    if (footer) footer.dataset.editorLabel = "GLOBAL / FOOTER";

    return () => {
      sections.forEach((section) => delete section.dataset.editorLabel);
      if (footer) delete footer.dataset.editorLabel;
    };
  }, [pathname]);

  return null;
}
