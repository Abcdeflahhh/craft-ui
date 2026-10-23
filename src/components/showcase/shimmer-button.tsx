"use client";

import React from "react";
import { Sparkles, ArrowRight } from "lucide-react";
import { cn } from "@/lib/utils";

interface ShimmerButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  shimmerColor?: string;
  shimmerSize?: string;
  borderRadius?: string;
  shimmerDuration?: string;
  background?: string;
  className?: string;
  children?: React.ReactNode;
}

export function ShimmerButton({
  shimmerColor = "#ffffff",
  shimmerSize = "0.08em",
  shimmerDuration = "3s",
  borderRadius = "100px",
  background = "rgba(10, 10, 15, 1)",
  className,
  children,
  ...props
}: ShimmerButtonProps) {
  return (
    <button
      style={
        {
          "--spread": "90deg",
          "--shimmer-color": shimmerColor,
          "--radius": borderRadius,
          "--speed": shimmerDuration,
          "--cut": shimmerSize,
          "--bg": background,
        } as React.CSSProperties
      }
      className={cn(
        "group relative z-0 flex cursor-pointer items-center justify-center overflow-hidden whitespace-nowrap border border-white/15 px-6 py-3 text-sm font-medium text-white [background:var(--bg)] [border-radius:var(--radius)] transition-all duration-300 hover:scale-105 active:scale-95 hover:shadow-[0_0_35px_rgba(168,85,247,0.35)]",
        className
      )}
      {...props}
    >
      {/* Spark container */}
      <div className="-z-30 blur-[2px] absolute inset-0 overflow-visible [container-type:size]">
        {/* Spark */}
        <div className="absolute inset-0 h-[100cqh] animate-[spin_var(--speed)_linear_infinite] [aspect-ratio:1]">
          <div className="absolute -inset-[100%] [background:conic-gradient(from_calc(270deg-(var(--spread)*0.5)),transparent_0,var(--shimmer-color)_var(--spread),transparent_var(--spread))]" />
        </div>
      </div>

      {/* Backdrop mask */}
      <div className="absolute inset-[1px] -z-20 rounded-[inherit] bg-zinc-950/90 transition-colors duration-300 group-hover:bg-zinc-900/90" />

      {/* Button content */}
      <span className="relative z-10 flex items-center gap-2">
        {children || (
          <>
            <Sparkles className="h-4 w-4 text-purple-400" />
            <span>Shimmer Button</span>
            <ArrowRight className="h-3.5 w-3.5 transition-transform duration-200 group-hover:translate-x-1" />
          </>
        )}
      </span>
    </button>
  );
}
