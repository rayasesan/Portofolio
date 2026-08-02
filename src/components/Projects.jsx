import { useState } from 'react';
import AnimatedLink from './AnimatedLink';

const projects = [
  {
    id: 'nutrify',
    category: 'AI Engineering / Computer Vision',
    title: 'Nutrify',
    subtitle: 'AI-powered nutrition platform',
    outcome: 'An end-to-end food classification product with 92.44% model accuracy, FastAPI serving, and a Gemini-powered nutrition coach.',
    image: '/nutrify-landing.jpg',
    imageWidth: 1600,
    imageHeight: 900,
    alt: 'Nutrify AI-powered nutrition platform landing page',
    tags: ['Python', 'TensorFlow', 'Computer Vision', 'FastAPI', 'Gemini API'],
    stats: [['92.44%', 'Accuracy'], ['FastAPI', 'Serving'], ['Gemini', 'AI coach']],
    links: [
      ['Live demo', 'https://nutrify.biz.id'],
      ['Main repository', 'https://github.com/coding-camp-project/Project-Utama'],
      ['AI repository', 'https://github.com/coding-camp-project/AI'],
    ],
  },
  {
    id: 'customer-churn',
    category: 'Machine Learning',
    title: 'Customer Churn',
    subtitle: 'Retention risk prediction',
    outcome: 'A classification workflow across 7,043 customer records, reaching an 84.26% ROC-AUC with Logistic Regression.',
    image: '/customer-churn-preview.png',
    imageWidth: 1057,
    imageHeight: 547,
    alt: 'Customer churn prediction project preview',
    tags: ['Python', 'Scikit-learn', 'Pandas', 'Logistic Regression'],
    stats: [['7,043', 'Customers'], ['84.26%', 'ROC-AUC'], ['Logistic', 'Best model']],
    links: [
      ['Repository', 'https://github.com/rayasesan/customer-churn-prediction'],
      ['Notebook', 'https://github.com/rayasesan/customer-churn-prediction/blob/main/customer_churn_prediction.ipynb'],
    ],
  },
  {
    id: 'credit-risk',
    category: 'Machine Learning',
    title: 'Credit Risk',
    subtitle: 'Borrower default classification',
    outcome: 'A model-comparison pipeline that selected Random Forest at 93.23% accuracy and 93.11% ROC-AUC.',
    fallback: 'RISK / 03',
    tags: ['Python', 'Scikit-learn', 'Classification', 'Random Forest'],
    stats: [['93.23%', 'Accuracy'], ['93.11%', 'ROC-AUC'], ['Random Forest', 'Best model']],
    links: [
      ['Repository', 'https://github.com/rayasesan/credit-risk-prediction'],
      ['Notebook', 'https://github.com/rayasesan/credit-risk-prediction/blob/main/credit_risk_prediction.ipynb'],
    ],
  },
  {
    id: 'bank-marketing',
    category: 'Data Analysis / SQL',
    title: 'Bank Marketing',
    subtitle: 'Campaign conversion analytics',
    outcome: 'Six business-focused SQL analyses over 45,211 records, surfacing a 64.73% conversion rate after previous campaign success.',
    fallback: 'SQL / 04',
    tags: ['SQL', 'SQLite', 'CTE', 'Window Functions', 'Segmentation'],
    stats: [['45,211', 'Records'], ['6', 'Questions'], ['64.73%', 'Conversion']],
    links: [
      ['Repository', 'https://github.com/rayasesan/bank-marketing-sql-analysis'],
      ['SQL file', 'https://github.com/rayasesan/bank-marketing-sql-analysis/blob/main/bank_marketing_analysis.sql'],
    ],
  },
  {
    id: 'telco-dashboard',
    category: 'Business Intelligence',
    title: 'Telco Dashboard',
    subtitle: 'Churn monitoring in Power BI',
    outcome: 'A decision-ready Power BI dashboard bringing three core KPIs and four key visualizations into one monitoring view.',
    image: '/telco-dashboard-preview.jpg',
    imageWidth: 957,
    imageHeight: 537,
    alt: 'Telco churn Power BI dashboard preview',
    tags: ['Power BI', 'DAX', 'Data Visualization', 'Dashboard'],
    stats: [['3', 'KPIs'], ['4', 'Visuals'], ['PBIX', 'Deliverable']],
    links: [['Repository', 'https://github.com/rayasesan/telco-customer-churn-dashboard-powerbi']],
  },
];

export default function Projects() {
  const [activeIndex, setActiveIndex] = useState(0);
  const activeProject = projects[activeIndex];

  return (
    <section id="projects" className="section projects-section">
      <div className="page-shell">
        <header className="projects-heading reveal">
          <p className="section-index">04 / Selected work</p>
          <h2>Work</h2>
          <div>
            <p>Five practical builds across AI engineering, machine learning, SQL, and business intelligence.</p>
            <a href="https://github.com/rayasesan" target="_blank" rel="noopener noreferrer">All repositories</a>
          </div>
        </header>

        <div className="projects-browser">
          <div className="project-selector" role="list" aria-label="Selected projects">
            {projects.map((project, index) => (
              <button
                type="button"
                className={`project-row reveal ${activeIndex === index ? 'is-active' : ''}`}
                key={project.id}
                onMouseEnter={() => setActiveIndex(index)}
                onFocus={() => setActiveIndex(index)}
                onClick={() => setActiveIndex(index)}
                aria-pressed={activeIndex === index}
              >
                <span>{String(index + 1).padStart(2, '0')}</span>
                <span className="project-row__title">{project.title}</span>
                <span className="project-row__category">{project.category}</span>
              </button>
            ))}
          </div>

          <ProjectPreview project={activeProject} index={activeIndex} />
        </div>
      </div>
    </section>
  );
}

function ProjectPreview({ project, index }) {
  return (
    <article className="project-preview reveal" key={project.id} aria-live="polite">
      <div className={`project-preview__media ${project.image ? '' : `project-preview__media--${project.id}`}`}>
        {project.image ? (
          <img src={project.image} alt={project.alt} width={project.imageWidth} height={project.imageHeight} />
        ) : (
          <div className="project-preview__fallback"><span>{project.fallback}</span><i></i><i></i><i></i></div>
        )}
        <p>{String(index + 1).padStart(2, '0')} / {String(projects.length).padStart(2, '0')}</p>
      </div>
      <div className="project-preview__copy">
        <p className="project-preview__eyebrow">{project.subtitle}</p>
        <h3>{project.title}</h3>
        <p className="project-preview__outcome">{project.outcome}</p>
        <div className="project-preview__stats">
          {project.stats.map(([value, label]) => <div key={`${value}-${label}`}><strong>{value}</strong><span>{label}</span></div>)}
        </div>
        <div className="project-preview__tags">{project.tags.map((tag) => <span key={tag}>{tag}</span>)}</div>
        <div className="project-preview__links">
          {project.links.map(([label, href], linkIndex) => (
            <AnimatedLink key={href} href={href} target="_blank" rel="noopener noreferrer" compact variant={linkIndex === 0 ? 'light' : 'ghost'}>{label}</AnimatedLink>
          ))}
        </div>
      </div>
    </article>
  );
}
