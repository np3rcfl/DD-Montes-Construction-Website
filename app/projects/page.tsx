import Image from "next/image";
import FadeIn from "@/components/FadeIn";
import CTABanner from "@/components/CTABanner";
import ProjectsGrid from "@/components/ProjectsGrid";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Project Gallery | DD Montes Construction | South Bay CA",
  description:
    "Browse completed projects by DD Montes Construction: kitchen remodels, ADU builds, home additions, and renovations across Hawthorne and the South Bay.",
};

export default function ProjectsPage() {
  return (
    <>
      {/* Hero — dark image background */}
      <section className="relative min-h-[55dvh] flex items-center justify-center overflow-hidden pt-[60px]">
        <Image
          src="/images/finished-kitchen-2.jpg"
          alt="Completed kitchen renovation by DD Montes Construction"
          fill
          className="object-cover object-center"
          priority
          quality={85}
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/96 via-black/75 to-black/50" />

        <div className="relative z-10 max-w-4xl mx-auto px-6 text-center py-20">
          <FadeIn>
            <p className="text-[11px] font-medium tracking-[0.25em] uppercase text-white/55 mb-5">
              Our Work
            </p>
            <h1 className="heading-display text-5xl md:text-7xl tracking-tight text-white leading-[0.95]">
              Every project{" "}
              <span className="italic relative inline-block">
                <span className="relative z-10 text-[#6BA8D4]">permitted.</span>
                <span
                  aria-hidden="true"
                  className="absolute -bottom-1 left-0 right-0 h-px bg-[#6BA8D4]/40"
                />
              </span>
              <br />
              Every room finished.
            </h1>
          </FadeIn>
        </div>
      </section>

      {/* Interactive filter + grid */}
      <ProjectsGrid />

      <CTABanner />
    </>
  );
}
