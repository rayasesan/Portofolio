import { useEffect, useRef, useState } from 'react';
import AnimatedLink from './AnimatedLink';

const mainLinks = [
  { href: '#top', label: 'Home' },
  { href: '#skills', label: 'Skills' },
  { href: '#experience', label: 'Experience' },
  { href: '#credentials', label: 'Credentials' },
  { href: '#projects', label: 'Projects' },
];

const navLinks = [
  ...mainLinks,
  { href: '#contact', label: 'Contact' },
];

const mobileLinks = [
  ...navLinks,
];

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const menuButtonRef = useRef(null);
  const mobileMenuId = 'mobile-navigation';

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 80);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => {
    document.body.style.overflow = isOpen ? 'hidden' : '';

    const handleKeyDown = (event) => {
      if (event.key === 'Escape') {
        setIsOpen(false);
        menuButtonRef.current?.focus();
      }
    };

    if (isOpen) {
      window.addEventListener('keydown', handleKeyDown);
    }

    return () => {
      document.body.style.overflow = '';
      window.removeEventListener('keydown', handleKeyDown);
    };
  }, [isOpen]);

  const closeMenu = () => {
    setIsOpen(false);
    menuButtonRef.current?.focus();
  };

  return (
    <>
      <nav
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
          isScrolled ? 'bg-r-dark/95' : 'bg-r-dark/85'
        }`}
      >
        <div className="max-w-[1100px] mx-auto px-5 h-14 flex items-center justify-between">
          <a
            href="#top"
            className="group text-white font-black text-sm tracking-[0.25em] uppercase transition-colors hover:text-r-red"
            aria-label="Back to home"
          >
            Raya Sesan<span className="text-r-red transition-colors group-hover:text-r-red-light">.</span>
          </a>
          <div className="hidden md:flex items-center gap-4 lg:gap-7">
            {mainLinks.map((link) => (
              <a key={link.href} href={link.href} className="text-[10px] font-semibold tracking-[0.2em] uppercase text-r-silver hover:text-r-red transition-colors">
                {link.label}
              </a>
            ))}
            <AnimatedLink href="#contact" compact>
              Contact Me
            </AnimatedLink>
          </div>
          <button
            ref={menuButtonRef}
            type="button"
            className="md:hidden text-white min-w-11 min-h-11 inline-flex items-center justify-center"
            aria-label="Open menu"
            aria-expanded={isOpen}
            aria-controls={mobileMenuId}
            onClick={() => setIsOpen(true)}
          >
            <span className="iconify" data-icon="lucide:menu" data-width="20"></span>
          </button>
        </div>
      </nav>

      {/* Mobile Menu */}
      <div
        id={mobileMenuId}
        aria-hidden={!isOpen}
        className={`mob-menu fixed inset-0 z-[60] bg-black/98 flex flex-col ${
          isOpen ? 'open' : ''
        }`}
      >
        <div className="flex items-center justify-between px-5 h-14">
          <a
            href="#top"
            tabIndex={isOpen ? 0 : -1}
            className="text-white font-black text-sm tracking-[0.25em] uppercase"
            onClick={closeMenu}
          >
            Raya Sesan<span className="text-r-red">.</span>
          </a>
          <button
            type="button"
            className="text-white min-w-11 min-h-11 inline-flex items-center justify-center"
            aria-label="Close menu"
            tabIndex={isOpen ? 0 : -1}
            onClick={closeMenu}
          >
            <span className="iconify" data-icon="lucide:x" data-width="20"></span>
          </button>
        </div>
        <div className="flex-1 flex flex-col justify-center px-8 gap-7">
          {mobileLinks.map((link) => (
            <a
              key={link.href}
              href={link.href}
              tabIndex={isOpen ? 0 : -1}
              className={`mob-link ${link.href === '#contact'
                ? 'inline-block bg-r-red text-black text-xs font-black tracking-[0.18em] uppercase px-7 py-3 mt-4 w-fit'
                : 'text-2xl font-black text-white uppercase tracking-tight hover:text-r-red transition-colors'
              }`}
              onClick={closeMenu}
            >
              {link.href === '#contact' ? 'Contact Me' : link.label}
            </a>
          ))}
        </div>
      </div>
    </>
  );
}
