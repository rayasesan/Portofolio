import { useEffect } from 'react';

export function useScrollReveal() {
  useEffect(() => {
    // Skill bars
    const skillObs = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.style.width = entry.target.getAttribute('data-w');
          skillObs.unobserve(entry.target);
        }
      });
    }, { threshold: 0.2 });

    document.querySelectorAll('.skill-fill').forEach((bar) => {
      skillObs.observe(bar);
    });

    // Scroll reveal
    const revealObs = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          const delay = entry.target.getAttribute('data-delay');
          setTimeout(() => {
            entry.target.classList.add('visible');
          }, delay ? parseInt(delay) : 0);
          revealObs.unobserve(entry.target);
        }
      });
    }, { threshold: 0.1, rootMargin: '0px 0px -50px 0px' });

    document.querySelectorAll('.reveal').forEach((el, i) => {
      if (!el.hasAttribute('data-delay')) {
        el.setAttribute('data-delay', (i % 10) * 80);
      }
      revealObs.observe(el);
    });

    return () => {
      skillObs.disconnect();
      revealObs.disconnect();
    };
  }, []);
}
