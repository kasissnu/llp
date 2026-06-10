import { SiteFooter } from "../../../components/SiteFooter";
import { SiteNav } from "../../../components/SiteNav";

const galleryImages = [
  "https://images.unsplash.com/photo-1519741497674-611481863552?auto=format&fit=crop&w=900&q=85",
  "https://images.unsplash.com/photo-1606216794074-735e91aa2c92?auto=format&fit=crop&w=900&q=85",
  "https://images.unsplash.com/photo-1520854221256-17451cc331bf?auto=format&fit=crop&w=900&q=85",
  "https://images.unsplash.com/photo-1591604466107-ec97de577aff?auto=format&fit=crop&w=900&q=85",
  "https://images.unsplash.com/photo-1511285560929-80b456fea0bc?auto=format&fit=crop&w=900&q=85",
  "https://images.unsplash.com/photo-1583939003579-730e3918a45a?auto=format&fit=crop&w=900&q=85",
];

const labels = {
  weddings: "Wedding",
  prewedding: "Prewedding",
  images: "Images",
  films: "Films",
};

type PortfolioCollectionPageProps = {
  params: Promise<{
    event: "weddings" | "prewedding";
    medium: "images" | "films";
  }>;
};

export default async function PortfolioCollectionPage({ params }: PortfolioCollectionPageProps) {
  const { event, medium } = await params;
  const eventLabel = labels[event] ?? "Wedding";
  const mediumLabel = labels[medium] ?? "Images";
  const isFilm = medium === "films";

  return (
    <main id="top">
      <SiteNav />

      <section className="page-hero portfolio-hero">
        <p className="section-label">{eventLabel} / {mediumLabel}</p>
        <h1>{eventLabel} {mediumLabel} portfolio.</h1>
        <p>
          A focused collection for couples who want to understand our {mediumLabel.toLowerCase()}
          {" "}approach before booking Leading Lines Photography.
        </p>
      </section>

      <section className={isFilm ? "film-gallery-grid" : "image-gallery-grid"} aria-label={`${eventLabel} ${mediumLabel} gallery`}>
        {galleryImages.map((image, index) => (
          <article className={isFilm ? "film-gallery-card" : "image-gallery-card"} key={image}>
            <img src={image} alt={`${eventLabel} ${mediumLabel} portfolio ${index + 1}`} />
            <div>
              <span>{String(index + 1).padStart(2, "0")}</span>
              <h2>{isFilm ? "Film story" : "Image story"}</h2>
            </div>
          </article>
        ))}
      </section>

      <section className="page-cta">
        <p className="section-label">Like this direction?</p>
        <h2>Send us your date and we will help shape the right collection.</h2>
        <a href="/book">Book us</a>
      </section>

      <SiteFooter headline={`${eventLabel} ${mediumLabel.toLowerCase()} for couples who want their story held with emotion, rhythm, and care.`} />
    </main>
  );
}
