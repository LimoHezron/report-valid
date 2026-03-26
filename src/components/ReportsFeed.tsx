import { MapPin, Clock, CheckCircle, AlertTriangle, Droplets, Construction, Trash2 } from "lucide-react";
import { Card } from "@/components/ui/card";
import SeverityBadge from "./SeverityBadge";

type Report = {
  id: string;
  type: "pothole" | "burst_pipe" | "illegal_dumping" | "flooding";
  title: string;
  location: string;
  timeAgo: string;
  severity: 1 | 2 | 3 | 4 | 5;
  status: "verified" | "in_progress" | "resolved";
  aiConfidence: number;
  reporter: string;
  impactPoints: number;
};

const typeIcons = {
  pothole: Construction,
  burst_pipe: Droplets,
  illegal_dumping: Trash2,
  flooding: AlertTriangle,
};

const typeLabels = {
  pothole: "Pothole",
  burst_pipe: "Burst Pipe",
  illegal_dumping: "Illegal Dumping",
  flooding: "Flooding",
};

const statusStyles = {
  verified: "text-severity-medium",
  in_progress: "text-severity-high",
  resolved: "text-severity-low",
};

const mockReports: Report[] = [
  { id: "RPT-001", type: "burst_pipe", title: "Major water main burst on Kenyatta Ave", location: "Nakuru CBD, Rhonda Estate", timeAgo: "12 min ago", severity: 5, status: "verified", aiConfidence: 94, reporter: "Mary W.", impactPoints: 25 },
  { id: "RPT-002", type: "pothole", title: "Deep pothole causing accidents near school", location: "Ngong Road, near Prestige Plaza", timeAgo: "34 min ago", severity: 4, status: "in_progress", aiConfidence: 89, reporter: "James K.", impactPoints: 15 },
  { id: "RPT-003", type: "flooding", title: "Drainage blocked, road impassable", location: "Mombasa Road, Industrial Area", timeAgo: "1 hr ago", severity: 4, status: "verified", aiConfidence: 97, reporter: "Grace M.", impactPoints: 20 },
  { id: "RPT-004", type: "illegal_dumping", title: "Illegal waste dump near residential area", location: "Eastleigh Section 3", timeAgo: "2 hrs ago", severity: 3, status: "in_progress", aiConfidence: 91, reporter: "Hassan A.", impactPoints: 10 },
  { id: "RPT-005", type: "pothole", title: "Multiple potholes on Thika Road", location: "Thika Road, Garden City junction", timeAgo: "3 hrs ago", severity: 3, status: "resolved", aiConfidence: 86, reporter: "Peter N.", impactPoints: 12 },
];

const ReportsFeed = () => {
  return (
    <section className="bg-background py-16">
      <div className="container mx-auto px-6">
        <div className="flex items-end justify-between mb-10">
          <div>
            <h2 className="font-display text-3xl md:text-4xl font-bold text-foreground">Live Reports Feed</h2>
            <p className="font-body text-muted-foreground mt-2">AI-verified infrastructure issues across Kenya</p>
          </div>
          <div className="hidden md:flex items-center gap-2 text-sm font-body text-severity-low">
            <span className="w-2 h-2 rounded-full bg-severity-low animate-pulse-glow" />
            Updating in real-time
          </div>
        </div>

        <div className="space-y-4">
          {mockReports.map((report, i) => {
            const Icon = typeIcons[report.type];
            return (
              <Card key={report.id} className="p-5 hover:shadow-lg transition-all duration-300 border-border animate-slide-up" style={{ animationDelay: `${i * 100}ms` }}>
                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center flex-shrink-0">
                    <Icon className="h-6 w-6 text-primary" />
                  </div>

                  <div className="flex-1 min-w-0">
                    <div className="flex items-start justify-between gap-4">
                      <div>
                        <div className="flex items-center gap-2 mb-1">
                          <span className="font-body text-xs text-muted-foreground">{report.id}</span>
                          <span className="font-body text-xs text-muted-foreground">•</span>
                          <span className="font-body text-xs text-muted-foreground">{typeLabels[report.type]}</span>
                        </div>
                        <h3 className="font-display font-semibold text-foreground text-lg">{report.title}</h3>
                      </div>
                      <SeverityBadge severity={report.severity} />
                    </div>

                    <div className="flex flex-wrap items-center gap-4 mt-3 text-sm font-body text-muted-foreground">
                      <span className="flex items-center gap-1"><MapPin className="h-3.5 w-3.5" /> {report.location}</span>
                      <span className="flex items-center gap-1"><Clock className="h-3.5 w-3.5" /> {report.timeAgo}</span>
                      <span className="flex items-center gap-1"><CheckCircle className="h-3.5 w-3.5 text-severity-low" /> AI: {report.aiConfidence}% confident</span>
                      <span className={`flex items-center gap-1 font-semibold capitalize ${statusStyles[report.status]}`}>
                        ● {report.status.replace("_", " ")}
                      </span>
                    </div>

                    <div className="flex items-center justify-between mt-3 pt-3 border-t border-border">
                      <span className="font-body text-xs text-muted-foreground">Reported by {report.reporter}</span>
                      <span className="font-body text-xs font-semibold text-impact">+{report.impactPoints} impact pts</span>
                    </div>
                  </div>
                </div>
              </Card>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default ReportsFeed;
