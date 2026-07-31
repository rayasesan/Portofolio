import { useEffect } from 'react';

export default function LivingGradientBackground() {
  useEffect(() => {
    const root = document.documentElement;
    const motionQuery = window.matchMedia('(prefers-reduced-motion: reduce)');

    if (motionQuery.matches) {
      root.style.setProperty('--grad-x', '62%');
      root.style.setProperty('--grad-y', '34%');
      root.style.setProperty('--grad-scroll', '0px');
      root.style.setProperty('--scroll-progress', '0');
      return undefined;
    }

    let pointerX = 0.62;
    let pointerY = 0.34;
    let currentX = pointerX;
    let currentY = pointerY;
    let frame = 0;

    const render = () => {
      currentX += (pointerX - currentX) * 0.08;
      currentY += (pointerY - currentY) * 0.08;
      root.style.setProperty('--grad-x', `${(currentX * 100).toFixed(2)}%`);
      root.style.setProperty('--grad-y', `${(currentY * 100).toFixed(2)}%`);
      root.style.setProperty('--grad-scroll', `${Math.min(window.scrollY * 0.08, 140).toFixed(2)}px`);
      frame = window.requestAnimationFrame(render);
    };

    const handlePointerMove = (event) => {
      pointerX = event.clientX / window.innerWidth;
      pointerY = event.clientY / window.innerHeight;
    };

    const handleScroll = () => {
      const maxScroll = Math.max(document.documentElement.scrollHeight - window.innerHeight, 1);
      const progress = Math.min(window.scrollY / maxScroll, 1);
      root.style.setProperty('--grad-scroll', `${Math.min(window.scrollY * 0.08, 140).toFixed(2)}px`);
      root.style.setProperty('--scroll-progress', progress.toFixed(4));
    };

    window.addEventListener('pointermove', handlePointerMove, { passive: true });
    window.addEventListener('scroll', handleScroll, { passive: true });
    handleScroll();
    frame = window.requestAnimationFrame(render);

    return () => {
      window.removeEventListener('pointermove', handlePointerMove);
      window.removeEventListener('scroll', handleScroll);
      window.cancelAnimationFrame(frame);
    };
  }, []);

  return (
    <>
      <div className="scroll-progress" aria-hidden="true"></div>
      <div className="living-gradient-bg" aria-hidden="true">
        <div className="living-gradient-field"></div>
        <div className="living-gradient-depth"></div>
        <div className="living-gradient-vignette"></div>
      </div>
    </>
  );
}
