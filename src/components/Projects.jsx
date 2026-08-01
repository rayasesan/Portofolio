import { useState } from 'react';
import AnimatedLink from './AnimatedLink';

const projects = [
  {
    id: 'nutrify',
    category: 'AI Engineering · Computer Vision',
    title: 'Nutrify — AI-Powered Nutrition Platform',
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
    category: 'Data Analysis · SQL',
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

const paperHeights = [190, 245, 305, 245, 190];

export default function Projects() {
  const [selectedId, setSelectedId] = useState(projects[0].id);
  const selectedProject = projects.find((project) => project.id === selectedId) ?? projects[0];

  return (
    <section id="projects" className="section-frame projects-tray-section">
      <div className="max-w-[1100px] mx-auto px-5 w-full py-20 lg:py-28">
        <div className="projects-gallery-stage">
        <div className="projects-tray-heading reveal text-center">
          <p className="section-kicker text-r-red">04 / Selected work</p>
          <h2 className="text-white text-4xl md:text-6xl lg:text-7xl leading-[0.95]">
              Selected cases
          </h2>
          <p className="mx-auto mt-5 max-w-xl text-r-light text-sm leading-[1.75]">
            Hover through the stack, then select a project to explore the work behind it.
          </p>
          <div className="mt-7">
            <AnimatedLink
              href="https://github.com/rayasesan"
              target="_blank"
              rel="noopener noreferrer"
              variant="light"
            >
              View all on GitHub
            </AnimatedLink>
          </div>
        </div>

        <div className="projects-tray reveal" aria-label="Project showcase">
          <div className="projects-tray-back" aria-hidden="true"></div>

          <div className="projects-paper-stack" role="list">
            {projects.map((project, index) => (
              <article
                key={project.id}
                className={`project-paper ${selectedId === project.id ? 'is-selected' : ''}`}
                style={{
                  '--paper-height': `${paperHeights[index]}px`,
                  '--paper-order': projects.length - index,
                }}
                role="listitem"
              >
                <button
                  type="button"
                  className="project-paper-button"
                  onMouseEnter={() => setSelectedId(project.id)}
                  onFocus={() => setSelectedId(project.id)}
                  onClick={() => setSelectedId(project.id)}
                  aria-pressed={selectedId === project.id}
                  aria-label={`Select project: ${project.title}`}
                >
                  {project.image ? (
                    <img src={project.image} alt={project.alt} className="project-paper-image" loading="lazy" />
                  ) : (
                    <div className="project-paper-fallback" aria-hidden="true">
                      <span>{String(index + 1).padStart(2, '0')}</span>
                      <div className="project-paper-grid"></div>
                    </div>
                  )}

                  <div className="project-paper-caption">
                    <h3>{project.shortTitle}</h3>
                    <p>{project.category}</p>
                  </div>
                </button>
              </article>
            ))}
          </div>

          <div className="projects-tray-front" aria-hidden="true">
            <span>Selected work · {projects.length} projects</span>
          </div>
        </div>

        </div>

        <ProjectDetails project={selectedProject} />
      </div>
    </section>
  );
}

function ProjectDetails({ project }) {
  return (
    <article key={project.id} className="project-tray-details" aria-live="polite">
      <div>
        <p className="section-kicker text-r-red">{project.category}</p>
        <h3 className="text-white text-3xl md:text-4xl leading-tight">{project.title}</h3>
        <p className="mt-4 max-w-2xl text-r-light text-sm leading-[1.75]">{project.desc}</p>
        <p className="mt-4 text-r-silver text-xs">Role — {project.role}</p>
      </div>

      <div className="project-tray-meta">
        <div className="project-tray-tags">
          {project.tags.map((tag) => (
            <span key={tag}>{tag}</span>
          ))}
        </div>

        <div className="project-tray-stats">
          {project.stats.map((stat) => (
            <div key={`${stat.value}-${stat.label}`}>
              <strong>{stat.value}</strong>
              <span>{stat.label}</span>
            </div>
          ))}
        </div>

        <div className="flex flex-wrap gap-2">
          {project.links.map((link) => (
            <AnimatedLink
              key={link.href}
              href={link.href}
              target="_blank"
              rel="noopener noreferrer"
              compact
              variant={link.primary ? 'red' : 'light'}
            >
              {link.label}
            </AnimatedLink>
          ))}
        </div>
      </div>
    </article>
  );
}
