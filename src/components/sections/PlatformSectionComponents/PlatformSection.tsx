"use client";

import React from "react";
import { PlatformHero } from "./PlatformHero";
import { PlatformThesis } from "./PlatformThesis";
import { VerticalStack } from "./VerticalStack";
import { PhasesTabSection } from "./PhasesTabSection";
import { IntelligenceFlywheel } from "./IntelligenceFlywheel";

export const PlatformSection = () => {
  return (
    <div className="bg-[#F2F0EE] text-slate-900">
      <PlatformHero />
      <div className="relative">
        <PlatformThesis />
        <VerticalStack />
      </div>
      <PhasesTabSection />
      <IntelligenceFlywheel />
    </div>
  );
};
