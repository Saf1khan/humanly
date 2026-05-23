"use client";
import React, { useState, useRef } from 'react';
import { motion, AnimatePresence, useMotionValue, useMotionTemplate, useSpring } from 'framer-motion';

const faqs = [
  { q: "How is investor capital protected?", a: "Capital is structured against hard real estate assets — land and completed homes. The ground lease model means Humanly® retains land ownership, creating a durable asset base that anchors investor security independent of market fluctuations. Preferred return structures provide additional downside protection for early investors." },
  { q: "What is the exit strategy?", a: "Humanly® is building toward a REIT conversion or institutional portfolio sale as primary exit vehicles. The HumanlyOS® licensing business creates a parallel SaaS exit pathway. Typical investment horizon is 7–10 years with targeted liquidity events tied to community milestones and platform scale." },
  { q: "How many communities are built vs. planned?", a: "The Texas flagship community is currently in the development stage with groundbreak targeted in Q3 2025. Communities 2–4 are in site selection and are planned for groundbreak by 2028. Our 2032 goal of 50 communities represents the full national expansion phase, contingent on successful raise and platform replication." },
  { q: "What is the lock-up period?", a: "The expected lock-up period aligns with the investment horizon of 7–10 years. However, Humanly® may offer secondary market liquidity at specific milestone gates. Details on lock-up, redemption rights, and co-investment structures are outlined in the private placement memorandum available in the data room." },
  { q: "What AMI levels does Humanly® target?", a: "Humanly® communities are designed to serve households earning 80–120% of Area Median Income — the 'missing middle' workforce that earns too much for subsidized housing but cannot afford market-rate prices. This segment represents tens of millions of Americans and is largely underserved by both public programs and private developers." },
  { q: "How does HumanlyOS® licensing generate revenue?", a: "Beginning in 2030, Humanly® plans to license the HumanlyOS® platform to third-party community operators, municipalities, and real estate developers. Licensing fees are structured as annual SaaS subscriptions per community, creating a high-margin recurring revenue stream that scales independently of new community construction." },
  { q: "How does the ground lease model work?", a: "Humanly® retains approximately 70% of community lots on long-term ground lease rather than selling land outright. Residents purchase or lease their home while paying a ground lease fee for land access. This keeps home acquisition costs lower for residents while Humanly® retains a compounding land asset that appreciates with the community over decades." },
  { q: "Are there co-investment rights for early investors?", a: "Yes. Early-stage investors in this round will have pro-rata co-investment rights in subsequent community raises and future HumanlyOS® licensing rounds. This gives early partners the ability to maintain their ownership percentage as Humanly® scales nationally. Full terms are available in the data room." },
  { q: "What is the reporting cadence for investors?", a: "Investors receive quarterly performance reports covering community development milestones, financial metrics, resident enrollment, and platform KPIs. Annual audited financials are provided. Key milestone updates are communicated in real time via a dedicated investor portal powered by HumanlyOS® data infrastructure." },
  { q: "How is AI used in the platform?", a: "AI is embedded across three layers: (1) The AI Community Navigator assists residents with services access, financial planning, and daily tasks. (2) AI-native Property Management automates maintenance, occupancy, and compliance workflows for operators. (3) Platform-wide data intelligence provides predictive insights for community health, financial outcomes, and infrastructure planning." },
  { q: "What is the team's background?", a: "The Humanly® leadership team combines deep expertise in real estate development, AI platform engineering, capital markets, community operations, and healthcare services delivery. Combined, the team has deployed over $1B in real estate capital and operated communities serving tens of thousands of residents. Full bios are available on the Team page." },
  { q: "When is the next raise planned?", a: "Following this $200M Series A, Humanly® anticipates a Series B raise timed to the Communities 2–4 groundbreak phase in 2027–2028. A third institutional raise or REIT conversion is targeted for the 2030 HumanlyOS® licensing launch. Early investors in this round will have priority access to all future rounds." }
];

interface FaqItemProps {
  faq: { q: string; a: string };
  idx: number;
  isOpen: boolean;
  onToggle: () => void;
}

