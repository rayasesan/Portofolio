import AnimatedLink from './AnimatedLink';

export default function Hero() {
  return (
    <section id="top" className="min-h-screen flex items-center relative overflow-hidden pt-14">
      <div className="max-w-[1100px] mx-auto px-5 w-full py-10 lg:py-0">
        <div className="grid grid-cols-1 lg:grid-cols-[1fr_330px] gap-8 lg:gap-14 items-center">
          <div className="order-2 lg:order-1">
            <div className="fade-up" style={{ animationDelay: '0.1s' }}>
              <p className="text-r-red text-[10px] font-bold tracking-[0.25em] uppercase mb-4">
                Informatics Engineering - Gunadarma University
              </p>
            </div>
            <div className="fade-up" style={{ animationDelay: '0.25s' }}>
              <h1 className="text-white font-black leading-[0.88] tracking-tight text-[clamp(42px,8vw,84px)] uppercase mb-5">
                Raya<br />Sesan<span className="cursor-blink text-r-red">_</span>
              </h1>
            </div>
            <div className="fade-up" style={{ animationDelay: '0.45s' }}>
              <div className="red-bar mb-5"></div>
              <p className="text-r-light text-sm leading-relaxed max-w-md mb-7">
                Informatics Engineering student focused on machine learning, data science, computer vision, and AI-powered applications. Experienced in end-to-end model development, data analysis, backend API integration, and model deployment through collaborative, academic, and personal projects.
              </p>
              <p className="inline-flex border border-r-red/30 bg-r-red/10 text-r-red text-[10px] font-bold tracking-[0.12em] uppercase px-3 py-1.5 rounded">
                Open to Machine Learning, Data Science, and AI Engineering internship opportunities.
              </p>
            </div>
            <div className="fade-up flex flex-wrap gap-3 mt-5 mb-8" style={{ animationDelay: '0.6s' }}>
              <AnimatedLink
                href="#contact"
                variant="red"
              >
                Let's Talk
              </AnimatedLink>
              <AnimatedLink
                href="#projects"
                variant="light"
              >
                See Projects
              </AnimatedLink>
              <AnimatedLink
                href="/cv/raya-sesan-firdaus-cv.pdf"
                download="Raya-Sesan-Firdaus-CV.pdf"
                variant="light"
              >
                Download CV
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
          <div className="order-1 lg:order-2 flex justify-center lg:justify-end scale-in" style={{ animationDelay: '0.2s' }}>
            <div className="photo-wrap hero-photo-clean w-[250px] sm:w-[290px] lg:w-full max-w-[320px]">
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
