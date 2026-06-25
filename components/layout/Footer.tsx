import Link from "next/link";
import { AsciiLineLogo } from "@/components/brand/AsciiLineLogo";
import { site } from "@/lib/site";

export function Footer() {
  return (
    <footer className="border-t border-[#111111] bg-[#111111] text-[#FFFFFF]">
      <div className="mx-auto grid max-w-7xl gap-10 px-4 py-12 sm:px-6 lg:grid-cols-[1.2fr_0.8fr] lg:px-8">
        <div>
          <p className="text-xl font-semibold uppercase tracking-[0.08em]">
            Bell Mountain Camera
          </p>
          <p className="mt-4 max-w-xl text-sm leading-7 text-[#FFFFFF]">
            {site.description}
          </p>
        </div>
        <div className="grid gap-5 sm:grid-cols-3">
          <div>
            <p className="mono text-xs font-semibold uppercase tracking-[0.16em] text-[#2457C5]">
              Visit
            </p>
            <div className="mt-4 grid gap-2">
              {[
                { href: "/contact", label: "Contact" },
                { href: "/local-pickup", label: "Local Pickup" },
                { href: "/contact", label: "Hours / Location" }
              ].map((item) => (
                <Link
                  key={`${item.href}-${item.label}`}
                  href={item.href}
                  className="text-sm text-[#FFFFFF] hover:text-[#FFFFFF]"
                >
                  {item.label}
                </Link>
              ))}
            </div>
          </div>
          <div>
            <p className="mono text-xs font-semibold uppercase tracking-[0.16em] text-[#2457C5]">
              Shop
            </p>
            <div className="mt-4 grid gap-2">
              {[
                { href: "/shop", label: "Shop" },
                { href: "/shop/film", label: "Film" },
                { href: "/shop/cameras", label: "Cameras" },
                { href: "/shipping", label: "Shipping" },
                { href: "/returns", label: "Returns" }
              ].map((item) => (
                <Link
                  key={item.href}
                  href={item.href}
                  className="text-sm text-[#FFFFFF] hover:text-[#FFFFFF]"
                >
                  {item.label}
                </Link>
              ))}
            </div>
          </div>
          <div>
            <p className="mono text-xs font-semibold uppercase tracking-[0.16em] text-[#2457C5]">
              Info
            </p>
            <div className="mt-4 grid gap-2">
              {[
                { href: "/faq", label: "FAQ" },
                { href: "/policies", label: "Policies" },
                { href: "/privacy", label: "Privacy" },
                { href: "/terms", label: "Terms" }
              ].map((item) => (
                <Link
                  key={item.href}
                  href={item.href}
                  className="text-sm text-[#FFFFFF] hover:text-[#FFFFFF]"
                >
                  {item.label}
                </Link>
              ))}
            </div>
          </div>
        </div>
      </div>
      <div className="mx-auto max-w-7xl border-t border-[#FFFFFF]/15 px-4 py-6 text-center sm:px-6 lg:px-8">
        <AsciiLineLogo
          tone="dark"
          lines={["B M C", "EST 2025", "AV, CA"]}
          className="inline-block"
        />
      </div>
    </footer>
  );
}
