import Link from "next/link";
import { SiteFooter } from "../../../components/SiteFooter";
import { SiteNav } from "../../../components/SiteNav";
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
              <Link
                className="portfolio-album-card"
                href={`/portfolio/${event}/stills/${album.slug}`}
                key={album.slug}
                aria-label={`Open ${album.title} gallery`}
              >
                <img src={album.cover} alt={`${album.title} album cover`} />
                <div>
                  <span>{String(index + 1).padStart(2, "0")}</span>
                  <h2>{album.title}</h2>
                  <p>{album.place}</p>
                </div>
              </Link>
            ))}
          </section>
        )}
      </section>

      <section className="page-cta">
        <p className="section-label">Like this direction?</p>
        <h2>Send us your date and we will help shape the right collection.</h2>
        <a href="/book">Book us</a>
      </section>

      <SiteFooter headline={`${pageTitle} for couples who want their story held with emotion, rhythm, and care.`} />
    </main>
  );
}
