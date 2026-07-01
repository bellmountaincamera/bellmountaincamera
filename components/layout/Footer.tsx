import Link from "next/link";
import { AsciiLineLogo } from "@/components/brand/AsciiLineLogo";
import { site } from "@/lib/site";

export function Footer() {
  return (
    <footer className="border-t border-[#111111] bg-[#111111] text-[#FFFFFF]">
      <div className="mx-auto grid max-w-5xl gap-7 px-4 py-9 text-center sm:px-6 lg:px-8">
        <div className="mx-auto max-w-2xl">
          <p className="text-lg font-semibold uppercase tracking-[0.08em]">
            Bell Mountain Camera
          </p>
          <p className="mt-3 text-sm leading-6 text-[#FFFFFF]/85">
            {site.description}
          </p>
        </div>
        <div className="mx-auto grid w-full max-w-3xl gap-6 sm:grid-cols-3 sm:gap-3">
          <div>
            <p className="mono text-[0.68rem] font-semibold uppercase tracking-[0.14em] text-[#2457C5]">
              Visit
            </p>
            <div className="mt-3 grid gap-2">
              {[
                { href: "/contact", label: "Contact" },
                { href: "/local-pickup", label: "Local Pickup" },
                { href: "/contact", label: "Hours / Location" }
              ].map((item) => (
                <Link
                  key={`${item.href}-${item.label}`}
                  href={item.href}
                  className="text-xs leading-5 text-[#FFFFFF]/85 hover:text-[#FFFFFF] sm:text-sm"
                >
                  {item.label}
                </Link>
              ))}
            </div>
          </div>
          <div>
            <p className="mono text-[0.68rem] font-semibold uppercase tracking-[0.14em] text-[#2457C5]">
              Shop
            </p>
            <div className="mt-3 grid gap-2">
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
                  className="text-xs leading-5 text-[#FFFFFF]/85 hover:text-[#FFFFFF] sm:text-sm"
                >
                  {item.label}
                </Link>
              ))}
            </div>
          </div>
          <div>
            <p className="mono text-[0.68rem] font-semibold uppercase tracking-[0.14em] text-[#2457C5]">
              Info
            </p>
            <div className="mt-3 grid gap-2">
              {[
                { href: "/faq", label: "FAQ" },
                { href: "/policies", label: "Policies" },
                { href: "/privacy", label: "Privacy" },
                { href: "/terms", label: "Terms" }
              ].map((item) => (
                <Link
                  key={item.href}
                  href={item.href}
                  className="text-xs leading-5 text-[#FFFFFF]/85 hover:text-[#FFFFFF] sm:text-sm"
                >
                  {item.label}
                </Link>
              ))}
            </div>
          </div>
        </div>
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
