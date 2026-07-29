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
    <section id="skills" className="py-20 lg:py-24">
      <div className="max-w-[1100px] mx-auto px-5">
        <div className="grid grid-cols-1 lg:grid-cols-[220px_1fr] gap-8 lg:gap-14 mb-12">
          <div className="reveal">
            <p className="text-r-red text-[10px] font-bold tracking-[0.25em] uppercase mb-2">01 / Skills</p>
            <h2 className="text-white font-black text-3xl lg:text-4xl uppercase tracking-tight leading-[0.9]">
              Technical<br />Stack
            </h2>
          </div>
          <div className="reveal flex items-end">
            <p className="text-r-light text-sm leading-relaxed">
              Technologies applied across academic, cohort, collaborative, and personal projects.
            </p>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          {skillGroups.map((group) => (
            <article
              key={group.title}
              className={`reveal bg-r-gray border ${group.isPrimary ? 'border-r-red/20' : 'border-r-steel'} card-lift p-5 rounded relative`}
            >
              {group.isPrimary && (
                <span className="absolute -top-2.5 right-4 bg-r-red text-black text-[10px] font-black tracking-[0.18em] uppercase px-2.5 py-0.5 rounded-sm">
                  Primary
                </span>
              )}
              <div className="flex items-center gap-2.5 mb-5">
                <div className="w-8 h-8 rounded bg-r-red/10 flex items-center justify-center">
                  <span className="iconify text-r-red" data-icon={group.icon} data-width="15"></span>
                </div>
                <h3 className="text-white font-bold text-sm uppercase tracking-wider">{group.title}</h3>
              </div>
              <div className="flex flex-wrap gap-2">
                {group.skills.map((skill) => (
                  <span key={skill} className="text-r-light text-[11px] font-semibold bg-r-steel border border-r-steel px-2.5 py-1 rounded">
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
