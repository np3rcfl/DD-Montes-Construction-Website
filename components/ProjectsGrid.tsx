"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Image from "next/image";
import { SubtleGrid } from "@/components/ui/background-components";

const projects = [
  {
    image: "/images/finished-kitchen.jpg",
    alt: "Completed modern kitchen remodel with white shaker cabinets and quartz countertops",
    title: "Complete Home Renovation",
    category: "Kitchen",
    scope: "Second floor addition, new kitchen, updated plumbing, electrical and foundation",
    location: "Hawthorne, CA",
  },
  {
    image: "/images/finished-adu-exterior.jpg",
    alt: "Completed ADU exterior with fresh stucco, new windows, and mini-split AC",
    title: "ADU Project",
    category: "ADU",
    scope: "Full ADU build: demo, kitchen, bathroom, living space, modern systems",
    location: "South Bay, CA",
  },
  {
    image: "/images/finished-kitchen-2.jpg",
    alt: "Traditional kitchen renovation with oak cabinets and dark granite countertops",
    title: "Interior Renovation",
    category: "Kitchen",
    scope: "Open-concept conversion, kitchen remodel, fireplace redesign, new flooring",
    location: "Lawndale, CA",
  },
  {
    image: "/images/finished-bedroom.jpg",
    alt: "Completed ADU bedroom interior with clean gray walls and wood floors",
    title: "ADU Interior Finish",
    category: "ADU",
    scope: "Full interior finish: bedroom, bath, kitchen, LVP flooring throughout",
    location: "Gardena, CA",
  },
  {
    image: "/images/finished-patio.jpg",
    alt: "Completed patio cover with stucco finish and framing",
    title: "Patio Cover Addition",
    category: "Addition",
    scope: "Patio cover addition with stucco finish and LED lighting",
    location: "Hawthorne, CA",
  },
  {
    image: "/images/crew-concrete-pour.jpg",
    alt: "DD Montes Construction crew pouring concrete slab",
    title: "Renovation and Expansion",
    category: "Renovation",
    scope: "Two bedrooms, bathroom, laundry room, driveway refresh",
    location: "Inglewood, CA",
  },
  {
    image: "/images/exterior-scaffolding-1.jpg",
    alt: "Two-story residential home under construction with scaffolding",
    title: "Second Floor Addition",
    category: "Addition",
    scope: "Full second floor addition, roofing, stucco, windows",
    location: "Hawthorne, CA",
  },
  {
    image: "/images/exterior-scaffolding-2.jpg",
    alt: "Home exterior with scaffolding and crew member on roof",
    title: "Exterior Renovation",
    category: "Renovation",
    scope: "Stucco, windows, roofing and exterior repaint",
    location: "Lawndale, CA",
  },
  {
    image: "/images/crew-roofwork.jpg",
    alt: "DD Montes Construction worker on residential roof",
    title: "Full Roof Replacement",
    category: "Roofing",
    scope: "Complete tear-off and reroof, new underlayment, ridge cap",
    location: "Torrance, CA",
  },
  {
    image: "/images/crew-stucco.jpg",
    alt: "Two crew members applying fresh stucco on scaffolding",
    title: "Stucco and Exterior",
    category: "Exterior",
    scope: "Complete stucco application, lath, 3-coat system",
    location: "El Segundo, CA",
  },
  {
    image: "/images/adu-framing.jpg",
    alt: "ADU at framing stage with new foundation",
    title: "ADU Construction",
    category: "ADU",
    scope: "Framing, sheathing, electrical rough-in, MEP",
    location: "Gardena, CA",
  },
  {
    image: "/images/crew-foundation.jpg",
    alt: "Construction crew working on ADU foundation rebar grid",
    title: "Foundation and Slab",
    category: "Concrete",
    scope: "Rebar layout, vapor barrier, post-tension slab pour",
    location: "Hawthorne, CA",
  },
];

const categories = ["All", "Kitchen", "ADU", "Addition", "Renovation", "Roofing", "Exterior", "Concrete"];

