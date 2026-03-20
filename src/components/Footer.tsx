import janxLogo from "@/assets/janx-logo.png";

const Footer = () => {
  return (
    <footer className="px-6 md:px-12 py-12 border-t border-border">
      <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-center justify-between gap-6">
        <div className="flex items-center gap-2">
          <img src={janxLogo} alt="JANX webuild's" className="h-8 w-8" />
          <p className="font-display text-lg font-600 tracking-tight">JANX webuild's</p>
        </div>
        <p className="text-xs text-warm-gray">
          © {new Date().getFullYear()} JANX webuild's. All rights reserved. Crafted with precision.
        </p>
        <div className="flex gap-6">
          {["Twitter", "LinkedIn", "Instagram"].map((s) => (
            <a key={s} href="#" className="text-xs text-warm-gray hover:text-foreground transition-colors tracking-wider uppercase">
              {s}
            </a>
          ))}
        </div>
      </div>
    </footer>
  );
};

export default Footer;
