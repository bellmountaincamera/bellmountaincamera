import { AsciiPageTitle } from "@/components/brand/AsciiPageTitle";
import { CTAButton } from "@/components/ui/CTAButton";

export default function NotFound() {
  return (
    <main className="section-container py-16 text-center">
      <AsciiPageTitle title="404" />
      <h1 className="mt-10 text-3xl">Page not found.</h1>
      <p className="mt-5 text-base text-[#686c72]">This page may have moved.</p>
      <div className="mt-8 flex flex-wrap justify-center gap-3">
        <CTAButton href="/">Home</CTAButton>
        <CTAButton href="/contact" variant="secondary">Contact BMC</CTAButton>
      </div>
    </main>
  );
}
