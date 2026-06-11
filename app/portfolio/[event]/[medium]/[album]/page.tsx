import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { ParallaxBookingBanner } from "../../../../components/ParallaxBookingBanner";
import { SiteFooter } from "../../../../components/SiteFooter";
import { SiteNav } from "../../../../components/SiteNav";
import { createPageMetadata } from "../../../../seo";
import { eventLabels, portfolioAlbums, type EventKey } from "../../../portfolio-data";

type AlbumPageProps = {
  params: Promise<{
    event: EventKey;
    medium: "images" | "stills" | "films";
    album: string;
  }>;
};

export function generateStaticParams() {
  return (Object.keys(portfolioAlbums) as EventKey[]).flatMap((event) =>
    portfolioAlbums[event].map((album) => ({
      album: album.slug,
      event,
      medium: "images",
    })),
  );
}

export async function generateMetadata({ params }: AlbumPageProps): Promise<Metadata> {
  const { event, medium, album: albumSlug } = await params;

  if (medium === "films") {
    return {};
  }

  const album = portfolioAlbums[event]?.find((item) => item.slug === albumSlug);

  if (!album) {
    return {};
  }

  const eventLabel = eventLabels[event];

  return createPageMetadata({
    title: `${album.title} ${eventLabel} Gallery`,
    description: `${album.title} ${eventLabel.toLowerCase()} gallery by Leading Lines Photography, photographed around ${album.place} with documentary emotion and editorial composition.`,
    path: `/portfolio/${event}/images/${album.slug}`,
    image: album.cover,
    keywords: [
      `${album.title} wedding gallery`,
      `${eventLabel} photography Bangalore`,
      `${album.place} wedding photography`,
    ],
  });
}

export default async function AlbumPage({ params }: AlbumPageProps) {
  const { event, medium, album: albumSlug } = await params;

  if (medium === "films") {
    notFound();
  }

  const album = portfolioAlbums[event]?.find((item) => item.slug === albumSlug);

  if (!album) {
    notFound();
  }

  const eventLabel = eventLabels[event];

  return (
    <main id="top">
      <SiteNav />

      <section className="portfolio-album-hero">
        <h1>{album.title}</h1>
        <p>{album.place}</p>
      </section>

      <section className="album-gallery-grid" aria-label={`${album.title} photo gallery`}>
        {album.images.map((image, index) => (
          <article className="album-gallery-card" key={`${album.slug}-${image}`}>
            <img src={image} alt={`${album.title} photograph ${index + 1}`} loading="lazy" decoding="async" />
            <span>{String(index + 1).padStart(2, "0")}</span>
          </article>
        ))}
      </section>

      <ParallaxBookingBanner
        eyebrow="Like this album?"
        title="Tell us the kind of story you want your gallery to hold."
        body={`We can shape ${album.title}'s kind of feeling around your own wedding rhythm.`}
        label="Book us"
      />

      <SiteFooter
        headline={`${album.title} ${eventLabel.toLowerCase()} stills, held with emotion, rhythm, and care.`}
        tone="album"
      />
    </main>
  );
}
