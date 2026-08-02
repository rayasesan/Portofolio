const capabilities = [
  {
    title: 'Model & reason',
    description: 'From structured experimentation to evaluated models with clear assumptions and measurable performance.',
    tools: 'Python / Scikit-learn / TensorFlow / Feature Engineering / Model Evaluation',
  },
  {
    title: 'Build & deploy',
    description: 'Turning trained models into practical interfaces, services, and workflows people can actually use.',
    tools: 'FastAPI / REST API / Streamlit / Model Serving / Docker Fundamentals',
  },
  {
    title: 'Analyze & explain',
    description: 'Finding the useful signal in raw data and communicating it through analysis, SQL, and decision-ready visuals.',
    tools: 'SQL / Pandas / NumPy / Power BI / Data Visualization',
  },
];

export default function Skills() {
  return (
    <section id="skills" className="section about-section">
      <div className="page-shell">
        <div className="about-heading reveal">
          <p className="section-index">01 / About</p>
          <h2>I turn data into <span>systems people can use.</span></h2>
        </div>

        <div className="about-intro reveal">
          <p className="about-intro__lead">Machine learning is valuable when it survives outside the notebook.</p>
          <p>
            I develop practical machine learning applications, computer vision systems,
            and data products from exploration and modeling through API delivery. My work
            sits where careful technical thinking meets usable product execution.
          </p>
        </div>

        <div className="capability-section">
          <div className="capability-heading reveal">
            <p className="section-index">How I work</p>
            <h3>One workflow.<br />Three strengths.</h3>
          </div>
          <div className="capability-list">
            {capabilities.map((capability, index) => (
              <article className="capability-row reveal" key={capability.title}>
                <span>{String(index + 1).padStart(2, '0')}</span>
                <div>
                  <h3>{capability.title}</h3>
                  <p>{capability.description}</p>
                </div>
                <p className="capability-row__tools">{capability.tools}</p>
              </article>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
