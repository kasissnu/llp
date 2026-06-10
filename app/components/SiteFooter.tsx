type SiteFooterProps = {
  headline: string;
  tone?: "home" | "about" | "details" | "portfolio" | "collection" | "album" | "book";
};

const socialLinks = {
  instagram: "https://www.instagram.com/leadinglinesphotography1",
  youtube: "https://youtube.com/@leadinglinesphotography6666?feature=shared",
  facebook: "https://www.facebook.com/share/1aj4JaWHCg/",
};

export function SiteFooter({ headline, tone = "home" }: SiteFooterProps) {
  return (
    <footer className={`footer footer-${tone}`} id="contact">
      <div className="footer-grid">
        <section className="footer-brand">
          <a className="footer-logo" href="/" aria-label="Leading Lines Photography home">
            <img src="/logo-leading-lines-light.svg" alt="Leading Lines Photography" />
          </a>
          <h3>
            <i>{headline}</i>
          </h3>
          <div className="footer-socials" aria-label="Social links">
            <a href={socialLinks.instagram} aria-label="Leading Lines Photography on Instagram">
              <svg aria-hidden="true" viewBox="0 0 24 24">
                <rect x="3" y="3" width="18" height="18" rx="5" />
                <circle cx="12" cy="12" r="4" />
                <circle cx="17.5" cy="6.5" r="1" />
              </svg>
            </a>
            <a href={socialLinks.youtube} aria-label="Leading Lines Photography on YouTube">
              <svg aria-hidden="true" viewBox="0 0 24 24">
                <path d="M4 8.5c0-1.7 1.3-3 3-3h10c1.7 0 3 1.3 3 3v7c0 1.7-1.3 3-3 3H7c-1.7 0-3-1.3-3-3z" />
                <path d="M10 9l5 3-5 3z" />
              </svg>
            </a>
            <a href={socialLinks.facebook} aria-label="Leading Lines Photography on Facebook">
              <svg aria-hidden="true" viewBox="0 0 24 24">
                <path d="M14 8h2V4h-3c-3 0-5 2-5 5v3H6v4h2v4h4v-4h3l1-4h-4V9c0-.6.4-1 1-1z" />
              </svg>
            </a>
          </div>
        </section>
        <section className="footer-links">
          <h4>Links</h4>
          <nav aria-label="Footer navigation">
            <a href="/">Home</a>
            <a href="/about">About</a>
            <a href="/details">Details</a>
            <a href="/portfolio">Portfolio</a>
            <a href="/#contact">Contact Us</a>
            <a href="/book">Book</a>
          </nav>
        </section>
        <section className="footer-contact" aria-label="Contact information">
          <h4>Contact</h4>
          <div className="footer-contact-row">
            <span aria-hidden="true">☎</span>
            <p>
              <a href="tel:+917604025885">+91-7604025885</a>
              <a href="tel:+917349276305">+91-7349276305</a>
            </p>
          </div>
          <div className="footer-contact-row">
            <span aria-hidden="true">✉</span>
            <p>
              <a href="mailto:Info@llpstudio.com">Info@llpstudio.com</a>
            </p>
          </div>
          <div className="footer-contact-row">
            <span aria-hidden="true">⌖</span>
            <p>
              <span>Leading Lines Photography, Unishire Victory, 2nd Main Rd, Guttahalli,</span>
              <span>Bengaluru, Karnataka 560003</span>
            </p>
          </div>
        </section>
      </div>
      <div className="footer-credits">
        <p>Copyright © 2026 Leading Lines Photography | Privacy Policy</p>
        <p>Website by Leading Lines Photography</p>
      </div>
    </footer>
  );
}
