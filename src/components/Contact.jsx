const contactLinks = [
  {
    label: 'Send Email',
    detail: 'rayasesan@gmail.com',
    href: 'mailto:rayasesan@gmail.com',
    icon: 'lucide:mail',
    ariaLabel: 'Send email to Raya Sesan Firdaus',
  },
  {
    label: 'Connect on LinkedIn',
    detail: 'linkedin.com/in/rayasesann',
    href: 'https://linkedin.com/in/rayasesann',
    icon: 'lucide:linkedin',
    ariaLabel: 'Open Raya Sesan Firdaus LinkedIn profile',
    external: true,
  },
  {
    label: 'View GitHub',
    detail: 'github.com/rayasesan',
    href: 'https://github.com/rayasesan',
    icon: 'lucide:github',
    ariaLabel: 'Open Raya Sesan Firdaus GitHub profile',
    external: true,
  },
];

export default function Contact() {
  return (
    <section id="contact" className="contact-section py-24 lg:py-32 border-t border-r-steel relative overflow-hidden">
      <div className="relative z-10 max-w-[1100px] mx-auto px-5">
        <div className="grid grid-cols-1 lg:grid-cols-[1.15fr_0.85fr] gap-14 lg:gap-24 items-start">
          <div className="reveal">
            <p className="section-kicker text-r-red">05 / Contact</p>
            <h2 className="text-white text-5xl lg:text-7xl leading-[0.9] mb-7">
              Let's build<br /><span>something useful.</span>
            </h2>
            <p className="text-r-light text-[15px] leading-[1.75] max-w-xl">
              I'm open to Machine Learning, Data Science, and AI Engineering internship opportunities, as well as collaborative technical projects. Reach out through email or LinkedIn.
            </p>
          </div>

          <div className="contact-links reveal">
              {contactLinks.map((link) => (
                <a
                  key={link.href}
                  href={link.href}
                  target={link.external ? '_blank' : undefined}
                  rel={link.external ? 'noopener noreferrer' : undefined}
                  aria-label={link.ariaLabel}
                  className="contact-link group flex items-center justify-between gap-6 border-b border-r-steel py-5 first:pt-0"
                >
                  <div className="min-w-0">
                    <p className="text-r-red text-[11px] font-medium mb-1">{link.label}</p>
                    <p className="text-white text-base font-medium break-words">{link.detail}</p>
                  </div>
                  <span className="contact-link-icon flex h-10 w-10 flex-shrink-0 items-center justify-center rounded border border-r-steel text-r-red transition-all">
                    <span className="iconify" data-icon={link.icon} data-width="16"></span>
                  </span>
                </a>
              ))}
          </div>
        </div>
      </div>
    </section>
  );
}
