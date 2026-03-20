import { useScrollReveal } from "@/hooks/useScrollReveal";

const steps = [
  {
    num: "01",
    title: "Discovery & Strategy",
    desc: "We audit your market, competitors, and audience. Then craft a conversion blueprint tailored to your goals.",
  },
  {
    num: "02",
    title: "Design & Architecture",
    desc: "Premium UI/UX design with wireframes and prototypes. You approve every detail before a line of code is written.",
  },
  {
    num: "03",
    title: "Development & Testing",
    desc: "Clean, performant code built on modern frameworks. Rigorous cross-device testing ensures flawless execution.",
  },
  {
    num: "04",
    title: "Launch & Optimize",
    desc: "Strategic launch with SEO foundation, analytics setup, and 30-day post-launch performance monitoring.",
  },
];

const ProcessSection = () => {
  const headerRef = useScrollReveal({ direction: "left" });
  const stepsRef = useScrollReveal({ staggerChildren: true, staggerDelay: 150, delay: 200 });

  return (
    <section id="process" className="section-padding bg-charcoal text-warm-white">
      <div className="max-w-7xl mx-auto">
        <div ref={headerRef}>
          <p className="label-upper mb-4">The Process</p>
          <h2 className="heading-lg text-balance max-w-2xl mb-16" style={{ color: "hsl(var(--warm-white))" }}>
            Precision at every phase.
          </h2>
        </div>

        <div ref={stepsRef} className="grid md:grid-cols-2 lg:grid-cols-4 gap-12">
          {steps.map((s, i) => (
            <div key={i} data-reveal className="relative group">
              <span className="text-6xl font-display font-700 text-warm-white/10 transition-colors duration-500 group-hover:text-gold/20">{s.num}</span>
              <h3 className="text-lg font-600 mt-4 mb-3 transition-colors duration-300 group-hover:text-gold">{s.title}</h3>
              <p className="text-sm leading-relaxed text-warm-white/60">{s.desc}</p>
              {i < steps.length - 1 && (
                <div className="hidden lg:block absolute top-8 right-0 translate-x-1/2 w-12 h-px bg-gold/30" />
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ProcessSection;
