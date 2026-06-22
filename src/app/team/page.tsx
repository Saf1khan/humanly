import React from 'react';
import { TeamHero } from '@/components/sections/teamComponents/TeamHero';
import { TeamGrid } from '@/components/sections/teamComponents/TeamGrid';
import { PartnersAdvisors } from '@/components/sections/teamComponents/PartnersAdvisors';
import { CredentialsStrip } from '@/components/sections/teamComponents/CredentialsStrip';
import { CultureSection } from '@/components/sections/teamComponents/CultureSection';
import { Footer } from '@/components/layout/Footer';

export default function TeamPage() {
  return (
    <main className="min-h-screen relative" style={{ backgroundColor: "#f7f1e8" }}>
      {/* Single continuous ambient gradient spanning the entire page */}
      <div className="absolute inset-0 pointer-events-none z-0 overflow-visible">
        <div className="absolute inset-0" style={{ backgroundImage: "radial-gradient(circle at 8% 8%, rgba(101, 115, 108, 0.22) 0%, transparent 28%)" }} />
        <div className="absolute inset-0" style={{ backgroundImage: "radial-gradient(circle at 92% 22%, rgba(118, 118, 100, 0.16) 0%, transparent 28%)" }} />
        <div className="absolute inset-0" style={{ backgroundImage: "radial-gradient(circle at 6% 52%, rgba(115, 120, 107, 0.18) 0%, transparent 28%)" }} />
        <div className="absolute inset-0" style={{ backgroundImage: "radial-gradient(circle at 94% 70%, rgba(101, 115, 108, 0.14) 0%, transparent 25%)" }} />
        <div className="absolute inset-0" style={{ backgroundImage: "radial-gradient(circle at 8% 88%, rgba(118, 118, 100, 0.18) 0%, transparent 28%)" }} />
      </div>
      <TeamHero />
      <TeamGrid />
      <PartnersAdvisors />
      <CredentialsStrip />
      <CultureSection />
    </main>
  );
}
