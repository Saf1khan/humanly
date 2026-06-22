import React from 'react';
import { Hero } from '@/components/sections/home/Hero';
import { ProblemMissionSection } from '@/components/sections/home/ProblemStats';
import { PlatformStack } from '@/components/sections/home/PlatformStack';
import { HumanlyOSSection } from '@/components/sections/home/HumanlyOSStrip';
import { CircleOfServicesSection } from '@/components/sections/home/CircleOfServices';
import { CommunityPreview } from '@/components/sections/home/CommunityPreview';
import { WhyNow } from '@/components/sections/home/WhyNow';
import { TeamGrid } from '@/components/sections/home/TeamTeaser';
import { RevenueLayers } from '@/components/sections/home/RevenueLayers';
import { DataRoomForm } from "@/components/features/DataRoomForm";

export default function HomeV2() {
  return (
    <div className="min-h-screen bg-sandstone-200" style={{ '--radial-gradient-color': '107, 206, 255' } as React.CSSProperties}>
      <main>
        <Hero />
        <ProblemMissionSection />
        <RevenueLayers />
        <PlatformStack />
        <HumanlyOSSection />
        <CircleOfServicesSection />
        <CommunityPreview />
        <WhyNow />
        <TeamGrid />
      </main>
      <DataRoomForm />
    </div>
  );
}
