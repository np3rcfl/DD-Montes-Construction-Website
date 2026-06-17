import FadeIn from "@/components/FadeIn";
import { SubtleGlow } from "@/components/ui/background-components";

const cities = [
  "Hawthorne",
  "Lawndale",
  "Gardena",
  "Inglewood",
  "El Segundo",
  "Torrance",
  "Manhattan Beach",
  "Redondo Beach",
  "Hermosa Beach",
  "Rancho Palos Verdes",
  "Carson",
  "Compton",
  "Los Angeles",
  "South Bay",
];

export default function ServiceArea() {
  return (
    <section className="bg-[#1B3E6F] section-gap relative overflow-hidden">
      <SubtleGlow color="#2451a3" position="center" />
      <div className="max-w-7xl mx-auto px-6 relative z-10">

        {/* Header */}
        <FadeIn>
          <div className="mb-12">
            <p className="text-[11px] font-medium tracking-[0.22em] uppercase text-white/60 mb-3">
              Where We Work
            </p>
            <div className="flex flex-col md:flex-row md:items-end md:justify-between gap-4">
              <h2 className="heading-display text-4xl md:text-5xl tracking-tight text-white leading-none">
                Serving Greater<br />Los Angeles.
              </h2>
              <p className="text-white/50 text-sm leading-relaxed max-w-[340px]">
                Based in Hawthorne, we serve residential clients throughout LA County and the South Bay. Same licensed, bonded crew on every job.
              </p>
            </div>
          </div>
        </FadeIn>

        {/* Two-column: map + city list */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-start">

          {/* Google Maps embed */}
          <FadeIn>
            <div className="rounded-xl overflow-hidden ring-1 ring-white/10">
              <iframe
                src="https://maps.google.com/maps?q=South+Bay+Los+Angeles,CA&t=&z=10&ie=UTF8&iwloc=&output=embed"
                width="100%"
                height="380"
                style={{ border: 0, display: "block" }}
                loading="lazy"
                allowFullScreen
                title="DD Montes Construction service area — South Bay Los Angeles"
              />
            </div>
          </FadeIn>

          {/* City list */}
          <FadeIn delay={0.1}>
            <div className="grid grid-cols-2 gap-x-6">
              {cities.map((city) => (
                <div
                  key={city}
                  className="flex items-center gap-3 py-3.5 border-b border-white/10 text-white font-medium text-sm"
                >
                  <span className="w-1.5 h-1.5 rounded-full bg-white/40 shrink-0" />
                  {city}
                </div>
              ))}
            </div>
            <p className="text-sm text-white/40 mt-6">
              Don&apos;t see your city?{" "}
              <a href="tel:+13103212214" className="text-white/80 hover:text-white transition-colors font-medium">
                Call us: (310) 321-2214
              </a>
            </p>
          </FadeIn>
        </div>
      </div>
    </section>
  );
}
