"use client";

import { useEffect, useRef, useState } from "react";
import { useInView } from "framer-motion";

type Stat =
  | { type: "counter"; value: number; suffix: string; label: string }
  | { type: "text"; text: string; sub: string; label: string };

const stats: Stat[] = [
  { type: "counter", value: 15, suffix: "+", label: "Years in Business" },
  { type: "counter", value: 14, suffix: "", label: "Cities Served" },
  { type: "text", text: "CSLB", sub: "B1049017", label: "Licensed & Bonded" },
  { type: "text", text: "LA County", sub: "South Bay Focus", label: "Service Area" },
];

function Counter({ target, suffix }: { target: number; suffix: string }) {
  const [count, setCount] = useState(0);
  const ref = useRef<HTMLSpanElement>(null);
  const isInView = useInView(ref, { once: true, amount: 0.5 });

  useEffect(() => {
    if (!isInView) return;
    let start = 0;
    const duration = 1400;
    const increment = target / (duration / 16);
    const timer = setInterval(() => {
      start += increment;
      if (start >= target) {
        setCount(target);
        clearInterval(timer);
      } else {
        setCount(Math.floor(start));
      }
    }, 16);
    return () => clearInterval(timer);
  }, [isInView, target]);

  return (
    <span ref={ref} className="tabular-nums">
      {count}
      {suffix}
    </span>
  );
}

export default function TrustStrip() {
  return (
    <section className="bg-[#111111] py-12">
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid grid-cols-2 md:grid-cols-4 divide-x divide-white/10">
          {stats.map((stat) => (
            <div
              key={stat.label}
              className="flex flex-col items-center px-6 py-2 first:pl-0 last:pr-0"
            >
              {stat.type === "counter" ? (
                <div className="text-4xl md:text-5xl font-bold text-white tracking-tighter leading-none">
                  <Counter target={stat.value} suffix={stat.suffix} />
                </div>
              ) : (
                <div className="flex flex-col items-center">
                  <div className="text-3xl md:text-4xl font-bold text-white tracking-tight leading-none">
                    {stat.text}
                  </div>
                  <div className="text-[10px] text-white/50 font-medium mt-1 uppercase tracking-widest">
                    {stat.sub}
                  </div>
                </div>
              )}
              <div className="text-xs text-white/40 font-medium uppercase tracking-widest mt-2 text-center">
                {stat.label}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
