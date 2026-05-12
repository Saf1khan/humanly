import { Nav } from "@/components/layout/Nav";
import { Footer } from "@/components/layout/Footer";
import { WHeroSection } from "@/components/sections/why-humanly/WHeroSection";
import { WStatsSection } from "@/components/sections/why-humanly/WStatsSection";
import { WProblemSection } from "@/components/sections/why-humanly/WProblemSection";
import { WShiftSection } from "@/components/sections/why-humanly/WShiftSection";
import { WRevenueSection } from "@/components/sections/why-humanly/WRevenueSection";
import { WCompetitiveSection } from "@/components/sections/why-humanly/WCompetitiveSection";

export const metadata = {
  title: "Why Humanly — Humanly®",
  description:
    "Every neighborhood a launchpad for human potential. AI-native, vertically integrated communities for the workforce families left behind by the housing system.",
};

export default function WhyHumanlyPage() {
  return (
    <main className="wh-page">
      <Nav />

      <WHeroSection />

      <WStatsSection />

      <div className="wh-divider" />

      <WProblemSection />

      <div className="wh-divider" />

      <WShiftSection />

      <div className="wh-divider" />

      <WRevenueSection />

      <div className="wh-divider" />

      <WCompetitiveSection />

      <Footer />
    </main>
  );
}
