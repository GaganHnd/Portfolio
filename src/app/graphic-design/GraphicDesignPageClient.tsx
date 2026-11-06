"use client";

import React from "react";
import Link from "next/link";
import { SmoothScrollProvider } from "@/components/animations/SmoothScrollProvider";
import { FlowingVisualElements } from "@/components/animations/FlowingVisualElements";
import { Navbar } from "@/components/navigation/Navbar";
import { Footer } from "@/components/navigation/Footer";
import { GraphicDesignSection } from "@/components/sections/GraphicDesignSection";
import { ArrowLeft, ArrowUpRight, Layout, Sparkles } from "lucide-react";

export function GraphicDesignPageClient() {
  return (
    <SmoothScrollProvider>
      <FlowingVisualElements />
      <Navbar />

      <main className="relative z-10 min-h-screen bg-transparent text-foreground pt-24 sm:pt-28 pb-16 sm:pb-20 px-4 sm:px-6 md:px-12 lg:px-20 max-w-7xl mx-auto space-y-16 sm:space-y-20 w-full">
        {/* Anchor point */}
        <div id="top" className="sr-only" aria-hidden="true" />

        {/* Top Back Navigation Bar */}
        <div className="flex flex-wrap items-center justify-between gap-4 border-b border-white/10 pb-5 font-mono text-xs">
          <Link
            href="/#work"
            className="inline-flex items-center gap-2 text-neutral-400 hover:text-[#B7FF00] transition-colors group py-1"
          >
            <ArrowLeft className="w-3.5 h-3.5 transition-transform duration-200 group-hover:-translate-x-1" />
            <span>BACK TO THE CREATIVE SPACE</span>
          </Link>

          <div className="flex items-center gap-2 text-neutral-500 text-[11px] uppercase tracking-widest">
            <span className="w-1.5 h-1.5 rounded-full bg-[#B7FF00] animate-pulse" />
            <span>DISCIPLINE SHOWCASE 01 / 03</span>
          </div>
        </div>

        {/* Existing Graphic Design Showcase with Pinned Horizontal Traverse & Lightbox */}
        <GraphicDesignSection />

        {/* Inter-Discipline Quick Switcher */}
        <div className="border border-white/10 bg-surface p-6 sm:p-8 space-y-6">
          <div className="flex flex-wrap items-center justify-between gap-3 border-b border-white/10 pb-4">
            <span className="font-mono text-xs text-neutral-400 uppercase tracking-widest">
              EXPLORE OTHER DISCIPLINES
            </span>
            <Link
              href="/"
              className="font-mono text-xs text-[#B7FF00] hover:underline uppercase tracking-wider"
            >
              ← RETURN TO HOMEPAGE
            </Link>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            <Link
              href="/ui-ux-design"
              className="group p-5 border border-white/10 bg-white/[0.02] hover:bg-white/[0.05] hover:border-[#B7FF00]/40 transition-all flex items-center justify-between"
            >
              <div className="flex items-center gap-3">
                <div className="p-2 border border-white/10 bg-white/5 text-neutral-400 group-hover:text-[#B7FF00] transition-colors">
                  <Layout className="w-4 h-4" />
                </div>
                <div>
                  <span className="font-mono text-[10px] text-neutral-500 uppercase tracking-widest block">
                    02 — INTERFACES &amp; APPS
                  </span>
                  <span className="font-heading font-bold text-white text-base uppercase group-hover:text-[#B7FF00] transition-colors">
                    UI/UX Design
                  </span>
                </div>
              </div>
              <ArrowUpRight className="w-4 h-4 text-neutral-500 group-hover:text-[#B7FF00] transition-colors" />
            </Link>

            <Link
              href="/digital-products"
              className="group p-5 border border-white/10 bg-white/[0.02] hover:bg-white/[0.05] hover:border-[#B7FF00]/40 transition-all flex items-center justify-between"
            >
              <div className="flex items-center gap-3">
                <div className="p-2 border border-white/10 bg-white/5 text-neutral-400 group-hover:text-[#B7FF00] transition-colors">
                  <Sparkles className="w-4 h-4" />
                </div>
                <div>
                  <span className="font-mono text-[10px] text-neutral-500 uppercase tracking-widest block">
                    03 — AI &amp; WEB PLATFORMS
                  </span>
                  <span className="font-heading font-bold text-white text-base uppercase group-hover:text-[#B7FF00] transition-colors">
                    Digital Products
                  </span>
                </div>
              </div>
              <ArrowUpRight className="w-4 h-4 text-neutral-500 group-hover:text-[#B7FF00] transition-colors" />
            </Link>
          </div>
        </div>

        {/* Consistent Editorial Footer */}
        <Footer />
      </main>
    </SmoothScrollProvider>
  );
}
