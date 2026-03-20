import { useState, useEffect } from "react";
import { Button } from "@/components/ui/button";
import janxLogo from "@/assets/janx-logo.png";

const Navbar = () => {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 50);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const scrollTo = (id: string) => {
    document.getElementById(id)?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled ? "bg-background/95 backdrop-blur-sm shadow-sm" : "bg-transparent"
      }`}
    >
      <div className="max-w-7xl mx-auto flex items-center justify-between px-6 md:px-12 py-5">
        <button onClick={() => scrollTo("hero")} className="flex items-center gap-2">
          <img src={janxLogo} alt="JANX webuild's" className="h-9 w-9" />
          <span className="font-display text-xl font-600 tracking-tight text-foreground">JANX webuild's</span>
        </button>
        <div className="hidden md:flex items-center gap-8">
          {["services", "process", "portfolio", "pricing", "about"].map((s) => (
            <button
              key={s}
              onClick={() => scrollTo(s)}
              className="text-xs font-medium tracking-[0.15em] uppercase text-warm-gray hover:text-foreground transition-colors"
            >
              {s}
            </button>
          ))}
        </div>
        <Button variant="hero" size="sm" onClick={() => scrollTo("contact")} className="hidden md:inline-flex">
          Start a Project
        </Button>
      </div>
    </nav>
  );
};

export default Navbar;
