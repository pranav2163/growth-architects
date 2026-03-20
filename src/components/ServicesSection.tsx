import { useScrollReveal } from "@/hooks/useScrollReveal";
import { ArrowUpRight } from "lucide-react";

const services = [
  {
    title: "Conversion-First Websites",
    desc: "Strategically designed websites that turn visitors into paying customers. Every pixel engineered for revenue.",
    outcome: "3–5× more leads within 60 days",
  },
  {
    title: "Landing Page Systems",
    desc: "High-converting single-page experiences built for product launches, campaigns, and lead generation at scale.",
    outcome: "Up to 12% conversion rates",
  },
  {
    title: "Brand Identity & Web Design",
    desc: "Premium visual identity that commands attention and communicates authority before a single word is read.",
    outcome: "Instant brand credibility",
  },
  {
    title: "Performance Optimization",
    desc: "Speed audits, Core Web Vitals tuning, and infrastructure upgrades that eliminate revenue leaks.",
    outcome: "Sub-2s load times guaranteed",
  },
];

const ServicesSection = () => {
  const headerRef = useScrollReveal({ staggerChildren: true, staggerDelay: 100 });
  const gridRef = useScrollReveal({ staggerChildren: true, staggerDelay: 150, delay: 200 });

  return (
    <section id="services" className="section-padding">
      <div className="max-w-7xl mx-auto">
        <div ref={headerRef}>
          <p data-reveal className="label-upper mb-4">What We Deliver</p>
          <h2 data-reveal className="heading-lg text-balance max-w-2xl gold-line">
            Not websites. Revenue engines.
          </h2>
        </div>

        <div ref={gridRef} className="mt-16 grid md:grid-cols-2 gap-px bg-border">
          {services.map((s, i) => (
            <div
              key={i}
              data-reveal
              className="bg-background p-8 md:p-12 group card-interactive hover:bg-secondary"
            >
              <div className="flex items-start justify-between mb-6">
                <h3 className="text-xl md:text-2xl font-display font-500">{s.title}</h3>
                <ArrowUpRight className="w-5 h-5 text-warm-gray group-hover:text-gold group-hover:rotate-12 transition-all duration-300" />
              </div>
              <p className="body-lg mb-6">{s.desc}</p>
              <p className="text-sm font-medium text-gold">{s.outcome}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ServicesSection;
