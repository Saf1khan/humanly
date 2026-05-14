"use client";

import React from "react";
import OSHero from "./OSHero";
import OSFinancialFoundation from "./OSFinancialFoundation";
import OSServicesQuote from "./OSServicesQuote";
import OSCircleOfServices from "./OSCircleOfServices";
import OSTransactionIntegration from "./OSTransactionIntegration";
import OSFinancialFoundationMerged from "./OSFinancialFoundationMerged";
import OSJourney from "./OSJourney";
import OSPlatformMatrix from "./OSPlatformMatrix";

export const HumanlyOSSection = () => {
  return (
    <div id="humanlyos" className="font-sans antialiased text-[#1a1a1a] bg-[#f7f6f2]">
      <OSHero />
      <OSFinancialFoundation />
      <OSServicesQuote />
      <OSCircleOfServices />
      <OSTransactionIntegration />
      <OSFinancialFoundationMerged />
      <OSJourney />
      <OSPlatformMatrix />
    </div>
  );
};