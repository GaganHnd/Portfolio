"use client";

import React, { useState, useEffect, useRef } from "react";
import Image from "next/image";
import { uiuxProjects, UIUXProject } from "@/data/ui-ux";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { UIUXDetailModal } from "@/components/ui/UIUXDetailModal";
import { TiltImage } from "@/components/ui/TiltImage";
import { registerGSAP, EASE } from "@/lib/animations";
import { Maximize2, ArrowRight, Eye, Layers } from "lucide-react";

export function UIUXSection() {
  const containerRef = useRef<HTMLElement>(null);
  const [activeProject, setActiveProject] = useState<UIUXProject | null>(null);

  useEffect(() => {
    const prefersReducedMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    if (prefersReducedMotion || !containerRef.current) return;

    const { gsap, ScrollTrigger } = registerGSAP();

    const ctx = gsap.context(() => {
      // 1. Section heading masked reveal
      gsap.fromTo(
        ".uiux-heading .section-heading-title",
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

      // 2. Subtle scroll-reveal for each vertically stacked alternating row
      const rows = gsap.utils.toArray<HTMLElement>(".uiux-project-row");
      rows.forEach((row) => {
        gsap.fromTo(
          row,
          { opacity: 0, y: 35 },
          {
            opacity: 1,
            y: 0,
            duration: 0.85,
            ease: EASE.cinematic,
            scrollTrigger: {
              trigger: row,
              start: "top 85%",
              toggleActions: "play none none none",
            },
          }
        );
      });
    }, containerRef);

    const refreshTimer = setTimeout(() => {
      ScrollTrigger.refresh();
    }, 200);

    return () => {
      clearTimeout(refreshTimer);
      ctx.revert();
    };
  }, []);

  return (
    <section
      ref={containerRef}
      id="ui-ux"
      className="space-y-12 sm:space-y-16 relative"
      aria-label="UI/UX Design Projects"
    >
      <SectionHeading
        className="uiux-heading"
        index="02"
        category="SELECTED WORK"
        title="UI/UX DESIGN."
        subtitle="Digital product interfaces, interactive mobile flows, and structured web dashboards crafted in Figma."
      />

      {/* =========================================================================
          VERTICALLY STACKED ALTERNATING PROJECT SHOWCASE
          Desktop: Alternating Left-Right
          Mobile & Tablet: Image stacked consistently on top of description
      ========================================================================== */}
      <div className="space-y-20 sm:space-y-28 lg:space-y-36">
        {uiuxProjects.map((project, idx) => {
          const isEven = idx % 2 === 0;
          const projectNum = project.number || `0${idx + 1}`;

          return (
            <article
              key={project.id}
              className="uiux-project-row grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-14 xl:gap-20 items-center"
            >
              {/* IMAGE / ARTBOARD CONTAINER: Left on Even, Right on Odd (Desktop) | Top on Mobile */}
              <div
                className={`w-full ${
                  isEven
                    ? "order-1 lg:order-1 lg:col-span-7"
                    : "order-1 lg:order-2 lg:col-span-7"
                }`}
              >
                <div
                  onClick={() => setActiveProject(project)}
                  onKeyDown={(e) => {
                    if (e.key === "Enter" || e.key === " ") {
                      e.preventDefault();
                      setActiveProject(project);
                    }
                  }}
                  role="button"
                  tabIndex={0}
                  aria-label={`Explore ${project.title} UI/UX case study`}
                  className="group relative border border-white/10 hover:border-white/30 bg-[#030303] transition-all duration-300 cursor-pointer overflow-hidden shadow-2xl block"
                >
                  {/* Top Telemetry */}
                  <div className="flex items-center justify-between border-b border-white/10 px-5 py-3 bg-surface-elevated/70">
                    <div className="flex items-center gap-2">
                      <span className="w-1.5 h-1.5 rounded-full bg-[#B7FF00]" />
                      <span className="font-mono text-[11px] text-neutral-400 uppercase tracking-widest">
                        [{projectNum}] {project.category}
                      </span>
                    </div>
                    <div className="flex items-center gap-2">
                      <span className="font-mono text-[10px] uppercase tracking-wider text-[#B7FF00] border border-[#B7FF00]/30 bg-[#B7FF00]/10 px-2 py-0.5">
                        TOOL: {project.tool}
                      </span>
                      <Maximize2 className="w-3.5 h-3.5 text-neutral-500 group-hover:text-white transition-colors" />
                    </div>
                  </div>

                  {/* Blueprint Grid & Aspect-Preserving Artboard Frame with 3D Tilt */}
                  <div className="relative w-full bg-[#020202] p-4 sm:p-6 lg:p-8 overflow-hidden flex items-center justify-center">
                    <div
                      className="absolute inset-0 opacity-10 pointer-events-none"
                      style={{
                        backgroundImage:
                          "linear-gradient(to right, rgba(255,255,255,0.08) 1px, transparent 1px), linear-gradient(to bottom, rgba(255,255,255,0.08) 1px, transparent 1px)",
                        backgroundSize: "24px 24px",
                      }}
                    />

                    <TiltImage
                      className="w-full aspect-[16/10] overflow-hidden shadow-2xl"
                      maxTilt={3.5}
                    >
                      <div className="relative w-full h-full">
                        <Image
                          src={project.image}
                          alt={`${project.title} Interface Screens`}
                          fill
                          className="object-contain"
                          sizes="(max-width: 1024px) 100vw, 55vw"
                          priority={idx === 0}
                        />

                        {/* Hover Pill */}
                        <div className="absolute bottom-3 right-3 opacity-0 group-hover:opacity-100 transition-all duration-300 flex items-center gap-1.5 font-mono text-[10px] text-white bg-black/90 backdrop-blur-md border border-white/20 px-2.5 py-1 shadow-lg pointer-events-none">
                          <Eye className="w-3 h-3 text-[#B7FF00]" />
                          <span>INSPECT ARTBOARD</span>
                        </div>
                      </div>
                    </TiltImage>
                  </div>
                </div>
              </div>

              {/* DESCRIPTION CONTAINER: Right on Even, Left on Odd (Desktop) | Bottom on Mobile */}
              <div
                className={`w-full space-y-6 ${
                  isEven
                    ? "order-2 lg:order-2 lg:col-span-5"
                    : "order-2 lg:order-1 lg:col-span-5"
                }`}
              >
                <div className="space-y-3">
                  <div className="flex items-center gap-3">
                    <span className="font-mono text-xs text-[#B7FF00] font-semibold tracking-widest">
                      CASE STUDY [{projectNum}]
                    </span>
                    <span className="text-neutral-600 font-mono text-xs">•</span>
                    <span className="font-mono text-xs text-neutral-400 uppercase tracking-wider">
                      {project.projectType}
                    </span>
                  </div>

                  <h3 className="font-heading font-black text-3xl sm:text-4xl xl:text-5xl text-white uppercase tracking-tight leading-none">
                    {project.title}
                  </h3>

                  <div className="flex flex-wrap items-center gap-2 pt-1">
                    <span className="font-mono text-[11px] text-neutral-400 uppercase tracking-wider border border-white/10 bg-white/5 px-2.5 py-0.5">
                      {project.category}
                    </span>
                    <span className="font-mono text-[11px] uppercase tracking-wider text-[#B7FF00] border border-[#B7FF00]/30 bg-[#B7FF00]/10 px-2.5 py-0.5">
                      TOOL: {project.tool}
                    </span>
                  </div>
                </div>

                <p className="text-neutral-300 text-sm sm:text-base font-light leading-relaxed">
                  {project.description}
                </p>

                {/* Documented Screens */}
                <div className="space-y-2">
                  <span className="font-mono text-[10px] text-neutral-500 uppercase tracking-widest block">
                    DOCUMENTED INTERFACE SCREENS ({project.screens.length})
                  </span>
                  <div className="flex flex-wrap gap-1.5">
                    {project.screens.slice(0, 5).map((screen) => (
                      <span
                        key={screen}
                        className="font-mono text-[11px] text-neutral-300 bg-surface-elevated border border-white/10 px-2.5 py-1"
                      >
                        {screen}
                      </span>
                    ))}
                    {project.screens.length > 5 && (
                      <span className="font-mono text-[11px] text-neutral-500 bg-white/5 border border-white/10 px-2.5 py-1">
                        +{project.screens.length - 5} more
                      </span>
                    )}
                  </div>
                </div>

                {/* Key Highlights list */}
                {project.keyHighlights && project.keyHighlights.length > 0 && (
                  <div className="space-y-2 pt-1">
                    <span className="font-mono text-[10px] text-neutral-500 uppercase tracking-widest block">
                      KEY HIGHLIGHTS
                    </span>
                    <ul className="space-y-1.5">
                      {project.keyHighlights.map((highlight, hIdx) => (
                        <li
                          key={hIdx}
                          className="flex items-start gap-2 text-xs sm:text-sm text-neutral-300 font-light"
                        >
                          <span className="text-[#B7FF00] mt-0.5 font-mono text-[11px]">→</span>
                          <span>{highlight}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                )}

                {/* Action CTA */}
                <div className="pt-2 border-t border-white/10">
                  <button
                    type="button"
                    onClick={() => setActiveProject(project)}
                    className="inline-flex items-center gap-2.5 font-mono text-xs text-white hover:text-[#B7FF00] border border-white/15 hover:border-[#B7FF00]/50 bg-white/5 hover:bg-white/10 px-5 py-2.5 transition-all group/btn"
                  >
                    <span>VIEW CASE STUDY &amp; ARTBOARDS</span>
                    <ArrowRight className="w-3.5 h-3.5 transition-transform duration-200 group-hover/btn:translate-x-1" />
                  </button>
                </div>
              </div>
            </article>
          );
        })}
      </div>

      {/* UI/UX Full Frame Modal View */}
      <UIUXDetailModal
        project={activeProject}
        onClose={() => setActiveProject(null)}
      />
    </section>
  );
}
