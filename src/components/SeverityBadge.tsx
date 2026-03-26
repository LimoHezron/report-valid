import { cn } from "@/lib/utils";

type Severity = 1 | 2 | 3 | 4 | 5;

const severityConfig: Record<Severity, { label: string; className: string }> = {
  5: { label: "Critical", className: "bg-severity-critical/10 text-severity-critical border-severity-critical/30" },
  4: { label: "High", className: "bg-severity-high/10 text-severity-high border-severity-high/30" },
  3: { label: "Medium", className: "bg-severity-medium/10 text-severity-medium border-severity-medium/30" },
  2: { label: "Low", className: "bg-severity-low/10 text-severity-low border-severity-low/30" },
  1: { label: "Minor", className: "bg-muted text-muted-foreground border-border" },
};

const SeverityBadge = ({ severity }: { severity: Severity }) => {
  const config = severityConfig[severity];
  return (
    <span className={cn("inline-flex items-center gap-1.5 px-2.5 py-0.5 rounded-full text-xs font-semibold font-body border", config.className)}>
      <span className={cn("w-1.5 h-1.5 rounded-full", severity >= 4 ? "animate-pulse-glow" : "", {
        "bg-severity-critical": severity === 5,
        "bg-severity-high": severity === 4,
        "bg-severity-medium": severity === 3,
        "bg-severity-low": severity === 2,
        "bg-muted-foreground": severity === 1,
      })} />
      {config.label}
    </span>
  );
};

export default SeverityBadge;
