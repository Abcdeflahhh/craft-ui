"use client";

import React from "react";
import { Sparkles, ArrowUpRight } from "lucide-react";
import { cn } from "@/lib/utils";

interface BorderBeamCardProps {
  title: string;
  description: string;
  badge?: string;
  className?: string;
}

export function BorderBeamCard({
  title,
  description,
  badge = "Border Beam",
  className,
}: BorderBeamCardProps) {
  return (
    <div
      className={cn(
        "relative overflow-hidden rounded-2xl border border-white/10 bg-zinc-900/60 p-6 sm:p-7 backdrop-blur-xl transition-all duration-300 hover:border-white/20",
        className
      )}
    >
      {/* Animated Glowing Laser Border Beam */}
      <div
        className="pointer-events-none absolute -inset-[100%] animate-[spin_4s_linear_infinite] opacity-70"
        style={{
          background:
            "conic-gradient(from 0deg, transparent 0 340deg, rgba(168, 85, 247, 0.9) 360deg)",
        }}
      />

      {/* Inner Mask to preserve background */}
      <div className="absolute inset-[1px] rounded-[15px] bg-zinc-950/90 backdrop-blur-xl" />

      {/* Card Content */}
      <div className="relative z-10 flex flex-col gap-4">
        <div className="flex items-center justify-between">
          <div className="flex h-10 w-10 items-center justify-center rounded-xl border border-purple-500/20 bg-purple-500/10 text-purple-400">
            <Sparkles className="h-5 w-5" />
          </div>
          <span className="flex items-center gap-1.5 rounded-full border border-purple-500/30 bg-purple-500/10 px-2.5 py-0.5 text-xs font-medium text-purple-300">
            <span className="relative flex h-1.5 w-1.5">
              <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-purple-400 opacity-75"></span>
              <span className="relative inline-flex h-1.5 w-1.5 rounded-full bg-purple-500"></span>
            </span>
            {badge}
          </span>
        </div>

        <div>
          <h3 className="text-lg font-semibold tracking-tight text-white flex items-center justify-between">
            {title}
            <ArrowUpRight className="h-4 w-4 text-zinc-500 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
          </h3>
          <p className="mt-1.5 text-sm leading-relaxed text-zinc-400">
            {description}
          </p>
        </div>
      </div>
    </div>
  );
}
