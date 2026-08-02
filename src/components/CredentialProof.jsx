import { credentials } from '../data/credentials';

export default function CredentialProof() {
  return (
    <section id="credentials" className="credentials-section solid-panel">
      <header className="credentials-heading reveal"><p className="scene-kicker">03 / Credentials</p><h2>Credentials</h2></header>
      <div className="credential-list" role="list">
        {credentials.map((credential, index) => (
          <a className="credential-row reveal" href={credential.href} target="_blank" rel="noopener noreferrer" role="listitem" key={credential.name}>
            <span>{String(index + 1).padStart(2, '0')}</span>
            <div><h3>{credential.name}</h3><p>{credential.issuer}</p></div>
            <p>{credential.badge ?? credential.note}</p>
            <strong>{credential.year}</strong>
          </a>
        ))}
      </div>
    </section>
  );
}
