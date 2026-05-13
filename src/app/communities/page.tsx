import React from "react";
import { CHero } from "@/components/sections/communities/CHero";
import { COutcomes } from "@/components/sections/communities/COutcomes";
import { CSteward } from "@/components/sections/communities/CSteward";
import { CLease } from "@/components/sections/communities/CLease";
import { CHumanDesign } from "@/components/sections/communities/CHumanDesign";
import { CProofOfConcept } from "@/components/sections/communities/CProofOfConcept";
import { CVillageCenter } from "@/components/sections/communities/CVillageCenter";
import { COutcomeCards } from "@/components/sections/communities/COutcomeCards";
import { CHousingMix } from "@/components/sections/communities/CHousingMix";
import { CPipeline } from "@/components/sections/communities/CPipeline";
import { Footer } from "@/components/layout/Footer";

export default function CommunitiesPage() {
  return (
    <main className="font-sans selection:bg-[#1a4f82] selection:text-white bg-[#f7f6f2]">
      <CHero />
      <COutcomes />
      <CSteward />
      <CLease />
      <CHumanDesign />
      <CProofOfConcept />
      <CVillageCenter />
      <COutcomeCards />
      <CHousingMix />
      <CPipeline />
      <Footer />
    </main>
  );
}
