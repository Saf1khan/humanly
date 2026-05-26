import { Footer } from "@/components/layout/Footer";
import { WHeroSection } from "@/components/sections/why-humanly/WHeroSection";
import { WStatsSection } from "@/components/sections/why-humanly/WStatsSection";
import { WProblemSection } from "@/components/sections/why-humanly/WProblemSection";
import { WShiftSection } from "@/components/sections/why-humanly/WShiftSection";
import { WRevenueSection } from "@/components/sections/why-humanly/WRevenueSection";
// { WCompetitiveSection } from "@/components/sections/why-humanly/WCompetitiveSection";
import { Nav } from "@/components/layout/Nav";

export const metadata = {
  title: "Why Humanly — Humanly®",
  description:
    "Every neighborhood a launchpad for human potential. AI-native, vertically integrated communities for the workforce families left behind by the housing system.",
};

export default function WhyHumanlyPage() {
  return (
    <main className="wh-page bg-[#F5F2ED] text-[#111111] min-h-screen relative">
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
          --wh-muted:     rgb(74, 71, 65);   /* Secondary Text */
          --wh-border:    rgba(17,17,17,0.08); /* Soft Border */

          --wh-ease: cubic-bezier(0.16, 1, 0.3, 1);
        }

        .wh-page .text-\[\#5F646B\] {
          color: rgb(74, 71, 65) !important;
        }

        .wh-page .text-\[\#5F646B\]\/60 {
          color: rgba(74, 71, 65, 0.6) !important;
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

      {/*
        ── Layered Radial Gradients ──────────────────────────────────────────
        All stops use px so glow radius is fixed regardless of page height.
        Page section map (% of total height ~12 600 px):
          0 –  7%  Hero
          7 – 30%  WProblemSection
         30 – 65%  WRevenueSection
         65 – 85%  WCompetitiveSection
         85 – 100% Footer

        Rule: no gradient should be detectable as a "blob" in isolation.
        Each one should only be felt as a very soft ambient shift in tone.
      */}

      {/* 1 — Warm cream · Problem section · top-left bleed
           Sits in the upper-left corner of the Problem section.
           Very soft — barely distinguishable from the base bg. */}
      <div
        className="absolute w-full h-full top-0 left-0 pointer-events-none"
        style={{
          backgroundImage:
            "radial-gradient(circle at 0% 9%, rgba(234, 220, 207, 0.55) 0px, rgba(0,0,0,0) 480px)",
        }}
      />

      {/* 2 — Blue-grey · Revenue section · left edge
           Gives the Revenue left panel its characteristic cool tint. */}
      <div
        className="absolute w-full h-full top-0 left-0 pointer-events-none"
        style={{
          backgroundImage:
            "radial-gradient(circle at 0% 36%, rgba(182, 207, 221, 0.38) 0px, rgba(0,0,0,0) 460px)",
        }}
      />

      {/* 3 — Pale cream · Revenue section · lower-left
           Warms the lower-left of the Revenue section subtly. */}
      <div
        className="absolute w-full h-full top-0 left-0 pointer-events-none"
        style={{
          backgroundImage:
            "radial-gradient(circle at 0% 57%, rgba(243, 235, 225, 0.5) 0px, rgba(0,0,0,0) 460px)",
        }}
      />

      {/* 4 — Ice blue · Problem section · right edge
           Cool accent that bleeds in from the far right. */}
      <div
        className="absolute w-full h-full top-0 left-0 pointer-events-none"
        style={{
          backgroundImage:
            "radial-gradient(circle at 100% 13%, rgba(181, 228, 254, 0.35) 0px, rgba(0,0,0,0) 440px)",
        }}
      />

      {/* 5 — Centre ambient · Revenue section · very wide, very faint
           Keeps the wide mid-page area from looking completely flat.
           Opacity is intentionally low (0.10) — must NOT read as a blob. */}
      <div
        className="absolute w-full h-full top-0 left-0 pointer-events-none"
        style={{
          backgroundImage:
            "radial-gradient(at 40% 48%, rgba(213, 195, 171, 0.10) 0px, rgba(0,0,0,0) 800px)",
        }}
      />

      {/* 6 — Amber · Competitive section · tucked to bottom-left edge
           Moved away from centre so it doesn't spotlight the heading.
           Very low opacity (0.08) — felt not seen. */}
      <div
        className="absolute w-full h-full top-0 left-0 pointer-events-none"
        style={{
          backgroundImage:
            "radial-gradient(circle at 8% 76%, rgba(255, 182, 72, 0.08) 0px, rgba(0,0,0,0) 380px)",
        }}
      />

      {/* Main Content */}
      <div className="relative z-10">
        <Nav />

        <WHeroSection />

        <WProblemSection />

        <WRevenueSection />

        {/* <WCompetitiveSection /> */}

        <WStatsSection />

        <div className="bg-black">
          <WShiftSection />
        </div>

        <Footer />
      </div>
    </main>
  );
}
