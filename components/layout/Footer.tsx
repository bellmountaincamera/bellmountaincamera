import Link from "next/link";
import { site } from "@/lib/site";
import { MetadataLine } from "@/components/ui/MetadataLine";

export function Footer() {
  return (
    <footer className="border-t border-[#111111]/15 bg-[#111111] text-[#e8e2d8]">
      <div className="mx-auto grid max-w-7xl gap-10 px-4 py-12 sm:px-6 lg:grid-cols-[1.2fr_0.8fr] lg:px-8">
        <div>
          <p className="text-xl font-semibold uppercase tracking-[0.08em]">
            Bell Mountain Camera
          </p>
          <p className="mt-4 max-w-xl text-sm leading-7 text-[#c7b8a3]">
            {site.description}
          </p>
          <div className="mt-6">
            <MetadataLine
              tone="dark"
              items={["ROLL NO. 4821", "PROCESS: C-41", "DELIVERY: DIGITAL"]}
            />
          </div>
        </div>
        <div className="grid gap-5 sm:grid-cols-3">
          <div>
            <p className="mono text-xs font-semibold uppercase tracking-[0.16em] text-[#8c7b6a]">
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
                  className="text-sm text-[#e8e2d8] hover:text-[#c7b8a3]"
                >
                  {item.label}
                </Link>
              ))}
            </div>
          </div>
          <div>
            <p className="mono text-xs font-semibold uppercase tracking-[0.16em] text-[#8c7b6a]">
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
                  className="text-sm text-[#e8e2d8] hover:text-[#c7b8a3]"
                >
                  {item.label}
                </Link>
              ))}
            </div>
          </div>
          <div>
            <p className="mono text-xs font-semibold uppercase tracking-[0.16em] text-[#8c7b6a]">
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
                  className="text-sm text-[#e8e2d8] hover:text-[#c7b8a3]"
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
