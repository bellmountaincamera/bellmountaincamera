import Link from "next/link";
import { AsciiLineLogo } from "@/components/brand/AsciiLineLogo";
import { footerCopy } from "@/lib/site";

export function Footer() {
  const links = [
    { href: "/contact", label: "Contact" },
    { href: "/local-pickup", label: "Local Pickup" },
    { href: "/lab", label: "Film Lab" },
    { href: "/shop", label: "Shop" },
    { href: "/faq", label: "FAQ" },
    { href: "/policies", label: "Policies" },
    { href: "/privacy", label: "Privacy" },
    { href: "/terms", label: "Terms" }
  ];

  return (
    <footer className="border-t border-[#111111] bg-[#111111] text-[#FFFFFF]">
      <div className="mx-auto grid max-w-5xl gap-7 px-4 py-9 text-center sm:px-6 lg:px-8">
        <div className="mx-auto max-w-2xl">
          <p className="text-lg font-semibold uppercase tracking-[0.08em]">
            Bell Mountain Camera
          </p>
          <p className="mt-3 text-sm leading-6 text-[#FFFFFF]/85">
            {footerCopy}
          </p>
        </div>
        <nav
          aria-label="Footer navigation"
          className="mx-auto flex max-w-3xl flex-wrap items-center justify-center gap-x-4 gap-y-2"
        >
          {links.map((item) => (
            <Link
              key={item.href}
              href={item.href}
              className="mono text-[0.68rem] font-semibold uppercase tracking-[0.14em] text-[#FFFFFF]/85 hover:text-[#FFFFFF]"
            >
              {item.label}
            </Link>
          ))}
        </nav>
      </div>
      <div className="mx-auto max-w-5xl border-t border-[#FFFFFF]/15 px-4 py-5 text-center sm:px-6 lg:px-8">
        <AsciiLineLogo
          tone="dark"
          lines={["BMC", "EST 2025", "AV, CA"]}
          className="inline-block"
        />
      </div>
    </footer>
  );
}
