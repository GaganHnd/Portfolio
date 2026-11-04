import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

let isRegistered = false;

export function registerGSAP() {
  if (typeof window !== "undefined" && !isRegistered) {
    gsap.registerPlugin(ScrollTrigger);
    isRegistered = true;
  }
  return { gsap, ScrollTrigger };
}

export const EASE = {
  cinematic: "power3.out",
  editorial: "expo.out",
  smooth: "power2.inOut",
  elastic: "elastic.out(1, 0.75)",
};

export const DURATION = {
  fast: 0.4,
  base: 0.8,
  slow: 1.2,
  cinematic: 1.6,
};
