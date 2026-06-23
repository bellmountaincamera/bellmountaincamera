import Link from "next/link";
import { site } from "@/lib/site";

export function Footer() {
  return (
    <footer className="border-t border-[#2A2A2A] bg-[#111111] text-[#FAFAF8]">
      <div className="mx-auto grid max-w-7xl gap-10 px-4 py-12 sm:px-6 lg:grid-cols-[1.2fr_0.8fr] lg:px-8">
        <div>
          <p className="text-xl font-semibold uppercase tracking-[0.08em]">
            Bell Mountain Camera
          </p>
          <p className="mt-4 max-w-xl text-sm leading-7 text-[#D8D8D2]">
            {site.description}
          </p>
        </div>
        <div className="grid gap-5 sm:grid-cols-3">
          <div>
            <p className="mono text-xs font-semibold uppercase tracking-[0.16em] text-[#666666]">
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
                  className="text-sm text-[#FAFAF8] hover:text-[#D8D8D2]"
                >
                  {item.label}
                </Link>
              ))}
            </div>
          </div>
          <div>
            <p className="mono text-xs font-semibold uppercase tracking-[0.16em] text-[#666666]">
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
                  className="text-sm text-[#FAFAF8] hover:text-[#D8D8D2]"
                >
                  {item.label}
                </Link>
              ))}
            </div>
          </div>
          <div>
            <p className="mono text-xs font-semibold uppercase tracking-[0.16em] text-[#666666]">
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
                  className="text-sm text-[#FAFAF8] hover:text-[#D8D8D2]"
                >
                  {item.label}
                </Link>
              ))}
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
