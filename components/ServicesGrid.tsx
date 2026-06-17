"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import {
  Wrench,
  House,
  Hammer,
  Buildings,
  Ruler,
  File,
  ArrowUpRight,
} from "@phosphor-icons/react";
import { SubtleGrid, SubtleGlow } from "@/components/ui/background-components";

const services = [
  {
    icon: Wrench,
    title: "Kitchen Remodels",
    desc: "Complete kitchen transformations: cabinets, countertops, flooring, plumbing, and electrical. We handle every trade from demo to final inspection.",
    featured: true,
  },
  {
    icon: House,
    title: "ADU Construction",
    desc: "Accessory dwelling units from permits to move-in. Foundation, framing, MEP, finishes, and city sign-off included.",
    featured: true,
  },
  {
    icon: Buildings,
    title: "Home Additions",
    desc: "Second floors, room additions, and garage conversions that blend seamlessly with your existing structure.",
    featured: false,
  },
  {
    icon: Hammer,
    title: "Full Renovations",
    desc: "Gut renovations and whole-home remodels. We coordinate every subcontractor and pull every permit.",
    featured: false,
  },
  {
    icon: Ruler,
    title: "Roofing & Exterior",
    desc: "New roofing, stucco, siding, and exterior work with full warranty coverage.",
    featured: false,
  },
  {
    icon: File,
    title: "Plans & Permits",
    desc: "Architectural drawings and permit processing with the city. We navigate the approval process for you.",
    featured: false,
  },
];

const containerVariants = {
  hidden: {},
  visible: {
    transition: { staggerChildren: 0.08 },
  },
};

const cardVariants = {
  hidden: { opacity: 0, y: 24 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.6, ease: [0.16, 1, 0.3, 1] as [number, number, number, number] },
  },
};

export default function ServicesGrid() {
  return (
    <section className="section-gap bg-[#F0EDE8] relative overflow-hidden">
      <SubtleGrid />
      <SubtleGlow position="top" />
      <div className="max-w-7xl mx-auto px-6 relative z-10">
        {/* Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-12">
          <div>
            <p className="text-xs font-medium tracking-widest uppercase text-[#2451a3] mb-3">
              What We Do
            </p>
            <h2 className="heading-display text-4xl md:text-5xl tracking-tight leading-none text-[#111111]">
              Every Trade,
              <br />
              One Contractor.
            </h2>
          </div>
          <Link
            href="/services"
            className="inline-flex items-center gap-2 text-sm font-medium text-[#1B3E6F] hover:text-[#2451a3] transition-colors shrink-0"
          >
            All Services
            <ArrowUpRight size={15} weight="bold" />
          </Link>
        </div>

        {/* Asymmetric bento grid */}
        <motion.div
          className="grid grid-cols-1 md:grid-cols-12 gap-4"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.1 }}
        >
          {/* Kitchen — large hero card */}
          <motion.div
            variants={cardVariants}
            className="md:col-span-7 group"
          >
            <div className="h-full bg-[#1B3E6F] text-white rounded-xl p-8 md:p-10 flex flex-col justify-between min-h-[260px]">
              <div>
                <Wrench size={22} weight="light" className="mb-6 opacity-70" />
                <h3 className="text-2xl font-bold tracking-tight mb-3">Kitchen Remodels</h3>
                <p className="text-white/60 text-sm leading-relaxed max-w-[340px]">
                  Complete kitchen transformations: cabinets, countertops, flooring, plumbing, and electrical. Every trade handled, every permit pulled.
                </p>
              </div>
              <Link
                href="/services"
                className="mt-8 inline-flex items-center gap-2 text-sm font-medium text-white/70 hover:text-white transition-colors group-hover:gap-3"
              >
                See scope of work
                <ArrowUpRight size={14} className="transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
              </Link>
            </div>
          </motion.div>

          {/* ADU — second large card */}
          <motion.div
            variants={cardVariants}
            className="md:col-span-5 group"
          >
            <div className="h-full bg-white rounded-xl p-8 flex flex-col justify-between min-h-[260px] ring-1 ring-black/6">
              <div>
                <House size={22} weight="light" className="mb-6 text-[#2451a3]" />
                <h3 className="text-xl font-bold tracking-tight text-[#111111] mb-3">ADU Construction</h3>
                <p className="text-[#4A4642] text-sm leading-relaxed">
                  Full ADU builds: permits, foundation, framing, mechanical, finishes, and city sign-off. Turnkey.
                </p>
              </div>
              <Link
                href="/services"
                className="mt-8 inline-flex items-center gap-2 text-sm font-medium text-[#1B3E6F] hover:text-[#2451a3] transition-colors group-hover:gap-3"
              >
                Learn more
                <ArrowUpRight size={14} className="transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
              </Link>
            </div>
          </motion.div>

          {/* Smaller 4 cards */}
          {services.slice(2).map((service) => (
            <motion.div
              key={service.title}
              variants={cardVariants}
              className="md:col-span-3 group"
            >
              <div className="h-full bg-white rounded-xl p-6 flex flex-col ring-1 ring-black/6 min-h-[180px]">
                <service.icon size={18} weight="light" className="text-[#4A4642] mb-4 opacity-70" />
                <h3 className="text-base font-semibold tracking-tight text-[#111111] mb-2">
                  {service.title}
                </h3>
                <p className="text-xs text-[#4A4642] leading-relaxed">{service.desc}</p>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
