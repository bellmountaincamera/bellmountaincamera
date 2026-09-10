import type { Metadata } from "next";
import Link from "next/link";
import { ArrowUpRight } from "lucide-react";
import { CTAButton } from "@/components/ui/CTAButton";
import { PageHeader } from "@/components/ui/PageHeader";
import { TerminalLabel } from "@/components/ui/TerminalLabel";

export const metadata: Metadata = { title: "Shop", description: "Film, used cameras, and shop inventory from Bell Mountain Camera. Local pickup only." };

const cameras = [
  { title: "SLRs", href: "/shop/cameras" }, { title: "Camcorders", href: "/shop/cameras" },
  { title: "Point and shoots", href: "/shop/cameras" }
];
const supplies = [
  { title: "Film", href: "/shop/film" }, { title: "Accessories", href: "/contact" },
  { title: "Batteries", href: "/contact" }, { title: "Miscellaneous", href: "/contact" }
];

export default function ShopPage() {
  return (
    <main>
      <PageHeader label="Shop" title="Shop" description="Film, cameras, and equipment."
        meta={["Local pick up only", "Contact for current stock"]} />
      <section className="section-band">
        <div className="section-container">
          <div className="shop-menu text-center">
            {[{ title: "Cameras", links: cameras }, { title: "Film & supplies", links: supplies }].map((category) => <section key={category.title}>
              <h2>{category.title}</h2>
              <div className="shop-links">
                {category.links.map((item, index) => <Link key={item.title} href={item.href}>
                  <span>{String(index + 1).padStart(2, "0")}</span>{item.title}<ArrowUpRight size={16} />
                </Link>)}
              </div>
            </section>)}
          </div>
        </div>
      </section>
      <section className="section-band text-center">
        <div className="section-container">
          <TerminalLabel>Local pickup only</TerminalLabel>
          <h2 className="mt-4">Find it at the counter.</h2>
          <p className="mx-auto mt-5 max-w-xl text-base leading-7 text-[#686c72]">Contact BMC for current stock. Pickup inside Wild Goose Vintage &amp; Thrift.</p>
          <div className="mt-7 flex flex-wrap justify-center gap-3">
            <CTAButton href="/contact">Ask about stock</CTAButton>
            <CTAButton href="/policies" variant="secondary">Shop policies</CTAButton>
          </div>
        </div>
      </section>
    </main>
  );
}
