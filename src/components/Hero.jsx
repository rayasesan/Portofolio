import AnimatedLink from './AnimatedLink';

export default function Hero() {
  return (
    <section id="top" className="min-h-screen flex items-center relative overflow-hidden pt-14">
      <div className="max-w-[1100px] mx-auto px-5 w-full py-10 lg:py-0">
        <div className="grid grid-cols-1 md:grid-cols-[minmax(0,1fr)_minmax(260px,360px)] gap-10 md:gap-12 lg:gap-16 items-center">
          <div className="order-2">
            <div className="fade-up" style={{ animationDelay: '0.1s' }}>
              <p className="text-r-red text-[11px] font-semibold tracking-[0.16em] uppercase mb-5">
                Machine Learning · Data Science · AI Systems
              </p>
            </div>
            <div className="fade-up" style={{ animationDelay: '0.25s' }}>
              <h1 className="hero-title text-white leading-[0.86] text-[clamp(58px,9vw,104px)] mb-7">
                Raya<br /><span>Sesan.</span>
              </h1>
            </div>
            <div className="fade-up" style={{ animationDelay: '0.45s' }}>
              <p className="text-r-light text-[15px] leading-[1.75] max-w-xl mb-7">
                Informatics Engineering student focused on machine learning, data science, computer vision, and AI-powered applications. Experienced in end-to-end model development, data analysis, backend API integration, and model deployment through collaborative, academic, and personal projects.
              </p>
              <p className="availability-note inline-flex items-center gap-2 text-r-light text-[12px] font-medium">
                <span aria-hidden="true"></span>
                Open to ML, Data Science, and AI Engineering internships.
              </p>
            </div>
            <div className="fade-up flex flex-wrap gap-3 mt-5 mb-8" style={{ animationDelay: '0.6s' }}>
              <AnimatedLink
                href="#contact"
                variant="red"
              >
                Start a conversation
              </AnimatedLink>
              <AnimatedLink
                href="#projects"
                variant="light"
              >
                Selected work
              </AnimatedLink>
              <AnimatedLink
                href="/cv/raya-sesan-firdaus-cv.pdf"
                download="Raya-Sesan-Firdaus-CV.pdf"
                variant="light"
              >
                Download résumé
              </AnimatedLink>
            </div>
            <div className="fade-up flex items-center gap-5" style={{ animationDelay: '0.75s' }}>
              <a href="mailto:rayasesan@gmail.com" className="text-r-silver hover:text-r-red transition-all hover:scale-125" aria-label="Email">
                <span className="iconify" data-icon="lucide:mail" data-width="16"></span>
              </a>
              <a href="https://linkedin.com/in/rayasesann" target="_blank" rel="noopener noreferrer" className="text-r-silver hover:text-r-red transition-all hover:scale-125" aria-label="LinkedIn">
                <span className="iconify" data-icon="lucide:linkedin" data-width="16"></span>
              </a>
              <a href="https://github.com/rayasesan" target="_blank" rel="noopener noreferrer" className="text-r-silver hover:text-r-red transition-all hover:scale-125" aria-label="GitHub">
                <span className="iconify" data-icon="lucide:github" data-width="16"></span>
              </a>
            </div>
          </div>
          <div className="order-1 flex justify-center md:justify-start scale-in" style={{ animationDelay: '0.2s' }}>
            <div className="photo-wrap hero-photo-clean w-[280px] sm:w-[320px] lg:w-full max-w-[360px]">
              <img
                src="/foto4.jpg"
                alt="Raya Sesan Firdaus"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
