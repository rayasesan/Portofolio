import { useState } from 'react';

export default function Projects() {
  const [filter, setFilter] = useState('all');

  const filters = [
    { id: 'all', label: 'All' },
    { id: 'ml', label: 'ML' },
    { id: 'sql', label: 'SQL' },
    { id: 'bi', label: 'BI' },
  ];

  const projects = [
    {
      id: 1,
      category: 'ml',
      categoryLabel: 'MACHINE LEARNING',
      title: 'Customer Churn Prediction',
      desc: 'Logistic Regression & Random Forest models. Full EDA, feature engineering, evaluation, and retention insights.',
      image: 'public/churn_prediction_ml.jpg',
      tags: ['Python', 'Scikit-learn', 'Pandas', 'Random Forest'],
      stats: [
        { val: '2', label: 'models' },
        { val: 'pipeline', label: 'E2E' },
        { val: 'Retention', label: 'insights' },
      ],
      featured: true,
      links: { notebook: '#', code: '#' }
    },
    {
      id: 2,
      category: 'ml',
      categoryLabel: 'MACHINE LEARNING',
      title: 'Credit Risk Prediction',
      desc: 'Classification models for credit risk assessment. Business insights for lending decisions and default analysis.',
      image: 'public/credit_risk_ml.jpg',
      tags: ['Python', 'Classification', 'Scikit-learn'],
      stats: [
        { val: 'Risk', label: 'assessment' },
        { val: 'Business', label: 'insights' },
        { val: 'Lending', label: 'decisions' },
      ],
      links: { notebook: '#', code: '#' }
    },
    {
      id: 3,
      category: 'sql',
      categoryLabel: 'DATA ANALYSIS — SQL',
      title: 'Bank Marketing SQL Analytics',
      desc: 'Advanced SQL with CTEs, Window Functions, CASE WHEN, GROUP BY for customer segmentation and campaign analysis.',
      image: 'public/sql_analytics.jpg',
      tags: ['SQL', 'SQLite', 'CTEs', 'Window Func'],
      stats: [
        { val: 'Advanced', label: 'queries' },
        { val: 'Segmentation', label: '' },
        { val: 'Campaign', label: 'analysis' },
      ],
      links: { notebook: '#', code: '#' }
    },
    {
      id: 4,
      category: 'bi',
      categoryLabel: 'BUSINESS INTELLIGENCE',
      title: 'Telco Churn Dashboard',
      desc: 'Interactive Power BI dashboard with KPI tracking, churn analysis by contract, internet service, payment method, and tenure.',
      image: 'public/powerbi_dashboard.jpg',
      tags: ['Power BI', 'KPI', 'DAX', 'Dashboard'],
      stats: [
        { val: 'Interactive', label: '' },
        { val: 'Multi', label: '-dimension' },
        { val: 'KPI', label: 'driven' },
      ],
      links: { dashboard: '#' }
    }
  ];

  const filteredProjects = projects.filter(
    proj => filter === 'all' || proj.category === filter
  );

  return (
    <section id="projects" className="py-20 lg:py-24 border-t border-r-steel">
      <div className="max-w-[1100px] mx-auto px-5">
        <div className="reveal flex flex-col md:flex-row md:items-end md:justify-between gap-4 mb-12">
          <div>
            <p className="text-r-red text-[9px] font-bold tracking-[0.25em] uppercase mb-2">03 / Projects</p>
            <h2 className="text-white font-black text-3xl lg:text-4xl uppercase tracking-tight leading-[0.9]">
              Things I've Built
            </h2>
          </div>
          <div className="flex gap-2">
            {filters.map(f => (
              <button
                key={f.id}
                onClick={() => setFilter(f.id)}
                className={`text-[9px] font-bold tracking-[0.18em] uppercase px-4 py-1.5 border rounded transition-all ${filter === f.id
                    ? 'border-r-red bg-r-red/10 text-r-red'
                    : 'border-r-steel text-r-silver hover:text-r-red hover:border-r-red/40'
                  }`}
              >
                {f.label}
              </button>
            ))}
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          {filteredProjects.map((proj) => (
            <div
              key={proj.id}
              className="proj-card reveal bg-r-gray border border-r-steel card-lift rounded overflow-hidden"
              style={{
                animation: 'fadeUp 0.5s cubic-bezier(0.22, 1, 0.36, 1) forwards'
              }}
            >
              <div className="aspect-[16/10] overflow-hidden relative">
                <img
                  src={proj.image}
                  alt={proj.title}
                  className="proj-img w-full h-full object-cover transition-transform duration-700"
                  style={{ filter: 'grayscale(60%) contrast(1.1) brightness(0.7)' }}
                />
                <div className="proj-over absolute inset-0 bg-black/70 flex items-center justify-center gap-3">
                  {proj.links.notebook && (
                    <a href={proj.links.notebook} className="bg-r-red text-black text-[8px] font-black tracking-[0.15em] uppercase px-4 py-1.5 rounded hover:bg-r-red-light transition-colors">
                      Notebook
                    </a>
                  )}
                  {proj.links.code && (
                    <a href={proj.links.code} className="border border-white text-white text-[8px] font-black tracking-[0.15em] uppercase px-4 py-1.5 rounded hover:bg-white hover:text-black transition-all">
                      Code
                    </a>
                  )}
                  {proj.links.dashboard && (
                    <a href={proj.links.dashboard} className="bg-r-red text-black text-[8px] font-black tracking-[0.15em] uppercase px-4 py-1.5 rounded hover:bg-r-red-light transition-colors">
                      Dashboard
                    </a>
                  )}
                </div>
                {proj.featured && (
                  <span className="absolute top-3 right-3 bg-r-red text-black text-[7px] font-black tracking-[0.15em] uppercase px-2 py-0.5 rounded">
                    Featured
                  </span>
                )}
              </div>
              <div className="p-5">
                <p className="text-r-red text-[8px] font-bold tracking-[0.2em] uppercase mb-1.5">{proj.categoryLabel}</p>
                <h3 className="text-white font-bold text-base uppercase tracking-tight mb-2">{proj.title}</h3>
                <p className="text-r-light text-[11px] leading-relaxed mb-3">{proj.desc}</p>
                <div className="flex flex-wrap gap-1.5 mb-3">
                  {proj.tags.map((tag, idx) => (
                    <span key={idx} className="text-[7px] font-bold tracking-wider uppercase px-2 py-0.5 bg-r-steel text-r-light rounded">
                      {tag}
                    </span>
                  ))}
                </div>
                <div className="flex gap-5 pt-3 border-t border-r-steel text-[9px] text-r-silver">
                  {proj.stats.map((stat, idx) => (
                    <span key={idx}>
                      {stat.label && stat.val.match(/^[0-9]+$/) ? (
                        <><span className="text-white font-bold">{stat.val}</span> {stat.label}</>
                      ) : (
                        <><span className="text-white font-bold">{stat.val}</span> {stat.label}</>
                      )}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
