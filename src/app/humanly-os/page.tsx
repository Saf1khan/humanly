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
    <main className="bg-[#0f0f0e]">
      <OSHero />
      <OSFinancialFoundation />
      <OSServicesQuote />
      <OSCircleOfServices />
      <OSTransactionIntegration />
      <OSFinancialFoundationMerged />
      <OSJourney />
      <OSPlatformMatrix />
      <Footer />
    </main>
  );
}
