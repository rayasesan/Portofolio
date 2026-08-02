const experiences = [
  {
    date: 'Feb — Jul 2026', title: 'AI Engineer Graduate with Distinction', place: 'Coding Camp 2026 / DBS Foundation x Dicoding',
    description: 'Completed 934 hours of structured learning and contributed as an AI Engineer to Nutrify, combining computer vision, FastAPI model serving, and a Generative AI nutrition coach.',
  },
  {
    date: 'Sep 2025 — Jan 2026', title: 'Machine Learning Cohort', place: 'Asah / Dicoding x Accenture',
    description: 'Built end-to-end machine learning projects covering data cleaning, exploratory analysis, feature engineering, training, evaluation, and business interpretation.',
  },
  {
    date: '2024 — Present', title: 'Laboratory Assistant', place: 'Gunadarma University',
    description: 'Support practical computing sessions and technical exercises while strengthening mentoring, communication, and structured problem-solving skills.',
  },
];

export default function Experience() {
  return (
    <section id="experience" className="experience-section solid-panel">
      <header className="experience-heading reveal"><p className="scene-kicker">02 / Experience</p><h2>Experience</h2></header>
      <div className="experience-list">
        {experiences.map((item, index) => (
          <article className="experience-row reveal" key={item.title}>
            <p>{String(index + 1).padStart(2, '0')} / {item.date}</p>
            <h3>{item.title}</h3>
            <strong>{item.place}</strong>
            <span>{item.description}</span>
          </article>
        ))}
      </div>
      <aside className="education-note reveal"><strong>S1 Informatics Engineering</strong><span>Gunadarma University / Sep 2023 — present</span></aside>
    </section>
  );
}
