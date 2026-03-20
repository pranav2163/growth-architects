import { useScrollReveal } from "@/hooks/useScrollReveal";
import { Button } from "@/components/ui/button";

const CTASection = () => {
  const ref = useScrollReveal({ staggerChildren: true, staggerDelay: 120, direction: "scale" });

  return (
    <section id="contact" className="section-padding bg-charcoal text-warm-white">
      <div ref={ref} className="max-w-3xl mx-auto text-center">
        <p data-reveal className="label-upper mb-6">Limited Availability</p>
        <h2 data-reveal className="text-3xl md:text-5xl lg:text-6xl font-display font-600 tracking-tight leading-[1] text-balance mb-8">
          Your competitors are already investing in their digital presence.
        </h2>
        <p data-reveal className="text-base md:text-lg text-warm-white/60 max-w-xl mx-auto mb-12 text-pretty">
          I take on a limited number of projects each month to ensure every client 
          receives the strategic attention they deserve. Let's discuss if we're the right fit.
        </p>
        <div data-reveal className="flex flex-wrap justify-center gap-4">
          <Button variant="hero" size="xl" className="hover-lift">
            Book Your Strategy Call
          </Button>
        </div>
        <p data-reveal className="mt-8 text-xs text-warm-white/40 tracking-wide">
          No obligation · Response within 24 hours · Only 3 spots available this month
        </p>
      </div>
    </section>
  );
};

export default CTASection;
