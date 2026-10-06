import { appleMapsUrl, cameraServiceMenu, filmLabPricing, site, serviceDisclaimer } from "@/lib/site";
import { siteUrl } from "@/lib/seo";

const businessId = `${siteUrl}/#business`;
const areaServed = ["Apple Valley", "Victorville", "Hesperia", "High Desert"];

export const businessStructuredData = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "LocalBusiness",
      "@id": businessId,
      name: site.name,
      alternateName: site.abbreviation,
      url: `${siteUrl}/`,
      email: site.email,
      description: site.description,
      image: `${siteUrl}/images/home-camera-counter.jpg`,
      logo: `${siteUrl}/images/bmc-circle-logo.png`,
      sameAs: ["https://www.instagram.com/bellmountaincamera/"],
      hasMap: appleMapsUrl,
      address: {
        "@type": "PostalAddress",
        streetAddress: site.street,
        addressLocality: "Apple Valley",
        addressRegion: "CA",
        postalCode: "92307",
        addressCountry: "US"
      },
      containedInPlace: {
        "@type": "Place",
        name: "Wild Goose Vintage & Thrift Store"
      },
      openingHoursSpecification: [{
        "@type": "OpeningHoursSpecification",
        dayOfWeek: ["Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"],
        opens: "10:00",
        closes: "16:00"
      }],
      areaServed,
      makesOffer: [
        { "@type": "Offer", itemOffered: { "@type": "Service", "@id": `${siteUrl}/lab#service`, name: "C-41 film development and scanning", url: `${siteUrl}/lab` } },
        { "@type": "Offer", itemOffered: { "@type": "Service", "@id": `${siteUrl}/services#service`, name: "Basic film camera service", url: `${siteUrl}/services` } }
      ]
    },
    {
      "@type": "WebSite",
      "@id": `${siteUrl}/#website`,
      name: site.name,
      alternateName: "BMC",
      url: `${siteUrl}/`,
      inLanguage: "en-US",
      publisher: { "@id": businessId }
    }
  ]
};

export const labStructuredData = {
  "@context": "https://schema.org",
  "@type": "Service",
  "@id": `${siteUrl}/lab#service`,
  name: "C-41 film development and scanning",
  serviceType: "35mm and 110 C-41 color negative film development and scanning",
  description: "C-41 processing for 35mm and 110 film in Apple Valley. Scanning-only service is available for already-developed negatives. Digital images are delivered by Dropbox download link.",
  url: `${siteUrl}/lab`,
  provider: { "@id": businessId },
  areaServed,
  hasOfferCatalog: {
    "@type": "OfferCatalog",
    name: "Film development and scanning per roll",
    itemListElement: filmLabPricing.flatMap((item) => Object.entries(item.prices).map(([format, price]) => ({
      "@type": "Offer",
      price: price.replace("$", ""),
      priceCurrency: "USD",
      url: `${siteUrl}/lab#pricing`,
      itemOffered: {
        "@type": "Service",
        name: `${format} ${item.title} — per roll`,
        description: item.description
      }
    })))
  }
};

export const cameraServiceStructuredData = {
  "@context": "https://schema.org",
  "@type": "Service",
  "@id": `${siteUrl}/services#service`,
  name: "Basic film camera service",
  serviceType: "Film camera diagnosis, cleaning, light seal replacement, and shutter speed adjustment when possible",
  description: serviceDisclaimer,
  url: `${siteUrl}/services`,
  provider: { "@id": businessId },
  areaServed,
  hasOfferCatalog: {
    "@type": "OfferCatalog",
    name: "Individual camera services",
    itemListElement: cameraServiceMenu.map((item) => ({
      "@type": "Offer",
      price: item.price.replace("$", ""),
      priceCurrency: "USD",
      url: `${siteUrl}/services`,
      itemOffered: { "@type": "Service", name: item.title, description: item.text }
    }))
  }
};
