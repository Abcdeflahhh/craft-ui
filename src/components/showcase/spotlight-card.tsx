"use client";

import React, { useRef, useState } from "react";
import { LucideIcon, Sparkles } from "lucide-react";
import { cn } from "@/lib/utils";

interface SpotlightCardProps {
  title: string;
  description: string;
  tag?: string;
  icon?: LucideIcon;
  glowColor?: "indigo" | "emerald" | "violet" | "amber" | "cyan";
  className?: string;
}

const colorMap = {
  indigo: {
    radial: "rgba(99, 102, 241, 0.22)",
    border: "rgba(99, 102, 241, 0.4)",
    tagBg: "bg-indigo-500/10",
    tagBorder: "border-indigo-500/30",
    tagText: "text-indigo-400",
  },
  emerald: {
    radial: "rgba(16, 185, 129, 0.22)",
    border: "rgba(16, 185, 129, 0.4)",
    tagBg: "bg-emerald-500/10",
    tagBorder: "border-emerald-500/30",
    tagText: "text-emerald-400",
  },
  violet: {
    radial: "rgba(168, 85, 247, 0.22)",
    border: "rgba(168, 85, 247, 0.4)",
    tagBg: "bg-violet-500/10",
    tagBorder: "border-violet-500/30",
    tagText: "text-violet-400",
  },
  amber: {
    radial: "rgba(245, 158, 11, 0.22)",
    border: "rgba(245, 158, 11, 0.4)",
    tagBg: "bg-amber-500/10",
    tagBorder: "border-amber-500/30",
    tagText: "text-amber-400",
  },
  cyan: {
    radial: "rgba(6, 182, 212, 0.22)",
    border: "rgba(6, 182, 212, 0.4)",
    tagBg: "bg-cyan-500/10",
    tagBorder: "border-cyan-500/30",
    tagText: "text-cyan-400",
  },
};

export function SpotlightCard({
  title,
  description,
  tag = "Interactive",
  icon: Icon = Sparkles,
  glowColor = "indigo",
  className,
}: SpotlightCardProps) {
  const cardRef = useRef<HTMLDivElement>(null);
  const [mousePos, setMousePos] = useState({ x: -300, y: -300 });
  const [isHovered, setIsHovered] = useState(false);

  const colors = colorMap[glowColor] || colorMap.indigo;

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    if (!cardRef.current) return;
    const rect = cardRef.current.getBoundingClientRect();
    setMousePos({
      x: e.clientX - rect.left,
      y: e.clientY - rect.top,
    });
  };

  return (
    <div
      ref={cardRef}
      onMouseMove={handleMouseMove}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
      className={cn(
        "group relative overflow-hidden rounded-2xl border border-white/10 bg-zinc-900/60 p-6 sm:p-7 backdrop-blur-xl transition-all duration-300 hover:border-white/20 hover:shadow-2xl hover:shadow-black/50",
        className
      )}
    >
      {/* Dynamic Cursor Spotlight Gradient */}
      <div
        className="pointer-events-none absolute -inset-px rounded-2xl transition-opacity duration-300"
        style={{
          opacity: isHovered ? 1 : 0,
          background: `radial-gradient(350px circle at ${mousePos.x}px ${mousePos.y}px, ${colors.radial}, transparent 75%)`,
        }}
      />

      {/* Subtle border highlight following cursor */}
      <div
        className="pointer-events-none absolute -inset-px rounded-2xl transition-opacity duration-300"
        style={{
          opacity: isHovered ? 1 : 0,
          background: `radial-gradient(220px circle at ${mousePos.x}px ${mousePos.y}px, ${colors.border}, transparent 80%)`,
          mask: "linear-gradient(#fff 0 0) content-box, linear-gradient(#fff 0 0)",
          WebkitMask: "linear-gradient(#fff 0 0) content-box, linear-gradient(#fff 0 0)",
          maskComposite: "exclude",
          WebkitMaskComposite: "xor",
          padding: "1px",
        }}
      />

      {/* Card Content */}
      <div className="relative z-10 flex flex-col gap-4">
        <div className="flex items-center justify-between">
          <div className="flex h-10 w-10 items-center justify-center rounded-xl border border-white/10 bg-zinc-800/80 text-white shadow-inner transition-transform duration-300 group-hover:scale-105">
            <Icon className="h-5 w-5" />
          </div>
          <span
            className={cn(
              "rounded-full border px-2.5 py-0.5 text-xs font-medium tracking-wide transition-colors",
              colors.tagBg,
              colors.tagBorder,
              colors.tagText
            )}
          >
            {tag}
          </span>
        </div>

        <div>
          <h3 className="text-lg font-semibold tracking-tight text-zinc-100 transition-colors group-hover:text-white">
            {title}
          </h3>
          <p className="mt-1.5 text-sm leading-relaxed text-zinc-400">
            {description}
          </p>
        </div>
      </div>
    </div>
  );
}
