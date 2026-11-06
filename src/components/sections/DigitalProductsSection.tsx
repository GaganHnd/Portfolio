"use client";

import React, { useEffect, useRef } from "react";
import Image from "next/image";
import { digitalProducts } from "@/data/digital-products";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { TiltImage } from "@/components/ui/TiltImage";
import { registerGSAP, EASE } from "@/lib/animations";
import { Bot, BookOpen, Code2, Terminal } from "lucide-react";

export function DigitalProductsSection() {
  const containerRef = useRef<HTMLElement>(null);

  useEffect(() => {
    const prefersReducedMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    if (prefersReducedMotion || !containerRef.current) return;

    const { gsap, ScrollTrigger } = registerGSAP();

    const ctx = gsap.context(() => {
      // 0. Visual transition thread connector
      gsap.to(".digital-transition-glow", {
        scaleX: 1,
        duration: 1.2,
        ease: "power3.inOut",
        scrollTrigger: {
          trigger: containerRef.current,
          start: "top 85%",
          toggleActions: "play none none none",
        },
      });

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

      // 2. Subtle scroll-reveal for each vertically stacked alternating row
      const rows = gsap.utils.toArray<HTMLElement>(".digital-project-row");
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
      id="digital-products"
      className="space-y-12 sm:space-y-16 relative"
      aria-label="Digital Products & Development"
    >
      {/* Visual Transition Thread Connector */}
      <div className="digital-transition-strip relative h-[1px] w-full bg-white/10 overflow-hidden">
        <div className="digital-transition-glow absolute inset-0 bg-gradient-to-r from-transparent via-[#B7FF00] to-transparent origin-left scale-x-0 will-change-transform" />
      </div>

      <SectionHeading
        className="digital-heading"
        index="03"
        category="BEYOND VISUALS"
        title="DIGITAL PRODUCTS &amp; DEVELOPMENT."
        subtitle="Bridging visual design sensibility with technical engineering: AI-powered applications, voice assistance pipelines, and modern full-stack platforms."
      />

      {/* =========================================================================
          VERTICALLY STACKED ALTERNATING PROJECT SHOWCASE
          Desktop: Alternating Left-Right
          Mobile & Tablet: Image stacked consistently on top of description
      ========================================================================== */}
      <div className="space-y-20 sm:space-y-28 lg:space-y-36">
        {digitalProducts.map((product, idx) => {
          const isEven = idx % 2 === 0;
          const productNum = product.number || `0${idx + 1}`;
          const isEcho = product.id === "echo";

          return (
            <article
              key={product.id}
              className="digital-project-row grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-14 xl:gap-20 items-center"
            >
              {/* IMAGE / BANNER CONTAINER: Left on Even, Right on Odd (Desktop) | Top on Mobile */}
              <div
                className={`w-full ${
                  isEven
                    ? "order-1 lg:order-1 lg:col-span-7"
                    : "order-1 lg:order-2 lg:col-span-7"
                }`}
              >
                <div className="group relative border border-white/10 hover:border-white/30 bg-[#030303] transition-all duration-300 overflow-hidden shadow-2xl block">
                  {/* Top Header Telemetry */}
                  <div className="flex items-center justify-between border-b border-white/10 px-5 py-3 bg-surface-elevated/70">
                    <div className="flex items-center gap-2">
                      <span className="w-1.5 h-1.5 rounded-full bg-[#B7FF00] animate-pulse" />
                      <span className="font-mono text-[11px] text-neutral-400 uppercase tracking-widest">
                        [{productNum}] {product.category}
                      </span>
                    </div>
                    <div className="flex items-center gap-2 font-mono text-[10px] text-neutral-400">
                      {isEcho ? (
                        <Bot className="w-3.5 h-3.5 text-[#B7FF00]" />
                      ) : (
                        <BookOpen className="w-3.5 h-3.5 text-[#B7FF00]" />
                      )}
                      <span className="uppercase tracking-wider">
                        {isEcho ? "VOICE & CHAT ARCHITECTURE" : "MIND MENTOR PLATFORM"}
                      </span>
                    </div>
                  </div>

                  {/* Banner Frame with 3D Tilt - Uncropped 16:9 aspect ratio */}
                  <div className="relative w-full bg-[#020202] overflow-hidden flex items-center justify-center p-2 sm:p-3">
                    <TiltImage
                      className="w-full aspect-[16/9] overflow-hidden"
                      maxTilt={3.5}
                    >
                      <div className="relative w-full h-full">
                        <Image
                          src={product.image}
                          alt={product.imageAlt}
                          fill
                          className="object-contain"
                          sizes="(max-width: 1024px) 100vw, 55vw"
                          priority={idx === 0}
                        />
                      </div>
                    </TiltImage>
                  </div>

                  {/* Card Bottom Meta Strip */}
                  <div className="flex flex-wrap items-center justify-between gap-2 font-mono text-[10px] text-neutral-500 px-5 py-2.5 border-t border-white/10 bg-surface-elevated/40">
                    <span className="flex items-center gap-1.5">
                      <span className="w-1 h-1 rounded-full bg-[#B7FF00]" />
                      <span>{isEcho ? "ECHO PLATFORM ARCHITECTURE & VOICE AI" : "MIND MENTOR AI LEARNING PLATFORM"}</span>
                    </span>
                    <span className="text-neutral-400 uppercase">SYSTEM VERIFIED</span>
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
                      PRODUCT [{productNum}]
                    </span>
                    <span className="text-neutral-600 font-mono text-xs">•</span>
                    <span className="font-mono text-xs text-neutral-400 uppercase tracking-wider">
                      {product.category}
                    </span>
                  </div>

                  <h3 className="font-heading font-black text-3xl sm:text-4xl xl:text-5xl text-white uppercase tracking-tight leading-none">
                    {product.title}
                  </h3>

                  <div className="flex flex-wrap items-center gap-2 pt-1">
                    <span className="font-mono text-[11px] text-[#B7FF00] bg-[#B7FF00]/10 border border-[#B7FF00]/30 px-2.5 py-0.5 uppercase tracking-wider">
                      {isEcho ? "FLAGSHIP AI PRODUCT" : "PERSONALIZED LEARNING"}
                    </span>
                    <span className="font-mono text-[11px] text-neutral-400 border border-white/10 bg-white/5 px-2.5 py-0.5 uppercase tracking-wider">
                      FULL-STACK / AI
                    </span>
                  </div>
                </div>

                <p className="text-neutral-300 text-sm sm:text-base font-light leading-relaxed">
                  {product.description}
                </p>

                {/* Key Capabilities */}
                <div className="space-y-2">
                  <span className="font-mono text-[10px] text-neutral-500 uppercase tracking-widest block">
                    KEY CAPABILITIES &amp; ARCHITECTURE
                  </span>
                  <ul className="space-y-1.5">
                    {product.keyFeatures.map((feature, fIdx) => (
                      <li
                        key={fIdx}
                        className="flex items-start gap-2.5 text-xs sm:text-sm text-neutral-300 font-light"
                      >
                        <span className="font-mono text-[10px] text-neutral-500 mt-0.5 flex-shrink-0">
                          [0{fIdx + 1}]
                        </span>
                        <span>{feature}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                {/* Technology Stack */}
                <div className="space-y-2 pt-2 border-t border-white/10">
                  <div className="flex items-center gap-2">
                    <Code2 className="w-3.5 h-3.5 text-white" />
                    <span className="font-mono text-[10px] text-neutral-500 uppercase tracking-widest">
                      VERIFIED TECHNOLOGY STACK
                    </span>
                  </div>
                  <div className="flex flex-wrap gap-1.5 pt-1">
                    {product.technology.map((tech) => (
                      <span
                        key={tech}
                        className="font-mono text-[11px] text-neutral-300 bg-surface-elevated border border-white/10 px-2.5 py-1 hover:border-white/30 transition-colors"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            </article>
          );
        })}
      </div>
    </section>
  );
}
