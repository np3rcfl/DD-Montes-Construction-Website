"use client";

import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Image from "next/image";

const slides = [
  { src: "/images/finished-kitchen.jpg", label: "Kitchen Remodels" },
  { src: "/images/finished-adu-exterior.jpg", label: "ADU Construction" },
  { src: "/images/exterior-scaffolding-1.jpg", label: "Home Additions" },
  { src: "/images/crew-roofwork.jpg", label: "Roofing & Exterior" },
  { src: "/images/crew-concrete-pour.jpg", label: "Concrete & Foundation" },
];

export default function ServicesHero() {
  const [active, setActive] = useState(0);

  useEffect(() => {
    const t = setInterval(() => setActive((p) => (p + 1) % slides.length), 5000);
    return () => clearInterval(t);
  }, []);

  return (
    <section className="relative min-h-[60dvh] flex items-center justify-center overflow-hidden pt-[60px]">
      {/* Slideshow */}
      <div className="absolute inset-0">
        <AnimatePresence mode="sync">
          <motion.div
            key={active}
            initial={{ opacity: 0, scale: 1.0 }}
            animate={{ opacity: 1, scale: 1.04 }}
            exit={{ opacity: 0 }}
            transition={{
              opacity: { duration: 1.3, ease: "easeInOut" },
              scale: { duration: 6, ease: "linear" },
            }}
            className="absolute inset-0"
          >
            <Image
              src={slides[active].src}
              alt={slides[active].label}
              fill
              className="object-cover object-center"
              priority={active === 0}
              quality={88}
            />
          </motion.div>
        </AnimatePresence>
        <div className="absolute inset-0 bg-gradient-to-t from-black/96 via-black/72 to-black/45" />
        <div className="absolute inset-0 bg-gradient-to-r from-black/50 to-transparent" />
      </div>

      {/* Content */}
      <div className="relative z-10 max-w-4xl mx-auto px-6 text-center py-20">
        <motion.div
          initial={{ opacity: 0, y: 28 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.9, ease: [0.16, 1, 0.3, 1] }}
        >
          <p className="text-[11px] font-medium tracking-[0.25em] uppercase text-white/55 mb-5">
            Services
          </p>
          <h1 className="heading-display text-5xl md:text-7xl tracking-tight text-white leading-[0.95] mb-6">
            Every Trade.
            <br />
            One Team.
          </h1>
          <p className="text-white/70 text-lg max-w-[480px] mx-auto mb-8">
            Licensed, bonded, and insured. We self-perform or directly manage every trade on every job so nothing falls through the cracks.
          </p>

          {/* Slide dots */}
          <div className="flex items-center justify-center gap-2">
            <AnimatePresence mode="wait">
              <motion.span
                key={active}
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                transition={{ duration: 0.3 }}
                className="text-[11px] text-white/50 uppercase tracking-widest font-medium mr-2"
              >
                {slides[active].label}
              </motion.span>
            </AnimatePresence>
            {slides.map((_, i) => (
              <button
                key={i}
                onClick={() => setActive(i)}
                className={`h-[3px] rounded-full transition-all duration-300 ${
                  i === active ? "w-7 bg-white" : "w-2.5 bg-white/30 hover:bg-white/55"
                }`}
                aria-label={`Slide ${i + 1}`}
              />
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
}
