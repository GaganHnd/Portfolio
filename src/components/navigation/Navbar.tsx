"use client";

import React, { useState, useEffect } from "react";
import Link from "next/link";
import { personalInfo } from "@/data/social-links";
import { MagneticWrapper } from "@/components/ui/MagneticWrapper";
import { Menu, X } from "lucide-react";
import { cn } from "@/lib/utils";
import { useLenis } from "@/components/animations/SmoothScrollProvider";

interface NavItem {
  label: string;
  href: string;
}

const navItems: NavItem[] = [
  { label: "WORK", href: "#work" },
  { label: "ABOUT", href: "#about" },
  { label: "CONTACT", href: "#contact" },
];

export function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [activeSection, setActiveSection] = useState<string>("");
  const { lenis, scrollTo } = useLenis();

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 30) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }

      // Active section detection
      const sections = navItems.map((item) => item.href.substring(1));
      const currentPos = window.scrollY + 180;

      for (const section of sections) {
        const el = document.getElementById(section);
        if (el) {
          const top = el.offsetTop;
          const height = el.offsetHeight;
          if (currentPos >= top && currentPos < top + height) {
            setActiveSection(section);
            break;
          }
        }
      }
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    handleScroll();

    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Close mobile menu on Escape and manage scroll lock
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === "Escape") setMobileMenuOpen(false);
    };

    if (mobileMenuOpen) {
      document.body.style.overflow = "hidden";
      lenis?.stop();
      window.addEventListener("keydown", handleKeyDown);
    } else {
      document.body.style.overflow = "";
      lenis?.start();
    }

    return () => {
      document.body.style.overflow = "";
      lenis?.start();
      window.removeEventListener("keydown", handleKeyDown);
    };
  }, [mobileMenuOpen, lenis]);

  const handleNavClick = (e: React.MouseEvent<HTMLAnchorElement>, href: string) => {
    if (href.startsWith("#")) {
      const targetId = href.substring(1);
      const targetElement = document.getElementById(targetId);
      if (targetElement) {
        e.preventDefault();
        scrollTo(targetElement, { offset: -70, duration: 1.25 });
        setMobileMenuOpen(false);
      }
    }
  };

  return (
    <>
      <header
        className={cn(
          "fixed top-0 left-0 w-full z-50 transition-all duration-300 px-4 sm:px-6 md:px-12 lg:px-20",
          scrolled
            ? "py-3.5 sm:py-4 bg-[#050505]/90 backdrop-blur-md border-b border-white/10 shadow-2xl"
            : "py-5 sm:py-7 bg-transparent border-b border-transparent"
        )}
      >
        <div className="max-w-7xl mx-auto flex items-center justify-between">
          {/* Brand Wordmark: GAGAN. */}
          <MagneticWrapper strength={0.2}>
            <Link
              href="/"
              className="text-base sm:text-lg md:text-xl font-heading font-extrabold tracking-tight text-white uppercase focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-white group flex items-center gap-1.5 sm:gap-2 flex-shrink-0"
              aria-label="Gagan Handral Homepage"
            >
              <span>{personalInfo.wordmark}</span>
              <span className="w-1.5 h-1.5 rounded-full bg-emerald-500 inline-block animate-pulse" />
            </Link>
          </MagneticWrapper>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center gap-8" aria-label="Main Navigation">
            {navItems.map((item) => {
              const isActive = activeSection === item.href.substring(1);
              return (
                <MagneticWrapper key={item.label} strength={0.15}>
                  <a
                    href={item.href}
                    onClick={(e) => handleNavClick(e, item.href)}
                    className={cn(
                      "font-mono text-xs uppercase tracking-widest transition-colors py-1 relative",
                      isActive
                        ? "text-white font-semibold"
                        : "text-neutral-400 hover:text-white"
                    )}
                  >
                    <span>{item.label}</span>
                    {isActive && (
                      <span className="absolute -bottom-1 left-0 w-full h-[1px] bg-white transition-all" />
                    )}
                  </a>
                </MagneticWrapper>
              );
            })}

            {/* Availability Badge */}
            <div className="pl-4 border-l border-white/10">
              <span className="inline-flex items-center gap-2 text-[10px] font-mono uppercase tracking-wider text-neutral-400 bg-white/5 border border-white/10 px-3 py-1.5">
                <span className="relative flex h-1.5 w-1.5">
                  <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75" />
                  <span className="relative inline-flex rounded-full h-1.5 w-1.5 bg-emerald-500" />
                </span>
                <span>AVAILABLE</span>
              </span>
            </div>
          </nav>

          {/* Mobile Hamburger Button */}
          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="md:hidden p-2 text-neutral-300 hover:text-white border border-white/10 hover:border-white/30 focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-white flex-shrink-0"
            aria-label={mobileMenuOpen ? "Close navigation menu" : "Open navigation menu"}
            aria-expanded={mobileMenuOpen}
          >
            {mobileMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
          </button>
        </div>
      </header>

      {/* Mobile Menu Overlay */}
      {mobileMenuOpen && (
        <div
          role="dialog"
          aria-modal="true"
          className="fixed inset-0 z-40 bg-[#050505] flex flex-col justify-between px-6 sm:px-8 py-24 sm:py-28 md:hidden overflow-y-auto"
        >
          <div className="space-y-4">
            <span className="font-mono text-xs text-neutral-500 uppercase tracking-widest block mb-4 sm:mb-6">
              Navigation Menu
            </span>
            {navItems.map((item, index) => (
              <div key={item.label} className="border-b border-white/10 pb-4">
                <a
                  href={item.href}
                  onClick={(e) => handleNavClick(e, item.href)}
                  className="flex items-baseline justify-between text-2xl sm:text-3xl font-heading font-bold text-white uppercase tracking-tight hover:text-neutral-300 transition-colors"
                >
                  <span>{item.label}</span>
                  <span className="font-mono text-xs text-neutral-500">0{index + 1}</span>
                </a>
              </div>
            ))}
          </div>

          <div className="space-y-3 pt-6 sm:pt-8 border-t border-white/10 mt-8">
            <p className="font-mono text-xs text-neutral-400 uppercase tracking-widest">
              Gagan Handral
            </p>
            <p className="text-xs text-neutral-500 leading-relaxed">
              Graphic Designer · UI/UX Designer
            </p>
            <div className="inline-flex items-center gap-2 text-xs font-mono text-emerald-400 pt-1">
              <span className="w-2 h-2 rounded-full bg-emerald-500 inline-block" />
              Available for select projects
            </div>
          </div>
        </div>
      )}
    </>
  );
}
