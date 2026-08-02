export default function Contact() {
  return (
    <section id="contact" className="contact-section">
      <div className="contact-layout">
        <div className="contact-copy reveal">
          <p className="scene-kicker">05 / Contact</p>
          <h2>Make it real.</h2>
          <p>Open to internships, project collaborations, and opportunities to learn by building useful data and AI applications.</p>
          <a href="mailto:rayasesan@gmail.com">rayasesan@gmail.com</a>
        </div>

        <div className="contact-card reveal">
          <p className="contact-card__status"><span></span> Open to opportunities</p>
          <h3>What would you like to do next?</h3>
          <a href="mailto:rayasesan@gmail.com">Send me a message for hiring or collaboration</a>
          <a href="https://linkedin.com/in/rayasesann" target="_blank" rel="noopener noreferrer">Connect with me on LinkedIn</a>
          <nav aria-label="Social links">
            <a href="https://linkedin.com/in/rayasesann" target="_blank" rel="noopener noreferrer">in</a>
            <a href="https://github.com/rayasesan" target="_blank" rel="noopener noreferrer">gh</a>
            <a href="mailto:rayasesan@gmail.com">@</a>
          </nav>
        </div>
      </div>
    </section>
  );
}
