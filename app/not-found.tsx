import { AsciiBlockLogo } from "@/components/brand/AsciiBlockLogo";
import { CTAButton } from "@/components/ui/CTAButton";
import { MetadataLine } from "@/components/ui/MetadataLine";

export default function NotFound() {
  return (
    <main className="mx-auto max-w-7xl px-4 py-20 sm:px-6 lg:px-8">
      <div className="terminal-panel p-6 sm:p-8">
        <AsciiBlockLogo tone="dark" />
        <MetadataLine
          tone="dark"
          items={["ERROR: 404", "STATUS: FILE NOT FOUND", "BMC PUBLIC SITE"]}
        />
        <h1 className="mt-6 max-w-3xl text-4xl font-semibold uppercase leading-none tracking-[0.02em] sm:text-6xl">
          Page not found.
        </h1>
        <p className="mt-5 max-w-xl text-sm leading-7 text-[#FFFFFF]">
          This page is not in the public Bell Mountain Camera file system.
        </p>
        <div className="mt-8 flex flex-col gap-3 sm:flex-row">
          <CTAButton href="/" variant="dark">
            Home
          </CTAButton>
          <CTAButton href="/contact" variant="dark">
            Contact BMC
          </CTAButton>
        </div>
      </div>
    </main>
  );
}
