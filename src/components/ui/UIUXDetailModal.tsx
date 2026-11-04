"use client";

import React, { useEffect, useCallback } from "react";
import Image from "next/image";
import { UIUXProject } from "@/data/ui-ux";
import { X, Layers, Layout, ExternalLink, CheckCircle2, Eye } from "lucide-react";

interface UIUXDetailModalProps {
  project: UIUXProject | null;
  onClose: () => void;
}

export function UIUXDetailModal({ project, onClose }: UIUXDetailModalProps) {
  const handleKeyDown = useCallback(
    (e: KeyboardEvent) => {
      if (e.key === "Escape") onClose();
    },
    [onClose]
  );

  useEffect(() => {
    if (project) {
      document.body.style.overflow = "hidden";
      window.addEventListener("keydown", handleKeyDown);
    } else {
      document.body.style.overflow = "";
    }

    return () => {
      document.body.style.overflow = "";
      window.removeEventListener("keydown", handleKeyDown);
    };
  }, [project, handleKeyDown]);

  if (!project) return null;

  return (
    <div
      role="dialog"
      aria-modal="true"
      aria-labelledby="uiux-modal-title"
      className="fixed inset-0 z-[100] flex items-center justify-center bg-black/95 backdrop-blur-md p-3 sm:p-6 md:p-8"
      onClick={onClose}
    >
      <div
        className="relative max-w-6xl w-full max-h-[92vh] flex flex-col bg-surface border border-white/15 overflow-hidden shadow-2xl"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Header bar */}
        <div className="flex items-center justify-between border-b border-white/10 px-5 sm:px-8 py-4 bg-surface-elevated flex-shrink-0">
          <div className="flex flex-wrap items-center gap-2 sm:gap-3">
            <span className="font-mono text-xs text-neutral-400 uppercase tracking-widest">
              {project.number} / {project.category}
            </span>
            <span className="font-mono text-[10px] text-emerald-400 bg-emerald-500/10 border border-emerald-500/30 px-2.5 py-0.5 uppercase tracking-wider">
              TOOL: {project.tool}
            </span>
            <span className="font-mono text-[10px] text-neutral-400 bg-white/5 border border-white/10 px-2 py-0.5 uppercase tracking-wider">
              {project.projectType}
            </span>
          </div>

          <button
            onClick={onClose}
            className="p-1.5 text-neutral-400 hover:text-white transition-colors border border-white/10 hover:border-white/30 focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-white"
            aria-label="Close modal"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Scrollable Content Container */}
        <div className="overflow-y-auto flex-1 p-5 sm:p-8 md:p-10 space-y-8">
          {/* Main Visual Display (Figma Frame Canvas) */}
          <div className="space-y-3">
            <div className="flex items-center justify-between font-mono text-[11px] text-neutral-500 border-b border-white/5 pb-2">
              <span className="flex items-center gap-1.5 uppercase tracking-wider">
                <Eye className="w-3.5 h-3.5 text-neutral-400" />
                Exported Figma Interface Artboard
              </span>
              <span>100% UNMODIFIED DESIGN ASSETS</span>
            </div>

            <div className="relative w-full bg-[#030303] border border-white/10 overflow-hidden flex items-center justify-center p-3 sm:p-6 md:p-8">
              <div className="relative w-full aspect-[16/10] sm:max-h-[620px] flex items-center justify-center">
                <Image
                  src={project.image}
                  alt={`${project.title} screens preview`}
                  fill
                  className="object-contain"
                  sizes="(max-width: 1400px) 100vw, 1400px"
                  priority
                />
              </div>
            </div>
          </div>

          {/* Project Details Grid */}
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 sm:gap-8 pt-4 border-t border-white/10">
            {/* Left: Overview & Scope */}
            <div className="lg:col-span-6 space-y-4">
              <div>
                <span className="font-mono text-[10px] text-neutral-500 uppercase tracking-widest block mb-1">
                  PROJECT NAME
                </span>
                <h3
                  id="uiux-modal-title"
                  className="text-2xl sm:text-3xl md:text-4xl font-heading font-black text-white uppercase tracking-tight"
                >
                  {project.title}
                </h3>
              </div>

              <div>
                <span className="font-mono text-[10px] text-neutral-500 uppercase tracking-widest block mb-2">
                  PROJECT OVERVIEW
                </span>
                <p className="text-sm sm:text-base text-neutral-300 font-light leading-relaxed">
                  {project.description}
                </p>
              </div>

              <div className="border border-white/10 bg-white/5 p-4 space-y-2">
                <span className="font-mono text-[10px] text-neutral-400 uppercase tracking-wider block">
                  ASSIGNMENT CONTEXT
                </span>
                <p className="text-xs text-neutral-400 leading-relaxed font-mono">
                  Personal &amp; academic concept assignment created in Figma to practice wireframing, component structuring, user journeys, and visual UI design.
                </p>
              </div>
            </div>

            {/* Right: Screen Architecture */}
            <div className="lg:col-span-6 lg:border-l lg:border-white/10 lg:pl-8 space-y-4">
              <div className="flex items-center gap-2 font-mono text-xs text-neutral-400 uppercase tracking-wider border-b border-white/10 pb-2">
                <Layers className="w-4 h-4 text-emerald-400" />
                <span>Documented Screens &amp; Interface Views</span>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-2.5">
                {project.screens.map((screen, sIdx) => (
                  <div
                    key={screen}
                    className="flex items-center gap-2 text-xs font-mono text-neutral-300 bg-surface-elevated border border-white/10 p-2.5"
                  >
                    <span className="text-[10px] text-neutral-500">
                      0{sIdx + 1}
                    </span>
                    <span className="truncate">{screen}</span>
                  </div>
                ))}
              </div>

              <div className="pt-2">
                <span className="font-mono text-[10px] text-neutral-500 uppercase tracking-widest block mb-2">
                  KEY INTERACTION HIGHLIGHTS
                </span>
                <ul className="space-y-1.5 text-xs text-neutral-300 font-mono">
                  {project.keyHighlights.map((highlight) => (
                    <li key={highlight} className="flex items-center gap-2">
                      <CheckCircle2 className="w-3.5 h-3.5 text-emerald-400 flex-shrink-0" />
                      <span>{highlight}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>
        </div>

        {/* Modal Footer */}
        <div className="border-t border-white/10 px-6 py-4 bg-surface-elevated flex items-center justify-between font-mono text-[11px] text-neutral-500 flex-shrink-0">
          <span>FIGMA PROTOTYPE &amp; INTERFACE CONCEPT</span>
          <button
            onClick={onClose}
            className="hover:text-white transition-colors uppercase tracking-wider"
          >
            Close [Esc] ✕
          </button>
        </div>
      </div>
    </div>
  );
}
