import { PlatformHero } from "@/components/sections/PlatformSectionComponents/PlatformHero";
import { PlatformThesis } from "@/components/sections/PlatformSectionComponents/PlatformThesis";
import { VerticalStack } from "@/components/sections/PlatformSectionComponents/VerticalStack";
import { PhasesTabSection } from "@/components/sections/PlatformSectionComponents/PhasesTabSection";
//import { IntelligenceFlywheel } from "./IntelligenceFlywheel";
import { Footer } from "@/components/layout/Footer";

export default function PlatformPage() {
  return (
    <main className="min-h-screen bg-sandstone-200">
      <div className="bg-sandstone text-slate-900">
        <PlatformHero />
        <div className="relative">
          <PlatformThesis />
          <VerticalStack />
        </div>
        <PhasesTabSection />
      </div>
      <Footer />
    </main>
  );
}

