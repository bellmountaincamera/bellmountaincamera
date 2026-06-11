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
        <div className="grid gap-5 sm:grid-cols-2">
          <div>
            <p className="mono text-xs font-semibold uppercase tracking-[0.16em] text-[#8c7b6a]">
              Pages
            </p>
            <div className="mt-4 grid gap-2">
              {site.nav.map((item) => (
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
              Store
            </p>
            <div className="mt-4 grid gap-2">
              {[
                { href: "/cart", label: "Cart" },
                { href: "/checkout", label: "Checkout Preview" },
                { href: "/shipping", label: "Shipping" },
                { href: "/returns", label: "Returns" },
                { href: "/policies", label: "Policies" },
                { href: "/local-pickup", label: "Local Pickup" },
                { href: "/film-lab-policy", label: "Film Lab Policy" },
                { href: "/used-camera-policy", label: "Used Camera Policy" },
                { href: "/faq", label: "FAQ" }
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
              Contact
            </p>
            <div className="mt-4 grid gap-2 text-sm text-[#e8e2d8]">
              <a href={`mailto:${site.email}`} className="hover:text-[#c7b8a3]">
                {site.email}
              </a>
              <a href={`tel:${site.phone.replaceAll("-", "")}`} className="hover:text-[#c7b8a3]">
                {site.phone}
              </a>
              <span>{site.instagram}</span>
              <span>{site.locationName}</span>
              <span>{site.street}</span>
              <span>{site.cityStateZip}</span>
              <span>{site.hoursShort}</span>
              <span>{site.domain}</span>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
