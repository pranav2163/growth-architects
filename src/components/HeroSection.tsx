import { Button } from "@/components/ui/button";
import heroImg from "@/assets/hero-abstract.jpg";

const HeroSection = () => {
  const scrollTo = (id: string) => {
    document.getElementById(id)?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <section id="hero" className="relative min-h-screen flex items-center overflow-hidden">
      {/* Background image */}
      <div className="absolute inset-0">
        <img src={heroImg} alt="" className="w-full h-full object-cover" />
        <div className="absolute inset-0 bg-charcoal/80" />
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-6 md:px-12 py-32 w-full">
        <div className="max-w-3xl">
          <p className="label-upper animate-reveal-up mb-6">Web Development Studio</p>

          <h1 className="text-4xl md:text-6xl lg:text-[5.5rem] font-display font-600 tracking-tight leading-[0.95] text-warm-white animate-reveal-up delay-200 text-balance">
            We Build Websites<br />
            That Build Empires.
          </h1>

          <p className="mt-8 text-base md:text-lg leading-relaxed text-warm-white/70 max-w-xl animate-reveal-up delay-400 text-pretty">
            High-performance digital experiences engineered for founders who 
            refuse to blend in. Strategy-first. Conversion-obsessed. Unapologetically premium.
          </p>

          <div className="mt-12 flex flex-wrap gap-4 animate-reveal-up delay-600">
            <Button variant="hero" size="xl" onClick={() => scrollTo("contact")}>
              Book a Strategy Call
            </Button>
            <Button variant="heroOutline" size="xl" onClick={() => scrollTo("portfolio")} className="border-warm-white/30 text-warm-white hover:bg-warm-white hover:text-charcoal">
              View Our Work
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
