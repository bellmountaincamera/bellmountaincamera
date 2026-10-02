import type { Metadata } from "next";
import "./globals.css";
import { Footer } from "@/components/layout/Footer";
import { Header } from "@/components/layout/Header";
import { FilmStripMotion } from "@/components/layout/FilmStripMotion";
import { site } from "@/lib/site";

export const metadata: Metadata = {
  metadataBase: new URL("https://bellmountaincamera.com"),
  title: {
    default: "Bell Mountain Camera | High Desert Film Lab and Camera Shop",
    template: "%s | Bell Mountain Camera"
  },
  description: site.description,
  keywords: [
    "Bell Mountain Camera",
    "Bell Mountain Camera Apple Valley",
    "film camera shop Apple Valley",
    "film development Apple Valley",
    "35mm film Apple Valley",
    "High Desert film lab",
    "film scanning Apple Valley",
    "film camera repair Apple Valley",
    "light seal replacement Apple Valley",
    "camera service Apple Valley",
    "used film cameras Apple Valley",
    "film stock Apple Valley",
    "C-41 film development High Desert",
    "Victorville film development",
    "Hesperia film development",
    "Apple Valley film lab",
    "local camera shop Apple Valley",
    "used camera pickup Apple Valley"
  ],
  openGraph: {
    title: "Bell Mountain Camera",
    description: "Film lab, used cameras, and camera service in Apple Valley.",
    url: "https://bellmountaincamera.com",
    siteName: "Bell Mountain Camera",
    images: [
      {
        url: "/images/home-camera-counter.jpg",
        width: 1280,
        height: 853,
        alt: "Hands holding a Nikon Nikkormat film camera over a counter of used cameras"
      }
    ],
    locale: "en_US",
    type: "website"
  }
};

export default function RootLayout({
  children
}: Readonly<{
  children: React.ReactNode;
}>) {
  const localBusinessJsonLd = {
    "@context": "https://schema.org",
    "@type": "LocalBusiness",
    name: site.name,
    url: `https://${site.domain}`,
    email: site.email,
    description: site.description,
    address: {
      "@type": "PostalAddress",
      streetAddress: site.street,
      addressLocality: "Apple Valley",
      addressRegion: "CA",
      postalCode: "92307",
      addressCountry: "US"
    },
    openingHoursSpecification: [
      {
        "@type": "OpeningHoursSpecification",
        dayOfWeek: ["Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"],
        opens: "10:00",
        closes: "16:00"
      }
    ],
    areaServed: ["Apple Valley", "Victorville", "Hesperia", "High Desert"],
    makesOffer: [
      "Film development",
      "Film scanning",
      "Film stock",
      "Local pickup",
      "Used film cameras",
      "Light seal replacement",
      "Camera service"
    ]
  };

  return (
    <html lang="en">
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link rel="stylesheet" href="https://fonts.googleapis.com/css2?family=Geist:wght@100..900&amp;family=Geist+Mono:wght@400;500;600;700&amp;family=IBM+Plex+Mono:wght@400;500;600;700&amp;family=VT323&amp;display=swap" />
      </head>
      <body>
        <FilmStripMotion />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify(localBusinessJsonLd)
          }}
        />
        <Header />
        <div id="main-content" tabIndex={-1}>{children}</div>
        <Footer />
      </body>
    </html>
  );
}