const ease = [0.16, 1, 0.3, 1] as [number, number, number, number];

export default function ProjectsGrid() {
  const [active, setActive] = useState("All");

  const filtered = active === "All"
    ? projects
    : projects.filter((p) => p.category === active);

  return (
    <>
      {/* Filter bar */}
      <section className="bg-[#F8F7F4] pt-10 pb-6 px-6 border-b border-[#E2DDD6] sticky top-[68px] z-50 backdrop-blur-sm">
        <div className="max-w-7xl mx-auto">
          <div className="flex gap-2 overflow-x-auto pb-1 scrollbar-hide">
            {categories.map((cat) => (
              <button
                key={cat}
                onClick={() => setActive(cat)}
                className={`px-4 py-1.5 rounded-full text-sm font-medium border transition-all duration-250 whitespace-nowrap shrink-0 ${
                  cat === active
                    ? "bg-[#1B3E6F] text-white border-[#1B3E6F] shadow-[0_2px_8px_rgba(27,62,111,0.3)]"
                    : "border-[#E2DDD6] text-[#4A4642] bg-white hover:border-[#1B3E6F] hover:text-[#1B3E6F]"
                }`}
              >
                {cat}
              </button>
            ))}
          </div>
        </div>
      </section>

      {/* Masonry grid */}
      <section className="bg-[#F8F7F4] py-12 px-6 min-h-[50dvh] relative overflow-hidden">
        <SubtleGrid />
        <div className="max-w-7xl mx-auto">
          <AnimatePresence mode="wait">
            <motion.div
              key={active}
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.2 }}
              className="columns-1 md:columns-2 lg:columns-3 gap-5"
            >
              {filtered.length === 0 ? (
                <p className="text-[#4A4642] text-sm py-12 text-center">No projects in this category yet.</p>
              ) : (
                filtered.map((project, i) => (
                  <motion.div
                    key={project.title + project.location}
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: i * 0.05, duration: 0.4, ease }}
                    className="break-inside-avoid mb-5"
                  >
                    <motion.div
                      whileHover={{ y: -4 }}
                      transition={{ duration: 0.25 }}
                      className="group"
                    >
                      <div className="p-1.5 rounded-[1.5rem] ring-1 ring-black/6 bg-black/[0.02]">
                        <div className="rounded-[calc(1.5rem-6px)] overflow-hidden bg-white">
                          {/* Image */}
                          <div className="relative overflow-hidden">
                            <Image
                              src={project.image}
                              alt={project.alt}
                              width={800}
                              height={600}
                              className={`w-full object-cover transition-transform duration-700 group-hover:scale-[1.04] ${
                                i % 4 === 0 ? "h-[280px]" : i % 3 === 0 ? "h-[240px]" : "h-[210px]"
                              }`}
                            />
                            <span className="absolute top-3 left-3 px-2.5 py-1 bg-[#111111]/70 backdrop-blur-sm text-white text-[10px] font-medium rounded-full uppercase tracking-wide">
                              {project.category}
                            </span>
                          </div>
                          {/* Info */}
                          <div className="p-5">
                            <h3 className="font-semibold text-[#111111] tracking-tight mb-1.5">
                              {project.title}
                            </h3>
                            <p className="text-xs text-[#4A4642] leading-relaxed mb-3">
                              {project.scope}
                            </p>
                            <p className="text-xs text-[#2451a3] font-medium uppercase tracking-wide">
                              {project.location}
                            </p>
                          </div>
                        </div>
                      </div>
                    </motion.div>
                  </motion.div>
                ))
              )}
            </motion.div>
          </AnimatePresence>

          <div className="mt-10 text-center">
            <p className="text-sm text-[#4A4642]">
              New projects added regularly as we document ongoing work.{" "}
              <a href="tel:+13103212214" className="text-[#1B3E6F] hover:underline font-medium">
                Call to discuss yours.
              </a>
            </p>
          </div>
        </div>
      </section>
    </>
  );
}
