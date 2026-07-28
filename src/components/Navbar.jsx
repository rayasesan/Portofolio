import { useState, useEffect } from 'react';

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 80);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <>
      <nav
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
          isScrolled ? 'bg-r-dark/95' : 'bg-r-dark/85'
        } backdrop-blur-[20px]`}
      >
        <div className="max-w-[1100px] mx-auto px-5 h-14 flex items-center justify-between">
          <a href="#" className="text-white font-black text-sm tracking-[0.25em] uppercase">
            portofolio<span className="text-r-red">.</span>
          </a>
          <div className="hidden md:flex items-center gap-7">
            <a href="#skills" className="text-[10px] font-semibold tracking-[0.2em] uppercase text-r-silver hover:text-r-red transition-colors">
              Skills
            </a>
            <a href="#experience" className="text-[10px] font-semibold tracking-[0.2em] uppercase text-r-silver hover:text-r-red transition-colors">
              Experience
            </a>
            <a href="#projects" className="text-[10px] font-semibold tracking-[0.2em] uppercase text-r-silver hover:text-r-red transition-colors">
              Work
            </a>
            <a href="#contact" className="bg-r-red hover:bg-r-red-light text-black text-[9px] font-black tracking-[0.2em] uppercase px-5 py-2 transition-colors">
              Hire Me
            </a>
          </div>
          <button
            className="md:hidden text-white"
            aria-label="Open menu"
            onClick={() => setIsOpen(true)}
          >
            <span className="iconify" data-icon="lucide:menu" data-width="20"></span>
          </button>
        </div>
      </nav>

      {/* Mobile Menu */}
      <div
        className={`mob-menu fixed inset-0 z-[60] bg-black/98 flex flex-col ${
          isOpen ? 'open' : ''
        }`}
      >
        <div className="flex items-center justify-between px-5 h-14">
          <span className="text-white font-black text-sm tracking-[0.25em] uppercase">
            portofolio<span className="text-r-red">.</span>
          </span>
          <button
            className="text-white"
            aria-label="Close menu"
            onClick={() => setIsOpen(false)}
          >
            <span className="iconify" data-icon="lucide:x" data-width="20"></span>
          </button>
        </div>
        <div className="flex-1 flex flex-col justify-center px-8 gap-7">
          <a
            href="#skills"
            className="mob-link text-2xl font-black text-white uppercase tracking-tight hover:text-r-red transition-colors"
            onClick={() => setIsOpen(false)}
          >
            Skills
          </a>
          <a
            href="#experience"
            className="mob-link text-2xl font-black text-white uppercase tracking-tight hover:text-r-red transition-colors"
            onClick={() => setIsOpen(false)}
          >
            Experience
          </a>
          <a
            href="#projects"
            className="mob-link text-2xl font-black text-white uppercase tracking-tight hover:text-r-red transition-colors"
            onClick={() => setIsOpen(false)}
          >
            Work
          </a>
          <a
            href="#contact"
            className="mob-link inline-block bg-r-red text-black text-xs font-black tracking-[0.2em] uppercase px-7 py-3 mt-4 w-fit"
            onClick={() => setIsOpen(false)}
          >
            Hire Me
          </a>
        </div>
      </div>
    </>
  );
}
