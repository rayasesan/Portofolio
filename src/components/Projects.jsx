import { useState } from 'react';

const filters = [
  { id: 'all', label: 'All', icon: 'lucide:layout-grid' },
  { id: 'ai', label: 'AI/ML', icon: 'lucide:brain-circuit' },
  { id: 'sql', label: 'SQL', icon: 'lucide:database' },
  { id: 'bi', label: 'BI', icon: 'lucide:bar-chart-3' },
];

const projects = [
  {
    id: 'nutrify',
    category: 'ai',
    categoryLabel: 'AI ENGINEERING / COMPUTER VISION / GENERATIVE AI',
    title: 'Nutrify - AI-Powered Nutrition Platform',
    desc: 'An AI-powered nutrition platform that identifies Indonesian food from images, analyzes nutritional information, and provides personalized recommendations through an AI nutrition coach.',
    role: 'AI Engineer',
    contribution: 'Developed the Indonesian food classification pipeline using TensorFlow and transfer learning, implemented custom TensorFlow components, deployed model inference through FastAPI, and integrated Gemini-based nutrition recommendations with the application backend.',
    image: '/nutrify-preview.jpg',
    imageTone: 'natural',
    imageObjectPosition: 'center top',
    fallbackTitle: 'Nutrify Scanner Preview',
    fallbackText: 'Food scanner result with nutrition breakdown, health score, and AI recommendation.',
    alt: 'Screenshot preview of Nutrify AI-powered nutrition platform',
    tags: ['Python', 'TensorFlow', 'Keras', 'Computer Vision', 'Transfer Learning', 'FastAPI', 'Gemini API', 'REST API', 'TensorBoard'],
    stats: [
      { value: '92.44%', label: 'Model Accuracy' },
      { value: 'FastAPI', label: 'Model Serving' },
      { value: 'Gemini', label: 'AI Nutrition Coach' },
    ],
    featured: true,
    links: [
      {
        label: 'Live Demo',
        href: 'https://nutrify.biz.id',
        ariaLabel: 'Open Nutrify live application',
        primary: true,
      },
      {
        label: 'Main Repository',
        href: 'https://github.com/coding-camp-project/Project-Utama',
        ariaLabel: 'Open Nutrify main repository',
      },
      {
        label: 'AI Repository',
        href: 'https://github.com/coding-camp-project/AI',
        ariaLabel: 'Open Nutrify AI repository',
      },
    ],
  },
  {
    id: 'customer-churn',
    category: 'ai',
    categoryLabel: 'MACHINE LEARNING',
    title: 'Customer Churn Prediction',
    desc: 'Predicts customer churn from telco demographic, service, billing, and contract data using Logistic Regression and Random Forest. The final model supports retention analysis by identifying high-risk customers and churn-driving factors.',
    image: '/customer-churn-preview.png',
    fallbackTitle: 'Customer Churn Prediction',
    fallbackText: 'Machine learning model evaluation and churn insight visuals.',
    alt: 'Preview image for Customer Churn Prediction project',
    tags: ['Python', 'Scikit-learn', 'Pandas', 'Logistic Regression', 'Random Forest'],
    stats: [
      { value: '7,043', label: 'Customers' },
      { value: '84.26%', label: 'ROC-AUC' },
      { value: 'Logistic Regression', label: 'Best Model' },
    ],
    links: [
      {
        label: 'View Repository',
        href: 'https://github.com/rayasesan/customer-churn-prediction',
        ariaLabel: 'Open Customer Churn Prediction repository',
        primary: true,
      },
      {
        label: 'Notebook',
        href: 'https://github.com/rayasesan/customer-churn-prediction/blob/main/customer_churn_prediction.ipynb',
        ariaLabel: 'Open Customer Churn Prediction notebook',
      },
    ],
  },
  {
    id: 'credit-risk',
    category: 'ai',
    categoryLabel: 'MACHINE LEARNING',
    title: 'Credit Risk Prediction',
    desc: 'Classifies borrower default risk using demographic, financial, and loan-related features. Random Forest outperformed Logistic Regression and was selected as the final model for credit risk assessment.',
    image: null,
    fallbackTitle: 'Preview Coming Soon',
    fallbackText: 'Project visual will be added after the real screenshot is ready.',
    alt: 'Preview image for Credit Risk Prediction project',
    tags: ['Python', 'Scikit-learn', 'Classification', 'Random Forest', 'Feature Engineering'],
    stats: [
      { value: '93.23%', label: 'Accuracy' },
      { value: '93.11%', label: 'ROC-AUC' },
      { value: 'Random Forest', label: 'Best Model' },
    ],
    links: [
      {
        label: 'View Repository',
        href: 'https://github.com/rayasesan/credit-risk-prediction',
        ariaLabel: 'Open Credit Risk Prediction repository',
        primary: true,
      },
      {
        label: 'Notebook',
        href: 'https://github.com/rayasesan/credit-risk-prediction/blob/main/credit_risk_prediction.ipynb',
        ariaLabel: 'Open Credit Risk Prediction notebook',
      },
    ],
  },
  {
    id: 'bank-marketing-sql',
    category: 'sql',
    categoryLabel: 'DATA ANALYSIS / SQL',
    title: 'Bank Marketing SQL Analytics',
    desc: 'Analyzes a bank marketing campaign dataset with SQLite to find customer segments and campaign factors linked to term deposit subscriptions. The analysis covers conversion by job, education, contact channel, campaign timing, and previous campaign outcome.',
    image: null,
    fallbackTitle: 'Preview Coming Soon',
    fallbackText: 'Project visual will be added after the real screenshot is ready.',
    alt: 'Preview image for Bank Marketing SQL Analytics project',
    tags: ['SQL', 'SQLite', 'CTE', 'Window Functions', 'Segmentation'],
    stats: [
      { value: '45,211', label: 'Records' },
      { value: '6', label: 'Business Questions' },
      { value: '64.73%', label: 'Previous Success Conversion' },
    ],
    links: [
      {
        label: 'View Repository',
        href: 'https://github.com/rayasesan/bank-marketing-sql-analysis',
        ariaLabel: 'Open Bank Marketing SQL Analysis repository',
        primary: true,
      },
      {
        label: 'SQL File',
        href: 'https://github.com/rayasesan/bank-marketing-sql-analysis/blob/main/bank_marketing_analysis.sql',
        ariaLabel: 'Open Bank Marketing SQL analysis file',
      },
    ],
  },
  {
    id: 'telco-dashboard',
    category: 'bi',
    categoryLabel: 'BUSINESS INTELLIGENCE',
    title: 'Telco Churn Dashboard',
    desc: 'Power BI dashboard analyzing telco churn behavior through customer, churn, and churn-rate KPIs. The report visualizes churn by contract type, internet service, payment method, and tenure group.',
    image: '/telco-dashboard-preview.jpg',
    fallbackTitle: 'Telco Churn Dashboard',
    fallbackText: 'Power BI dashboard preview and KPI summary.',
    alt: 'Preview image for Telco Churn Dashboard project',
    tags: ['Power BI', 'DAX', 'Data Visualization', 'Dashboard'],
    stats: [
      { value: '3', label: 'KPIs' },
      { value: '4', label: 'Visualizations' },
      { value: 'PBIX', label: 'Dashboard File' },
    ],
    links: [
      {
        label: 'View Repository',
        href: 'https://github.com/rayasesan/telco-customer-churn-dashboard-powerbi',
        ariaLabel: 'Open Telco Churn Dashboard repository',
        primary: true,
      },
    ],
  },
];

