"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import Image from "next/image";
import { usePathname } from "next/navigation";
import { motion, AnimatePresence } from "framer-motion";
import { List, X, Phone } from "@phosphor-icons/react";
import { Home, Wrench, LayoutGrid, Users } from "lucide-react";
import { TubelightNav } from "@/components/ui/tubelight-navbar";

const navItems = [
  { name: "Home", url: "/", icon: Home },
  { name: "Services", url: "/services", icon: Wrench },
  { name: "Projects", url: "/projects", icon: LayoutGrid },
  { name: "About", url: "/about", icon: Users },
];

const mobileLinks = [
  { href: "/", label: "Home" },
  { href: "/services", label: "Services" },
  { href: "/projects", label: "Projects" },
  { href: "/about", label: "About" },
];

function routeToTab(pathname: string): string {
  if (pathname === "/") return "Home";
  if (pathname.startsWith("/services")) return "Services";
  if (pathname.startsWith("/projects")) return "Projects";
  if (pathname.startsWith("/about")) return "About";
  return "Home";
}

export default function Nav() {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);
  const pathname = usePathname();

  useEffect(() => {
    const handler = () => setScrolled(window.scrollY > 55);
    handler();
    window.addEventListener("scroll", handler, { passive: true });
    return () => window.removeEventListener("scroll", handler);
  }, []);

  useEffect(() => setMenuOpen(false), [pathname]);

  useEffect(() => {
    document.body.style.overflow = menuOpen ? "hidden" : "";
    return () => { document.body.style.overflow = ""; };
  }, [menuOpen]);

  const isHome = pathname === "/";
  const transparent = isHome && !scrolled;
  const activeTab = routeToTab(pathname);

  return (
    <>
      <header
        className="fixed top-0 left-0 right-0 z-[100] transition-all duration-400 font-sans"
        style={{
          backgroundColor: transparent ? "transparent" : "#1B3E6F",
          boxShadow: scrolled ? "0 2px 24px rgba(0,0,0,0.28)" : "none",
        }}
      >
        <div className="max-w-7xl mx-auto flex items-center justify-between px-6 py-3">
          {/* Logo */}
          <Link href="/" className="flex items-center shrink-0 z-10">
            <Image
              src="/images/logo.png"
              alt="DD Montes Construction"
              width={140}
              height={52}
              className={`h-9 w-auto object-contain transition-all duration-300 ${transparent ? "brightness-0 invert" : ""}`}
              priority
            />
          </Link>

          {/* Desktop: Tubelight nav pill, absolutely centered */}
          <div className="hidden md:block absolute left-1/2 -translate-x-1/2">
            <TubelightNav
              items={navItems}
              activeTab={activeTab}
            />
          </div>

          {/* Desktop: right side actions */}
          <div className="hidden md:flex items-center gap-3 z-10">
            <a
              href="tel:+13103212214"
              className="flex items-center gap-1.5 text-sm font-medium text-white/55 hover:text-white transition-colors"
            >
              <Phone weight="bold" size={13} />
              (310) 321-2214
            </a>
            <Link
              href="/about#contact"
              className="inline-flex items-center gap-1.5 px-4 py-2 bg-white text-[#1B3E6F] text-sm font-semibold rounded-full hover:bg-[#F0EDE8] transition-all duration-200 active:scale-[0.97]"
            >
              Free Estimate
            </Link>
          </div>

          {/* Mobile: hamburger */}
          <button
            onClick={() => setMenuOpen(!menuOpen)}
            className="md:hidden w-9 h-9 flex items-center justify-center rounded-full bg-white/10 hover:bg-white/20 text-white transition-colors z-10"
            aria-label="Toggle menu"
          >
            <AnimatePresence mode="wait" initial={false}>
              {menuOpen ? (
                <motion.span
                  key="close"
                  initial={{ rotate: -90, opacity: 0 }}
                  animate={{ rotate: 0, opacity: 1 }}
                  exit={{ rotate: 90, opacity: 0 }}
                  transition={{ duration: 0.15 }}
                >
                  <X size={18} weight="bold" />
                </motion.span>
              ) : (
                <motion.span
                  key="open"
                  initial={{ rotate: 90, opacity: 0 }}
                  animate={{ rotate: 0, opacity: 1 }}
                  exit={{ rotate: -90, opacity: 0 }}
                  transition={{ duration: 0.15 }}
                >
                  <List size={18} weight="bold" />
                </motion.span>
              )}
            </AnimatePresence>
          </button>
        </div>
      </header>

      {/* Mobile menu overlay */}
      <AnimatePresence>
        {menuOpen && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.22 }}
            className="fixed inset-0 z-[99] bg-[#0D1F38] flex flex-col"
          >
            <div className="flex flex-col justify-center items-start h-full px-8 gap-1">
              {mobileLinks.map((link, i) => (
                <motion.div
                  key={link.href}
                  initial={{ opacity: 0, x: -24 }}
                  animate={{ opacity: 1, x: 0 }}
                  exit={{ opacity: 0, x: -24 }}
                  transition={{ delay: i * 0.055, duration: 0.3 }}
                >
                  <Link
                    href={link.href}
                    className={`block text-4xl font-bold tracking-tight py-2 ${
                      pathname === link.href ? "text-white" : "text-white/40 hover:text-white"
                    }`}
                  >
                    {link.label}
                  </Link>
                </motion.div>
              ))}

              <motion.div
                initial={{ opacity: 0, x: -24 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: -24 }}
                transition={{ delay: 0.24, duration: 0.3 }}
                className="mt-10 flex flex-col gap-4"
              >
                <a
                  href="tel:+13103212214"
                  className="flex items-center gap-2 text-base text-white/40"
                >
                  <Phone weight="bold" size={16} />
                  (310) 321-2214
                </a>
                <Link
                  href="/about#contact"
                  className="inline-flex items-center justify-center px-6 py-3 bg-white text-[#1B3E6F] text-sm font-bold rounded-full"
                >
                  Free Estimate
                </Link>
              </motion.div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
