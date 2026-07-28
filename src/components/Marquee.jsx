export default function Marquee() {
  const skills = [
    'Python', 'SQL', 'Scikit-learn', 'Pandas', 'Power BI', 'NumPy',
    'Machine Learning', 'Data Analysis', 'Feature Engineering', 'Git'
  ];

  // Repeat skills twice to create seamless loop
  const repeatedSkills = [...skills, ...skills];

  return (
    <div className="border-y border-r-steel py-3 overflow-hidden bg-r-gray">
      <div className="marquee-track flex items-center gap-8 whitespace-nowrap w-max">
        {repeatedSkills.map((skill, index) => (
          <span key={index} className="flex items-center gap-8">
            <span className="text-r-silver text-[10px] font-bold tracking-[0.3em] uppercase">
              {skill}
            </span>
            {index !== repeatedSkills.length - 1 && (
              <span className="text-r-red text-[5px]">◆</span>
            )}
          </span>
        ))}
      </div>
    </div>
  );
}
