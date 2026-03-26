import { useState } from "react";
import { Camera, Upload, MapPin, Send } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { toast } from "sonner";

const issueTypes = [
  { id: "pothole", label: "Pothole", emoji: "🕳️" },
  { id: "burst_pipe", label: "Burst Pipe", emoji: "💧" },
  { id: "illegal_dumping", label: "Illegal Dumping", emoji: "🗑️" },
  { id: "flooding", label: "Flooding", emoji: "🌊" },
];

const ReportForm = () => {
  const [selectedType, setSelectedType] = useState<string | null>(null);
  const [description, setDescription] = useState("");
  const [dragOver, setDragOver] = useState(false);

  const handleSubmit = () => {
    if (!selectedType) {
      toast.error("Please select an issue type");
      return;
    }
    toast.success("Report submitted! AI verification in progress...", {
      description: "You'll earn impact points once verified.",
    });
    setSelectedType(null);
    setDescription("");
  };

  return (
    <section className="bg-secondary/50 py-16">
      <div className="container mx-auto px-6">
        <div className="max-w-2xl mx-auto">
          <div className="text-center mb-10">
            <h2 className="font-display text-3xl md:text-4xl font-bold text-foreground">Report an Issue</h2>
            <p className="font-body text-muted-foreground mt-2">Upload a photo and our AI verifies it instantly</p>
          </div>

          <Card className="p-8 border-border">
            {/* Issue type selection */}
            <div className="mb-6">
              <label className="font-display font-semibold text-foreground text-sm mb-3 block">Issue Type</label>
              <div className="grid grid-cols-2 md:grid-cols-4 gap-3">
                {issueTypes.map((type) => (
                  <button
                    key={type.id}
                    onClick={() => setSelectedType(type.id)}
                    className={`p-4 rounded-xl border-2 transition-all text-center font-body ${
                      selectedType === type.id
                        ? "border-primary bg-primary/5 shadow-md"
                        : "border-border hover:border-primary/30 bg-card"
                    }`}
                  >
                    <span className="text-2xl block mb-1">{type.emoji}</span>
                    <span className="text-sm font-medium text-foreground">{type.label}</span>
                  </button>
                ))}
              </div>
            </div>

            {/* Photo upload */}
            <div className="mb-6">
              <label className="font-display font-semibold text-foreground text-sm mb-3 block">Photo Evidence</label>
              <div
                onDragOver={(e) => { e.preventDefault(); setDragOver(true); }}
                onDragLeave={() => setDragOver(false)}
                onDrop={(e) => { e.preventDefault(); setDragOver(false); toast.info("Photo received! AI analysis starting..."); }}
                className={`border-2 border-dashed rounded-xl p-10 text-center transition-all cursor-pointer ${
                  dragOver ? "border-primary bg-primary/5" : "border-border hover:border-primary/30"
                }`}
              >
                <div className="flex items-center justify-center gap-3 mb-3">
                  <Camera className="h-8 w-8 text-muted-foreground" />
                  <Upload className="h-8 w-8 text-muted-foreground" />
                </div>
                <p className="font-body text-foreground font-medium">Drop a photo here or click to upload</p>
                <p className="font-body text-xs text-muted-foreground mt-1">AI will verify the issue type and assess severity</p>
              </div>
            </div>

            {/* Description */}
            <div className="mb-6">
              <label className="font-display font-semibold text-foreground text-sm mb-3 block">Description</label>
              <textarea
                value={description}
                onChange={(e) => setDescription(e.target.value)}
                placeholder="Describe the issue... (AI will analyze severity from your description)"
                className="w-full h-28 rounded-xl border border-border bg-card px-4 py-3 text-foreground font-body text-sm placeholder:text-muted-foreground resize-none focus:ring-2 focus:ring-ring focus:border-transparent outline-none"
              />
            </div>

            {/* Location */}
            <div className="mb-8">
              <label className="font-display font-semibold text-foreground text-sm mb-3 block">Location</label>
              <div className="flex items-center gap-3 px-4 py-3 rounded-xl border border-border bg-card">
                <MapPin className="h-5 w-5 text-primary" />
                <span className="font-body text-sm text-muted-foreground">Auto-detected: Nakuru CBD, Kenya</span>
                <button className="ml-auto text-xs font-body font-semibold text-primary hover:underline">Change</button>
              </div>
            </div>

            <Button onClick={handleSubmit} className="w-full py-6 font-display font-semibold text-lg bg-primary text-primary-foreground hover:bg-primary/90">
              <Send className="mr-2 h-5 w-5" /> Submit Report for AI Verification
            </Button>
          </Card>
        </div>
      </div>
    </section>
  );
};

export default ReportForm;
