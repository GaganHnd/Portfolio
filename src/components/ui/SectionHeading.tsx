import React from "react";
import { cn } from "@/lib/utils";

export interface SectionHeadingProps {
  index?: string;
  category?: string;
  title: string;
  subtitle?: string;
  className?: string;
  action?: React.ReactNode;
}

export function SectionHeading({
  index,
  category,
  title,
  subtitle,
  className,
  action,
}: SectionHeadingProps) {
  return (
    <div className={cn("w-full border-t border-white/10 pt-6 sm:pt-8 pb-8 sm:pb-12 md:pb-16", className)}>
      <div className="flex flex-col md:flex-row md:items-start justify-between gap-4 sm:gap-6">
        <div className="min-w-0 max-w-full">
          <div className="flex flex-wrap items-center gap-2 sm:gap-3 font-mono text-[10px] sm:text-xs uppercase tracking-wider sm:tracking-widest text-neutral-400 mb-3 sm:mb-4">
            {index && <span className="text-white font-semibold flex-shrink-0">[{index}]</span>}
            {category && <span className="break-words">{category}</span>}
          </div>
          <h2 className="text-3xl sm:text-5xl md:text-6xl lg:text-7xl font-heading font-bold tracking-tight text-white uppercase leading-[1.08] break-words">
            {title}
          </h2>
          {subtitle && (
            <p className="mt-3 sm:mt-4 text-sm sm:text-base md:text-lg text-neutral-400 max-w-2xl font-normal leading-relaxed break-words">
              {subtitle}
            </p>
          )}
        </div>
        {action && <div className="mt-2 md:mt-0 flex-shrink-0 max-w-full">{action}</div>}
      </div>
    </div>
  );
}
