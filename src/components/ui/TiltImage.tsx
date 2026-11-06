"use client";

import React, { useRef, useEffect } from "react";
import { registerGSAP } from "@/lib/animations";

interface TiltImageProps {
  children: React.ReactNode;
  className?: string;
  maxTilt?: number; // Maximum tilt rotation angle in degrees (default 4deg)
}

/**
 * TiltImage provides an interactive 3D perspective tilt effect on cursor hover.
 * - Restrained rotation of 3–5 degrees.
 * - Smooth interpolation without jitter.
 * - Disabled on touch devices and respects prefers-reduced-motion.
 */
export function TiltImage({
  children,
  className = "",
  maxTilt = 4,
}: TiltImageProps) {
  const containerRef = useRef<HTMLDivElement>(null);
  const cardRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const container = containerRef.current;
    const card = cardRef.current;
    if (!container || !card) return;

    const { gsap } = registerGSAP();

    const handlePointerMove = (e: PointerEvent | MouseEvent) => {
      // 1. Accessibility check: disable when user prefers reduced motion
      if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;

      // 2. Device check: disable on touch devices
      if ('pointerType' in e && e.pointerType === 'touch') return;
      if (!window.matchMedia("(hover: hover) and (pointer: fine)").matches) return;

      const rect = container.getBoundingClientRect();
      if (rect.width === 0 || rect.height === 0) return;

      // Normalized coordinates from center: -0.5 to +0.5
      const normX = (e.clientX - rect.left) / rect.width - 0.5;
      const normY = (e.clientY - rect.top) / rect.height - 0.5;

      // Calculate restrained tilt angles (approx 3-5 degrees maximum)
      const rotX = -normY * (maxTilt * 2);
      const rotY = normX * (maxTilt * 2);

      gsap.to(card, {
        rotateX: rotX,
        rotateY: rotY,
        transformPerspective: 1000,
        transformStyle: "preserve-3d",
        duration: 0.35,
        ease: "power1.out",
        overwrite: "auto",
      });
    };

    const handlePointerLeave = () => {
      // Smoothly return to original resting orientation
      gsap.to(card, {
        rotateX: 0,
        rotateY: 0,
        duration: 0.6,
        ease: "power2.out",
        overwrite: "auto",
      });
    };

    container.addEventListener("pointermove", handlePointerMove);
    container.addEventListener("pointerleave", handlePointerLeave);
    container.addEventListener("mousemove", handlePointerMove);
    container.addEventListener("mouseleave", handlePointerLeave);

    return () => {
      container.removeEventListener("pointermove", handlePointerMove);
      container.removeEventListener("pointerleave", handlePointerLeave);
      container.removeEventListener("mousemove", handlePointerMove);
      container.removeEventListener("mouseleave", handlePointerLeave);
      gsap.killTweensOf(card);
    };
  }, [maxTilt]);

  return (
    <div
      ref={containerRef}
      data-tilt-image="true"
      className={`relative ${className}`}
      style={{ perspective: "1000px" }}
    >
      <div
        ref={cardRef}
        data-tilt-card="true"
        className="w-full h-full will-change-transform"
        style={{ transformStyle: "preserve-3d" }}
      >
        {children}
      </div>
    </div>
  );
}
