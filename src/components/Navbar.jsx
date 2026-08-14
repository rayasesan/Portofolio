import { useEffect, useRef, useState } from 'react';

const navLinks = [
  { href: '#top', label: 'Home' },
  { href: '#skills', label: 'Expertise' },
  { href: '#experience', label: 'Experience' },
  { href: '#credentials', label: 'Credentials' },
  { href: '#projects', label: 'Projects' },
  { href: '#contact', label: 'Contact' },
];

const quickLinks = navLinks.slice(1, 5);

const socialLinks = [
  { href: 'mailto:rayasesan@gmail.com', label: 'Email' },
  { href: 'https://linkedin.com/in/rayasesann', label: 'LinkedIn', external: true },
  { href: 'https://github.com/rayasesan', label: 'GitHub', external: true },
];

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const menuButtonRef = useRef(null);
  const menuRef = useRef(null);
  const mobileMenuId = 'site-navigation';

  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 56);
    handleScroll();
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => {
    const desktopQuery = window.matchMedia('(min-width: 901px)');
    const closeOnDesktop = () => {
      if (desktopQuery.matches) {
        setIsOpen(false);
      }
    };

    closeOnDesktop();
    desktopQuery.addEventListener('change', closeOnDesktop);
    return () => desktopQuery.removeEventListener('change', closeOnDesktop);
  }, []);

  useEffect(() => {
    document.documentElement.classList.toggle('has-site-menu-open', isOpen);
    document.body.style.overflow = isOpen ? 'hidden' : '';

    if (!isOpen) {
      return () => {
        document.documentElement.classList.remove('has-site-menu-open');
        document.body.style.overflow = '';
      };
    }

    const handleKeyDown = (event) => {
      if (event.key === 'Escape') {
        setIsOpen(false);
        menuButtonRef.current?.focus();
        return;
      }

      if (event.key !== 'Tab') {
        return;
      }

      const menuItems = Array.from(
        menuRef.current?.querySelectorAll('a[href], button:not([disabled])') ?? [],
      );
      const focusableItems = [menuButtonRef.current, ...menuItems].filter(Boolean);
      const firstItem = focusableItems[0];
      const lastItem = focusableItems[focusableItems.length - 1];

      if (event.shiftKey && document.activeElement === firstItem) {
        event.preventDefault();
        lastItem?.focus();
      } else if (!event.shiftKey && document.activeElement === lastItem) {
        event.preventDefault();
        firstItem?.focus();
      }
    };

    window.addEventListener('keydown', handleKeyDown);

    return () => {
      document.documentElement.classList.remove('has-site-menu-open');
      document.body.style.overflow = '';
      window.removeEventListener('keydown', handleKeyDown);
    };
  }, [isOpen]);

  const closeMenu = () => setIsOpen(false);

  return (
    <>
      <nav className={`site-header fixed inset-x-0 top-0 z-[120] ${isScrolled ? 'is-scrolled' : ''} ${isOpen ? 'is-menu-open' : ''}`}>
        <div className="max-w-[1100px] mx-auto h-14 flex items-center justify-between">
          <a href="#top" className="site-wordmark" aria-label="Back to home" onClick={closeMenu}>
            Raya Sesan<span>.</span>
          </a>

          <div className="site-header-quicklinks" aria-label="Quick navigation">
            {quickLinks.map((link) => (
              <a key={link.href} href={link.href}>{link.label}</a>
            ))}
          </div>

          <a href="#contact" className="site-header-contact">
            Contact
          </a>

          <button
            ref={menuButtonRef}
            type="button"
            className={`site-header-button ${isOpen ? 'is-open' : ''}`}
            aria-label={isOpen ? 'Close menu' : 'Open menu'}
            aria-expanded={isOpen}
            aria-controls={mobileMenuId}
            onClick={() => setIsOpen((open) => !open)}
          >
            <span className="site-header-button__icon site-header-button__icon--open"></span>
            <span className="site-header-button__icon site-header-button__icon--close"></span>
          </button>
        </div>
      </nav>

      <div
        ref={menuRef}
        id={mobileMenuId}
        className={`site-menu ${isOpen ? 'is-open' : ''}`}
        aria-hidden={!isOpen}
      >
        <div className="site-menu__curtain site-menu__curtain--left" aria-hidden="true"></div>
        <div className="site-menu__curtain site-menu__curtain--right" aria-hidden="true"></div>

        <div className="site-menu__inner max-w-[1100px] mx-auto">
          <div className="site-menu__eyebrow">
            <p>Explore the portfolio</p>
            <p>AI / Data / Engineering</p>
          </div>

          <div className="site-menu__body">
            <ol className="site-menu__links">
              {navLinks.map((link, index) => (
                <li key={link.href} style={{ '--menu-index': index }}>
                  <a href={link.href} tabIndex={isOpen ? 0 : -1} onClick={closeMenu}>
                    <span>{String(index + 1).padStart(2, '0')}</span>
                    {link.label}
                  </a>
                </li>
              ))}
            </ol>

            <aside className="site-menu__aside">
              <p>Open for internship opportunities and collaborative AI projects.</p>
              <div>
                {socialLinks.map((link) => (
                  <a
                    key={link.href}
                    href={link.href}
                    target={link.external ? '_blank' : undefined}
                    rel={link.external ? 'noopener noreferrer' : undefined}
                    tabIndex={isOpen ? 0 : -1}
                  >
                    {link.label}
                  </a>
                ))}
              </div>
            </aside>
          </div>

          <div className="site-menu__footer">
            <p>Raya Sesan Firdaus</p>
            <p>Jakarta, Indonesia</p>
          </div>
        </div>
      </div>
    </>
  );
}
