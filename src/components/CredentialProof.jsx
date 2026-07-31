import { credentials } from '../data/credentials';

export default function CredentialProof() {
  return (
    <section id="credentials" className="py-20 lg:py-24 border-t border-r-steel">
      <div className="max-w-[1100px] mx-auto px-5">
        <div className="reveal mb-10 flex flex-col gap-4 lg:flex-row lg:items-end lg:justify-between">
          <div>
            <p className="text-r-red text-[10px] font-bold tracking-[0.25em] uppercase mb-2">03 / Credentials</p>
            <h2 className="text-white font-black text-3xl lg:text-4xl uppercase tracking-tight leading-[0.9]">
              Verified Proof
            </h2>
          </div>
          <p className="text-r-light text-sm leading-relaxed max-w-md">
            Selected certificates and awards that support my AI engineering, machine learning, and communication background.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-4">
          {credentials.map((credential, index) => (
            <CredentialCard key={credential.name} credential={credential} delay={index * 70} />
          ))}
        </div>
      </div>
    </section>
  );
}

function CredentialCard({ credential, delay }) {
  return (
    <a
      href={credential.href}
      target="_blank"
      rel="noopener noreferrer"
      className={`credential-proof-card reveal group block overflow-hidden rounded border bg-r-gray transition-all duration-300 hover:-translate-y-0.5 hover:border-r-red/50 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-r-red ${
        credential.featured ? 'border-r-red/35' : 'border-r-steel'
      }`}
      data-delay={delay}
      aria-label={`View credential: ${credential.name}`}
    >
      <div className="credential-proof-media relative overflow-hidden bg-r-dark">
        <img
          src={credential.preview}
          alt={`${credential.name} certificate preview`}
          loading="lazy"
          className="h-full w-full object-cover object-top transition-transform duration-500 group-hover:scale-[1.035]"
        />
        <div className="credential-proof-shade" aria-hidden="true"></div>
        <div className="absolute left-3 top-3 flex items-center gap-2">
          <span className="flex h-8 w-8 items-center justify-center rounded bg-black/70 text-r-red backdrop-blur">
            <span className="iconify" data-icon={credential.icon} data-width="15"></span>
          </span>
          {credential.badge && (
            <span className="rounded bg-r-red px-2.5 py-1 text-[9px] font-black uppercase tracking-[0.14em] text-black">
              {credential.badge}
            </span>
          )}
        </div>
      </div>

      <div className="p-4">
        <div className="mb-2 flex items-start justify-between gap-3">
          <div>
            <p className="text-r-red text-[10px] font-bold uppercase tracking-[0.2em]">{credential.issuer}</p>
            <h3 className="mt-1 text-white text-sm font-black uppercase tracking-tight leading-tight">{credential.name}</h3>
          </div>
          <span className="iconify mt-1 flex-shrink-0 text-r-silver transition-colors group-hover:text-r-red" data-icon="lucide:external-link" data-width="14"></span>
        </div>
        <p className="text-r-light text-xs leading-relaxed">{credential.summary}</p>
        <div className="mt-4 flex items-center justify-between border-t border-r-steel pt-3">
          <p className="text-r-silver text-[10px] font-bold uppercase tracking-wider">{credential.note}</p>
          <p className="text-white text-[10px] font-black uppercase tracking-wider">{credential.year}</p>
        </div>
      </div>
    </a>
  );
}
