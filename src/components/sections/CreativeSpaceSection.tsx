"use client";

import React, { useEffect, useRef } from "react";
import Link from "next/link";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { registerGSAP, EASE } from "@/lib/animations";
import { ArrowUpRight, Palette, Layout, Sparkles, ArrowRight } from "lucide-react";

interface CategoryCard {
  number: string;
  title: string;
  description: string;
  href: string;
  tag: string;
  metrics: string;
  icon: React.ComponentType<{ className?: string }>;
}

const categories: CategoryCard[] = [
  {
    number: "01",
    title: "GRAPHIC DESIGN",
    description: "Event posters, promotional designs and Udbhava Club logo.",
    href: "/graphic-design",
    tag: "BRANDING & POSTERS",
    metrics: "4 Projects · Visual Identity",
    icon: Palette,
  },
  {
    number: "02",
    title: "UI/UX DESIGN",
    description: "Foodgo, LeadFlow and Stylish.",
    href: "/ui-ux-design",
    tag: "INTERFACES & APPS",
    metrics: "3 Case Studies · Mobile & Web",
    icon: Layout,
  },
  {
    number: "03",
    title: "DIGITAL PRODUCTS",
    description: "Echo – AI Customer Support Platform and Mind Mentor – An AI Study Assistant.",
    href: "/digital-products",
    tag: "AI & WEB PLATFORMS",
    metrics: "2 Platforms · AI Architecture",
    icon: Sparkles,
  },
];

export function CreativeSpaceSection() {
  const containerRef = useRef<HTMLElement>(null);

  useEffect(() => {
    const prefersReducedMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    if (prefersReducedMotion || !containerRef.current) return;

    const { gsap } = registerGSAP();

    const ctx = gsap.context(() => {
      // 1. Heading masked reveal
      gsap.fromTo(
        ".creative-space-heading .section-heading-title",
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

      // 2. Subtitle & telemetry reveal
      gsap.fromTo(
        [
          ".creative-space-heading .section-heading-meta",
          ".creative-space-heading .section-heading-sub",
          ".creative-space-telemetry",
        ],
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

      // 3. Staggered category cards entrance
      gsap.fromTo(
        ".creative-space-card",
        { opacity: 0, y: 30, scale: 0.98 },
        {
          opacity: 1,
          y: 0,
          scale: 1,
          duration: 0.8,
          stagger: 0.12,
          ease: "power3.out",
          scrollTrigger: {
            trigger: ".creative-space-grid",
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
      id="work"
      className="space-y-8 sm:space-y-12 relative"
      aria-label="The Creative Space Portfolio Directory"
    >
      <SectionHeading
        className="creative-space-heading"
        index="03"
        category="PORTFOLIO DIRECTORY"
        title="THE CREATIVE SPACE."
        subtitle="Ideas, visuals and digital experiences — all in one place. Select a discipline to explore the full dedicated showcase."
      />

      {/* Top Directory Telemetry */}
      <div className="creative-space-telemetry flex flex-wrap items-center justify-between gap-3 border-b border-white/10 pb-4 font-mono text-xs text-neutral-400">
        <div className="flex items-center gap-2">
          <span className="w-2 h-2 rounded-full bg-[#B7FF00] animate-pulse" />
          <span className="text-white font-medium uppercase tracking-wider">
            EXPLORE / 01
          </span>
          <span className="text-neutral-600">•</span>
          <span className="text-neutral-500 uppercase tracking-widest text-[11px]">
            MAIN DIRECTORY
          </span>
        </div>

        <div className="flex items-center gap-2 text-neutral-500 text-[11px] uppercase tracking-widest">
          <span>03 DISCIPLINES</span>
          <span className="text-neutral-600">•</span>
          <span className="text-[#B7FF00]">SELECT TO ENTER</span>
        </div>
      </div>

      {/* Permanently Visible Three Category Cards */}
      <div className="creative-space-grid grid grid-cols-1 md:grid-cols-3 gap-6 sm:gap-8">
        {categories.map((cat) => {
          const Icon = cat.icon;

          return (
            <Link
              key={cat.number}
              href={cat.href}
              className="creative-space-card group relative p-6 sm:p-8 border border-white/10 bg-surface hover:bg-white/[0.04] hover:border-[#B7FF00]/50 transition-all duration-300 flex flex-col justify-between shadow-2xl overflow-hidden focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-[#B7FF00]"
            >
              {/* Subtle Corner Accent Glow on Hover */}
              <div className="absolute top-0 right-0 w-32 h-32 bg-[#B7FF00]/5 blur-3xl pointer-events-none opacity-0 group-hover:opacity-100 transition-opacity duration-500" />

              <div>
                {/* Header row: Number, Tag, and Arrow */}
                <div className="flex items-center justify-between mb-6 pb-4 border-b border-white/10">
                  <div className="flex items-center gap-2 font-mono text-xs">
                    <span className="text-[#B7FF00] font-bold text-sm">{cat.number}</span>
                    <span className="text-neutral-600">—</span>
                    <span className="text-neutral-400 text-[10px] uppercase tracking-wider">
                      {cat.tag}
                    </span>
                  </div>

                  <div className="w-9 h-9 border border-white/10 bg-white/5 flex items-center justify-center text-neutral-400 group-hover:text-[#B7FF00] group-hover:border-[#B7FF00]/40 group-hover:bg-[#B7FF00]/10 transition-all duration-200">
                    <ArrowUpRight className="w-4 h-4 transition-transform duration-200 group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
                  </div>
                </div>

                {/* Icon & Title */}
                <div className="space-y-3 mb-4">
                  <div className="w-10 h-10 border border-white/10 bg-white/5 flex items-center justify-center text-neutral-300 group-hover:text-[#B7FF00] group-hover:border-[#B7FF00]/30 transition-colors">
                    <Icon className="w-5 h-5" />
                  </div>

                  <h3 className="font-heading font-black text-2xl sm:text-3xl text-white uppercase tracking-tight group-hover:text-[#B7FF00] transition-colors">
                    {cat.title}
                  </h3>
                </div>

                {/* Description */}
                <p className="text-neutral-400 font-light text-sm sm:text-base leading-relaxed mb-6">
                  {cat.description}
                </p>
              </div>

              {/* Footer row: Metrics and Action */}
              <div className="pt-4 border-t border-white/10 flex items-center justify-between font-mono text-xs">
                <span className="text-neutral-500 text-[11px] uppercase tracking-wider">
                  {cat.metrics}
                </span>

                <span className="inline-flex items-center gap-1.5 text-white group-hover:text-[#B7FF00] transition-colors font-medium text-[11px] uppercase tracking-widest">
                  <span>ENTER</span>
                  <ArrowRight className="w-3.5 h-3.5 transition-transform duration-200 group-hover:translate-x-1" />
                </span>
              </div>
            </Link>
          );
        })}
      </div>
    </section>
  );
}
