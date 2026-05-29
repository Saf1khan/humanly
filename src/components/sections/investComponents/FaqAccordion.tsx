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
      className={`group relative overflow-hidden transition-all duration-500 ease-out select-none ${isOpen
          ? "bg-[#111316] border border-[#d96a2b]/30 border-t-[#d96a2b]/60 shadow-[0_0_20px_rgba(217,106,43,0.1)] -translate-y-1 p-6 md:p-8 mb-6 mt-2 z-10"
          : "bg-transparent hover:bg-white/[0.015] border border-transparent border-b-white/[0.08] hover:border-b-[#d96a2b]/30 px-6 py-6 md:px-8 md:py-8"
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
            {/* Zero-padded index in mono */}
            <span className={`font-mono text-xs font-bold tracking-widest uppercase transition-colors duration-300 mt-1.5 ${isOpen
                ? "text-[#d96a2b]"
                : "text-white/30 group-hover:text-[#d96a2b]/70"
              }`}>
              .{indexStr}
            </span>

            {/* Question Text */}
            <span className={`font-mono text-[0.9rem] md:text-[1rem] leading-snug transition-colors duration-300 uppercase tracking-wide ${isOpen
                ? "text-white font-bold"
                : "text-white/70 group-hover:text-white"
              }`}>
              {faq.q}
            </span>
          </div>

          {/* Tech bracket toggle */}
          <span className={`relative flex items-center justify-center w-8 h-8 border transition-all duration-300 flex-shrink-0 mt-0.5 font-mono text-[0.7rem] tracking-tighter ${isOpen
              ? "border-[#d96a2b]/60 bg-[#d96a2b]/10 text-[#d96a2b]"
              : "border-white/15 bg-transparent text-white/40 group-hover:text-[#d96a2b] group-hover:border-[#d96a2b]/40"
            }`}>
            <span className={`transition-all duration-300 ${isOpen ? "rotate-45 scale-125" : ""}`}>
              {isOpen ? "×" : "+"}
            </span>
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
              <div className="pl-8 md:pl-11 pr-2 pt-5 pb-2 text-white/50 text-[0.82rem] font-mono leading-relaxed select-text lowercase">
                <span className="text-[#3daf98] mr-2 opacity-70">//</span>{faq.a}
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
    <section className="bg-[#0f0f0f] py-24 lg:py-36 overflow-hidden relative">
      {/* Film Grain Noise Overlay — matveyan.com */}
      <div
        className="absolute inset-0 pointer-events-none z-[1] opacity-[0.04] mix-blend-overlay"
        style={{
          backgroundImage: `url("data:image/svg+xml,%3Csvg viewBox='0 0 200 200' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='n'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.85' numOctaves='4' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23n)'/%3E%3C/svg%3E")`,
          backgroundRepeat: 'repeat',
          backgroundSize: '128px',
        }}
      />
      {/* Edge Blur — matveyan.com */}
      <div className="absolute inset-x-0 top-0 h-20 bg-gradient-to-b from-[#0f0f0f] to-transparent pointer-events-none z-[2]" />
      <div className="absolute inset-x-0 bottom-0 h-20 bg-gradient-to-t from-[#0f0f0f] to-transparent pointer-events-none z-[2]" />
      {/* Corner crosshair marks */}
      <svg width="5" height="5" viewBox="0 0 5 5" fill="none" className="absolute top-3 left-3 z-20 pointer-events-none text-white/30"><path d="M3 2H5V3H3V5H2V3H0V2H2V0H3V2Z" fill="currentColor" /></svg>
      <svg width="5" height="5" viewBox="0 0 5 5" fill="none" className="absolute top-3 right-3 z-20 pointer-events-none text-white/30"><path d="M3 2H5V3H3V5H2V3H0V2H2V0H3V2Z" fill="currentColor" /></svg>
      <svg width="5" height="5" viewBox="0 0 5 5" fill="none" className="absolute bottom-3 left-3 z-20 pointer-events-none text-white/30"><path d="M3 2H5V3H3V5H2V3H0V2H2V0H3V2Z" fill="currentColor" /></svg>
      <svg width="5" height="5" viewBox="0 0 5 5" fill="none" className="absolute bottom-3 right-3 z-20 pointer-events-none text-white/30"><path d="M3 2H5V3H3V5H2V3H0V2H2V0H3V2Z" fill="currentColor" /></svg>

      {/* ── Continuation Left – teal+blue pipes from DataRoomGate ── */}
      <div className="absolute top-0 left-[2%] lg:left-[8%] w-[280px] h-full pointer-events-none opacity-[0.30] z-[1]">
        <svg viewBox="0 0 280 900" preserveAspectRatio="xMidYMid slice" className="w-full h-full">
          {/* Teal main pipe */}
          <motion.path
            initial={{ pathLength: 0, opacity: 0 }}
            whileInView={{ pathLength: 1, opacity: 1 }}
            transition={{ duration: 2, ease: "easeOut" }}
            d="M 200 0 L 200 250 L 80 370 L 80 650 L 180 750 L 180 900"
            fill="none" stroke="#3daf98" strokeWidth="2" strokeDasharray="8 8"
          />
          {/* Blue parallel trace */}
          <motion.path
            initial={{ pathLength: 0, opacity: 0 }}
            whileInView={{ pathLength: 1, opacity: 0.45 }}
            transition={{ duration: 2.5, ease: "easeOut", delay: 0.3 }}
            d="M 140 0 L 140 220 L 40 330 L 40 600 L 140 700 L 140 900"
            fill="none" stroke="#2d7dd2" strokeWidth="1"
          />
          {/* Junction nodes */}
          <motion.rect initial={{ opacity: 0, rotate: 45 }} whileInView={{ opacity: 1, rotate: 45 }} transition={{ delay: 1.0 }}
            x="76" y="366" width="8" height="8" fill="none" stroke="#3daf98" strokeWidth="2"
            style={{ transformOrigin: "80px 370px" }}
          />
          <motion.circle initial={{ opacity: 0 }} whileInView={{ opacity: 1 }} transition={{ delay: 1.3 }}
            cx="80" cy="480" r="4" fill="#3daf98" className="animate-pulse"
          />
          <motion.polygon initial={{ opacity: 0 }} whileInView={{ opacity: 1 }} transition={{ delay: 1.6 }}
            points="180,736 189,741 189,751 180,756 171,751 171,741"
            fill="none" stroke="#3daf98" strokeWidth="1.5"
          />
          {/* Horizontal data ticks */}
          <motion.line initial={{ opacity: 0 }} whileInView={{ opacity: 1 }} transition={{ delay: 1.2 }}
            x1="80" y1="520" x2="50" y2="520" stroke="#3daf98" strokeWidth="1" strokeDasharray="3 3"
          />
          <motion.line initial={{ opacity: 0 }} whileInView={{ opacity: 1 }} transition={{ delay: 1.2 }}
            x1="80" y1="570" x2="40" y2="570" stroke="#2d7dd2" strokeWidth="1" strokeDasharray="3 3"
          />
          <circle cx="140" cy="450" r="120" fill="url(#glowLeftFaq)" />
          <defs>
            <radialGradient id="glowLeftFaq" cx="50%" cy="50%" r="50%">
              <stop offset="0%" stopColor="#3daf98" stopOpacity="0.12" />
              <stop offset="100%" stopColor="transparent" stopOpacity="0" />
            </radialGradient>
          </defs>
        </svg>
      </div>

      {/* ── Continuation Right – orange pipes from DataRoomGate ── */}
      <div className="absolute top-0 right-0 w-[380px] h-full pointer-events-none opacity-[0.30] z-[1]">
        <svg viewBox="0 0 380 900" preserveAspectRatio="xMidYMid slice" className="w-full h-full">
          {/* Primary orange pipe */}
          <motion.path
            initial={{ pathLength: 0, opacity: 0 }}
            whileInView={{ pathLength: 1, opacity: 1 }}
            transition={{ duration: 2, ease: "easeOut", delay: 0.2 }}
            d="M 280 0 L 280 300 L 120 450 L 120 700 L 220 800 L 220 900"
            fill="none" stroke="#f09050" strokeWidth="1.5" strokeDasharray="12 6"
          />
          {/* Softer trace */}
          <motion.path
            initial={{ pathLength: 0, opacity: 0 }}
            whileInView={{ pathLength: 1, opacity: 0.4 }}
            transition={{ duration: 2.5, ease: "easeOut", delay: 0.4 }}
            d="M 340 0 L 340 260 L 180 420 L 180 680 L 270 780 L 270 900"
            fill="none" stroke="#f09050" strokeWidth="1"
          />
          {/* Hexagon at first elbow */}
          <motion.polygon initial={{ opacity: 0 }} whileInView={{ opacity: 1 }} transition={{ delay: 1.2 }}
            points="280,285 291,292 291,306 280,313 269,306 269,292"
            fill="none" stroke="#f09050" strokeWidth="1.5"
          />
          {/* Pulsing dot mid-run */}
          <motion.circle initial={{ opacity: 0 }} whileInView={{ opacity: 1 }} transition={{ delay: 1.5 }}
            cx="120" cy="560" r="5" fill="#f09050" className="animate-pulse"
          />
          {/* Diamond at second elbow */}
          <motion.rect initial={{ opacity: 0, rotate: 45 }} whileInView={{ opacity: 1, rotate: 45 }} transition={{ delay: 1.8 }}
            x="216" y="796" width="8" height="8" fill="#f09050"
            style={{ transformOrigin: "220px 800px" }}
          />
          {/* Branching data ticks */}
          <motion.line initial={{ opacity: 0 }} whileInView={{ opacity: 1 }} transition={{ delay: 1.4 }}
            x1="280" y1="180" x2="310" y2="180" stroke="#f09050" strokeWidth="1" strokeDasharray="4 4"
          />
          <motion.line initial={{ opacity: 0 }} whileInView={{ opacity: 1 }} transition={{ delay: 1.4 }}
            x1="280" y1="230" x2="320" y2="230" stroke="#f09050" strokeWidth="1" strokeDasharray="4 4"
          />
          <ellipse cx="200" cy="500" rx="160" ry="250" fill="url(#glowRightFaq)" />
          <defs>
            <radialGradient id="glowRightFaq" cx="50%" cy="50%" r="50%">
              <stop offset="0%" stopColor="#f09050" stopOpacity="0.10" />
              <stop offset="100%" stopColor="transparent" stopOpacity="0" />
            </radialGradient>
          </defs>
        </svg>
      </div>

      <div className="container relative z-10 mx-auto px-6 max-w-[1200px]">
        <div className="grid grid-cols-1 lg:grid-cols-[1.1fr_1.9fr] gap-16 lg:gap-24 items-start">

          {/* Asymmetric Header Column — Tech styled */}
          <motion.div
            className="lg:sticky lg:top-32 h-fit"
            initial={{ opacity: 0, scaleX: 0, filter: "blur(4px)" }}
            whileInView={{ opacity: 1, scaleX: 1, filter: "blur(0px)" }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, ease: "easeOut" }}
          >
            <span className="text-[#d96a2b] text-[0.7rem] font-mono tracking-[0.25em] uppercase mb-4 flex items-center gap-2 origin-left">
              <span className="w-1.5 h-1.5 bg-[#d96a2b] animate-pulse" />
              [ SYSTEM.FAQ :: INVESTMENT ]
            </span>
            <motion.h2
              initial={{ opacity: 0, scaleY: 0.01, filter: "brightness(2) hue-rotate(-90deg)" }}
              whileInView={{ opacity: [0, 1, 0, 1], scaleY: [0.01, 1, 1], filter: ["brightness(2)", "brightness(1)"] }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, times: [0, 0.2, 0.4, 1], delay: 0.1 }}
              className="font-mono font-bold text-4xl md:text-5xl lg:text-[3.25rem] tracking-tighter leading-[1.1] mb-6 uppercase"
            >
              <span className="text-[#d96a2b] opacity-50 mr-2">&gt;</span>
              <span className="text-white">Frequently<br />Asked</span><br />
              <span className="text-[#d96a2b]">Questions<span className="animate-pulse">_</span></span>
            </motion.h2>
            <p className="text-white/50 text-[0.8rem] font-mono leading-relaxed max-w-[28ch] mb-8 lowercase">
              // everything you need to know about the investment structure, timeline, and platform operations.
            </p>
            <div className="pt-8 border-t border-white/[0.08] hidden lg:block">
              <p className="text-[0.65rem] font-mono text-[#3daf98]/60 uppercase tracking-widest mb-3">[ STILL_HAVE_QUESTIONS? ]</p>
              <a
                href="#ir-contact"
                className="inline-flex items-center gap-3 text-[0.75rem] font-mono uppercase tracking-widest text-[#d96a2b] hover:text-[#f09050] transition-colors group"
              >
                <span className="opacity-0 group-hover:opacity-100 transition-opacity">_</span>
                CONTACT_INVESTOR_RELATIONS
                <span className="group-hover:translate-x-1 transition-transform inline-block font-mono">[→]</span>
              </a>
            </div>
          </motion.div>

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



