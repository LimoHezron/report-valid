import { Brain, Server, Database, Smartphone } from "lucide-react";
import { Card } from "@/components/ui/card";

const layers = [
  {
    icon: Smartphone,
    title: "Citizen App",
    subtitle: "React + PWA",
    desc: "Photo capture, GPS, real-time notifications",
    color: "bg-severity-medium/10 text-severity-medium",
  },
  {
    icon: Brain,
    title: "AI Brain",
    subtitle: "Python / FastAPI",
    desc: "YOLOv8 image verification, LLM severity scoring",
    color: "bg-severity-high/10 text-severity-high",
  },
  {
    icon: Server,
    title: "Engine",
    subtitle: "Go / Fiber",
    desc: "High-concurrency WebSockets, impact ledger",
    color: "bg-severity-low/10 text-severity-low",
  },
  {
    icon: Database,
    title: "Data Layer",
    subtitle: "PostgreSQL",
    desc: "Users, Reports, Verification, Actions tables",
    color: "bg-primary/10 text-primary",
  },
];

const ArchitectureSection = () => {
  return (
    <section className="bg-primary py-16">
      <div className="container mx-auto px-6">
        <div className="text-center mb-12">
          <h2 className="font-display text-3xl md:text-4xl font-bold text-primary-foreground">System Architecture</h2>
          <p className="font-body text-primary-foreground/60 mt-2">Built for scale. Designed for impact.</p>
        </div>

        <div className="grid md:grid-cols-4 gap-4 max-w-5xl mx-auto">
          {layers.map((layer, i) => (
            <Card key={layer.title} className="p-6 bg-primary-foreground/5 border-primary-foreground/10 backdrop-blur-sm text-center animate-slide-up" style={{ animationDelay: `${i * 100}ms` }}>
              <div className={`w-14 h-14 rounded-2xl ${layer.color} flex items-center justify-center mx-auto mb-4`}>
                <layer.icon className="h-7 w-7" />
              </div>
              <h3 className="font-display font-bold text-primary-foreground text-lg">{layer.title}</h3>
              <p className="font-body text-xs text-primary-foreground/50 font-mono mt-0.5">{layer.subtitle}</p>
              <p className="font-body text-sm text-primary-foreground/70 mt-3">{layer.desc}</p>
            </Card>
          ))}
        </div>

        {/* Connection lines visual */}
        <div className="hidden md:flex items-center justify-center mt-6 gap-2">
          {[0, 1, 2].map((i) => (
            <div key={i} className="flex items-center gap-2">
              <div className="h-0.5 w-24 bg-gradient-to-r from-primary-foreground/20 to-primary-foreground/5" />
              <div className="w-2 h-2 rounded-full bg-impact animate-pulse-glow" />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ArchitectureSection;
