"use client";

import React from "react";
import { PlatformHero } from "./PlatformHero";
import { PlatformThesis } from "./PlatformThesis";
import { VerticalStack } from "./VerticalStack";
import { AcquisitionsPhase } from "./AcquisitionsPhase";
import { LeaseUpPhase } from "./LeaseUpPhase";
import { ManagementPhase } from "./ManagementPhase";
import { IntelligenceFlywheel } from "./IntelligenceFlywheel";

export const PlatformSection = () => {
  return (
    <div className="bg-[#F2F0EE] text-slate-900">
      <PlatformHero />
      <PlatformThesis />
      <VerticalStack />
      <AcquisitionsPhase />
      <LeaseUpPhase />
      <ManagementPhase />
      <IntelligenceFlywheel />
    </div>
  );
};
