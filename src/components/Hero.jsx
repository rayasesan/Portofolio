import { useEffect, useRef } from 'react';
import AnimatedLink from './AnimatedLink';

export default function Hero() {
  const sectionRef = useRef(null);

  useEffect(() => {
    const section = sectionRef.current;
    if (!section) return undefined;
    let frame = 0;
    const sync = () => {
      frame = 0;
      const rect = section.getBoundingClientRect();
      const distance = Math.max(section.offsetHeight - window.innerHeight, 1);
      const progress = Math.min(Math.max(-rect.top / distance, 0), 1);
      section.style.setProperty('--hero-scroll', progress.toFixed(4));
    };
    const requestSync = () => { if (!frame) frame = requestAnimationFrame(sync); };
    sync();
    window.addEventListener('scroll', requestSync, { passive: true });
    window.addEventListener('resize', requestSync);
    return () => {
      if (frame) cancelAnimationFrame(frame);
      window.removeEventListener('scroll', requestSync);
      window.removeEventListener('resize', requestSync);
    };
  }, []);

  return (
    <section ref={sectionRef} id="top" className="hero-sequence">
      <div className="hero-pin">
        <div className="hero-availability">
          <span></span><p>Available 2026<br /><a href="#contact">Let's work together</a></p>
        </div>

        <h1 className="hero-display" aria-label="Raya Sesan — Machine Learning Engineer">
          <span className="hero-display__top">Machine</span>
          <span className="hero-display__bottom">Engineer</span>
        </h1>

        <div className="hero-strap">
          <p>Applied AI / Computer Vision / Data Systems</p>
          <p>Building practical machine learning products from experimentation to deployment.</p>
        </div>

        <div className="hero-cta">
          <AnimatedLink href="#projects">View projects</AnimatedLink>
          <AnimatedLink href="/cv/raya-sesan-firdaus-cv.pdf" download="Raya-Sesan-Firdaus-CV.pdf" variant="ghost">Download CV</AnimatedLink>
        </div>

        <div className="hero-featured">
          <p>Selected toolkit</p>
          <div><span>Python</span><span>TensorFlow</span><span>FastAPI</span></div>
        </div>
        <a className="hero-scroll" href="#skills">Scroll</a>
      </div>
    </section>
  );
}
