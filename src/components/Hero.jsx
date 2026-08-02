import AnimatedLink from './AnimatedLink';

export default function Hero() {
  return (
    <section id="top" className="hero-sequence">
      <div className="hero-pin">
        <div className="hero-availability">
          <span></span><p>Open to opportunities<br /><a href="#contact">Let's work together</a></p>
        </div>

        <h1 className="hero-display" aria-label="Raya Sesan — Informatics Engineering Student">
          <span className="hero-display__top">Informatics</span>
          <span className="hero-display__bottom">Student</span>
        </h1>

        <div className="hero-strap">
          <p>Data Science / Machine Learning / AI Applications</p>
          <p>An Informatics Engineering student learning by turning data and ideas into working projects.</p>
        </div>

        <div className="hero-cta">
          <AnimatedLink href="#projects">View projects</AnimatedLink>
          <AnimatedLink href="/cv/raya-sesan-firdaus-cv.pdf" download="Raya-Sesan-Firdaus-CV.pdf" variant="ghost">Download CV</AnimatedLink>
        </div>

        <div className="hero-featured">
          <p>Selected toolkit</p>
          <div><span>Python</span><span>SQL</span><span>Scikit-learn</span></div>
        </div>
        <a className="hero-scroll" href="#skills">Scroll</a>
      </div>
    </section>
  );
}
