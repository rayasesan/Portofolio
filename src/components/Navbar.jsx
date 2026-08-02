import { useEffect, useRef, useState } from 'react';

const links = [
  { href: '#top', label: 'Home' },
  { href: '#skills', label: 'About' },
  { href: '#projects', label: 'Work' },
  { href: '#contact', label: 'Contact' },
];

const menuLinks = [
  ...links.slice(0, 2),
  { href: '#experience', label: 'Experience' },
  { href: '#credentials', label: 'Credentials' },
  ...links.slice(2),
];

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [active, setActive] = useState('top');
  const buttonRef = useRef(null);
  const menuRef = useRef(null);

  useEffect(() => {
    const sync = () => {
      const guide = window.scrollY + window.innerHeight * 0.45;
      const current = [...menuLinks].reverse().find(({ href }) => document.querySelector(href)?.offsetTop <= guide);
      setActive(current?.href.slice(1) ?? 'top');
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
    document.body.style.overflow = isOpen ? 'hidden' : '';
    if (!isOpen) return undefined;
    const onKeyDown = (event) => {
      if (event.key === 'Escape') {
        setIsOpen(false);
        buttonRef.current?.focus();
      }
      if (event.key !== 'Tab') return;
      const focusable = [buttonRef.current, ...(menuRef.current?.querySelectorAll('a') ?? [])];
      if (event.shiftKey && document.activeElement === focusable[0]) {
        event.preventDefault();
        focusable.at(-1)?.focus();
      } else if (!event.shiftKey && document.activeElement === focusable.at(-1)) {
        event.preventDefault();
        focusable[0]?.focus();
      }
    };
    window.addEventListener('keydown', onKeyDown);
    return () => {
      document.body.style.overflow = '';
      window.removeEventListener('keydown', onKeyDown);
    };
  }, [isOpen]);

  const close = () => setIsOpen(false);

  return (
    <>
      <nav className={`site-header ${isOpen ? 'is-open' : ''}`}>
        <div className="site-header__inner">
          <a className="site-mark" href="#top" aria-label="Raya Sesan — back to home" onClick={close}>Raya Sesan</a>
          <div className="site-header__links" aria-label="Primary navigation">
            {links.map((link, index) => (
              <span key={link.href}>
                <a href={link.href} className={active === link.href.slice(1) ? 'is-active' : ''}>{link.label}</a>
                {index < links.length - 1 && <i aria-hidden="true">•</i>}
              </span>
            ))}
          </div>
          <p className="site-header__locale"><strong>EN</strong> ID</p>
          <button ref={buttonRef} className="site-menu-button" type="button" aria-label={isOpen ? 'Close menu' : 'Open menu'} aria-expanded={isOpen} aria-controls="site-menu" onClick={() => setIsOpen((value) => !value)}>
            <span></span><span></span>
          </button>
        </div>
      </nav>

      <a className="cv-rail" href="/cv/raya-sesan-firdaus-cv.pdf" download="Raya-Sesan-Firdaus-CV.pdf">
        <strong>CV.</strong><span>Download</span>
      </a>
      <a className="floating-contact" href="mailto:rayasesan@gmail.com" aria-label="Email Raya">@</a>

      <div ref={menuRef} id="site-menu" className={`site-menu ${isOpen ? 'is-open' : ''}`} aria-hidden={!isOpen}>
        <div className="site-menu__inner">
          <p>Navigation / Raya Sesan</p>
          <ol>
            {menuLinks.map((link, index) => (
              <li key={link.href}><span>{index + 1}</span><a href={link.href} tabIndex={isOpen ? 0 : -1} onClick={close}>{link.label}</a></li>
            ))}
          </ol>
          <div><p>Machine Learning Engineer</p><p>Depok / Indonesia</p></div>
        </div>
      </div>
    </>
  );
}
