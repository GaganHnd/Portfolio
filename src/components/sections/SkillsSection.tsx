"use client";

import React, { useEffect, useRef } from "react";
import { portfolioSkills } from "@/data/skills";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { Divider } from "@/components/ui/Divider";
import { registerGSAP, EASE } from "@/lib/animations";
import {
  Palette,
  Sparkles,
  Terminal,
  Compass,
  Layers,
  CheckCircle2,
  Code2,
  Workflow,
  Cpu,
} from "lucide-react";

export function SkillsSection() {
  const containerRef = useRef<HTMLElement>(null);

  useEffect(() => {
    const prefersReducedMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    if (prefersReducedMotion || !containerRef.current) return;

    const { gsap, ScrollTrigger } = registerGSAP();

    const ctx = gsap.context(() => {
      gsap.fromTo(
        ".skill-card",
        { opacity: 0.85, y: 24 },
        {
          opacity: 1,
          y: 0,
          duration: 0.8,
          stagger: 0.12,
          ease: EASE.cinematic,
          scrollTrigger: {
            trigger: containerRef.current,
            start: "top 85%",
            toggleActions: "play none none none",
          },
        }
      );
    }, containerRef);

    return () => ctx.revert();
  }, []);

  const getCategoryIcon = (categoryNumber: string) => {
    switch (categoryNumber) {
      case "01":
        return <Palette className="w-4 h-4 text-white" />;
      case "02":
        return <Sparkles className="w-4 h-4 text-emerald-400" />;
      case "03":
        return <Code2 className="w-4 h-4 text-neutral-300" />;
      case "04":
      default:
        return <Compass className="w-4 h-4 text-neutral-400" />;
    }
  };

  return (
    <section
      ref={containerRef}
      id="skills"
      className="space-y-8 sm:space-y-12"
      aria-label="Skills & Tools"
    >
      <SectionHeading
        index="04"
        category="CAPABILITIES &amp; TOOLKIT"
        title="SKILLS &amp; TOOLS."
        subtitle="A balanced synthesis of visual craft, creative software, technical logic, and collaborative execution."
      />

      {/* 2x2 Structured Grid for the 4 Skill Groups */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6 sm:gap-8">
        {portfolioSkills.map((group) => {
          const isCreativeTools = group.title === "Creative Tools";

          return (
            <div
              key={group.title}
              className={`skill-card border border-white/10 bg-surface p-6 sm:p-8 flex flex-col justify-between hover:border-white/20 transition-all duration-300 relative overflow-hidden ${
                isCreativeTools ? "bg-surface-elevated/40" : ""
              }`}
            >
              <div>
                {/* Category Header */}
                <div className="flex items-center justify-between border-b border-white/10 pb-4 mb-5">
                  <div className="flex items-center gap-2">
                    <span className="font-mono text-[10px] sm:text-xs text-neutral-500 uppercase tracking-widest">
                      {group.categoryNumber} / DISCIPLINE
                    </span>
                    {isCreativeTools && (
                      <span className="font-mono text-[9px] uppercase tracking-wider text-emerald-400 border border-emerald-500/30 bg-emerald-500/10 px-2 py-0.5">
                        CORE ARSENAL
                      </span>
                    )}
                  </div>
                  {getCategoryIcon(group.categoryNumber)}
                </div>

                {/* Group Title & Subtitle */}
                <h3 className="font-heading font-black text-2xl sm:text-3xl text-white uppercase tracking-tight mb-2">
                  {group.title}
                </h3>
                <p className="text-xs sm:text-sm text-neutral-400 font-light mb-6 sm:mb-8 leading-relaxed">
                  {group.subtitle}
                </p>

                {/* Creative Tools Featured Layout vs Standard Layout */}
                {isCreativeTools ? (
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 sm:gap-4">
                    {group.skills.map((tool) => (
                      <div
                        key={tool}
                        className="p-4 sm:p-5 border border-white/15 bg-white/5 hover:border-white/30 transition-all"
                      >
                        <div className="flex items-center justify-between mb-3">
                          <span className="font-mono text-[10px] text-emerald-400 uppercase tracking-wider">
                            VERIFIED TOOL
                          </span>
                          <span className="w-2 h-2 rounded-full bg-emerald-500" />
                        </div>
                        <h4 className="font-heading font-bold text-xl sm:text-2xl text-white uppercase tracking-tight">
                          {tool}
                        </h4>
                        <p className="font-mono text-[11px] text-neutral-400 mt-2">
                          {tool === "Figma"
                            ? "Interface design, wireframing & interactive prototypes"
                            : "Visual compositions, branding & promotional creatives"}
                        </p>
                      </div>
                    ))}
                  </div>
                ) : (
                  <div className="flex flex-wrap gap-2 sm:gap-2.5">
                    {group.skills.map((skill, sIdx) => (
                      <div
                        key={skill}
                        className="group/item flex items-center gap-2 font-mono text-xs sm:text-sm text-neutral-300 bg-surface-elevated border border-white/10 px-3.5 py-2 hover:bg-white/10 hover:border-white/30 hover:text-white transition-all cursor-default"
                      >
                        <span className="font-mono text-[10px] text-neutral-500 group-hover/item:text-neutral-400 transition-colors">
                          0{sIdx + 1}
                        </span>
                        <span className="font-medium">{skill}</span>
                      </div>
                    ))}
                  </div>
                )}
              </div>

              {/* Card Footer Telemetry */}
              <div className="mt-8 pt-4 border-t border-white/5 flex items-center justify-between font-mono text-[10px] text-neutral-500">
                <span className="uppercase tracking-wider">
                  {group.skills.length} VERIFIED CAPABILITIES
                </span>
                <span className="tracking-widest">
                  [{group.categoryNumber} / 04]
                </span>
              </div>
            </div>
          );
        })}
      </div>

      {/* Synthesis Callout Banner */}
      <div className="border border-white/10 bg-surface-elevated p-6 sm:p-8 flex flex-col md:flex-row items-start md:items-center justify-between gap-4 sm:gap-6">
        <div className="space-y-1 max-w-3xl">
          <span className="font-mono text-[10px] text-neutral-500 uppercase tracking-widest block">
            THE INTEGRATION PHILOSOPHY
          </span>
          <p className="text-sm sm:text-base text-neutral-200 font-light leading-relaxed">
            Bridging <span className="text-white font-medium">visual aesthetics</span> with{" "}
            <span className="text-white font-medium">technical &amp; analytical logic</span>: every design decision is backed by structure, clarity, and user intention.
          </p>
        </div>
        <div className="font-mono text-xs text-neutral-400 border border-white/10 bg-white/5 px-3 py-1.5 flex-shrink-0">
          MULTIDISCIPLINARY PERSPECTIVE
        </div>
      </div>
    </section>
  );
}
