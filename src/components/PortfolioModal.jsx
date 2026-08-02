import { useEffect, useId, useRef } from 'react';

const focusableSelector = 'button:not([disabled]), a[href], [tabindex]:not([tabindex="-1"])';

export default function PortfolioModal({
  open,
  onClose,
  eyebrow,
  title,
  description,
  meta = [],
  image,
  imageAlt = '',
  actions = [],
}) {
  const titleId = useId();
  const descriptionId = useId();
  const panelRef = useRef(null);
  const closeRef = useRef(null);

  useEffect(() => {
    if (!open) return undefined;

    const previousFocus = document.activeElement;
    const previousOverflow = document.body.style.overflow;
    const focusFrame = requestAnimationFrame(() => closeRef.current?.focus());

    document.body.style.overflow = 'hidden';

    const handleKeyDown = (event) => {
      if (event.key === 'Escape') {
        event.preventDefault();
        onClose();
        return;
      }

      if (event.key !== 'Tab') return;
      const focusable = [...(panelRef.current?.querySelectorAll(focusableSelector) ?? [])];
      if (!focusable.length) return;

      if (event.shiftKey && document.activeElement === focusable[0]) {
        event.preventDefault();
        focusable.at(-1)?.focus();
      } else if (!event.shiftKey && document.activeElement === focusable.at(-1)) {
        event.preventDefault();
        focusable[0]?.focus();
      }
    };

    window.addEventListener('keydown', handleKeyDown);

    return () => {
      cancelAnimationFrame(focusFrame);
      document.body.style.overflow = previousOverflow;
      window.removeEventListener('keydown', handleKeyDown);
      previousFocus?.focus?.();
    };
  }, [open, onClose]);

  if (!open) return null;

  return (
    <div className="portfolio-modal" onMouseDown={(event) => event.target === event.currentTarget && onClose()}>
      <section
        ref={panelRef}
        className={`portfolio-modal__panel ${image ? 'has-media' : ''}`}
        role="dialog"
        aria-modal="true"
        aria-labelledby={titleId}
        aria-describedby={descriptionId}
      >
        <button ref={closeRef} className="portfolio-modal__close" type="button" onClick={onClose}>Close</button>

        {image && (
          <figure className="portfolio-modal__media">
            <img src={image} alt={imageAlt} />
          </figure>
        )}

        <div className="portfolio-modal__body">
          <p className="portfolio-modal__eyebrow">{eyebrow}</p>
          <h2 id={titleId}>{title}</h2>
          <p id={descriptionId} className="portfolio-modal__description">{description}</p>

          <dl className="portfolio-modal__meta">
            {meta.map(({ label, value }) => (
              <div key={label}>
                <dt>{label}</dt>
                <dd>{value}</dd>
              </div>
            ))}
          </dl>

          <div className="portfolio-modal__actions">
            {actions.map((action, index) => (
              <a
                className={index === 0 ? 'is-primary' : ''}
                href={action.href}
                target="_blank"
                rel="noopener noreferrer"
                download={action.download || undefined}
                key={`${action.label}-${action.href}`}
              >
                {action.label}
              </a>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
