import { useScrollReveal } from "@/hooks/useScrollReveal";
import { Button } from "@/components/ui/button";
import { Check } from "lucide-react";

const tiers = [
  {
    name: "Starter",
    price: "₹20,000",
    desc: "For founders who need a sharp online presence — fast.",
    features: [
      "Single-page responsive website",
      "Mobile-optimized design",
      "Basic SEO setup",
      "Contact form integration",
      "3-day delivery",
    ],
    featured: false,
  },
  {
    name: "Growth",
    price: "₹50,000",
    desc: "For brands ready to scale with a conversion machine.",
    features: [
      "Multi-page custom website",
      "Conversion-focused UX design",
      "Advanced SEO & analytics",
      "CMS integration",
      "Lead capture systems",
      "30-day post-launch support",
    ],
    featured: true,
  },
  {
    name: "Premium",
    price: "₹1,00,000+",
    desc: "Full-scale digital transformation. The complete package.",
    features: [
      "Everything in Growth",
      "Brand identity design",
      "Custom animations & interactions",
      "E-commerce / SaaS integration",
      "Performance optimization",
      "90-day strategic partnership",
    ],
    featured: false,
  },
];

const PricingSection = () => {
  const headerRef = useScrollReveal({ direction: "scale" });
  const gridRef = useScrollReveal({ staggerChildren: true, staggerDelay: 200, delay: 200 });

  const scrollToContact = () => {
    document.getElementById("contact")?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <section id="pricing" className="section-padding bg-secondary">
      <div className="max-w-7xl mx-auto">
        <div ref={headerRef} className="text-center mb-16">
          <p className="label-upper mb-4">Investment</p>
          <h2 className="heading-lg text-balance">
            Choose your growth trajectory.
          </h2>
        </div>

        <div ref={gridRef} className="grid md:grid-cols-3 gap-6">
          {tiers.map((t, i) => (
            <div
              key={i}
              data-reveal
              className={`p-8 md:p-10 rounded hover-lift ${
                t.featured
                  ? "bg-charcoal text-warm-white shadow-2xl ring-1 ring-gold/20 scale-[1.02] hover-glow"
                  : "bg-background shadow-lg"
              }`}
            >
              {t.featured && (
                <p className="label-upper mb-4">Most Popular</p>
              )}
              <h3 className="text-2xl font-display font-600">{t.name}</h3>
              <p className="text-3xl font-display font-700 mt-4">{t.price}</p>
              <p className={`text-sm mt-3 mb-8 ${t.featured ? "text-warm-white/60" : "text-warm-gray"}`}>
                {t.desc}
              </p>
              <ul className="space-y-3 mb-10">
                {t.features.map((f, j) => (
                  <li key={j} className="flex items-start gap-3 text-sm">
                    <Check className="w-4 h-4 mt-0.5 shrink-0 text-gold" />
                    <span className={t.featured ? "text-warm-white/80" : ""}>{f}</span>
                  </li>
                ))}
              </ul>
              <Button
                variant={t.featured ? "hero" : "heroOutline"}
                className="w-full hover-lift"
                onClick={scrollToContact}
              >
                Get Started
              </Button>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default PricingSection;
