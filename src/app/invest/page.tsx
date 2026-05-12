import React from 'react';
import { InvestHero } from '@/components/sections/investComponents/InvestHero';
import { MetricsCards } from '@/components/sections/investComponents/MetricsCards';
import { MilestoneRoadmap } from '@/components/sections/investComponents/MilestoneRoadmap';
import { DataRoomGate } from '@/components/sections/investComponents/DataRoomGate';
import { FaqAccordion } from '@/components/sections/investComponents/FaqAccordion';
import { IrContactCard } from '@/components/sections/investComponents/IrContactCard';
import { Nav } from '@/components/layout/Nav';
import { Footer } from '@/components/layout/Footer';

export default function InvestPage() {
  return (
    <main className="min-h-screen">
      <Nav />
      <InvestHero />
      <MetricsCards />
      <MilestoneRoadmap />
      <DataRoomGate />
      <FaqAccordion />
      <IrContactCard />
      <Footer />
    </main>
  );
}
