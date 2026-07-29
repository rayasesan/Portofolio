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
    <section id="contact" className="py-20 lg:py-24 border-t border-r-steel relative overflow-hidden">
      <div
        className="absolute inset-0 pointer-events-none"
        style={{ background: 'radial-gradient(ellipse 50% 50% at 50% 80%, rgba(239,68,68,0.04), transparent 70%)' }}
      ></div>

      <div className="relative z-10 max-w-[1100px] mx-auto px-5">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-start">
          <div className="reveal">
            <p className="text-r-red text-[10px] font-bold tracking-[0.25em] uppercase mb-2">04 / Contact</p>
            <h2 className="text-white font-black text-3xl lg:text-5xl uppercase tracking-tight leading-[0.9] mb-5">
              Let's Work<br />Together
            </h2>
            <div className="red-bar mb-5"></div>
            <p className="text-r-light text-sm leading-relaxed max-w-md mb-8">
              I'm open to Machine Learning, Data Science, and AI Engineering internship opportunities, as well as collaborative technical projects. Reach out through email or LinkedIn.
            </p>

            <div className="space-y-4">
              {contactLinks.map((link) => (
                <a
                  key={link.href}
                  href={link.href}
                  target={link.external ? '_blank' : undefined}
                  rel={link.external ? 'noopener noreferrer' : undefined}
                  className="flex items-center gap-3 group"
                  aria-label={link.ariaLabel}
                >
                  <div className="w-10 h-10 rounded bg-r-red/10 flex items-center justify-center group-hover:bg-r-red/20 transition-all group-hover:scale-110">
                    <span className="iconify text-r-red" data-icon={link.icon} data-width="16"></span>
                  </div>
                  <div className="min-w-0">
                    <p className="text-white text-sm font-semibold break-words">{link.detail}</p>
                    <p className="text-r-steel text-[10px]">{link.label}</p>
                  </div>
                </a>
              ))}
            </div>
          </div>

          <div className="reveal bg-r-gray border border-r-steel rounded p-6 lg:p-7">
            <p className="text-r-red text-[10px] font-bold tracking-[0.2em] uppercase mb-3">Looking for an Intern?</p>
            <h3 className="text-white text-2xl font-black uppercase tracking-tight leading-[0.9] mb-4">
              Machine Learning, Data Science, or AI Engineering
            </h3>
            <p className="text-r-light text-sm leading-relaxed mb-6">
              Looking for a Machine Learning, Data Science, or AI Engineering intern? Explore my projects or reach out through email and LinkedIn.
            </p>
            <div className="flex flex-col sm:flex-row lg:flex-col gap-3">
              {contactLinks.map((link, index) => (
                <a
                  key={link.href}
                  href={link.href}
                  target={link.external ? '_blank' : undefined}
                  rel={link.external ? 'noopener noreferrer' : undefined}
                  aria-label={link.ariaLabel}
                  className={`${index === 0
                    ? 'bg-r-red hover:bg-r-red-light text-black'
                    : 'border border-r-steel hover:border-r-red text-white hover:text-r-red'
                  } inline-flex items-center justify-center gap-2 min-h-11 px-4 py-3 rounded text-[10px] font-black tracking-[0.16em] uppercase transition-all`}
                >
                  <span className="iconify" data-icon={link.icon} data-width="15"></span>
                  {link.label}
                </a>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
