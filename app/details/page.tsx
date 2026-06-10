import { SiteFooter } from "../components/SiteFooter";
import { SiteNav } from "../components/SiteNav";

const services = [
  {
    title: "Wedding Photography",
    detail:
      "Full-day documentary coverage for rituals, portraits, family moments, and reception energy.",
    meta: "Single day / multi-event / full wedding",
  },
  {
    title: "Wedding Films",
    detail:
      "Cinematic films built from vows, sound, movement, and the natural rhythm of your celebration.",
    meta: "Teaser / highlight / full film",
  },
  {
    title: "Engagements & Pre-Weddings",
    detail:
      "Editorial portraits and easy guided sessions across Bangalore, designed around your comfort.",
    meta: "Outdoor / home / venue-led",
  },
  {
    title: "Family Events",
    detail:
      "Coverage for intimate ceremonies, milestone gatherings, and the people who make them matter.",
    meta: "Naming / anniversaries / private events",
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
        <p className="section-label">Details / Services</p>
        <h1>Photography and films for Bangalore celebrations.</h1>
        <p>
          Choose stills, films, or a combined team. Every collection is built
          around your schedule, rituals, venues, families, and pace.
        </p>
      </section>

      <section className="service-grid" aria-label="Services offered">
        {services.map((service, index) => (
          <article className="service-card" id={service.title === "Wedding Films" ? "films" : undefined} key={service.title}>
            <span>{String(index + 1).padStart(2, "0")}</span>
            <h2>{service.title}</h2>
            <p>{service.detail}</p>
            <small>{service.meta}</small>
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

      <section className="page-cta">
        <p className="section-label">Ready to book?</p>
        <h2>Send us the date, venues, and what you want remembered.</h2>
        <a href="/book">Start the booking form</a>
      </section>

      <SiteFooter headline="Services that stay flexible around your rituals, people, timings, and the pace of a real Bangalore wedding." />
    </main>
  );
}
