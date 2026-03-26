const stats = [
  { value: "12,483", label: "Issues Reported", trend: "+342 this week" },
  { value: "87%", label: "Resolution Rate", trend: "↑ 12% vs last month" },
  { value: "4.2hrs", label: "Avg Response Time", trend: "40% faster" },
  { value: "5,291", label: "Active Citizens", trend: "Growing daily" },
];

const StatsBar = () => {
  return (
    <section className="bg-card border-y border-border">
      <div className="container mx-auto px-6 py-8">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
          {stats.map((stat) => (
            <div key={stat.label} className="text-center animate-slide-up">
              <p className="font-display text-3xl md:text-4xl font-bold text-foreground">{stat.value}</p>
              <p className="font-body text-sm text-muted-foreground mt-1">{stat.label}</p>
              <p className="font-body text-xs text-severity-low mt-0.5">{stat.trend}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default StatsBar;
