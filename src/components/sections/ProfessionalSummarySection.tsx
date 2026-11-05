"use client";

import React, { useEffect, useRef } from "react";
import { personalInfo } from "@/data/social-links";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { Badge } from "@/components/ui/Badge";
import { Divider } from "@/components/ui/Divider";
import { registerGSAP, EASE } from "@/lib/animations";
import { Sparkles, Terminal, Palette, Layout } from "lucide-react";

export function ProfessionalSummarySection() {
  const containerRef = useRef<HTMLElement>(null);

  useEffect(() => {
    const prefersReducedMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    if (prefersReducedMotion || !containerRef.current) return;

    const { gsap } = registerGSAP();

    const ctx = gsap.context(() => {
      // Heading reveal
      gsap.fromTo(
        ".summary-heading .section-heading-title",
        { yPercent: 110, opacity: 0 },
        {
          yPercent: 0,
          opacity: 1,
          duration: 1,
          ease: EASE.power4,
          scrollTrigger: {
            trigger: containerRef.current,
            start: "top 88%",
            toggleActions: "play none none none",
          },
        }
      );

      gsap.fromTo(
        [".summary-heading .section-heading-meta", ".summary-heading .section-heading-sub"],
        { opacity: 0, y: 15 },
        {
          opacity: 1,
          y: 0,
          duration: 0.8,
          stagger: 0.1,
          ease: EASE.cinematic,
          scrollTrigger: {
            trigger: containerRef.current,
            start: "top 88%",
            toggleActions: "play none none none",
          },
        }
      );

      // Main Card and Narrative Stagger
      gsap.fromTo(
        ".summary-reveal",
        { opacity: 0, y: 25 },
        {
          opacity: 1,
          y: 0,
          duration: 0.85,
          stagger: 0.1,
          ease: EASE.cinematic,
          scrollTrigger: {
            trigger: ".summary-card",
            start: "top 82%",
            toggleActions: "play none none none",
          },
        }
      );

      // Sequential competency cards
      gsap.fromTo(
        ".summary-competency",
        { opacity: 0, y: 20 },
        {
          opacity: 1,
          y: 0,
          duration: 0.7,
          stagger: 0.08,
          ease: EASE.cinematic,
          scrollTrigger: {
            trigger: ".summary-competencies-grid",
            start: "top 85%",
            toggleActions: "play none none none",
          },
        }
      );
    }, containerRef);

    return () => ctx.revert();
  }, []);

  return (
    <section
      ref={containerRef}
      id="summary"
      className="space-y-8 sm:space-y-12"
      aria-label="Professional Summary"
    >
      <SectionHeading
        className="summary-heading"
        index="01"
        category="PROFESSIONAL PROFILE"
        title="EXECUTIVE SUMMARY."
        subtitle="Bridging Computer Science and Business Systems logic with creative visual craftsmanship."
      />

      {/* Main Editorial Presentation Card */}
      <div className="summary-card border border-white/10 bg-surface p-6 sm:p-8 md:p-12 relative overflow-hidden">
        {/* Editorial Accent Quote */}
        <div className="summary-reveal max-w-4xl space-y-4 mb-8 sm:mb-12">
          <span className="font-mono text-[10px] sm:text-xs text-neutral-500 uppercase tracking-widest block">
            THE INTERSECTION
          </span>
          <p className="font-serif italic text-2xl sm:text-3xl md:text-4xl text-white leading-snug">
            &ldquo;Transforming ideas into engaging visual experiences, designing intuitive digital interfaces and exploring creative ways to communicate through design.&rdquo;
          </p>
        </div>

        {/* Two-Column Structured Narrative */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 lg:gap-12 pt-6 border-t border-white/10">
          <div className="summary-reveal space-y-4">
            <div className="flex items-center gap-2 font-mono text-xs text-neutral-400 uppercase tracking-wider">
              <Terminal className="w-4 h-4 text-emerald-400" />
              <span>Background &amp; Academic Perspective</span>
            </div>
            <p className="text-sm sm:text-base text-neutral-300 font-light leading-relaxed">
              I&apos;m a <span className="text-white font-medium">Computer Science and Business Systems graduate</span> with a passion for Graphic Design and UI/UX Design. I enjoy transforming ideas into engaging visual experiences, designing intuitive digital interfaces and exploring creative ways to communicate through design.
            </p>
          </div>

          <div className="summary-reveal space-y-4">
            <div className="flex items-center gap-2 font-mono text-xs text-neutral-400 uppercase tracking-wider">
              <Palette className="w-4 h-4 text-white" />
              <span>Creative Practice &amp; Execution</span>
            </div>
            <p className="text-sm sm:text-base text-neutral-300 font-light leading-relaxed">
              With hands-on experience creating <span className="text-white font-medium">event posters, visual identities, mobile application interfaces, and web dashboards</span> using <span className="text-white font-medium">Figma and Canva</span>, I combine creative thinking with technical understanding to approach design challenges and build purposeful outcomes.
            </p>
          </div>
        </div>

        <Divider label="CORE COMPETENCIES & FOCUS AREAS" withCross className="summary-reveal my-8 sm:my-10" />

        {/* Four Distinct Competency Highlights */}
        <div className="summary-competencies-grid grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
          <div className="summary-competency p-4 border border-white/10 bg-surface-elevated space-y-2 hover:border-white/20 transition-colors">
            <div className="flex items-center justify-between text-neutral-400">
              <span className="font-mono text-[10px] text-neutral-500 uppercase">01 / DISCIPLINE</span>
              <Palette className="w-4 h-4 text-white" />
            </div>
            <h4 className="font-heading font-bold text-white text-base uppercase">Graphic Design</h4>
            <p className="text-xs text-neutral-400 leading-relaxed">
              Event posters, visual identities, branding experiments, and promotional creative assets.
            </p>
          </div>

          <div className="summary-competency p-4 border border-white/10 bg-surface-elevated space-y-2 hover:border-white/20 transition-colors">
            <div className="flex items-center justify-between text-neutral-400">
              <span className="font-mono text-[10px] text-neutral-500 uppercase">02 / INTERFACE</span>
              <Layout className="w-4 h-4 text-white" />
            </div>
            <h4 className="font-heading font-bold text-white text-base uppercase">UI/UX Design</h4>
            <p className="text-xs text-neutral-400 leading-relaxed">
              Intuitive mobile interfaces, structured web dashboards, user flows, and wireframes.
            </p>
          </div>

          <div className="summary-competency p-4 border border-white/10 bg-surface-elevated space-y-2 hover:border-white/20 transition-colors">
            <div className="flex items-center justify-between text-neutral-400">
              <span className="font-mono text-[10px] text-neutral-500 uppercase">03 / SOFTWARE</span>
              <Sparkles className="w-4 h-4 text-emerald-400" />
            </div>
            <h4 className="font-heading font-bold text-white text-base uppercase">Figma &amp; Canva</h4>
            <p className="text-xs text-neutral-400 leading-relaxed">
              Primary confirmed tools for rapid prototyping, visual composition, and UI production.
            </p>
          </div>

          <div className="summary-competency p-4 border border-white/10 bg-surface-elevated space-y-2 hover:border-white/20 transition-colors">
            <div className="flex items-center justify-between text-neutral-400">
              <span className="font-mono text-[10px] text-neutral-500 uppercase">04 / FOUNDATION</span>
              <Terminal className="w-4 h-4 text-neutral-400" />
            </div>
            <h4 className="font-heading font-bold text-white text-base uppercase">CSBS Perspective</h4>
            <p className="text-xs text-neutral-400 leading-relaxed">
              Computational logic and business system context informing practical design decisions.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
