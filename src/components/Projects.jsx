import { useState } from 'react';
import AnimatedLink from './AnimatedLink';

const projects = [
  {
    id: 'nutrify',
    category: 'AI Engineering / Computer Vision',
    title: 'Nutrify: AI-Powered Nutrition Platform',
    shortTitle: 'Nutrify',
    desc: 'An AI-powered nutrition platform that identifies Indonesian food from images, analyzes nutritional information, and provides personalized recommendations through an AI nutrition coach.',
    role: 'AI Engineer',
    image: '/nutrify-landing.jpg',
    alt: 'Nutrify AI-powered nutrition platform landing page',
    tags: ['Python', 'TensorFlow', 'Computer Vision', 'FastAPI', 'Gemini API'],
    stats: [
      { value: '92.44%', label: 'Model accuracy' },
      { value: 'FastAPI', label: 'Model serving' },
      { value: 'Gemini', label: 'AI coach' },
    ],
    links: [
      { label: 'Live Demo', href: 'https://nutrify.biz.id', primary: true },
      { label: 'Main Repository', href: 'https://github.com/coding-camp-project/Project-Utama' },
      { label: 'AI Repository', href: 'https://github.com/coding-camp-project/AI' },
    ],
  },
  {
    id: 'customer-churn',
    category: 'Machine Learning',
    title: 'Customer Churn Prediction',
    shortTitle: 'Customer Churn',
    desc: 'Predicts customer churn from telco demographic, service, billing, and contract data. The final model supports retention analysis by identifying high-risk customers and churn-driving factors.',
    role: 'Data Scientist',
    image: '/customer-churn-preview.png',
    alt: 'Customer churn prediction project preview',
    tags: ['Python', 'Scikit-learn', 'Pandas', 'Logistic Regression', 'Random Forest'],
    stats: [
      { value: '7,043', label: 'Customers' },
      { value: '84.26%', label: 'ROC-AUC' },
      { value: 'Logistic Regression', label: 'Best model' },
    ],
    links: [
      { label: 'View Repository', href: 'https://github.com/rayasesan/customer-churn-prediction', primary: true },
      { label: 'Notebook', href: 'https://github.com/rayasesan/customer-churn-prediction/blob/main/customer_churn_prediction.ipynb' },
    ],
  },
  {
    id: 'credit-risk',
    category: 'Machine Learning',
    title: 'Credit Risk Prediction',
    shortTitle: 'Credit Risk',
    desc: 'Classifies borrower default risk using demographic, financial, and loan-related features. Random Forest was selected as the final model for credit risk assessment.',
    role: 'Machine Learning',
    image: null,
    alt: 'Credit risk prediction project',
    tags: ['Python', 'Scikit-learn', 'Classification', 'Random Forest', 'Feature Engineering'],
    stats: [
      { value: '93.23%', label: 'Accuracy' },
      { value: '93.11%', label: 'ROC-AUC' },
      { value: 'Random Forest', label: 'Best model' },
    ],
    links: [
      { label: 'View Repository', href: 'https://github.com/rayasesan/credit-risk-prediction', primary: true },
      { label: 'Notebook', href: 'https://github.com/rayasesan/credit-risk-prediction/blob/main/credit_risk_prediction.ipynb' },
    ],
  },
  {
    id: 'bank-marketing',
    category: 'Data Analysis / SQL',
    title: 'Bank Marketing SQL Analytics',
    shortTitle: 'SQL Analytics',
    desc: 'Analyzes a bank marketing campaign dataset with SQLite to find customer segments and campaign factors linked to term deposit subscriptions.',
    role: 'Data Analyst',
    image: null,
    alt: 'Bank marketing SQL analytics project',
    tags: ['SQL', 'SQLite', 'CTE', 'Window Functions', 'Segmentation'],
    stats: [
      { value: '45,211', label: 'Records' },
      { value: '6', label: 'Business questions' },
      { value: '64.73%', label: 'Previous-success conversion' },
    ],
    links: [
      { label: 'View Repository', href: 'https://github.com/rayasesan/bank-marketing-sql-analysis', primary: true },
      { label: 'SQL File', href: 'https://github.com/rayasesan/bank-marketing-sql-analysis/blob/main/bank_marketing_analysis.sql' },
    ],
  },
  {
    id: 'telco-dashboard',
    category: 'Business Intelligence',
    title: 'Telco Churn Dashboard',
    shortTitle: 'Telco Dashboard',
    desc: 'Power BI dashboard analyzing telco churn behavior through customer, churn, and churn-rate KPIs across contract, service, payment, and tenure groups.',
    role: 'BI Developer',
    image: '/telco-dashboard-preview.jpg',
    alt: 'Telco churn Power BI dashboard preview',
    tags: ['Power BI', 'DAX', 'Data Visualization', 'Dashboard'],
    stats: [
      { value: '3', label: 'KPIs' },
      { value: '4', label: 'Visualizations' },
      { value: 'PBIX', label: 'Dashboard file' },
    ],
    links: [
      { label: 'View Repository', href: 'https://github.com/rayasesan/telco-customer-churn-dashboard-powerbi', primary: true },
    ],
  },
];

