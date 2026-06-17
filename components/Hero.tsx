"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import Link from "next/link";
import { ArrowRight, Star } from "@phosphor-icons/react";
import { Typewriter } from "@/components/ui/typewriter";

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { staggerChildren: 0.13, delayChildren: 0.2 },
  },
};

const itemVariants = {
  hidden: { y: 26, opacity: 0 },
  visible: {
    y: 0,
    opacity: 1,
    transition: { duration: 0.8, ease: [0.16, 1, 0.3, 1] as [number, number, number, number] },
  },
};

const rightVariants = {
  hidden: { x: 50, opacity: 0 },
  visible: {
    x: 0,
    opacity: 1,
    transition: { duration: 1.1, delay: 0.55, ease: [0.16, 1, 0.3, 1] as [number, number, number, number] },
  },
};

const services = [
  "Kitchen Remodels",
  "ADU Construction",
  "Home Additions",
  "Full Renovations",
  "Roofing & Exterior",
];

export default function Hero() {
  return (
    <section className="relative min-h-[100dvh] flex items-center overflow-hidden pt-[60px]">
      {/* Background */}
      <div className="absolute inset-0">
        <Image
          src="/images/exterior-scaffolding-2.jpg"
          alt="DD Montes Construction crew on a two-story residential build"
          fill
          className="object-cover object-center"
          priority
          quality={90}
        />
        <div className="absolute inset-0 bg-gradient-to-r from-black/92 via-black/72 to-black/35" />
        <div className="absolute inset-0 bg-gradient-to-t from-black/50 via-transparent to-black/20" />
      </div>

      {/* Content grid */}
      <div className="relative z-10 w-full max-w-7xl mx-auto px-6 md:px-12 py-16">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-center">

          {/* Left column — copy */}
          <motion.div
            variants={containerVariants}
            initial="hidden"
            animate="visible"
            className="lg:col-span-7"
          >
            {/* Eyebrow */}
            <motion.p
              variants={itemVariants}
              className="text-[11px] font-medium text-white/55 tracking-[0.28em] uppercase mb-8"
            >
              Hawthorne, CA &nbsp;·&nbsp; CSLB B1049017
            </motion.p>

            {/* Headline */}
            <motion.h1 variants={itemVariants} className="heading-display leading-[0.92] tracking-tight mb-6">
              <span className="block text-[3.8rem] sm:text-[5rem] xl:text-[6.4rem] text-white">
                Built Right,
              </span>
              <span
                className="block italic text-[#6BA8D4] mt-3"
                style={{ fontSize: "clamp(3.4rem, 8vw, 6rem)", letterSpacing: "0.01em" }}
              >
                Every Time.
              </span>
            </motion.h1>

            {/* Typewriter */}
            <motion.div
              variants={itemVariants}
              className="flex items-center gap-3 mb-7"
            >
              <span className="text-[11px] font-medium text-white/35 uppercase tracking-[0.22em]">
                Specialists in
              </span>
              <span className="text-sm font-semibold text-white min-w-[190px]">
                <Typewriter
                  words={services}
                  speed={65}
                  delayBetweenWords={2400}
                  cursorChar="_"
                />
              </span>
            </motion.div>

            {/* Description */}
            <motion.p
              variants={itemVariants}
              className="text-[0.97rem] text-white/60 leading-relaxed max-w-[450px] mb-10"
            >
              Licensed, bonded, and based in Hawthorne. Complete home renovations across LA County. Every project permitted and inspected from day one.
            </motion.p>

            {/* CTAs */}
            <motion.div variants={itemVariants} className="flex flex-wrap gap-3 mb-14">
              <Link
                href="/about#contact"
                className="inline-flex items-center gap-2.5 px-7 py-3.5 bg-white text-[#111111] text-sm font-bold rounded-full hover:bg-[#F0EDE8] transition-all duration-200 active:scale-[0.98]"
              >
                Get a Free Estimate
                <ArrowRight size={14} weight="bold" />
              </Link>
              <Link
                href="/projects"
                className="inline-flex items-center gap-2.5 px-7 py-3.5 bg-white/10 backdrop-blur-sm border border-white/20 text-white text-sm font-medium rounded-full hover:bg-white/18 transition-all duration-200 active:scale-[0.98]"
              >
                View Our Work
              </Link>
            </motion.div>

            {/* Stats bar */}
            <motion.div
              variants={itemVariants}
              className="flex flex-wrap gap-x-10 gap-y-4 pt-6 border-t border-white/10"
            >
              {[
                { value: "15+", label: "Years in Business" },
                { value: "14", label: "Cities Served" },
                { value: "100%", label: "Permitted Work" },
              ].map((s) => (
                <div key={s.label} className="flex flex-col">
                  <span className="text-[1.6rem] font-bold text-white tracking-tight leading-none">
                    {s.value}
                  </span>
                  <span className="text-[10px] text-white/35 uppercase tracking-widest font-medium mt-1">
                    {s.label}
                  </span>
                </div>
              ))}
            </motion.div>
          </motion.div>

          {/* Right column — project card */}
          <motion.div
            variants={rightVariants}
            initial="hidden"
            animate="visible"
            className="lg:col-span-5 hidden lg:flex flex-col gap-4"
          >
            {/* Main photo card */}
            <div className="relative rounded-2xl overflow-hidden ring-1 ring-white/12 group">
              <Image
                src="/images/finished-kitchen.jpg"
                alt="Completed kitchen remodel — white shaker cabinets, quartz countertops"
                width={900}
                height={680}
                className="w-full h-[370px] object-cover transition-transform duration-700 group-hover:scale-[1.03]"
                quality={88}
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/10 to-transparent" />
              <div className="absolute bottom-0 left-0 right-0 p-5">
                <span className="inline-block px-2.5 py-1 bg-[#2D6B4F] text-white text-[10px] font-bold rounded-full mb-2.5 uppercase tracking-wide">
                  Featured Project
                </span>
                <p className="text-white font-semibold text-sm tracking-tight">Kitchen &amp; Living Renovation</p>
                <p className="text-white/45 text-xs mt-0.5">Hawthorne, CA</p>
              </div>
            </div>

            {/* Two smaller cards */}
            <div className="grid grid-cols-2 gap-4">
              <div className="relative rounded-xl overflow-hidden ring-1 ring-white/10 group">
                <Image
                  src="/images/finished-adu-exterior.jpg"
                  alt="Completed ADU exterior"
                  width={400}
                  height={260}
                  className="w-full h-[130px] object-cover transition-transform duration-700 group-hover:scale-[1.04]"
                  quality={80}
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/75 to-transparent" />
                <div className="absolute bottom-0 left-0 right-0 p-3">
                  <p className="text-white text-xs font-semibold">ADU Build</p>
                  <p className="text-white/40 text-[10px]">South Bay</p>
                </div>
              </div>

              {/* Rating badge card */}
              <div className="bg-[#1B3E6F] rounded-xl p-4 ring-1 ring-white/10 flex flex-col justify-between">
                <div className="flex gap-0.5 mb-2">
                  {Array.from({ length: 5 }).map((_, i) => (
                    <Star key={i} size={12} weight="fill" className="text-white/70" />
                  ))}
                </div>
                <div>
                  <div className="text-2xl font-bold text-white tracking-tight">4.9</div>
                  <div className="text-[10px] text-white/40 uppercase tracking-widest mt-0.5">BuildZoom</div>
                </div>
                <p className="text-xs text-white/50 leading-snug mt-2">
                  &ldquo;Dependable contractor. Highly recommended.&rdquo;
                </p>
              </div>
            </div>
          </motion.div>

        </div>
      </div>
    </section>
  );
}
