"use client";

import React from "react";
import Link from "next/link";
import { ArrowUpRight } from "lucide-react";
import { cn } from "@/lib/utils";

export interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  href?: string;
  variant?: "primary" | "secondary" | "outline" | "ghost" | "link";
  size?: "sm" | "md" | "lg";
  isExternal?: boolean;
  showArrow?: boolean;
  children: React.ReactNode;
}

export function Button({
  href,
  variant = "primary",
  size = "md",
  isExternal = false,
  showArrow = false,
  className,
  children,
  ...props
}: ButtonProps) {
  const baseStyles =
    "group inline-flex items-center justify-center font-heading font-medium tracking-wide transition-all duration-300 focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-white disabled:pointer-events-none disabled:opacity-40 uppercase";

  const sizeStyles = {
    sm: "text-xs px-3.5 py-2 gap-1.5",
    md: "text-xs md:text-sm px-5 py-3 gap-2",
    lg: "text-sm md:text-base px-7 py-4 gap-2.5",
  };

  const variantStyles = {
    primary:
      "bg-white text-black hover:bg-neutral-200 active:scale-[0.98] border border-white",
    secondary:
      "bg-surface-elevated text-white hover:bg-neutral-800 active:scale-[0.98] border border-white/10",
    outline:
      "bg-transparent text-white border border-white/20 hover:border-white hover:bg-white/5 active:scale-[0.98]",
    ghost:
      "bg-transparent text-neutral-300 hover:text-white hover:bg-white/5",
    link: "bg-transparent text-white hover:text-neutral-300 underline-offset-4 hover:underline p-0",
  };

  const combinedClasses = cn(
    baseStyles,
    sizeStyles[size],
    variantStyles[variant],
    className
  );

  const content = (
    <>
      <span>{children}</span>
      {showArrow && (
        <ArrowUpRight
          className="w-3.5 h-3.5 transition-transform duration-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5"
          aria-hidden="true"
        />
      )}
    </>
  );

  if (href) {
    if (isExternal) {
      return (
        <a
          href={href}
          target="_blank"
          rel="noopener noreferrer"
          className={combinedClasses}
        >
          {content}
        </a>
      );
    }
    return (
      <Link href={href} className={combinedClasses}>
        {content}
      </Link>
    );
  }

  return (
    <button className={combinedClasses} {...props}>
      {content}
    </button>
  );
}
