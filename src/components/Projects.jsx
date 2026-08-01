import { useEffect, useState } from 'react';
import AnimatedLink from './AnimatedLink';

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
    showcaseImages: {
      landing: '/nutrify-landing.jpg',
      scanner: '/nutrify-preview.jpg',
    },
    galleryImages: [
      { src: '/nutrify-landing.jpg', label: 'Landing Page' },
      { src: '/nutrify-preview.jpg', label: 'Food Scanner' },
    ],
    fallbackTitle: 'Nutrify Scanner Preview',
    fallbackText: 'Food scanner result with nutrition breakdown, health score, and AI recommendation.',
    alt: 'Landing page and food scanner preview of Nutrify AI-powered nutrition platform',
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
  const [preview, setPreview] = useState(null);

  const filteredProjects = projects.filter(
    (project) => filter === 'all' || project.category === filter
  );
  const featuredProject = filteredProjects.find((project) => project.featured);
  const supportingProjects = filteredProjects.filter((project) => !project.featured);
  const projectCountLabel = `${filteredProjects.length} ${filteredProjects.length === 1 ? 'Project' : 'Projects'} Showing`;
  const openProjectPreview = (project, activeIndex = 0) => {
    const images = project.galleryImages ?? (project.image ? [{ src: project.image, label: project.title }] : []);

    if (!images.length) {
      return;
    }

    setPreview({ title: project.title, images, activeIndex });
  };

  return (
    <section id="projects" className="py-20 lg:py-24 border-t border-r-steel">
      <div className="max-w-[1100px] mx-auto px-5">
        <div className="section-heading reveal flex flex-col md:flex-row md:items-end md:justify-between gap-6 mb-14">
          <div>
            <p className="section-kicker text-r-red">04 / Selected work</p>
            <h2 className="text-white text-4xl lg:text-6xl leading-[0.95]">
              Built with purpose
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
                className={`project-filter-btn min-h-10 inline-flex items-center gap-2 text-[12px] font-medium px-4 py-2 border rounded transition-all ${filter === filterItem.id
                  ? 'is-active border-r-red bg-r-red/10 text-r-red'
                  : 'border-r-steel text-r-silver hover:text-r-red hover:border-r-red/40'
                }`}
                aria-pressed={filter === filterItem.id}
              >
                <span>{filterItem.label}</span>
                <span className="project-filter-count">{filterCounts[filterItem.id]}</span>
              </button>
            ))}
          </div>
        </div>

        <p className="project-count reveal text-r-silver text-[11px] font-medium mb-5" aria-live="polite">
          {projectCountLabel}
        </p>

        <div key={filter} className="projects-results">
          {featuredProject && (
            <FeaturedProject
              project={featuredProject}
              index={0}
              onOpenPreview={openProjectPreview}
            />
          )}

          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            {supportingProjects.map((project, index) => (
              <ProjectCard
                key={project.id}
                project={project}
                index={index + (featuredProject ? 1 : 0)}
                onOpenPreview={openProjectPreview}
              />
            ))}
          </div>
        </div>
      </div>
      <ProjectPreviewModal preview={preview} onClose={() => setPreview(null)} onSelect={setPreview} />
    </section>
  );
}

