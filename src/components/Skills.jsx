export default function Skills() {
  return (
    <section id="skills" className="py-20 lg:py-24">
      <div className="max-w-[1100px] mx-auto px-5">
        <div className="grid grid-cols-1 lg:grid-cols-[220px_1fr] gap-8 lg:gap-14 mb-12">
          <div className="reveal">
            <p className="text-r-red text-[9px] font-bold tracking-[0.25em] uppercase mb-2">01 / Skills</p>
            <h2 className="text-white font-black text-3xl lg:text-4xl uppercase tracking-tight leading-[0.9]">
              Technical<br />Stack
            </h2>
          </div>
          <div className="reveal flex items-end">
            <p className="text-r-light text-xs leading-relaxed">
              Skills I've actually used in projects and cohort programs, not just tutorial follows.
            </p>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
          <div className="reveal bg-r-gray border border-r-steel card-lift p-5 rounded">
            <div className="flex items-center gap-2.5 mb-5">
              <div className="w-8 h-8 rounded bg-r-red/10 flex items-center justify-center">
                <span className="iconify text-r-red" data-icon="lucide:code-2" data-width="15"></span>
              </div>
              <h3 className="text-white font-bold text-xs uppercase tracking-wider">Programming & Data</h3>
            </div>
            <div className="space-y-3">
              <SkillBar name="Python" percent="90%" />
              <SkillBar name="SQL" percent="85%" />
              <SkillBar name="Pandas / NumPy" percent="88%" />
              <SkillBar name="Data Cleaning" percent="87%" />
              <SkillBar name="EDA" percent="85%" />
            </div>
          </div>

          <div className="reveal bg-r-gray border border-r-red/20 card-lift p-5 rounded relative">
            <span className="absolute -top-2.5 right-4 bg-r-red text-black text-[7px] font-black tracking-[0.2em] uppercase px-2.5 py-0.5 rounded-sm">
              PRIMARY
            </span>
            <div className="flex items-center gap-2.5 mb-5">
              <div className="w-8 h-8 rounded bg-r-red/10 flex items-center justify-center">
                <span className="iconify text-r-red" data-icon="lucide:brain" data-width="15"></span>
              </div>
              <h3 className="text-white font-bold text-xs uppercase tracking-wider">Machine Learning</h3>
            </div>
            <div className="space-y-3">
              <SkillBar name="Scikit-learn" percent="85%" />
              <SkillBar name="Classification" percent="82%" />
              <SkillBar name="Feature Engineering" percent="80%" />
              <SkillBar name="Model Evaluation" percent="78%" />
              <SkillBar name="Deep Learning / GenAI" percent="55%" />
            </div>
          </div>

          <div className="reveal bg-r-gray border border-r-steel card-lift p-5 rounded">
            <div className="flex items-center gap-2.5 mb-5">
              <div className="w-8 h-8 rounded bg-r-red/10 flex items-center justify-center">
                <span className="iconify text-r-red" data-icon="lucide:layout-dashboard" data-width="15"></span>
              </div>
              <h3 className="text-white font-bold text-xs uppercase tracking-wider">Tools & BI</h3>
            </div>
            <div className="space-y-3">
              <SkillBar name="Power BI" percent="80%" />
              <SkillBar name="KPI Development" percent="78%" />
              <SkillBar name="Git / GitHub" percent="82%" />
              <SkillBar name="Jupyter / Colab" percent="90%" />
              <SkillBar name="Cloud Basics" percent="75%" />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

function SkillBar({ name, percent }) {
  return (
    <div>
      <div className="flex justify-between mb-1">
        <span className="text-r-light text-[11px]">{name}</span>
        <span className="text-r-red text-[10px] font-bold">{percent}</span>
      </div>
      <div className="h-[3px] bg-r-steel rounded-full overflow-hidden">
        <div className="skill-fill h-full bg-r-red rounded-full" data-w={percent}></div>
      </div>
    </div>
  );
}
