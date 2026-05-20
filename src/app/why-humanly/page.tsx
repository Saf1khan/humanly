import { Footer } from "@/components/layout/Footer";
import { WHeroSection } from "@/components/sections/why-humanly/WHeroSection";
import { WStatsSection } from "@/components/sections/why-humanly/WStatsSection";
import { WProblemSection } from "@/components/sections/why-humanly/WProblemSection";
import { WShiftSection } from "@/components/sections/why-humanly/WShiftSection";
import { WRevenueSection } from "@/components/sections/why-humanly/WRevenueSection";
import { WCompetitiveSection } from "@/components/sections/why-humanly/WCompetitiveSection";

export const metadata = {
  title: "Why Humanly — Humanly®",
  description:
    "Every neighborhood a launchpad for human potential. AI-native, vertically integrated communities for the workforce families left behind by the housing system.",
};

export default function WhyHumanlyPage() {
  return (
    <main className="wh-page font-['Plus_Jakarta_Sans',system-ui,sans-serif] bg-[#f0edeb] text-[#111111] overflow-x-hidden min-h-screen">
      <style dangerouslySetInnerHTML={{ __html: `
        /* ============================================================
           Why Humanly — Scoped Styles  (wh- prefix)
           Light Theme based on Design Tokens
           ============================================================ */

        .wh-page {
          /* --- design token colors --- */
          --wh-primary:   #ff7e5d;   /* color-9  — single main accent */
          --wh-blue:      #0099ff;   /* color-10 — secondary blue     */
          --wh-bg:        #f0edeb;   /* color-4  — page background    */
          --wh-surface:   #ffffff;   /* color-5  — card surface       */
          --wh-text:      #111111;   /* color-2  — primary text       */
          --wh-muted:     #827e7a;   /* color-6  — muted text         */
          --wh-border:    #e0e4e5;   /* color-8  — border/divider     */
          
          --wh-ease: cubic-bezier(0.16, 1, 0.3, 1);
        }

        /* --- reveal animations --- */
        .wh-rv, .wh-rvl, .wh-rvr, .wh-rvs, .wh-sg { opacity: 0; }
        .wh-rv  { transform: translateY(60px);  transition: opacity 1s var(--wh-ease), transform 1.2s var(--wh-ease); }
        .wh-rvl { transform: translateX(-60px); transition: opacity 1s var(--wh-ease), transform 1.2s var(--wh-ease); }
        .wh-rvr { transform: translateX(60px);  transition: opacity 1s var(--wh-ease), transform 1.2s var(--wh-ease); }
        .wh-rvs { transform: scale(.92);        transition: opacity 1s var(--wh-ease), transform 1.2s var(--wh-ease); }
        .wh-sg  { transform: translateY(40px);  transition: opacity .8s var(--wh-ease), transform 1s var(--wh-ease); }
        .wh-on  { opacity: 1 !important; transform: none !important; }

        @media (prefers-reduced-motion: reduce) {
          .wh-rv, .wh-rvl, .wh-rvr, .wh-rvs, .wh-sg { opacity: 1; transform: none; }
        }
      ` }} />

      <WHeroSection />

      <WStatsSection />

      <div className="h-[1px] bg-gradient-to-r from-transparent via-[rgba(224,228,229,0.3)] to-transparent mx-auto max-w-[1200px]" />

      <WProblemSection />

      <div className="h-[1px] bg-gradient-to-r from-transparent via-[rgba(224,228,229,0.3)] to-transparent mx-auto max-w-[1200px]" />

      <WShiftSection />

      <div className="h-[1px] bg-gradient-to-r from-transparent via-[rgba(224,228,229,0.3)] to-transparent mx-auto max-w-[1200px]" />

      <WRevenueSection />

      <div className="h-[1px] bg-gradient-to-r from-transparent via-[rgba(224,228,229,0.3)] to-transparent mx-auto max-w-[1200px]" />

      <WCompetitiveSection />

      <Footer />
    </main>
  );
}