function FeaturedProject({ project, index, onOpenPreview }) {
  return (
    <article
      className="proj-card project-card-shell project-featured-card reveal bg-r-gray border border-r-steel card-lift rounded overflow-hidden mb-5"
      style={{ '--project-index': index }}
    >
      <div className="project-featured-media aspect-[16/9] min-h-[250px] max-h-[470px] overflow-hidden relative bg-r-dark">
        <button
          type="button"
          className="project-media-button"
          onClick={() => onOpenPreview(project)}
          aria-label={`View ${project.title} screenshots`}
        >
          {project.showcaseImages ? (
            <NutrifyShowcase project={project} />
          ) : (
            <>
              <ProjectImage project={project} />
              <div className="project-media-shade" aria-hidden="true"></div>
            </>
          )}
          <span className="project-media-expand" aria-hidden="true">
            <span className="iconify" data-icon="lucide:expand" data-width="16"></span>
          </span>
          <span className="project-featured-label absolute top-4 right-4 text-[10px] font-semibold px-3 py-1.5 rounded">
            Case study
          </span>
        </button>
      </div>
      <div className="p-6 lg:p-9 grid grid-cols-1 lg:grid-cols-[1.18fr_0.82fr] gap-8 lg:gap-12">
        <div>
          <p className="text-r-red text-[10px] font-semibold tracking-[0.1em] mb-2">{project.categoryLabel}</p>
          <h3 className="text-white text-3xl lg:text-4xl leading-[1] mb-4">{project.title}</h3>
          <p className="text-r-light text-sm leading-[1.75] mb-5">{project.desc}</p>
          <div className="border-t border-r-steel pt-4">
            <p className="text-r-red text-[11px] font-semibold mb-1.5">Role — {project.role}</p>
            <p className="text-r-light text-xs leading-[1.7]">{project.contribution}</p>
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

function NutrifyShowcase({ project }) {
  const [hasError, setHasError] = useState(false);

  if (hasError) {
    return <ProjectImage project={project} />;
  }

  return (
    <div className="nutrify-showcase" aria-label={project.alt}>
      <img
        src={project.showcaseImages.landing}
        alt="Nutrify landing page preview"
        className="nutrify-showcase-main"
        loading="eager"
        onError={() => setHasError(true)}
      />
      <div className="nutrify-showcase-vignette" aria-hidden="true"></div>
      <div className="nutrify-showcase-labels" aria-hidden="true">
        <span>Landing Page</span>
        <span>Food Scanner</span>
      </div>
      <div className="nutrify-scanner-preview">
        <img
          src={project.showcaseImages.scanner}
          alt="Nutrify food scanner result preview"
          loading="eager"
          onError={() => setHasError(true)}
        />
      </div>
    </div>
  );
}

function ProjectCard({ project, index, onOpenPreview }) {
  const hasPreview = Boolean(project.image);

  return (
    <article
      className="proj-card project-card-shell reveal bg-r-gray border border-r-steel card-lift rounded overflow-hidden"
      style={{ '--project-index': index }}
    >
      <div className="aspect-[16/10] overflow-hidden relative">
        {hasPreview ? (
          <button
            type="button"
            className="project-media-button"
            onClick={() => onOpenPreview(project)}
            aria-label={`View ${project.title} preview`}
          >
            <ProjectImage project={project} />
            <span className="project-media-expand" aria-hidden="true">
              <span className="iconify" data-icon="lucide:expand" data-width="16"></span>
            </span>
          </button>
        ) : (
          <ProjectImage project={project} />
        )}
      </div>
      <div className="p-6 lg:p-7">
        <p className="text-r-red text-[10px] font-semibold tracking-[0.1em] mb-2">{project.categoryLabel}</p>
        <h3 className="text-white text-2xl leading-tight mb-3">{project.title}</h3>
        <p className="text-r-light text-xs leading-[1.7] mb-4">{project.desc}</p>
        <ProjectTags tags={project.tags} />
        <ProjectStats stats={project.stats} />
        <ProjectActions links={project.links} />
      </div>
    </article>
  );
}

function ProjectPreviewModal({ preview, onClose, onSelect }) {
  useEffect(() => {
    if (!preview) {
      return undefined;
    }

    const previousOverflow = document.body.style.overflow;
    document.body.style.overflow = 'hidden';

    const handleKeyDown = (event) => {
      if (event.key === 'Escape') {
        onClose();
      }
    };

    window.addEventListener('keydown', handleKeyDown);

    return () => {
      document.body.style.overflow = previousOverflow;
      window.removeEventListener('keydown', handleKeyDown);
    };
  }, [preview, onClose]);

  if (!preview) {
    return null;
  }

  const activeImage = preview.images[preview.activeIndex] ?? preview.images[0];

  return (
    <div className="project-preview-modal" role="dialog" aria-modal="true" aria-label={`${preview.title} image preview`}>
      <button type="button" className="project-preview-backdrop" onClick={onClose} aria-label="Close preview"></button>
      <div className="project-preview-panel">
        <div className="project-preview-topbar">
          <div>
            <p className="text-r-red text-[10px] font-semibold tracking-[0.1em]">Project preview</p>
            <h3 className="text-white text-xl md:text-2xl">{preview.title}</h3>
          </div>
          <button type="button" className="project-preview-close" onClick={onClose} aria-label="Close preview">
            <span className="iconify" data-icon="lucide:x" data-width="18"></span>
          </button>
        </div>

        <div className="project-preview-image-wrap">
          <img src={activeImage.src} alt={`${preview.title} - ${activeImage.label}`} />
        </div>

        {preview.images.length > 1 && (
          <div className="project-preview-tabs" aria-label="Preview images">
            {preview.images.map((image, index) => (
              <button
                key={image.src}
                type="button"
                className={index === preview.activeIndex ? 'is-active' : ''}
                onClick={() => onSelect({ ...preview, activeIndex: index })}
                aria-pressed={index === preview.activeIndex}
              >
                {image.label}
              </button>
            ))}
          </div>
        )}
      </div>
    </div>
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
      <p className="text-white text-2xl mb-2">{title}</p>
      <p className="text-r-light text-xs leading-relaxed max-w-xs">{text}</p>
    </div>
  );
}

function ProjectTags({ tags }) {
  return (
    <div className="project-tags flex flex-wrap gap-x-4 gap-y-1.5 mb-5">
      {tags.map((tag) => (
        <span key={tag} className="text-[11px] font-medium text-r-silver">
          {tag}
        </span>
      ))}
    </div>
  );
}

function ProjectStats({ stats }) {
  return (
    <div className="project-stats grid grid-cols-1 sm:grid-cols-3 border-y border-r-steel text-r-silver mb-5">
      {stats.map((stat) => (
        <div key={`${stat.value}-${stat.label}`} className="py-3 pr-3">
          <p className="text-white text-[13px] font-semibold leading-tight">{stat.value}</p>
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
        <AnimatedLink
          key={link.href}
          href={link.href}
          target="_blank"
          rel="noopener noreferrer"
          aria-label={link.ariaLabel}
          compact
          variant={link.primary ? 'red' : 'light'}
        >
          {link.label}
        </AnimatedLink>
      ))}
    </div>
  );
}
