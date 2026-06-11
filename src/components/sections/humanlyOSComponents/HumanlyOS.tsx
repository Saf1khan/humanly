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
    <div 
      id="humanlyos" 
      className="font-sans antialiased text-white"
      style={{
        backgroundColor: 'rgb(75, 95, 104)',
        backgroundImage: 'url("https://d2o9p5vky89u4e.cloudfront.net/MGFjMmZkODA4MmFmLm8zbi5pbw%3D%3D/l9bkxtucizywp9dbc45e7z0gb/b3VyYXJpbmcuY29t/img.gif")',
        backgroundRepeat: 'repeat',
        backgroundSize: 'auto'
      }}
    >
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