export default function Experience() {
  return (
    <section id="experience" className="py-20 lg:py-24 border-t border-r-steel">
      <div className="max-w-[1100px] mx-auto px-5">
        <div className="reveal mb-12">
          <p className="text-r-red text-[9px] font-bold tracking-[0.25em] uppercase mb-2">02 / Experience</p>
          <h2 className="text-white font-black text-3xl lg:text-4xl uppercase tracking-tight leading-[0.9]">
            Where I've Learned
          </h2>
        </div>
        <div className="grid grid-cols-1 lg:grid-cols-[1fr_290px] gap-10">
          <div className="space-y-0">
            <ExperienceItem 
              date="Jan 2026 - Present"
              title="AI Engineer Cohort"
              subtitle="Coding Camp 2026 · DBS Foundation"
              desc="Studying AI engineering, machine learning, deep learning, and Generative AI. Applying data processing and model development through real-world AI projects."
              tags={['AI/ML', 'Deep Learning', 'GenAI', 'Python']}
              isActive={true}
            />
            <ExperienceItem 
              date="Sep 2025 - Jan 2026"
              title="Machine Learning Cohort"
              subtitle="Asah · Led by Dicoding"
              desc="Built and evaluated ML models using Python and Scikit-learn. End-to-end: data cleaning, EDA, feature engineering, model evaluation."
              tags={['Python', 'Scikit-learn', 'EDA', 'Feature Eng']}
              isActive={false}
            />
            <ExperienceItem 
              date="Feb 2025 - Present"
              title="Laboratory Assistant"
              subtitle="Universitas Gunadarma"
              desc="Assisted students during practical computing lab sessions. Strengthened communication and deepened technical understanding through teaching."
              tags={['Teaching', 'Lab Ops']}
              isActive={false}
              isLast={true}
            />
          </div>
          
          <div className="space-y-4">
            <div className="reveal bg-r-gray border border-r-steel rounded p-5" data-delay="0">
              <p className="text-r-red text-[9px] font-bold tracking-[0.2em] uppercase mb-3">Education</p>
              <p className="text-white text-[11px] font-semibold">S1 Informatics Engineering</p>
              <p className="text-r-silver text-[10px]">Gunadarma University </p>
              <p className="text-r-red text-[9px] font-bold tracking-wider uppercase mt-1">Sep 2023 - Present</p>
              <div className="mt-3 pt-3 border-t border-r-steel flex items-start gap-2">
                <span className="w-1.5 h-1.5 bg-r-red rounded-full mt-1.5 flex-shrink-0"></span>
                <p className="text-r-light text-[10px] leading-relaxed">
                  Active member - <span className="text-white font-semibold">GDG Gunadarma</span>
                </p>
              </div>
            </div>
            
            <div className="reveal bg-r-gray border border-r-steel rounded p-5" data-delay="120">
              <p className="text-r-red text-[9px] font-bold tracking-[0.2em] uppercase mb-3">Certifications</p>
              <div className="space-y-3">
                <div className="flex gap-3 items-start">
                  <div className="w-7 h-7 rounded bg-r-red/10 flex items-center justify-center flex-shrink-0">
                    <span className="iconify text-r-red" data-icon="lucide:brain" data-width="12"></span>
                  </div>
                  <div>
                    <p className="text-white text-[10px] font-semibold">AI Engineer Cohort</p>
                    <p className="text-r-silver text-[9px]">DBS Foundation · 2026</p>
                  </div>
                </div>
                <div className="flex gap-3 items-start">
                  <div className="w-7 h-7 rounded bg-r-red/10 flex items-center justify-center flex-shrink-0">
                    <span className="iconify text-r-red" data-icon="lucide:cpu" data-width="12"></span>
                  </div>
                  <div>
                    <p className="text-white text-[10px] font-semibold">Machine Learning Cohort</p>
                    <p className="text-r-silver text-[9px]">Dicoding · 2025</p>
                  </div>
                </div>
              </div>
            </div>
            
            <div className="reveal bg-r-gray border border-r-red/15 rounded p-5" data-delay="240">
              <p className="text-r-red text-[9px] font-bold tracking-[0.2em] uppercase mb-3">Learning Now</p>
              <div className="grid grid-cols-2 gap-2">
                <div className="bg-r-dark border border-r-steel rounded py-2.5 text-center">
                  <p className="text-r-red font-black text-xs">Deep Learning</p>
                  <p className="text-r-silver text-[7px] font-bold tracking-wider uppercase mt-0.5">Neural Network</p>
                </div>
                <div className="bg-r-dark border border-r-steel rounded py-2.5 text-center">
                  <p className="text-r-red font-black text-xs">GenAI</p>
                  <p className="text-r-silver text-[7px] font-bold tracking-wider uppercase mt-0.5">LLMs</p>
                </div>
                <div className="bg-r-dark border border-r-steel rounded py-2.5 text-center">
                  <p className="text-r-red font-black text-xs">MLOps</p>
                  <p className="text-r-silver text-[7px] font-bold tracking-wider uppercase mt-0.5">Deploy</p>
                </div>
                <div className="bg-r-dark border border-r-steel rounded py-2.5 text-center">
                  <p className="text-r-red font-black text-xs">Adv. SQL</p>
                  <p className="text-r-silver text-[7px] font-bold tracking-wider uppercase mt-0.5">Analytics</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

function ExperienceItem({ date, title, subtitle, desc, tags, isActive, isLast }) {
  return (
    <div className={`reveal flex gap-5 ${isLast ? '' : 'pb-9'}`}>
      <div className="flex flex-col items-center pt-0.5">
        <div className={`tl-dot ${!isActive ? 'dim' : ''}`}></div>
        {!isLast && <div className="tl-line mt-1"></div>}
      </div>
      <div className="flex-1">
        <p className="text-r-red text-[9px] font-bold tracking-[0.2em] uppercase mb-1.5">{date}</p>
        <h3 className="text-white font-bold text-sm uppercase tracking-tight mb-0.5">{title}</h3>
        <p className="text-r-red text-[10px] font-semibold tracking-wider uppercase mb-2">{subtitle}</p>
        <p className="text-r-light text-[11px] leading-relaxed mb-3">{desc}</p>
        <div className="flex flex-wrap gap-1.5">
          {tags.map((tag, idx) => (
            <span key={idx} className="text-[8px] font-bold tracking-wider uppercase px-2 py-0.5 bg-r-steel text-r-light rounded">
              {tag}
            </span>
          ))}
        </div>
      </div>
    </div>
  );
}