const FaqItem = ({ faq, idx, isOpen, onToggle }: FaqItemProps) => {
  const cardRef = useRef<HTMLDivElement>(null);
  const mouseX = useMotionValue(0);
  const mouseY = useMotionValue(0);

  // Add subtle damping and high-end spring stiffness to glide coordinates fluidly
  const springConfig = { stiffness: 120, damping: 22, mass: 0.1 };
  const smoothX = useSpring(mouseX, springConfig);
  const smoothY = useSpring(mouseY, springConfig);

  // Unconditional hook calls at the top-level of the component to follow the Rules of Hooks
  const sandstoneSpotlight = useMotionTemplate`
    radial-gradient(
      320px circle at ${smoothX}px ${smoothY}px,
      rgba(217, 106, 43, 0.05),
      transparent 70%
    )
  `;

  const whiteSpotlight = useMotionTemplate`
    radial-gradient(
      400px circle at ${smoothX}px ${smoothY}px,
      rgba(255, 255, 255, 0.02),
      transparent 70%
    )
  `;

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    const rect = cardRef.current?.getBoundingClientRect();
    if (!rect) return;
    mouseX.set(e.clientX - rect.left);
    mouseY.set(e.clientY - rect.top);
  };

  const handleMouseLeave = () => {
    // Retain last coordinate to prevent visual snapping to (0,0) during the 500ms fade-out transition
  };

  const indexStr = String(idx + 1).padStart(2, '0');

  return (
    <div
      ref={cardRef}
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
      className={`group relative overflow-hidden transition-all duration-500 ease-out select-none ${
        isOpen 
          ? "bg-gradient-to-br from-white/[0.04] to-white/[0.01] border border-white/10 border-t-white/[0.18] rounded-2xl shadow-[0_12px_28px_-4px_rgba(0,0,0,0.5)] -translate-y-1 p-6 md:p-8 mb-6 mt-2 z-10" 
          : "bg-transparent hover:bg-white/[0.015] border border-transparent border-b-white/[0.08] hover:border-b-white/20 px-6 py-6 md:px-8 md:py-8"
      }`}
    >
      {/* Premium Warm Sandstone Moving Spotlight */}
      <motion.div
        className="absolute inset-0 pointer-events-none z-0"
        initial={{ opacity: 0 }}
        whileHover={{ opacity: 1 }}
        transition={{ duration: 0.45, ease: "easeOut" }}
        style={{
          background: sandstoneSpotlight
        }}
      />

      {/* Extra Soft Internal Sheen (Follows cursor over the elevated open card) */}
      {isOpen && (
        <motion.div
          className="absolute inset-0 pointer-events-none z-0 rounded-2xl"
          initial={{ opacity: 0 }}
          whileHover={{ opacity: 1 }}
          transition={{ duration: 0.45, ease: "easeOut" }}
          style={{
            background: whiteSpotlight
          }}
        />
      )}

      {/* Content Content Container */}
      <div className="relative z-10">
        <button
          onClick={onToggle}
          className="w-full text-left flex items-start justify-between gap-6 bg-transparent cursor-pointer focus:outline-none"
        >
          <div className="flex gap-4 md:gap-6 items-start">
            {/* Zero-padded index number */}
            <span className={`font-sans text-xs md:text-sm font-semibold tracking-wider transition-colors duration-300 mt-1.5 ${
              isOpen 
                ? "text-[#d96a2b]" 
                : "text-white/30 group-hover:text-[#d96a2b]/70"
            }`}>
              {indexStr}
            </span>
            
            {/* Question Text */}
            <span className={`font-serif text-lg md:text-xl leading-snug transition-colors duration-300 ${
              isOpen 
                ? "text-white font-bold" 
                : "text-white/80 group-hover:text-white"
            }`}>
              {faq.q}
            </span>
          </div>

          {/* Custom morphing plus/minus icon */}
          <span className={`relative flex items-center justify-center w-8 h-8 rounded-full border transition-all duration-300 flex-shrink-0 mt-0.5 ${
            isOpen 
              ? "border-[#d96a2b]/30 bg-gradient-to-br from-[#d96a2b]/10 to-transparent text-[#d96a2b]" 
              : "border-white/15 bg-transparent text-white/40 group-hover:text-white group-hover:border-white/30"
          }`}>
            <svg width="10" height="10" viewBox="0 0 12 12" fill="none">
              <rect x="2" y="5.25" width="8" height="1.5" rx="0.75" fill="currentColor" />
              <rect 
                x="5.25" 
                y="2" 
                width="1.5" 
                height="8" 
                rx="0.75" 
                fill="currentColor"
                className={`origin-center transition-transform duration-300 ${isOpen ? "scale-y-0 rotate-90" : ""}`}
              />
            </svg>
          </span>
        </button>

        <AnimatePresence initial={false}>
          {isOpen && (
            <motion.div
              initial={{ height: 0, opacity: 0 }}
              animate={{ height: 'auto', opacity: 1 }}
              exit={{ height: 0, opacity: 0 }}
              transition={{ duration: 0.35, ease: [0.16, 1, 0.3, 1] }}
              className="overflow-hidden"
            >
              <div className="pl-8 md:pl-11 pr-2 pt-5 pb-2 text-white/60 text-base leading-relaxed font-light select-text">
                {faq.a}
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </div>
  );
};

export const FaqAccordion = () => {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  return (
    <section className="bg-[#0e1b26] py-24 lg:py-36 border-t border-white/[0.08] overflow-hidden relative">
      
      {/* Subtle Background Gradient Spotlights (No digital glow, just ambient warm & cool clay tones) */}
      <div className="absolute inset-0 pointer-events-none overflow-hidden">
        <div 
          className="absolute inset-0 opacity-[0.8]"
          style={{
            background: `
              radial-gradient(circle at 10% 20%, rgba(217, 106, 43, 0.04) 0%, transparent 60%),
              radial-gradient(circle at 90% 80%, rgba(61, 175, 152, 0.03) 0%, transparent 60%)
            `
          }}
        />
      </div>

      <div className="container relative z-10 mx-auto px-6 max-w-[1200px]">
        <div className="grid grid-cols-1 lg:grid-cols-[1.1fr_1.9fr] gap-16 lg:gap-24 items-start">
          
          {/* Asymmetric Header Column */}
          <div className="lg:sticky lg:top-32 h-fit">
            <span className="text-[#d96a2b] text-[0.72rem] font-bold tracking-[0.22em] uppercase mb-4 block">
              Investment FAQ
            </span>
            <h2 className="font-serif text-4xl md:text-5xl lg:text-[3.25rem] tracking-tight leading-[1.1] mb-6">
              <span className="bg-gradient-to-r from-white via-white to-white/70 bg-clip-text text-transparent">
                Frequently Asked
              </span> <br />
              <em className="not-italic bg-gradient-to-r from-[#d96a2b] via-[#e27d3b] to-[#f09050] bg-clip-text text-transparent">
                Questions.
              </em>
            </h2>
            <p className="text-white/60 text-lg font-light leading-relaxed max-w-[28ch] mb-8">
              Everything you need to know about the investment structure, timeline, and platform operations.
            </p>
            <div className="pt-8 border-t border-white/[0.08] hidden lg:block">
              <p className="text-[0.72rem] text-white/40 uppercase tracking-widest font-bold mb-3">Still have questions?</p>
              <a 
                href="#ir-contact" 
                className="inline-flex items-center gap-2 text-[0.88rem] font-bold text-[#d96a2b] hover:text-[#f09050] transition-colors group"
              >
                Contact Investor Relations 
                <span className="group-hover:translate-x-1 transition-transform inline-block">→</span>
              </a>
            </div>
          </div>

          {/* Accordion Column */}
          <div className="flex flex-col">
            {faqs.map((faq, idx) => {
              const isOpen = openIndex === idx;

              return (
                <FaqItem
                  key={idx}
                  faq={faq}
                  idx={idx}
                  isOpen={isOpen}
                  onToggle={() => setOpenIndex(isOpen ? null : idx)}
                />
              );
            })}
          </div>

        </div>
      </div>
    </section>
  );
};



