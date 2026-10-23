"use client";

import React, { useRef } from "react";
import { motion, useMotionValue, useSpring, useTransform } from "framer-motion";
import { Sparkles, ExternalLink, Layers, ArrowUpRight } from "lucide-react";
import { cn } from "@/lib/utils";

interface TiltCardProps {
  title: string;
  subtitle?: string;
  description: string;
  tag?: string;
  className?: string;
  href?: string;
  stats?: { label: string; value: string }[];
}

export function TiltCard({
  title,
  subtitle,
  description,
  tag = "3D Parallax",
  className,
  href,
  stats,
}: TiltCardProps) {
  const ref = useRef<HTMLDivElement>(null);

  const x = useMotionValue(0);
  const y = useMotionValue(0);

  const mouseXSpring = useSpring(x, { stiffness: 150, damping: 15 });
  const mouseYSpring = useSpring(y, { stiffness: 150, damping: 15 });

  const rotateX = useTransform(mouseYSpring, [-0.5, 0.5], ["14deg", "-14deg"]);
  const rotateY = useTransform(mouseXSpring, [-0.5, 0.5], ["-14deg", "14deg"]);
  const glareOpacity = useTransform(mouseYSpring, [-0.5, 0.5], [0.35, 0.05]);

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    if (!ref.current) return;
    const rect = ref.current.getBoundingClientRect();
    const width = rect.width;
    const height = rect.height;

    const mouseX = e.clientX - rect.left;
    const mouseY = e.clientY - rect.top;

    const xPct = mouseX / width - 0.5;
    const yPct = mouseY / height - 0.5;

    x.set(xPct);
    y.set(yPct);
  };

  const handleMouseLeave = () => {
    x.set(0);
    y.set(0);
  };

  return (
    <div style={{ perspective: "1000px" }} className={className}>
      <motion.div
        ref={ref}
        onMouseMove={handleMouseMove}
        onMouseLeave={handleMouseLeave}
        style={{
          rotateX,
          rotateY,
          transformStyle: "preserve-3d",
        }}
        className="group relative flex flex-col justify-between overflow-hidden rounded-3xl border border-white/15 bg-gradient-to-b from-zinc-900/90 to-zinc-950/90 p-7 backdrop-blur-2xl transition-all duration-200 hover:border-indigo-500/40 hover:shadow-2xl hover:shadow-indigo-500/10"
      >
        {/* Holographic Sheen / Glare */}
        <motion.div
          style={{ opacity: glareOpacity }}
          className="pointer-events-none absolute -inset-full bg-gradient-to-tr from-transparent via-white/20 to-transparent transition-opacity duration-300"
        />

        {/* Ambient Top Glow */}
        <div className="pointer-events-none absolute -right-16 -top-16 h-44 w-44 rounded-full bg-indigo-500/15 blur-3xl transition-opacity group-hover:opacity-100" />

        {/* Card Content with 3D Z-translation */}
        <div style={{ transform: "translateZ(30px)" }} className="relative z-10 flex flex-col gap-4">
          <div className="flex items-center justify-between">
            <span className="flex items-center gap-1.5 rounded-full border border-indigo-500/30 bg-indigo-500/10 px-3 py-1 text-xs font-medium text-indigo-300">
              <Sparkles className="h-3.5 w-3.5 text-indigo-400" />
              {tag}
            </span>
            {href && (
              <a
                href={href}
                target="_blank"
                rel="noopener noreferrer"
                className="flex h-8 w-8 items-center justify-center rounded-full border border-white/10 bg-white/5 text-zinc-400 transition-colors hover:border-white/30 hover:bg-white/15 hover:text-white"
              >
                <ArrowUpRight className="h-4 w-4" />
              </a>
            )}
          </div>

          <div>
            {subtitle && (
              <span className="text-xs font-semibold tracking-wider uppercase text-zinc-500">
                {subtitle}
              </span>
            )}
            <h3 className="text-2xl font-bold tracking-tight text-white">{title}</h3>
            <p className="mt-2 text-sm leading-relaxed text-zinc-400">{description}</p>
          </div>
        </div>

        {/* Optional Stats Bar */}
        {stats && stats.length > 0 && (
          <div
            style={{ transform: "translateZ(20px)" }}
            className="relative z-10 mt-6 grid grid-cols-3 gap-2 border-t border-white/10 pt-4"
          >
            {stats.map((s, idx) => (
              <div key={idx} className="flex flex-col">
                <span className="text-xs text-zinc-500">{s.label}</span>
                <span className="text-sm font-semibold text-zinc-200">{s.value}</span>
              </div>
            ))}
          </div>
        )}
      </motion.div>
    </div>
  );
}
