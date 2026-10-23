export const spotlightCardCode = `// components/spotlight-card.tsx
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
}

export function SpotlightCard({
  title,
  description,
  tag = "Interactive",
  icon: Icon = Sparkles,
  glowColor = "indigo",
}: SpotlightCardProps) {
  const cardRef = useRef<HTMLDivElement>(null);
  const [mousePos, setMousePos] = useState({ x: -300, y: -300 });
  const [isHovered, setIsHovered] = useState(false);

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
      className="group relative overflow-hidden rounded-2xl border border-white/10 bg-zinc-900/60 p-6 backdrop-blur-xl transition-all duration-300 hover:border-white/20"
    >
      <div
        className="pointer-events-none absolute -inset-px rounded-2xl transition-opacity duration-300"
        style={{
          opacity: isHovered ? 1 : 0,
          background: \`radial-gradient(350px circle at \${mousePos.x}px \${mousePos.y}px, rgba(99, 102, 241, 0.22), transparent 75%)\`,
        }}
      />
      <div className="relative z-10 flex flex-col gap-4">
        <span className="w-fit rounded-full border border-indigo-500/30 bg-indigo-500/10 px-2.5 py-0.5 text-xs text-indigo-400">
          {tag}
        </span>
        <h3 className="text-lg font-semibold text-white">{title}</h3>
        <p className="text-sm text-zinc-400">{description}</p>
      </div>
    </div>
  );
}`;

export const magneticButtonCode = `// components/magnetic-button.tsx
"use client";

import React, { useRef, useState } from "react";
import { motion, useSpring } from "framer-motion";

export function MagneticButton({
  children,
  strength = 0.35,
}: {
  children: React.ReactNode;
  strength?: number;
}) {
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
      className="inline-block cursor-pointer select-none"
    >
      {children}
    </motion.div>
  );
}`;

export const floatingDockCode = `// components/floating-dock.tsx
"use client";

import React, { useRef, useState } from "react";
import { motion, useMotionValue, useSpring, useTransform, AnimatePresence } from "framer-motion";
import { LucideIcon } from "lucide-react";

export function FloatingDock({ items }: { items: { title: string; icon: LucideIcon }[] }) {
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
}`;

export const tiltCardCode = `// components/tilt-card.tsx
"use client";

import React, { useRef } from "react";
import { motion, useMotionValue, useSpring, useTransform } from "framer-motion";

export function TiltCard({ title, description }: { title: string; description: string }) {
  const ref = useRef<HTMLDivElement>(null);
  const x = useMotionValue(0);
  const y = useMotionValue(0);

  const mouseXSpring = useSpring(x, { stiffness: 150, damping: 15 });
  const mouseYSpring = useSpring(y, { stiffness: 150, damping: 15 });

  const rotateX = useTransform(mouseYSpring, [-0.5, 0.5], ["14deg", "-14deg"]);
  const rotateY = useTransform(mouseXSpring, [-0.5, 0.5], ["-14deg", "14deg"]);

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    if (!ref.current) return;
    const rect = ref.current.getBoundingClientRect();
    x.set(e.clientX / rect.width - 0.5);
    y.set(e.clientY / rect.height - 0.5);
  };

  return (
    <div style={{ perspective: "1000px" }}>
      <motion.div
        ref={ref}
        onMouseMove={handleMouseMove}
        onMouseLeave={() => { x.set(0); y.set(0); }}
        style={{ rotateX, rotateY, transformStyle: "preserve-3d" }}
        className="relative rounded-3xl border border-white/15 bg-zinc-900 p-7 shadow-2xl"
      >
        <h3 className="text-2xl font-bold text-white">{title}</h3>
        <p className="mt-2 text-sm text-zinc-400">{description}</p>
      </motion.div>
    </div>
  );
}`;
