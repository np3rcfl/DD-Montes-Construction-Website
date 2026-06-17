import Link from "next/link";
import Image from "next/image";
import FadeIn from "@/components/FadeIn";
import CTABanner from "@/components/CTABanner";
import ServicesHero from "@/components/ServicesHero";
import { CheckCircle, ArrowUpRight } from "@phosphor-icons/react/dist/ssr";
import { SubtleGlow, SubtleGrid } from "@/components/ui/background-components";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Construction Services | Kitchen Remodels, ADU, Renovations | Hawthorne CA",
  description:
    "Full-service general contractor in Hawthorne, CA. Kitchen remodels, ADU construction, home additions, roofing, and more. CSLB licensed B1049017.",
};

const services = [
  {
    title: "Kitchen Remodels",
    image: "/images/finished-kitchen.jpg",
    imageAlt: "Completed kitchen remodel with white shaker cabinets and quartz countertops",
    description:
      "Your kitchen is the heart of your home. We handle complete kitchen transformations: from demo and rough framing to final hardware and touch-up paint. Every trade, one contractor.",
    includes: [
      "Cabinet installation & custom millwork",
      "Countertop fabrication & installation",
      "Tile backsplash",
      "Flooring (hardwood, LVP, tile)",
      "Plumbing rough-in & fixture installation",
      "Electrical panel upgrades & lighting",
      "City permits & final inspection",
    ],
  },
  {
    title: "ADU Construction",
    image: "/images/finished-adu-exterior.jpg",
    imageAlt: "Completed ADU exterior with fresh stucco and modern windows",
    description:
      "Accessory dwelling units are one of the best ways to add value and rental income to your property. We manage the entire ADU build, from architectural plans and permit processing through final sign-off.",
    includes: [
      "Architectural drawings & permit processing",
      "Foundation (slab, raised, basement)",
      "Framing, sheathing & roofing",
      "Electrical, plumbing & HVAC",
      "Insulation & drywall",
      "Kitchen, bath & interior finishes",
      "City inspections & final COO",
    ],
  },
  {
    title: "Home Additions & Second Floors",
    image: "/images/exterior-scaffolding-1.jpg",
    imageAlt: "Two-story home addition under construction with scaffolding",
    description:
      "Need more space without moving? A well-designed addition or second floor can double your square footage and dramatically increase property value. We handle structural engineering coordination, permits, and every trade from foundation to finishes.",
    includes: [
      "Structural engineering coordination",
      "Foundation and footing work",
      "Framing & second floor deck",
      "Roof tie-in to existing structure",
      "MEP (mechanical, electrical, plumbing)",
      "Interior finishes matching existing home",
      "All city permits & inspections",
    ],
  },
  {
    title: "General Remodeling & Renovations",
    image: "/images/blueprints-framing.jpg",
    imageAlt: "Construction blueprints on site with interior framing in background",
    description:
      "Full interior renovations and room-by-room remodels. Whether it's opening up a floor plan, redoing all the bathrooms, or refreshing every surface in a property, we coordinate every trade and keep the job moving.",
    includes: [
      "Demolition & debris removal",
      "Structural wall removal (with engineering)",
      "Bathroom & laundry remodels",
      "Flooring throughout",
      "Interior & exterior painting",
      "Window & door replacement",
      "Electrical & plumbing updates",
    ],
  },
  {
    title: "Roofing & Exterior",
    image: "/images/crew-roofwork.jpg",
    imageAlt: "DD Montes Construction crew working on residential roofing project",
    description:
      "Complete roofing replacements, stucco, siding, and exterior renovations. We work on residential and light commercial projects with licensed roofing and exterior crews.",
    includes: [
      "Full roof replacement (shingle, tile, flat)",
      "Roof deck repair & underlayment",
      "Stucco & lath application",
      "Siding installation & repair",
      "Gutters & downspouts",
      "Exterior painting & waterproofing",
    ],
  },
  {
    title: "Concrete & Foundation Work",
    image: "/images/crew-concrete-pour.jpg",
    imageAlt: "Construction crew pouring concrete slab on active job site",
    description:
      "Slabs, foundations, driveways, and flatwork. Our concrete crews handle everything from ADU foundations and retaining walls to driveway replacement and patio pours.",
    includes: [
      "Slab foundations (post-tension & conventional)",
      "Stem wall & raised foundations",
      "Retaining walls",
      "Driveway replacement & repair",
      "Patio & walkway pours",
      "Drainage & grading",
    ],
  },
];

