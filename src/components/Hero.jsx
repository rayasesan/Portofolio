import AnimatedLink from './AnimatedLink';

export default function Hero() {
  return (
    <section id="top" className="hero-universe">
      <div className="hero-sky" aria-hidden="true">
        <span className="hero-star hero-star--one"></span>
        <span className="hero-star hero-star--two"></span>
        <span className="hero-star hero-star--three"></span>
        <span className="hero-orbit"></span>
      </div>

      <div className="hero-visual" aria-hidden="true">
        <div className="hero-portrait-glow"></div>
        <figure className="hero-portrait">
          <img src="/foto4.jpg" alt="" width="783" height="862" fetchPriority="high" />
        </figure>
      </div>

      <div className="page-shell hero-content">
        <div className="hero-eyebrow fade-up">
          <p>Machine Learning Engineer</p>
          <p>Depok / Indonesia</p>
        </div>

        <h1 className="hero-display" aria-label="Raya Sesan, Machine Learning Engineer">
          <span className="hero-display__top fade-up">Machine</span>
          <span className="hero-display__bottom fade-up">Engineer</span>
        </h1>

        <div className="hero-strap fade-up">
          <p>APPLIED AI / COMPUTER VISION / DATA SYSTEMS</p>
          <p>I build machine learning products that move beyond experiments and into useful, deployable systems.</p>
        </div>

        <div className="hero-bottom">
          <div className="hero-availability fade-up">
            <span aria-hidden="true"></span>
            <p>Open for ML, Data Science, and AI Engineering internships.</p>
          </div>

          <div className="hero-actions fade-up">
            <AnimatedLink href="#projects">View projects</AnimatedLink>
            <AnimatedLink href="/cv/raya-sesan-firdaus-cv.pdf" download="Raya-Sesan-Firdaus-CV.pdf" variant="ghost">
              Download CV
            </AnimatedLink>
          </div>

          <div className="hero-proof fade-up">
            <span>Distinction graduate</span>
            <p>Coding Camp 2026</p>
          </div>
        </div>

        <a className="hero-scroll" href="#skills"><span></span> Scroll to explore</a>
      </div>
    </section>
  );
}
