import { ParallaxBookingBanner } from "../components/ParallaxBookingBanner";
import { PortfolioCarousel } from "../components/PortfolioCarousel";
import { SiteFooter } from "../components/SiteFooter";
import { SiteNav } from "../components/SiteNav";
import { createPageMetadata } from "../seo";
import { wsMedia } from "../ws-media";

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
    image: wsMedia.landscape01,
  },
  {
    title: "Ananya & Varun",
    place: "Palace Grounds / reception",
    image: wsMedia.landscape02,
  },
  {
    title: "Leah & Arjun",
    place: "Whitefield / intimate wedding",
    image: wsMedia.landscape03,
  },
  {
    title: "Meera & Siddharth",
    place: "Jayanagar / family celebration",
    image: wsMedia.portrait02,
  },
  {
    title: "Nisha & Rohan",
    place: "MG Road / cocktail evening",
    image: wsMedia.portrait03,
  },
  {
    title: "Tara & Kabir",
    place: "Bangalore farmhouse / haldi",
    image: wsMedia.portrait04,
  },
];

const collections = [
  {
    group: "Wedding",
    links: [
      {
        title: "Stills",
        href: "/portfolio/weddings/images",
        image: wsMedia.landscape01,
      },
      {
        title: "Films",
        href: "/portfolio/weddings/films",
        image: wsMedia.landscape04,
      },
    ],
  },
  {
    group: "Prewedding",
    links: [
      {
        title: "Stills",
        href: "/portfolio/prewedding/images",
        image: wsMedia.portrait05,
      },
      {
        title: "Films",
        href: "/portfolio/prewedding/films",
        image: wsMedia.portrait06,
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
