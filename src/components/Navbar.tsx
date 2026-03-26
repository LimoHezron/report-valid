import { Menu } from "lucide-react";
import { useState } from "react";
import { Button } from "@/components/ui/button";
import logo from "@/assets/logo.png";

const Navbar = () => {
  const [open, setOpen] = useState(false);

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-primary/90 backdrop-blur-md border-b border-primary-foreground/10">
      <div className="container mx-auto px-6 h-16 flex items-center justify-between">
        <div className="flex items-center gap-3">
          <img src={logo} alt="Mji-Smart" className="h-8 w-8" />
          <span className="font-display font-bold text-primary-foreground text-xl">Mji-Smart</span>
        </div>

        <div className="hidden md:flex items-center gap-8 font-body text-sm text-primary-foreground/70">
          <a href="#reports" className="hover:text-primary-foreground transition-colors">Live Feed</a>
          <a href="#report" className="hover:text-primary-foreground transition-colors">Report</a>
          <a href="#architecture" className="hover:text-primary-foreground transition-colors">How It Works</a>
          <a href="#leaderboard" className="hover:text-primary-foreground transition-colors">Leaderboard</a>
        </div>

        <div className="flex items-center gap-3">
          <Button size="sm" className="bg-impact text-primary font-display font-semibold hover:bg-impact/90 hidden md:inline-flex">
            Report Issue
          </Button>
          <button onClick={() => setOpen(!open)} className="md:hidden text-primary-foreground">
            <Menu className="h-6 w-6" />
          </button>
        </div>
      </div>

      {open && (
        <div className="md:hidden bg-primary border-t border-primary-foreground/10 px-6 py-4 space-y-3 font-body text-sm text-primary-foreground/70">
          <a href="#reports" className="block hover:text-primary-foreground">Live Feed</a>
          <a href="#report" className="block hover:text-primary-foreground">Report</a>
          <a href="#architecture" className="block hover:text-primary-foreground">How It Works</a>
          <a href="#leaderboard" className="block hover:text-primary-foreground">Leaderboard</a>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
