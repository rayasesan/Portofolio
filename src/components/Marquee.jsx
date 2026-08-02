const toolkit = ['Python', 'TensorFlow', 'Scikit-learn', 'FastAPI', 'SQL', 'Power BI', 'Computer Vision', 'Generative AI'];

export default function Marquee() {
  return (
    <div className="toolkit-marquee" role="region" aria-label={`Selected toolkit: ${toolkit.join(', ')}`}>
      <div className="toolkit-marquee__track" aria-hidden="true">
        {[0, 1].map((group) => (
          <div className="toolkit-marquee__group" key={group}>
            <span className="toolkit-marquee__label">Selected toolkit</span>
            {toolkit.map((item) => <span key={`${group}-${item}`}>{item}<i></i></span>)}
          </div>
        ))}
      </div>
    </div>
  );
}
