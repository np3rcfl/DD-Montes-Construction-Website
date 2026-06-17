"use client";

import React from "react";
import { motion } from "framer-motion";
import Link from "next/link";
import { LucideIcon } from "lucide-react";
import { cn } from "@/lib/utils";

interface NavItem {
  name: string;
  url: string;
  icon: LucideIcon;
}

interface TubelightNavProps {
  items: NavItem[];
  activeTab: string;
  onTabChange?: (name: string) => void;
  className?: string;
}

export function TubelightNav({ items, activeTab, onTabChange, className }: TubelightNavProps) {
  return (
    <div
      className={cn(
        "flex items-center gap-1 bg-white/8 border border-white/15 backdrop-blur-md py-1 px-1.5 rounded-full",
        className
      )}
    >
      {items.map((item) => {
        const Icon = item.icon;
        const isActive = activeTab === item.name;

        return (
          <Link
            key={item.name}
            href={item.url}
            onClick={() => onTabChange?.(item.name)}
            className={cn(
              "relative cursor-pointer text-sm font-medium px-5 py-2 rounded-full transition-colors duration-200",
              isActive ? "text-white" : "text-white/55 hover:text-white/85"
            )}
          >
            <span className="hidden md:inline">{item.name}</span>
            <span className="md:hidden">
              <Icon size={17} strokeWidth={2} />
            </span>

            {isActive && (
              <motion.div
                layoutId="nav-lamp"
                className="absolute inset-0 bg-white/10 rounded-full -z-10"
                initial={false}
                transition={{ type: "spring", stiffness: 350, damping: 32 }}
              >
                {/* The glowing tube light above the active item */}
                <div className="absolute -top-px left-1/2 -translate-x-1/2 w-10 h-0.5 bg-[#2451a3] rounded-full">
                  <div className="absolute w-14 h-5 bg-[#2451a3]/25 rounded-full blur-md -top-1.5 -left-2" />
                  <div className="absolute w-10 h-4 bg-[#2451a3]/20 rounded-full blur-md -top-1" />
                  <div className="absolute w-5 h-3 bg-[#2451a3]/30 rounded-full blur-sm top-0 left-2.5" />
                </div>
              </motion.div>
            )}
          </Link>
        );
      })}
    </div>
  );
}
