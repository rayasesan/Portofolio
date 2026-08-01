import { useEffect, useRef } from 'react';

const interactiveSelector = [
  'a',
  'button',
  '[role="button"]',
  'input',
  'textarea',
  'select',
  '[tabindex]:not([tabindex="-1"])',
].join(',');

export default function CustomCursor() {
  const dotRef = useRef(null);
  const ringRef = useRef(null);

  useEffect(() => {
    const dot = dotRef.current;
    const ring = ringRef.current;

    if (!dot || !ring) {
      return undefined;
    }

    const finePointerQuery = window.matchMedia('(hover: hover) and (pointer: fine)');
    const reducedMotionQuery = window.matchMedia('(prefers-reduced-motion: reduce)');
    const root = document.documentElement;
    let animationFrame = 0;
    let targetX = -100;
    let targetY = -100;
    let ringX = -100;
    let ringY = -100;
    let enabled = false;

    const animate = () => {
      ringX += (targetX - ringX) * 0.18;
      ringY += (targetY - ringY) * 0.18;
      ring.style.transform = `translate3d(${ringX}px, ${ringY}px, 0) translate(-50%, -50%)`;
      animationFrame = window.requestAnimationFrame(animate);
    };

    const handlePointerMove = (event) => {
      targetX = event.clientX;
      targetY = event.clientY;
      dot.style.transform = `translate3d(${targetX}px, ${targetY}px, 0) translate(-50%, -50%)`;
      dot.classList.add('is-visible');
      ring.classList.add('is-visible');
    };

    const handlePointerOver = (event) => {
      ring.classList.toggle('is-hovering', Boolean(event.target.closest(interactiveSelector)));
    };

    const handlePointerDown = () => ring.classList.add('is-pressed');
    const handlePointerUp = () => ring.classList.remove('is-pressed');

    const handlePointerLeave = () => {
      dot.classList.remove('is-visible');
      ring.classList.remove('is-visible');
    };

    const removeListeners = () => {
      window.cancelAnimationFrame(animationFrame);
      window.removeEventListener('pointermove', handlePointerMove);
      document.removeEventListener('pointerover', handlePointerOver);
      document.removeEventListener('pointerdown', handlePointerDown);
      document.removeEventListener('pointerup', handlePointerUp);
      document.removeEventListener('mouseleave', handlePointerLeave);
      root.classList.remove('custom-cursor-enabled');
      dot.classList.remove('is-visible');
      ring.classList.remove('is-visible', 'is-hovering', 'is-pressed');
      enabled = false;
    };

    const syncCursor = () => {
      const shouldEnable = finePointerQuery.matches && !reducedMotionQuery.matches;

      if (shouldEnable === enabled) {
        return;
      }

      if (!shouldEnable) {
        removeListeners();
        return;
      }

      enabled = true;
      root.classList.add('custom-cursor-enabled');
      window.addEventListener('pointermove', handlePointerMove, { passive: true });
      document.addEventListener('pointerover', handlePointerOver, { passive: true });
      document.addEventListener('pointerdown', handlePointerDown, { passive: true });
      document.addEventListener('pointerup', handlePointerUp, { passive: true });
      document.addEventListener('mouseleave', handlePointerLeave);
      animationFrame = window.requestAnimationFrame(animate);
    };

    syncCursor();
    finePointerQuery.addEventListener('change', syncCursor);
    reducedMotionQuery.addEventListener('change', syncCursor);

    return () => {
      removeListeners();
      finePointerQuery.removeEventListener('change', syncCursor);
      reducedMotionQuery.removeEventListener('change', syncCursor);
    };
  }, []);

  return (
    <div aria-hidden="true">
      <span ref={ringRef} className="custom-cursor-ring"></span>
      <span ref={dotRef} className="custom-cursor-dot"></span>
    </div>
  );
}
