"use client";

import React, { useState, useEffect, useRef } from "react";
import Image from "next/image";
import { graphicDesignProjects, GraphicDesignProject } from "@/data/graphic-design";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { LightboxModal } from "@/components/ui/LightboxModal";
import { registerGSAP, EASE } from "@/lib/animations";
import { Maximize2, Eye, Compass, ArrowRight } from "lucide-react";

export function GraphicDesignSection() {
  const containerRef = useRef<HTMLElement>(null);
  const pinWrapperRef = useRef<HTMLDivElement>(null);
  const trackRef = useRef<HTMLDivElement>(null);
  const progressBarRef = useRef<HTMLDivElement>(null);
  const [selectedProject, setSelectedProject] = useState<GraphicDesignProject | null>(null);

  useEffect(() => {
    const prefersReducedMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    if (prefersReducedMotion || !containerRef.current) return;

    const { gsap, ScrollTrigger } = registerGSAP();

    const ctx = gsap.context(() => {
      // 1. Section heading reveal
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

      const mm = gsap.matchMedia();

      // DESKTOP: Horizontal Pinned Showcase (min-width: 1024px)
      mm.add("(min-width: 1024px)", () => {
        const track = trackRef.current;
        const pinWrapper = pinWrapperRef.current;
        if (!track || !pinWrapper) return;

        // Correct calculated distance: full content width minus visible container width plus end breathing room
        const getScrollDistance = () => {
          if (!track || !pinWrapper) return 0;
          return Math.max(0, track.scrollWidth - pinWrapper.clientWidth + 60);
        };

        // Single dedicated GSAP tween with integrated ScrollTrigger
        gsap.to(track, {
          x: () => -getScrollDistance(),
          ease: "none",
          scrollTrigger: {
            trigger: pinWrapper,
            start: "top top+=80",
            end: () => `+=${getScrollDistance()}`,
            pin: true,
            pinSpacing: true,
            scrub: 1,
            invalidateOnRefresh: true,
            onUpdate: (self) => {
              if (progressBarRef.current) {
                progressBarRef.current.style.transform = `scaleX(${self.progress})`;
              }
            },
          },
        });
      });

      // MOBILE & TABLET: Natural Vertical Staggered Reveals (max-width: 1023px)
      mm.add("(max-width: 1023px)", () => {
        const mobileCards = gsap.utils.toArray<HTMLElement>(".graphic-mobile-card");
        mobileCards.forEach((card) => {
          gsap.fromTo(
            card,
            { opacity: 0, y: 30 },
            {
              opacity: 1,
              y: 0,
              duration: 0.8,
              ease: EASE.cinematic,
              scrollTrigger: {
                trigger: card,
                start: "top 85%",
                toggleActions: "play none none none",
              },
            }
          );
        });
      });
    }, containerRef);

    // Refresh after DOM layout is established to ensure exact dimensions
    const refreshTimer = setTimeout(() => {
      ScrollTrigger.refresh();
    }, 250);

    return () => {
      clearTimeout(refreshTimer);
      ctx.revert();
    };
  }, []);

  return (
    <section
      ref={containerRef}
      id="work"
      className="space-y-8 sm:space-y-12 relative"
      aria-label="Graphic Design Selected Work"
    >
      <SectionHeading
        className="graphic-heading"
        index="03"
        category="SELECTED WORK"
        title="GRAPHIC DESIGN."
        subtitle="Event poster compositions, promotional creative direction, and geometric visual identities."
      />

      {/* =========================================================================
          DESKTOP PINNED HORIZONTAL SHOWCASE (lg:block hidden)
          Pins in viewport and glides horizontally through all 4 projects
      ========================================================================== */}
      <div ref={pinWrapperRef} className="hidden lg:block w-full overflow-hidden">
        {/* Pinned Gallery Telemetry Bar */}
        <div className="flex items-center justify-between border-b border-white/10 pb-3 mb-6 font-mono text-xs text-neutral-400">
          <div className="flex items-center gap-2">
            <span className="w-2 h-2 rounded-full bg-[#B7FF00] animate-pulse" />
            <span className="text-white font-medium">HORIZONTAL SHOWCASE</span>
            <span className="text-neutral-600">•</span>
            <span className="text-neutral-500">SCROLL DOWN TO TRAVERSE PROJECTS</span>
          </div>

          <div className="flex items-center gap-3">
            <span className="text-[11px] text-neutral-500 uppercase tracking-widest">
              PROGRESS
            </span>
            <div className="w-32 h-[2px] bg-white/10 relative overflow-hidden">
              <div
                ref={progressBarRef}
                className="absolute inset-0 bg-[#B7FF00] origin-left will-change-transform"
                style={{ transform: "scaleX(0)" }}
              />
            </div>
            <span className="text-neutral-400 font-bold">04 PROJECTS</span>
          </div>
        </div>

        {/* Horizontal Track */}
        <div
          ref={trackRef}
          className="flex flex-row gap-8 items-stretch will-change-transform w-max pr-16 pb-4"
        >
          {graphicDesignProjects.map((project, idx) => {
            const isLogo = project.aspectRatio === "square";

            return (
              <article
                key={`desktop-${project.id}`}
                onClick={() => setSelectedProject(project)}
                className="w-[480px] xl:w-[540px] 2xl:w-[580px] flex-shrink-0 border border-white/10 bg-surface flex flex-col justify-between hover:border-white/30 transition-all duration-300 group cursor-pointer relative overflow-hidden shadow-2xl"
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
                <div className="flex items-center justify-between border-b border-white/10 px-6 py-3.5 bg-surface-elevated/70 z-10">
                  <span className="font-mono text-xs text-neutral-400 uppercase tracking-widest">
                    0{idx + 1} / {project.category}
                  </span>
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

                {/* Aspect-Preserving Image Frame (Uncropped!) */}
                <div className="relative w-full bg-[#030303] flex items-center justify-center p-6 h-[440px] xl:h-[480px] overflow-hidden">
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

                  <div
                    className={`graphic-image-inner relative w-full ${
                      isLogo
                        ? "max-w-[340px] aspect-square"
                        : "max-w-[340px] xl:max-w-[370px] aspect-[723/1024]"
                    } shadow-2xl transition-transform duration-500 ease-out group-hover:scale-[1.025]`}
                  >
                    <Image
                      src={project.image}
                      alt={project.title}
                      fill
                      className={`object-contain ${
                        isLogo ? "p-4 bg-white/5 border border-white/10" : "border border-white/10"
                      }`}
                      sizes="(max-width: 1280px) 500px, 600px"
                      priority={idx < 2}
                    />

                    <div className="absolute bottom-3 right-3 opacity-0 group-hover:opacity-100 transition-all duration-300 flex items-center gap-1.5 font-mono text-[10px] text-white bg-black/85 backdrop-blur-md border border-white/25 px-2.5 py-1 shadow-lg pointer-events-none">
                      <Eye className="w-3 h-3 text-[#B7FF00]" />
                      <span>EXPAND</span>
                    </div>
                  </div>
                </div>

                {/* Card Meta Narrative */}
                <div className="p-6 border-t border-white/10 bg-surface space-y-3">
                  <div className="flex items-baseline justify-between gap-2">
                    <h3 className="font-heading font-black text-2xl xl:text-3xl text-white uppercase tracking-tight group-hover:text-neutral-200 transition-colors">
                      {project.title}
                    </h3>
                    <span className="font-mono text-xs text-neutral-500">{project.year}</span>
                  </div>

                  <p className="text-sm text-neutral-300 font-light leading-relaxed line-clamp-2">
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
      </div>

      {/* =========================================================================
          MOBILE & TABLET NATURAL VERTICAL GALLERY (block lg:hidden)
          Clean vertical stack with natural touch scrolling
      ========================================================================== */}
      <div className="block lg:hidden space-y-8">
        {graphicDesignProjects.map((project, idx) => {
          const isLogo = project.aspectRatio === "square";

          return (
            <article
              key={`mobile-${project.id}`}
              onClick={() => setSelectedProject(project)}
              className="graphic-mobile-card border border-white/10 bg-surface flex flex-col justify-between hover:border-white/25 transition-all duration-300 group cursor-pointer relative overflow-hidden"
              role="button"
              tabIndex={0}
              aria-label={`View ${project.title} details`}
            >
              {/* Card Header Telemetry */}
              <div className="flex items-center justify-between border-b border-white/10 px-5 py-3.5 bg-surface-elevated/70 z-10">
                <span className="font-mono text-xs text-neutral-400 uppercase tracking-widest">
                  0{idx + 1} / {project.category}
                </span>
                <span
                  className={`font-mono text-[10px] uppercase tracking-wider px-2 py-0.5 border ${
                    project.tool === "Figma"
                      ? "text-[#B7FF00] border-[#B7FF00]/30 bg-[#B7FF00]/10"
                      : "text-amber-300 border-amber-500/30 bg-amber-500/10"
                  }`}
                >
                  TOOL: {project.tool}
                </span>
              </div>

              {/* Aspect-Preserving Image Container */}
              <div
                className={`relative w-full bg-[#030303] flex items-center justify-center p-4 sm:p-6 overflow-hidden ${
                  isLogo ? "min-h-[320px] sm:min-h-[380px]" : "min-h-[380px] sm:min-h-[460px]"
                }`}
              >
                <div
                  className={`relative w-full ${
                    isLogo
                      ? "max-w-[300px] sm:max-w-[360px] aspect-square"
                      : "max-w-[320px] sm:max-w-[380px] aspect-[723/1024]"
                  } shadow-2xl`}
                >
                  <Image
                    src={project.image}
                    alt={project.title}
                    fill
                    className={`object-contain ${
                      isLogo ? "p-4 bg-white/5 border border-white/10" : "border border-white/10"
                    }`}
                    sizes="(max-width: 768px) 100vw, 50vw"
                  />
                  <div className="absolute bottom-3 right-3 flex items-center gap-1.5 font-mono text-[10px] text-white bg-black/85 border border-white/25 px-2 py-1 shadow-lg">
                    <Eye className="w-3 h-3 text-[#B7FF00]" />
                    <span>VIEW</span>
                  </div>
                </div>
              </div>

              {/* Card Meta Narrative */}
              <div className="p-5 sm:p-6 border-t border-white/10 bg-surface space-y-3">
                <div className="flex items-baseline justify-between gap-2">
                  <h3 className="font-heading font-black text-xl sm:text-2xl text-white uppercase tracking-tight">
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
                  <span className="text-neutral-300 flex items-center gap-1">
                    Tap to expand full view →
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
