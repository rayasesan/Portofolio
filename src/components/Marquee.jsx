export default function Marquee() {
  const skills = ['Python', 'TensorFlow', 'Scikit-learn', 'FastAPI', 'SQL', 'Power BI'];

  return (
    <div className="expertise-strip border-y border-r-steel py-5 bg-r-gray">
      <div className="max-w-[1100px] mx-auto px-5 flex flex-wrap items-center justify-center gap-x-8 gap-y-3">
        <span className="text-r-red text-[10px] font-semibold tracking-[0.16em] uppercase">Selected toolkit</span>
        {skills.map((skill) => (
          <span key={skill} className="flex items-center gap-8">
            <span className="text-r-silver text-[12px] font-medium">{skill}</span>
          </span>
        ))}
      </div>
    </div>
  );
}
