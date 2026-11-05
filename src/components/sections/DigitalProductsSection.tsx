"use client";

import React, { useEffect, useRef } from "react";
import Image from "next/image";
import { digitalProducts } from "@/data/digital-products";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { registerGSAP, EASE } from "@/lib/animations";
import {
  Bot,
  Terminal,
  Code2,
  BookOpen,
} from "lucide-react";

export function DigitalProductsSection() {
  const containerRef = useRef<HTMLElement>(null);

  useEffect(() => {
    const prefersReducedMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    if (prefersReducedMotion || !containerRef.current) return;

    const { gsap } = registerGSAP();

    const ctx = gsap.context(() => {
      // 1. Heading masked reveal
      gsap.fromTo(
        ".digital-heading .section-heading-title",
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

      // 2. Staggered project cards reveal
      const cards = gsap.utils.toArray<HTMLElement>(".digital-product-card");
      cards.forEach((card) => {
        const imageFrame = card.querySelector(".digital-image-frame");
        const features = card.querySelectorAll(".digital-feature-item");

        const tl = gsap.timeline({
          scrollTrigger: {
            trigger: card,
            start: "top 85%",
            toggleActions: "play none none none",
          },
        });

        tl.fromTo(
          card,
          { opacity: 0, y: 35 },
          { opacity: 1, y: 0, duration: 0.85, ease: EASE.cinematic }
        );

        if (imageFrame) {
          tl.fromTo(
            imageFrame,
            { scale: 0.97, opacity: 0.9 },
            { scale: 1, opacity: 1, duration: 0.7, ease: "power2.out" },
            "-=0.5"
          );
        }

        if (features.length > 0) {
          tl.fromTo(
            features,
            { opacity: 0, y: 12 },
            { opacity: 1, y: 0, duration: 0.5, stagger: 0.06, ease: "power2.out" },
            "-=0.4"
          );
        }
      });
    }, containerRef);

    return () => ctx.revert();
  }, []);

  const echoProject = digitalProducts.find((p) => p.id === "echo")!;
  const studyAssistantProject = digitalProducts.find((p) => p.id === "ai-study-assistant")!;

  return (
    <section
      ref={containerRef}
      id="digital-products"
      className="space-y-8 sm:space-y-12"
      aria-label="Digital Products & Development"
    >
      <SectionHeading
        className="digital-heading"
        category="BEYOND VISUALS"
        title="DIGITAL PRODUCTS &amp; DEVELOPMENT."
        subtitle="Bridging visual design sensibility with technical engineering: AI-powered applications, voice assistance pipelines, and modern full-stack platforms."
      />

      <div className="space-y-10 sm:space-y-12 md:space-y-16">
        {/* 1. PRIMARY FEATURED PROJECT: ECHO */}
        <article className="digital-product-card border border-white/15 bg-surface relative overflow-hidden shadow-2xl">
          {/* Featured Top Header */}
          <div className="flex flex-wrap items-center justify-between gap-3 border-b border-white/10 px-6 sm:px-8 md:px-10 py-4 bg-surface-elevated">
            <div className="flex flex-wrap items-center gap-2.5 sm:gap-3">
              <span className="font-mono text-xs text-white font-bold tracking-widest">
                [01 / FEATURED AI PRODUCT]
              </span>
              <span className="font-mono text-[10px] sm:text-xs text-neutral-400 uppercase tracking-widest">
                {echoProject.category}
              </span>
              <span className="hidden sm:inline-block font-mono text-xs text-neutral-600">
                •
              </span>
              <span className="font-mono text-[10px] text-[#B7FF00] bg-[#B7FF00]/10 border border-[#B7FF00]/30 px-2 py-0.5 uppercase tracking-wider flex items-center gap-1.5">
                <span className="w-1.5 h-1.5 rounded-full bg-[#B7FF00] animate-pulse" />
                INTELLIGENT VOICE &amp; CHAT
              </span>
            </div>

            <div className="flex items-center gap-2 font-mono text-[10px] text-neutral-500">
              <Terminal className="w-3.5 h-3.5 text-neutral-400" />
              <span>FULL-STACK DEVELOPMENT</span>
            </div>
          </div>

          {/* Main Echo Body Grid */}
          <div className="p-6 sm:p-8 md:p-10 lg:p-12 space-y-8 sm:space-y-10">
            {/* Title & Overview */}
            <div className="space-y-3 max-w-4xl">
              <span className="font-mono text-[10px] sm:text-xs text-neutral-500 uppercase tracking-widest block">
                FLAGSHIP AI ARCHITECTURE
              </span>
              <h3 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-heading font-black text-white uppercase tracking-tight leading-[1.05]">
                {echoProject.title}
              </h3>
              <p className="text-base sm:text-lg md:text-xl text-neutral-300 font-light leading-relaxed pt-1">
                {echoProject.description}
              </p>
            </div>

            {/* Architecture Preview Frame */}
            <div className="space-y-2">
              <div className="digital-image-frame relative w-full aspect-[16/10] sm:max-h-[500px] border border-white/10 bg-[#020202] overflow-hidden flex items-center justify-center transition-transform duration-500">
                <Image
                  src={echoProject.image}
                  alt={echoProject.imageAlt}
                  fill
                  className="object-contain"
                  sizes="(max-width: 1400px) 100vw, 1400px"
                  priority
                />
              </div>
              <div className="flex flex-wrap items-center justify-between gap-2 font-mono text-[10px] text-neutral-500 px-1">
                <span>SYSTEM ARCHITECTURE DIAGRAM &amp; INTERFACE BLUEPRINT</span>
                <span className="text-neutral-400">
                  Drop screenshot at: <code className="text-neutral-300">{echoProject.placeholderPath}</code>
                </span>
              </div>
            </div>

            {/* Echo Features & Technology Grid */}
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 pt-6 border-t border-white/10">
              {/* Left: Key Features (7 cols) */}
              <div className="lg:col-span-7 space-y-4">
                <div className="flex items-center gap-2 font-mono text-xs text-neutral-400 uppercase tracking-wider pb-2 border-b border-white/10">
                  <Bot className="w-4 h-4 text-[#B7FF00]" />
                  <span>Documented Key Capabilities &amp; Engineering</span>
                </div>

                <ul className="space-y-3 pt-1">
                  {echoProject.keyFeatures.map((feature, fIdx) => (
                    <li
                      key={fIdx}
                      className="digital-feature-item flex items-start gap-3 text-neutral-300 font-light text-sm sm:text-base leading-relaxed"
                    >
                      <span className="font-mono text-[10px] text-neutral-500 mt-1 flex-shrink-0">
                        [0{fIdx + 1}]
                      </span>
                      <span>{feature}</span>
                    </li>
                  ))}
                </ul>
              </div>

              {/* Right: Technology Stack (5 cols) */}
              <div className="lg:col-span-5 space-y-4 lg:border-l lg:border-white/10 lg:pl-8">
                <div className="flex items-center gap-2 font-mono text-xs text-neutral-400 uppercase tracking-wider pb-2 border-b border-white/10">
                  <Code2 className="w-4 h-4 text-white" />
                  <span>Verified Technology Stack</span>
                </div>

                <div className="flex flex-wrap gap-2 pt-1">
                  {echoProject.technology.map((tech) => (
                    <span
                      key={tech}
                      className="digital-feature-item font-mono text-xs text-neutral-200 bg-surface-elevated border border-white/10 px-3 py-1.5 hover:border-white/30 transition-colors"
                    >
                      {tech}
                    </span>
                  ))}
                </div>

                <div className="pt-4">
                  <div className="p-4 border border-white/10 bg-white/5 space-y-1.5">
                    <span className="font-mono text-[10px] text-neutral-400 uppercase tracking-wider block">
                      SYSTEM HIGHLIGHT
                    </span>
                    <p className="text-xs text-neutral-400 leading-relaxed font-mono">
                      End-to-end integration combining Convex real-time state, VAPI voice AI synthesis, and secure AWS credentials management.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </article>

        {/* 2. SECONDARY PROJECT: AI STUDY ASSISTANT */}
        <article className="digital-product-card border border-white/10 bg-surface relative overflow-hidden">
          {/* Top Header */}
          <div className="flex flex-wrap items-center justify-between gap-3 border-b border-white/10 px-6 sm:px-8 py-3.5 bg-surface-elevated/70">
            <div className="flex flex-wrap items-center gap-2.5 sm:gap-3">
              <span className="font-mono text-xs text-neutral-400 font-bold tracking-widest">
                [02 / SECONDARY AI APPLICATION]
              </span>
              <span className="font-mono text-[10px] sm:text-xs text-neutral-400 uppercase tracking-widest">
                {studyAssistantProject.category}
              </span>
            </div>

            <div className="flex items-center gap-2 font-mono text-[10px] text-neutral-500">
              <BookOpen className="w-3.5 h-3.5 text-neutral-400" />
              <span>EDUCATION &amp; WORKFLOW INTELLIGENCE</span>
            </div>
          </div>

          {/* Body Split Grid */}
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 sm:gap-8 lg:gap-10 p-6 sm:p-8 md:p-10">
            {/* Left Info Column (6 cols) */}
            <div className="lg:col-span-6 flex flex-col justify-between space-y-6">
              <div className="space-y-4">
                <div>
                  <span className="font-mono text-[10px] text-neutral-500 uppercase tracking-widest block mb-1">
                    APPLICATION SUMMARY
                  </span>
                  <h3 className="text-2xl sm:text-3xl md:text-4xl font-heading font-black text-white uppercase tracking-tight">
                    {studyAssistantProject.title}
                  </h3>
                </div>

                <p className="text-sm sm:text-base text-neutral-300 font-light leading-relaxed">
                  {studyAssistantProject.description}
                </p>

                {/* Key Features */}
                <div className="pt-2">
                  <span className="font-mono text-[10px] text-neutral-500 uppercase tracking-widest block mb-2.5">
                    CORE SYSTEM MODULES
                  </span>
                  <ul className="space-y-2 pt-1 font-mono text-xs text-neutral-300">
                    {studyAssistantProject.keyFeatures.map((feat) => (
                      <li key={feat} className="digital-feature-item flex items-center gap-2.5">
                        <span className="w-1.5 h-1.5 rounded-full bg-[#B7FF00]" />
                        <span>{feat}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>

              {/* Bottom Telemetry */}
              <div className="pt-4 border-t border-white/5 font-mono text-[10px] text-neutral-500">
                <span>INTENDED OUTCOME: PERSONALISED STUDENT LEARNING CYCLE</span>
              </div>
            </div>

            {/* Right Wireframe Preview Column (6 cols) */}
            <div className="lg:col-span-6 space-y-2 flex flex-col justify-center">
              <div className="digital-image-frame relative w-full aspect-[16/10] sm:max-h-[380px] border border-white/10 bg-[#020202] overflow-hidden flex items-center justify-center">
                <Image
                  src={studyAssistantProject.image}
                  alt={studyAssistantProject.imageAlt}
                  fill
                  className="object-contain"
                  sizes="(max-width: 1200px) 100vw, 600px"
                />
              </div>
              <div className="flex flex-wrap items-center justify-between gap-2 font-mono text-[10px] text-neutral-500 px-1">
                <span>LEARNING WORKFLOW INTERFACE BLUEPRINT</span>
                <span className="text-neutral-400">
                  Drop screenshot at: <code className="text-neutral-300">{studyAssistantProject.placeholderPath}</code>
                </span>
              </div>
            </div>
          </div>
        </article>
      </div>
    </section>
  );
}
