const experiences = [
  {
    date: 'FEB — JUL 2026',
    title: 'AI Engineer Graduate with Distinction',
    place: 'Coding Camp 2026 / DBS Foundation x Dicoding',
    description: 'Completed 934 hours of structured learning and contributed as an AI Engineer to Nutrify, combining computer vision, FastAPI model serving, and a Generative AI nutrition coach.',
    tools: ['TensorFlow', 'Computer Vision', 'FastAPI', 'Generative AI'],
  },
  {
    date: 'SEP 2025 — JAN 2026',
    title: 'Machine Learning Cohort',
    place: 'Asah / Dicoding x Accenture',
    description: 'Built end-to-end machine learning projects covering data cleaning, exploratory analysis, feature engineering, model training, evaluation, and business-oriented interpretation.',
    tools: ['Python', 'Scikit-learn', 'EDA', 'Model Evaluation'],
  },
  {
    date: '2024 — PRESENT',
    title: 'Laboratory Assistant',
    place: 'Gunadarma University',
    description: 'Support practical computing sessions and technical exercises while strengthening mentoring, communication, and structured problem-solving skills.',
    tools: ['Technical Mentoring', 'Teaching', 'Communication'],
  },
];

export default function Experience() {
  return (
    <section id="experience" className="section experience-section">
      <div className="page-shell">
        <header className="section-title reveal">
          <p className="section-index">02 / Experience</p>
          <h2>Experience</h2>
          <p>Learning through real delivery, collaboration, and deliberate technical practice.</p>
        </header>

        <div className="experience-list">
          {experiences.map((item, index) => (
            <article className="experience-row reveal" key={item.title}>
              <p className="experience-row__number">{String(index + 1).padStart(2, '0')}</p>
              <p className="experience-row__date">{item.date}</p>
              <div className="experience-row__body">
                <h3>{item.title}</h3>
                <p className="experience-row__place">{item.place}</p>
                <p>{item.description}</p>
                <ul aria-label={`${item.title} skills`}>
                  {item.tools.map((tool) => <li key={tool}>{tool}</li>)}
                </ul>
              </div>
            </article>
          ))}
        </div>

        <aside className="experience-note reveal">
          <p className="section-index">Education / Focus</p>
          <p>S1 Informatics Engineering at Gunadarma University, Sep 2023 — present.</p>
          <p>Currently focused on ML Engineering, Data Science, backend AI systems, and MLOps fundamentals.</p>
        </aside>
      </div>
    </section>
  );
}