export default function Projects() {
  const [selectedId, setSelectedId] = useState(projects[0].id);

  const toggleProject = (projectId) => {
    setSelectedId((currentId) => (currentId === projectId ? null : projectId));
  };

  return (
    <section id="projects" className="section-frame projects-cases-section">
      <div className="projects-cases-wrap max-w-[1100px] mx-auto w-full py-20 lg:py-28">
        <header className="projects-cases-intro reveal">
          <p className="section-kicker">04 / Selected work</p>
          <h2>Selected<br />cases</h2>
          <p className="projects-cases-summary">
            Five practical projects across AI engineering, machine learning, SQL,
            and business intelligence. Select a case to see the work behind it.
          </p>
          <AnimatedLink
            href="https://github.com/rayasesan"
            target="_blank"
            rel="noopener noreferrer"
          >
            View all on GitHub
          </AnimatedLink>
        </header>

        <div className="project-case-list reveal" role="list">
          {projects.map((project, index) => {
            const isSelected = selectedId === project.id;
            const panelId = `project-panel-${project.id}`;

            return (
              <article
                key={project.id}
                className={`project-case ${isSelected ? 'is-open' : ''}`}
                role="listitem"
              >
                <button
                  type="button"
                  className="project-case-trigger"
                  aria-expanded={isSelected}
                  aria-controls={panelId}
                  onClick={() => toggleProject(project.id)}
                >
                  <span className="project-case-number">{String(index + 1).padStart(2, '0')}</span>
                  <span className="project-case-title">{project.shortTitle}</span>
                  <span className="project-case-category">{project.category}</span>
                  <span className="project-case-toggle" aria-hidden="true"></span>
                </button>

                <div
                  id={panelId}
                  className="project-case-panel"
                  aria-hidden={!isSelected}
                >
                  <div className="project-case-panel-inner">
                    <ProjectCaseDetails project={project} index={index} isSelected={isSelected} />
                  </div>
                </div>
              </article>
            );
          })}
        </div>
      </div>
    </section>
  );
}

function ProjectCaseDetails({ project, index, isSelected }) {
  return (
    <div className="project-case-content">
      <div className="project-case-media">
        {project.image ? (
          <img src={project.image} alt={project.alt} loading="lazy" />
        ) : (
          <div className="project-case-fallback" aria-hidden="true">
            <span>{String(index + 1).padStart(2, '0')}</span>
            <p>Model study</p>
          </div>
        )}
      </div>

      <div className="project-case-copy">
        <p className="project-case-role">{project.role}</p>
        <h3>{project.title}</h3>
        <p className="project-case-description">{project.desc}</p>

        <div className="project-case-tags">
          {project.tags.map((tag) => <span key={tag}>{tag}</span>)}
        </div>

        <div className="project-case-stats">
          {project.stats.map((stat) => (
            <div key={`${stat.value}-${stat.label}`}>
              <strong>{stat.value}</strong>
              <span>{stat.label}</span>
            </div>
          ))}
        </div>

        <div className="project-case-links">
          {project.links.map((link) => (
            <AnimatedLink
              key={link.href}
              href={link.href}
              target="_blank"
              rel="noopener noreferrer"
              compact
              variant={link.primary ? 'red' : 'light'}
              tabIndex={isSelected ? 0 : -1}
            >
              {link.label}
            </AnimatedLink>
          ))}
        </div>
      </div>
    </div>
  );
}
