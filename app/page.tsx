import Hero from "@/components/Hero";
import TrustStrip from "@/components/TrustStrip";
import ServicesGrid from "@/components/ServicesGrid";
import FeaturedProjects from "@/components/FeaturedProjects";
import Testimonials from "@/components/Testimonials";
import ServiceArea from "@/components/ServiceArea";
import CTABanner from "@/components/CTABanner";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "DD Montes Construction | General Contractor in Hawthorne, CA",
  description:
    "Licensed general contractor (CSLB B1049017) serving Hawthorne and the South Bay. Kitchen remodels, ADU construction, home additions, and full renovations. Bonded & insured.",
};

export default function HomePage() {
  return (
    <>
      <Hero />
      <TrustStrip />
      <ServicesGrid />
      <FeaturedProjects />
      <Testimonials />
      <ServiceArea />
      <CTABanner />
    </>
  );
}
