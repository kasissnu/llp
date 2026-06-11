import type { MetadataRoute } from "next";
import { portfolioAlbums, type EventKey } from "./portfolio/portfolio-data";
import { absoluteUrl } from "./seo";

const lastModified = new Date();

const staticRoutes: MetadataRoute.Sitemap = [
  { url: absoluteUrl("/"), lastModified, changeFrequency: "weekly", priority: 1 },
  { url: absoluteUrl("/about"), lastModified, changeFrequency: "monthly", priority: 0.75 },
  { url: absoluteUrl("/details"), lastModified, changeFrequency: "monthly", priority: 0.85 },
  { url: absoluteUrl("/portfolio"), lastModified, changeFrequency: "weekly", priority: 0.9 },
  { url: absoluteUrl("/book"), lastModified, changeFrequency: "weekly", priority: 0.9 },
];

export default function sitemap(): MetadataRoute.Sitemap {
  const portfolioRoutes: MetadataRoute.Sitemap = (Object.keys(portfolioAlbums) as EventKey[]).flatMap((event) => {
    const collectionRoutes: MetadataRoute.Sitemap = [
      {
        url: absoluteUrl(`/portfolio/${event}/images`),
        lastModified,
        changeFrequency: "weekly",
        priority: 0.8,
      },
      {
        url: absoluteUrl(`/portfolio/${event}/films`),
        lastModified,
        changeFrequency: "monthly",
        priority: 0.7,
      },
    ];

    const albumRoutes: MetadataRoute.Sitemap = portfolioAlbums[event].map((album) => ({
      url: absoluteUrl(`/portfolio/${event}/images/${album.slug}`),
      lastModified,
      changeFrequency: "monthly",
      priority: 0.7,
    }));

    return [...collectionRoutes, ...albumRoutes];
  });

  return [...staticRoutes, ...portfolioRoutes];
}
