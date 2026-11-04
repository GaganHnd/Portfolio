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
    <div className={cn("w-full border-t border-white/10 pt-8 pb-12 md:pb-16", className)}>
      <div className="flex flex-col md:flex-row md:items-start justify-between gap-6">
        <div>
          <div className="flex items-center gap-3 font-mono text-xs uppercase tracking-widest text-neutral-400 mb-4">
            {index && <span className="text-white font-semibold">[{index}]</span>}
            {category && <span>{category}</span>}
          </div>
          <h2 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-heading font-bold tracking-tight text-white uppercase leading-[1.05]">
            {title}
          </h2>
          {subtitle && (
            <p className="mt-4 text-base md:text-lg text-neutral-400 max-w-2xl font-normal leading-relaxed">
              {subtitle}
            </p>
          )}
        </div>
        {action && <div className="mt-2 md:mt-0 flex-shrink-0">{action}</div>}
      </div>
    </div>
  );
}
