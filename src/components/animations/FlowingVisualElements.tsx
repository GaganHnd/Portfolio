"use client";

import React, { useEffect, useRef } from "react";
import { registerGSAP } from "@/lib/animations";

/**
 * FlowingVisualElements
 * Inspired by the official gsap.com/scroll showcase (curved 3D gradient tubes,
 * morphing 4-petal geometric cross, orbital perspective rings, and floating crystal shards).
 * Uses pure high-performance SVG and CSS 3D transforms driven by GSAP ScrollTrigger scrubs.
 * Palette: Pure White (#FFFFFF), Electric Lime Green (#B7FF00), translucent gradients, dark background (#050505).
 */
export function FlowingVisualElements() {
  const containerRef = useRef<HTMLDivElement>(null);
  const tubeRef = useRef<SVGSVGElement>(null);
  const geometricFlowerRef = useRef<SVGSVGElement>(null);
  const orbitalRingsRef = useRef<HTMLDivElement>(null);
  const floatingShard1Ref = useRef<HTMLDivElement>(null);
  const floatingShard2Ref = useRef<HTMLDivElement>(null);
  const floatingShard3Ref = useRef<HTMLDivElement>(null);
  const floatingShard4Ref = useRef<HTMLDivElement>(null);
  const connectingThreadRef = useRef<SVGPathElement>(null);

  useEffect(() => {
    const prefersReducedMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    if (prefersReducedMotion || !containerRef.current) return;

    const { gsap, ScrollTrigger } = registerGSAP();

    const ctx = gsap.context(() => {
      // 1. THE 3D CURVED GRADIENT TUBE / CAPSULE (Hero -> Summary -> About)
      // Floats gracefully in the upper half, rotating along 3D axes and gliding downwards
      if (tubeRef.current) {
        gsap.fromTo(
          tubeRef.current,
          {
            y: 40,
            x: 0,
            rotation: -12,
            scale: 0.9,
            opacity: 0.75,
            transformPerspective: 1200,
            rotateX: 18,
            rotateY: -15,
          },
          {
            y: 850,
            x: -80,
            rotation: 85,
            scale: 1.12,
            opacity: 0.9,
            rotateX: -22,
            rotateY: 25,
            ease: "none",
            scrollTrigger: {
              trigger: document.body,
              start: "top top",
              end: "25% top",
              scrub: 1.2,
            },
          }
        );

        // Continue tube journey down through About into Graphic Design with graceful fade
        gsap.to(tubeRef.current, {
          y: 1900,
          x: 120,
          rotation: 195,
          scale: 0.7,
          opacity: 0.15,
          rotateX: 40,
          ease: "none",
          scrollTrigger: {
            trigger: document.body,
            start: "25% top",
            end: "50% top",
            scrub: 1.2,
          },
        });
      }

      // 2. THE MORPHING 4-PETAL GEOMETRIC CROSS / FLOWER (About -> Graphic Design -> UI/UX)
      // Directly inspired by frame 2 in the GSAP showcase
      if (geometricFlowerRef.current) {
        gsap.fromTo(
          geometricFlowerRef.current,
          {
            y: 120,
            rotation: 0,
            scale: 0.65,
            opacity: 0.2,
            rotateX: 20,
          },
          {
            y: 0,
            rotation: 360,
            scale: 1.05,
            opacity: 0.85,
            rotateX: 0,
            ease: "none",
            scrollTrigger: {
              trigger: "#about",
              start: "top bottom",
              end: "bottom top",
              scrub: 1.5,
            },
          }
        );

        // Spin and glide through the Graphic Design section
        gsap.to(geometricFlowerRef.current, {
          y: -150,
          rotation: 720,
          scale: 0.75,
          opacity: 0.35,
          ease: "none",
          scrollTrigger: {
            trigger: "#work",
            start: "top bottom",
            end: "bottom top",
            scrub: 1.5,
          },
        });
      }

      // 3. THE 3D ORBITAL PERSPECTIVE RINGS (UI/UX -> Digital Products -> Experience)
      // Directly inspired by frame 1 & 3 in the GSAP showcase
      if (orbitalRingsRef.current) {
        gsap.fromTo(
          orbitalRingsRef.current,
          {
            y: 150,
            scale: 0.7,
            rotation: -20,
            opacity: 0.2,
          },
          {
            y: -40,
            scale: 1.1,
            rotation: 45,
            opacity: 0.8,
            ease: "none",
            scrollTrigger: {
              trigger: "#ui-ux",
              start: "top bottom",
              end: "bottom top",
              scrub: 1.4,
            },
          }
        );

        // Continue orbit into Digital Products
        gsap.to(orbitalRingsRef.current, {
          y: -220,
          scale: 0.85,
          rotation: 120,
          opacity: 0.25,
          ease: "none",
          scrollTrigger: {
            trigger: "#digital-products",
            start: "top bottom",
            end: "bottom top",
            scrub: 1.4,
          },
        });
      }

      // 4. FLOATING CRYSTAL POLYGON SHARDS (Multi-depth parallax)
      const shards = [
        { ref: floatingShard1Ref, yStart: 50, yEnd: -450, rot: 180, scrub: 0.9 },
        { ref: floatingShard2Ref, yStart: -100, yEnd: 600, rot: -240, scrub: 1.6 },
        { ref: floatingShard3Ref, yStart: 120, yEnd: -650, rot: 320, scrub: 2.1 },
        { ref: floatingShard4Ref, yStart: -50, yEnd: 500, rot: -160, scrub: 1.3 },
      ];

      shards.forEach(({ ref, yStart, yEnd, rot, scrub }) => {
        if (ref.current) {
          gsap.fromTo(
            ref.current,
            { y: yStart, rotation: 0 },
            {
              y: yEnd,
              rotation: rot,
              ease: "none",
              scrollTrigger: {
                trigger: document.body,
                start: "top top",
                end: "bottom bottom",
                scrub: scrub,
              },
            }
          );
        }
      });

      // 5. CONTINUOUS SVG CONNECTING THREAD (Scroll progress path)
      if (connectingThreadRef.current) {
        const pathLength = connectingThreadRef.current.getTotalLength();
        gsap.set(connectingThreadRef.current, {
          strokeDasharray: pathLength,
          strokeDashoffset: pathLength,
        });

        gsap.to(connectingThreadRef.current, {
          strokeDashoffset: 0,
          ease: "none",
          scrollTrigger: {
            trigger: document.body,
            start: "top top",
            end: "bottom bottom",
            scrub: 0.8,
          },
        });
      }
    }, containerRef);

    return () => ctx.revert();
  }, []);

  return (
    <div
      ref={containerRef}
      aria-hidden="true"
      className="pointer-events-none fixed inset-0 z-[1] overflow-hidden select-none"
    >
      {/* ========================================================= */}
      {/* 1. THE 3D CURVED GRADIENT TUBE (Top / Hero / About)       */}
      {/* ========================================================= */}
      <div className="absolute top-[8vh] right-[4vw] sm:right-[7vw] lg:right-[10vw] w-[260px] h-[340px] sm:w-[360px] h-[460px] lg:w-[440px] lg:h-[560px] perspective-[1000px]">
        <svg
          ref={tubeRef}
          viewBox="0 0 440 560"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
          className="w-full h-full will-change-transform filter drop-shadow-[0_20px_50px_rgba(183,255,0,0.18)]"
        >
          <defs>
            {/* Volumetric Gradient for 3D Curved Tube */}
            <linearGradient id="tubeGradient" x1="15%" y1="10%" x2="85%" y2="90%">
              <stop offset="0%" stopColor="#FFFFFF" stopOpacity="0.95" />
              <stop offset="35%" stopColor="#B7FF00" stopOpacity="0.9" />
              <stop offset="65%" stopColor="#1C2605" stopOpacity="0.75" />
              <stop offset="100%" stopColor="#050505" stopOpacity="0.85" />
            </linearGradient>

            {/* Specular Highlight along Tube Ridge */}
            <linearGradient id="tubeSpecular" x1="0%" y1="0%" x2="100%" y2="100%">
              <stop offset="0%" stopColor="#FFFFFF" stopOpacity="0.9" />
              <stop offset="30%" stopColor="#FFFFFF" stopOpacity="0.4" />
              <stop offset="60%" stopColor="#B7FF00" stopOpacity="0.2" />
              <stop offset="100%" stopColor="#FFFFFF" stopOpacity="0" />
            </linearGradient>

            {/* Ambient Lime Glow Filter */}
            <filter id="limeGlow" x="-20%" y="-20%" width="140%" height="140%">
              <feGaussianBlur stdDeviation="16" result="blur" />
              <feComposite in="SourceGraphic" in2="blur" operator="over" />
            </filter>
          </defs>

          {/* Background Ambient Aura */}
          <ellipse
            cx="220"
            cy="280"
            rx="160"
            ry="200"
            fill="radial-gradient(circle, rgba(183,255,0,0.12) 0%, transparent 70%)"
            className="opacity-70"
          />

          {/* Main 3D Curved Ribbon Tube Shape */}
          <path
            d="M 120 80 C 260 40, 360 140, 340 260 C 320 380, 160 420, 140 480 C 120 540, 200 560, 260 540 C 340 510, 390 410, 400 310"
            stroke="url(#tubeGradient)"
            strokeWidth="56"
            strokeLinecap="round"
            strokeLinejoin="round"
            fill="none"
          />

          {/* High-Gloss Specular Ridge Line */}
          <path
            d="M 124 74 C 262 34, 362 136, 342 256 C 322 376, 162 416, 142 476 C 122 536, 202 556, 262 536"
            stroke="url(#tubeSpecular)"
            strokeWidth="10"
            strokeLinecap="round"
            fill="none"
          />

          {/* Floating Geo Accents Near Tube */}
          <circle cx="110" cy="70" r="7" fill="#B7FF00" className="animate-pulse" />
          <polygon
            points="380,180 392,192 380,204 368,192"
            fill="#FFFFFF"
            opacity="0.8"
          />
        </svg>
      </div>

      {/* ========================================================= */}
      {/* 2. THE 4-PETAL GEOMETRIC CROSS / FLOWER (Middle / Design) */}
      {/* ========================================================= */}
      <div className="absolute top-[42vh] left-[3vw] sm:left-[6vw] lg:left-[8vw] w-[220px] h-[220px] sm:w-[300px] sm:h-[300px] lg:w-[360px] lg:h-[360px]">
        <svg
          ref={geometricFlowerRef}
          viewBox="0 0 300 300"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
          className="w-full h-full will-change-transform filter drop-shadow-[0_15px_40px_rgba(183,255,0,0.15)]"
        >
          <defs>
            <linearGradient id="petalGrad1" x1="0%" y1="0%" x2="100%" y2="100%">
              <stop offset="0%" stopColor="#FFFFFF" stopOpacity="0.85" />
              <stop offset="50%" stopColor="#B7FF00" stopOpacity="0.65" />
              <stop offset="100%" stopColor="#050505" stopOpacity="0.4" />
            </linearGradient>
            <linearGradient id="petalGrad2" x1="100%" y1="0%" x2="0%" y2="100%">
              <stop offset="0%" stopColor="#B7FF00" stopOpacity="0.8" />
              <stop offset="60%" stopColor="#FFFFFF" stopOpacity="0.5" />
              <stop offset="100%" stopColor="#0a0a0a" stopOpacity="0.3" />
            </linearGradient>
          </defs>

          {/* 4 Overlapping Curved Geometric Petals forming the GSAP-style flower */}
          {/* Top Petal */}
          <path
            d="M 150 150 C 110 90, 110 30, 150 20 C 190 30, 190 90, 150 150 Z"
            fill="url(#petalGrad1)"
            stroke="rgba(255,255,255,0.25)"
            strokeWidth="1.5"
          />
          {/* Right Petal */}
          <path
            d="M 150 150 C 210 110, 270 110, 280 150 C 270 190, 210 190, 150 150 Z"
            fill="url(#petalGrad2)"
            stroke="rgba(183,255,0,0.3)"
            strokeWidth="1.5"
          />
          {/* Bottom Petal */}
          <path
            d="M 150 150 C 190 210, 190 270, 150 280 C 110 270, 110 210, 150 150 Z"
            fill="url(#petalGrad1)"
            stroke="rgba(255,255,255,0.25)"
            strokeWidth="1.5"
          />
          {/* Left Petal */}
          <path
            d="M 150 150 C 90 190, 30 190, 20 150 C 30 110, 90 110, 150 150 Z"
            fill="url(#petalGrad2)"
            stroke="rgba(183,255,0,0.3)"
            strokeWidth="1.5"
          />

          {/* Central Precision Target Rings */}
          <circle cx="150" cy="150" r="16" fill="#050505" stroke="#B7FF00" strokeWidth="2" />
          <circle cx="150" cy="150" r="5" fill="#FFFFFF" />

          {/* Orbiting Tiny Satellites */}
          <circle cx="150" cy="50" r="3" fill="#B7FF00" />
          <circle cx="250" cy="150" r="3" fill="#FFFFFF" />
          <circle cx="150" cy="250" r="3" fill="#B7FF00" />
          <circle cx="50" cy="150" r="3" fill="#FFFFFF" />
        </svg>
      </div>

      {/* ========================================================= */}
      {/* 3. THE 3D ORBITAL PERSPECTIVE RINGS (UI/UX & Products)    */}
      {/* ========================================================= */}
      <div
        ref={orbitalRingsRef}
        className="absolute top-[65vh] right-[2vw] sm:right-[5vw] lg:right-[8vw] w-[260px] h-[260px] sm:w-[340px] sm:h-[340px] lg:w-[420px] lg:h-[420px] will-change-transform"
        style={{ perspective: 800 }}
      >
        <div
          className="w-full h-full relative"
          style={{ transform: "rotateX(62deg) rotateZ(28deg)" }}
        >
          {/* Outer Ring */}
          <div className="absolute inset-0 rounded-full border border-white/20 shadow-[0_0_30px_rgba(183,255,0,0.15)]" />
          
          {/* Dashed Mid Ring with Gradient Accent */}
          <div className="absolute inset-6 rounded-full border border-dashed border-[#B7FF00]/40" />

          {/* Glowing Inner Torus Core */}
          <div className="absolute inset-14 rounded-full border-2 border-white/30 bg-gradient-to-tr from-transparent via-[#B7FF00]/10 to-white/10" />

          {/* Orbiting Luminescent Sphere on Ring Track */}
          <div className="absolute top-0 left-1/2 -translate-x-1/2 -translate-y-1/2 w-7 h-7 rounded-full bg-gradient-to-br from-white via-[#B7FF00] to-neutral-900 shadow-[0_0_20px_#B7FF00]" />
          <div className="absolute bottom-4 left-1/4 w-3.5 h-3.5 rounded-full bg-white/80 shadow-[0_0_12px_#ffffff]" />
        </div>
      </div>

      {/* ========================================================= */}
      {/* 4. MULTI-DEPTH FLOATING FACETED SHARDS                    */}
      {/* ========================================================= */}
      {/* Shard 1: Top Left Near Hero */}
      <div
        ref={floatingShard1Ref}
        className="absolute top-[18vh] left-[8vw] w-9 h-9 will-change-transform opacity-70"
      >
        <svg viewBox="0 0 40 40" className="w-full h-full">
          <polygon
            points="20,2 38,18 28,38 8,32 4,14"
            fill="url(#shardGrad1)"
            stroke="rgba(255,255,255,0.4)"
            strokeWidth="1"
          />
          <defs>
            <linearGradient id="shardGrad1" x1="0%" y1="0%" x2="100%" y2="100%">
              <stop offset="0%" stopColor="#FFFFFF" stopOpacity="0.8" />
              <stop offset="100%" stopColor="#B7FF00" stopOpacity="0.2" />
            </linearGradient>
          </defs>
        </svg>
      </div>

      {/* Shard 2: Mid Right Near Summary/About */}
      <div
        ref={floatingShard2Ref}
        className="absolute top-[48vh] right-[14vw] w-12 h-12 will-change-transform opacity-60"
      >
        <svg viewBox="0 0 50 50" className="w-full h-full">
          <polygon
            points="25,4 46,25 35,46 12,42 4,20"
            fill="url(#shardGrad2)"
            stroke="rgba(183,255,0,0.5)"
            strokeWidth="1"
          />
          <defs>
            <linearGradient id="shardGrad2" x1="0%" y1="0%" x2="100%" y2="100%">
              <stop offset="0%" stopColor="#B7FF00" stopOpacity="0.7" />
              <stop offset="100%" stopColor="#050505" stopOpacity="0.2" />
            </linearGradient>
          </defs>
        </svg>
      </div>

      {/* Shard 3: Lower Left Near Work Showcase */}
      <div
        ref={floatingShard3Ref}
        className="absolute top-[72vh] left-[5vw] w-8 h-8 will-change-transform opacity-65"
      >
        <svg viewBox="0 0 36 36" className="w-full h-full">
          <polygon
            points="18,2 34,16 26,34 6,28 2,12"
            fill="url(#shardGrad3)"
            stroke="rgba(255,255,255,0.3)"
            strokeWidth="1"
          />
          <defs>
            <linearGradient id="shardGrad3" x1="0%" y1="0%" x2="100%" y2="100%">
              <stop offset="0%" stopColor="#FFFFFF" stopOpacity="0.9" />
              <stop offset="100%" stopColor="#B7FF00" stopOpacity="0.1" />
            </linearGradient>
          </defs>
        </svg>
      </div>

      {/* Shard 4: Lower Right Near Contact */}
      <div
        ref={floatingShard4Ref}
        className="absolute top-[88vh] right-[18vw] w-10 h-10 will-change-transform opacity-50"
      >
        <svg viewBox="0 0 44 44" className="w-full h-full">
          <polygon
            points="22,3 41,20 32,41 10,36 3,17"
            fill="url(#shardGrad4)"
            stroke="rgba(183,255,0,0.4)"
            strokeWidth="1"
          />
          <defs>
            <linearGradient id="shardGrad4" x1="0%" y1="0%" x2="100%" y2="100%">
              <stop offset="0%" stopColor="#B7FF00" stopOpacity="0.6" />
              <stop offset="100%" stopColor="#FFFFFF" stopOpacity="0.2" />
            </linearGradient>
          </defs>
        </svg>
      </div>

      {/* ========================================================= */}
      {/* 5. CONTINUOUS SVG FLOWING CONNECTING THREAD               */}
      {/* Subtle spine that flows down the left margin              */}
      {/* ========================================================= */}
      <div className="absolute top-0 left-0 bottom-0 w-24 hidden md:block opacity-35">
        <svg
          viewBox="0 0 100 1000"
          preserveAspectRatio="none"
          className="w-full h-full"
          fill="none"
        >
          <defs>
            <linearGradient id="threadGrad" x1="0%" y1="0%" x2="0%" y2="100%">
              <stop offset="0%" stopColor="#FFFFFF" stopOpacity="0.1" />
              <stop offset="30%" stopColor="#B7FF00" stopOpacity="0.8" />
              <stop offset="70%" stopColor="#FFFFFF" stopOpacity="0.8" />
              <stop offset="100%" stopColor="#B7FF00" stopOpacity="0.3" />
            </linearGradient>
          </defs>
          <path
            ref={connectingThreadRef}
            d="M 50 0 Q 80 250, 40 500 T 60 750 T 50 1000"
            stroke="url(#threadGrad)"
            strokeWidth="1.5"
            strokeLinecap="round"
          />
        </svg>
      </div>
    </div>
  );
}
