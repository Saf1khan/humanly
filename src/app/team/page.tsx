import React from 'react';
import { TeamHero } from '@/components/sections/teamComponents/TeamHero';
import { LeadershipGrid } from '@/components/sections/teamComponents/LeadershipGrid';
import { DevTeamGrid } from '@/components/sections/teamComponents/DevTeamGrid';
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
      <LeadershipGrid />
      <DevTeamGrid />
      <PartnersAdvisors />
      <CredentialsStrip />
      <CultureSection />
      <Footer />
    </main>
  );
}
