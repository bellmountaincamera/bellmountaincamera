import type { Metadata } from "next";
import { headers } from "next/headers";
import { Geist, IBM_Plex_Mono } from "next/font/google";
import "./globals.css";
import { Footer } from "@/components/layout/Footer";
import { Header } from "@/components/layout/Header";
import { LockGate } from "@/components/sections/LockGate";
import { site } from "@/lib/site";

const siteLocked = true;

const geist = Geist({
  subsets: ["latin"],
  variable: "--font-geist",
  display: "swap"
});

const ibmPlexMono = IBM_Plex_Mono({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
  variable: "--font-plex-mono",
  display: "swap"
});

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
    "online film store",
    "35mm film shipping",
    "used film cameras online"
  ],
  openGraph: {
    title: "Bell Mountain Camera",
    description: "Film cameras and film development in Apple Valley.",
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

export default async function RootLayout({
  children
}: Readonly<{
  children: React.ReactNode;
}>) {
  const requestHeaders = await headers();
  const pathname = requestHeaders.get("x-bmc-pathname") ?? "/";
  const shouldLockPage = siteLocked && pathname !== "/";

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
    <html lang="en" className={`${geist.variable} ${ibmPlexMono.variable}`}>
      <body>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify(localBusinessJsonLd)
          }}
        />
        {shouldLockPage ? (
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
