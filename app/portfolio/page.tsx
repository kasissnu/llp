import { ParallaxBookingBanner } from "../components/ParallaxBookingBanner";
import { PortfolioCarousel } from "../components/PortfolioCarousel";
import { SiteFooter } from "../components/SiteFooter";
import { SiteNav } from "../components/SiteNav";
import { createPageMetadata } from "../seo";

export const metadata = createPageMetadata({
  title: "Wedding Portfolio",
  description:
    "View Leading Lines Photography wedding and pre-wedding stills and films, including Bangalore ceremonies, receptions, portraits, and family celebrations.",
  path: "/portfolio",
  keywords: [
    "Bangalore wedding photography portfolio",
    "wedding films portfolio Bangalore",
    "pre wedding photos Bangalore",
    "Leading Lines Photography portfolio",
  ],
});

const stories = [
  {
    title: "Aditi & Chris",
    place: "Indiranagar / temple ceremony",
    image:
      "https://images.unsplash.com/photo-1529634597503-139d3726fed5?auto=format&fit=crop&w=1000&q=85",
  },
  {
    title: "Ananya & Varun",
    place: "Palace Grounds / reception",
    image:
      "https://images.unsplash.com/photo-1465495976277-4387d4b0e4a6?auto=format&fit=crop&w=1000&q=85",
  },
  {
    title: "Leah & Arjun",
    place: "Whitefield / intimate wedding",
    image:
      "https://images.unsplash.com/photo-1523438885200-e635ba2c371e?auto=format&fit=crop&w=1000&q=85",
  },
  {
    title: "Meera & Siddharth",
    place: "Jayanagar / family celebration",
    image:
      "https://images.unsplash.com/photo-1519225421980-715cb0215aed?auto=format&fit=crop&w=1000&q=85",
  },
  {
    title: "Nisha & Rohan",
    place: "MG Road / cocktail evening",
    image:
      "https://images.unsplash.com/photo-1591604466107-ec97de577aff?auto=format&fit=crop&w=1000&q=85",
  },
  {
    title: "Tara & Kabir",
    place: "Bangalore farmhouse / haldi",
    image:
      "https://images.unsplash.com/photo-1583939003579-730e3918a45a?auto=format&fit=crop&w=1000&q=85",
  },
];

const collections = [
  {
    group: "Wedding",
    links: [
      {
        title: "Stills",
        href: "/portfolio/weddings/images",
        image:
          "https://images.unsplash.com/photo-1529634597503-139d3726fed5?auto=format&fit=crop&w=1000&q=85",
      },
      {
        title: "Films",
        href: "/portfolio/weddings/films",
        image:
          "https://images.unsplash.com/photo-1469371670807-013ccf25f16a?auto=format&fit=crop&w=1000&q=85",
      },
    ],
  },
  {
    group: "Prewedding",
    links: [
      {
        title: "Stills",
        href: "/portfolio/prewedding/images",
        image:
          "https://images.unsplash.com/photo-1511285560929-80b456fea0bc?auto=format&fit=crop&w=1000&q=85",
      },
      {
        title: "Films",
        href: "/portfolio/prewedding/films",
        image:
          "https://images.unsplash.com/photo-1523438885200-e635ba2c371e?auto=format&fit=crop&w=1000&q=85",
      },
    ],
  },
];

export default function PortfolioPage() {
  return (
    <main id="top">
      <SiteNav />

      <PortfolioCarousel stories={stories} />

      <section className="collection-section" aria-label="Portfolio collections">
        {collections.map((collection) => (
          <div className="collection-group" key={collection.group}>
            <h3>
              {collection.group} <span>collection</span>
            </h3>
            <div className="collection-grid">
              {collection.links.map((item) => (
                <a className="collection-card" href={item.href} key={item.title}>
                  <img src={item.image} alt={`${item.title} portfolio`} loading="lazy" decoding="async" />
                  <span>{item.title}</span>
                </a>
              ))}
            </div>
          </div>
        ))}
      </section>

      <ParallaxBookingBanner
        eyebrow="Planning something similar?"
        title="Tell us the kind of celebration you are building."
        body="We will listen for the people, places, and moments your gallery needs to hold."
        label="Book Leading Lines"
      />

      <SiteFooter
        headline="A growing archive of Bangalore weddings, preweddings, still frames, and films made with a quiet eye."
        tone="portfolio"
      />
    </main>
  );
}
