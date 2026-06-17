"use client";

import { motion } from "framer-motion";
import { ReactNode } from "react";

interface FadeInProps {
  children: ReactNode;
  delay?: number;
  direction?: "up" | "left" | "right" | "none";
  className?: string;
  once?: boolean;
}

export default function FadeIn({
  children,
  delay = 0,
  direction = "up",
  className = "",
  once = true,
}: FadeInProps) {
  const dirMap = {
    up: { y: 44, x: 0 },
    left: { y: 0, x: -36 },
    right: { y: 0, x: 36 },
    none: { y: 0, x: 0 },
  };

  return (
    <motion.div
      className={className}
      initial={{ opacity: 0, scale: 0.97, ...dirMap[direction] }}
      whileInView={{ opacity: 1, scale: 1, y: 0, x: 0 }}
      viewport={{ once, amount: 0.12 }}
      transition={{
        duration: 0.75,
        delay,
        ease: [0.16, 1, 0.3, 1] as [number, number, number, number],
      }}
    >
      {children}
    </motion.div>
  );
}
