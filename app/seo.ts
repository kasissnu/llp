import type { Metadata } from "next";
import { wsMedia } from "./ws-media";

export const siteUrl = new URL("https://leadinglinesphotography.com");
export const siteName = "Leading Lines Photography";
export const defaultOgImage = wsMedia.landscape01;
export const siteDescription =
  "Leading Lines Photography is a Bengaluru wedding photography and films studio creating refined wedding, pre-wedding, family event, and portrait stories across India.";

type PageMetadataOptions = {
  description: string;
  image?: string;
  keywords?: string[];
  path: string;
  title: string;
};

export function absoluteUrl(path: string) {
  return new URL(path, siteUrl).toString();
}

export function createPageMetadata({
  description,
  image = defaultOgImage,
  keywords = [],
  path,
  title,
}: PageMetadataOptions): Metadata {
  const url = path.startsWith("/") ? path : `/${path}`;

  return {
    title,
    description,
    keywords,
    alternates: {
      canonical: url,
    },
    openGraph: {
      title: `${title} | ${siteName}`,
      description,
      url,
      siteName,
      images: [
        {
          url: image,
          width: 1200,
          height: 630,
          alt: `${siteName} - ${title}`,
        },
      ],
      locale: "en_IN",
      type: "website",
    },
    twitter: {
      card: "summary_large_image",
      title: `${title} | ${siteName}`,
      description,
      images: [image],
    },
  };
}
