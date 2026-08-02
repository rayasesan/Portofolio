const contactLinks = [
  { label: 'Email', detail: 'rayasesan@gmail.com', href: 'mailto:rayasesan@gmail.com' },
  { label: 'LinkedIn', detail: 'linkedin.com/in/rayasesann', href: 'https://linkedin.com/in/rayasesann', external: true },
  { label: 'GitHub', detail: 'github.com/rayasesan', href: 'https://github.com/rayasesan', external: true },
];

export default function Contact() {
  return (
    <section id="contact" className="section contact-section">
      <div className="contact-orbit" aria-hidden="true"></div>
      <div className="page-shell">
        <p className="section-index reveal">05 / Contact</p>
        <div className="contact-heading reveal">
          <h2>Make it <span>real.</span></h2>
          <p>You bring the problem. I bring the curiosity, models, and engineering to turn it into something useful.</p>
        </div>

        <a className="contact-email reveal" href="mailto:rayasesan@gmail.com">rayasesan@gmail.com</a>

        <div className="contact-bottom">
          <div className="contact-availability reveal">
            <span></span>
            <p>Available for ML, Data Science, and AI Engineering internship opportunities.</p>
          </div>
          <div className="contact-links reveal">
            {contactLinks.map((link) => (
              <a key={link.href} href={link.href} target={link.external ? '_blank' : undefined} rel={link.external ? 'noopener noreferrer' : undefined}>
                <span>{link.label}</span>
                <p>{link.detail}</p>
              </a>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
