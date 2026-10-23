"use client";

import React, { useRef, useState } from "react";
import {
  motion,
  useMotionValue,
  useSpring,
  useTransform,
  AnimatePresence,
} from "framer-motion";
import {
  Home,
  Compass,
  Palette,
  Terminal,
  Layers,
  Sparkles,
  type LucideIcon,
} from "lucide-react";
import { cn } from "@/lib/utils";

export interface DockItem {
  title: string;
  icon: LucideIcon;
  href?: string;
  onClick?: () => void;
}

const defaultItems: DockItem[] = [
  { title: "Home", icon: Home },
  { title: "Explore", icon: Compass },
  { title: "Design", icon: Palette },
  { title: "Components", icon: Layers },
  { title: "Terminal", icon: Terminal },
  { title: "Magic", icon: Sparkles },
];

function DockIcon({
  mouseX,
  item,
}: {
  mouseX: any;
  item: DockItem;
}) {
  const ref = useRef<HTMLDivElement>(null);
  const [hovered, setHovered] = useState(false);

  const distance = useTransform(mouseX, (val: number) => {
    const bounds = ref.current?.getBoundingClientRect() ?? { x: 0, width: 0 };
    return val - bounds.x - bounds.width / 2;
  });

  const widthSync = useTransform(distance, [-140, 0, 140], [42, 68, 42]);
  const width = useSpring(widthSync, { mass: 0.1, stiffness: 160, damping: 14 });

  const Icon = item.icon;

  return (
    <div className="relative">
      <motion.div
        ref={ref}
        style={{ width, height: width }}
        onMouseEnter={() => setHovered(true)}
        onMouseLeave={() => setHovered(false)}
        onClick={item.onClick}
        className="relative flex items-center justify-center rounded-2xl border border-white/10 bg-zinc-800/90 text-zinc-300 shadow-lg shadow-black/40 backdrop-blur-md transition-colors hover:border-white/30 hover:bg-zinc-700/80 hover:text-white"
      >
        <Icon className="h-1/2 w-1/2 transition-transform duration-200" />
      </motion.div>

      {/* Tooltip */}
      <AnimatePresence>
        {hovered && (
          <motion.div
            initial={{ opacity: 0, y: 8, scale: 0.95 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: 4, scale: 0.95 }}
            transition={{ duration: 0.15 }}
            className="pointer-events-none absolute -top-9 left-1/2 -translate-x-1/2 whitespace-nowrap rounded-md border border-white/10 bg-zinc-950/90 px-2.5 py-1 text-[11px] font-medium text-zinc-200 shadow-md backdrop-blur-md"
          >
            {item.title}
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}

export function FloatingDock({
  items = defaultItems,
  className,
}: {
  items?: DockItem[];
  className?: string;
}) {
  const mouseX = useMotionValue(Infinity);

  return (
    <motion.div
      onMouseMove={(e) => mouseX.set(e.clientX)}
      onMouseLeave={() => mouseX.set(Infinity)}
      className={cn(
        "flex h-16 items-end gap-3 rounded-3xl border border-white/10 bg-zinc-900/60 px-4 pb-2.5 backdrop-blur-2xl shadow-2xl shadow-black/60",
        className
      )}
    >
      {items.map((item, idx) => (
        <DockIcon key={idx} mouseX={mouseX} item={item} />
      ))}
    </motion.div>
  );
}
