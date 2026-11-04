"use client";

import React, { useEffect, useCallback } from "react";
import Image from "next/image";
import { X } from "lucide-react";

interface LightboxModalProps {
  isOpen: boolean;
  onClose: () => void;
  title: string;
  category: string;
  year: string;
  image: string;
  description?: string;
}

export function LightboxModal({
  isOpen,
  onClose,
  title,
  category,
  year,
  image,
  description,
}: LightboxModalProps) {
  const handleKeyDown = useCallback(
    (e: KeyboardEvent) => {
      if (e.key === "Escape") {
        onClose();
      }
    },
    [onClose]
  );

  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = "hidden";
      window.addEventListener("keydown", handleKeyDown);
    } else {
      document.body.style.overflow = "";
    }

    return () => {
      document.body.style.overflow = "";
      window.removeEventListener("keydown", handleKeyDown);
    };
  }, [isOpen, handleKeyDown]);

  if (!isOpen) return null;

  return (
    <div
      role="dialog"
      aria-modal="true"
      aria-labelledby="lightbox-title"
      className="fixed inset-0 z-[100] flex items-center justify-center bg-black/95 backdrop-blur-md p-4 md:p-8"
      onClick={onClose}
    >
      <div
        className="relative max-w-5xl w-full max-h-[90vh] flex flex-col bg-surface border border-white/15 overflow-hidden"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Header bar */}
        <div className="flex items-center justify-between border-b border-white/10 px-6 py-4 bg-surface-elevated">
          <div className="flex items-center gap-3">
            <span className="font-mono text-xs text-neutral-400 uppercase tracking-widest">
              {category} • {year}
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

        {/* Image viewport */}
        <div className="relative w-full h-[60vh] bg-black flex items-center justify-center p-4">
          <div className="relative w-full h-full">
            <Image
              src={image}
              alt={title}
              fill
              className="object-contain"
              sizes="(max-width: 1200px) 100vw, 1200px"
              priority
            />
          </div>
        </div>

        {/* Footer info */}
        <div className="p-6 bg-surface border-t border-white/10">
          <h3
            id="lightbox-title"
            className="text-xl md:text-2xl font-heading font-bold text-white uppercase tracking-tight"
          >
            {title}
          </h3>
          {description && (
            <p className="mt-2 text-sm md:text-base text-neutral-400 leading-relaxed max-w-3xl">
              {description}
            </p>
          )}
        </div>
      </div>
    </div>
  );
}
