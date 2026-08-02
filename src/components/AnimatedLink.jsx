export default function AnimatedLink({ children, className = '', compact = false, variant = 'solid', ...props }) {
  const classes = ['action-link', `action-link--${variant}`, compact ? 'is-compact' : '', className]
    .filter(Boolean)
    .join(' ');

  return (
    <a {...props} className={classes}>
      <span className="action-link__fill" aria-hidden="true"></span>
      <span className="action-link__label">{children}</span>
    </a>
  );
}
