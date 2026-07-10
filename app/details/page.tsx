import { ParallaxBookingBanner } from "../components/ParallaxBookingBanner";
import { SiteFooter } from "../components/SiteFooter";
import { SiteNav } from "../components/SiteNav";
import { createPageMetadata } from "../seo";
import { wsMedia } from "../ws-media";

export const metadata = createPageMetadata({
  title: "Wedding Photography Services",
  description:
    "Explore Leading Lines Photography services for weddings, pre-weddings, family events, portraits, photography, and films across Bangalore.",
  path: "/details",
  keywords: [
    "wedding photography services Bangalore",
    "pre wedding photography Bangalore",
    "family event photography Bangalore",
    "wedding videography Bangalore",
  ],
});

const services = [
  {
    title: "Weddings",
    detail:
      "Full-day documentary coverage for rituals, portraits, family moments, and reception energy. Collections are shaped around your schedule, venues, and the rhythm of your people.",
    meta: "Custom wedding coverage",
    image: wsMedia.landscape02,
    href: "/portfolio/weddings/images",
  },
  {
    title: "Preweddings",
    detail:
      "Editorial portraits and easy guided sessions across Bangalore, planned around comfort, light, location, and the mood you want the images to carry.",
    meta: "Outdoor / home / venue-led",
    image: wsMedia.portrait02,
    href: "/portfolio/prewedding/images",
  },
  {
    title: "Family Events",
    detail:
      "Quiet, observant coverage for intimate ceremonies, milestone gatherings, anniversaries, and the people who make those rooms feel full.",
    meta: "Naming / anniversaries / private events",
    image: wsMedia.landscape05,
    href: "/portfolio",
  },
  {
    title: "Photoshoots",
    detail:
      "Portrait-led sessions for couples, families, maternity, personal milestones, and thoughtful editorial imagery without the pressure of a full event.",
    meta: "Portraits / couples / maternity",
    image: wsMedia.portrait04,
    href: "/book",
  },
];

const serviceThemes = [
  {
    surface: "olive",
  },
  {
    surface: "ink",
  },
  {
    surface: "paper",
  },
  {
    surface: "brand",
  },
];

const process = [
  "Discovery call",
  "Coverage plan",
  "Wedding week prep",
  "Photography + films",
  "Edited gallery delivery",
];

export default function DetailsPage() {
  return (
    <main id="top">
      <SiteNav />

      <section className="page-hero details-hero">
        <h1>
          Explore the <span className="script-word">services</span>
        </h1>
      </section>

      <section className="service-grid" aria-label="Services offered">
        {services.map((service, index) => (
          <article
            className={`service-card service-card-${serviceThemes[index].surface}`}
            id={service.title === "Weddings" ? "weddings" : undefined}
            key={service.title}
          >
            <div className="service-card-title">
              <span>{service.title}</span>
            </div>
            <div className="service-card-body">
              <div className="service-card-copy">
                <p>{service.detail}</p>
                <small>{service.meta}</small>
                <div className="service-card-actions">
                  <a href={service.href}>View portfolio</a>
                  <a href="/book">Inquire for availability</a>
                </div>
              </div>
              <img
                src={service.image}
                alt={`${service.title} service by Leading Lines Photography`}
                loading="lazy"
                decoding="async"
              />
            </div>
          </article>
        ))}
      </section>

      <section className="process-section">
        <div>
          <p className="section-label">How we work</p>
          <h2>A calm plan before the day, a quiet eye during it.</h2>
        </div>
        <ol>
          {process.map((item) => (
            <li key={item}>{item}</li>
          ))}
        </ol>
      </section>

      <ParallaxBookingBanner
        eyebrow="Ready to book?"
        title="Send us the date, venues, and what you want remembered."
        body="We will help shape a photo and film plan around your rituals, family, and timings."
        label="Start the booking form"
      />

      <SiteFooter
        headline="Services that stay flexible around your rituals, people, timings, and the pace of a real Bangalore wedding."
        tone="details"
      />
    </main>
  );
}
