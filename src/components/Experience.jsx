import { useEffect, useRef } from 'react';

const experiences = [
  {
    date: 'Feb 2026 - Jul 2026',
    title: 'AI Engineer Graduate with Distinction',
    subtitle: 'Coding Camp 2026 powered by DBS Foundation x Dicoding',
    desc: 'Completed 934 hours of structured learning in Python, machine learning, deep learning, Generative AI, Git, professional development, and an end-to-end capstone project. Contributed as an AI Engineer to Nutrify, an AI-powered nutrition platform combining computer vision, FastAPI model serving, and a Generative AI nutrition coach.',
    tags: ['AI Engineering', 'TensorFlow', 'Computer Vision', 'Generative AI', 'FastAPI', 'Distinction'],
  },
  {
    date: 'Sep 2025 - Jan 2026',
    title: 'Machine Learning Cohort',
    subtitle: 'Asah - Dicoding x Accenture',
    desc: 'Developed end-to-end machine learning projects covering data cleaning, exploratory data analysis, feature engineering, model training, model evaluation, and business-oriented interpretation.',
    tags: ['Python', 'Scikit-learn', 'EDA', 'Feature Engineering', 'Model Evaluation'],
  },
  {
    date: '2024 - Present',
    title: 'Laboratory Assistant',
    subtitle: 'Gunadarma University',
    desc: 'Assisting students during practical computing laboratory sessions, supporting technical exercises, and strengthening communication, mentoring, and technical problem-solving skills.',
    tags: ['Technical Mentoring', 'Teaching', 'Laboratory Operations', 'Communication'],
    isActive: true,
  },
];

const credentials = [
  {
    name: 'Coding Camp 2026 - AI Engineer',
    issuer: 'DBS Foundation x Dicoding',
    year: '2026',
    badge: 'Distinction Graduate',
    note: 'Completed Feb 9 - Jul 20, 2026',
    href: '/credentials/coding-camp-2026-ai-engineer-distinction.pdf',
    icon: 'lucide:award',
    featured: true,
  },
  {
    name: '3rd Best Team - Machine Learning Path',
    issuer: 'GDG on Campus Gunadarma',
    year: '2026',
    badge: 'Team Award',
    note: 'Compete Mate Bootcamp',
    href: '/credentials/competemate-best-team-ml.pdf',
    icon: 'lucide:trophy',
    featured: true,
  },
  {
    name: 'Asah - Machine Learning',
    issuer: 'Dicoding x Accenture',
    year: '2026',
    note: 'Graduated Jan 14, 2026',
    href: '/credentials/asah-2025-machine-learning.pdf',
    icon: 'lucide:cpu',
  },
  {
    name: 'Productivity with AI Bootcamp',
    issuer: 'Badan Ekraf Digital Talent x Dicoding',
    year: '2026',
    note: 'Completed May 31, 2026',
    href: '/credentials/bdt-productivity-ai-bootcamp.jpg',
    icon: 'lucide:sparkles',
  },
  {
    name: 'English Proficiency Test',
    issuer: 'Brighten English',
    year: '2025',
    badge: 'TOEFL 580',
    note: 'Valid until Nov 3, 2027',
    href: '/credentials/toefl-brighten-english-580.pdf',
    icon: 'lucide:languages',
  },
];

const currentFocus = [
  'Machine Learning Engineering',
  'Data Science',
  'Backend AI Systems',
  'MLOps Fundamentals',
];

