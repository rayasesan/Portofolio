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
      <article className="about-intro">
        <figure className="about-intro__portrait reveal">
          <div className="about-intro__image">
            <img src="/foto4.jpg" alt="Raya Sesan Firdaus" width="783" height="862" loading="lazy" />
          </div>
          <figcaption>
            <span>Jakarta, Indonesia</span>
            <strong>Open to opportunities</strong>
          </figcaption>
        </figure>

        <div className="about-intro__copy reveal">
          <p className="scene-kicker">01 / About</p>
          <p className="about-intro__lead">Hey! I'm</p>
          <h2>Raya Sesan</h2>
          <p className="about-intro__bio">I'm an Informatics Engineering student focused on data science, machine learning, and AI application development. I learn by turning datasets and ideas into models, APIs, dashboards, and working prototypes.</p>
          <p className="about-intro__statement">I turn data into experiments, models, and <span>useful products.</span></p>
          <dl className="about-intro__details">
            <div><dt>Focus</dt><dd>Data Science & Applied AI</dd></div>
            <div><dt>Currently</dt><dd>Informatics Engineering Student</dd></div>
          </dl>
        </div>
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
