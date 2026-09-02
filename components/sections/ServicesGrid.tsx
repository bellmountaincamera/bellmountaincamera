import Link from "next/link";
import { TerminalLabel } from "@/components/ui/TerminalLabel";

const topics = [
  {
    title: "Film Lab",
    code: "PROCESS",
    text: "Development, scans, turnaround, and pricing.",
    href: "/lab"
  },
  {
    title: "Shop",
    code: "INVENTORY",
    text: "Film, used cameras, and local pickup.",
    href: "/shop"
  },
  {
    title: "Camera Services",
    code: "SERVICE",
    text: "Diagnosis, cleaning, light seals, and shutter checks.",
    href: "/services"
  },
  {
    title: "About",
    code: "HIGH DESERT",
    text: "BMC location and shop notes.",
    href: "/about"
  },
  {
    title: "Contact",
    code: "VISIT",
    text: "Email, hours, location, and appointments.",
    href: "/contact"
  }
];

export function ServicesGrid() {
  return (
    <section className="mx-auto max-w-7xl px-4 py-12 text-center sm:px-6 sm:py-16 lg:px-8">
      <div className="mx-auto mb-8 max-w-2xl">
        <div>
          <TerminalLabel>Site Index</TerminalLabel>
          <h2 className="mt-4 text-3xl font-semibold uppercase tracking-[0.02em] sm:text-4xl">
            Find a page
          </h2>
        </div>
        <p className="mx-auto mt-4 max-w-xl text-sm leading-7 text-[#111111]">
          Film lab, shop, service, about, and contact.
        </p>
      </div>
      <div className="record-grid sm:grid-cols-2 lg:grid-cols-5">
        {topics.map((service) => (
          <Link
            key={service.title}
            href={service.href}
            className="record-cell p-5 hover:bg-[#FFFFFF]"
          >
            <p className="mono text-[0.7rem] font-semibold uppercase tracking-[0.14em] text-[#2457C5]">
              {service.code}
            </p>
            <h3 className="mt-4 text-lg font-semibold uppercase tracking-[0.03em]">
              {service.title}
            </h3>
            <p className="mt-3 text-sm leading-6 text-[#111111]">
              {service.text}
            </p>
          </Link>
        ))}
      </div>
    </section>
  );
}
