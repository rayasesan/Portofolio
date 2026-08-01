import { useEffect, useRef } from 'react';
import { credentials } from '../data/credentials';

export default function CredentialProof() {
  const sectionRef = useRef(null);
  const railRef = useRef(null);

  useEffect(() => {
    const section = sectionRef.current;
    const rail = railRef.current;

    if (!section || !rail) {
      return undefined;
    }

    const motionQuery = window.matchMedia('(prefers-reduced-motion: reduce)');
    let frame = 0;

    const clamp = (value) => Math.min(Math.max(value, 0), 1);

    const syncRailToPage = () => {
      if (motionQuery.matches) {
        return;
      }

      const rect = section.getBoundingClientRect();
      const maxScroll = rail.scrollWidth - rail.clientWidth;

      if (maxScroll <= 0) {
        rail.scrollLeft = 0;
        return;
      }

      const stickyOffset = 56;
      const progress = clamp((stickyOffset - rect.top) / maxScroll);

      rail.scrollLeft = maxScroll * progress;
    };

    const requestSync = () => {
      if (frame) {
        return;
      }

      frame = window.requestAnimationFrame(() => {
        frame = 0;
        syncRailToPage();
      });
    };

    const updateLayout = () => {
      const maxScroll = Math.max(rail.scrollWidth - rail.clientWidth, 0);

      if (motionQuery.matches) {
        section.style.setProperty('--credential-scroll-distance', '0px');
        rail.scrollLeft = 0;
        return;
      }

      section.style.setProperty('--credential-scroll-distance', `${maxScroll}px`);
      syncRailToPage();
    };

    const requestLayout = () => {
      if (frame) {
        window.cancelAnimationFrame(frame);
      }

      frame = window.requestAnimationFrame(() => {
        frame = 0;
        updateLayout();
      });
    };

    updateLayout();
    window.addEventListener('scroll', requestSync, { passive: true });
    window.addEventListener('resize', requestLayout);
    motionQuery.addEventListener('change', requestLayout);

    return () => {
      if (frame) {
        window.cancelAnimationFrame(frame);
      }

      window.removeEventListener('scroll', requestSync);
      window.removeEventListener('resize', requestLayout);
      motionQuery.removeEventListener('change', requestLayout);
    };
  }, []);

  return (
    <section ref={sectionRef} id="credentials" className="credential-scroll-section border-t border-r-steel">
      <div className="credential-sticky-shell">
        <div className="max-w-[1100px] mx-auto px-5 w-full">
          <div className="section-heading reveal mb-9 flex flex-col gap-4 lg:flex-row lg:items-end lg:justify-between">
            <div>
              <p className="section-kicker text-r-red">03 / Credentials</p>
              <h2 className="text-white text-4xl lg:text-6xl leading-[0.95]">
                Selected proof
              </h2>
            </div>
            <div className="max-w-sm lg:text-right">
              <p className="text-r-light text-sm leading-[1.7]">
                Certificates and awards that support the work. Scroll to continue the collection.
              </p>
              <p className="mt-2 text-r-red text-[10px] font-semibold tracking-[0.08em]">
                {credentials.length} verified credentials
              </p>
            </div>
          </div>

          <div
            ref={railRef}
            className="credential-rail"
            role="region"
            aria-label="Verified credentials"
            tabIndex="0"
          >
            {credentials.map((credential, index) => (
              <CredentialCard key={credential.name} credential={credential} index={index} />
            ))}
          </div>
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
      className={`credential-proof-card group flex min-h-[285px] flex-col rounded border bg-r-gray p-6 transition-all duration-300 hover:border-r-red/50 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-r-red ${
        credential.featured ? 'border-r-red/35' : 'border-r-steel'
      }`}
      aria-label={`View credential: ${credential.name}`}
    >
      <div className="mb-8 flex items-start justify-between gap-3">
        <span className="credential-index text-r-red">{String(index + 1).padStart(2, '0')}</span>
        {credential.badge && (
          <span className="credential-badge text-right text-[10px] font-medium text-r-red">
            {credential.badge}
          </span>
        )}
      </div>

      <p className="text-r-red text-[10px] font-medium tracking-[0.08em]">{credential.issuer}</p>
      <h3 className="mt-2 text-white text-2xl leading-tight">{credential.name}</h3>
      <p className="mt-4 text-r-light text-xs leading-[1.7]">{credential.summary}</p>

      <div className="mt-auto flex items-end justify-between gap-4 border-t border-r-steel pt-4">
        <div>
          <p className="text-r-silver text-[10px] font-medium leading-relaxed">{credential.note}</p>
          <p className="mt-1.5 text-r-red text-[10px] font-semibold">Open credential</p>
        </div>
        <p className="text-white text-[11px] font-medium">{credential.year}</p>
      </div>
    </a>
  );
}
