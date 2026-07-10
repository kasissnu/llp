import { HeroCarousel } from "./components/HeroCarousel";
import { ParallaxBookingBanner } from "./components/ParallaxBookingBanner";
import { ParallaxVideoBanner } from "./components/ParallaxVideoBanner";
import { SiteFooter } from "./components/SiteFooter";
import { SiteNav } from "./components/SiteNav";
import { TestimonialCarousel } from "./components/TestimonialCarousel";
import { createPageMetadata } from "./seo";
import { wsMedia } from "./ws-media";

export const metadata = createPageMetadata({
  title: "Bangalore Wedding Photography & Films",
  description:
    "Documentary wedding photography and cinematic films in Bangalore for couples who want quiet direction, honest emotion, and family-first storytelling.",
  path: "/",
  keywords: [
    "Bangalore wedding photography",
    "Bangalore wedding films",
    "candid wedding photographer Bangalore",
    "wedding photography studio Bangalore",
  ],
});

const galleryImages = [
  "/ws/hero-landscape-01.jpg",
  "/ws/hero-landscape-02.jpg",
  "/ws/hero-landscape-03.jpg",
  "/ws/hero-portrait-01.jpg",
  "/ws/hero-portrait-02.jpg",
  "/ws/hero-portrait-03.jpg",
];

const testimonials = [
  {
    title: "The photographs felt like memory, not performance",
    quote:
      "Leading Lines made the day feel easy. They noticed the rituals, the pauses, the family chaos, and the tiny things we missed while living through it.",
    name: "Aditi & Chris, Indiranagar",
    image: wsMedia.portrait01,
  },
  {
    title: "Calm people with a very sharp eye",
    quote:
      "Nothing felt staged or heavy. They moved through the wedding quietly and somehow came back with everything that mattered.",
    name: "Ananya & Varun, Palace Grounds",
    image: wsMedia.portrait04,
  },
  {
    title: "Our film still feels alive every time we watch it",
    quote:
      "The video has the exact rhythm of our weekend. It is emotional without being overdone, and it feels completely like us.",
    name: "Leah & Arjun, Whitefield",
    image: wsMedia.portrait06,
  },
];

export default function Home() {
  return (
    <main id="top">
      <SiteNav />

      <section className="hero-image">
        <HeroCarousel images={galleryImages} />
      </section>

      <section className="about-section" id="about">
        <div className="about-image primary">
          <img
            src={wsMedia.landscape03}
            alt="Wedding couple portrait by Leading Lines Photography"
            loading="lazy"
            decoding="async"
          />
        </div>
        <div className="about-copy">
          <p className="section-label">Bangalore wedding documentarians</p>
          <p className="script">Every frame led by feeling</p>
          <h1>Quiet direction. Honest emotion. Images with a pulse.</h1>
          <p>
            We photograph and film weddings across Bangalore with a documentary
            heart and an editorial eye. The work is guided by real gestures,
            clean compositions, and the atmosphere around the people you love.
          </p>
          <div className="about-meta" aria-label="Studio details">
            <span>Bangalore only</span>
            <span>Photos + films</span>
            <span>Family-first storytelling</span>
          </div>
          <a className="text-link" href="/about">
            About us +
          </a>
        </div>
        <div className="about-image secondary">
          <img
            src={wsMedia.portrait02}
            alt="Wedding ceremony detail"
            loading="lazy"
            decoding="async"
          />
        </div>
      </section>

      <section className="split-showcase" id="details" aria-label="Explore photography and films">
        <a className="split-panel split-images" href="/portfolio/weddings/images">
          <span>Stills</span>
          <small>Rituals, portraits, families</small>
        </a>
        <a className="split-panel split-films" href="/portfolio/weddings/films">
          <span>Films</span>
          <small>Sound, motion, atmosphere</small>
        </a>
      </section>

      <TestimonialCarousel testimonials={testimonials} />

      <ParallaxVideoBanner
        videoSrc="/wedding_film_for_homepage.mp4"
        poster={wsMedia.landscape01}
      />

      <section className="reviews-section" id="portfolio">
        <div className="video-card" aria-label="Wedding film preview">
          <span>01</span>
          <small>Portfolio field notes</small>
        </div>
        <div className="reviews-copy">
          <p className="section-label">Selected work</p>
          <h2>Designed for the way Bangalore weddings actually unfold.</h2>
          <p>
            Morning rituals, crowded mandaps, sudden rain, late-night dance
            floors, and grandparents who become the soul of the frame. We build
            galleries that hold the full temperature of the day.
          </p>
          <div className="portfolio-meta">
            <span>Editorial portraits</span>
            <span>Documentary candids</span>
            <span>Reception energy</span>
          </div>
          <a className="text-link" href="/portfolio">
            View the image direction +
          </a>
        </div>
        <img
          src={wsMedia.landscape04}
          alt="Wedding reception photography"
          loading="lazy"
          decoding="async"
        />
      </section>

      <ParallaxBookingBanner />

      <SiteFooter
        headline="Bangalore wedding photography and films for families who want the day remembered honestly, beautifully, and without the noise."
        tone="home"
      />
    </main>
  );
}
