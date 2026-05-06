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
import { CircleOfServicesSection } from "@/components/sections/CircleOfServicesSection";
import { FinancialServicesSection } from "@/components/sections/FinancialServicesSection";
import { TransactionFlowSection } from "@/components/sections/TransactionFlowSection";
import { TeamSection } from "@/components/sections/TeamSection";
import { DataRoomForm } from "@/components/features/DataRoomForm";
import { Footer } from "@/components/layout/Footer";

export default function Home() {
  return (
    <main className="min-h-screen bg-black">
      {/* Seamless Light Background Container */}
      <div className="relative bg-[#fcfaf7] overflow-x-clip">

        {/* Continuous Background Gradients */}
        <div
          className="absolute pointer-events-none left-0 -translate-x-1/2 top-0 w-[1200px] h-[1200px] opacity-20"
          style={{ background: "radial-gradient(50% 50%, #827E7A 0%, rgba(130, 126, 122, 0) 100%)" }}
        />
        <div
          className="absolute pointer-events-none right-0 translate-x-1/4 top-1/4 w-[1000px] h-[1000px] opacity-15"
          style={{ background: "radial-gradient(50% 50%, #827E7A 0%, rgba(130, 126, 122, 0) 100%)" }}
        />
        <div
          className="absolute pointer-events-none left-1/4 -translate-x-1/2 top-1/2 w-[1200px] h-[1200px] opacity-20"
          style={{ background: "radial-gradient(50% 50%, #827E7A 0%, rgba(130, 126, 122, 0) 100%)" }}
        />
        <div
          className="absolute pointer-events-none right-1/4 translate-x-1/2 bottom-0 w-[1200px] h-[1200px] opacity-15"
          style={{ background: "radial-gradient(50% 50%, #827E7A 0%, rgba(130, 126, 122, 0) 100%)" }}
        />

        <HeroSection />
        {/* Shared Background for Stats and Investment Thesis */}
          <div className="relative w-full overflow-hidden">
            {/* Minimized Horizontal Gradient Overlay */}
            <div className="absolute inset-0 z-0 bg-[linear-gradient(to_right,#6BCEFF,#0c007a,#AA3DAD,#FF6136,#FFE366)] opacity-80 pointer-events-none" />

            {/* Warm Vibrant Minimal Gradient Background */}
            <div className="absolute inset-0 z-0 pointer-events-none">
              <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_50%,rgba(255,239,216,0.4)_0%,transparent_70%)] bg-[radial-gradient(circle_at_50%_25%,rgba(255,239,216,0.4)_100%,transparent_10%)]" />

              {/* Subtle SVG Noise Pattern */}
                <div className="absolute inset-0 mix-blend-overlay opacity-30">
                  <svg className="h-full w-full">
                  <filter id="sharedNoise">
                    <feTurbulence type="fractalNoise" baseFrequency="0.65" numOctaves="3" stitchTiles="stitch" />
                  </filter>
                  <rect width="100%" height="100%" filter="url(#sharedNoise)" />
                </svg>
              </div>
              <div className=" z-10">
              
            </div>
            </div>
            <StatsSection />
            <InvestmentThesisSection />
            </div>

          
              
          <ProblemSection />
          <PlatformSection />
          <CommunitiesSection />
          <LandLeasingSection />
          <VillageCenterSection />
          <ProofOfConceptSection />
          <HumanlyOSSection />
          <CircleOfServicesSection />
          <FinancialServicesSection />
          <TransactionFlowSection />
          <TeamSection />
      
      </div>

      <DataRoomForm />
      <Footer />
    </main>
  );
}
