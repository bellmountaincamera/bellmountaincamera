import Link from "next/link";
import { AsciiLineLogo } from "@/components/brand/AsciiLineLogo";
import { footerCopy, site } from "@/lib/site";

export function Footer() {
  const links = [
    { href: "/contact", label: "Contact" }, { href: "/local-pickup", label: "Local Pickup" },
    { href: "/lab", label: "Film Lab" }, { href: "/shop", label: "Shop" },
    { href: "/faq", label: "FAQ" }, { href: "/policies", label: "Policies" },
    { href: "/privacy", label: "Privacy" }, { href: "/cookies", label: "Cookies" },
    { href: "/returns", label: "Returns" }, { href: "/terms", label: "Terms" }
  ];
  return (
    <footer className="site-footer">
      <div className="section-container">
        <p className="footer-wordmark mono">Bell Mountain Camera</p>
        <p className="footer-description">{footerCopy}</p>
        <a className="footer-email mono" href={`mailto:${site.email}`}>{site.email}</a>
        <nav aria-label="Footer navigation" className="footer-nav">
          {links.map((item) => <Link key={item.href} href={item.href}>{item.label}</Link>)}
        </nav>
        <div className="footer-signoff">
          <AsciiLineLogo tone="dark" lines={["BMC", "EST 2025", "AV, CA"]} />
          <span className="mono">Independent. Apple Valley, CA.</span>
        </div>
      </div>
    </footer>
  );
}
