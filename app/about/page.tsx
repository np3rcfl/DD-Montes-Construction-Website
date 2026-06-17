import Image from "next/image";
import Link from "next/link";
import FadeIn from "@/components/FadeIn";
import CTABanner from "@/components/CTABanner";
import AboutSlideshow from "@/components/AboutSlideshow";
import { Certificate, Shield, Users, Star, Phone, MapPin } from "@phosphor-icons/react/dist/ssr";
import { SubtleGrid, SubtleGlow } from "@/components/ui/background-components";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "About DD Montes Construction | Licensed GC | Hawthorne, CA",
  description:
    "Learn about DD Montes Construction Inc., CSLB licensed general contractor B1049017 in Hawthorne, CA. Licensed, bonded, and insured with 15+ years building across LA County.",
};

const trustItems = [
  {
    icon: Certificate,
    title: "CSLB Licensed",
    desc: "Active General Building license #B1049017. Licensed, bonded, and in good standing with the California Contractors State License Board.",
  },
  {
    icon: Shield,
    title: "Bonded & Insured",
    desc: "$15,000 contractor's bond through Western Surety Company. Workers' comp through State Compensation Insurance Fund.",
  },
  {
    icon: Star,
    title: "15+ Years in Business",
    desc: "Over a decade and a half building and renovating homes across Los Angeles County. Our track record is documented and publicly verifiable through CSLB.",
  },
  {
    icon: Users,
    title: "Licensed Across 14 Cities",
    desc: "We work throughout LA County and the South Bay. Same licensed crew, same standards, whether we're in Hawthorne or Manhattan Beach.",
  },
];

