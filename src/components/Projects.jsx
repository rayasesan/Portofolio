import AnimatedLink from './AnimatedLink';

const projects = [
  {
    id: 'nutrify',
    category: 'AI Engineering / Computer Vision',
    title: 'Nutrify: AI-Powered Nutrition Platform',
    story: {
      problem: 'Nutrition information for Indonesian dishes is often difficult to estimate from a photo alone.',
      build: 'An end-to-end computer vision platform with model serving and a personalized AI nutrition coach.',
      outcome: 'The food classifier reached 92.44% accuracy and was shipped as a usable web product.',
    },
    role: 'AI Engineer',
    image: '/nutrify-landing.jpg',
    imageWidth: 1600,
    imageHeight: 900,
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
    story: {
      problem: 'Retention teams need to identify customers at risk of leaving before the contract ends.',
      build: 'A classification workflow using demographic, service, billing, and contract data from 7,043 customers.',
      outcome: 'Logistic Regression delivered an 84.26% ROC-AUC and clear churn-driving factors.',
    },
    role: 'Data Scientist',
    image: '/customer-churn-preview.png',
    imageWidth: 1057,
    imageHeight: 547,
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
    story: {
      problem: 'Credit decisions need a consistent way to estimate borrower default risk from mixed financial data.',
      build: 'A classification pipeline using demographic, financial, and loan features with model comparison.',
      outcome: 'Random Forest was selected at 93.23% accuracy and a 93.11% ROC-AUC.',
    },
    role: 'Machine Learning',
    image: null,
    alt: 'Credit risk prediction project',
    fallbackLabel: 'Classification model',
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
    story: {
      problem: 'Campaign data was too dense to quickly reveal which customer segments were most likely to convert.',
      build: 'Six business-focused SQL analyses using CTEs, window functions, and customer segmentation.',
      outcome: 'The analysis surfaced a 64.73% conversion rate among customers with previous campaign success.',
    },
    role: 'Data Analyst',
    image: null,
    alt: 'Bank marketing SQL analytics project',
    fallbackLabel: 'SQL analysis',
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
    story: {
      problem: 'Churn patterns across contracts, services, payments, and tenure were difficult to monitor in raw tables.',
      build: 'A Power BI dashboard with focused KPIs, DAX measures, and decision-ready segment views.',
      outcome: 'The final PBIX brings three core KPIs and four key visualizations into one clear monitoring view.',
    },
    role: 'BI Developer',
    image: '/telco-dashboard-preview.jpg',
    imageWidth: 957,
    imageHeight: 537,
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
  return (
    <section id="projects" className="section-frame projects-cases-section">
      <div className="projects-cases-wrap max-w-[1100px] mx-auto w-full">
        <header className="projects-cases-intro reveal">
          <div>
            <p className="section-kicker">04 / Projects</p>
            <h2>Technical case studies</h2>
          </div>
          <div>
            <p className="projects-cases-summary">
              Five practical projects across AI engineering, machine learning, SQL,
              and business intelligence. Each case shows the problem, technical approach,
              and verified output.
            </p>
            <AnimatedLink
              href="https://github.com/rayasesan"
              target="_blank"
              rel="noopener noreferrer"
            >
              View all on GitHub
            </AnimatedLink>
          </div>
        </header>

        <div className="project-case-list" role="list">
          {projects.map((project, index) => (
            <article
              key={project.id}
              className={`project-case reveal ${index % 2 === 1 ? 'is-reversed' : ''}`}
              role="listitem"
            >
              <ProjectCaseDetails project={project} index={index} />
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}

function ProjectCaseDetails({ project, index }) {
  return (
    <div className="project-case-content">
      <div className="project-case-media">
        {project.image ? (
          <img
            src={project.image}
            alt={project.alt}
            width={project.imageWidth}
            height={project.imageHeight}
            loading="lazy"
          />
        ) : (
          <div className="project-case-fallback" aria-label={project.alt}>
            <span>{String(index + 1).padStart(2, '0')}</span>
            <p>{project.fallbackLabel}</p>
          </div>
        )}
      </div>

      <div className="project-case-copy">
        <div className="project-case-copy-topline">
          <p className="project-case-count">Case {String(index + 1).padStart(2, '0')} / 05</p>
          <p className="project-case-category">{project.category}</p>
        </div>
        <h3>{project.title}</h3>
        <p className="project-case-role">Role · {project.role}</p>

        <dl className="project-case-story">
          <div>
            <dt>Problem</dt>
            <dd>{project.story.problem}</dd>
          </div>
          <div>
            <dt>Built</dt>
            <dd>{project.story.build}</dd>
          </div>
          <div>
            <dt>Outcome</dt>
            <dd>{project.story.outcome}</dd>
          </div>
        </dl>

        <p className="project-case-tech-label">Technology</p>
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
            >
              {link.label}
            </AnimatedLink>
          ))}
        </div>
      </div>
    </div>
  );
}
