"use client";

import React, { useState, useEffect, useRef } from "react";
import Image from "next/image";
import { uiuxProjects, UIUXProject } from "@/data/ui-ux";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { UIUXDetailModal } from "@/components/ui/UIUXDetailModal";
import { registerGSAP, EASE } from "@/lib/animations";
import { Maximize2, Layers, Layout, ArrowRight, Eye, Sparkles } from "lucide-react";

export function UIUXSection() {
  const containerRef = useRef<HTMLElement>(null);
  const [activeProject, setActiveProject] = useState<UIUXProject | null>(null);

  useEffect(() => {
    const prefersReducedMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    if (prefersReducedMotion || !containerRef.current) return;

    const { gsap, ScrollTrigger } = registerGSAP();

    const ctx = gsap.context(() => {
      gsap.fromTo(
        ".uiux-project-card",
        { opacity: 0.85, y: 30 },
        {
          opacity: 1,
          y: 0,
          duration: 0.8,
          stagger: 0.18,
          ease: EASE.cinematic,
          scrollTrigger: {
            trigger: containerRef.current,
            start: "top 80%",
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
      id="ui-ux"
      className="space-y-8 sm:space-y-12"
      aria-label="UI/UX Design Projects"
    >
      <SectionHeading
        index="04"
        category="SELECTED WORK"
        title="UI/UX DESIGN."
        subtitle="Digital product interfaces, interactive mobile flows, and structured web dashboards crafted in Figma."
      />

      {/* Featured Editorial UI/UX Project Cards */}
      <div className="space-y-10 sm:space-y-14 md:space-y-16">
        {uiuxProjects.map((project, idx) => (
          <article
            key={project.id}
            onClick={() => setActiveProject(project)}
            className="uiux-project-card border border-white/10 bg-surface hover:border-white/25 transition-all duration-300 group cursor-pointer relative overflow-hidden"
            role="button"
            tabIndex={0}
            aria-label={`Explore ${project.title} UI/UX project`}
            onKeyDown={(e) => {
              if (e.key === "Enter" || e.key === " ") {
                e.preventDefault();
                setActiveProject(project);
              }
            }}
          >
            {/* Top Telemetry & Index Strip */}
            <div className="flex flex-wrap items-center justify-between gap-3 border-b border-white/10 px-6 sm:px-8 py-4 bg-surface-elevated/70">
              <div className="flex flex-wrap items-center gap-2.5 sm:gap-3">
                <span className="font-mono text-xs text-white font-bold tracking-widest">
                  [{project.number}]
                </span>
                <span className="font-mono text-[10px] sm:text-xs text-neutral-400 uppercase tracking-widest">
                  {project.category}
                </span>
                <span className="hidden sm:inline-block font-mono text-xs text-neutral-600">
                  •
                </span>
                <span className="font-mono text-[10px] text-neutral-400 bg-white/5 border border-white/10 px-2 py-0.5 uppercase tracking-wider">
                  {project.projectType}
                </span>
              </div>

              <div className="flex items-center gap-3">
                <span className="font-mono text-[10px] uppercase tracking-wider text-emerald-400 border border-emerald-500/30 bg-emerald-500/10 px-2.5 py-0.5">
                  TOOL: {project.tool}
                </span>
                <div className="hidden sm:flex items-center gap-1 font-mono text-[11px] text-neutral-400 group-hover:text-white transition-colors">
                  <span>EXPAND FRAMES</span>
                  <Maximize2 className="w-3.5 h-3.5" />
                </div>
              </div>
            </div>

            {/* Split Editorial Presentation: Left Info / Right Frame Preview */}
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 sm:gap-8 lg:gap-10 p-6 sm:p-8 md:p-10">
              {/* Left Column: Title, Description, Screen Architecture (5 cols) */}
              <div className="lg:col-span-5 flex flex-col justify-between space-y-6">
                <div className="space-y-4">
                  <div>
                    <span className="font-mono text-[10px] text-neutral-500 uppercase tracking-widest block mb-1">
                      PROJECT 0{idx + 1}
                    </span>
                    <h3 className="text-3xl sm:text-4xl md:text-5xl font-heading font-black text-white uppercase tracking-tight group-hover:text-neutral-200 transition-colors">
                      {project.title}
                    </h3>
                  </div>

                  <p className="text-sm sm:text-base text-neutral-300 font-light leading-relaxed">
                    {project.description}
                  </p>

                  {/* Curated Included Screens Tags */}
                  <div className="pt-2">
                    <span className="font-mono text-[10px] text-neutral-500 uppercase tracking-widest block mb-2.5">
                      DOCUMENTED INTERFACE SCREENS
                    </span>
                    <div className="flex flex-wrap gap-1.5 sm:gap-2">
                      {project.screens.slice(0, 5).map((screen) => (
                        <span
                          key={screen}
                          className="font-mono text-[11px] text-neutral-300 bg-surface-elevated border border-white/10 px-2.5 py-1"
                        >
                          {screen}
                        </span>
                      ))}
                      {project.screens.length > 5 && (
                        <span className="font-mono text-[11px] text-neutral-500 bg-white/5 border border-white/10 px-2 py-1">
                          +{project.screens.length - 5} more
                        </span>
                      )}
                    </div>
                  </div>
                </div>

                {/* Bottom Action Prompt */}
                <div className="pt-6 border-t border-white/10 flex items-center justify-between font-mono text-xs">
                  <span className="text-neutral-400 group-hover:text-white transition-colors flex items-center gap-2">
                    <span>Explore Complete Artboard &amp; Details</span>
                    <ArrowRight className="w-3.5 h-3.5 group-hover:translate-x-1 transition-transform" />
                  </span>
                  <span className="text-neutral-600 font-mono text-[10px]">FIGMA FRAMES</span>
                </div>
              </div>

              {/* Right Column: Full Aspect-Preserved Visual Artboard Canvas (7 cols) */}
              <div className="lg:col-span-7 bg-[#020202] border border-white/10 p-3 sm:p-5 md:p-6 relative overflow-hidden flex items-center justify-center">
                {/* Subtle Grid Canvas Accent */}
                <div
                  className="absolute inset-0 opacity-10 pointer-events-none"
                  style={{
                    backgroundImage:
                      "linear-gradient(to right, rgba(255,255,255,0.08) 1px, transparent 1px), linear-gradient(to bottom, rgba(255,255,255,0.08) 1px, transparent 1px)",
                    backgroundSize: "24px 24px",
                  }}
                />

                <div className="relative w-full aspect-[16/10] sm:max-h-[460px] overflow-hidden shadow-2xl transition-transform duration-500 ease-out group-hover:scale-[1.015]">
                  <Image
                    src={project.image}
                    alt={`${project.title} Interface Screens`}
                    fill
                    className="object-contain"
                    sizes="(max-width: 768px) 100vw, (max-width: 1200px) 60vw, 50vw"
                    priority={idx === 0}
                  />

                  {/* Corner Expand Indicator */}
                  <div className="absolute bottom-3 right-3 opacity-0 group-hover:opacity-100 transition-all duration-300 flex items-center gap-1.5 font-mono text-[10px] text-white bg-black/90 backdrop-blur-md border border-white/20 px-2.5 py-1 shadow-lg pointer-events-none">
                    <Eye className="w-3 h-3 text-emerald-400" />
                    <span>INSPECT FULL ARTBOARD</span>
                  </div>
                </div>
              </div>
            </div>
          </article>
        ))}
      </div>

      {/* UI/UX Full Frame Modal View */}
      <UIUXDetailModal
        project={activeProject}
        onClose={() => setActiveProject(null)}
      />
    </section>
  );
}
