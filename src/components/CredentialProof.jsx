import { useState } from 'react';
import { credentials } from '../data/credentials';
import PortfolioModal from './PortfolioModal';

export default function CredentialProof() {
  const [selectedCredential, setSelectedCredential] = useState(null);
  const closeCredential = () => setSelectedCredential(null);

  return (
    <section id="credentials" className="credentials-section solid-panel">
      <header className="credentials-heading reveal"><p className="scene-kicker">03 / Credentials</p><h2>Credentials</h2></header>
      <div className="credential-list" aria-label="Credentials">
        {credentials.map((credential, index) => (
          <button className="credential-row reveal" type="button" key={credential.name} onClick={() => setSelectedCredential(credential)}>
            <span>{String(index + 1).padStart(2, '0')}</span>
            <div><h3>{credential.name}</h3><p>{credential.issuer}</p></div>
            <p>{credential.badge ?? credential.note}</p>
            <strong>{credential.year}</strong>
          </button>
        ))}
      </div>

      <PortfolioModal
        open={Boolean(selectedCredential)}
        onClose={closeCredential}
        eyebrow="Credential detail"
        title={selectedCredential?.name}
        description={selectedCredential?.summary}
        meta={selectedCredential ? [
          { label: 'Issued by', value: selectedCredential.issuer },
          { label: 'Recognition', value: selectedCredential.badge ?? selectedCredential.note },
          { label: 'Year', value: selectedCredential.year },
        ] : []}
        actions={selectedCredential ? [
          { label: 'View certificate', href: selectedCredential.href },
          { label: 'Download file', href: selectedCredential.href, download: true },
        ] : []}
      />
    </section>
  );
}
