const capabilities = [
  {
    title: 'Model & reason',
    description: 'I prepare data, design experiments, compare models, and evaluate performance with clear assumptions and measurable results.',
    tools: 'Python / TensorFlow / Scikit-learn / Feature Engineering / Model Evaluation',
  },
  {
    title: 'Build and deploy, together',
    description: 'I turn trained models into usable APIs and product flows, keeping implementation decisions connected to the original problem.',
    tools: 'FastAPI / REST API / Streamlit / Model Serving / Docker Fundamentals',
  },
  {
    title: 'Insight without the noise',
    description: 'I translate raw data into practical findings through SQL, structured analysis, and decision-ready visual communication.',
    tools: 'SQL / Pandas / NumPy / Power BI / Data Visualization',
  },
];

export default function Skills() {
  return (
    <section id="skills" className="about-section">
      <article className="about-opening scene-panel">
        <div className="about-opening__copy reveal">
          <p className="scene-kicker">01 / About</p>
          <h2>Hey! I'm</h2>
        </div>
      </article>

      <article className="about-name scene-panel">
        <h2 className="reveal"><span>Raya</span><span>Sesan</span></h2>
        <p className="reveal">I design and engineer machine learning systems, turning raw data and complex requirements into practical AI experiences. I work across modeling, computer vision, APIs, and analytics.</p>
      </article>

      <article className="about-statement">
        <figure className="reveal">
          <img src="/foto4.jpg" alt="Raya Sesan Firdaus" width="783" height="862" loading="lazy" />
          <figcaption><strong>Raya Sesan</strong><span>Machine Learning Engineer</span></figcaption>
        </figure>
        <p className="about-statement__text reveal">I eliminate <span>the friction</span> between <span>models</span> and products.</p>
      </article>

      <section className="capability-panel">
        <header className="reveal"><p className="scene-kicker">How can I help?</p></header>
        {capabilities.map((capability) => (
          <article className="capability-row reveal" key={capability.title}>
            <h3>{capability.title}</h3>
            <p>{capability.description}</p>
            <span>{capability.tools}</span>
          </article>
        ))}
      </section>
    </section>
  );
}
