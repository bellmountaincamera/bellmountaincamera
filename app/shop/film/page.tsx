import type { Metadata } from "next";
import { TerminalDivider } from "@/components/brand/TerminalDivider";
import { ShopBrowser } from "@/components/shop/ShopBrowser";
import { PageHeader } from "@/components/ui/PageHeader";
import { getFilmProducts } from "@/lib/products";

export const metadata: Metadata = {
  title: "Shop Film",
  description:
    "Shop 35mm, Kodak, specialty, 110, and instant film from Bell Mountain Camera."
};

export default function ShopFilmPage() {
  const film = getFilmProducts();

  return (
    <main>
      <PageHeader
        label="Film Stock"
        title="Shop Film"
        description="Rotating film stock and availability."
        meta={["35MM FILM", "KODAK STOCK", "SHIPPING + PICKUP"]}
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
