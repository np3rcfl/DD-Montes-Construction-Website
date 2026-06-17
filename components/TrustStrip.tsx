"use client";

const items = [
  { value: "15+", label: "Years Experience" },
  { value: "14", label: "Cities Served" },
  { value: "100+", label: "Projects Delivered" },
  { value: "CSLB", sub: "B1049017", label: "Licensed & Bonded" },
  { value: "100%", label: "Permitted Work" },
  { value: "LA County", sub: "South Bay", label: "Service Area" },
  { value: "Bonded", label: "& Insured" },
];

const doubled = [...items, ...items];

export default function TrustStrip() {
  return (
    <section className="bg-[#0D0D0D] py-8 overflow-hidden border-y border-white/5">
      <div className="flex animate-marquee whitespace-nowrap">
        {doubled.map((item, i) => (
          <div
            key={i}
            className="inline-flex items-center gap-8 mx-10 shrink-0"
          >
            <div className="flex flex-col items-center min-w-[80px]">
              <div className="text-3xl font-bold text-white tracking-tight leading-none">
                {item.value}
              </div>
              {item.sub && (
                <div className="text-[10px] text-white/40 font-medium uppercase tracking-widest mt-0.5">
                  {item.sub}
                </div>
              )}
              <div className="text-[10px] text-white/35 font-medium uppercase tracking-widest mt-1 text-center">
                {item.label}
              </div>
            </div>
            <span className="text-white/15 text-lg font-light">·</span>
          </div>
        ))}
      </div>
    </section>
  );
}
