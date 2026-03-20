import { useScrollReveal } from "@/hooks/useScrollReveal";
import { ArrowUpRight } from "lucide-react";

const projects = [
  {
    title: "VentureStack",
    category: "SaaS Landing Page",
    result: "4.2× increase in demo signups",
    color: "bg-charcoal",
  },
  {
    title: "Bloom & Root",
    category: "E-Commerce Redesign",
    result: "₹18L revenue in first quarter",
    color: "bg-charcoal-light",
  },
  {
    title: "CoachIQ",
    category: "Personal Brand Website",
    result: "312% growth in inbound leads",
    color: "bg-charcoal",
  },
];

const PortfolioSection = () => {
  const ref = useScrollReveal();

  return (
    <section id="portfolio" className="section-padding" ref={ref}>
      <div className="max-w-7xl mx-auto">
        <p className="label-upper mb-4">Selected Work</p>
        <h2 className="heading-lg text-balance max-w-2xl gold-line">
          Results speak. Loudly.
        </h2>

        <div className="mt-16 grid md:grid-cols-3 gap-6">
          {projects.map((p, i) => (
            <div
              key={i}
              className={`${p.color} rounded overflow-hidden group cursor-pointer`}
            >
              <div className="aspect-[4/3] flex items-center justify-center">
                <span className="text-3xl font-display font-600 text-warm-white/20 group-hover:text-warm-white/40 transition-colors">
                  {p.title}
                </span>
              </div>
              <div className="p-6 border-t border-warm-white/10">
                <div className="flex items-center justify-between mb-2">
                  <p className="text-xs font-medium tracking-wider uppercase text-gold">{p.category}</p>
                  <ArrowUpRight className="w-4 h-4 text-warm-white/40 group-hover:text-gold transition-colors" />
                </div>
                <h3 className="text-lg font-display font-500 text-warm-white">{p.title}</h3>
                <p className="text-sm text-warm-white/60 mt-1">{p.result}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default PortfolioSection;
