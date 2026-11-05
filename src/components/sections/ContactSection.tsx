"use client";

import React, { useEffect, useRef } from "react";
import { personalInfo } from "@/data/social-links";
import { Button } from "@/components/ui/Button";
import { MagneticWrapper } from "@/components/ui/MagneticWrapper";
import { registerGSAP, EASE } from "@/lib/animations";
import { ArrowUpRight } from "lucide-react";
import { LinkedInIcon, GitHubIcon } from "@/components/ui/Icons";

export function ContactSection() {
  const containerRef = useRef<HTMLElement>(null);

  useEffect(() => {
    const prefersReducedMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    if (prefersReducedMotion || !containerRef.current) return;

    const { gsap } = registerGSAP();

    const ctx = gsap.context(() => {
      const tl = gsap.timeline({
        scrollTrigger: {
          trigger: containerRef.current,
          start: "top 80%",
          toggleActions: "play none none none",
        },
      });

      // 1. Top telemetry
      tl.fromTo(
        ".contact-telemetry",
        { opacity: 0, y: -12 },
        { opacity: 1, y: 0, duration: 0.7, ease: "power2.out" }
      );

      // 2. Dramatic line-by-line masked heading reveal
      tl.fromTo(
        ".contact-headline-line",
        { yPercent: 125, opacity: 0 },
        {
          yPercent: 0,
          opacity: 1,
          duration: 1.15,
          stagger: 0.15,
          ease: "power4.out",
        },
        "-=0.4"
      );

      // 3. Supporting copy
      tl.fromTo(
        ".contact-subtext",
        { opacity: 0, y: 20 },
        { opacity: 1, y: 0, duration: 0.8, ease: EASE.cinematic },
        "-=0.6"
      );

      // 4. CTA button and email link
      tl.fromTo(
        [".contact-cta-btn", ".contact-email-block"],
        { opacity: 0, y: 24 },
        { opacity: 1, y: 0, duration: 0.8, stagger: 0.1, ease: EASE.cinematic },
        "-=0.5"
      );

      // 5. External profile links
      tl.fromTo(
        ".contact-profile-card",
        { opacity: 0, y: 18 },
        { opacity: 1, y: 0, duration: 0.65, stagger: 0.1, ease: "power2.out" },
        "-=0.4"
      );

      // 6. Ambient convergence scrub on the editorial frame
      gsap.fromTo(
        ".contact-editorial-frame",
        { scale: 0.98, borderColor: "rgba(255,255,255,0.1)" },
        {
          scale: 1,
          borderColor: "rgba(183,255,0,0.35)",
          ease: "none",
          scrollTrigger: {
            trigger: containerRef.current,
            start: "top 85%",
            end: "bottom 95%",
            scrub: 1.2,
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
      <div className="contact-editorial-frame border border-white/10 bg-surface p-6 sm:p-10 md:p-14 lg:p-16 space-y-10 sm:space-y-12 relative overflow-hidden shadow-2xl transition-all duration-500">
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
        <div className="contact-telemetry flex flex-wrap items-center justify-between gap-3 border-b border-white/10 pb-6 relative z-10">
          <div className="flex items-center gap-2 sm:gap-3">
            <span className="font-mono text-xs text-white font-bold tracking-widest">
              [GET IN TOUCH]
            </span>
            <span className="font-mono text-[10px] sm:text-xs text-neutral-500 uppercase tracking-widest">
              COLLABORATION &amp; INQUIRY
            </span>
          </div>

          <div className="flex items-center gap-2 font-mono text-[11px] text-[#B7FF00] bg-[#B7FF00]/10 border border-[#B7FF00]/30 px-3 py-1">
            <span className="w-1.5 h-1.5 rounded-full bg-[#B7FF00] animate-pulse" />
            <span className="uppercase tracking-wider">OPEN TO SELECT PROJECTS</span>
          </div>
        </div>

        {/* Main Striking Typography (Masked Line Reveals) */}
        <div className="space-y-4 sm:space-y-6 max-w-5xl relative z-10">
          <h2 className="text-3xl xs:text-4xl sm:text-6xl md:text-7xl lg:text-8xl font-heading font-black tracking-tight text-white uppercase leading-[0.98]">
            <span className="block overflow-hidden py-1">
              <span className="contact-headline-line block will-change-transform">
                HAVE A PROJECT IN MIND?
              </span>
            </span>
            <span className="block overflow-hidden py-1">
              <span className="contact-headline-line block will-change-transform text-neutral-400">
                LET&apos;S CREATE SOMETHING MEANINGFUL.
              </span>
            </span>
          </h2>

          <p className="contact-subtext text-base sm:text-lg md:text-xl text-neutral-300 font-light max-w-2xl leading-relaxed pt-2">
            I&apos;m always open to creative opportunities, collaborations and conversations about design. Feel free to reach out.
          </p>
        </div>

        {/* Primary Action & Channels Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 pt-8 border-t border-white/10 relative z-10 items-center">
          {/* Left: Primary CTA Button (5 cols) */}
          <div className="contact-cta-btn lg:col-span-5 space-y-4">
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
            <div className="contact-email-block">
              <span className="font-mono text-[10px] text-neutral-500 uppercase tracking-widest block mb-1.5">
                PRIMARY EMAIL
              </span>
              <a
                href="mailto:handralgagan@gmail.com"
                className="text-xl sm:text-2xl md:text-3xl lg:text-4xl font-heading font-bold text-white hover:text-[#B7FF00] transition-colors break-all inline-block"
              >
                handralgagan@gmail.com
              </a>
            </div>

            {/* External Professional Profiles */}
            <div className="pt-2">
              <span className="font-mono text-[10px] text-neutral-500 uppercase tracking-widest block mb-2.5">
                EXTERNAL PROFILES
              </span>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 font-mono text-xs">
                {/* LinkedIn Profile */}
                <a
                  href={personalInfo.linkedin}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="contact-profile-card p-3 border border-white/10 bg-surface-elevated hover:border-[#B7FF00]/40 hover:bg-white/5 transition-all duration-300 flex items-center justify-between group"
                  aria-label="LinkedIn profile of Gagan Handral (opens in new tab)"
                >
                  <div className="flex items-center gap-2.5 min-w-0">
                    <LinkedInIcon className="w-4 h-4 text-neutral-400 group-hover:text-[#B7FF00] transition-colors flex-shrink-0" />
                    <span className="text-neutral-200 group-hover:text-white transition-colors font-medium">LinkedIn</span>
                    <span className="text-[11px] text-neutral-500 truncate">in/gagan-handral</span>
                  </div>
                  <ArrowUpRight className="w-3.5 h-3.5 text-neutral-500 group-hover:text-[#B7FF00] group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-all flex-shrink-0 ml-2" />
                </a>

                {/* GitHub Profile */}
                <a
                  href={personalInfo.github}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="contact-profile-card p-3 border border-white/10 bg-surface-elevated hover:border-[#B7FF00]/40 hover:bg-white/5 transition-all duration-300 flex items-center justify-between group"
                  aria-label="GitHub profile of Gagan Handral (opens in new tab)"
                >
                  <div className="flex items-center gap-2.5 min-w-0">
                    <GitHubIcon className="w-4 h-4 text-neutral-400 group-hover:text-[#B7FF00] transition-colors flex-shrink-0" />
                    <span className="text-neutral-200 group-hover:text-white transition-colors font-medium">GitHub</span>
                    <span className="text-[11px] text-neutral-500 truncate">GaganHnd</span>
                  </div>
                  <ArrowUpRight className="w-3.5 h-3.5 text-neutral-500 group-hover:text-[#B7FF00] group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-all flex-shrink-0 ml-2" />
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
