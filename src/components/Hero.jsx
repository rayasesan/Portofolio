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
    event.currentTarget.style.setProperty('--hero-pointer-x', `${x * 26}px`);
    event.currentTarget.style.setProperty('--hero-pointer-y', `${y * 26}px`);
  };

  const resetPointer = (event) => {
    event.currentTarget.style.setProperty('--hero-pointer-x', '0px');
    event.currentTarget.style.setProperty('--hero-pointer-y', '0px');
  };

  return (
    <section
      id="top"
      className="hero-stage appart-hero relative flex min-h-screen items-center overflow-hidden"
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

      <div className="appart-hero-inner relative z-10 mx-auto w-full max-w-[1100px] px-5">
        <div className="hero-topline fade-up">
          <p>AI Engineer / Data Scientist</p>
          <p>Jakarta, Indonesia</p>
        </div>

        <div className="hero-editorial-copy">
          <h1 className="appart-hero-title">
            <span className="fade-up" style={{ animationDelay: '0.08s' }}>Raya builds</span>
            <span className="fade-up" style={{ animationDelay: '0.18s' }}>intelligent systems.</span>
          </h1>

          <div className="hero-intro-row">
            <div className="hero-round-portrait scale-in" style={{ animationDelay: '0.28s' }}>
              <img src="/foto4.jpg" alt="Raya Sesan Firdaus" />
            </div>

            <div className="hero-intro-copy fade-up" style={{ animationDelay: '0.34s' }}>
              <p>
                I turn raw data into machine-learning products, computer-vision systems,
                and useful decisions, built from model to deployment.
              </p>
              <div className="availability-note">
                <span aria-hidden="true"></span>
                Available for ML, Data Science, and AI Engineering internships.
              </div>
            </div>

            <div className="hero-actions fade-up" style={{ animationDelay: '0.42s' }}>
              <AnimatedLink href="#projects">Selected work</AnimatedLink>
              <AnimatedLink href="/cv/raya-sesan-firdaus-cv.pdf" download="Raya-Sesan-Firdaus-CV.pdf" variant="light">
                Download CV
              </AnimatedLink>
            </div>
          </div>
        </div>

        <div className="hero-footerline fade-up" style={{ animationDelay: '0.5s' }}>
          <p>Your ideas, made intelligent.</p>
          <div>
            {socialLinks.map((link) => (
              <a
                key={link.href}
                href={link.href}
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
