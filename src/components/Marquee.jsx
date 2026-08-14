export default function Marquee() {
  const skills = [
    'Python',
    'TensorFlow',
    'Scikit-learn',
    'FastAPI',
    'SQL',
    'Power BI',
    'Pandas',
    'NumPy',
    'Computer Vision',
    'Machine Learning',
    'Data Science',
    'AI Engineering',
    'Feature Engineering',
    'Data Analysis',
    'REST API',
    'Git',
  ];

  return (
    <div
      className="expertise-strip expertise-marquee border-y border-r-steel bg-r-gray"
      role="region"
      aria-label={`Selected toolkit: ${skills.join(', ')}`}
    >
      <div className="marquee-track" aria-hidden="true">
        {[0, 1].map((groupIndex) => (
          <div key={groupIndex} className="marquee-group">
            <span className="marquee-label">Selected toolkit</span>
            {skills.map((skill) => (
              <span key={`${groupIndex}-${skill}`} className="marquee-keyword">
                <span className="marquee-dot" aria-hidden="true"></span>
                {skill}
              </span>
            ))}
          </div>
        ))}
      </div>
    </div>
  );
}
