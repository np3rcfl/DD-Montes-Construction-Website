import Link from "next/link";
import { Phone } from "@phosphor-icons/react/dist/ssr";
import FadeIn from "@/components/FadeIn";
import { SubtleGlow } from "@/components/ui/background-components";

export default function CTABanner() {
  return (
    <section className="bg-[#0D0D0D] py-20 px-6 relative overflow-hidden">
      <SubtleGlow color="#1B3E6F" position="center" />
      <FadeIn className="max-w-4xl mx-auto text-center relative z-10">
        <p className="text-xs font-medium tracking-widest uppercase text-white/40 mb-4">
          Start Your Project
        </p>
        <h2 className="heading-display text-4xl md:text-5xl tracking-tight text-white leading-none mb-6">
          Ready to Build?
        </h2>
        <p className="text-white/55 text-base md:text-lg max-w-[480px] mx-auto mb-10">
          Call us directly for a free estimate, or fill out a quick form and we&apos;ll get back to you within one business day.
        </p>

        <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
          <a
            href="tel:+13103212214"
            className="inline-flex items-center gap-3 px-7 py-4 bg-white text-[#111111] font-semibold rounded-md hover:bg-[#F8F7F4] transition-all duration-300 active:scale-[0.98] text-lg"
          >
            <Phone size={20} weight="bold" />
            (310) 321-2214
          </a>
          <Link
            href="/about#contact"
            className="inline-flex items-center gap-2 px-7 py-4 border border-white/25 text-white font-medium rounded-md hover:border-white/55 hover:bg-white/8 transition-all duration-300 active:scale-[0.98]"
          >
            Request Estimate Form
          </Link>
        </div>

        <p className="text-white/25 text-xs mt-8">
          CSLB License #B1049017 &middot; Bonded &middot; Insured &middot; Serving Hawthorne, Lawndale, Gardena, Inglewood &amp; South Bay
        </p>
      </FadeIn>
    </section>
  );
}
