import Link from "next/link";
import { TerminalLabel } from "@/components/ui/TerminalLabel";

const topics = [
  {
    title: "Film Lab",
    code: "PROCESS: C-41",
    text: "Film development, scanning, turnaround notes, and lab pricing placeholders.",
    href: "/lab"
  },
  {
    title: "Shop",
    code: "INVENTORY",
    text: "Preview film stock and used cameras. Contact BMC for availability.",
    href: "/shop"
  },
  {
    title: "Camera Services",
    code: "SERVICE",
    text: "Diagnosis, cleaning, light seals, and basic shutter adjustment when possible.",
    href: "/services"
  },
  {
    title: "About",
    code: "HIGH DESERT",
    text: "A short note on Bell Mountain Camera and the Apple Valley film community.",
    href: "/about"
  },
  {
    title: "Contact",
    code: "VISIT",
    text: "Location, hours, email, phone, and walk-in information.",
    href: "/contact"
  }
];

export function ServicesGrid() {
  return (
    <section className="mx-auto max-w-7xl px-4 py-12 sm:px-6 sm:py-16 lg:px-8">
      <div className="mb-8 max-w-2xl">
        <div>
          <TerminalLabel>Page Guide</TerminalLabel>
          <h2 className="mt-4 text-3xl font-semibold uppercase tracking-[0.02em] sm:text-4xl">
            Find the right page fast
          </h2>
        </div>
        <p className="mt-4 text-sm leading-7 text-[#111111]">
          Each page keeps to one job: lab, shop, camera service, shop story, or
          contact details.
        </p>
      </div>
      <div className="record-grid sm:grid-cols-2 lg:grid-cols-5">
        {topics.map((service) => (
          <Link
            key={service.title}
            href={service.href}
            className="record-cell p-5 hover:bg-[#FFFFFF]"
          >
            <p className="mono text-[0.7rem] font-semibold uppercase tracking-[0.14em] text-[#0B3D91]">
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
