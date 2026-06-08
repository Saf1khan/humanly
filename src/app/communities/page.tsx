import React from "react";
import { CHero } from "@/components/sections/communities/CHero";
import { COutcomes } from "@/components/sections/communities/COutcomes";
import { CSteward } from "@/components/sections/communities/CSteward";
import { CLease } from "@/components/sections/communities/CLease";
import { CHumanDesign } from "@/components/sections/communities/CHumanDesign";
import { CProofOfConcept } from "@/components/sections/communities/CProofOfConcept";
import { VillageCenterSection } from "@/components/sections/communities/CVillageCenter";
import { COutcomeCards } from "@/components/sections/communities/COutcomeCards";
import { CHousingMix } from "@/components/sections/communities/CHousingMix";
import { CPipeline } from "@/components/sections/communities/CPipeline";
import { Footer } from "@/components/layout/Footer";
import { SmoothScroll } from "@/components/ui/SmoothScroll";

export default function CommunitiesPage() {
  return (
    <SmoothScroll>
      <main className="font-sans selection:bg-[#1a4f82] selection:text-white bg-sandstone-200">
        <CHero />
        <COutcomes />
        <CSteward />
        <CLease />
        <CHumanDesign />
        <CHousingMix />
        <CProofOfConcept />
        <VillageCenterSection />
        <COutcomeCards />
        <CPipeline />
        <Footer />
      </main>
    </SmoothScroll>
  );
}
