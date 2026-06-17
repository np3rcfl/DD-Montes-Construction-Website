"use client";

import * as React from "react";
import { motion } from "framer-motion";
import { cn } from "@/lib/utils";

interface AnimatedHeroProps {
  backgroundImageUrl: string;
  eyebrow?: string;
  title: React.ReactNode;
  description: string;
  primaryCta: React.ReactNode;
  secondaryCta?: React.ReactNode;
  footer?: React.ReactNode;
  className?: string;
}

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.15,
      delayChildren: 0.25,
    },
  },
};

const itemVariants = {
  hidden: { y: 22, opacity: 0 },
  visible: {
    y: 0,
    opacity: 1,
    transition: {
      duration: 0.7,
      ease: [0.16, 1, 0.3, 1] as [number, number, number, number],
    },
  },
};

export function AnimatedHero({
  backgroundImageUrl,
  eyebrow,
  title,
  description,
  primaryCta,
  secondaryCta,
  footer,
  className,
}: AnimatedHeroProps) {
  return (
    <div
      className={cn(
        "relative flex min-h-[100dvh] w-full flex-col items-start justify-center overflow-hidden pt-[60px]",
        className
      )}
    >
      {/* Background */}
      <div
        className="absolute inset-0 z-0 bg-cover bg-center"
        style={{ backgroundImage: `url(${backgroundImageUrl})` }}
      >
        <div className="absolute inset-0 bg-black/62" />
        <div className="absolute inset-0 bg-gradient-to-r from-black/60 via-black/25 to-transparent" />
        <div className="absolute inset-0 bg-gradient-to-t from-black/40 via-transparent to-transparent" />
      </div>

      {/* Content */}
      <motion.div
        variants={containerVariants}
        initial="hidden"
        animate="visible"
        className="relative z-10 flex flex-col items-start px-6 md:px-12 lg:px-20 max-w-5xl w-full text-white"
      >
        {eyebrow && (
          <motion.p
            variants={itemVariants}
            className="text-[11px] font-medium text-[#2451a3] tracking-[0.25em] uppercase mb-5"
          >
            {eyebrow}
          </motion.p>
        )}

        <motion.div variants={itemVariants} className="mb-6">
          {title}
        </motion.div>

        <motion.p
          variants={itemVariants}
          className="text-base md:text-[1.05rem] text-white/70 leading-relaxed max-w-[480px] mb-10"
        >
          {description}
        </motion.p>

        <motion.div variants={itemVariants} className="flex flex-wrap gap-3">
          {primaryCta}
          {secondaryCta}
        </motion.div>

        {footer && (
          <motion.div
            variants={itemVariants}
            className="mt-14 pt-6 border-t border-white/12 w-full max-w-2xl"
          >
            {footer}
          </motion.div>
        )}
      </motion.div>
    </div>
  );
}
