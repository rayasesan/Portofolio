import AnimatedLink from './AnimatedLink';

const selectedToolkit = ['Python', 'TensorFlow', 'Scikit-learn', 'FastAPI'];

export default function Hero() {
  return (
    <section id="top" className="hero-stage">
      <div className="hero-grid max-w-[1100px] mx-auto">
        <figure className="hero-portrait-card scale-in">
          <div className="hero-portrait-frame">
            <img
              src="/foto4.jpg"
              alt="Portrait of Raya Sesan Firdaus"
              width="783"
              height="862"
              fetchPriority="high"
            />
          </div>
          <figcaption>
            <span>Raya Sesan Firdaus</span>
            <span>Depok, Indonesia</span>
          </figcaption>
        </figure>

        <div className="hero-main">
          <p className="hero-role fade-up">Machine Learning Engineer</p>
          <h1 className="hero-title fade-up" style={{ animationDelay: '0.08s' }}>
            Raya builds <em>machine learning systems</em> beyond the notebook.
          </h1>
          <p className="hero-summary fade-up" style={{ animationDelay: '0.16s' }}>
            I develop practical machine learning applications, computer vision systems,
            and data-driven solutions from experimentation to deployment.
          </p>
          <div className="hero-actions fade-up" style={{ animationDelay: '0.22s' }}>
            <AnimatedLink href="#projects">View Projects</AnimatedLink>
            <AnimatedLink
              href="/cv/raya-sesan-firdaus-cv.pdf"
              download="Raya-Sesan-Firdaus-CV.pdf"
              variant="light"
            >
              Download CV
            </AnimatedLink>
          </div>
          <p className="hero-credential fade-up" style={{ animationDelay: '0.28s' }}>
            <span aria-hidden="true">01</span>
            Coding Camp 2026 Distinction Graduate
          </p>
        </div>

        <aside
          className="hero-technical fade-up"
          style={{ animationDelay: '0.2s' }}
          aria-label="Professional details"
        >
          <div className="hero-availability">
            <span aria-hidden="true"></span>
            <p>Currently open to Machine Learning, Data Science, and AI Engineering internship opportunities.</p>
          </div>

          <dl className="hero-facts">
            <div>
              <dt>Based in</dt>
              <dd>Depok, Indonesia</dd>
            </div>
            <div>
              <dt>Focus</dt>
              <dd>ML systems and applied AI</dd>
            </div>
          </dl>

          <div className="hero-toolkit">
            <p>Selected toolkit</p>
            <ul>
              {selectedToolkit.map((tool) => <li key={tool}>{tool}</li>)}
            </ul>
          </div>
        </aside>
      </div>
    </section>
  );
}
