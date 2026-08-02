import { credentials } from '../data/credentials';

export default function CredentialProof() {
  return (
    <section id="credentials" className="section credentials-section">
      <div className="page-shell">
        <header className="section-title section-title--compact reveal">
          <p className="section-index">03 / Credentials</p>
          <h2>Proof, simply.</h2>
          <p>{credentials.length} verified programs and achievements. Open any title to view the original credential.</p>
        </header>

        <div className="credential-list" role="list">
          {credentials.map((credential, index) => (
            <a
              href={credential.href}
              target="_blank"
              rel="noopener noreferrer"
              className="credential-row reveal"
              role="listitem"
              key={credential.name}
              aria-label={`View credential: ${credential.name}`}
            >
              <span className="credential-row__number">{String(index + 1).padStart(2, '0')}</span>
              <div className="credential-row__title">
                <h3>{credential.name}</h3>
                <p>{credential.issuer}</p>
              </div>
              <p className="credential-row__badge">{credential.badge ?? credential.note}</p>
              <p className="credential-row__year">{credential.year}</p>
            </a>
          ))}
        </div>
      </div>
    </section>
  );
}
