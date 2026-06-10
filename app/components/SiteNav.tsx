const navLeft = [
  { label: "Home", href: "/" },
  { label: "About", href: "/about" },
  { label: "Details", href: "/details" },
];

const navRight = [
  { label: "Portfolio", href: "/portfolio" },
  { label: "Contact", href: "/#contact" },
  { label: "Book Us", href: "/book" },
];

export function SiteNav() {
  return (
    <nav className="main-menu" aria-label="Main navigation">
      <div className="menu-line" />
      <div className="menu-links">
        <div>
          {navLeft.map((item) => (
            <a href={item.href} key={item.label}>
              {item.label}
            </a>
          ))}
        </div>
        <a className="nav-brand" href="/" aria-label="Leading Lines Photography home">
          <img src="/logo-leading-lines.svg" alt="Leading Lines Photography" />
        </a>
        <div>
          {navRight.map((item) => (
            <a href={item.href} key={item.label}>
              {item.label}
            </a>
          ))}
        </div>
      </div>
      <div className="menu-line lower" />
    </nav>
  );
}
