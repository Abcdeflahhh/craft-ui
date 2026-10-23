"use client";

import React, { useRef, useState } from "react";
import { motion, useSpring } from "framer-motion";
import { cn } from "@/lib/utils";

interface MagneticButtonProps {
  children: React.ReactNode;
  className?: string;
  strength?: number;
  onClick?: () => void;
}

export function MagneticButton({
  children,
  className,
  strength = 0.35,
  onClick,
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
      onClick={onClick}
      className={cn("inline-block cursor-pointer select-none", className)}
    >
      {children}
    </motion.div>
  );
}
