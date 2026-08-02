const footerLinks = [
  { label: 'Email', href: 'mailto:rayasesan@gmail.com' },
  { label: 'LinkedIn', href: 'https://linkedin.com/in/rayasesann' },
  { label: 'GitHub', href: 'https://github.com/rayasesan' },
];

export default function Footer() {
  return (
    <footer className="site-footer">
      <div className="max-w-[1100px] mx-auto">
        <div className="site-footer-main">
          <a href="#top" className="site-footer-name">Raya Sesan<span>.</span></a>
          <p>Machine Learning Engineer building practical systems from experimentation to deployment.</p>
          <nav aria-label="Social links">
            {footerLinks.map((link) => (
              <a
                key={link.href}
                href={link.href}
                target={link.href.startsWith('http') ? '_blank' : undefined}
                rel={link.href.startsWith('http') ? 'noopener noreferrer' : undefined}
              >
                {link.label}
              </a>
            ))}
          </nav>
        </div>
        <div className="site-footer-meta">
          <p>&copy; {new Date().getFullYear()} Raya Sesan Firdaus</p>
          <p>Depok, Indonesia</p>
        </div>
      </div>
    </footer>
  );
}
