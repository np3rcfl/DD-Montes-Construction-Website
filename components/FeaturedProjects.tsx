"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import Link from "next/link";
import { ArrowUpRight } from "@phosphor-icons/react";
import { SubtleGlow } from "@/components/ui/background-components";

const projects = [
  {
    image: "/images/finished-kitchen.jpg",
    alt: "Completed modern kitchen remodel — white shaker cabinets, quartz counters",
    label: "Kitchen & Living",
    title: "Complete Home Renovation",
    scope: "Second floor addition · New kitchen · Updated plumbing & electrical",
    location: "Hawthorne, CA",
  },
  {
    image: "/images/finished-adu-exterior.jpg",
    alt: "Completed ADU exterior — fresh stucco, new windows, mini-split AC unit",
    label: "ADU",
    title: "Accessory Dwelling Unit",
    scope: "Demo · Kitchen · Bath · Living space · Modern systems",
    location: "South Bay, CA",
  },
  {
    image: "/images/finished-kitchen-2.jpg",
    alt: "Traditional kitchen renovation — oak cabinetry, dark granite countertops",
    label: "Kitchen Remodel",
    title: "Interior Renovation",
    scope: "Open-concept · Kitchen remodel · New flooring throughout",
    location: "Lawndale, CA",
  },
  {
    image: "/images/crew-interior-pour.jpg",
    alt: "DD Montes Construction crew pouring concrete slab for ADU",
    label: "ADU Framing",
    title: "Renovation & Expansion",
    scope: "Two bedrooms · Bath · Laundry room · Driveway refresh",
    location: "Gardena, CA",
  },
];

function fadeInProps(delay: number = 0) {
  return {
    initial: { opacity: 0, y: 28 },
    whileInView: { opacity: 1, y: 0 } as const,
    viewport: { once: true, amount: 0.1 },
    transition: { duration: 0.7, delay, ease: [0.16, 1, 0.3, 1] as [number, number, number, number] },
  };
}

export default function FeaturedProjects() {
  return (
    <section className="section-gap bg-gradient-to-b from-[#1C1A1A] to-[#111111] relative overflow-hidden">
      <SubtleGlow color="#2451a3" position="top" />
      <div className="max-w-7xl mx-auto px-6 relative z-10">
        {/* Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-12">
          <div>
            <p className="text-xs font-medium tracking-widest uppercase text-white/55 mb-3">
              Our Work
            </p>
            <h2 className="heading-display text-4xl md:text-5xl tracking-tight leading-none text-white">
              Projects That
              <br />
              Speak For Themselves.
            </h2>
          </div>
          <Link
            href="/projects"
            className="inline-flex items-center gap-2 text-sm font-medium text-white/60 hover:text-white transition-colors shrink-0"
          >
            View All Projects
            <ArrowUpRight size={15} weight="bold" />
          </Link>
        </div>

        {/* Asymmetric project grid */}
        <div className="grid grid-cols-1 md:grid-cols-12 gap-4">
          {/* Feature project — large */}
          <motion.div
            {...fadeInProps(0)}
            className="md:col-span-7 group cursor-pointer"
          >
            <Link href="/projects">
              <div className="relative overflow-hidden rounded-[1.75rem] ring-1 ring-white/10">
                <Image
                  src={projects[0].image}
                  alt={projects[0].alt}
                  width={2048}
                  height={1536}
                  className="w-full h-[380px] object-cover transition-transform duration-700 group-hover:scale-[1.03]"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent" />
                <div className="absolute bottom-0 left-0 right-0 p-6">
                  <span className="inline-block px-3 py-1 bg-[#2D6B4F] text-white text-xs font-medium rounded-full mb-3 uppercase tracking-wide">
                    {projects[0].label}
                  </span>
                  <h3 className="text-xl font-bold text-white tracking-tight mb-1">
                    {projects[0].title}
                  </h3>
                  <p className="text-sm text-white/60">{projects[0].scope}</p>
                </div>
              </div>
            </Link>
          </motion.div>

          {/* Right column — 2 stacked */}
          <div className="md:col-span-5 flex flex-col gap-4">
            {projects.slice(1, 3).map((project, i) => (
              <motion.div
                key={project.title}
                {...fadeInProps((i + 1) * 0.1)}
                className="group cursor-pointer flex-1"
              >
                <Link href="/projects">
                  <div className="relative overflow-hidden rounded-[1.5rem] ring-1 ring-white/10 h-[175px]">
                    <Image
                      src={project.image}
                      alt={project.alt}
                      width={800}
                      height={600}
                      className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-[1.04]"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/75 via-black/15 to-transparent" />
                    <div className="absolute bottom-0 left-0 right-0 p-4">
                      <span className="inline-block px-2.5 py-0.5 bg-[#2D6B4F] text-white text-[10px] font-medium rounded-full mb-2 uppercase tracking-wide">
                        {project.label}
                      </span>
                      <h3 className="text-sm font-bold text-white tracking-tight">
                        {project.title}
                      </h3>
                    </div>
                  </div>
                </Link>
              </motion.div>
            ))}
          </div>

          {/* Bottom wide card */}
          <motion.div
            {...fadeInProps(0.3)}
            className="md:col-span-12 group cursor-pointer"
          >
            <Link href="/projects">
              <div className="relative overflow-hidden rounded-[1.75rem] ring-1 ring-white/10 h-[200px]">
                <Image
                  src="/images/crew-concrete-pour.jpg"
                  alt="DD Montes Construction crew at work — concrete pour on active job site"
                  width={2048}
                  height={1536}
                  className="w-full h-full object-cover object-center transition-transform duration-700 group-hover:scale-[1.02]"
                />
                <div className="absolute inset-0 bg-gradient-to-r from-black/70 via-black/30 to-transparent" />
                <div className="absolute left-0 top-0 bottom-0 flex items-center p-8">
                  <div>
                    <p className="text-xs font-medium tracking-widest uppercase text-white/55 mb-2">
                      Active Job Site
                    </p>
                    <h3 className="text-2xl font-bold text-white tracking-tight">
                      Renovation &amp; Expansion
                    </h3>
                    <p className="text-sm text-white/60 mt-1">
                      Two bedrooms · Bath · Laundry · Concrete work
                    </p>
                  </div>
                </div>
              </div>
            </Link>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
