"use client";

import React, { useEffect, useState, useRef } from "react";

export function CustomCursor() {
  const [isVisible, setIsVisible] = useState(false);
  const [isPointer, setIsPointer] = useState(false);
  const [cursorText, setCursorText] = useState("");
  const cursorRef = useRef<HTMLDivElement>(null);
  const posRef = useRef({ x: -100, y: -100, targetX: -100, targetY: -100 });
  const rafId = useRef<number | null>(null);

  useEffect(() => {
    // Disable on touch devices or if reduced motion is requested
    if (
      typeof window === "undefined" ||
      window.matchMedia("(pointer: coarse)").matches ||
      window.matchMedia("(prefers-reduced-motion: reduce)").matches
    ) {
      return;
    }

    const onMouseMove = (e: MouseEvent) => {
      posRef.current.targetX = e.clientX;
      posRef.current.targetY = e.clientY;
      if (!isVisible) setIsVisible(true);

      const target = e.target as HTMLElement | null;
      if (target) {
        const interactiveEl = target.closest("a, button, input, textarea, [data-cursor]");
        if (interactiveEl) {
          setIsPointer(true);
          const customText = interactiveEl.getAttribute("data-cursor-text");
          setCursorText(customText || "");
        } else {
          setIsPointer(false);
          setCursorText("");
        }
      }
    };

    const onMouseLeave = () => {
      setIsVisible(false);
    };

    window.addEventListener("mousemove", onMouseMove, { passive: true });
    document.addEventListener("mouseleave", onMouseLeave);

    const updatePosition = () => {
      const current = posRef.current;
      // Smooth interpolation
      current.x += (current.targetX - current.x) * 0.2;
      current.y += (current.targetY - current.y) * 0.2;

      if (cursorRef.current) {
        cursorRef.current.style.transform = `translate3d(${current.x}px, ${current.y}px, 0)`;
      }

      rafId.current = requestAnimationFrame(updatePosition);
    };

    rafId.current = requestAnimationFrame(updatePosition);

    return () => {
      window.removeEventListener("mousemove", onMouseMove);
      document.removeEventListener("mouseleave", onMouseLeave);
      if (rafId.current) cancelAnimationFrame(rafId.current);
    };
  }, [isVisible]);

  if (!isVisible) return null;

  return (
    <div
      ref={cursorRef}
      className="fixed top-0 left-0 pointer-events-none z-[9999] will-change-transform -translate-x-1/2 -translate-y-1/2 hidden md:block"
      style={{ left: 0, top: 0 }}
      aria-hidden="true"
    >
      <div
        className={`flex items-center justify-center rounded-full transition-all duration-300 ${
          cursorText
            ? "w-16 h-16 bg-white text-black font-mono text-[10px] uppercase font-bold tracking-wider -translate-x-1/2 -translate-y-1/2"
            : isPointer
            ? "w-10 h-10 bg-white/20 border border-white/50 backdrop-blur-sm -translate-x-1/2 -translate-y-1/2 scale-110"
            : "w-3 h-3 bg-white -translate-x-1/2 -translate-y-1/2"
        }`}
      >
        {cursorText}
      </div>
    </div>
  );
}
