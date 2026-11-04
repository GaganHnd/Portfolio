"use client";

import React, { useState, useEffect, useRef } from "react";
import Image from "next/image";
import { graphicDesignProjects, GraphicDesignProject } from "@/data/graphic-design";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { LightboxModal } from "@/components/ui/LightboxModal";
import { registerGSAP, EASE } from "@/lib/animations";
import { Maximize2, Palette, Sparkles, ExternalLink, Eye } from "lucide-react";

export function GraphicDesignSection() {
  const containerRef = useRef<HTMLElement>(null);
  const [selectedProject, setSelectedProject] = useState<GraphicDesignProject | null>(null);

  useEffect(() => {
    const prefersReducedMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    if (prefersReducedMotion || !containerRef.current) return;

    const { gsap, ScrollTrigger } = registerGSAP();

    const ctx = gsap.context(() => {
      gsap.fromTo(
        ".graphic-project-card",
        { opacity: 0.85, y: 28 },
        {
          opacity: 1,
          y: 0,
          duration: 0.8,
          stagger: 0.15,
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
      id="work"
      className="space-y-8 sm:space-y-12"
      aria-label="Graphic Design Selected Work"
    >
      <SectionHeading
        index="03"
        category="SELECTED WORK"
        title="GRAPHIC DESIGN."
        subtitle="Event poster compositions, promotional creative direction, and geometric visual identities."
      />

      {/* Editorial Asymmetric Grid */}
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 sm:gap-8 lg:gap-10">
        {graphicDesignProjects.map((project, idx) => {
          // Asymmetric column allocation:
          // Item 0 (Trade Triumph): 7 cols
          // Item 1 (Constitution Day): 5 cols
          // Item 2 (Phoenix 2.0 Promo War): 6 cols
          // Item 3 (Udbhava Club Logo): 6 cols
          const colSpan =
            idx === 0
              ? "lg:col-span-7"
              : idx === 1
              ? "lg:col-span-5"
              : idx === 2
              ? "lg:col-span-6"
              : "lg:col-span-6";

          const isLogo = project.aspectRatio === "square";

          return (
            <article
              key={project.id}
              onClick={() => setSelectedProject(project)}
              className={`graphic-project-card ${colSpan} border border-white/10 bg-surface flex flex-col justify-between hover:border-white/30 transition-all duration-300 group cursor-pointer relative overflow-hidden`}
              role="button"
              tabIndex={0}
              aria-label={`View ${project.title} details`}
              onKeyDown={(e) => {
                if (e.key === "Enter" || e.key === " ") {
                  e.preventDefault();
                  setSelectedProject(project);
                }
              }}
            >
              {/* Card Header Telemetry */}
              <div className="flex items-center justify-between border-b border-white/10 px-5 sm:px-6 py-3.5 bg-surface-elevated/60 z-10">
                <div className="flex flex-wrap items-center gap-2">
                  <span className="font-mono text-[10px] text-neutral-500 uppercase tracking-widest">
                    0{idx + 1} / {project.category}
                  </span>
                </div>
                <div className="flex items-center gap-2">
                  <span
                    className={`font-mono text-[10px] uppercase tracking-wider px-2 py-0.5 border ${
                      project.tool === "Figma"
                        ? "text-emerald-400 border-emerald-500/30 bg-emerald-500/10"
                        : "text-amber-300 border-amber-500/30 bg-amber-500/10"
                    }`}
                  >
                    TOOL: {project.tool}
                  </span>
                  <div className="hidden sm:flex items-center gap-1 font-mono text-[10px] text-neutral-500 opacity-0 group-hover:opacity-100 transition-opacity">
                    <Maximize2 className="w-3 h-3 text-white" />
                  </div>
                </div>
              </div>

              {/* Image Presentation Frame (Uncropped preservation of aspect ratio) */}
              <div
                className={`relative w-full bg-[#030303] flex items-center justify-center p-4 sm:p-6 md:p-8 overflow-hidden ${
                  isLogo ? "min-h-[340px] sm:min-h-[420px]" : "min-h-[380px] sm:min-h-[480px] md:min-h-[520px]"
                }`}
              >
                {/* Subtle Grid Accent for Logo Display */}
                {isLogo && (
                  <div
                    className="absolute inset-0 opacity-15 pointer-events-none"
                    style={{
                      backgroundImage:
                        "linear-gradient(to right, rgba(255,255,255,0.08) 1px, transparent 1px), linear-gradient(to bottom, rgba(255,255,255,0.08) 1px, transparent 1px)",
                      backgroundSize: "28px 28px",
                    }}
                  />
                )}

                {/* Aspect-Preserving Image Container */}
                <div
                  className={`relative w-full ${
                    isLogo
                      ? "max-w-[320px] sm:max-w-[380px] aspect-square"
                      : "max-w-[380px] sm:max-w-[440px] aspect-[723/1024]"
                  } shadow-2xl transition-transform duration-500 ease-out group-hover:scale-[1.02]`}
                >
                  <Image
                    src={project.image}
                    alt={project.title}
                    fill
                    className={`object-contain ${
                      isLogo ? "p-4 bg-white/5 border border-white/10" : "border border-white/10"
                    }`}
                    sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                    priority={idx < 2}
                  />

                  {/* Expand Overlay Pill */}
                  <div className="absolute bottom-3 right-3 opacity-0 group-hover:opacity-100 transition-all duration-300 flex items-center gap-1.5 font-mono text-[10px] text-white bg-black/85 backdrop-blur-md border border-white/25 px-2.5 py-1 shadow-lg pointer-events-none">
                    <Eye className="w-3 h-3 text-emerald-400" />
                    <span>EXPAND</span>
                  </div>
                </div>
              </div>

              {/* Card Meta & Editorial Narrative */}
              <div className="p-5 sm:p-6 md:p-7 border-t border-white/10 bg-surface space-y-3">
                <div className="flex flex-wrap items-baseline justify-between gap-2">
                  <h3 className="font-heading font-black text-xl sm:text-2xl md:text-3xl text-white uppercase tracking-tight group-hover:text-neutral-200 transition-colors">
                    {project.title}
                  </h3>
                  <span className="font-mono text-xs text-neutral-500">{project.year}</span>
                </div>

                <p className="text-sm text-neutral-300 font-light leading-relaxed">
                  {project.description}
                </p>

                <div className="pt-2 flex items-center justify-between font-mono text-[11px] text-neutral-500 border-t border-white/5">
                  <span className="uppercase tracking-wider">
                    {project.category} • {project.tool}
                  </span>
                  <span className="text-neutral-400 group-hover:text-white transition-colors flex items-center gap-1">
                    Click to view full design →
                  </span>
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
