import { useState } from 'react';

const projects = [
  {
    title: 'Nutrify', category: 'AI Engineering / Computer Vision', image: '/nutrify-landing.jpg', alt: 'Nutrify platform preview',
    href: 'https://nutrify.biz.id', stat: '92.44% accuracy',
  },
  {
    title: 'Customer Churn', category: 'Machine Learning', image: '/customer-churn-preview.png', alt: 'Customer churn project preview',
    href: 'https://github.com/rayasesan/customer-churn-prediction', stat: '84.26% ROC-AUC',
  },
  {
    title: 'Credit Risk', category: 'Machine Learning', image: null, alt: 'Credit risk project',
    href: 'https://github.com/rayasesan/credit-risk-prediction', stat: '93.23% accuracy',
  },
  {
    title: 'Bank Marketing', category: 'Data Analysis / SQL', image: null, alt: 'Bank marketing SQL project',
    href: 'https://github.com/rayasesan/bank-marketing-sql-analysis', stat: '45,211 records',
  },
  {
    title: 'Telco Dashboard', category: 'Business Intelligence', image: '/telco-dashboard-preview.jpg', alt: 'Telco Power BI dashboard preview',
    href: 'https://github.com/rayasesan/telco-customer-churn-dashboard-powerbi', stat: '3 KPIs / 4 visuals',
  },
];

export default function Projects() {
  const [activeIndex, setActiveIndex] = useState(0);
  const active = projects[activeIndex];

  return (
    <section id="projects" className="projects-section">
      <div className="projects-stage">
        <h2 className="reveal">Work</h2>
        <div className="project-orb" aria-live="polite">
          <span className="project-orb__ring"></span>
          {active.image ? (
            <img src={active.image} alt={active.alt} />
          ) : (
            <div className="project-orb__fallback"><span>{String(activeIndex + 1).padStart(2, '0')}</span><i></i><i></i></div>
          )}
          <p>{active.stat}</p>
        </div>

        <div className="project-list" role="list" aria-label="Selected projects">
          {projects.map((project, index) => (
            <a
              href={project.href}
              target="_blank"
              rel="noopener noreferrer"
              key={project.title}
              role="listitem"
              className={`project-row reveal ${activeIndex === index ? 'is-active' : ''}`}
              onMouseEnter={() => setActiveIndex(index)}
              onFocus={() => setActiveIndex(index)}
              onTouchStart={() => setActiveIndex(index)}
            >
              <strong>{project.title}</strong>
              <span>{project.category}</span>
            </a>
          ))}
        </div>

        <a className="projects-all" href="https://github.com/rayasesan" target="_blank" rel="noopener noreferrer">All repositories</a>
      </div>
    </section>
  );
}
