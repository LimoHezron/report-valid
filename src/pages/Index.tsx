import Navbar from "@/components/Navbar";
import HeroSection from "@/components/HeroSection";
import StatsBar from "@/components/StatsBar";
import ReportsFeed from "@/components/ReportsFeed";
import ReportForm from "@/components/ReportForm";
import ArchitectureSection from "@/components/ArchitectureSection";
import Leaderboard from "@/components/Leaderboard";
import Footer from "@/components/Footer";

const Index = () => {
  return (
    <div className="min-h-screen bg-background font-body">
      <Navbar />
      <main>
        <HeroSection />
        <StatsBar />
        <div id="reports"><ReportsFeed /></div>
        <div id="report"><ReportForm /></div>
        <div id="architecture"><ArchitectureSection /></div>
        <div id="leaderboard"><Leaderboard /></div>
      </main>
      <Footer />
    </div>
  );
};

export default Index;
