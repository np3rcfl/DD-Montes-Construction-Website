import Link from "next/link";
import Image from "next/image";
import { Phone, MapPin, Certificate, InstagramLogo } from "@phosphor-icons/react/dist/ssr";

export default function Footer() {
  return (
    <footer className="bg-[#161616] text-white font-sans">
      <div className="max-w-7xl mx-auto px-6 pt-16 pb-8">
        <div className="grid grid-cols-1 md:grid-cols-12 gap-12 pb-12 border-b border-white/10">

          {/* Brand col */}
          <div className="md:col-span-4">
            {/* Logo framed in cream card so original colors stay intact on dark bg */}
            <div className="inline-block rounded-xl bg-[#F0EDE8] px-5 py-3 mb-6 ring-1 ring-white/8 hover:ring-white/16 hover:shadow-[0_0_28px_rgba(240,237,232,0.1)] transition-all duration-500 cursor-default">
              <Image
                src="/images/logo.png"
                alt="DD Montes Construction"
                width={160}
                height={60}
                className="h-9 w-auto object-contain"
              />
            </div>
            <p className="text-sm text-white/50 leading-relaxed max-w-[280px]">
              Licensed general contractor serving Hawthorne and the South Bay since day one. Every project permitted, inspected, and built to last.
            </p>
            <div className="flex items-center gap-3 mt-6">
              <a
                href="https://www.instagram.com/"
                target="_blank"
                rel="noopener noreferrer"
                className="w-9 h-9 rounded-full bg-white/10 flex items-center justify-center hover:bg-white/20 transition-colors"
                aria-label="Instagram"
              >
                <InstagramLogo size={16} weight="light" />
              </a>
            </div>
          </div>

          {/* Nav col */}
          <div className="md:col-span-2 md:col-start-6">
            <p className="text-xs font-medium tracking-widest uppercase text-[#2451a3] mb-4">
              Navigation
            </p>
            <nav className="flex flex-col gap-3">
              {[
                { href: "/", label: "Home" },
                { href: "/services", label: "Services" },
                { href: "/projects", label: "Projects" },
                { href: "/about", label: "About" },
              ].map((link) => (
                <Link
                  key={link.href}
                  href={link.href}
                  className="text-sm text-white/60 hover:text-white transition-colors"
                >
                  {link.label}
                </Link>
              ))}
            </nav>
          </div>

          {/* Services col */}
          <div className="md:col-span-2">
            <p className="text-xs font-medium tracking-widest uppercase text-[#2451a3] mb-4">
              Services
            </p>
            <div className="flex flex-col gap-3">
              {[
                "Kitchen Remodels",
                "ADU Construction",
                "Home Additions",
                "New Construction",
                "Roofing",
                "Plans & Permits",
              ].map((s) => (
                <Link
                  key={s}
                  href="/services"
                  className="text-sm text-white/60 hover:text-white transition-colors"
                >
                  {s}
                </Link>
              ))}
            </div>
          </div>

          {/* Contact col */}
          <div className="md:col-span-3 md:col-start-10">
            <p className="text-xs font-medium tracking-widest uppercase text-[#2451a3] mb-4">
              Contact
            </p>
            <div className="flex flex-col gap-4">
              <a
                href="tel:+13103212214"
                className="flex items-start gap-3 text-sm text-white/60 hover:text-white transition-colors"
              >
                <Phone size={15} weight="bold" className="mt-0.5 shrink-0 text-white/45" />
                (310) 321-2214
              </a>
              <div className="flex items-start gap-3 text-sm text-white/60">
                <MapPin size={15} weight="bold" className="mt-0.5 shrink-0 text-white/45" />
                <span>
                  3318 Rosecrans Ave<br />
                  Hawthorne, CA 90250
                </span>
              </div>
              <div className="flex items-start gap-3 text-sm text-white/60">
                <Certificate size={15} weight="bold" className="mt-0.5 shrink-0 text-white/45" />
                <span>CSLB License #B1049017<br />Bonded &amp; Insured</span>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom bar */}
        <div className="pt-8 flex flex-col md:flex-row items-center justify-between gap-4 text-xs text-white/30">
          <p>© {new Date().getFullYear()} DD Montes Construction Inc. All rights reserved.</p>
          <p>
            Serving South Bay homeowners: Hawthorne · Lawndale · Gardena · Inglewood · Torrance · El Segundo
          </p>
        </div>
      </div>
    </footer>
  );
}
