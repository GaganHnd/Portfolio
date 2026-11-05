"use client";

import React, { useEffect, useRef } from "react";
import { personalInfo } from "@/data/social-links";
import { Button } from "@/components/ui/Button";
import { MagneticWrapper } from "@/components/ui/MagneticWrapper";
import { registerGSAP, EASE } from "@/lib/animations";
import { Mail, ArrowUpRight, Sparkles, MessageSquare } from "lucide-react";

export function ContactSection() {
  const containerRef = useRef<HTMLElement>(null);

  useEffect(() => {
    const prefersReducedMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    if (prefersReducedMotion || !containerRef.current) return;

    const { gsap, ScrollTrigger } = registerGSAP();

    const ctx = gsap.context(() => {
      gsap.fromTo(
        ".contact-reveal",
        { opacity: 0.85, y: 24 },
        {
          opacity: 1,
          y: 0,
          duration: 0.8,
          stagger: 0.12,
          ease: EASE.cinematic,
          scrollTrigger: {
            trigger: containerRef.current,
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
      id="contact"
      className="space-y-8 sm:space-y-12 pb-8 sm:pb-12"
      aria-label="Contact Section"
    >
      {/* Editorial Section Frame */}
      <div className="border border-white/10 bg-surface p-6 sm:p-10 md:p-14 lg:p-16 space-y-10 sm:space-y-12 relative overflow-hidden">
        {/* Background Grid Pattern */}
        <div
          className="absolute inset-0 opacity-5 pointer-events-none"
          style={{
            backgroundImage:
              "linear-gradient(to right, rgba(255,255,255,0.08) 1px, transparent 1px), linear-gradient(to bottom, rgba(255,255,255,0.08) 1px, transparent 1px)",
            backgroundSize: "32px 32px",
          }}
        />

        {/* Top Telemetry */}
        <div className="contact-reveal flex flex-wrap items-center justify-between gap-3 border-b border-white/10 pb-6 relative z-10">
          <div className="flex items-center gap-2 sm:gap-3">
            <span className="font-mono text-xs text-white font-bold tracking-widest">
              [GET IN TOUCH]
            </span>
            <span className="font-mono text-[10px] sm:text-xs text-neutral-500 uppercase tracking-widest">
              COLLABORATION &amp; INQUIRY
            </span>
          </div>

          <div className="flex items-center gap-2 font-mono text-[11px] text-emerald-400 bg-emerald-500/10 border border-emerald-500/30 px-3 py-1">
            <span className="w-1.5 h-1.5 rounded-full bg-emerald-500 animate-pulse" />
            <span className="uppercase tracking-wider">OPEN TO CREATIVE WORK</span>
          </div>
        </div>

        {/* Main Striking Typography */}
        <div className="contact-reveal space-y-4 sm:space-y-6 max-w-5xl relative z-10">
          <h2 className="text-3xl xs:text-4xl sm:text-6xl md:text-7xl lg:text-8xl font-heading font-black tracking-tight text-white uppercase leading-[0.98]">
            HAVE A PROJECT IN MIND?
            <br />
            <span className="text-neutral-400">
              LET&apos;S CREATE SOMETHING MEANINGFUL.
            </span>
          </h2>

          <p className="text-base sm:text-lg md:text-xl text-neutral-300 font-light max-w-2xl leading-relaxed pt-2">
            I&apos;m always open to creative opportunities, collaborations and conversations about design. Feel free to reach out.
          </p>
        </div>

        {/* Primary Action & Channels Grid */}
        <div className="contact-reveal grid grid-cols-1 lg:grid-cols-12 gap-8 pt-8 border-t border-white/10 relative z-10 items-center">
          {/* Left: Primary CTA Button (5 cols) */}
          <div className="lg:col-span-5 space-y-4">
            <span className="font-mono text-[10px] text-neutral-500 uppercase tracking-widest block">
              DIRECT ACTION
            </span>
            <MagneticWrapper className="w-full sm:w-auto inline-block">
              <Button
                href="mailto:handralgagan@gmail.com"
                variant="primary"
                size="lg"
                showArrow
                className="w-full sm:w-auto text-base sm:text-lg py-4 px-8 font-heading font-bold uppercase tracking-wider"
              >
                LET&apos;S TALK
              </Button>
            </MagneticWrapper>
          </div>

          {/* Right: Direct Email & Verified Channels (7 cols) */}
          <div className="lg:col-span-7 space-y-5 lg:border-l lg:border-white/10 lg:pl-10">
            <div>
              <span className="font-mono text-[10px] text-neutral-500 uppercase tracking-widest block mb-1.5">
                PRIMARY EMAIL
              </span>
              <a
                href="mailto:handralgagan@gmail.com"
                className="text-xl sm:text-2xl md:text-3xl lg:text-4xl font-heading font-bold text-white hover:text-neutral-300 transition-colors break-all inline-block"
              >
                handralgagan@gmail.com
              </a>
            </div>

            {/* Social Channels with Verified Placeholder Indicators */}
            <div className="pt-2">
              <span className="font-mono text-[10px] text-neutral-500 uppercase tracking-widest block mb-2.5">
                EXTERNAL PROFILES
              </span>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 font-mono text-xs">
                {/* LinkedIn Placeholder */}
                <div className="p-3 border border-white/10 bg-surface-elevated flex items-center justify-between">
                  <span className="text-neutral-300">LinkedIn</span>
                  <span className="text-[10px] text-neutral-500 border border-white/10 bg-white/5 px-2 py-0.5 uppercase tracking-wider">
                    Profile URL Pending
                  </span>
                </div>

                {/* GitHub Placeholder */}
                <div className="p-3 border border-white/10 bg-surface-elevated flex items-center justify-between">
                  <span className="text-neutral-300">GitHub</span>
                  <span className="text-[10px] text-neutral-500 border border-white/10 bg-white/5 px-2 py-0.5 uppercase tracking-wider">
                    Profile URL Pending
                  </span>
                </div>
              </div>

              <p className="font-mono text-[10px] text-neutral-500 mt-2">
                * Social profile links will activate once permanent account URLs are configured.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
