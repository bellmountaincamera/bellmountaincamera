import type { Metadata } from "next";

export const siteUrl = "https://www.bellmountaincamera.com";

export const defaultSocialImage = {
  url: "/images/home-camera-counter.jpg",
  width: 1280,
  height: 853,
  alt: "Bell Mountain Camera film and camera shop in Apple Valley, California"
};

type PageMetadataOptions = {
  title: string;
  description: string;
  path: string;
  absoluteTitle?: boolean;
  noIndex?: boolean;
  image?: {
    url: string;
    alt: string;
    width?: number;
    height?: number;
  };
};

export function createPageMetadata({
  title,
  description,
  path,
  absoluteTitle = false,
  noIndex = false,
  image = defaultSocialImage
}: PageMetadataOptions): Metadata {
  const fullTitle = absoluteTitle ? title : `${title} | Bell Mountain Camera`;
  const url = new URL(path, siteUrl).toString();

  return {
    title: absoluteTitle ? { absolute: title } : title,
    description,
    alternates: { canonical: url },
    robots: noIndex
      ? { index: false, follow: true }
      : { index: true, follow: true, googleBot: { index: true, follow: true, "max-image-preview": "large" } },
    openGraph: {
      type: "website",
      locale: "en_US",
      siteName: "Bell Mountain Camera",
      title: fullTitle,
      description,
      url,
      images: [image]
    },
    twitter: {
      card: "summary_large_image",
      title: fullTitle,
      description,
      images: [image]
    }
  };
}
