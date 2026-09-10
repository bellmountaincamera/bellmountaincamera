"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { labInfo, site } from "@/lib/site";

export function Header() {
  const pathname = usePathname();
  return (
    <header className="site-header">
      <a className="skip-link" href="#main-content">Skip to content</a>
      <div className="lab-status-bar">
        <span className="status-dot" aria-hidden="true" />
        <span>{labInfo.status}</span>
      </div>
      <div className="header-inner">
        <Link href="/" className="brand-link" aria-label="Bell Mountain Camera home">
          <span className="brand-mark ocr">BMC</span>
          <span className="brand-name">
            <span>Bell Mountain Camera</span>
            <span className="brand-location">Film lab / Apple Valley, CA</span>
          </span>
        </Link>
        <nav aria-label="Primary navigation" className="primary-nav">
          {site.nav.map((item) => {
            const active = item.href === "/" ? pathname === "/" : pathname.startsWith(item.href);
            return <Link key={item.href} href={item.href} aria-current={active ? "page" : undefined}>{item.label}</Link>;
          })}
        </nav>
      </div>
    </header>
  );
}
