export interface ComponentSnippet {
  title: string;
  category: string;
  description: string;
  componentCode: string;
  usageCode: string;
}

export const COMPONENT_REGISTRY: Record<string, ComponentSnippet> = {
  spotlight: {
    title: "Spotlight Bento Card",
    category: "Bento & Cards",
    description: "Radial cursor-driven spotlight glow with dynamic coordinates calculation and smooth hover transition.",
    componentCode: `// components/showcase/spotlight-card.tsx
"use client";

import React, { useRef, useState } from "react";
import { Sparkles, LucideIcon } from "lucide-react";
import { cn } from "@/lib/utils";

interface SpotlightCardProps {
  title: string;
  description: string;
  tag?: string;
  icon?: LucideIcon;
  glowColor?: "indigo" | "emerald" | "violet" | "amber" | "cyan";
  className?: string;
}

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

  const glowColorMap = {
    indigo: "rgba(99, 102, 241, 0.22)",
    emerald: "rgba(16, 185, 129, 0.22)",
    violet: "rgba(168, 85, 247, 0.22)",
    amber: "rgba(245, 158, 11, 0.22)",
    cyan: "rgba(6, 182, 212, 0.22)",
  };

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    if (!cardRef.current) return;
    const rect = cardRef.current.getBoundingClientRect();
    setMousePos({ x: e.clientX - rect.left, y: e.clientY - rect.top });
  };

  return (
    <div
      ref={cardRef}
      onMouseMove={handleMouseMove}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
      className={cn(
        "group relative overflow-hidden rounded-2xl border border-white/10 bg-zinc-900/60 p-6 backdrop-blur-xl transition-all duration-300 hover:border-white/20",
        className
      )}
    >
      <div
        className="pointer-events-none absolute -inset-px rounded-2xl transition-opacity duration-300"
        style={{
          opacity: isHovered ? 1 : 0,
          background: \`radial-gradient(350px circle at \${mousePos.x}px \${mousePos.y}px, \${glowColorMap[glowColor]}, transparent 75%)\`,
        }}
      />
      <div className="relative z-10 flex flex-col gap-4">
        <div className="flex items-center justify-between">
          <div className="flex h-10 w-10 items-center justify-center rounded-xl border border-white/10 bg-white/5 text-zinc-300">
            <Icon className="h-5 w-5" />
          </div>
          <span className="rounded-full border border-white/10 bg-white/5 px-2.5 py-0.5 text-xs text-zinc-300">
            {tag}
          </span>
        </div>
        <div>
          <h3 className="text-lg font-semibold text-white">{title}</h3>
          <p className="mt-1 text-sm text-zinc-400">{description}</p>
        </div>
      </div>
    </div>
  );
}`,
    usageCode: `// Example Usage
import { SpotlightCard } from "@/components/showcase/spotlight-card";
import { Sparkles, Cpu, ShieldCheck } from "lucide-react";

export default function BentoSection() {
  return (
    <div className="grid grid-cols-1 md:grid-cols-3 gap-5">
      <SpotlightCard
        title="Fluid Bento Motion"
        description="Dynamic radial gradient follows your cursor position smoothly."
        tag="Interactive"
        icon={Sparkles}
        glowColor="indigo"
      />
      <SpotlightCard
        title="Hardware Accelerated"
        description="Optimized for 60fps micro-interactions with zero layout shifts."
        tag="Performance"
        icon={Cpu}
        glowColor="emerald"
      />
    </div>
  );
}`,
  },

  magnetic: {
    title: "Magnetic Button & Gesture",
    category: "Gestures",
    description: "Elastic spring physics pulling buttons towards the cursor using Framer Motion springs.",
    componentCode: `// components/showcase/magnetic-button.tsx
"use client";

import React, { useRef, useState } from "react";
import { motion, useSpring } from "framer-motion";

interface MagneticButtonProps {
  children: React.ReactNode;
  strength?: number;
  className?: string;
}

export function MagneticButton({
  children,
  strength = 0.35,
  className,
}: MagneticButtonProps) {
  const ref = useRef<HTMLDivElement>(null);
  const [position, setPosition] = useState({ x: 0, y: 0 });

  const springConfig = { damping: 15, stiffness: 150, mass: 0.1 };
  const x = useSpring(position.x, springConfig);
  const y = useSpring(position.y, springConfig);

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    if (!ref.current) return;
    const { clientX, clientY } = e;
    const { left, top, width, height } = ref.current.getBoundingClientRect();
    const middleX = clientX - (left + width / 2);
    const middleY = clientY - (top + height / 2);

    x.set(middleX * strength);
    y.set(middleY * strength);
  };

  const handleMouseLeave = () => {
    x.set(0);
    y.set(0);
  };

  return (
    <motion.div
      ref={ref}
      style={{ x, y }}
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
      className={className || "inline-block cursor-pointer select-none"}
    >
      {children}
    </motion.div>
  );
}`,
    usageCode: `// Example Usage
import { MagneticButton } from "@/components/showcase/magnetic-button";
import { Zap } from "lucide-react";

export default function CallToAction() {
  return (
    <MagneticButton strength={0.5}>
      <button className="flex items-center gap-2 rounded-2xl bg-indigo-600 px-6 py-3 font-semibold text-white shadow-lg shadow-indigo-600/30">
        <Zap className="h-4 w-4" />
        <span>Explore Components</span>
      </button>
    </MagneticButton>
  );
}`,
  },

  dock: {
    title: "macOS Floating Dock",
    category: "Gestures",
    description: "Icon magnification dock modeled after macOS with proportional spring magnification.",
    componentCode: `// components/showcase/floating-dock.tsx
"use client";

import React, { useRef, useState } from "react";
import { motion, useMotionValue, useSpring, useTransform, AnimatePresence } from "framer-motion";
import { LucideIcon } from "lucide-react";

export interface DockItem {
  title: string;
  icon: LucideIcon;
  href?: string;
  onClick?: () => void;
}

export function FloatingDock({ items }: { items: DockItem[] }) {
  const mouseX = useMotionValue(Infinity);

  return (
    <motion.div
      onMouseMove={(e) => mouseX.set(e.clientX)}
      onMouseLeave={() => mouseX.set(Infinity)}
      className="flex h-16 items-end gap-3 rounded-3xl border border-white/10 bg-zinc-900/60 px-4 pb-2.5 backdrop-blur-2xl shadow-2xl"
    >
      {items.map((item, idx) => (
        <DockIcon key={idx} mouseX={mouseX} item={item} />
      ))}
    </motion.div>
  );
}`,
    usageCode: `// Example Usage
import { FloatingDock } from "@/components/showcase/floating-dock";
import { Home, Compass, Layers, Terminal } from "lucide-react";

const navigationItems = [
  { title: "Home", icon: Home },
  { title: "Explore", icon: Compass },
  { title: "Components", icon: Layers },
  { title: "Terminal", icon: Terminal },
];

export default function DockPreview() {
  return <FloatingDock items={navigationItems} />;
}`,
  },

  borderBeam: {
    title: "Laser Border Beam",
    category: "Bento & Cards",
    description: "Continuous revolving laser beam along element borders using pure conic gradients.",
    componentCode: `// components/showcase/border-beam-card.tsx
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
}`,
    usageCode: `// Example Usage
import { BorderBeamCard } from "@/components/showcase/border-beam-card";

export default function FeaturedBeam() {
  return (
    <BorderBeamCard
      title="Continuous Glowing Border Beam"
      description="Conic-gradient laser line that circles the card endlessly."
      badge="Satisfying"
    />
  );
}`,
  },

  tilt: {
    title: "3D Parallax Tilt Card",
    category: "Bento & Cards",
    description: "Interactive 3D depth rotation calculating cursor offsets with holographic sheen effect.",
    componentCode: `// components/showcase/tilt-card.tsx
"use client";

import React, { useRef } from "react";
import { motion, useMotionValue, useSpring, useTransform } from "framer-motion";
import { Sparkles, ArrowUpRight } from "lucide-react";

interface TiltCardProps {
  title: string;
  subtitle?: string;
  description: string;
  tag?: string;
  href?: string;
  stats?: { label: string; value: string }[];
}

export function TiltCard({
  title,
  subtitle,
  description,
  tag = "3D Parallax",
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
    x.set((e.clientX - rect.left) / rect.width - 0.5);
    y.set((e.clientY - rect.top) / rect.height - 0.5);
  };

  return (
    <div style={{ perspective: "1000px" }}>
      <motion.div
        ref={ref}
        onMouseMove={handleMouseMove}
        onMouseLeave={() => { x.set(0); y.set(0); }}
        style={{ rotateX, rotateY, transformStyle: "preserve-3d" }}
        className="group relative flex flex-col justify-between overflow-hidden rounded-3xl border border-white/15 bg-zinc-900/90 p-7 backdrop-blur-2xl transition-all duration-200"
      >
        <motion.div
          style={{ opacity: glareOpacity }}
          className="pointer-events-none absolute -inset-full bg-gradient-to-tr from-transparent via-white/20 to-transparent"
        />
        <div style={{ transform: "translateZ(30px)" }} className="relative z-10">
          <span className="text-xs text-indigo-400 font-semibold">{tag}</span>
          <h3 className="text-2xl font-bold text-white mt-2">{title}</h3>
          <p className="mt-2 text-sm text-zinc-400">{description}</p>
        </div>
      </motion.div>
    </div>
  );
}`,
    usageCode: `// Example Usage
import { TiltCard } from "@/components/showcase/tilt-card";

export default function Showcase() {
  return (
    <TiltCard
      title="BentoFlow — Interactive Workflow Hub"
      subtitle="Featured Creation"
      description="Dynamic Bento Grid portfolio builder with drag-and-drop state."
      href="https://bentoflowaflah.vercel.app"
      stats={[
        { label: "Pattern", value: "Bento Grid" },
        { label: "Stack", value: "Next.js 16" },
        { label: "Status", value: "Live" },
      ]}
    />
  );
}`,
  },

  shimmer: {
    title: "Shimmer Button & Micro-Interactions",
    category: "Gestures",
    description: "Rotating conic reflection border with reactive hover lift and ambient glow.",
    componentCode: `// components/showcase/shimmer-button.tsx
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
      <div className="-z-30 blur-[2px] absolute inset-0 overflow-visible [container-type:size]">
        <div className="absolute inset-0 h-[100cqh] animate-[spin_var(--speed)_linear_infinite] [aspect-ratio:1]">
          <div className="absolute -inset-[100%] [background:conic-gradient(from_calc(270deg-(var(--spread)*0.5)),transparent_0,var(--shimmer-color)_var(--spread),transparent_var(--spread))]" />
        </div>
      </div>
      <div className="absolute inset-[1px] -z-20 rounded-[inherit] bg-zinc-950/90 transition-colors duration-300 group-hover:bg-zinc-900/90" />
      <span className="relative z-10 flex items-center gap-2">
        {children}
      </span>
    </button>
  );
}`,
    usageCode: `// Example Usage
import { ShimmerButton } from "@/components/showcase/shimmer-button";
import { Sparkles, ArrowRight } from "lucide-react";

export default function HeroCTA() {
  return (
    <ShimmerButton
      shimmerColor="#a855f7"
      shimmerDuration="2.5s"
      className="shadow-lg shadow-purple-500/20"
    >
      <Sparkles className="h-4 w-4 text-purple-400" />
      <span>Launch Interactive Demo</span>
      <ArrowRight className="h-4 w-4" />
    </ShimmerButton>
  );
}`,
  },
};

// Backward compatibility exports
export const spotlightCardCode = COMPONENT_REGISTRY.spotlight.componentCode;
export const magneticButtonCode = COMPONENT_REGISTRY.magnetic.componentCode;
export const floatingDockCode = COMPONENT_REGISTRY.dock.componentCode;
export const borderBeamCardCode = COMPONENT_REGISTRY.borderBeam.componentCode;
export const tiltCardCode = COMPONENT_REGISTRY.tilt.componentCode;
export const shimmerButtonCode = COMPONENT_REGISTRY.shimmer.componentCode;
