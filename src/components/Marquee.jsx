export default function Marquee() {
  const skills = [
    'Python', 'SQL', 'Scikit-learn', 'Pandas', 'Power BI', 'NumPy',
    'Machine Learning', 'Data Science', 'AI Engineering', 'Computer Vision',
    'Data Analysis', 'Feature Engineering', 'Git'
  ];

  const repeatedSkills = ['first', 'second'].flatMap((group) =>
    skills.map((skill) => ({ id: `${group}-${skill}`, label: skill }))
  );

  return (
    <div className="border-y border-r-steel py-3 overflow-hidden bg-r-gray">
      <div className="marquee-track flex items-center gap-8 whitespace-nowrap w-max">
        {repeatedSkills.map((skill, index) => (
          <span key={skill.id} className="flex items-center gap-8">
            <span className="text-r-silver text-[10px] font-bold tracking-[0.3em] uppercase">
              {skill.label}
            </span>
            {index !== repeatedSkills.length - 1 && (
              <span className="text-r-red text-[10px]" aria-hidden="true">/</span>
            )}
          </span>
        ))}
      </div>
    </div>
  );
}
