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

const currentFocus = [
  'Machine Learning Engineering',
  'Data Science',
  'Backend AI Systems',
  'MLOps Fundamentals',
];

export default function Experience() {
  const sectionRef = useRef(null);
  const timelineRef = useRef(null);

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

  return (
    <section ref={sectionRef} id="experience" className="py-20 lg:py-24 border-t border-r-steel">
      <div className="max-w-[1100px] mx-auto px-5">
        <div className="section-heading reveal mb-14">
          <p className="section-kicker text-r-red">02 / Journey</p>
          <h2 className="text-white text-4xl lg:text-6xl leading-[0.95]">
            Experience
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

          <div className="space-y-5 lg:mt-[-5.75rem]">
            <div className="aside-card reveal bg-r-gray border border-r-steel rounded p-6" data-delay="0">
              <p className="section-kicker text-r-red mb-4">Education</p>
              <p className="text-white text-xl">S1 Informatics Engineering</p>
              <p className="text-r-silver text-[13px] mt-1">Gunadarma University</p>
              <p className="text-r-red text-[11px] font-semibold mt-2">Sep 2023 — Present</p>
              <div className="mt-3 pt-3 border-t border-r-steel flex items-start gap-2">
                <span className="w-1.5 h-1.5 bg-r-red rounded-full mt-1.5 flex-shrink-0"></span>
                <p className="text-r-light text-xs leading-relaxed">
                  Active in campus technology communities.
                </p>
              </div>
            </div>

            <div className="aside-card reveal bg-r-gray border border-r-steel rounded p-6" data-delay="120">
              <p className="section-kicker text-r-red mb-4">Current focus</p>
              <div className="focus-list grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-1">
                {currentFocus.map((focus) => (
                  <div key={focus} className="border-t border-r-steel py-3 first:border-t-0 first:pt-0 last:pb-0">
                    <p className="text-r-light font-medium text-[13px]">{focus}</p>
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
        <p className="text-r-red text-[11px] font-semibold mb-2">{date}</p>
        <h3 className="text-white text-2xl leading-tight mb-1">{title}</h3>
        <p className="text-r-silver text-[12px] font-medium mb-3">{subtitle}</p>
        <p className="text-r-light text-sm leading-[1.75] mb-4 max-w-2xl">{desc}</p>
        <div className="soft-tags flex flex-wrap gap-x-4 gap-y-1.5">
          {tags.map((tag) => (
            <span key={tag} className="text-[11px] font-medium text-r-silver">
              {tag}
            </span>
          ))}
        </div>
      </div>
    </article>
  );
}
