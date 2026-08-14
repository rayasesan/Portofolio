import AnimatedLink from './AnimatedLink';

const socialLinks = [
  { label: 'Email', href: 'mailto:rayasesan@gmail.com' },
  { label: 'LinkedIn', href: 'https://linkedin.com/in/rayasesann', external: true },
  { label: 'GitHub', href: 'https://github.com/rayasesan', external: true },
];

export default function Hero() {
  const handlePointerMove = (event) => {
    const bounds = event.currentTarget.getBoundingClientRect();
    const x = (event.clientX - bounds.left) / bounds.width - 0.5;
    const y = (event.clientY - bounds.top) / bounds.height - 0.5;
    event.currentTarget.style.setProperty('--hero-pointer-x', `${x * 24}px`);
    event.currentTarget.style.setProperty('--hero-pointer-y', `${y * 24}px`);
  };

  const resetPointer = (event) => {
    event.currentTarget.style.setProperty('--hero-pointer-x', '0px');
    event.currentTarget.style.setProperty('--hero-pointer-y', '0px');
  };

  return (
    <section
      id="top"
      className="hero-stage"
      onPointerMove={handlePointerMove}
      onPointerLeave={resetPointer}
    >
      <div className="hero-geometry" aria-hidden="true">
        {[0, 1, 2, 3, 4, 5].map((index) => (
          <span key={index} style={{ '--orbit-index': index }}></span>
        ))}
        <i className="hero-axis hero-axis--horizontal"></i>
        <i className="hero-axis hero-axis--vertical"></i>
      </div>

      <div className="hero-inner">
        <div className="hero-topline fade-up">
          <p>Informatics Engineering Student</p>
          <p>Jakarta, Indonesia</p>
        </div>

        <div className="hero-editorial-copy">
          <p className="hero-eyebrow fade-up" style={{ animationDelay: '0.05s' }}>
            Data Science / Applied AI / Business Intelligence
          </p>
          <h1 className="hero-title fade-up" style={{ animationDelay: '0.12s' }}>
            Raya Sesan
          </h1>

          <div className="hero-intro-row">
            <figure className="hero-round-portrait scale-in" style={{ animationDelay: '0.22s' }}>
              <img src="/foto4.jpg" alt="Raya Sesan Firdaus" />
            </figure>

            <div className="hero-intro-copy fade-up" style={{ animationDelay: '0.28s' }}>
              <p>
                I turn datasets, APIs, and product ideas into working models,
                dashboards, and useful application prototypes.
              </p>
              <div className="availability-note">
                <span aria-hidden="true"></span>
                Open to internships, collaborations, and practical data projects.
              </div>
            </div>

            <div className="hero-actions fade-up" style={{ animationDelay: '0.36s' }}>
              <AnimatedLink href="#projects">Selected work</AnimatedLink>
              <AnimatedLink href="/cv/raya-sesan-firdaus-cv.pdf" download="Raya-Sesan-Firdaus-CV.pdf" variant="light">
                Download CV
              </AnimatedLink>
            </div>
          </div>
        </div>

        <div className="hero-footerline fade-up" style={{ animationDelay: '0.44s' }}>
          <p>Useful data work, made readable.</p>
          <div>
            {socialLinks.map((link) => (
              <a
                href={link.href}
                key={link.href}
                target={link.external ? '_blank' : undefined}
                rel={link.external ? 'noopener noreferrer' : undefined}
              >
                {link.label}
              </a>
            ))}
          </div>
          <a href="#skills" className="hero-scroll-link">Scroll to explore</a>
        </div>
      </div>
    </section>
  );
}
