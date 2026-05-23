import { Footer } from "@/components/layout/Footer";
import { WHeroSection } from "@/components/sections/why-humanly/WHeroSection";
import { WStatsSection } from "@/components/sections/why-humanly/WStatsSection";
import { WProblemSection } from "@/components/sections/why-humanly/WProblemSection";
import { WShiftSection } from "@/components/sections/why-humanly/WShiftSection";
import { WRevenueSection } from "@/components/sections/why-humanly/WRevenueSection";
import { WCompetitiveSection } from "@/components/sections/why-humanly/WCompetitiveSection";
import { Nav } from "@/components/layout/Nav";

export const metadata = {
  title: "Why Humanly — Humanly®",
  description:
    "Every neighborhood a launchpad for human potential. AI-native, vertically integrated communities for the workforce families left behind by the housing system.",
};

export default function WhyHumanlyPage() {
  return (
    <main className="wh-page bg-sandstone-200 text-[#111111] min-h-screen">
      <style
        dangerouslySetInnerHTML={{
          __html: `
        /* ============================================================
           Why Humanly — Scoped Styles  (wh- prefix)
           Light Theme based on Design Tokens
           ============================================================ */

        .wh-page {
          /* --- design token colors --- */
          --wh-primary:   #6E7C8D;   /* Premium Accent */
          --wh-blue:      #A3B2C3;   /* Highlight Accent */
          --wh-bg:        #E7E3DC;   /* Primary Background */
          --wh-surface:   rgba(255,255,255,0.32); /* Glass Surface */
          --wh-text:      #111111;   /* Primary Text */
          --wh-muted:     #5F646B;   /* Secondary Text */
          --wh-border:    rgba(17,17,17,0.08); /* Soft Border */

          --wh-ease: cubic-bezier(0.16, 1, 0.3, 1);
        }

        .wh-page,
        .wh-page button,
        .wh-page input,
        .wh-page select,
        .wh-page textarea {
          font-family: 'Albert Sans', -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Helvetica, Arial, sans-serif !important;
        }

        .wh-page h1,
        .wh-page h1 *,
        .wh-page h2,
        .wh-page h2 *,
        .wh-page h3,
        .wh-page h3 *,
        .wh-page .font-serif,
        .wh-page em {
          font-family: 'Cormorant Garamond', Georgia, Cambria, 'Times New Roman', Times, serif !important;
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
      `,
        }}
      />
      <Nav />

      <WHeroSection />

      {/* <WStatsSection />

      <div className="h-[1px] bg-gradient-to-r from-transparent via-[#6E7C8D]/20 to-transparent mx-auto max-w-[1200px]" /> */}

      <WProblemSection />

      <div className="h-[1px] bg-gradient-to-r from-transparent via-[#6E7C8D]/20 to-transparent mx-auto max-w-[1200px]" />

      {/* <WShiftSection />

      <div className="h-[1px] bg-gradient-to-r from-transparent via-[#6E7C8D]/20 to-transparent mx-auto max-w-[1200px]" /> */}

      <WRevenueSection />

      <div className="h-[1px] bg-gradient-to-r from-transparent via-[#6E7C8D]/20 to-transparent mx-auto max-w-[1200px]" />

      <WCompetitiveSection />

      <Footer />
    </main>
  );
}
