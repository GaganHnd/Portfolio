import React from "react";
import { cn } from "@/lib/utils";

interface DividerProps extends React.HTMLAttributes<HTMLDivElement> {
  label?: string;
  withCross?: boolean;
}

export function Divider({ label, withCross = false, className, ...props }: DividerProps) {
  return (
    <div
      className={cn(
        "relative w-full border-t border-white/10 my-8 md:my-16 flex items-center justify-between",
        className
      )}
      {...props}
    >
      {withCross && (
        <span
          className="absolute -top-[7px] left-0 font-mono text-xs text-neutral-500 select-none"
          aria-hidden="true"
        >
          +
        </span>
      )}
      {label && (
        <span className="font-mono text-[10px] md:text-xs text-neutral-500 uppercase tracking-widest bg-background px-3 -mt-2.5">
          {label}
        </span>
      )}
      {withCross && (
        <span
          className="absolute -top-[7px] right-0 font-mono text-xs text-neutral-500 select-none"
          aria-hidden="true"
        >
          +
        </span>
      )}
    </div>
  );
}
