import React from 'react';
import { Hero } from '@/components/sections/home/Hero';
import { ProblemMissionSection } from '@/components/sections/home/ProblemStats';
import { PlatformStack } from '@/components/sections/home/PlatformStack';
import { HumanlyOSSection } from '@/components/sections/home/HumanlyOSStrip';
import { CircleOfServicesSection } from '@/components/sections/home/CircleOfServices';
import { CommunityPreview } from '@/components/sections/home/CommunityPreview';
import { WhyNow } from '@/components/sections/home/WhyNow';
import { TeamGrid } from '@/components/sections/home/TeamTeaser';
import { Footer } from '@/components/layout/Footer';
import { RevenueLayers } from '@/components/sections/home/RevenueLayers';
import { DataRoomForm } from "@/components/features/DataRoomForm";

export default function HomeV2() {
  return (
    <div className="home-v2-root">
      <style
        dangerouslySetInnerHTML={{
          __html: `
            .home-v2-root,
            .home-v2-root button,
            .home-v2-root input,
            .home-v2-root select,
            .home-v2-root textarea {
              font-family: 'Albert Sans', -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Helvetica, Arial, sans-serif !important;
            }

            .home-v2-root h1,
            .home-v2-root h1 *,
            .home-v2-root h2,
            .home-v2-root h2 *,
            .home-v2-root h3,
            .home-v2-root h3 *,
            .home-v2-root .font-serif,
            .home-v2-root em {
              font-family: 'Cormorant Garamond', Georgia, Cambria, 'Times New Roman', Times, serif !important;
            }
          `,
        }}
      />
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
      <Footer />
    </div>
  );
}
