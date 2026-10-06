import { createPageMetadata } from "@/lib/seo";
import { PageHeader } from "@/components/ui/PageHeader";
import { PolicyDocument } from "@/components/ui/PolicyDocument";
import { cookieSections } from "@/lib/policies";

export const metadata = createPageMetadata({
  title: "Cookie Policy",
  description:
    "Cookies, Google Maps, and external services on the Bell Mountain Camera website.",
  path: "/cookies"
});

export default function CookiesPage() {
  return <main>
    <PageHeader label="Cookies" title="Cookies" description="Cookies and external services." meta={[]} textOnly />
    <PolicyDocument sections={cookieSections} />
  </main>;
}
