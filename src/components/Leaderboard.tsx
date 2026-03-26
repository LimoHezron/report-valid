import { Trophy, Medal, Star } from "lucide-react";
import { Card } from "@/components/ui/card";

const leaders = [
  { rank: 1, name: "Mary Wanjiku", county: "Nakuru", points: 2450, reports: 87, icon: Trophy },
  { rank: 2, name: "James Kamau", county: "Nairobi", points: 1980, reports: 72, icon: Medal },
  { rank: 3, name: "Grace Muthoni", county: "Mombasa", points: 1720, reports: 65, icon: Medal },
  { rank: 4, name: "Hassan Ali", county: "Nairobi", points: 1540, reports: 58, icon: Star },
  { rank: 5, name: "Peter Njoroge", county: "Kiambu", points: 1320, reports: 49, icon: Star },
];

const rankColors = ["", "text-impact", "text-muted-foreground", "text-severity-high"];

const Leaderboard = () => {
  return (
    <section className="bg-background py-16">
      <div className="container mx-auto px-6">
        <div className="max-w-3xl mx-auto">
          <div className="text-center mb-10">
            <h2 className="font-display text-3xl md:text-4xl font-bold text-foreground">Impact Leaderboard</h2>
            <p className="font-body text-muted-foreground mt-2">Top civic reporters earning impact points</p>
          </div>

          <div className="space-y-3">
            {leaders.map((leader, i) => {
              const Icon = leader.icon;
              return (
                <Card key={leader.rank} className="p-5 border-border hover:shadow-md transition-all animate-slide-up" style={{ animationDelay: `${i * 80}ms` }}>
                  <div className="flex items-center gap-4">
                    <div className={`w-10 h-10 rounded-full flex items-center justify-center font-display font-bold text-lg ${
                      leader.rank === 1 ? "bg-impact/20 text-impact" : leader.rank <= 3 ? "bg-muted text-muted-foreground" : "bg-muted text-muted-foreground"
                    }`}>
                      {leader.rank}
                    </div>

                    <div className="flex-1">
                      <div className="flex items-center gap-2">
                        <h3 className="font-display font-semibold text-foreground">{leader.name}</h3>
                        {leader.rank <= 3 && <Icon className={`h-4 w-4 ${rankColors[leader.rank] || ""}`} />}
                      </div>
                      <p className="font-body text-xs text-muted-foreground">{leader.county} County • {leader.reports} reports</p>
                    </div>

                    <div className="text-right">
                      <p className="font-display font-bold text-lg text-impact">{leader.points.toLocaleString()}</p>
                      <p className="font-body text-xs text-muted-foreground">impact pts</p>
                    </div>
                  </div>
                </Card>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Leaderboard;
