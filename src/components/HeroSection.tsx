import { ArrowRight, Shield, Zap, Eye } from "lucide-react";
import { Button } from "@/components/ui/button";
import heroImg from "@/assets/hero-city.jpg";

const HeroSection = () => {
  return (
    <section className="relative min-h-[90vh] flex items-center overflow-hidden">
      {/* Background image with overlay */}
      <div className="absolute inset-0">
        <img src={heroImg} alt="Smart city aerial view" className="w-full h-full object-cover" />
        <div className="absolute inset-0 bg-gradient-to-r from-primary/95 via-primary/80 to-primary/40" />
      </div>

      <div className="relative z-10 container mx-auto px-6 py-20">
        <div className="max-w-2xl animate-fade-in">
          <div className="inline-flex items-center gap-2 bg-primary-foreground/10 backdrop-blur-sm border border-primary-foreground/20 rounded-full px-4 py-1.5 mb-6">
            <span className="w-2 h-2 rounded-full bg-severity-medium animate-pulse-glow" />
            <span className="text-primary-foreground/90 text-sm font-medium font-body">Live: 2,847 issues tracked across Kenya</span>
          </div>

          <h1 className="font-display text-5xl md:text-7xl font-bold text-primary-foreground leading-tight mb-6">
            Every Smartphone,<br />
            <span className="text-impact">A Civic Sensor.</span>
          </h1>

          <p className="text-primary-foreground/80 text-lg md:text-xl font-body max-w-xl mb-8 leading-relaxed">
            AI-verified infrastructure reporting. Real-time tracking.
            Turn broken pipes and potholes into action — in milliseconds, not months.
          </p>

          <div className="flex flex-wrap gap-4 mb-12">
            <Button size="lg" className="bg-impact text-primary font-display font-semibold text-lg px-8 py-6 hover:bg-impact/90 transition-all">
              Report an Issue <ArrowRight className="ml-2 h-5 w-5" />
            </Button>
            <Button size="lg" variant="outline" className="border-primary-foreground/30 text-primary-foreground font-display font-semibold text-lg px-8 py-6 hover:bg-primary-foreground/10 backdrop-blur-sm">
              View Live Map
            </Button>
          </div>

          <div className="grid grid-cols-3 gap-6 max-w-lg">
            {[
              { icon: Eye, label: "AI Verified", desc: "Computer vision spam filter" },
              { icon: Zap, label: "Real-time", desc: "Go-powered WebSockets" },
              { icon: Shield, label: "SDG 11", desc: "Sustainable cities" },
            ].map((item) => (
              <div key={item.label} className="text-center">
                <div className="w-10 h-10 rounded-lg bg-primary-foreground/10 backdrop-blur-sm flex items-center justify-center mx-auto mb-2">
                  <item.icon className="h-5 w-5 text-impact" />
                </div>
                <p className="text-primary-foreground font-display font-semibold text-sm">{item.label}</p>
                <p className="text-primary-foreground/60 text-xs font-body">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
