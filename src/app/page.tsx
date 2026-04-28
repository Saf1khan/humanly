import { HeroSection } from "@/components/sections/HeroSection";
import { StatsSection } from "@/components/sections/StatsSection";
import { InvestmentThesisSection } from "@/components/sections/InvestmentThesisSection";
import { ProblemSection } from "@/components/sections/ProblemSection";
import { PlatformSection } from "@/components/sections/PlatformSection";
import { CommunitiesSection } from "@/components/sections/CommunitiesSection";
import { LandLeasingSection } from "@/components/sections/LandLeasingSection";
import { VillageCenterSection } from "@/components/sections/VillageCenterSection";
import { ProofOfConceptSection } from "@/components/sections/ProofOfConceptSection";
import { HumanlyOSSection } from "@/components/sections/HumanlyOSSection";
import { FinancialServicesSection } from "@/components/sections/FinancialServicesSection";
import { TransactionFlowSection } from "@/components/sections/TransactionFlowSection";
import { TeamSection } from "@/components/sections/TeamSection";
import { DataRoomForm } from "@/components/features/DataRoomForm";
import { Footer } from "@/components/layout/Footer";

export default function Home() {
  return (
    <main className="min-h-screen bg-black">
      {/* Group 1: Hero and Stats (Sandstone) */}
      <div className="relative bg-[#F0EDEB] overflow-hidden">
        {/* Unified Background Gradients for Group 1 */}
        <div 
          className="absolute pointer-events-none left-0 -translate-x-1/2 top-0 w-[1200px] h-[1200px] opacity-40" 
          style={{ background: "radial-gradient(50% 50%, #827E7A 0%, rgba(130, 126, 122, 0) 100%)" }}
        />
        <div 
          className="absolute pointer-events-none right-0 translate-x-1/4 top-1/2 -translate-y-1/2 w-[1000px] h-[1000px] opacity-30" 
          style={{ background: "radial-gradient(50% 50%, #827E7A 0%, rgba(130, 126, 122, 0) 100%)" }}
        />
        <HeroSection />
        <StatsSection />
      </div>

      <InvestmentThesisSection />

      {/* Group 2: Problem (Sandstone) */}
      <div className="relative bg-[#F0EDEB] overflow-hidden">
        <div 
          className="absolute pointer-events-none right-0 translate-x-1/2 top-0 -translate-y-1/2 w-[1000px] h-[1000px] opacity-50" 
          style={{ background: "radial-gradient(50% 50%, #827E7A 0%, rgba(130, 126, 122, 0) 100%)" }}
        />
        <ProblemSection />
      </div>

      <PlatformSection />

      {/* Group 3: Communities through Proof of Concept (Sandstone) */}
      <div className="relative bg-[#F0EDEB] overflow-hidden">
        {/* Unified Background Gradients for Group 3 */}
        <div 
          className="absolute pointer-events-none left-1/4 -translate-x-1/2 top-0 -translate-y-1/2 w-[1200px] h-[1200px] opacity-40" 
          style={{ background: "radial-gradient(50% 50%, #827E7A 0%, rgba(130, 126, 122, 0) 100%)" }}
        />
        <div 
          className="absolute pointer-events-none right-1/4 translate-x-1/2 bottom-0 w-[1200px] h-[1200px] opacity-30" 
          style={{ background: "radial-gradient(50% 50%, #827E7A 0%, rgba(130, 126, 122, 0) 100%)" }}
        />
        <CommunitiesSection />
        <LandLeasingSection />
        <VillageCenterSection />
        <ProofOfConceptSection />
      </div>

      <HumanlyOSSection />
      <FinancialServicesSection />
      <TransactionFlowSection />
      <TeamSection />
      <DataRoomForm />
      <Footer />
    </main>
  );
}
