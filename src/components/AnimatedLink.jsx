export default function AnimatedLink({
  children,
  className = '',
  compact = false,
  variant = 'red',
  ...props
}) {
  const classes = [
    'animated-pill',
    `animated-pill--${variant}`,
    compact ? 'animated-pill--compact' : '',
    className,
  ].filter(Boolean).join(' ');

  return (
    <a {...props} className={classes}>
      <span className="animated-pill__fill" aria-hidden="true"></span>
      <span className="animated-pill__label">{children}</span>
    </a>
  );
}
