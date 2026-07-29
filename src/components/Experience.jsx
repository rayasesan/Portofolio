import { useEffect, useRef } from 'react';

const experiences = [
  {
    date: 'Feb 2026 - Jul 2026',
    title: 'AI Engineer Graduate with Distinction',
    subtitle: 'Coding Camp 2026 - DBS Foundation x Dicoding',
    desc: 'Completed 934 hours of structured learning in Python, machine learning, deep learning, Generative AI, Git, professional development, and an end-to-end capstone project. Contributed as an AI Engineer to Nutrify, an AI-powered nutrition platform combining computer vision, FastAPI model serving, and a Generative AI nutrition coach.',
    tags: ['AI Engineering', 'TensorFlow', 'Computer Vision', 'Generative AI', 'FastAPI', 'Distinction'],
  },
  {
    date: 'Sep 2025 - Jan 2026',
    title: 'Machine Learning Cohort',
    subtitle: 'Asah - Led by Dicoding',
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

const certifications = [
  {
    name: 'Coding Camp 2026 - AI Engineer Learning Path',
    issuer: 'DBS Foundation x Dicoding',
    year: '2026',
    badge: 'Distinction',
    icon: 'lucide:brain',
  },
  {
    name: 'Asah 2025 - Machine Learning Learning Path',
    issuer: 'Dicoding',
    year: '2025',
    icon: 'lucide:cpu',
  },
];

const currentFocus = [
  'Machine Learning Engineering',
  'Data Science',
  'Backend AI Systems',
  'MLOps Fundamentals',
];

export default function Experience() {
  const timelineRef = useRef(null);

  useEffect(() => {
    const timeline = timelineRef.current;

    if (!timeline) {
      return undefined;
    }

    const motionQuery = window.matchMedia('(prefers-reduced-motion: reduce)');
    let frame = 0;

    const clamp = (value) => Math.min(Math.max(value, 0), 1);

    const updateTimeline = () => {
      frame = 0;

      if (motionQuery.matches) {
        timeline.style.setProperty('--timeline-progress', '1');
        timeline.querySelectorAll('.tl-dot').forEach((dot) => dot.classList.add('is-lit'));
        return;
      }

      const rect = timeline.getBoundingClientRect();
      const startY = window.innerHeight * 0.72;
      const endY = window.innerHeight * 0.32;
      const distance = rect.height + startY - endY;
      const progress = distance > 0 ? clamp((startY - rect.top) / distance) : 0;

      timeline.style.setProperty('--timeline-progress', progress.toFixed(4));

      const lineEnd = rect.top + rect.height * progress;
      timeline.querySelectorAll('.tl-dot').forEach((dot) => {
        const dotRect = dot.getBoundingClientRect();
        const dotCenter = dotRect.top + dotRect.height / 2;
        dot.classList.toggle('is-lit', dotCenter <= lineEnd || progress >= 0.99);
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

  return (
    <section id="experience" className="py-20 lg:py-24 border-t border-r-steel">
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

          <div className="space-y-4">
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
              <p className="text-r-red text-[10px] font-bold tracking-[0.2em] uppercase mb-3">Certifications</p>
              <div className="space-y-3">
                {certifications.map((certification) => (
                  <div key={certification.name} className="flex gap-3 items-start">
                    <div className="w-8 h-8 rounded bg-r-red/10 flex items-center justify-center flex-shrink-0">
                      <span className="iconify text-r-red" data-icon={certification.icon} data-width="13"></span>
                    </div>
                    <div>
                      <p className="text-white text-xs font-semibold">{certification.name}</p>
                      <p className="text-r-silver text-[10px]">{certification.issuer} - {certification.year}</p>
                      {certification.badge && (
                        <p className="text-r-red text-[10px] font-bold uppercase tracking-wider mt-1">{certification.badge}</p>
                      )}
                    </div>
                  </div>
                ))}
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
