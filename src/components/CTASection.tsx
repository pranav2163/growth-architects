import React, { useState } from "react";
import { useScrollReveal } from "@/hooks/useScrollReveal";
import { Button } from "@/components/ui/button";

const CTASection = () => {
  const ref = useScrollReveal({ staggerChildren: true, staggerDelay: 120, direction: "scale" });
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [name, setName] = useState("");
  const [phone, setPhone] = useState("");

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!name || !phone) return;
    const message = `Hi, I want to book a Strategy Call!\n\nName: ${name}\nPhone: ${phone}`;
    const encMessage = encodeURIComponent(message);
    window.open(`https://wa.me/917840919923?text=${encMessage}`, "_blank");
    setIsModalOpen(false);
    setName("");
    setPhone("");
  };

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
          <Button id="strategy-btn" variant="hero" size="xl" className="hover-lift" onClick={() => setIsModalOpen(true)}>
            Book Your Strategy Call
          </Button>
        </div>
        <p data-reveal className="mt-8 text-xs text-warm-white/40 tracking-wide">
          No obligation · Response within 24 hours · Only 3 spots available this month
        </p>
      </div>

      {/* Strategy Call Form Modal */}
      {isModalOpen && (
        <div className="fixed inset-0 z-[100] flex items-center justify-center bg-black/80 backdrop-blur-sm p-4 text-left">
          <div className="bg-white text-charcoal rounded-xl shadow-2xl w-full max-w-md p-8 relative animate-scale-in">
            <button 
              onClick={() => setIsModalOpen(false)}
              className="absolute top-4 right-4 text-charcoal/50 hover:text-charcoal transition-colors cursor-pointer"
            >
              <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M18 6 6 18"/><path d="m6 6 12 12"/></svg>
            </button>
            <h3 className="text-2xl font-display font-bold mb-2">Let's Connect</h3>
            <p className="text-charcoal/70 mb-6 text-sm">Please provide your details below to schedule your strategy call.</p>
            <form onSubmit={handleSubmit} className="flex flex-col gap-4">
              <div>
                <label htmlFor="name" className="block text-sm font-medium mb-1">Full Name</label>
                <input 
                  type="text" 
                  id="name" 
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                  className="w-full px-4 py-2 border border-charcoal/20 rounded-md focus:outline-none focus:ring-2 focus:ring-gold bg-transparent text-charcoal"
                  placeholder="Your Name"
                  required 
                />
              </div>
              <div>
                <label htmlFor="phone" className="block text-sm font-medium mb-1">Phone Number</label>
                <input 
                  type="tel" 
                  id="phone" 
                  value={phone}
                  onChange={(e) => setPhone(e.target.value)}
                  className="w-full px-4 py-2 border border-charcoal/20 rounded-md focus:outline-none focus:ring-2 focus:ring-gold bg-transparent text-charcoal"
                  placeholder="Your Phone Number"
                  required 
                />
              </div>
              <Button type="submit" variant="hero" className="w-full mt-2 py-6">
                Submit & Connect via WhatsApp
              </Button>
            </form>
          </div>
        </div>
      )}
    </section>
  );
};

export default CTASection;
