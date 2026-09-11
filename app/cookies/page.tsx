import type { Metadata } from "next";
import { PageHeader } from "@/components/ui/PageHeader";
import { PolicyDocument } from "@/components/ui/PolicyDocument";
import { cookieSections } from "@/lib/policies";

export const metadata: Metadata = {
  title: "Cookie Policy",
  description: "Cookies, optional Google Maps, and external services on the Bell Mountain Camera website.",
};

export default function CookiesPage() {
  return <main>
    <PageHeader label="Cookies" title="Cookies" description="Cookies and optional external services." meta={[]} textOnly />
    <PolicyDocument sections={cookieSections} />
  </main>;
}
