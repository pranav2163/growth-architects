import { useScrollReveal } from "@/hooks/useScrollReveal";

const stats = [
  { value: "47+", label: "Projects Delivered" },
  { value: "₹2.4Cr+", label: "Revenue Generated for Clients" },
  { value: "98%", label: "Client Retention Rate" },
  { value: "< 72h", label: "Average Turnaround" },
];

const authorities = [
  "Trusted by founders across 12+ industries",
  "Specializing in high-conversion landing pages",
  "Performance-first architecture, every time",
  "End-to-end — from strategy to launch",
];

const TrustSection = () => {
  const ref = useScrollReveal();

  return (
    <section className="section-padding bg-secondary" ref={ref}>
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8 md:gap-12 mb-20">
          {stats.map((s, i) => (
            <div key={i} className="text-center md:text-left">
              <p className="text-3xl md:text-4xl font-display font-600 text-foreground">{s.value}</p>
              <p className="mt-2 text-sm text-warm-gray">{s.label}</p>
            </div>
          ))}
        </div>

        <div className="border-t border-border pt-16">
          <p className="label-upper mb-8">Why Industry Leaders Choose Us</p>
          <div className="grid md:grid-cols-2 gap-6">
            {authorities.map((a, i) => (
              <div key={i} className="flex items-start gap-4">
                <span className="w-2 h-2 rounded-full bg-gold mt-2 shrink-0" />
                <p className="text-lg text-foreground font-400">{a}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default TrustSection;
