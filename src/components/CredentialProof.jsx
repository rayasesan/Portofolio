import { useEffect, useRef } from 'react';
import { credentials } from '../data/credentials';

export default function CredentialProof() {
  const railRef = useRef(null);

  useEffect(() => {
    const rail = railRef.current;

    if (!rail) {
      return undefined;
    }

    const handleWheel = (event) => {
      if (Math.abs(event.deltaY) <= Math.abs(event.deltaX)) {
        return;
      }

      const maxScroll = rail.scrollWidth - rail.clientWidth;
      const scrollingRight = event.deltaY > 0;
      const canMoveRight = rail.scrollLeft < maxScroll - 1;
      const canMoveLeft = rail.scrollLeft > 1;

      if ((scrollingRight && !canMoveRight) || (!scrollingRight && !canMoveLeft)) {
        return;
      }

      event.preventDefault();

      const modeMultiplier = event.deltaMode === 1
        ? 20
        : event.deltaMode === 2
          ? rail.clientWidth
          : 1;
      const rawDistance = event.deltaY * modeMultiplier * 1.15;
      const distance = Math.sign(rawDistance) * Math.min(Math.abs(rawDistance), 180);

      rail.scrollLeft += distance;
    };

    rail.addEventListener('wheel', handleWheel, { passive: false });

    return () => rail.removeEventListener('wheel', handleWheel);
  }, []);

  return (
    <section id="credentials" className="py-20 lg:py-24 border-t border-r-steel">
      <div className="max-w-[1100px] mx-auto px-5">
        <div className="reveal mb-7 flex flex-col gap-4 lg:flex-row lg:items-end lg:justify-between">
          <div>
            <p className="text-r-red text-[10px] font-bold tracking-[0.25em] uppercase mb-2">03 / Credentials</p>
            <h2 className="text-white font-black text-3xl lg:text-4xl uppercase tracking-tight leading-[0.9]">
              Verified Proof
            </h2>
          </div>
          <div className="max-w-sm lg:text-right">
            <p className="text-r-light text-sm leading-relaxed">
              Selected certificates and awards. Scroll down or swipe to browse.
            </p>
            <p className="mt-2 text-r-red text-[9px] font-bold uppercase tracking-[0.18em]">
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
          {credentials.map((credential) => (
            <CredentialCard key={credential.name} credential={credential} />
          ))}
        </div>
      </div>
    </section>
  );
}

function CredentialCard({ credential }) {
  return (
    <a
      href={credential.href}
      target="_blank"
      rel="noopener noreferrer"
      className={`credential-proof-card group flex min-h-[270px] flex-col rounded border bg-r-gray p-5 transition-all duration-300 hover:border-r-red/50 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-r-red ${
        credential.featured ? 'border-r-red/35' : 'border-r-steel'
      }`}
      aria-label={`View credential: ${credential.name}`}
    >
      <div className="mb-6 flex min-h-9 items-start justify-between gap-3">
        <span className="flex h-10 w-10 flex-shrink-0 items-center justify-center rounded bg-r-red/10 text-r-red transition-colors group-hover:bg-r-red/20">
          <span className="iconify" data-icon={credential.icon} data-width="17"></span>
        </span>
        {credential.badge && (
          <span className="rounded bg-r-red px-2.5 py-1 text-right text-[9px] font-black uppercase tracking-[0.14em] text-black">
            {credential.badge}
          </span>
        )}
      </div>

      <p className="text-r-red text-[9px] font-bold uppercase tracking-[0.18em]">{credential.issuer}</p>
      <h3 className="mt-2 text-white text-base font-black uppercase tracking-tight leading-tight">{credential.name}</h3>
      <p className="mt-3 text-r-light text-xs leading-relaxed">{credential.summary}</p>

      <div className="mt-auto flex items-end justify-between gap-4 border-t border-r-steel pt-4">
        <div>
          <p className="text-r-silver text-[9px] font-bold uppercase tracking-wider leading-relaxed">{credential.note}</p>
          <p className="mt-1 text-r-red text-[9px] font-black uppercase tracking-[0.15em]">View credential</p>
        </div>
        <p className="text-white text-[10px] font-black uppercase tracking-wider">{credential.year}</p>
      </div>
    </a>
  );
}
