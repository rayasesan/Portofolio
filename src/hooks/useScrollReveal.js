import { useEffect } from 'react';

export function useScrollReveal() {
  useEffect(() => {
    const revealElements = document.querySelectorAll('.reveal');
    const prefersReducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;

    if (!('IntersectionObserver' in window) || prefersReducedMotion) {
      revealElements.forEach((element) => element.classList.add('visible'));
      return undefined;
    }

    const timers = new Set();
    const revealObs = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          const delay = entry.target.getAttribute('data-delay');
          const timer = setTimeout(() => {
            entry.target.classList.add('visible');
            timers.delete(timer);
          }, delay ? parseInt(delay) : 0);
          timers.add(timer);
          revealObs.unobserve(entry.target);
        }
      });
    }, { threshold: 0.1, rootMargin: '0px 0px -50px 0px' });

    revealElements.forEach((el, i) => {
      if (!el.hasAttribute('data-delay')) {
        el.setAttribute('data-delay', (i % 10) * 80);
      }
      revealObs.observe(el);
    });

    return () => {
      timers.forEach((timer) => clearTimeout(timer));
      revealObs.disconnect();
    };
  }, []);
}
