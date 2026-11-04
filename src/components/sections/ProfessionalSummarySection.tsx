"use client";

import React from "react";
import { personalInfo } from "@/data/social-links";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { Badge } from "@/components/ui/Badge";
import { Divider } from "@/components/ui/Divider";
import { Sparkles, Terminal, Palette, Layout } from "lucide-react";

export function ProfessionalSummarySection() {
  return (
    <section id="summary" className="space-y-8 sm:space-y-12" aria-label="Professional Summary">
      <SectionHeading
        index="01"
        category="PROFESSIONAL PROFILE"
        title="EXECUTIVE SUMMARY."
        subtitle="Bridging Computer Science and Business Systems logic with creative visual craftsmanship."
      />

      {/* Main Editorial Presentation Card */}
      <div className="border border-white/10 bg-surface p-6 sm:p-8 md:p-12 relative overflow-hidden">
        {/* Editorial Accent Quote */}
        <div className="max-w-4xl space-y-4 mb-8 sm:mb-12">
          <span className="font-mono text-[10px] sm:text-xs text-neutral-500 uppercase tracking-widest block">
            THE INTERSECTION
          </span>
          <p className="font-serif italic text-2xl sm:text-3xl md:text-4xl text-white leading-snug">
            &ldquo;Transforming ideas into engaging visual experiences, designing intuitive digital interfaces and exploring creative ways to communicate through design.&rdquo;
          </p>
        </div>

        {/* Two-Column Structured Narrative */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 lg:gap-12 pt-6 border-t border-white/10">
          <div className="space-y-4">
            <div className="flex items-center gap-2 font-mono text-xs text-neutral-400 uppercase tracking-wider">
              <Terminal className="w-4 h-4 text-emerald-400" />
              <span>Background &amp; Academic Perspective</span>
            </div>
            <p className="text-sm sm:text-base text-neutral-300 font-light leading-relaxed">
              I&apos;m a <span className="text-white font-medium">Computer Science and Business Systems graduate</span> with a passion for Graphic Design and UI/UX Design. I enjoy transforming ideas into engaging visual experiences, designing intuitive digital interfaces and exploring creative ways to communicate through design.
            </p>
          </div>

          <div className="space-y-4">
            <div className="flex items-center gap-2 font-mono text-xs text-neutral-400 uppercase tracking-wider">
              <Palette className="w-4 h-4 text-white" />
              <span>Creative Practice &amp; Execution</span>
            </div>
            <p className="text-sm sm:text-base text-neutral-300 font-light leading-relaxed">
              With hands-on experience creating <span className="text-white font-medium">event posters, visual identities, mobile application interfaces, and web dashboards</span> using <span className="text-white font-medium">Figma and Canva</span>, I combine creative thinking with technical understanding to approach design challenges and build purposeful outcomes.
            </p>
          </div>
        </div>

        <Divider label="CORE COMPETENCIES & FOCUS AREAS" withCross className="my-8 sm:my-10" />

        {/* Four Distinct Competency Highlights */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
          <div className="p-4 border border-white/10 bg-surface-elevated space-y-2">
            <div className="flex items-center justify-between text-neutral-400">
              <span className="font-mono text-[10px] text-neutral-500 uppercase">01 / DISCIPLINE</span>
              <Palette className="w-4 h-4 text-white" />
            </div>
            <h4 className="font-heading font-bold text-white text-base uppercase">Graphic Design</h4>
            <p className="text-xs text-neutral-400 leading-relaxed">
              Event posters, visual identities, branding experiments, and promotional creative assets.
            </p>
          </div>

          <div className="p-4 border border-white/10 bg-surface-elevated space-y-2">
            <div className="flex items-center justify-between text-neutral-400">
              <span className="font-mono text-[10px] text-neutral-500 uppercase">02 / INTERFACE</span>
              <Layout className="w-4 h-4 text-white" />
            </div>
            <h4 className="font-heading font-bold text-white text-base uppercase">UI/UX Design</h4>
            <p className="text-xs text-neutral-400 leading-relaxed">
              Intuitive mobile interfaces, structured web dashboards, user flows, and wireframes.
            </p>
          </div>

          <div className="p-4 border border-white/10 bg-surface-elevated space-y-2">
            <div className="flex items-center justify-between text-neutral-400">
              <span className="font-mono text-[10px] text-neutral-500 uppercase">03 / SOFTWARE</span>
              <Sparkles className="w-4 h-4 text-emerald-400" />
            </div>
            <h4 className="font-heading font-bold text-white text-base uppercase">Figma &amp; Canva</h4>
            <p className="text-xs text-neutral-400 leading-relaxed">
              Primary confirmed tools for rapid prototyping, visual composition, and UI production.
            </p>
          </div>

          <div className="p-4 border border-white/10 bg-surface-elevated space-y-2">
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
