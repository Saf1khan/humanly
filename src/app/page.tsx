"use client";

import { useEffect, useState, Suspense } from "react";
import { useRouter, useSearchParams } from "next/navigation";
import { HeroSection } from "@/components/sections/HeroSection";
import { RevenueLayers } from "@/components/sections/InvestmentThesisSection";
import { ProblemSection } from "@/components/sections/ProblemSection";
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
import { CircleOfServicesSection } from "@/components/sections/CircleOfServicesSection";
import { PlatformSection } from "@/components/sections/PlatformSection";

function HomeContent() {
  const router = useRouter();
  const searchParams = useSearchParams();
  const [shouldRender, setShouldRender] = useState(false);

  useEffect(() => {
    const isFromLogo = searchParams.get("from") === "logo";
    if (!isFromLogo) {
      router.replace("/home");
    } else {
      setShouldRender(true);
    }
  }, [router, searchParams]);

  if (!shouldRender) return null;

  return (
    <main className="min-h-screen">
      {/* Seamless Light Background Container */}
      <div className="relative bg-transparent overflow-x-clip">

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
        <RevenueLayers />
        <ProblemSection />
        <PlatformSection />
        <CommunitiesSection />
        <LandLeasingSection />
        <VillageCenterSection />
        <ProofOfConceptSection />
        <HumanlyOSSection />
        <CircleOfServicesSection />
        <TransactionFlowSection />
        <FinancialServicesSection />
        <TeamSection />

      </div>

      <DataRoomForm />
      <Footer />
    </main>
  );
}

export default function Home() {
  return (
    <Suspense fallback={null}>
      <HomeContent />
    </Suspense>
  );
}
