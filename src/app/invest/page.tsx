import React from 'react';
import { InvestHero } from '@/components/sections/investComponents/InvestHero';
import { MetricsCards } from '@/components/sections/investComponents/MetricsCards';
import { MilestoneRoadmap } from '@/components/sections/investComponents/MilestoneRoadmap';
import { DataRoomForm } from '@/components/features/DataRoomForm';
import { FaqAccordion } from '@/components/sections/investComponents/FaqAccordion';
import { IrContactCard } from '@/components/sections/investComponents/IrContactCard';
import { Footer } from '@/components/layout/Footer';

export default function InvestPage() {
  return (
    <main className="min-h-screen bg-sandstone-200" style={{ '--radial-gradient-color': '255, 97, 54' } as React.CSSProperties}>
      <InvestHero />
      <MetricsCards />
      <MilestoneRoadmap />
      <FaqAccordion />
      <IrContactCard />
      <DataRoomForm />
      <Footer />
    </main>
  );
}
