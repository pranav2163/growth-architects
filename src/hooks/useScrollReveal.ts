import { useEffect, useRef } from "react";

interface ScrollRevealOptions {
  staggerChildren?: boolean;
  staggerDelay?: number; // ms between each child
  direction?: "up" | "left" | "right" | "scale";
  threshold?: number;
  delay?: number; // initial delay in ms
}

export function useScrollReveal<T extends HTMLElement = HTMLDivElement>(
  options: ScrollRevealOptions = {}
) {
  const {
    staggerChildren = false,
    staggerDelay = 80,
    direction = "up",
    threshold = 0.15,
    delay = 0,
  } = options;

  const ref = useRef<T>(null);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;

    // Hide initially
    el.style.opacity = "0";

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setTimeout(() => {
            el.style.opacity = "1";

            const animClass =
              direction === "left"
                ? "animate-slide-in-left"
                : direction === "right"
                ? "animate-slide-in-right"
                : direction === "scale"
                ? "animate-scale-in"
                : "animate-reveal-up";

            if (staggerChildren) {
              // Animate the container first
              el.classList.add("animate-fade-in");

              // Stagger each direct child with [data-reveal]
              const children = el.querySelectorAll("[data-reveal]");
              children.forEach((child, i) => {
                const childEl = child as HTMLElement;
                childEl.style.opacity = "0";
                childEl.style.transform =
                  direction === "left"
                    ? "translateX(-20px)"
                    : direction === "right"
                    ? "translateX(20px)"
                    : direction === "scale"
                    ? "scale(0.95)"
                    : "translateY(18px)";
                childEl.style.filter = "blur(4px)";

                setTimeout(() => {
                  childEl.style.transition = `all 0.65s cubic-bezier(0.16, 1, 0.3, 1)`;
                  childEl.style.opacity = "1";
                  childEl.style.transform =
                    direction === "scale" ? "scale(1)" : "translate(0)";
                  childEl.style.filter = "blur(0)";
                }, i * staggerDelay);
              });
            } else {
              el.classList.add(animClass);
            }
          }, delay);

          observer.unobserve(el);
        }
      },
      { threshold, rootMargin: "0px 0px -40px 0px" }
    );

    observer.observe(el);
    return () => observer.disconnect();
  }, [staggerChildren, staggerDelay, direction, threshold, delay]);

  return ref;
}
