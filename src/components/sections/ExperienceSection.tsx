"use client";

import React, { useEffect, useRef } from "react";
import { experiences } from "@/data/experience";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { registerGSAP, EASE } from "@/lib/animations";
import { Briefcase, Calendar } from "lucide-react";

export function ExperienceSection() {
  const containerRef = useRef<HTMLElement>(null);

  useEffect(() => {
    const prefersReducedMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    if (prefersReducedMotion || !containerRef.current) return;

    const { gsap } = registerGSAP();

    const ctx = gsap.context(() => {
      // 1. Section heading reveal
      gsap.fromTo(
        ".exp-heading .section-heading-title",
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

      // 2. Progressive card reveals as user scrolls through each experience
      const cards = gsap.utils.toArray<HTMLElement>(".experience-card");
      cards.forEach((card, index) => {
        const borderLine = card.querySelector(".exp-card-border");
        const cardContent = card.querySelectorAll(".exp-reveal-item");

        const tl = gsap.timeline({
          scrollTrigger: {
            trigger: card,
            start: "top 85%",
            toggleActions: "play none none none",
          },
        });

        if (borderLine) {
          tl.fromTo(
            borderLine,
            { scaleX: 0, transformOrigin: "left" },
            { scaleX: 1, duration: 0.85, ease: "expo.out" }
          );
        }

        tl.fromTo(
          card,
          { opacity: 0, y: 35 },
          { opacity: 1, y: 0, duration: 0.8, ease: EASE.cinematic },
          "-=0.6"
        );

        if (cardContent.length > 0) {
          tl.fromTo(
            cardContent,
            { opacity: 0, y: 15 },
            { opacity: 1, y: 0, duration: 0.6, stagger: 0.08, ease: "power2.out" },
            "-=0.4"
          );
        }
      });
    }, containerRef);

    return () => ctx.revert();
  }, []);

  return (
    <section
      ref={containerRef}
      id="experience"
      className="space-y-8 sm:space-y-12"
      aria-label="Professional Experience"
    >
      <SectionHeading
        className="exp-heading"
        index="03"
        category="CAREER TRAJECTORY"
        title="EXPERIENCE."
        subtitle="Practical industry immersion applying data analysis, dashboard architecture, and structured problem-solving."
      />

      <div className="space-y-6 sm:space-y-8">
        {experiences.map((item, idx) => (
          <article
            key={item.id}
            className="experience-card border border-white/10 bg-surface p-6 sm:p-8 md:p-10 lg:p-12 hover:border-white/25 transition-colors duration-300 relative overflow-hidden"
          >
            {/* Top Border Reveal Line */}
            <div className="exp-card-border absolute top-0 left-0 right-0 h-[2px] bg-gradient-to-r from-white/30 via-[#B7FF00]/40 to-transparent pointer-events-none" />

            {/* Top Telemetry & Index Row */}
            <div className="exp-reveal-item flex flex-wrap items-center justify-between gap-3 border-b border-white/10 pb-4 sm:pb-6 mb-6 sm:mb-8">
              <div className="flex flex-wrap items-center gap-2 sm:gap-3">
                <span className="font-mono text-[10px] sm:text-xs uppercase tracking-widest text-neutral-400 bg-white/5 border border-white/10 px-2.5 py-1">
                  0{idx + 1} / {item.category}
                </span>
                <span className="hidden sm:inline-block font-mono text-[10px] text-neutral-600">
                  •
                </span>
                <span className="font-mono text-[10px] sm:text-xs uppercase tracking-wider text-emerald-400 flex items-center gap-1.5">
                  <span className="w-1.5 h-1.5 rounded-full bg-emerald-500" />
                  INTERNSHIP
                </span>
              </div>

              {/* Timeframe Pill */}
              <div className="flex items-center gap-2 font-mono text-[11px] sm:text-xs text-neutral-400 bg-surface-elevated border border-white/10 px-3 py-1">
                <Calendar className="w-3.5 h-3.5 text-neutral-500" />
                <span>{item.period}</span>
              </div>
            </div>

            {/* Main Content Grid */}
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 sm:gap-8 lg:gap-12">
              {/* Left Column: Role & Organization */}
              <div className="lg:col-span-5 space-y-3 sm:space-y-4">
                <div className="exp-reveal-item space-y-1">
                  <span className="font-mono text-[10px] sm:text-xs text-neutral-500 uppercase tracking-widest block">
                    ORGANIZATION
                  </span>
                  <h3 className="font-heading font-black text-2xl sm:text-3xl lg:text-4xl text-white uppercase tracking-tight">
                    {item.company}
                  </h3>
                </div>

                <div className="exp-reveal-item pt-2">
                  <span className="font-mono text-[10px] sm:text-xs text-neutral-500 uppercase tracking-widest block mb-1">
                    DESIGNATION
                  </span>
                  <p className="text-base sm:text-lg md:text-xl font-heading font-semibold text-neutral-200">
                    {item.role}
                  </p>
                </div>

                {/* Key Tools Tag Strip */}
                {item.keyTools && item.keyTools.length > 0 && (
                  <div className="exp-reveal-item pt-3 sm:pt-4">
                    <span className="font-mono text-[10px] text-neutral-500 uppercase tracking-widest block mb-2">
                      APPLIED TOOLS &amp; FOCUS
                    </span>
                    <div className="flex flex-wrap gap-1.5 sm:gap-2">
                      {item.keyTools.map((tool) => (
                        <span
                          key={tool}
                          className="font-mono text-[11px] text-neutral-300 bg-white/5 border border-white/10 px-2.5 py-1"
                        >
                          {tool}
                        </span>
                      ))}
                    </div>
                  </div>
                )}
              </div>

              {/* Right Column: Key Contributions & Bullet Points */}
              <div className="lg:col-span-7 lg:border-l lg:border-white/10 lg:pl-10 space-y-4">
                <div className="exp-reveal-item flex items-center gap-2 font-mono text-xs text-neutral-400 uppercase tracking-wider pb-2 border-b border-white/5">
                  <Briefcase className="w-3.5 h-3.5 text-neutral-400" />
                  <span>Key Contributions &amp; Outcomes</span>
                </div>

                <ul className="space-y-3 sm:space-y-4 pt-1">
                  {item.highlights.map((highlight, hIdx) => (
                    <li
                      key={hIdx}
                      className="exp-reveal-item flex items-start gap-3 text-neutral-300 font-light text-sm sm:text-base leading-relaxed"
                    >
                      <span className="font-mono text-[10px] text-neutral-500 mt-1 flex-shrink-0">
                        [{hIdx + 1}]
                      </span>
                      <span>{highlight}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </article>
        ))}
      </div>
    </section>
  );
}