export default function Experience() {
  const sectionRef = useRef(null);
  const timelineRef = useRef(null);
  const credentialTrackRef = useRef(null);

  useEffect(() => {
    const section = sectionRef.current;
    const timeline = timelineRef.current;

    if (!section || !timeline) {
      return undefined;
    }

    const motionQuery = window.matchMedia('(prefers-reduced-motion: reduce)');
    let frame = 0;

    const clamp = (value) => Math.min(Math.max(value, 0), 1);

    const updateTimeline = () => {
      frame = 0;

      if (motionQuery.matches) {
        timeline.style.setProperty('--timeline-fill-height', 'calc(100% - 27px)');
        timeline.style.setProperty('--timeline-opacity', '1');
        timeline.querySelectorAll('.tl-dot').forEach((dot) => dot.classList.add('is-lit'));
        return;
      }

      const rect = timeline.getBoundingClientRect();
      const isMobile = window.innerWidth < 768;
      const visualStartOffset = 8;
      const visualEndOffset = 5;
      const drawableHeight = Math.max(rect.height - visualStartOffset - visualEndOffset, 0);
      const viewportGuide = window.innerHeight * (isMobile ? 0.82 : 0.72);
      const fillHeight = Math.min(Math.max(viewportGuide - rect.top - visualStartOffset, 0), drawableHeight);
      const progress = drawableHeight > 0 ? clamp(fillHeight / drawableHeight) : 0;
      const opacity = clamp(progress / 0.1);
      const hasStarted = fillHeight > 2;

      timeline.style.setProperty('--timeline-fill-height', `${fillHeight}px`);
      timeline.style.setProperty('--timeline-opacity', opacity.toFixed(4));

      const lineEnd = rect.top + visualStartOffset + fillHeight;
      timeline.querySelectorAll('.tl-dot').forEach((dot) => {
        const dotRect = dot.getBoundingClientRect();
        const dotCenter = dotRect.top + dotRect.height / 2;
        dot.classList.toggle('is-lit', hasStarted && (dotCenter <= lineEnd || progress >= 0.99));
      });
    };

    const requestUpdate = () => {
      if (frame) {
        return;
      }

      frame = window.requestAnimationFrame(updateTimeline);
    };

    updateTimeline();
    window.addEventListener('scroll', requestUpdate, { passive: true });
    window.addEventListener('resize', requestUpdate);
    motionQuery.addEventListener('change', requestUpdate);

    return () => {
      if (frame) {
        window.cancelAnimationFrame(frame);
      }

      window.removeEventListener('scroll', requestUpdate);
      window.removeEventListener('resize', requestUpdate);
      motionQuery.removeEventListener('change', requestUpdate);
    };
  }, []);

  const scrollCredentials = (direction) => {
    credentialTrackRef.current?.scrollBy({
      left: direction * 245,
      behavior: 'smooth',
    });
  };

  return (
    <section ref={sectionRef} id="experience" className="py-20 lg:py-24 border-t border-r-steel">
      <div className="max-w-[1100px] mx-auto px-5">
        <div className="reveal mb-12">
          <p className="text-r-red text-[10px] font-bold tracking-[0.25em] uppercase mb-2">02 / Experience</p>
          <h2 className="text-white font-black text-3xl lg:text-4xl uppercase tracking-tight leading-[0.9]">
            Experience & Education
          </h2>
        </div>
        <div className="grid grid-cols-1 lg:grid-cols-[1fr_290px] gap-10">
          <div ref={timelineRef} className="experience-timeline space-y-0">
            {experiences.map((experience, index) => (
              <ExperienceItem
                key={experience.title}
                {...experience}
                isLast={index === experiences.length - 1}
              />
            ))}
          </div>

          <div className="space-y-4 lg:mt-[-5.75rem]">
            <div className="reveal bg-r-gray border border-r-steel rounded p-5" data-delay="0">
              <p className="text-r-red text-[10px] font-bold tracking-[0.2em] uppercase mb-3">Education</p>
              <p className="text-white text-sm font-semibold">S1 Informatics Engineering</p>
              <p className="text-r-silver text-xs">Gunadarma University</p>
              <p className="text-r-red text-[10px] font-bold tracking-wider uppercase mt-1">Sep 2023 - Present</p>
              <div className="mt-3 pt-3 border-t border-r-steel flex items-start gap-2">
                <span className="w-1.5 h-1.5 bg-r-red rounded-full mt-1.5 flex-shrink-0"></span>
                <p className="text-r-light text-xs leading-relaxed">
                  Active in campus technology communities.
                </p>
              </div>
            </div>

            <div className="reveal bg-r-gray border border-r-steel rounded p-5" data-delay="120">
              <div className="flex items-start justify-between gap-3 mb-3">
                <div>
                  <p className="text-r-red text-[10px] font-bold tracking-[0.2em] uppercase">Credentials & Awards</p>
                  <p className="text-r-silver text-[10px] font-bold tracking-wider uppercase mt-1">{credentials.length} verified</p>
                </div>
                <div className="flex items-center gap-1.5">
                  <button
                    type="button"
                    onClick={() => scrollCredentials(-1)}
                    className="w-7 h-7 rounded border border-r-steel bg-r-dark text-r-silver hover:border-r-red/60 hover:text-r-red transition-colors flex items-center justify-center"
                    aria-label="Previous credential"
                  >
                    <span className="iconify" data-icon="lucide:chevron-left" data-width="14"></span>
                  </button>
                  <button
                    type="button"
                    onClick={() => scrollCredentials(1)}
                    className="w-7 h-7 rounded border border-r-steel bg-r-dark text-r-silver hover:border-r-red/60 hover:text-r-red transition-colors flex items-center justify-center"
                    aria-label="Next credential"
                  >
                    <span className="iconify" data-icon="lucide:chevron-right" data-width="14"></span>
                  </button>
                </div>
              </div>
              <div className="credential-slider">
                <div ref={credentialTrackRef} className="credential-track flex gap-3 overflow-x-auto scroll-smooth snap-x snap-mandatory pb-1">
                  {credentials.map((credential) => (
                    <a
                      key={credential.name}
                      href={credential.href}
                      target="_blank"
                      rel="noopener noreferrer"
                      className={`credential-card group flex min-w-[235px] snap-start gap-3 items-start rounded border p-3 transition-all hover:border-r-red/60 hover:bg-r-red/5 ${
                        credential.featured ? 'border-r-red/25 bg-r-red/5' : 'border-r-steel bg-r-dark'
                      }`}
                      aria-label={`View credential: ${credential.name}`}
                    >
                      <div className="w-8 h-8 rounded bg-r-red/10 flex items-center justify-center flex-shrink-0">
                        <span className="iconify text-r-red" data-icon={credential.icon} data-width="13"></span>
                      </div>
                      <div className="min-w-0 flex-1">
                        <div className="flex items-start justify-between gap-2">
                          <p className="text-white text-xs font-semibold leading-snug">{credential.name}</p>
                          <span className="iconify text-r-silver group-hover:text-r-red transition-colors flex-shrink-0 mt-0.5" data-icon="lucide:external-link" data-width="12"></span>
                        </div>
                        <p className="text-r-silver text-[10px] leading-relaxed">{credential.issuer} - {credential.year}</p>
                        <p className="text-r-light text-[10px] leading-relaxed mt-1">{credential.note}</p>
                        {credential.badge && (
                          <p className="text-r-red text-[10px] font-bold uppercase tracking-wider mt-1">{credential.badge}</p>
                        )}
                      </div>
                    </a>
                  ))}
                </div>
              </div>
            </div>

            <div className="reveal bg-r-gray border border-r-red/15 rounded p-5" data-delay="240">
              <p className="text-r-red text-[10px] font-bold tracking-[0.2em] uppercase mb-3">Current Focus</p>
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-1 gap-2">
                {currentFocus.map((focus) => (
                  <div key={focus} className="bg-r-dark border border-r-steel rounded py-2.5 px-3">
                    <p className="text-r-light font-semibold text-xs">{focus}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

function ExperienceItem({ date, title, subtitle, desc, tags, isActive, isLast }) {
  return (
    <article className={`reveal experience-item flex gap-5 ${isLast ? '' : 'pb-9'}`}>
      <div className="timeline-marker pt-0.5" aria-hidden="true">
        <div className={`tl-dot ${isActive ? 'current' : ''}`}></div>
      </div>
      <div className="flex-1">
        <p className="text-r-red text-[10px] font-bold tracking-[0.2em] uppercase mb-1.5">{date}</p>
        <h3 className="text-white font-bold text-base uppercase tracking-tight mb-0.5">{title}</h3>
        <p className="text-r-red text-[11px] font-semibold tracking-wider uppercase mb-2">{subtitle}</p>
        <p className="text-r-light text-sm leading-relaxed mb-3">{desc}</p>
        <div className="flex flex-wrap gap-1.5">
          {tags.map((tag) => (
            <span key={tag} className="text-[10px] font-bold tracking-wider uppercase px-2 py-0.5 bg-r-steel text-r-light rounded">
              {tag}
            </span>
          ))}
        </div>
      </div>
    </article>
  );
}
