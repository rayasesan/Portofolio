const skillGroups = [
  {
    title: 'Programming & Data',
    icon: 'lucide:code-2',
    skills: ['Python', 'SQL', 'Pandas', 'NumPy', 'Data Cleaning', 'Exploratory Data Analysis', 'Data Visualization'],
  },
  {
    title: 'Machine Learning & AI',
    icon: 'lucide:brain',
    isPrimary: true,
    skills: ['Scikit-learn', 'TensorFlow', 'Keras', 'Classification', 'Regression', 'Computer Vision', 'Natural Language Processing', 'Feature Engineering', 'Model Evaluation', 'Generative AI'],
  },
  {
    title: 'Backend & Deployment',
    icon: 'lucide:server',
    skills: ['FastAPI', 'REST API', 'Streamlit', 'Model Serving', 'API Integration', 'Docker Fundamentals'],
  },
  {
    title: 'Tools & Analytics',
    icon: 'lucide:layout-dashboard',
    skills: ['Git', 'GitHub', 'Jupyter Notebook', 'Google Colab', 'Power BI', 'TensorBoard'],
  },
];

export default function Skills() {
  return (
    <section id="skills" className="section-frame py-20 lg:py-24">
      <div className="max-w-[1100px] mx-auto px-5">
        <div className="section-heading grid grid-cols-1 lg:grid-cols-[0.8fr_1.2fr] gap-5 lg:gap-16 mb-14">
          <div className="reveal">
            <p className="section-kicker text-r-red">01 / Expertise</p>
            <h2 className="text-white text-4xl lg:text-6xl leading-[0.95]">
              Capabilities
            </h2>
          </div>
          <div className="reveal flex items-end">
            <p className="text-r-light text-[15px] leading-[1.75] max-w-xl lg:ml-auto">
              A focused toolkit for turning raw data into reliable models, useful products, and clear business insight.
            </p>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
          {skillGroups.map((group) => (
            <article
              key={group.title}
              className="skill-card reveal bg-r-gray border border-r-steel card-lift p-6 lg:p-7 rounded relative"
            >
              <div className="flex items-center gap-3 mb-7">
                <div className="skill-icon w-9 h-9 rounded bg-r-red/10 flex items-center justify-center">
                  <span className="iconify text-r-red" data-icon={group.icon} data-width="15"></span>
                </div>
                <h3 className="text-white text-xl">{group.title}</h3>
              </div>
              <div className="skill-list flex flex-wrap gap-x-4 gap-y-2">
                {group.skills.map((skill) => (
                  <span key={skill} className="text-r-light text-[12px] font-medium">
                    {skill}
                  </span>
                ))}
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
