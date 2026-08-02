import { useState } from 'react';

const projects = [
  {
    title: 'Nutrify', category: 'AI Engineering / Computer Vision', image: '/nutrify-landing.jpg', alt: 'Nutrify platform preview',
    href: 'https://nutrify.biz.id', stat: '92.44% accuracy',
    summary: 'Indonesian food recognition with TensorFlow, FastAPI model serving, and Gemini-powered nutrition recommendations.',
  },
  {
    title: 'Customer Churn', category: 'Predictive Modeling', image: '/customer-churn-preview.png', alt: 'Customer churn project preview',
    href: 'https://github.com/rayasesan/customer-churn-prediction', stat: '84.26% ROC-AUC',
    summary: 'Classification across 7,043 customer records, from data cleaning and EDA to model evaluation.',
  },
  {
    title: 'Credit Risk', category: 'Predictive Modeling', image: null, alt: 'Credit risk project',
    href: 'https://github.com/rayasesan/credit-risk-prediction', stat: '93.23% accuracy',
    summary: 'A supervised learning comparison for borrower risk, with Random Forest selected as the strongest model.',
  },
  {
    title: 'Bank Marketing', category: 'Data Analysis / SQL', image: null, alt: 'Bank marketing SQL project',
    href: 'https://github.com/rayasesan/bank-marketing-sql-analysis', stat: '45,211 records',
    summary: 'SQL-based exploration of campaign response patterns across a large bank marketing dataset.',
  },
  {
    title: 'Telco Dashboard', category: 'Power BI / Data Visualization', image: '/telco-dashboard-preview.jpg', alt: 'Telco Power BI dashboard preview',
    href: 'https://github.com/rayasesan/telco-customer-churn-dashboard-powerbi', stat: '3 KPIs / 4 visuals',
    summary: 'A focused Power BI dashboard for retention, churn rate, and segment-level exploration.',
  },
];

export default function Projects() {
  const [activeIndex, setActiveIndex] = useState(0);
  const active = projects[activeIndex];

  return (
    <section id="projects" className="projects-section">
      <div className="projects-stage">
        <header className="projects-heading">
          <p className="scene-kicker">04 / Selected work</p>
          <h2>Work</h2>
          <p>Selected student projects across data analysis, predictive modeling, AI applications, and visualization.</p>
        </header>

        <div className="projects-showcase">
          <div className="project-list" role="list" aria-label="Selected projects">
            {projects.map((project, index) => (
              <a
                href={project.href}
                target="_blank"
                rel="noopener noreferrer"
                key={project.title}
                role="listitem"
                className={`project-row ${activeIndex === index ? 'is-active' : ''}`}
                onMouseEnter={() => setActiveIndex(index)}
                onFocus={() => setActiveIndex(index)}
                onTouchStart={() => setActiveIndex(index)}
              >
                <span className="project-row__number">{String(index + 1).padStart(2, '0')}</span>
                <strong>{project.title}</strong>
                <span className="project-row__category">{project.category}</span>
              </a>
            ))}
          </div>

          <div className="project-visual">
            <div className="project-frame" aria-live="polite">
              {active.image ? (
                <img src={active.image} alt={active.alt} />
              ) : (
                <div className="project-frame__fallback"><span>{String(activeIndex + 1).padStart(2, '0')}</span><i></i><i></i></div>
              )}
              <p>{active.stat}</p>
            </div>
            <p className="project-visual__caption"><span>{String(activeIndex + 1).padStart(2, '0')}</span>{active.title}</p>
            <p className="project-visual__summary">{active.summary}</p>
          </div>
        </div>

        <a className="projects-all" href="https://github.com/rayasesan" target="_blank" rel="noopener noreferrer">All repositories</a>
      </div>
    </section>
  );
}