export default function AboutPage() {
  return (
    <>
      {/* Hero — full-bleed crew image */}
      <section className="relative min-h-[60dvh] flex items-center justify-center overflow-hidden pt-[60px]">
        <Image
          src="/images/crew-roofwork.jpg"
          alt="DD Montes Construction crew on the job"
          fill
          className="object-cover object-top"
          priority
          quality={85}
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/96 via-black/75 to-black/50" />
        <div className="relative z-10 max-w-4xl mx-auto px-6 text-center py-20">
          <FadeIn>
            <p className="text-[11px] font-medium tracking-[0.22em] uppercase text-white/55 mb-5">
              About Us
            </p>
            <h1 className="heading-display text-5xl md:text-7xl tracking-tight text-white leading-none max-w-3xl mx-auto">
              Built on Craftsmanship.
              <br />
              <span className="italic" style={{ color: "#6BA8D4" }}>Licensed Since Day One.</span>
            </h1>
          </FadeIn>
        </div>
      </section>

      {/* Company story */}
      <section className="section-gap bg-[#F8F7F4] px-6 relative overflow-hidden">
        <SubtleGrid />
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">

            {/* Photo slideshow */}
            <div className="lg:col-span-5">
              <FadeIn>
                <AboutSlideshow />
              </FadeIn>
            </div>

            {/* Story text */}
            <div className="lg:col-span-7">
              <FadeIn delay={0.1}>
                <p className="text-[11px] font-medium tracking-[0.22em] uppercase text-[#2451a3] mb-4">
                  Who We Are
                </p>
                <h2 className="heading-display text-3xl md:text-4xl tracking-tight text-[#111111] mb-6">
                  Hawthorne&apos;s Licensed
                  <br />
                  General Contractor
                </h2>
                <div className="space-y-4 text-[#4A4642] leading-relaxed">
                  <p>
                    DD Montes Construction Inc. is a licensed, bonded, and insured general contractor headquartered in Hawthorne, California. We serve residential and light commercial clients across Los Angeles County with a focus on quality craftsmanship and transparent project management.
                  </p>
                  <p>
                    Our team brings hands-on experience across kitchens, ADUs, full home renovations, second floor additions, roofing, and concrete work. We self-perform key trades and directly manage every subcontractor on every job. Nothing falls through the cracks.
                  </p>
                  <p>
                    Every project we take on is permitted and inspected. We don&apos;t cut corners on the paperwork because our clients deserve work that holds up at resale, at refinance, and at every inspection.
                  </p>
                </div>

                <div className="flex flex-wrap gap-4 mt-8">
                  <div className="px-5 py-4 bg-[#1B3E6F] rounded-lg">
                    <div className="text-2xl font-bold text-white">B1049017</div>
                    <div className="text-xs text-white/55 mt-0.5">CSLB License</div>
                  </div>
                  <div className="px-5 py-4 bg-[#111111] rounded-lg">
                    <div className="text-2xl font-bold text-white">15+</div>
                    <div className="text-xs text-white/55 mt-0.5">Years in Business</div>
                  </div>
                  <div className="px-5 py-4 bg-[#1B3E6F] rounded-lg">
                    <div className="text-2xl font-bold text-white">14</div>
                    <div className="text-xs text-white/55 mt-0.5">Cities Served</div>
                  </div>
                </div>
              </FadeIn>
            </div>
          </div>
        </div>
      </section>

      {/* Trust credentials */}
      <section className="section-gap bg-[#111111] px-6 relative overflow-hidden">
        <SubtleGlow color="#1B3E6F" position="center" />
        <div className="max-w-7xl mx-auto">
          <FadeIn>
            <p className="text-[11px] font-medium tracking-[0.22em] uppercase text-white/55 mb-3">
              Credentials
            </p>
            <h2 className="heading-display text-3xl md:text-4xl tracking-tight text-white mb-12">
              Licensed. Bonded. Verified.
            </h2>
          </FadeIn>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            {trustItems.map((item, i) => (
              <FadeIn key={item.title} delay={i * 0.08}>
                <div className="p-6 rounded-xl bg-white/5 ring-1 ring-white/8 h-full">
                  <item.icon size={20} weight="light" className="text-[#6BA8D4] mb-4" />
                  <h3 className="text-base font-semibold text-white tracking-tight mb-2">
                    {item.title}
                  </h3>
                  <p className="text-sm text-white/45 leading-relaxed">{item.desc}</p>
                </div>
              </FadeIn>
            ))}
          </div>
        </div>
      </section>

      {/* Contact section */}
      <section id="contact" className="section-gap bg-[#F8F7F4] px-6 relative overflow-hidden">
        <SubtleGrid />
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            <FadeIn>
              <p className="text-[11px] font-medium tracking-[0.22em] uppercase text-[#2451a3] mb-3">
                Get In Touch
              </p>
              <h2 className="heading-display text-3xl md:text-4xl tracking-tight text-[#111111] mb-6">
                Let&apos;s Talk About
                <br />
                Your Project.
              </h2>
              <p className="text-[#4A4642] leading-relaxed mb-8 max-w-[420px]">
                Call us for a free estimate, or use the contact info below. We typically respond within one business day.
              </p>

              <div className="flex flex-col gap-5">
                <a href="tel:+13103212214" className="flex items-center gap-4 group">
                  <div className="w-12 h-12 rounded-lg bg-[#1B3E6F] flex items-center justify-center group-hover:bg-[#2451a3] transition-colors">
                    <Phone size={18} weight="bold" className="text-white" />
                  </div>
                  <div>
                    <div className="text-xs text-[#4A4642]">Phone</div>
                    <div className="font-semibold text-[#111111]">(310) 321-2214</div>
                  </div>
                </a>

                <div className="flex items-center gap-4">
                  <div className="w-12 h-12 rounded-lg bg-[#2451a3]/20 flex items-center justify-center">
                    <MapPin size={18} weight="bold" className="text-[#2451a3]" />
                  </div>
                  <div>
                    <div className="text-xs text-[#4A4642]">Office</div>
                    <div className="font-semibold text-[#111111]">3318 Rosecrans Ave, Hawthorne, CA 90250</div>
                  </div>
                </div>
              </div>
            </FadeIn>

            {/* Estimate form */}
            <FadeIn delay={0.1}>
              <div className="bg-white rounded-xl ring-1 ring-black/6 p-8">
                <h3 className="text-lg font-semibold text-[#111111] mb-6">Request a Free Estimate</h3>
                <form
                  action="mailto:info@ddmontesconstruction.com"
                  method="get"
                  encType="text/plain"
                  className="space-y-4"
                >
                  <div>
                    <label className="block text-xs font-medium text-[#4A4642] mb-1.5 uppercase tracking-wide">
                      Full Name
                    </label>
                    <input
                      type="text"
                      name="name"
                      required
                      className="w-full px-4 py-3 rounded-lg border border-[#E2DDD6] text-sm text-[#111111] bg-[#F8F7F4] focus:outline-none focus:border-[#1B3E6F] transition-colors placeholder:text-[#4A4642]/40"
                      placeholder="Your name"
                    />
                  </div>
                  <div>
                    <label className="block text-xs font-medium text-[#4A4642] mb-1.5 uppercase tracking-wide">
                      Phone Number
                    </label>
                    <input
                      type="tel"
                      name="phone"
                      required
                      className="w-full px-4 py-3 rounded-lg border border-[#E2DDD6] text-sm text-[#111111] bg-[#F8F7F4] focus:outline-none focus:border-[#1B3E6F] transition-colors placeholder:text-[#4A4642]/40"
                      placeholder="(310) 000-0000"
                    />
                  </div>
                  <div>
                    <label className="block text-xs font-medium text-[#4A4642] mb-1.5 uppercase tracking-wide">
                      Project Type
                    </label>
                    <select
                      name="project"
                      className="w-full px-4 py-3 rounded-lg border border-[#E2DDD6] text-sm text-[#111111] bg-[#F8F7F4] focus:outline-none focus:border-[#1B3E6F] transition-colors"
                    >
                      <option>Kitchen Remodel</option>
                      <option>ADU Construction</option>
                      <option>Home Addition</option>
                      <option>Full Renovation</option>
                      <option>Roofing / Exterior</option>
                      <option>Other</option>
                    </select>
                  </div>
                  <div>
                    <label className="block text-xs font-medium text-[#4A4642] mb-1.5 uppercase tracking-wide">
                      Project Details
                    </label>
                    <textarea
                      name="body"
                      rows={3}
                      className="w-full px-4 py-3 rounded-lg border border-[#E2DDD6] text-sm text-[#111111] bg-[#F8F7F4] focus:outline-none focus:border-[#1B3E6F] transition-colors resize-none placeholder:text-[#4A4642]/40"
                      placeholder="Brief description of your project..."
                    />
                  </div>
                  <button
                    type="submit"
                    className="w-full py-3.5 bg-[#1B3E6F] text-white font-medium rounded-lg hover:bg-[#2451a3] transition-all duration-200 active:scale-[0.99] text-sm"
                  >
                    Send Estimate Request
                  </button>
                </form>
              </div>
            </FadeIn>
          </div>
        </div>
      </section>

      <CTABanner />
    </>
  );
}
