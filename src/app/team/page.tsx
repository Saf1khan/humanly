import React from 'react';
import { TeamHero } from '@/components/sections/teamComponents/TeamHero';
import { TeamGrid } from '@/components/sections/teamComponents/TeamGrid';
import { PartnersAdvisors } from '@/components/sections/teamComponents/PartnersAdvisors';
import { CredentialsStrip } from '@/components/sections/teamComponents/CredentialsStrip';
import { CultureSection } from '@/components/sections/teamComponents/CultureSection';
import { Nav } from '@/components/layout/Nav';
import { Footer } from '@/components/layout/Footer';

export default function TeamPage() {
  return (
    <main className="min-h-screen">
      <Nav />
      <TeamHero />
      <TeamGrid />
      <PartnersAdvisors />
      <CredentialsStrip />
      <CultureSection />
      <Footer />
    </main>
  );
}
