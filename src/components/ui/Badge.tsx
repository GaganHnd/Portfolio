import React from "react";
import { cn } from "@/lib/utils";

export interface BadgeProps extends React.HTMLAttributes<HTMLSpanElement> {
  variant?: "default" | "outline" | "status" | "editorial";
  children: React.ReactNode;
}

export function Badge({
  variant = "default",
  className,
  children,
  ...props
}: BadgeProps) {
  const baseStyles =
    "inline-flex items-center text-[10px] md:text-xs font-mono uppercase tracking-widest px-2.5 py-1 transition-colors";

  const variantStyles = {
    default: "bg-surface-elevated text-neutral-300 border border-white/10",
    outline: "bg-transparent text-neutral-400 border border-white/15",
    editorial: "text-neutral-400 bg-white/5 border border-white/10",
    status:
      "bg-surface-elevated text-neutral-200 border border-white/10 gap-2",
  };

  return (
    <span className={cn(baseStyles, variantStyles[variant], className)} {...props}>
      {variant === "status" && (
        <span className="relative flex h-2 w-2">
          <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75" />
          <span className="relative inline-flex rounded-full h-2 w-2 bg-emerald-500" />
        </span>
      )}
      {children}
    </span>
  );
}
