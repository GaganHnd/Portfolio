"use client";

import React, { useEffect, useRef } from "react";
import { personalInfo } from "@/data/social-links";
import { Badge } from "@/components/ui/Badge";
import { Button } from "@/components/ui/Button";
import { MagneticWrapper } from "@/components/ui/MagneticWrapper";
import { registerGSAP, EASE } from "@/lib/animations";
import { ArrowDown } from "lucide-react";

export function HeroSection() {
  const containerRef = useRef<HTMLElement>(null);

  useEffect(() => {
    const prefersReducedMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    if (prefersReducedMotion || !containerRef.current) return;

    const { gsap } = registerGSAP();

    const ctx = gsap.context(() => {
      const tl = gsap.timeline({
        defaults: { ease: EASE.power4 },
      });

      // 1. Meta telemetry fade down
      tl.fromTo(
        ".hero-telemetry",
        { opacity: 0, y: -16 },
        { opacity: 1, y: 0, duration: 0.8, delay: 0.15 }
      );

      // 2. Line-by-line monumental typography reveal
      tl.fromTo(
        ".hero-title-line",
        { yPercent: 125, opacity: 0 },
        {
          yPercent: 0,
          opacity: 1,
          duration: 1.25,
          stagger: 0.14,
          ease: "power4.out",
        },
        "-=0.5"
      );

      // 3. Tagline border expansion & text reveal
      tl.fromTo(
        ".hero-tagline-border",
        { scaleX: 0, transformOrigin: "left" },
        { scaleX: 1, duration: 0.9, ease: "expo.out" },
        "-=0.7"
      );

      tl.fromTo(
        ".hero-tagline-item",
        { y: 22, opacity: 0 },
        { y: 0, opacity: 1, duration: 0.8, stagger: 0.08, ease: "power3.out" },
        "-=0.6"
      );

      // 4. Narrative story & CTA buttons
      tl.fromTo(
        ".hero-narrative",
        { y: 20, opacity: 0 },
        { y: 0, opacity: 1, duration: 0.85, ease: "power3.out" },
        "-=0.5"
      );

      tl.fromTo(
        ".hero-cta-btn",
        { y: 18, opacity: 0 },
        { y: 0, opacity: 1, duration: 0.7, stagger: 0.1, ease: "power3.out" },
        "-=0.6"
      );

      // 5. Scroll down indicator
      tl.fromTo(
        ".hero-scroll-indicator",
        { opacity: 0, y: 12 },
        { opacity: 1, y: 0, duration: 0.8, ease: "power2.out" },
        "-=0.3"
      );

      // 6. Scroll-linked cinematic perspective on scroll out
      // Targets the outer title and container blocks with explicit fromTo values,
      // ensuring zero collision with inner line-reveal transforms and 100% stable return to top.
      gsap.fromTo(
        ".hero-main-title",
        { y: 0, scale: 1, opacity: 1 },
        {
          y: 60,
          scale: 0.96,
          opacity: 0.45,
          ease: "none",
          scrollTrigger: {
            trigger: containerRef.current,
            start: "top top",
            end: "bottom top",
            scrub: 1.2,
          },
        }
      );

      gsap.fromTo(
        [".hero-tagline-wrap", ".hero-content-grid"],
        { y: 0, opacity: 1 },
        {
          y: -25,
          opacity: 0.35,
          ease: "none",
          scrollTrigger: {
            trigger: containerRef.current,
            start: "15% top",
            end: "bottom top",
            scrub: 1,
          },
        }
      );
    }, containerRef);

    return () => ctx.revert();
  }, []);

  return (
    <section
      ref={containerRef}
      id="hero"
      className="relative !mt-10 sm:!mt-16 md:!mt-20 pt-4 sm:pt-6 md:pt-8 pb-12 sm:pb-16 md:pb-20 border-b border-white/10"
      aria-label="Hero Section"
    >
      {/* Top Meta Telemetry */}
      <div className="hero-telemetry flex flex-wrap items-center justify-between gap-3 mb-6 sm:mb-8">
        <div className="flex flex-wrap items-center gap-2 sm:gap-3">
          <Badge variant="status">{personalInfo.status}</Badge>
          <span className="font-mono text-[10px] sm:text-xs uppercase tracking-widest text-neutral-400 py-1 px-2.5 border border-white/10 bg-white/5">
            {personalInfo.title}
          </span>
        </div>
        <div className="hidden sm:flex items-center gap-2 font-mono text-[11px] text-neutral-500">
          <span className="w-1.5 h-1.5 rounded-full bg-emerald-500" />
          <span>PORTFOLIO 2024 / 2025</span>
        </div>
      </div>

      {/* Main Monumental Typography (Line-by-line masked reveals) */}
      <div className="space-y-4 sm:space-y-6">
        <h1 className="hero-main-title text-[2.65rem] xs:text-5xl sm:text-7xl md:text-8xl lg:text-9xl xl:text-[10.5rem] font-heading font-black tracking-tighter text-white uppercase leading-[0.9] select-none break-normal will-change-transform">
          <span className="block overflow-hidden py-1">
            <span className="hero-title-line block will-change-transform">GAGAN</span>
          </span>
          <span className="block overflow-hidden py-1">
            <span className="hero-title-line block will-change-transform">HANDRAL.</span>
          </span>
        </h1>

        {/* Hero Tagline: DESIGNING WITH PURPOSE */}
        <div className="hero-tagline-wrap pt-3 sm:pt-5 relative will-change-transform">
          <div className="hero-tagline-border absolute top-0 left-0 right-0 h-[1px] bg-white/10" />
          <div className="flex flex-wrap items-center gap-3 sm:gap-4">
            <span className="hero-tagline-item font-mono text-xs sm:text-sm text-neutral-500 uppercase tracking-widest">
              [THE ETHOS]
            </span>
            <h2 className="hero-tagline-item text-xl sm:text-2xl md:text-3xl lg:text-4xl font-heading font-bold text-white uppercase tracking-tight">
              {personalInfo.tagline}
            </h2>
          </div>
        </div>
      </div>

      {/* Supporting Narrative & Call-to-Actions */}
      <div className="hero-content-grid mt-8 sm:mt-12 md:mt-16 grid grid-cols-1 md:grid-cols-12 gap-6 sm:gap-8 items-end will-change-transform">
        <div className="hero-narrative md:col-span-8 space-y-4">
          <p className="text-base sm:text-lg md:text-2xl text-neutral-300 font-light leading-relaxed max-w-2xl">
            &ldquo;{personalInfo.heroSupporting}&rdquo;
          </p>
          <div className="flex items-center gap-3 font-mono text-[11px] text-neutral-500 uppercase tracking-wider">
            <span>Primary Tools:</span>
            <span className="text-neutral-300 font-medium">Figma &amp; Canva</span>
            <span className="text-neutral-600">•</span>
            <span>CSBS Background</span>
          </div>
        </div>

        <div className="md:col-span-4 flex flex-col sm:flex-row md:justify-end gap-3 w-full sm:w-auto">
          <div className="hero-cta-btn w-full sm:w-auto">
            <MagneticWrapper className="w-full sm:w-auto">
              <Button href="#about" variant="primary" size="lg" showArrow className="w-full sm:w-auto">
                More About Me
              </Button>
            </MagneticWrapper>
          </div>
          <div className="hero-cta-btn w-full sm:w-auto">
            <MagneticWrapper className="w-full sm:w-auto">
              <Button href="#contact" variant="outline" size="lg" className="w-full sm:w-auto">
                Get in Touch
              </Button>
            </MagneticWrapper>
          </div>
        </div>
      </div>

      {/* Scroll Down Indicator */}
      <div className="hero-scroll-indicator mt-12 sm:mt-16 pt-6 border-t border-white/5 flex items-center justify-between font-mono text-[10px] text-neutral-500">
        <div className="flex items-center gap-2">
          <ArrowDown className="w-3 h-3 animate-bounce" />
          <span className="tracking-widest uppercase">Scroll to explore overview</span>
        </div>
        <span className="tracking-wider">01 / OVERVIEW</span>
      </div>
    </section>
  );
}
