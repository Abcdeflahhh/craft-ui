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
  MousePointer2,
  Zap,
  Layers,
  Sparkles,
  User,
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
  { title: "Home", icon: Home, href: "#hero" },
  { title: "Spotlight", icon: MousePointer2, href: "#spotlight-section" },
  { title: "Magnetic", icon: Zap, href: "#magnetic-section" },
  { title: "Laser & Dock", icon: Layers, href: "#dock-section" },
  { title: "Shimmer", icon: Sparkles, href: "#shimmer-section" },
  { title: "Creator Profile", icon: User, href: "#creator-profile" },
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

  const handleClick = (e: React.MouseEvent) => {
    if (item.onClick) {
      item.onClick();
    }
    if (item.href) {
      if (item.href.startsWith("#")) {
        e.preventDefault();
        const el = document.querySelector(item.href);
        if (el) {
          el.scrollIntoView({ behavior: "smooth" });
        }
      }
    }
  };

  const content = (
    <motion.div
      ref={ref}
      style={{ width, height: width }}
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
      onClick={handleClick}
      className="relative flex items-center justify-center rounded-2xl border border-white/10 bg-zinc-800/90 text-zinc-300 shadow-lg shadow-black/40 backdrop-blur-md transition-colors hover:border-white/30 hover:bg-zinc-700/80 hover:text-white cursor-pointer"
    >
      <Icon className="h-1/2 w-1/2 transition-transform duration-200" />
    </motion.div>
  );

  return (
    <div className="relative">
      {item.href && !item.href.startsWith("#") ? (
        <a href={item.href} target="_blank" rel="noopener noreferrer">
          {content}
        </a>
      ) : (
        content
      )}

      {/* Tooltip */}
      <AnimatePresence>
        {hovered && (
          <motion.div
            initial={{ opacity: 0, y: 8, scale: 0.95 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: 4, scale: 0.95 }}
            transition={{ duration: 0.15 }}
            className="pointer-events-none absolute -top-9 left-1/2 -translate-x-1/2 whitespace-nowrap rounded-md border border-white/10 bg-zinc-950/95 px-2.5 py-1 text-[11px] font-medium text-zinc-200 shadow-xl backdrop-blur-md z-30"
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
