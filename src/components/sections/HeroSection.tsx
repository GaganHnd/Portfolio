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
      gsap.fromTo(
        ".hero-anim",
        { opacity: 0.85, y: 18 },
        {
          opacity: 1,
          y: 0,
          duration: 0.7,
          stagger: 0.08,
          ease: EASE.cinematic,
        }
      );
    }, containerRef);

    return () => ctx.revert();
  }, []);

  return (
    <section
      ref={containerRef}
      className="relative pt-6 sm:pt-10 md:pt-16 pb-12 sm:pb-16 md:pb-20 border-b border-white/10"
      aria-label="Hero Section"
    >
      {/* Top Meta Telemetry */}
      <div className="hero-anim flex flex-wrap items-center justify-between gap-3 mb-6 sm:mb-8">
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

      {/* Main Monumental Typography */}
      <div className="space-y-4 sm:space-y-6">
        <h1 className="hero-anim text-[2.65rem] xs:text-5xl sm:text-7xl md:text-8xl lg:text-9xl xl:text-[10.5rem] font-heading font-black tracking-tighter text-white uppercase leading-[0.9] select-none break-normal">
          GAGAN
          <br />
          HANDRAL.
        </h1>

        {/* Hero Tagline: DESIGNING WITH PURPOSE */}
        <div className="hero-anim pt-3 sm:pt-5 flex flex-wrap items-center gap-3 sm:gap-4 border-t border-white/10">
          <span className="font-mono text-xs sm:text-sm text-neutral-500 uppercase tracking-widest">
            [THE ETHOS]
          </span>
          <h2 className="text-xl sm:text-2xl md:text-3xl lg:text-4xl font-heading font-bold text-white uppercase tracking-tight">
            {personalInfo.tagline}
          </h2>
        </div>
      </div>

      {/* Supporting Narrative & Call-to-Actions */}
      <div className="mt-8 sm:mt-12 md:mt-16 grid grid-cols-1 md:grid-cols-12 gap-6 sm:gap-8 items-end">
        <div className="hero-anim md:col-span-8 space-y-4">
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

        <div className="hero-anim md:col-span-4 flex flex-col sm:flex-row md:justify-end gap-3 w-full sm:w-auto">
          <MagneticWrapper className="w-full sm:w-auto">
            <Button href="#about" variant="primary" size="lg" showArrow className="w-full sm:w-auto">
              More About Me
            </Button>
          </MagneticWrapper>
          <MagneticWrapper className="w-full sm:w-auto">
            <Button href="#contact" variant="outline" size="lg" className="w-full sm:w-auto">
              Get in Touch
            </Button>
          </MagneticWrapper>
        </div>
      </div>

      {/* Scroll Down Indicator */}
      <div className="hero-anim mt-12 sm:mt-16 pt-6 border-t border-white/5 flex items-center justify-between font-mono text-[10px] text-neutral-500">
        <div className="flex items-center gap-2">
          <ArrowDown className="w-3 h-3 animate-bounce" />
          <span className="tracking-widest uppercase">Scroll to explore overview</span>
        </div>
        <span className="tracking-wider">01 / OVERVIEW</span>
      </div>
    </section>
  );
}
