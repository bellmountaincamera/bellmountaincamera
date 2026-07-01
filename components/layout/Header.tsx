"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { labInfo, site } from "@/lib/site";

export function Header() {
  const pathname = usePathname();
  const isActive = (href: string) =>
    href === "/" ? pathname === href : pathname === href || pathname.startsWith(`${href}/`);

  return (
    <header className="sticky top-0 z-50 border-b border-[#111111]/15 bg-[#FFFFFF]/95 backdrop-blur-sm">
      <div className="border-b border-[#111111]/15 bg-[#111111] text-[#FFFFFF]">
        <div className="mono mx-auto flex max-w-7xl flex-wrap items-center justify-between gap-2 px-4 py-2 text-[0.68rem] font-semibold uppercase tracking-[0.14em] sm:px-6 lg:px-8">
          <span className="text-[#FFFFFF]/70">Film Lab Status</span>
          <span className="vt323 text-base leading-none text-[#9CB7FF]">
            {labInfo.status}
          </span>
        </div>
      </div>
      <nav
        aria-label="Primary navigation"
        className="mx-auto flex max-w-7xl flex-col gap-4 px-4 py-4 sm:px-6 lg:flex-row lg:items-center lg:justify-between lg:px-8"
      >
        <Link href="/" className="group inline-flex items-center gap-3">
          <span className="grid h-9 w-9 place-items-center border border-[#111111] bg-[#111111] text-[#FFFFFF]">
            <span className="ocr text-[0.62rem] font-semibold">BMC</span>
          </span>
          <span>
            <span className="block text-base font-semibold uppercase tracking-[0.08em]">
              Bell Mountain Camera
            </span>
            <span className="mono block text-[0.68rem] uppercase tracking-[0.16em] text-[#2457C5]">
              Apple Valley Film Lab
            </span>
          </span>
        </Link>
        <div className="flex flex-wrap items-center gap-x-4 gap-y-2">
          {site.nav.map((item) => (
            <Link
              key={item.href}
              href={item.href}
              className={[
                "mono text-xs font-semibold uppercase tracking-[0.12em] underline-offset-4 hover:underline",
                isActive(item.href) ? "text-[#2457C5]" : "text-[#111111]"
              ].join(" ")}
            >
              {item.label}
            </Link>
          ))}
        </div>
      </nav>
    </header>
  );
}
