"use client";

import React, { useEffect, useRef } from "react";
import { personalInfo } from "@/data/social-links";
import { skillGroups } from "@/data/skills";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { Badge } from "@/components/ui/Badge";
import { Divider } from "@/components/ui/Divider";
import { registerGSAP, EASE } from "@/lib/animations";
import { CheckCircle2, Layers, Cpu, Compass } from "lucide-react";

export function AboutSection() {
  const containerRef = useRef<HTMLElement>(null);

  useEffect(() => {
    const prefersReducedMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    if (prefersReducedMotion || !containerRef.current) return;

    const { gsap, ScrollTrigger } = registerGSAP();

    const ctx = gsap.context(() => {
      gsap.from(".about-reveal", {
        opacity: 0,
        y: 25,
        duration: 0.9,
        stagger: 0.12,
        ease: EASE.cinematic,
        scrollTrigger: {
          trigger: containerRef.current,
          start: "top 85%",
          toggleActions: "play none none none",
        },
      });
    }, containerRef);

    return () => ctx.revert();
  }, []);

  return (
    <section
      ref={containerRef}
      id="about"
      className="space-y-8 sm:space-y-12"
      aria-label="About Gagan Handral"
    >
      <SectionHeading
        index="02"
        category="PROFILE &amp; ETHOS"
        title="ABOUT ME."
        subtitle="A creative mind with a technical perspective shaping purposeful visual identities and intuitive interfaces."
      />

      <div className="border border-white/10 bg-surface p-6 sm:p-8 md:p-12 lg:p-16 space-y-12 sm:space-y-16">
        {/* Editorial Heading */}
        <div className="about-reveal space-y-4 max-w-4xl border-b border-white/10 pb-8 sm:pb-12">
          <span className="font-mono text-[10px] sm:text-xs text-neutral-500 uppercase tracking-widest block">
            THE PHILOSOPHY
          </span>
          <h3 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-heading font-black text-white uppercase tracking-tight leading-[1.05]">
            {personalInfo.aboutHeading}
          </h3>
        </div>

        {/* Narrative & Snapshot Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-14">
          {/* Main Editorial Story (Left 7 Cols) */}
          <div className="lg:col-span-7 space-y-6 sm:space-y-8 text-neutral-300 font-light text-base sm:text-lg leading-relaxed">
            <p className="about-reveal">
              I&apos;m <span className="text-white font-medium">Gagan Handral</span>, a designer with a background in <span className="text-white font-medium">Computer Science and Business Systems</span> and a growing passion for creating meaningful visual and digital experiences.
            </p>

            <p className="about-reveal">
              My interest in design comes from the way visuals can communicate ideas, capture attention and shape how people interact with digital products. From creating promotional posters and visual identities to designing mobile application interfaces and web dashboards, I enjoy exploring different aspects of the creative process.
            </p>

            {/* Pull Quote Highlight */}
            <div className="about-reveal border-l-2 border-white pl-6 sm:pl-8 py-3 my-6 sm:my-8 bg-surface-elevated/40">
              <p className="font-serif italic text-xl sm:text-2xl text-white leading-normal">
                &ldquo;I believe good design is not just about making things look appealing. It&apos;s about finding the right balance between aesthetics, clarity and functionality.&rdquo;
              </p>
            </div>

            <p className="about-reveal">
              With <span className="text-white font-medium">Figma and Canva</span> as my primary creative tools, I&apos;m continuously exploring new ideas, refining my skills and developing my perspective as a Graphic Designer and UI/UX Designer.
            </p>

            {/* Closing Ethos Box */}
            <div className="about-reveal border border-white/15 p-6 bg-surface-elevated mt-8">
              <div className="flex items-center gap-2 font-mono text-[10px] text-emerald-400 uppercase tracking-widest mb-2">
                <span className="w-1.5 h-1.5 rounded-full bg-emerald-500" />
                <span>CORE CREATIVE PRINCIPLE</span>
              </div>
              <p className="font-heading font-bold text-white text-lg sm:text-xl uppercase tracking-tight">
                &ldquo;For me, every design begins with an idea and becomes meaningful through purpose.&rdquo;
              </p>
            </div>
          </div>

          {/* Technical Snapshot & Verified Attributes (Right 5 Cols) */}
          <div className="lg:col-span-5 space-y-6 lg:border-l lg:border-white/10 lg:pl-10">
            <div className="about-reveal space-y-6">
              <span className="font-mono text-xs uppercase tracking-widest text-neutral-400 block border-b border-white/10 pb-3">
                PROFILE AT A GLANCE
              </span>

              <div className="space-y-5">
                <div className="space-y-1">
                  <span className="font-mono text-[10px] text-neutral-500 uppercase tracking-wider block">
                    NAME &amp; IDENTITY
                  </span>
                  <p className="text-white font-heading font-semibold text-base sm:text-lg uppercase">
                    Gagan Handral
                  </p>
                  <p className="text-xs text-neutral-400 font-mono">
                    Graphic Designer · UI/UX Designer
                  </p>
                </div>

                <div className="space-y-1">
                  <span className="font-mono text-[10px] text-neutral-500 uppercase tracking-wider block">
                    ACADEMIC BACKGROUND
                  </span>
                  <p className="text-white font-heading font-semibold text-sm sm:text-base">
                    Computer Science &amp; Business Systems
                  </p>
                  <p className="text-xs text-neutral-400 leading-relaxed">
                    Combines structured computational logic with commercial business understanding.
                  </p>
                </div>

                <div className="space-y-1">
                  <span className="font-mono text-[10px] text-neutral-500 uppercase tracking-wider block">
                    CONFIRMED DESIGN TOOLS
                  </span>
                  <div className="flex items-center gap-2 pt-1">
                    <span className="font-mono text-xs text-white bg-white/10 border border-white/20 px-3 py-1 font-semibold">
                      Figma
                    </span>
                    <span className="font-mono text-xs text-white bg-white/10 border border-white/20 px-3 py-1 font-semibold">
                      Canva
                    </span>
                  </div>
                </div>

                <div className="space-y-1">
                  <span className="font-mono text-[10px] text-neutral-500 uppercase tracking-wider block">
                    CREATIVE APPLICATION AREAS
                  </span>
                  <ul className="space-y-1.5 pt-1 text-xs text-neutral-300 font-mono">
                    <li className="flex items-center gap-2">
                      <CheckCircle2 className="w-3.5 h-3.5 text-emerald-400 flex-shrink-0" />
                      <span>Event Posters &amp; Promos</span>
                    </li>
                    <li className="flex items-center gap-2">
                      <CheckCircle2 className="w-3.5 h-3.5 text-emerald-400 flex-shrink-0" />
                      <span>Visual Identities &amp; Branding</span>
                    </li>
                    <li className="flex items-center gap-2">
                      <CheckCircle2 className="w-3.5 h-3.5 text-emerald-400 flex-shrink-0" />
                      <span>Mobile App Interfaces</span>
                    </li>
                    <li className="flex items-center gap-2">
                      <CheckCircle2 className="w-3.5 h-3.5 text-emerald-400 flex-shrink-0" />
                      <span>Web Dashboards &amp; Flows</span>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>

        <Divider label="VERIFIED SKILLS &amp; PERSPECTIVE" withCross />

        {/* Structured Skills Columns */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 sm:gap-8 pt-2">
          {skillGroups.map((group, idx) => (
            <div
              key={group.category}
              className="about-reveal p-5 sm:p-6 border border-white/10 bg-surface-elevated space-y-4"
            >
              <div className="flex items-center justify-between border-b border-white/10 pb-3">
                <span className="font-mono text-[10px] text-neutral-500 uppercase">
                  0{idx + 1} / CATEGORY
                </span>
                {idx === 0 ? (
                  <Compass className="w-4 h-4 text-emerald-400" />
                ) : idx === 1 ? (
                  <Layers className="w-4 h-4 text-white" />
                ) : (
                  <Cpu className="w-4 h-4 text-neutral-400" />
                )}
              </div>
              <h4 className="font-heading font-bold text-base sm:text-lg text-white uppercase tracking-tight">
                {group.category}
              </h4>
              <p className="text-xs text-neutral-400 leading-relaxed">{group.description}</p>
              <ul className="space-y-2 pt-2 border-t border-white/5">
                {group.skills.map((skill) => (
                  <li
                    key={skill}
                    className="font-mono text-xs text-neutral-300 flex items-center gap-2 break-words"
                  >
                    <span className="w-1.5 h-1.5 bg-neutral-600 rounded-full flex-shrink-0" />
                    <span>{skill}</span>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
