import { ParallaxBookingBanner } from "../components/ParallaxBookingBanner";
import { SiteFooter } from "../components/SiteFooter";
import { SiteNav } from "../components/SiteNav";

export default function AboutPage() {
  return (
    <main id="top">
      <SiteNav />

      <section className="about-photographer-hero">
        <div className="about-sticky-reveal">
          <div className="about-sticky-title">
            <h1>about the photographer</h1>
          </div>
          <div className="about-intro-images" aria-label="Leading Lines wedding moments">
            <div className="about-intro-feature">
              <img
                src="/team-leading-lines.webp"
                alt="Leading Lines Photography team"
              />
            </div>
            <img
              src="/split-films.jpg"
              alt="Wedding film portrait photographed by Leading Lines Photography"
            />
            <img
              src="/split-stills.jpg"
              alt="Wedding portrait photographed by Leading Lines Photography"
            />
            <img
              src="https://images.unsplash.com/photo-1532712938310-34cb3982ef74?auto=format&fit=crop&w=900&q=85"
              alt="Wedding reception moment photographed by Leading Lines Photography"
            />
          </div>

          <article className="about-company-story">
            <p className="section-label">Leading Lines Photography</p>
            <p>
              Leading Lines Photography documents weddings, pre-weddings, and
              cinematic stories with a quiet eye for elegance and real feeling.
              The work is built around people, timing, light, and the small
              gestures that make a celebration feel alive.
            </p>
            <p>
              We believe wedding imagery should become more than a gallery. It
              should become a family archive, carrying the atmosphere of the day
              forward with beauty, honesty, and care.
            </p>
          </article>
        </div>
      </section>

      <section className="about-chenmay-profile">
        <article>
          <h2>
            Behind the <span>lens</span>
          </h2>
          <p>
            Hello, I am Chenmay Ssinha. I am the Founder and CEO of Leading
            Lines Photography, and for me, photography has always been a way of
            holding on to feeling. I began with an engineering degree in
            Electronics, but my heart kept returning to images, people, and the
            quiet poetry of real moments.
          </p>
          <p>
            Over 15 years in this craft, I have photographed more than 500
            weddings and pre-weddings, each one teaching me something new about
            love, family, and memory. My work has been shaped by mentors I deeply
            respect, including Sounak Banerjee, Padma Shri Raghu Rai, and Rafique
            Sayed. Their influence lives in the way I look for light, emotion,
            portraiture, and the honest in-between moments that make a wedding
            feel unforgettable.
          </p>
        </article>
        <div className="about-founder-images">
          <img
            src="/founder-chenmay-ssinha.webp"
            alt="Portrait of Chenmay Ssinha, founder of Leading Lines Photography"
          />
          <img
            src="/chenmay-raghu-rai-award.webp"
            alt="Chenmay Ssinha receiving recognition from Padma Shri Raghu Rai"
          />
        </div>
      </section>

      <section className="about-story-stats">
        <div>
          <p className="section-label">Our statistics</p>
          <h2>Built for weddings that deserve to be remembered with feeling.</h2>
          <p>
            From intimate pre-weddings to layered family celebrations, our work
            follows the rhythm of Bangalore weddings: rituals, portraits,
            crowded rooms, quiet pauses, and the moments that become memory.
          </p>
        </div>
        <dl>
          <div>
            <dt>2012</dt>
            <dd>Studio founded</dd>
          </div>
          <div>
            <dt>Bangalore</dt>
            <dd>Primary city</dd>
          </div>
          <div>
            <dt>1000+</dt>
            <dd>Families served</dd>
          </div>
          <div>
            <dt>900+</dt>
            <dd>Weddings documented</dd>
          </div>
        </dl>
      </section>

      <ParallaxBookingBanner
        eyebrow="Begin your story"
        title="Tell us what the celebration feels like. We will shape the frames around that."
        body="For weddings, pre-weddings, families, and films across Bangalore."
      />

      <SiteFooter
        headline="Luxury wedding photography and cinematic storytelling for families who want their celebration remembered with emotion, beauty, and meaning."
        tone="about"
      />
    </main>
  );
}
