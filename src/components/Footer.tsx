const Footer = () => {
  return (
    <footer className="px-6 md:px-12 py-12 border-t border-border">
      <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-center justify-between gap-6">
        <p className="font-display text-lg font-600 tracking-tight">AMYRON</p>
        <p className="text-xs text-warm-gray">
          © {new Date().getFullYear()} AMYRON. All rights reserved. Crafted with precision.
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
