export const loadGSAP = async () => {
  const { gsap } = await import("gsap");
  const { ScrollTrigger } = await import("gsap/ScrollTrigger");
  gsap.registerPlugin(ScrollTrigger);
  return { gsap, ScrollTrigger };
};

export const MOTION_SPRING = { type: "spring" as const, stiffness: 300, damping: 25 };

export const EASING = "cubic-bezier(0.22, 1, 0.36, 1)";
