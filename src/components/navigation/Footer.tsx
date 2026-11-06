"use client";

import React, { useEffect, useRef } from "react";
import { personalInfo } from "@/data/social-links";
import { ArrowUp, ArrowUpRight } from "lucide-react";
import { LinkedInIcon, GitHubIcon } from "@/components/ui/Icons";
import { registerGSAP, EASE } from "@/lib/animations";
import { useLenis } from "@/components/animations/SmoothScrollProvider";

export function Footer() {
  const containerRef = useRef<HTMLElement>(null);
  const currentYear = new Date().getFullYear();
  const { scrollTo } = useLenis();

  useEffect(() => {
    const prefersReducedMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    if (prefersReducedMotion || !containerRef.current) return;

    const { gsap } = registerGSAP();

    const ctx = gsap.context(() => {
      const tl = gsap.timeline({
        scrollTrigger: {
          trigger: containerRef.current,
          start: "top 92%",
          toggleActions: "play none none none",
        },
      });

      tl.fromTo(
        ".footer-border-line",
        { scaleX: 0, transformOrigin: "left" },
        { scaleX: 1, duration: 0.9, ease: "expo.out" }
      );

      tl.fromTo(
        ".footer-reveal",
        { opacity: 0, y: 16 },
        { opacity: 1, y: 0, duration: 0.7, stagger: 0.08, ease: EASE.cinematic },
        "-=0.5"
      );
    }, containerRef);

    return () => ctx.revert();
  }, []);

  const handleScrollToTop = (e: React.MouseEvent<HTMLAnchorElement | HTMLButtonElement>) => {
    e.preventDefault();
    scrollTo(0, { duration: 1.35 });
  };

  const footerNavLinks = [
    { label: "Home", href: "#top" },
    { label: "Graphic Design", href: "#graphic-design" },
    { label: "UI/UX Design", href: "#ui-ux-design" },
    { label: "Digital Products", href: "#digital-products" },
    { label: "About", href: "#about" },
    { label: "Experience", href: "#experience" },
    { label: "Skills", href: "#skills" },
    { label: "Contact", href: "#contact" },
  ];

  return (
    <footer
      ref={containerRef}
      className="pt-12 sm:pt-16 pb-12 sm:pb-16 mt-16 sm:mt-24 w-full text-foreground space-y-10 sm:space-y-12 relative"
      aria-label="Site Footer"
    >
      {/* Animated Top Border */}
      <div className="footer-border-line absolute top-0 left-0 right-0 h-[1px] bg-white/10" />

      {/* Top Footer Grid */}
      <div className="grid grid-cols-1 md:grid-cols-12 gap-8 items-start justify-between">
        {/* Brand & Designation (Left 6 cols) */}
        <div className="footer-reveal md:col-span-6 space-y-2">
          <h3 className="text-2xl sm:text-3xl md:text-4xl font-heading font-black text-white uppercase tracking-tight">
            GAGAN HANDRAL
          </h3>
          <p className="font-mono text-xs sm:text-sm text-neutral-400 uppercase tracking-widest">
            GRAPHIC DESIGNER · UI/UX DESIGNER
          </p>
          <p className="text-xs text-neutral-500 max-w-md pt-2 font-light">
            Crafting purposeful visual identities, intuitive interfaces, and digital experiences through creativity and technical perspective.
          </p>
        </div>

        {/* Navigation Links & Back to Top (Right 6 cols) */}
        <div className="footer-reveal md:col-span-6 flex flex-col md:items-end justify-between space-y-6">
          {/* Quick Navigation Menu */}
          <nav aria-label="Footer Navigation">
            <ul className="flex flex-wrap items-center gap-x-6 gap-y-3 font-mono text-xs md:justify-end text-neutral-400">
              {footerNavLinks.map((link) => (
                <li key={link.label}>
                  <a
                    href={link.href}
                    className="hover:text-white transition-colors uppercase tracking-wider relative group"
                  >
                    {link.label}
                    <span className="block max-w-0 group-hover:max-w-full transition-all duration-300 h-0.5 bg-[#B7FF00]" />
                  </a>
                </li>
              ))}
            </ul>
          </nav>

          {/* Social Profiles & Back to Top Row */}
          <div className="flex flex-wrap items-center gap-3">
            {/* LinkedIn Icon Link */}
            <a
              href={personalInfo.linkedin}
              target="_blank"
              rel="noopener noreferrer"
              className="group inline-flex items-center gap-2 font-mono text-xs text-neutral-400 hover:text-white transition-colors border border-white/10 hover:border-[#B7FF00]/40 px-3 py-2 bg-surface-elevated hover:bg-white/5"
              aria-label="Visit Gagan Handral's LinkedIn Profile (opens in new tab)"
            >
              <LinkedInIcon className="w-3.5 h-3.5 text-neutral-400 group-hover:text-[#B7FF00] transition-colors" />
              <span>LINKEDIN</span>
              <ArrowUpRight className="w-3 h-3 text-neutral-500 group-hover:text-[#B7FF00] group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
            </a>

            {/* GitHub Icon Link */}
            <a
              href={personalInfo.github}
              target="_blank"
              rel="noopener noreferrer"
              className="group inline-flex items-center gap-2 font-mono text-xs text-neutral-400 hover:text-white transition-colors border border-white/10 hover:border-[#B7FF00]/40 px-3 py-2 bg-surface-elevated hover:bg-white/5"
              aria-label="Visit Gagan Handral's GitHub Profile (opens in new tab)"
            >
              <GitHubIcon className="w-3.5 h-3.5 text-neutral-400 group-hover:text-[#B7FF00] transition-colors" />
              <span>GITHUB</span>
              <ArrowUpRight className="w-3 h-3 text-neutral-500 group-hover:text-[#B7FF00] group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
            </a>

            {/* Back to Top Button */}
            <button
              onClick={handleScrollToTop}
              className="group inline-flex items-center gap-2 font-mono text-xs text-neutral-400 hover:text-white transition-colors border border-white/10 hover:border-white/30 px-3.5 py-2 bg-surface-elevated hover:bg-white/5"
              aria-label="Scroll back to top"
            >
              <span>BACK TO TOP</span>
              <ArrowUp className="w-3.5 h-3.5 group-hover:-translate-y-1 transition-transform group-hover:text-[#B7FF00]" />
            </button>
          </div>
        </div>
      </div>

      {/* Bottom Bar: Copyright & Software Credentials */}
      <div className="footer-reveal border-t border-white/5 pt-6 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4 font-mono text-[11px] text-neutral-500">
        <div className="flex items-center gap-2">
          <span className="w-1.5 h-1.5 rounded-full bg-[#B7FF00] flex-shrink-0" />
          <span>
            © {currentYear} {personalInfo.name.toUpperCase()}. ALL RIGHTS RESERVED.
          </span>
        </div>

        <div className="flex flex-wrap items-center gap-4 text-neutral-500">
          <a
            href={personalInfo.linkedin}
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-white transition-colors inline-flex items-center gap-1.5"
            aria-label="LinkedIn profile"
          >
            <LinkedInIcon className="w-3 h-3 text-neutral-400" />
            <span>LINKEDIN</span>
          </a>
          <span className="text-neutral-700">•</span>
          <a
            href={personalInfo.github}
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-white transition-colors inline-flex items-center gap-1.5"
            aria-label="GitHub profile"
          >
            <GitHubIcon className="w-3 h-3 text-neutral-400" />
            <span>GITHUB</span>
          </a>
          <span className="text-neutral-700">•</span>
          <span>FIGMA · CANVA</span>
          <span className="text-neutral-700">•</span>
          <span>DESIGNING WITH PURPOSE</span>
        </div>
      </div>
    </footer>
  );
}
