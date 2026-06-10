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
                src="https://images.unsplash.com/photo-1523438885200-e635ba2c371e?auto=format&fit=crop&w=1100&q=85"
                alt="Wedding couple photographed by Leading Lines Photography"
              />
            </div>
            <img
              src="https://images.unsplash.com/photo-1511285560929-80b456fea0bc?auto=format&fit=crop&w=900&q=85"
              alt="Wedding ceremony detail photographed by Leading Lines Photography"
            />
            <img
              src="https://images.unsplash.com/photo-1520854221256-17451cc331bf?auto=format&fit=crop&w=900&q=85"
              alt="Wedding portrait photographed by Leading Lines Photography"
            />
          </div>

          <article className="about-company-story">
            <p className="section-label">Leading Lines Photography</p>
            <h2>A Bangalore studio shaped by artistry, emotion, and legacy.</h2>
            <p>
              Leading Lines Photography documents weddings, pre-weddings, and
              cinematic stories with an eye for elegance and a respect for real
              feeling. The work is not built around noise or over-direction. It
              is built around people, timing, light, and the small gestures that
              make a celebration feel alive.
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
          <p className="section-label">Founder and CEO</p>
          <h2>Chenmay Ssinha</h2>
          <p>
            Chenmay Ssinha, Founder and CEO of Leading Lines Photography, built
            the studio from a deep pull toward images, people, and emotional
            storytelling. His path began outside the expected creative route,
            but photography became the place where discipline, instinct, and
            imagination came together.
          </p>
          <p>
            His approach is patient and observant. He looks for composed frames
            without losing the honesty of the moment, guiding when needed and
            stepping back when the story is already unfolding.
          </p>
        </article>
        <div>
          <img
            src="https://images.unsplash.com/photo-1508214751196-bcfd4ca60f91?auto=format&fit=crop&w=900&q=85"
            alt="Portrait representing Chenmay Ssinha"
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
            <dt>2022</dt>
            <dd>Studio founded</dd>
          </div>
          <div>
            <dt>Bangalore</dt>
            <dd>Primary city</dd>
          </div>
          <div>
            <dt>Photo + Film</dt>
            <dd>Complete storytelling</dd>
          </div>
          <div>
            <dt>Weddings</dt>
            <dd>Pre-weddings and celebrations</dd>
          </div>
        </dl>
      </section>

      <SiteFooter headline="Luxury wedding photography and cinematic storytelling for families who want their celebration remembered with emotion, beauty, and meaning." />
    </main>
  );
}
