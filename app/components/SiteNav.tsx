const navLeft = [
  { label: "Home", href: "/" },
  { label: "About", href: "/about" },
  { label: "Details", href: "/details" },
];

const navRight = [
  { label: "Portfolio", href: "/portfolio" },
  { label: "Contact", href: "#contact" },
  { label: "Book Us", href: "/book" },
];

const socialLinks = {
  instagram: "https://www.instagram.com/leadinglinesphotography1",
  youtube: "https://youtube.com/@leadinglinesphotography6666?feature=shared",
};

export function SiteNav() {
  return (
    <nav className="main-menu" aria-label="Main navigation">
      <div className="menu-line" />
      <div className="menu-links">
        <a className="nav-brand" href="/" aria-label="Leading Lines Photography home">
          <img src="/logo-leading-lines.png" alt="Leading Lines Photography" />
        </a>
        <div className="nav-links nav-links-left" aria-label="Primary page links">
          {navLeft.map((item) => (
            <a href={item.href} key={item.label}>
              {item.label}
            </a>
          ))}
        </div>
        <a className="nav-title" href="/" aria-label="Leading Lines Photography home">
          <span>Leading Lines</span>
          <span>Photography</span>
        </a>
        <div className="nav-links nav-links-right" aria-label="Secondary page links">
          {navRight.map((item) => (
            <a href={item.href} key={item.label}>
              {item.label}
            </a>
          ))}
        </div>
        <div className="nav-socials" aria-label="Social links">
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
        </div>
      </div>
      <div className="menu-line lower" />
    </nav>
  );
}