export default function ServicesPage() {
  return (
    <>
      <ServicesHero />

      {/* Trust strip */}
      <section className="bg-[#0D0D0D] py-10 px-6 border-b border-white/5">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-2 md:flex md:flex-wrap md:justify-around gap-6 md:gap-8">
            {[
              { value: "B1049017", label: "CSLB Licensed" },
              { value: "15+", label: "Years in Business" },
              { value: "100%", label: "Permitted Work" },
              { value: "14", label: "Cities Served" },
            ].map(({ value, label }) => (
              <div key={label} className="text-center">
                <div className="text-2xl font-bold text-white tracking-tight">{value}</div>
                <div className="text-[10px] text-white/35 uppercase tracking-widest mt-0.5">{label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Service sections — alternating dark/cream */}
      {services.map((service, i) => {
        const isDark = i % 2 === 0;
        const imgLeft = i % 2 === 0;

        return (
          <section
            key={service.title}
            className={`relative overflow-hidden py-24 px-6 ${isDark ? "bg-[#111111]" : "bg-[#F8F7F4]"}`}
          >
            {isDark ? (
              <SubtleGlow color="#1B3E6F" position={i % 4 === 0 ? "bottom" : "top"} />
            ) : (
              <SubtleGrid />
            )}

            {/* Faint background number */}
            <div
              aria-hidden="true"
              className="absolute right-4 top-1/2 -translate-y-1/2 text-[20rem] font-bold leading-none select-none pointer-events-none"
              style={{
                opacity: isDark ? 0.025 : 0.045,
                color: isDark ? "#ffffff" : "#111111",
              }}
            >
              {String(i + 1).padStart(2, "0")}
            </div>

            <div className="max-w-7xl mx-auto relative z-10">
              <div
                className={`grid grid-cols-1 lg:grid-cols-12 gap-12 items-center ${
                  !imgLeft ? "lg:[&>*:first-child]:order-2" : ""
                }`}
              >
                {/* Image */}
                <FadeIn direction={imgLeft ? "left" : "right"} className="lg:col-span-5">
                  <div className="relative rounded-2xl overflow-hidden group ring-1 ring-white/8">
                    <Image
                      src={service.image}
                      alt={service.imageAlt}
                      width={800}
                      height={600}
                      className="w-full h-[380px] object-cover transition-transform duration-700 group-hover:scale-[1.03]"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/10 to-transparent" />
                    <div className="absolute bottom-4 left-4">
                      <span className="inline-block px-3 py-1 bg-[#2D6B4F] text-white text-[10px] font-bold rounded-full uppercase tracking-wide">
                        {service.title}
                      </span>
                    </div>
                  </div>
                </FadeIn>

                {/* Content */}
                <FadeIn direction={imgLeft ? "right" : "left"} delay={0.1} className="lg:col-span-7">
                  <p
                    className={`text-[11px] font-bold tracking-[0.3em] uppercase mb-4 ${
                      isDark ? "text-white/20" : "text-[#4A4642]/40"
                    }`}
                  >
                    {String(i + 1).padStart(2, "0")}
                  </p>
                  <h2
                    className={`heading-display text-3xl md:text-4xl tracking-tight mb-4 ${
                      isDark ? "text-white" : "text-[#111111]"
                    }`}
                  >
                    {service.title}
                  </h2>
                  <p
                    className={`leading-relaxed mb-6 max-w-[520px] ${
                      isDark ? "text-white/60" : "text-[#4A4642]"
                    }`}
                  >
                    {service.description}
                  </p>
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-2 mb-8">
                    {service.includes.map((item) => (
                      <div
                        key={item}
                        className={`flex items-start gap-2.5 text-sm ${
                          isDark ? "text-white/55" : "text-[#4A4642]"
                        }`}
                      >
                        <CheckCircle
                          size={15}
                          weight="fill"
                          className={`shrink-0 mt-0.5 ${isDark ? "text-[#2D6B4F]" : "text-[#1B3E6F]"}`}
                        />
                        {item}
                      </div>
                    ))}
                  </div>
                  <Link
                    href="/about#contact"
                    className="inline-flex items-center gap-2 px-5 py-3 bg-[#1B3E6F] text-white text-sm font-medium rounded-md hover:bg-[#2451a3] transition-all duration-200 active:scale-[0.98]"
                  >
                    Get an Estimate
                    <ArrowUpRight size={14} weight="bold" />
                  </Link>
                </FadeIn>
              </div>
            </div>
          </section>
        );
      })}

      <CTABanner />
    </>
  );
}
