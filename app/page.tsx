import { HeroCarousel } from "./components/HeroCarousel";
import { ParallaxVideoBanner } from "./components/ParallaxVideoBanner";
import { TestimonialCarousel } from "./components/TestimonialCarousel";

const galleryImages = [
  "https://images.unsplash.com/photo-1519741497674-611481863552?auto=format&fit=crop&w=900&q=85",
  "https://images.unsplash.com/photo-1606216794074-735e91aa2c92?auto=format&fit=crop&w=900&q=85",
  "https://images.unsplash.com/photo-1520854221256-17451cc331bf?auto=format&fit=crop&w=900&q=85",
  "https://images.unsplash.com/photo-1591604466107-ec97de577aff?auto=format&fit=crop&w=900&q=85",
  "https://images.unsplash.com/photo-1511285560929-80b456fea0bc?auto=format&fit=crop&w=900&q=85",
  "https://images.unsplash.com/photo-1583939003579-730e3918a45a?auto=format&fit=crop&w=900&q=85",
];

const testimonials = [
  {
    title: "They were a dream team & surpassed all expectations",
    quote:
      "Leading Lines Photography made us feel completely comfortable for all of our events, and made us have even more fun than we would have had otherwise. The wedding pictures and video are just simply incredible.",
    name: "Aditi & Chris",
    image:
      "https://images.unsplash.com/photo-1529634597503-139d3726fed5?auto=format&fit=crop&w=1200&q=85",
  },
  {
    title: "They captured moments we did not even know were happening",
    quote:
      "The whole experience felt calm, thoughtful, and completely personal. Every image brought us back to the day, from the biggest rituals to the quietest glances.",
    name: "Ananya & Varun",
    image:
      "https://images.unsplash.com/photo-1465495976277-4387d4b0e4a6?auto=format&fit=crop&w=1200&q=85",
  },
  {
    title: "We relived the celebration all over again",
    quote:
      "The film and photographs hold the energy of the weekend so beautifully. It feels honest, elegant, and timeless.",
    name: "Leah & Arjun",
    image:
      "https://images.unsplash.com/photo-1523438885200-e635ba2c371e?auto=format&fit=crop&w=1200&q=85",
  },
];

const instagramImages = [
  "https://images.unsplash.com/photo-1519225421980-715cb0215aed?auto=format&fit=crop&w=500&q=85",
  "https://images.unsplash.com/photo-1519741497674-611481863552?auto=format&fit=crop&w=500&q=85",
  "https://images.unsplash.com/photo-1606216794074-735e91aa2c92?auto=format&fit=crop&w=500&q=85",
  "https://images.unsplash.com/photo-1591604466107-ec97de577aff?auto=format&fit=crop&w=500&q=85",
];

const navLeft = ["Home", "About", "Details"];
const navRight = ["Portfolio", "Contact", "Book"];

export default function Home() {
  return (
    <main id="top">
      <nav className="main-menu" aria-label="Main navigation">
        <div className="menu-line" />
        <div className="menu-links">
          <div>
            {navLeft.map((item) => (
              <a href={item === "Home" ? "#top" : `#${item.toLowerCase()}`} key={item}>
                {item}
              </a>
            ))}
          </div>
          <a className="nav-brand" href="#top" aria-label="Leading Lines Photography home">
            <img src="/logo-leading-lines.svg" alt="Leading Lines Photography" />
          </a>
          <div>
            {navRight.map((item) => (
              <a href={item === "Book" ? "#contact" : `#${item.toLowerCase()}`} key={item}>
                {item}
              </a>
            ))}
          </div>
        </div>
        <div className="menu-line lower" />
      </nav>

      <section className="hero-image">
        <p className="hero-side-text">Bangalore wedding photographers & filmmakers</p>
        <HeroCarousel images={galleryImages} />
      </section>

      <section className="about-section" id="about">
        <div className="about-image primary">
          <img
            src="https://images.unsplash.com/photo-1523438885200-e635ba2c371e?auto=format&fit=crop&w=900&q=85"
            alt="Wedding couple portrait by Leading Lines Photography"
          />
        </div>
        <div className="about-copy">
          <p className="script">Every frame led by feeling</p>
          <h1>Bangalore wedding photography</h1>
          <p>
            With a documentary heart and an editorial eye, Leading Lines
            Photography preserves the atmosphere, people, rituals, and quiet
            in-between moments that make your celebration yours.
          </p>
          <a className="text-link" href="#details">
            Learn more +
          </a>
        </div>
        <div className="about-image secondary">
          <img
            src="https://images.unsplash.com/photo-1511285560929-80b456fea0bc?auto=format&fit=crop&w=900&q=85"
            alt="Wedding ceremony detail"
          />
        </div>
      </section>

      <section className="split-showcase" id="details" aria-label="Explore photography and films">
        <a className="split-panel split-images" href="#portfolio">
          <span>Images</span>
          <small>Visit the galleries</small>
        </a>
        <a className="split-panel split-films" href="#videography">
          <span>Films</span>
          <small>Visit the galleries</small>
        </a>
      </section>

      <TestimonialCarousel testimonials={testimonials} />

      <ParallaxVideoBanner
        videoSrc="/wedding_film_for_homepage.mp4"
        poster="https://images.unsplash.com/photo-1469371670807-013ccf25f16a?auto=format&fit=crop&w=1800&q=85"
      />

      <section className="reviews-section" id="portfolio">
        <div className="video-card" aria-label="Wedding film preview">
          <span>Film Preview</span>
        </div>
        <div className="reviews-copy">
          <h2>We are dedicated to ensuring you re-live your special day for decades to come.</h2>
          <p>
            Your wedding day is filled with love, joy, and unforgettable
            moments. Our team is dedicated to preserving every smile, tear,
            embrace, and celebration with care.
          </p>
          <a className="text-link" href="#portfolio">
            View portfolio +
          </a>
        </div>
        <img
          src="https://images.unsplash.com/photo-1532712938310-34cb3982ef74?auto=format&fit=crop&w=900&q=85"
          alt="Wedding reception photography"
        />
      </section>

      <section className="booking-banner" id="contact">
        <h2>Ready to immortalize your love story?</h2>
        <p>Reach out to us now and let's start planning together!</p>
        <a href="mailto:hello@leadinglinesphotography.com" aria-label="Contact Leading Lines Photography">
          →
        </a>
      </section>

      <footer className="footer">
        <a className="footer-logo" href="#top" aria-label="Leading Lines Photography home">
          <img src="/logo-leading-lines-light.svg" alt="Leading Lines Photography" />
        </a>
        <h3>
          <i>
            Documenting the moments you&apos;ll cherish forever, because
            photographs should always feel like proof of a life beautifully
            lived.
          </i>
        </h3>
        <nav aria-label="Footer navigation">
          {["Home", "About", "Portfolio", "Details", "Blog", "Contact Us"].map((item) => (
            <a href={item === "Home" ? "#top" : `#${item.toLowerCase().replaceAll(" ", "-")}`} key={item}>
              {item}
            </a>
          ))}
        </nav>
        <div className="instagram-strip">
          <span>@leadinglinesphotography</span>
          {instagramImages.map((image, index) => (
            <img src={image} alt={`Instagram preview ${index + 1}`} key={image} />
          ))}
        </div>
        <p>Bangalore wedding photographers & filmmakers</p>
        <a className="back-top" href="#top">
          Back to top
        </a>
        <div className="footer-credits">
          <p>Copyright © 2026 Leading Lines Photography | Privacy Policy</p>
          <p>Website by Leading Lines Photography</p>
        </div>
      </footer>
    </main>
  );
}
