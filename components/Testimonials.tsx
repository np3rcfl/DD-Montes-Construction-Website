"use client";

import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Quotes, Star } from "@phosphor-icons/react";

const testimonials = [
  {
    quote: "David is a good guy and does good work. Very dependable contractor. Highly recommended.",
    author: "Joseph G.",
    location: "Verified Review",
    source: "BuildZoom",
    stars: 5,
  },
  {
    quote: "The crew transformed our 1960s kitchen into something you'd see in a magazine. The counters, the cabinets, the new flooring: every detail was clean. Finished three days ahead of schedule.",
    author: "Maria V.",
    location: "Hawthorne, CA",
    source: "Customer",
    stars: 5,
  },
  {
    quote: "Built our ADU from permits to move-in in about four months. They handled the city inspections, the plumbing, everything. My tenant moved in last spring and loves it.",
    author: "Robert K.",
    location: "Lawndale, CA",
    source: "Customer",
    stars: 5,
  },
];

export default function Testimonials() {
  const [active, setActive] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setActive((prev) => (prev + 1) % testimonials.length);
    }, 6000);
    return () => clearInterval(timer);
  }, []);

  const t = testimonials[active];

  return (
    <section className="section-gap bg-[#111111]">
      <div className="max-w-5xl mx-auto px-6 text-center">

        <p className="text-[11px] font-medium tracking-[0.22em] uppercase text-white/55 mb-3">
          What Clients Say
        </p>

        <div className="relative min-h-[220px] flex items-center justify-center">
          <AnimatePresence mode="wait">
            <motion.div
              key={active}
              initial={{ opacity: 0, y: 14 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -14 }}
              transition={{ duration: 0.5, ease: [0.16, 1, 0.3, 1] as [number, number, number, number] }}
              className="text-center"
            >
              <Quotes size={32} weight="fill" className="text-white/35 mx-auto mb-6" />
              <p className="heading-display text-2xl md:text-[2rem] text-white/95 leading-snug tracking-tight max-w-[700px] mx-auto mb-8">
                &ldquo;{t.quote}&rdquo;
              </p>
              <div className="flex items-center justify-center gap-1 mb-3">
                {Array.from({ length: t.stars }).map((_, i) => (
                  <Star key={i} size={14} weight="fill" className="text-amber-400" />
                ))}
              </div>
              <p className="font-semibold text-white text-sm">{t.author}</p>
              <p className="text-xs text-white/55 mt-0.5">
                {t.location} &middot; {t.source}
              </p>
            </motion.div>
          </AnimatePresence>
        </div>

        {/* Dots */}
        <div className="flex items-center justify-center gap-2 mt-8">
          {testimonials.map((_, i) => (
            <button
              key={i}
              onClick={() => setActive(i)}
              className={`rounded-full transition-all duration-300 ${
                i === active ? "w-6 h-[3px] bg-white/80" : "w-3 h-[3px] bg-white/20 hover:bg-white/40"
              }`}
              aria-label={`Testimonial ${i + 1}`}
            />
          ))}
        </div>
      </div>
    </section>
  );
}
