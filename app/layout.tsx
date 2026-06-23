import type { Metadata } from "next";
import "./globals.css";
import { Footer } from "@/components/layout/Footer";
import { Header } from "@/components/layout/Header";
import { LockGate } from "@/components/sections/LockGate";
import { site } from "@/lib/site";

const siteLocked = true;

export const metadata: Metadata = {
  metadataBase: new URL("https://bellmountaincamera.com"),
  title: {
    default: siteLocked
      ? "Bell Mountain Camera | Coming Soon"
      : "Bell Mountain Camera | High Desert Film Lab and Camera Shop",
    template: "%s | Bell Mountain Camera"
  },
  description:
    siteLocked
      ? "Film cameras and equipment in Apple Valley, CA. Site is locked, coming soon."
      : site.description,
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
    "online film store",
    "35mm film shipping",
    "used film cameras online"
  ],
  openGraph: {
    title: "Bell Mountain Camera",
    description: siteLocked
      ? "Film cameras and equipment in Apple Valley, CA. Site is locked, coming soon."
      : "Film cameras and film development in Apple Valley.",
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
    telephone: site.phone,
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
      "Online purchases",
      "Shipping",
      "Local pickup",
      "Used film cameras",
      "Light seal replacement",
      "Camera service"
    ]
  };

  return (
    <html lang="en">
      <body>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify(localBusinessJsonLd)
          }}
        />
        {siteLocked ? (
          <LockGate>
            <Header />
            {children}
            <Footer />
          </LockGate>
        ) : (
          <>
            <Header />
            {children}
            <Footer />
          </>
        )}
      </body>
    </html>
  );
}
