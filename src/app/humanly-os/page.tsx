import OSFinancialFoundationMerged from "@/components/sections/humanlyOSComponents/OSFinancialFoundationMerged";
import OSFinancialFoundation from "@/components/sections/humanlyOSComponents/OSFinancialFoundation";
import OSHero from "@/components/sections/humanlyOSComponents/OSHero";
import OSJourney from "@/components/sections/humanlyOSComponents/OSJourney";
import OSPlatformMatrix from "@/components/sections/humanlyOSComponents/OSPlatformMatrix";
import OSServicesQuote from "@/components/sections/humanlyOSComponents/OSServicesQuote";
import OSTransactionIntegration from "@/components/sections/humanlyOSComponents/OSTransactionIntegration";
import OSCircleOfServices from "@/components/sections/humanlyOSComponents/OSCircleOfServices";
import { Footer } from "@/components/layout/Footer";

export const metadata = {
  title: "HumanlyOS® — The Operating System",
  description: "A converged platform unifying property management, resident experience, and service delivery.",
};

export default function HumanlyOSPage() {
  return (
    <main 
      className="relative overflow-hidden"
      style={{
        backgroundColor: 'rgb(75, 95, 104)',
        backgroundImage: 'url("https://d2o9p5vky89u4e.cloudfront.net/MGFjMmZkODA4MmFmLm8zbi5pbw%3D%3D/l9bkxtucizywp9dbc45e7z0gb/b3VyYXJpbmcuY29t/img.gif")',
        backgroundRepeat: 'repeat',
        backgroundSize: 'auto'
      }}
    >
      {/* Layered radial glow overlays — spanning the whole page */}
      <div className="absolute inset-0 pointer-events-none z-[2]" style={{ background: 'radial-gradient(circle at 10% 0%, rgba(215, 226, 232, 0.3) 0%, transparent 30%)' }} />
      <div className="absolute inset-0 pointer-events-none z-[2]" style={{ background: 'radial-gradient(circle at 75% 100%, rgba(143, 163, 185, 0.2) 0%, transparent 30%)' }} />
      <div className="absolute inset-0 pointer-events-none z-[2]" style={{ background: 'radial-gradient(circle at 99% 0%, rgba(143, 163, 185, 0.2) 0%, transparent 30%)' }} />
      <div className="absolute inset-0 pointer-events-none z-[2]" style={{ background: 'radial-gradient(at 0% 10%, rgba(56, 73, 84, 1) 0%, transparent 40%)' }} />

      <OSHero />
      {/* <OSFinancialFoundation />
      <OSServicesQuote /> */}
      <OSFinancialFoundationMerged />
      <OSCircleOfServices />
      <OSTransactionIntegration />
      <OSJourney />
      <OSPlatformMatrix />
      <Footer />
    </main>
  );
}
