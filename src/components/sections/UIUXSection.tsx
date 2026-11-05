"use client";

import React, { useState, useEffect, useRef } from "react";
import Image from "next/image";
import { uiuxProjects, UIUXProject } from "@/data/ui-ux";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { UIUXDetailModal } from "@/components/ui/UIUXDetailModal";
import { registerGSAP, EASE } from "@/lib/animations";
import { Maximize2, ArrowRight, Eye } from "lucide-react";

export function UIUXSection() {
  const containerRef = useRef<HTMLElement>(null);
  const pinWrapperRef = useRef<HTMLDivElement>(null);
  const trackRef = useRef<HTMLDivElement>(null);
  const progressBarRef = useRef<HTMLDivElement>(null);
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

      const mm = gsap.matchMedia();

      // DESKTOP: Horizontal Pinned Showcase (min-width: 1024px)
      mm.add("(min-width: 1024px)", () => {
        const track = trackRef.current;
        const pinWrapper = pinWrapperRef.current;
        if (!track || !pinWrapper) return;

        const getScrollDistance = () => track.scrollWidth - track.clientWidth;

        const scrollTween = gsap.to(track, {
          x: () => -getScrollDistance(),
          ease: "none",
        });

        ScrollTrigger.create({
          trigger: pinWrapper,
          start: "top top+=75",
          end: () => `+=${getScrollDistance() + 350}`,
          pin: true,
          animation: scrollTween,
          scrub: 1,
          invalidateOnRefresh: true,
          onUpdate: (self) => {
            if (progressBarRef.current) {
              progressBarRef.current.style.transform = `scaleX(${self.progress})`;
            }
          },
        });
      });

      // MOBILE & TABLET: Natural Vertical Staggered Reveals (max-width: 1023px)
      mm.add("(max-width: 1023px)", () => {
        const mobileCards = gsap.utils.toArray<HTMLElement>(".uiux-mobile-card");
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

    return () => ctx.revert();
  }, []);

  return (
    <section
      ref={containerRef}
      id="ui-ux"
      className="space-y-8 sm:space-y-12 relative"
      aria-label="UI/UX Design Projects"
    >
      <SectionHeading
        className="uiux-heading"
        index="04"
        category="SELECTED WORK"
        title="UI/UX DESIGN."
        subtitle="Digital product interfaces, interactive mobile flows, and structured web dashboards crafted in Figma."
      />

      {/* =========================================================================
          DESKTOP PINNED HORIZONTAL SHOWCASE (lg:block hidden)
          Pins in viewport and glides horizontally through all 3 interface systems
      ========================================================================== */}
      <div ref={pinWrapperRef} className="hidden lg:block w-full overflow-hidden">
        {/* Pinned Telemetry Bar */}
        <div className="flex items-center justify-between border-b border-white/10 pb-3 mb-6 font-mono text-xs text-neutral-400">
          <div className="flex items-center gap-2">
            <span className="w-2 h-2 rounded-full bg-[#B7FF00] animate-pulse" />
            <span className="text-white font-medium">INTERFACE SHOWCASE</span>
            <span className="text-neutral-600">•</span>
            <span className="text-neutral-500">SCROLL DOWN TO TRAVERSE SYSTEMS</span>
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
            <span className="text-neutral-400 font-bold">03 SYSTEMS</span>
          </div>
        </div>

        {/* Horizontal Track */}
        <div
          ref={trackRef}
          className="flex flex-row gap-8 items-stretch will-change-transform w-max pr-12 pb-4"
        >
          {uiuxProjects.map((project, idx) => (
            <article
              key={`desktop-uiux-${project.id}`}
              onClick={() => setActiveProject(project)}
              className="w-[820px] xl:w-[920px] 2xl:w-[1020px] flex-shrink-0 border border-white/10 bg-surface hover:border-white/25 transition-all duration-300 group cursor-pointer relative overflow-hidden flex flex-col justify-between shadow-2xl"
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
              <div className="flex items-center justify-between border-b border-white/10 px-8 py-3.5 bg-surface-elevated/70">
                <div className="flex items-center gap-3">
                  <span className="font-mono text-xs text-white font-bold tracking-widest">
                    [{project.number}]
                  </span>
                  <span className="font-mono text-xs text-neutral-400 uppercase tracking-widest">
                    {project.category}
                  </span>
                  <span className="font-mono text-xs text-neutral-600">•</span>
                  <span className="font-mono text-[10px] text-neutral-400 bg-white/5 border border-white/10 px-2 py-0.5 uppercase tracking-wider">
                    {project.projectType}
                  </span>
                </div>

                <div className="flex items-center gap-3">
                  <span className="font-mono text-[10px] uppercase tracking-wider text-[#B7FF00] border border-[#B7FF00]/30 bg-[#B7FF00]/10 px-2.5 py-0.5">
                    TOOL: {project.tool}
                  </span>
                  <div className="flex items-center gap-1 font-mono text-[11px] text-neutral-400 group-hover:text-white transition-colors">
                    <span>EXPAND</span>
                    <Maximize2 className="w-3.5 h-3.5" />
                  </div>
                </div>
              </div>

              {/* Split Content: Left Info / Right Frame Preview */}
              <div className="grid grid-cols-12 gap-8 p-8 flex-1 items-center">
                {/* Left Column (5 cols) */}
                <div className="col-span-5 flex flex-col justify-between h-full space-y-6">
                  <div className="space-y-4">
                    <div>
                      <span className="font-mono text-[10px] text-neutral-500 uppercase tracking-widest block mb-1">
                        PROJECT 0{idx + 1}
                      </span>
                      <h3 className="text-3xl xl:text-4xl font-heading font-black text-white uppercase tracking-tight group-hover:text-neutral-200 transition-colors">
                        {project.title}
                      </h3>
                    </div>

                    <p className="text-sm text-neutral-300 font-light leading-relaxed">
                      {project.description}
                    </p>

                    {/* Curated Included Screens Tags */}
                    <div className="pt-2">
                      <span className="font-mono text-[10px] text-neutral-500 uppercase tracking-widest block mb-2">
                        DOCUMENTED INTERFACE SCREENS
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
                          <span className="font-mono text-[11px] text-neutral-500 bg-white/5 border border-white/10 px-2 py-1">
                            +{project.screens.length - 5} more
                          </span>
                        )}
                      </div>
                    </div>
                  </div>

                  {/* Bottom Action Prompt */}
                  <div className="pt-4 border-t border-white/10 flex items-center justify-between font-mono text-xs">
                    <span className="text-neutral-400 group-hover:text-white transition-colors flex items-center gap-2">
                      <span>Explore Artboard &amp; Details</span>
                      <ArrowRight className="w-3.5 h-3.5 group-hover:translate-x-1 transition-transform" />
                    </span>
                    <span className="text-neutral-600 font-mono text-[10px]">FIGMA FRAMES</span>
                  </div>
                </div>

                {/* Right Column: Full Aspect-Preserved Visual Artboard Canvas (7 cols) */}
                <div className="col-span-7 bg-[#020202] border border-white/10 p-4 relative overflow-hidden flex items-center justify-center">
                  <div
                    className="absolute inset-0 opacity-10 pointer-events-none"
                    style={{
                      backgroundImage:
                        "linear-gradient(to right, rgba(255,255,255,0.08) 1px, transparent 1px), linear-gradient(to bottom, rgba(255,255,255,0.08) 1px, transparent 1px)",
                      backgroundSize: "24px 24px",
                    }}
                  />

                  <div className="relative w-full aspect-[16/10] max-h-[360px] xl:max-h-[400px] overflow-hidden shadow-2xl transition-transform duration-500 ease-out group-hover:scale-[1.015]">
                    <Image
                      src={project.image}
                      alt={`${project.title} Interface Screens`}
                      fill
                      className="object-contain"
                      sizes="(max-width: 1400px) 600px, 700px"
                      priority={idx === 0}
                    />

                    <div className="absolute bottom-3 right-3 opacity-0 group-hover:opacity-100 transition-all duration-300 flex items-center gap-1.5 font-mono text-[10px] text-white bg-black/90 backdrop-blur-md border border-white/20 px-2.5 py-1 shadow-lg pointer-events-none">
                      <Eye className="w-3 h-3 text-[#B7FF00]" />
                      <span>INSPECT ARTBOARD</span>
                    </div>
                  </div>
                </div>
              </div>
            </article>
          ))}
        </div>
      </div>

      {/* =========================================================================
          MOBILE & TABLET NATURAL VERTICAL GALLERY (block lg:hidden)
          Clean vertical stack with natural touch scrolling
      ========================================================================== */}
      <div className="block lg:hidden space-y-10">
        {uiuxProjects.map((project, idx) => (
          <article
            key={`mobile-uiux-${project.id}`}
            onClick={() => setActiveProject(project)}
            className="uiux-mobile-card border border-white/10 bg-surface hover:border-white/25 transition-all duration-300 group cursor-pointer relative overflow-hidden"
            role="button"
            tabIndex={0}
            aria-label={`Explore ${project.title} UI/UX project`}
          >
            {/* Top Telemetry */}
            <div className="flex flex-wrap items-center justify-between gap-3 border-b border-white/10 px-5 sm:px-6 py-3.5 bg-surface-elevated/70">
              <div className="flex flex-wrap items-center gap-2">
                <span className="font-mono text-xs text-white font-bold tracking-widest">
                  [{project.number}]
                </span>
                <span className="font-mono text-[10px] sm:text-xs text-neutral-400 uppercase tracking-widest">
                  {project.category}
                </span>
              </div>
              <span className="font-mono text-[10px] uppercase tracking-wider text-[#B7FF00] border border-[#B7FF00]/30 bg-[#B7FF00]/10 px-2 py-0.5">
                TOOL: {project.tool}
              </span>
            </div>

            {/* Content & Canvas */}
            <div className="p-5 sm:p-6 space-y-6">
              <div className="space-y-3">
                <h3 className="text-2xl sm:text-3xl font-heading font-black text-white uppercase tracking-tight">
                  {project.title}
                </h3>
                <p className="text-sm text-neutral-300 font-light leading-relaxed">
                  {project.description}
                </p>
              </div>

              {/* Image Artboard */}
              <div className="bg-[#020202] border border-white/10 p-3 relative overflow-hidden flex items-center justify-center">
                <div className="relative w-full aspect-[16/10] min-h-[220px] overflow-hidden shadow-2xl">
                  <Image
                    src={project.image}
                    alt={`${project.title} Interface Screens`}
                    fill
                    className="object-contain"
                    sizes="(max-width: 768px) 100vw, 80vw"
                  />
                  <div className="absolute bottom-2 right-2 flex items-center gap-1 font-mono text-[10px] text-white bg-black/85 border border-white/20 px-2 py-1 shadow-md">
                    <Eye className="w-3 h-3 text-[#B7FF00]" />
                    <span>TAP TO INSPECT</span>
                  </div>
                </div>
              </div>

              {/* Screens List */}
              <div className="pt-2">
                <span className="font-mono text-[10px] text-neutral-500 uppercase tracking-widest block mb-2">
                  INCLUDED SCREENS
                </span>
                <div className="flex flex-wrap gap-1.5">
                  {project.screens.slice(0, 6).map((screen) => (
                    <span
                      key={screen}
                      className="font-mono text-[10px] text-neutral-300 bg-surface-elevated border border-white/10 px-2 py-0.5"
                    >
                      {screen}
                    </span>
                  ))}
                  {project.screens.length > 6 && (
                    <span className="font-mono text-[10px] text-neutral-500 bg-white/5 border border-white/10 px-2 py-0.5">
                      +{project.screens.length - 6} more
                    </span>
                  )}
                </div>
              </div>

              <div className="pt-3 border-t border-white/10 flex items-center justify-between font-mono text-xs text-neutral-400">
                <span className="text-neutral-300 flex items-center gap-1.5">
                  <span>Open Full Artboard Modal</span>
                  <ArrowRight className="w-3.5 h-3.5" />
                </span>
                <span className="text-[10px] text-neutral-600">FIGMA</span>
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
