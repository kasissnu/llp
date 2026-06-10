import { SiteFooter } from "../components/SiteFooter";
import { SiteNav } from "../components/SiteNav";

export default function AboutPage() {
  return (
    <main id="top">
      <SiteNav />

      <section className="page-hero about-page-hero">
        <p className="section-label">About us</p>
        <h1>Leading Lines Photography is built around quiet observation.</h1>
        <p>
          We are a Bangalore-based photography and films team documenting
          weddings with a calm presence, clean compositions, and attention to
          the people who make the day feel alive.
        </p>
      </section>

      <section className="about-story-page">
        <div>
          <img
            src="https://images.unsplash.com/photo-1523438885200-e635ba2c371e?auto=format&fit=crop&w=1000&q=85"
            alt="Wedding couple photographed by Leading Lines Photography"
          />
        </div>
        <article>
          <p className="section-label">Our approach</p>
          <h2>Less performance, more presence.</h2>
          <p>
            We guide when it helps and step back when the moment already has
            its own shape. Our work sits between documentary honesty and
            editorial polish, so the final gallery feels beautiful without
            losing the truth of the day.
          </p>
          <p>
            For now, we serve Bangalore celebrations only. That focus lets us
            understand the city, its venues, its timings, and the way families
            move through wedding days here.
          </p>
          <div className="about-meta">
            <span>Bangalore only</span>
            <span>Weddings</span>
            <span>Preweddings</span>
            <span>Photography + films</span>
          </div>
        </article>
      </section>

      <section className="page-cta">
        <p className="section-label">Meet us before the day</p>
        <h2>Share your date, venues, and what you want the work to feel like.</h2>
        <a href="/book">Book a conversation</a>
      </section>

      <SiteFooter headline="A Bangalore team documenting weddings with restraint, warmth, and a sharp eye for the in-between." />
    </main>
  );
}
