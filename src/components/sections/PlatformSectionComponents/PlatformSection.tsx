"use client";

import React from "react";
import { PlatformHero } from "./PlatformHero";
import { PlatformThesis } from "./PlatformThesis";
import { VerticalStack } from "./VerticalStack";
import { AcquisitionsPhase } from "./AcquisitionsPhase";
import { LeaseUpPhase } from "./LeaseUpPhase";
import { ManagementPhase } from "./ManagementPhase";
import { IntelligenceFlywheel } from "./IntelligenceFlywheel";

const Separator = () => (
  <div className="w-full max-w-[1200px] mx-auto h-[1px] bg-gradient-to-r from-transparent via-white/5 to-transparent" />
);

export const PlatformSection = () => {
  return (
    <div className="bg-[#0a0809] text-white">
      <PlatformHero />
      <Separator />
      <PlatformThesis />
      <Separator />
      <VerticalStack />
      <Separator />
      <AcquisitionsPhase />
      <Separator />
      <LeaseUpPhase />
      <Separator />
      <ManagementPhase />
      <Separator />
      <IntelligenceFlywheel />
    </div>
  );
};
