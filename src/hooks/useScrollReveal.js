import { useEffect } from 'react';

export function useScrollReveal() {
  useEffect(() => {
    const prefersReducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
    const revealElements = new WeakSet();
    let revealIndex = 0;

    const getRevealElements = (root = document) => {
      const elements = [];

      if (root.matches?.('.reveal')) {
        elements.push(root);
      }

      root.querySelectorAll?.('.reveal').forEach((element) => elements.push(element));

      return elements;
    };

    const observeAddedRevealElements = (callback) => {
      const mutationObs = new MutationObserver((mutations) => {
        mutations.forEach((mutation) => {
          mutation.addedNodes.forEach((node) => {
            if (node.nodeType === Node.ELEMENT_NODE) {
              getRevealElements(node).forEach(callback);
            }
          });
        });
      });

      mutationObs.observe(document.body, { childList: true, subtree: true });

      return mutationObs;
    };

    if (!('IntersectionObserver' in window) || prefersReducedMotion) {
      const showElement = (element) => element.classList.add('visible');
      getRevealElements().forEach(showElement);

      const mutationObs = observeAddedRevealElements(showElement);

      return () => {
        mutationObs.disconnect();
      };
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

    const observeRevealElement = (element) => {
      if (revealElements.has(element) || element.classList.contains('visible')) {
        return;
      }

      revealElements.add(element);

      if (!element.hasAttribute('data-delay')) {
        element.setAttribute('data-delay', (revealIndex % 10) * 80);
      }

      revealIndex += 1;
      revealObs.observe(element);
    };

    getRevealElements().forEach(observeRevealElement);
    const mutationObs = observeAddedRevealElements(observeRevealElement);

    return () => {
      timers.forEach((timer) => clearTimeout(timer));
      revealObs.disconnect();
      mutationObs.disconnect();
    };
  }, []);
}
