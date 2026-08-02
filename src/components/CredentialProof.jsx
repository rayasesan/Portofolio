import { credentials } from '../data/credentials';

export default function CredentialProof() {
  return (
    <section id="credentials" className="credential-scroll-section section-frame">
      <div className="credential-frame max-w-[1100px] mx-auto">
        <div className="section-heading section-heading--split">
          <div className="reveal">
            <p className="section-kicker">03 / Credentials</p>
            <h2>Credentials</h2>
          </div>
          <div className="reveal credential-intro">
            <p>
              Verified learning programs, certifications, and achievements that support the technical work.
            </p>
            <p className="credential-count">{credentials.length} verified credentials</p>
          </div>
        </div>

        <div className="credential-rail" aria-label="Verified credentials">
          {credentials.map((credential, index) => (
            <CredentialCard key={credential.name} credential={credential} index={index} />
          ))}
        </div>
      </div>
    </section>
  );
}

function CredentialCard({ credential, index }) {
  return (
    <a
      href={credential.href}
      target="_blank"
      rel="noopener noreferrer"
      className={`credential-proof-card reveal ${credential.featured ? 'is-featured' : ''}`}
      aria-label={`View credential: ${credential.name}`}
    >
      <div className="credential-card-topline">
        <span className="credential-index">{String(index + 1).padStart(2, '0')}</span>
        {credential.badge && <span className="credential-badge">{credential.badge}</span>}
      </div>

      <p className="credential-issuer">{credential.issuer}</p>
      <h3>{credential.name}</h3>
      <p className="credential-summary">{credential.summary}</p>

      <div className="credential-card-footer">
        <div>
          <p>{credential.note}</p>
          <span>Open credential</span>
        </div>
        <p>{credential.year}</p>
      </div>
    </a>
  );
}
