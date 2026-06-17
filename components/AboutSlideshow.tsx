"use client";

import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Image from "next/image";

const photos = [
  { src: "/images/crew-foundation.jpg", caption: "Foundation work, Hawthorne" },
  { src: "/images/crew-roofwork.jpg", caption: "Roofing crew on the job" },
  { src: "/images/crew-stucco.jpg", caption: "Stucco & exterior work" },
  { src: "/images/crew-concrete-pour.jpg", caption: "Concrete pour, South Bay" },
  { src: "/images/excavation-crew.jpg", caption: "Site excavation" },
  { src: "/images/adu-framing.jpg", caption: "ADU framing in progress" },
  { src: "/images/blueprints-framing.jpg", caption: "Planning & framing" },
];

export default function AboutSlideshow() {
  const [active, setActive] = useState(0);

  useEffect(() => {
    const t = setInterval(() => {
      setActive((prev) => (prev + 1) % photos.length);
    }, 4200);
    return () => clearInterval(t);
  }, []);

  return (
    <div className="relative w-full rounded-xl overflow-hidden bg-[#111111]" style={{ aspectRatio: "4/3" }}>
      <AnimatePresence mode="sync">
        <motion.div
          key={active}
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 1.1, ease: "easeInOut" }}
          className="absolute inset-0"
        >
          <Image
            src={photos[active].src}
            alt={photos[active].caption}
            fill
            className="object-cover"
            quality={85}
          />
          {/* Bottom caption */}
          <div className="absolute inset-x-0 bottom-0 h-24 bg-gradient-to-t from-black/70 to-transparent" />
          <p className="absolute bottom-4 left-4 text-[11px] text-white/50 uppercase tracking-widest font-medium">
            {photos[active].caption}
          </p>
        </motion.div>
      </AnimatePresence>

      {/* Progress dots */}
      <div className="absolute bottom-4 right-4 flex items-center gap-1.5 z-10">
        {photos.map((_, i) => (
          <button
            key={i}
            onClick={() => setActive(i)}
            className={`h-[3px] rounded-full transition-all duration-300 ${
              i === active ? "w-6 bg-white" : "w-2 bg-white/30 hover:bg-white/60"
            }`}
            aria-label={`Photo ${i + 1}`}
          />
        ))}
      </div>
    </div>
  );
}
