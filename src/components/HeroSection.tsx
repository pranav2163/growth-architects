import { Button } from "@/components/ui/button";
import heroImg from "@/assets/hero-abstract.jpg";

const HeroSection = () => {
  const scrollTo = (id: string) => {
    document.getElementById(id)?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <section id="hero" className="relative min-h-screen flex items-center overflow-hidden">
      {/* Background with zoom-in entrance */}
      <div className="absolute inset-0 animate-hero-bg">
        <img src={heroImg} alt="" className="w-full h-full object-cover" />
        <div className="absolute inset-0 bg-charcoal/80" />
      </div>

      {/* Subtle shimmer overlay */}
      <div className="absolute inset-0 animate-shimmer pointer-events-none z-[1]" />

      <div className="relative z-10 max-w-7xl mx-auto px-6 md:px-12 py-32 w-full">
        <div className="max-w-3xl">
          <p className="label-upper animate-hero-text mb-6" style={{ animationDelay: "200ms" }}>
            Web Development Studio
          </p>

          <h1 className="text-4xl md:text-6xl lg:text-[5.5rem] font-display font-600 tracking-tight leading-[0.95] text-warm-white animate-hero-text text-balance" style={{ animationDelay: "400ms" }}>
            We Build Websites<br />
            That Build Empires.
          </h1>

          <p className="mt-8 text-base md:text-lg leading-relaxed text-warm-white/70 max-w-xl animate-hero-text text-pretty" style={{ animationDelay: "650ms" }}>
            High-performance digital experiences engineered for founders who 
            refuse to blend in. Strategy-first. Conversion-obsessed. Unapologetically premium.
          </p>

          <div className="mt-12 flex flex-wrap gap-4 animate-hero-text" style={{ animationDelay: "900ms" }}>
            <Button 
              variant="hero" 
              size="xl" 
              onClick={() => {
                const btn = document.getElementById("strategy-btn");
                if (btn) btn.click();
                else scrollTo("contact");
              }} 
              className="hover-lift"
            >
              Book a Strategy Call
            </Button>
            <Button variant="heroOutline" size="xl" onClick={() => scrollTo("portfolio")} className="border-warm-white/30 text-warm-white hover:bg-warm-white hover:text-charcoal hover-lift">
              View Our Work
            </Button>
          </div>
        </div>
      </div>

      {/* Scroll indicator */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 z-10 animate-hero-text" style={{ animationDelay: "1200ms" }}>
        <div className="w-[1px] h-12 bg-gradient-to-b from-gold/60 to-transparent animate-float" />
      </div>
    </section>
  );
};

export default HeroSection;
