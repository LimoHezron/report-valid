import logo from "@/assets/logo.png";

const Footer = () => (
  <footer className="bg-foreground py-12">
    <div className="container mx-auto px-6">
      <div className="flex flex-col md:flex-row items-center justify-between gap-6">
        <div className="flex items-center gap-3">
          <img src={logo} alt="Mji-Smart" className="h-8 w-8" />
          <span className="font-display font-bold text-background text-xl">Mji-Smart</span>
        </div>
        <div className="flex gap-8 font-body text-sm text-background/60">
          <span>SDG 11 · Sustainable Cities</span>
          <span>SDG 6 · Clean Water</span>
          <span>SDG 13 · Climate Action</span>
        </div>
        <p className="font-body text-xs text-background/40">© 2026 Mji-Smart. Built for Kenya.</p>
      </div>
    </div>
  </footer>
);

export default Footer;
