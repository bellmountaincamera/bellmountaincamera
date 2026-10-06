import { createPageMetadata } from "@/lib/seo";
import { TerminalDivider } from "@/components/brand/TerminalDivider";
import { ShopBrowser } from "@/components/shop/ShopBrowser";
import { PageHeader } from "@/components/ui/PageHeader";
import { getFilmProducts } from "@/lib/products";

export const metadata = createPageMetadata({
  title: "35mm, 110 & Instant Film in Apple Valley",
  description:
    "Explore 35mm, 110, instant, and specialty film at Bell Mountain Camera in Apple Valley. Contact the shop for current availability and local pickup.",
  path: "/shop/film"
});

export default function ShopFilmPage() {
  const film = getFilmProducts();

  return (
    <main>
      <PageHeader
        label="Film Stock"
        title="Shop Film"
        description="Rotating film stock. Local pickup only."
        meta={["35MM FILM", "ROTATING STOCK", "LOCAL PICKUP"]}
        photoSet="lab"
      />
      <section className="mx-auto max-w-7xl px-4 py-14 sm:px-6 sm:py-20 lg:px-8">
        <div className="mb-8">
          <TerminalDivider label="FILM STOCK / BROWSE" />
        </div>
        <ShopBrowser products={film} initialFilter="Film" />
      </section>
    </main>
  );
}
