import type { Metadata } from "next";
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
        description="Film stock changes often. Bell Mountain Camera carries rotating 35mm film, Kodak film, black-and-white film, color negative film, specialty stocks, and occasional 110 or instant film."
        meta={["35MM FILM", "KODAK STOCK", "SHIPPING + PICKUP"]}
      />
      <section className="mx-auto max-w-7xl px-4 py-14 sm:px-6 sm:py-20 lg:px-8">
        <ShopBrowser products={film} initialFilter="Film" />
      </section>
    </main>
  );
}
