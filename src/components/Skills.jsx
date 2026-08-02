const skillGroups = [
  {
    title: 'Programming & Data',
    description: 'Prepare, explore, transform, and communicate data for reliable analysis and model development.',
    skills: ['Python', 'SQL', 'Pandas', 'NumPy', 'Data Cleaning', 'Exploratory Data Analysis', 'Data Visualization'],
  },
  {
    title: 'Machine Learning & AI',
    description: 'Develop and evaluate practical predictive models, including computer vision and Generative AI applications.',
    skills: ['Scikit-learn', 'TensorFlow', 'Keras', 'Classification', 'Regression', 'Computer Vision', 'Natural Language Processing', 'Feature Engineering', 'Model Evaluation', 'Generative AI'],
  },
  {
    title: 'Model Deployment',
    description: 'Turn trained models into usable applications through APIs, model serving, and lightweight product interfaces.',
    skills: ['FastAPI', 'REST API', 'Streamlit', 'Model Serving', 'API Integration', 'Docker Fundamentals'],
  },
  {
    title: 'Tools & Analytics',
    description: 'Build reproducible workflows and decision-ready analytics using practical development and BI tools.',
    skills: ['Git', 'GitHub', 'Jupyter Notebook', 'Google Colab', 'Power BI', 'TensorBoard'],
  },
];

export default function Skills() {
  return (
    <section id="skills" className="section-frame expertise-section">
      <div className="max-w-[1100px] mx-auto">
        <div className="section-heading section-heading--split">
          <div className="reveal">
            <p className="section-kicker">01 / Expertise</p>
            <h2>Technical capabilities</h2>
          </div>
          <div className="reveal">
            <p>
              A focused toolkit for turning raw data into reliable models,
              useful products, and clear business insight.
            </p>
          </div>
        </div>

        <div className="expertise-list">
          {skillGroups.map((group, index) => (
            <article key={group.title} className="skill-card reveal">
              <p className="skill-number">{String(index + 1).padStart(2, '0')}</p>
              <div className="skill-copy">
                <h3>{group.title}</h3>
                <p>{group.description}</p>
              </div>
              <div className="skill-list" aria-label={`${group.title} technologies`}>
                {group.skills.map((skill) => <span key={skill}>{skill}</span>)}
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
