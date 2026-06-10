import { notFound } from "next/navigation";
import { ParallaxBookingBanner } from "../../../../components/ParallaxBookingBanner";
import { SiteFooter } from "../../../../components/SiteFooter";
import { SiteNav } from "../../../../components/SiteNav";
import { eventLabels, portfolioAlbums, type EventKey } from "../../../portfolio-data";

type AlbumPageProps = {
  params: Promise<{
    event: EventKey;
    medium: "images" | "stills" | "films";
    album: string;
  }>;
};

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
            <img src={image} alt={`${album.title} photograph ${index + 1}`} />
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