const filterCounts = filters.reduce((counts, filterItem) => {
  counts[filterItem.id] = filterItem.id === 'all'
    ? projects.length
    : projects.filter((project) => project.category === filterItem.id).length;
  return counts;
}, {});

export default function Projects() {
  const [filter, setFilter] = useState('all');

  const filteredProjects = projects.filter(
    (project) => filter === 'all' || project.category === filter
  );
  const featuredProject = filteredProjects.find((project) => project.featured);
  const supportingProjects = filteredProjects.filter((project) => !project.featured);
  const projectCountLabel = `${filteredProjects.length} ${filteredProjects.length === 1 ? 'Project' : 'Projects'} Showing`;

  return (
    <section id="projects" className="py-20 lg:py-24 border-t border-r-steel">
      <div className="max-w-[1100px] mx-auto px-5">
        <div className="reveal flex flex-col md:flex-row md:items-end md:justify-between gap-4 mb-12">
          <div>
            <p className="text-r-red text-[10px] font-bold tracking-[0.25em] uppercase mb-2">03 / Projects</p>
            <h2 className="text-white font-black text-3xl lg:text-4xl uppercase tracking-tight leading-[0.9]">
              Things I've Built
            </h2>
          </div>
          <div className="flex flex-wrap gap-2" aria-label="Project filters">
            {filters.map((filterItem) => (
              <button
                key={filterItem.id}
                type="button"
                onClick={() => {
                  if (filter !== filterItem.id) {
                    setFilter(filterItem.id);
                  }
                }}
                className={`project-filter-btn min-h-10 inline-flex items-center gap-2 text-[10px] font-bold tracking-[0.18em] uppercase px-4 py-2 border rounded transition-all ${filter === filterItem.id
                  ? 'is-active border-r-red bg-r-red/10 text-r-red'
                  : 'border-r-steel text-r-silver hover:text-r-red hover:border-r-red/40'
                }`}
                aria-pressed={filter === filterItem.id}
              >
                <span className="iconify" data-icon={filterItem.icon} data-width="13"></span>
                <span>{filterItem.label}</span>
                <span className="project-filter-count">{filterCounts[filterItem.id]}</span>
              </button>
            ))}
          </div>
        </div>

        <p className="project-count reveal visible text-r-silver text-[10px] font-bold tracking-[0.18em] uppercase mb-4" aria-live="polite">
          {projectCountLabel}
        </p>

        <div key={filter} className="projects-results">
          {featuredProject && <FeaturedProject project={featuredProject} index={0} />}

          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            {supportingProjects.map((project, index) => (
              <ProjectCard
                key={project.id}
                project={project}
                index={index + (featuredProject ? 1 : 0)}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

function handleProjectPointerMove(event) {
  const rect = event.currentTarget.getBoundingClientRect();
  event.currentTarget.style.setProperty('--pointer-x', `${event.clientX - rect.left}px`);
  event.currentTarget.style.setProperty('--pointer-y', `${event.clientY - rect.top}px`);
}

function FeaturedProject({ project, index }) {
  return (
    <article
      className="proj-card project-card-shell project-featured-card reveal visible bg-r-gray border border-r-red/30 card-lift rounded overflow-hidden mb-4"
      onPointerMove={handleProjectPointerMove}
      style={{ '--project-index': index }}
    >
      <div className="project-featured-media aspect-[16/9] min-h-[250px] max-h-[470px] overflow-hidden relative bg-r-dark">
        <ProjectImage project={project} />
        <div className="project-media-shade" aria-hidden="true"></div>
        <span className="absolute top-3 right-3 bg-r-red text-black text-[10px] font-black tracking-[0.15em] uppercase px-2.5 py-1 rounded">
          Featured
        </span>
      </div>
      <div className="p-5 lg:p-7 grid grid-cols-1 lg:grid-cols-[1.12fr_0.88fr] gap-6">
        <div>
          <p className="text-r-red text-[10px] font-bold tracking-[0.2em] uppercase mb-2">{project.categoryLabel}</p>
          <h3 className="text-white font-black text-2xl lg:text-3xl uppercase tracking-tight leading-[0.95] mb-3">{project.title}</h3>
          <p className="text-r-light text-sm leading-relaxed mb-4">{project.desc}</p>
          <div className="border-y border-r-steel py-3">
            <p className="text-r-red text-[10px] font-bold tracking-[0.16em] uppercase mb-1">Role: {project.role}</p>
            <p className="text-r-light text-xs leading-relaxed">{project.contribution}</p>
          </div>
        </div>
        <div className="flex flex-col">
          <ProjectTags tags={project.tags} />
          <ProjectStats stats={project.stats} />
          <ProjectActions links={project.links} />
        </div>
      </div>
    </article>
  );
}

function ProjectCard({ project, index }) {
  return (
    <article
      className="proj-card project-card-shell reveal visible bg-r-gray border border-r-steel card-lift rounded overflow-hidden"
      onPointerMove={handleProjectPointerMove}
      style={{ '--project-index': index }}
    >
      <div className="aspect-[16/10] overflow-hidden relative">
        <ProjectImage project={project} />
      </div>
      <div className="p-5">
        <p className="text-r-red text-[10px] font-bold tracking-[0.2em] uppercase mb-1.5">{project.categoryLabel}</p>
        <h3 className="text-white font-bold text-base uppercase tracking-tight mb-2">{project.title}</h3>
        <p className="text-r-light text-xs leading-relaxed mb-3">{project.desc}</p>
        <ProjectTags tags={project.tags} />
        <ProjectStats stats={project.stats} />
        <ProjectActions links={project.links} />
      </div>
    </article>
  );
}

function ProjectImage({ project }) {
  const [hasError, setHasError] = useState(false);
  const imageClassName = project.imageFit === 'contain'
    ? 'proj-img w-full h-full object-contain object-center bg-r-dark transition-transform duration-700'
    : 'proj-img w-full h-full object-cover transition-transform duration-700';
  const imageStyle = project.imageTone === 'natural'
    ? { filter: 'contrast(1.02) saturate(1.05) brightness(0.98)', objectPosition: project.imageObjectPosition }
    : { filter: 'grayscale(45%) contrast(1.08) brightness(0.72)', objectPosition: project.imageObjectPosition };

  if (hasError || !project.image) {
    return <ImageFallback title={project.fallbackTitle} text={project.fallbackText} />;
  }

  return (
    <img
      src={project.image}
      alt={project.alt}
      onError={() => setHasError(true)}
      className={imageClassName}
      loading={project.featured ? 'eager' : 'lazy'}
      style={imageStyle}
    />
  );
}

function ImageFallback({ title, text }) {
  return (
    <div className="project-image-fallback h-full min-h-[220px] flex flex-col justify-end p-5">
      <span className="iconify text-r-red mb-4" data-icon="lucide:image-off" data-width="28"></span>
      <p className="text-white text-sm font-black uppercase tracking-[0.12em] mb-2">{title}</p>
      <p className="text-r-light text-xs leading-relaxed max-w-xs">{text}</p>
    </div>
  );
}

function ProjectTags({ tags }) {
  return (
    <div className="flex flex-wrap gap-1.5 mb-3">
      {tags.map((tag) => (
        <span key={tag} className="text-[10px] font-bold tracking-wider uppercase px-2 py-0.5 bg-r-steel text-r-light rounded">
          {tag}
        </span>
      ))}
    </div>
  );
}

function ProjectStats({ stats }) {
  return (
    <div className="grid grid-cols-1 sm:grid-cols-3 gap-2 pt-3 border-t border-r-steel text-r-silver mb-4">
      {stats.map((stat) => (
        <div key={`${stat.value}-${stat.label}`} className="bg-r-dark border border-r-steel rounded px-2.5 py-2">
          <p className="text-white text-xs font-bold leading-tight">{stat.value}</p>
          <p className="text-r-silver text-[10px] leading-tight mt-1">{stat.label}</p>
        </div>
      ))}
    </div>
  );
}

function ProjectActions({ links }) {
  return (
    <div className="flex flex-wrap gap-2 mt-auto">
      {links.map((link) => (
        <a
          key={link.href}
          href={link.href}
          target="_blank"
          rel="noopener noreferrer"
          aria-label={link.ariaLabel}
          className={`${link.primary
            ? 'bg-r-red text-black hover:bg-r-red-light'
            : 'border border-r-steel text-white hover:border-r-red hover:text-r-red'
          } inline-flex min-h-10 items-center justify-center px-4 py-2 rounded text-[10px] font-black tracking-[0.14em] uppercase transition-colors`}
        >
          {link.label}
        </a>
      ))}
    </div>
  );
}
