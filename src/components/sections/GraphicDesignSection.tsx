"use client";

import React, { useState, useEffect, useRef } from "react";
import Image from "next/image";
import { graphicDesignProjects, GraphicDesignProject } from "@/data/graphic-design";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { LightboxModal } from "@/components/ui/LightboxModal";
import { TiltImage } from "@/components/ui/TiltImage";
import { registerGSAP, EASE } from "@/lib/animations";
import { Maximize2, Eye, ArrowRight } from "lucide-react";

export function GraphicDesignSection() {
  const containerRef = useRef<HTMLElement>(null);
  const [selectedProject, setSelectedProject] = useState<GraphicDesignProject | null>(null);

  useEffect(() => {
    const prefersReducedMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    if (prefersReducedMotion || !containerRef.current) return;

    const { gsap, ScrollTrigger } = registerGSAP();

    const ctx = gsap.context(() => {
      // 1. Section heading masked reveal
      gsap.fromTo(
        ".graphic-heading .section-heading-title",
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
      const rows = gsap.utils.toArray<HTMLElement>(".graphic-project-row");
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
      id="work"
      className="space-y-12 sm:space-y-16 relative"
      aria-label="Graphic Design Selected Work"
    >
      <SectionHeading
        className="graphic-heading"
        index="01"
        category="SELECTED WORK"
        title="GRAPHIC DESIGN."
        subtitle="Event poster compositions, promotional creative direction, and geometric visual identities."
      />

      {/* =========================================================================
          VERTICALLY STACKED ALTERNATING PROJECT SHOWCASE
          Desktop: Alternating Left-Right
          Mobile & Tablet: Image stacked consistently on top of description
      ========================================================================== */}
      <div className="space-y-20 sm:space-y-28 lg:space-y-36">
        {graphicDesignProjects.map((project, idx) => {
          const isEven = idx % 2 === 0;
          const isLogo = project.aspectRatio === "square";
          const projectNum = `0${idx + 1}`;

          return (
            <article
              key={project.id}
              className="graphic-project-row grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-14 xl:gap-20 items-center"
            >
              {/* IMAGE CONTAINER: Left on Even, Right on Odd (Desktop) | Top on Mobile */}
              <div
                className={`w-full ${
                  isEven
                    ? "order-1 lg:order-1 lg:col-span-7"
                    : "order-1 lg:order-2 lg:col-span-7"
                }`}
              >
                <div
                  onClick={() => setSelectedProject(project)}
                  onKeyDown={(e) => {
                    if (e.key === "Enter" || e.key === " ") {
                      e.preventDefault();
                      setSelectedProject(project);
                    }
                  }}
                  role="button"
                  tabIndex={0}
                  aria-label={`View full design for ${project.title}`}
                  className="group relative border border-white/10 hover:border-white/30 bg-[#030303] transition-all duration-300 cursor-pointer overflow-hidden shadow-2xl block"
                >
                  {/* Card Header Telemetry */}
                  <div className="flex items-center justify-between border-b border-white/10 px-5 py-3 bg-surface-elevated/70">
                    <div className="flex items-center gap-2">
                      <span className="w-1.5 h-1.5 rounded-full bg-[#B7FF00]" />
                      <span className="font-mono text-[11px] text-neutral-400 uppercase tracking-widest">
                        {projectNum} — {project.category}
                      </span>
                    </div>
                    <div className="flex items-center gap-2">
                      <span
                        className={`font-mono text-[10px] uppercase tracking-wider px-2 py-0.5 border ${
                          project.tool === "Figma"
                            ? "text-[#B7FF00] border-[#B7FF00]/30 bg-[#B7FF00]/10"
                            : "text-amber-300 border-amber-500/30 bg-amber-500/10"
                        }`}
                      >
                        TOOL: {project.tool}
                      </span>
                      <Maximize2 className="w-3.5 h-3.5 text-neutral-500 group-hover:text-white transition-colors" />
                    </div>
                  </div>

                  {/* Aspect-Preserving Image Frame with 3D Tilt */}
                  <div className="relative w-full bg-[#030303] flex items-center justify-center p-6 sm:p-10 min-h-[380px] sm:min-h-[460px] lg:min-h-[520px] overflow-hidden">
                    <div className="absolute inset-0 bg-radial-gradient from-white/[0.02] to-transparent pointer-events-none" />

                    <TiltImage
                      className={`w-full ${
                        isLogo
                          ? "max-w-[320px] sm:max-w-[380px] aspect-square"
                          : "max-w-[340px] sm:max-w-[400px] xl:max-w-[440px] aspect-[723/1024] shadow-2xl"
                      }`}
                      maxTilt={4}
                    >
                      <div className="relative w-full h-full">
                        <Image
                          src={project.image}
                          alt={project.title}
                          fill
                          className={`object-contain ${
                            isLogo ? "" : "border border-white/10"
                          }`}
                          sizes="(max-width: 1024px) 100vw, 55vw"
                          priority={idx === 0}
                        />

                        {/* Expand overlay cue */}
                        <div className="absolute bottom-3 right-3 opacity-0 group-hover:opacity-100 transition-all duration-300 flex items-center gap-1.5 font-mono text-[10px] text-white bg-black/90 backdrop-blur-md border border-white/25 px-2.5 py-1 shadow-lg pointer-events-none">
                          <Eye className="w-3 h-3 text-[#B7FF00]" />
                          <span>EXPAND POSTER</span>
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
                      PROJECT {projectNum}
                    </span>
                    <span className="text-neutral-600 font-mono text-xs">•</span>
                    <span className="font-mono text-xs text-neutral-400 uppercase tracking-wider">
                      {project.year}
                    </span>
                  </div>

                  <h3 className="font-heading font-black text-3xl sm:text-4xl xl:text-5xl text-white uppercase tracking-tight leading-none">
                    {project.title}
                  </h3>

                  <div className="flex flex-wrap items-center gap-2 pt-1">
                    <span className="font-mono text-[11px] text-neutral-400 uppercase tracking-wider border border-white/10 bg-white/5 px-2.5 py-0.5">
                      {project.category}
                    </span>
                    <span
                      className={`font-mono text-[11px] uppercase tracking-wider px-2.5 py-0.5 border ${
                        project.tool === "Figma"
                          ? "text-[#B7FF00] border-[#B7FF00]/30 bg-[#B7FF00]/10"
                          : "text-amber-300 border-amber-500/30 bg-amber-500/10"
                      }`}
                    >
                      TOOL: {project.tool}
                    </span>
                  </div>
                </div>

                <p className="text-neutral-300 text-sm sm:text-base font-light leading-relaxed">
                  {project.description}
                </p>

                <div className="pt-2 border-t border-white/10">
                  <button
                    type="button"
                    onClick={() => setSelectedProject(project)}
                    className="inline-flex items-center gap-2.5 font-mono text-xs text-white hover:text-[#B7FF00] border border-white/15 hover:border-[#B7FF00]/50 bg-white/5 hover:bg-white/10 px-5 py-2.5 transition-all group/btn"
                  >
                    <span>VIEW FULL DESIGN</span>
                    <ArrowRight className="w-3.5 h-3.5 transition-transform duration-200 group-hover/btn:translate-x-1" />
                  </button>
                </div>
              </div>
            </article>
          );
        })}
      </div>

      {/* Lightbox Modal for Full Aspect-Ratio Detail View */}
      {selectedProject && (
        <LightboxModal
          isOpen={!!selectedProject}
          onClose={() => setSelectedProject(null)}
          title={selectedProject.title}
          category={selectedProject.category}
          tool={selectedProject.tool}
          year={selectedProject.year}
          image={selectedProject.image}
          description={selectedProject.description}
        />
      )}
    </section>
  );
}
