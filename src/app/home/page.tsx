import React from 'react';
import { Hero } from '@/components/sections/home/Hero';
import { ProblemStats } from '@/components/sections/home/ProblemStats';
import { MissionQuote } from '@/components/sections/home/MissionQuote';
import { PlatformStack } from '@/components/sections/home/PlatformStack';
import { HumanlyOSSection } from '@/components/sections/home/HumanlyOSStrip';
import { CircleOfServicesSection } from '@/components/sections/home/CircleOfServices';
import { CommunityPreview } from '@/components/sections/home/CommunityPreview';
import { WhyNow } from '@/components/sections/home/WhyNow';
import { TeamSection } from '@/components/sections/home/TeamTeaser';
import { Footer } from '@/components/layout/Footer';
import { InvestmentThesisSection } from '@/components/sections/InvestmentThesisSection';

export default function HomeV2() {
  return (
    <div className="home-v2-root">
      <main>
        <Hero />
        <ProblemStats />
        <MissionQuote />
        <InvestmentThesisSection />
        <PlatformStack />
        <HumanlyOSSection />
        <CircleOfServicesSection />
        <CommunityPreview />
        <WhyNow />
        <TeamSection />
      </main>
      <Footer />
    </div>
  );
}
