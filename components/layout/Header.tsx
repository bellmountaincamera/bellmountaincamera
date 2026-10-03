"use client";

import Image from "next/image";
import Link from "next/link";
import { usePathname, useRouter } from "next/navigation";
import { useEffect, useRef, type MouseEvent } from "react";
import { labInfo, site } from "@/lib/site";
import { LabStatusTicker } from "@/components/layout/LabStatusTicker";

export function Header() {
  const pathname = usePathname();
  const router = useRouter();
  const isTransitioning = useRef(false);
  const resetTimer = useRef<number | null>(null);

  useEffect(() => {
    document.getElementById("main-content")?.classList.remove("page-is-leaving");
    isTransitioning.current = false;
    if (resetTimer.current !== null) window.clearTimeout(resetTimer.current);
  }, [pathname]);

  useEffect(() => () => {
    if (resetTimer.current !== null) window.clearTimeout(resetTimer.current);
  }, []);

  const navigateWithFade = (event: MouseEvent<HTMLAnchorElement>, href: string) => {
    if (event.defaultPrevented || event.button !== 0 || event.metaKey || event.ctrlKey || event.shiftKey || event.altKey || pathname === href ||
      window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;

    event.preventDefault();
    if (isTransitioning.current) return;
    isTransitioning.current = true;
    document.getElementById("main-content")?.classList.add("page-is-leaving");
    window.setTimeout(() => router.push(href), 180);
    resetTimer.current = window.setTimeout(() => {
      document.getElementById("main-content")?.classList.remove("page-is-leaving");
      isTransitioning.current = false;
    }, 3000);
  };

  return (
    <header className="site-header">
      <a className="skip-link" href="#main-content">Skip to content</a>
      <LabStatusTicker text={labInfo.status} />
      <div className="header-inner">
        <Link href="/" className="brand-link" aria-label="Bell Mountain Camera home" onClick={(event) => navigateWithFade(event, "/")}>
          <span className="brand-mark"><Image src="/images/bmc-circle-logo.png" alt="" width={42} height={42} priority /></span>
          <span className="brand-name">
            <span>Bell Mountain Camera</span>
            <span className="brand-location">Film lab / Apple Valley, CA</span>
          </span>
        </Link>
        <nav aria-label="Primary navigation" className="primary-nav">
          {site.nav.map((item) => {
            const active = item.href === "/" ? pathname === "/" : pathname.startsWith(item.href);
            return <Link key={item.href} href={item.href} aria-current={active ? "page" : undefined}
              onClick={(event) => navigateWithFade(event, item.href)}>{item.label}</Link>;
          })}
        </nav>
      </div>
    </header>
  );
}
