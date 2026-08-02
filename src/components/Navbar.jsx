import { useEffect, useRef, useState } from 'react';

const primaryLinks = [
  { href: '#top', label: 'Home' },
  { href: '#skills', label: 'About' },
  { href: '#projects', label: 'Work' },
  { href: '#contact', label: 'Contact' },
];

const menuLinks = [
  ...primaryLinks.slice(0, 2),
  { href: '#experience', label: 'Experience' },
  { href: '#credentials', label: 'Credentials' },
  ...primaryLinks.slice(2),
];

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const [activeSection, setActiveSection] = useState('top');
  const buttonRef = useRef(null);
  const menuRef = useRef(null);

  useEffect(() => {
    const sync = () => {
      setIsScrolled(window.scrollY > 30);
      const guide = window.scrollY + window.innerHeight * 0.3;
      const current = [...menuLinks]
        .reverse()
        .find(({ href }) => document.querySelector(href)?.offsetTop <= guide);
      setActiveSection(current?.href.slice(1) ?? 'top');
    };

    sync();
    window.addEventListener('scroll', sync, { passive: true });
    window.addEventListener('resize', sync);
    return () => {
      window.removeEventListener('scroll', sync);
      window.removeEventListener('resize', sync);
    };
  }, []);

  useEffect(() => {
    document.documentElement.classList.toggle('has-site-menu-open', isOpen);
    document.body.style.overflow = isOpen ? 'hidden' : '';

    if (!isOpen) return undefined;

    const onKeyDown = (event) => {
      if (event.key === 'Escape') {
        setIsOpen(false);
        buttonRef.current?.focus();
      }

      if (event.key !== 'Tab') return;
      const items = [buttonRef.current, ...(menuRef.current?.querySelectorAll('a') ?? [])];
      const first = items[0];
      const last = items[items.length - 1];
      if (event.shiftKey && document.activeElement === first) {
        event.preventDefault();
        last?.focus();
      } else if (!event.shiftKey && document.activeElement === last) {
        event.preventDefault();
        first?.focus();
      }
    };

    window.addEventListener('keydown', onKeyDown);
    return () => {
      document.documentElement.classList.remove('has-site-menu-open');
      document.body.style.overflow = '';
      window.removeEventListener('keydown', onKeyDown);
    };
  }, [isOpen]);

  const closeMenu = () => setIsOpen(false);

  return (
    <>
      <nav className={`site-header ${isScrolled ? 'is-scrolled' : ''} ${isOpen ? 'is-open' : ''}`}>
        <div className="page-shell site-header__inner">
          <a href="#top" className="site-wordmark" aria-label="Back to home" onClick={closeMenu}>
            RAYA <span>/</span> SESAN
          </a>

          <div className="site-header__links" aria-label="Primary navigation">
            {primaryLinks.map((link) => (
              <a
                key={link.href}
                href={link.href}
                className={activeSection === link.href.slice(1) ? 'is-active' : ''}
                aria-current={activeSection === link.href.slice(1) ? 'location' : undefined}
              >
                {link.label}
              </a>
            ))}
          </div>

          <p className="site-header__status"><span></span> Available 2026</p>

          <button
            ref={buttonRef}
            type="button"
            className="site-menu-button"
            aria-expanded={isOpen}
            aria-controls="site-menu"
            aria-label={isOpen ? 'Close menu' : 'Open menu'}
            onClick={() => setIsOpen((value) => !value)}
          >
            <span></span><span></span>
          </button>
        </div>
      </nav>

      <div ref={menuRef} id="site-menu" className={`site-menu ${isOpen ? 'is-open' : ''}`} aria-hidden={!isOpen}>
        <div className="page-shell site-menu__inner">
          <p className="site-menu__label">Navigation / Raya Sesan</p>
          <ol className="site-menu__links">
            {menuLinks.map((link, index) => (
              <li key={link.href}>
                <span>{index + 1}</span>
                <a href={link.href} tabIndex={isOpen ? 0 : -1} onClick={closeMenu}>{link.label}</a>
              </li>
            ))}
          </ol>
          <div className="site-menu__meta">
            <p>Machine Learning Engineer</p>
            <p>Depok, Indonesia</p>
          </div>
        </div>
      </div>
    </>
  );
}
