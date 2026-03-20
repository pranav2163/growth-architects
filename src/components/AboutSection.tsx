import { useScrollReveal } from "@/hooks/useScrollReveal";

const AboutSection = () => {
  const leftRef = useScrollReveal({ direction: "left" });
  const rightRef = useScrollReveal({ staggerChildren: true, staggerDelay: 120, delay: 200 });

  return (
    <section id="about" className="section-padding">
      <div className="max-w-7xl mx-auto grid md:grid-cols-2 gap-16 items-center">
        <div ref={leftRef}>
          <p className="label-upper mb-4">The Architect</p>
          <h2 className="heading-lg gold-line">
            Obsessed with craft. Driven by results.
          </h2>
        </div>
        <div ref={rightRef}>
          <p data-reveal className="body-lg mb-6">
            I don't build websites. I engineer digital assets that generate measurable ROI 
            for ambitious founders. Every project is a strategic investment — not an expense.
          </p>
          <p data-reveal className="body-lg mb-6">
            With deep expertise in conversion psychology, modern web architecture, and 
            performance engineering, I partner with a select number of clients each quarter 
            to deliver work that moves the needle.
          </p>
          <p data-reveal className="body-lg">
            My approach is simple: understand your business, define the metrics that matter, 
            then design and build the fastest path to hit them.
          </p>

          <div data-reveal className="mt-10 flex gap-8 border-t border-border pt-8">
            <div className="group cursor-default">
              <p className="text-2xl font-display font-600 stat-number">3+</p>
              <p className="text-xs text-warm-gray mt-1">Years in the Game</p>
            </div>
            <div className="group cursor-default">
              <p className="text-2xl font-display font-600 stat-number">47+</p>
              <p className="text-xs text-warm-gray mt-1">Projects Shipped</p>
            </div>
            <div className="group cursor-default">
              <p className="text-2xl font-display font-600 stat-number">12+</p>
              <p className="text-xs text-warm-gray mt-1">Industries Served</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
