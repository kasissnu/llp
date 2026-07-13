import type { Metadata } from "next";
import { ParallaxBookingBanner } from "../../../components/ParallaxBookingBanner";
import { SiteFooter } from "../../../components/SiteFooter";
import { SiteNav } from "../../../components/SiteNav";
import { createPageMetadata } from "../../../seo";
import { eventLabels, filmEmbeds, portfolioAlbums } from "../../portfolio-data";

const labels = {
  images: "Stills",
  stills: "Stills",
  films: "Films",
};

type PortfolioCollectionPageProps = {
  params: Promise<{
    event: "weddings" | "prewedding";
    medium: "images" | "stills" | "films";
  }>;
};

export function generateStaticParams() {
  return (["weddings", "prewedding"] as const).flatMap((event) =>
    (["images", "films"] as const).map((medium) => ({ event, medium })),
  );
}

export async function generateMetadata({ params }: PortfolioCollectionPageProps): Promise<Metadata> {
  const { event, medium } = await params;
  const eventLabel = eventLabels[event] ?? "Wedding";
  const mediumLabel = labels[medium] ?? "Images";
  const canonicalMedium = medium === "stills" ? "images" : medium;
  const title = `${eventLabel} ${mediumLabel} Portfolio`;
  const albums = portfolioAlbums[event] ?? [];

  return createPageMetadata({
    title,
    description: `Explore ${eventLabel.toLowerCase()} ${mediumLabel.toLowerCase()} by Leading Lines Photography, crafted around real moments, family emotion, rituals, portraits, and atmosphere.`,
    path: `/portfolio/${event}/${canonicalMedium}`,
    image: albums[0]?.cover,
    keywords: [
      `${eventLabel} ${mediumLabel} Bangalore`,
      `${eventLabel} photography portfolio`,
      `Leading Lines ${eventLabel} ${mediumLabel}`,
    ],
  });
}

export default async function PortfolioCollectionPage({ params }: PortfolioCollectionPageProps) {
  const { event, medium } = await params;
  const eventLabel = eventLabels[event] ?? "Wedding";
  const mediumLabel = labels[medium] ?? "Images";
  const isFilm = medium === "films";
  const pageTitle = `${eventLabel} ${mediumLabel}`;
  const albums = portfolioAlbums[event] ?? [];

  return (
    <main id="top">
      <SiteNav />

      <section className="portfolio-collection-reveal">
        <div className="portfolio-collection-title">
          <h1>{pageTitle.toLowerCase()}</h1>
        </div>

        {isFilm ? (
          <section className="portfolio-film-feature" aria-label={`${pageTitle} video`}>
            <div className="portfolio-youtube-frame">
              <iframe
                src={filmEmbeds[event]}
                title={`${pageTitle} film`}
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                allowFullScreen
              />
            </div>
          </section>
        ) : (
          <section className="portfolio-album-grid" aria-label={`${pageTitle} albums`}>
            {albums.map((album, index) => (
              <div className="portfolio-album-card is-disabled-link" key={album.slug} aria-disabled="true">
                <img src={album.cover} alt={`${album.title} album cover`} loading="lazy" decoding="async" />
                <div>
                  <span>{String(index + 1).padStart(2, "0")}</span>
                  <h2>{album.title}</h2>
                  <p>{album.place}</p>
                </div>
              </div>
            ))}
          </section>
        )}
      </section>

      <ParallaxBookingBanner
        eyebrow="Like this direction?"
        title="Send us your date and we will help shape the right collection."
        body={`${pageTitle} can be planned around your rituals, venues, and pace.`}
        label="Book us"
      />

      <SiteFooter
        headline={`${pageTitle} for couples who want their story held with emotion, rhythm, and care.`}
        tone="collection"
      />
    </main>
  );
}
