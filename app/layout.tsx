import type { Metadata } from "next";
import "./globals.css";
import { Footer } from "@/components/layout/Footer";
import { Header } from "@/components/layout/Header";
import { FilmStripMotion } from "@/components/layout/FilmStripMotion";
import { EditorSectionLabels } from "@/components/layout/EditorSectionLabels";
import { site } from "@/lib/site";
import { siteUrl, defaultSocialImage } from "@/lib/seo";
import { businessStructuredData } from "@/lib/structured-data";
import { StructuredData } from "@/components/seo/StructuredData";

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),
  title: {
    default: "Bell Mountain Camera | Film Developing in Apple Valley",
    template: "%s | Bell Mountain Camera"
  },
  description: site.description,
  applicationName: site.name,
  icons: { icon: "/images/bmc-circle-logo.png", apple: "/images/bmc-circle-logo.png" },
  openGraph: {
    title: site.name,
    description: site.description,
    siteName: site.name,
    images: [defaultSocialImage],
    locale: "en_US",
    type: "website"
  },
  twitter: {
    card: "summary_large_image",
    title: site.name,
    description: site.description,
    images: [defaultSocialImage]
  }
};

export default function RootLayout({
  children
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" data-scroll-behavior="smooth">
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link rel="stylesheet" href="https://fonts.googleapis.com/css2?family=Geist:wght@100..900&amp;family=Geist+Mono:wght@400;500;600;700&amp;family=IBM+Plex+Mono:wght@400;500;600;700&amp;family=VT323&amp;display=swap" />
      </head>
      <body>
        <FilmStripMotion />
        <StructuredData data={businessStructuredData} />
        <Header />
        <div id="main-content" tabIndex={-1}>{children}</div>
        <Footer />
        <EditorSectionLabels />
      </body>
    </html>
  );
}
