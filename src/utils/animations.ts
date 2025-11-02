// Shared animation utilities to reduce code duplication

export interface AnimationConfig {
  element: HTMLElement | null;
  animation: string;
  delay?: number;
}

/**
 * Animate a single element
 */
export function animateElement(element: HTMLElement | null, animation: string, delay = 0) {
  if (!element) return;

  setTimeout(() => {
    element.style.animation = animation;
  }, delay);
}

/**
 * Animate multiple elements with stagger
 */
export function animateWithStagger(elements: NodeListOf<Element> | Element[], animation: string, staggerDelay = 100, initialDelay = 0) {
  elements.forEach((element, index) => {
    setTimeout(() => {
      (element as HTMLElement).style.animation = animation;
    }, initialDelay + index * staggerDelay);
  });
}

/**
 * Standard Intersection Observer setup for scroll animations
 */
export function createScrollObserver(callback: (entry: IntersectionObserverEntry) => void, options?: IntersectionObserverInit) {
  const defaultOptions: IntersectionObserverInit = {
    threshold: 0.15,
    rootMargin: "0px 0px -80px 0px",
    ...options,
  };

  return new IntersectionObserver((entries) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        callback(entry);
      }
    });
  }, defaultOptions);
}
