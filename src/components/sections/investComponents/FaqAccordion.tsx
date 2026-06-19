"use client";
import React, { useState, useRef } from "react";
import {
  motion,
  AnimatePresence,
  useMotionValue,
  useMotionTemplate,
  useSpring,
} from "framer-motion";

const faqs = [
  {
    q: "How is investor capital protected?",
    a: "Capital is structured against hard real estate assets — land and completed homes. The ground lease model means Humanly® retains land ownership, creating a durable asset base that anchors investor security independent of market fluctuations. Preferred return structures provide additional downside protection for early investors.",
  },
  {
    q: "What is the exit strategy?",
    a: "Humanly® is building toward a REIT conversion or institutional portfolio sale as primary exit vehicles. The HumanlyOS® licensing business creates a parallel SaaS exit pathway. Typical investment horizon is 7–10 years with targeted liquidity events tied to community milestones and platform scale.",
  },
  {
    q: "How many communities are built vs. planned?",
    a: "The Texas flagship community is currently in the development stage with groundbreak targeted in Q3 2025. Communities 2–4 are in site selection and are planned for groundbreak by 2028. Our 2032 goal of 50 communities represents the full national expansion phase, contingent on successful raise and platform replication.",
  },
  {
    q: "What is the lock-up period?",
    a: "The expected lock-up period aligns with the investment horizon of 7–10 years. However, Humanly® may offer secondary market liquidity at specific milestone gates. Details on lock-up, redemption rights, and co-investment structures are outlined in the private placement memorandum available in the data room.",
  },
  {
    q: "What AMI levels does Humanly® target?",
    a: "Humanly® communities are designed to serve households earning 80–120% of Area Median Income — the 'missing middle' workforce that earns too much for subsidized housing but cannot afford market-rate prices. This segment represents tens of millions of Americans and is largely underserved by both public programs and private developers.",
  },
  {
    q: "How does HumanlyOS® licensing generate revenue?",
    a: "Beginning in 2030, Humanly® plans to license the HumanlyOS® platform to third-party community operators, municipalities, and real estate developers. Licensing fees are structured as annual SaaS subscriptions per community, creating a high-margin recurring revenue stream that scales independently of new community construction.",
  },
  {
    q: "How does the ground lease model work?",
    a: "Humanly® retains approximately 70% of community lots on long-term ground lease rather than selling land outright. Residents purchase or lease their home while paying a ground lease fee for land access. This keeps home acquisition costs lower for residents while Humanly® retains a compounding land asset that appreciates with the community over decades.",
  },
  {
    q: "Are there co-investment rights for early investors?",
    a: "Yes. Early-stage investors in this round will have pro-rata co-investment rights in subsequent community raises and future HumanlyOS® licensing rounds. This gives early partners the ability to maintain their ownership percentage as Humanly® scales nationally. Full terms are available in the data room.",
  },
  {
    q: "What is the reporting cadence for investors?",
    a: "Investors receive quarterly performance reports covering community development milestones, financial metrics, resident enrollment, and platform KPIs. Annual audited financials are provided. Key milestone updates are communicated in real time via a dedicated investor portal powered by HumanlyOS® data infrastructure.",
  },
  {
    q: "How is AI used in the platform?",
    a: "AI is embedded across three layers: (1) The AI Community Navigator assists residents with services access, financial planning, and daily tasks. (2) AI-native Property Management automates maintenance, occupancy, and compliance workflows for operators. (3) Platform-wide data intelligence provides predictive insights for community health, financial outcomes, and infrastructure planning.",
  },
  {
    q: "What is the team's background?",
    a: "The Humanly® leadership team combines deep expertise in real estate development, AI platform engineering, capital markets, community operations, and healthcare services delivery. Combined, the team has deployed over $1B in real estate capital and operated communities serving tens of thousands of residents. Full bios are available on the Team page.",
  },
  {
    q: "When is the next raise planned?",
    a: "Following this $200M Series A, Humanly® anticipates a Series B raise timed to the Communities 2–4 groundbreak phase in 2027–2028. A third institutional raise or REIT conversion is targeted for the 2030 HumanlyOS® licensing launch. Early investors in this round will have priority access to all future rounds.",
  },
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

  const springConfig = { stiffness: 120, damping: 22, mass: 0.1 };
  const smoothX = useSpring(mouseX, springConfig);
  const smoothY = useSpring(mouseY, springConfig);

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

  const handleMouseLeave = () => { };

  const indexStr = String(idx + 1).padStart(2, "0");

  return (
    <div
      ref={cardRef}
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
      className={`group relative overflow-hidden select-none transition-all duration-500 ease-out ${isOpen
          ? "z-10 rounded-2xl border border-sandstone-300/30 border-t-sandstone-400/40 bg-sandstone-100/40 px-6 py-5 shadow-[0_12px_28px_-4px_rgba(0,0,0,0.08)] md:px-8 md:py-6"
          : "border border-transparent border-b-sandstone-300/30 bg-transparent px-6 py-4 hover:border-b-sandstone-400/40 hover:bg-sandstone-100/20 md:px-8 md:py-5"
        }`}
    >
      <motion.div
        className="pointer-events-none absolute inset-0 z-0"
        initial={{ opacity: 0 }}
        whileHover={{ opacity: 1 }}
        transition={{ duration: 0.45, ease: "easeOut" }}
        style={{
          background: sandstoneSpotlight,
        }}
      />

      {isOpen && (
        <motion.div
          className="pointer-events-none absolute inset-0 z-0 rounded-2xl"
          initial={{ opacity: 0 }}
          whileHover={{ opacity: 1 }}
          transition={{ duration: 0.45, ease: "easeOut" }}
          style={{
            background: whiteSpotlight,
          }}
        />
      )}

      <div className="relative z-10">
        <button
          onClick={onToggle}
          className="flex w-full cursor-pointer items-start justify-between gap-6 bg-transparent text-left focus:outline-none"
        >
          <div className="flex items-start gap-4 md:gap-6">
            <span
              className={`mt-1.5 font-albert text-xs font-normal tracking-wider transition-colors duration-300 md:text-sm ${isOpen
                  ? "text-[rgb(var(--radial-gradient-color))]"
                  : "text-sandstone-500/40 group-hover:text-[rgba(var(--radial-gradient-color),0.7)]"
                }`}
            >
              {indexStr}
            </span>

            <span
              className={`font-albert text-base leading-snug transition-colors duration-300 md:text-lg ${isOpen
                  ? "font-medium text-sandstone-700"
                  : "text-sandstone-500 group-hover:text-sandstone-700"
                }`}
            >
              {faq.q}
            </span>
          </div>

          <span
            className={`relative mt-0.5 flex h-8 w-8 flex-shrink-0 items-center justify-center rounded-full border border-[rgba(var(--radial-gradient-color),0.15)] transition-all duration-300 ${isOpen
                ? "border-[rgba(var(--radial-gradient-color),0.3)] bg-gradient-to-br from-[rgba(var(--radial-gradient-color),0.1)] to-transparent text-[rgb(var(--radial-gradient-color))]"
                : "border-sandstone-400/30 bg-transparent text-sandstone-500/50 group-hover:border-sandstone-400/60 group-hover:text-sandstone-600"
              }`}
          >
            <svg width="14" height="14" viewBox="0 0 12 12" fill="none">
              <rect
                x="2"
                y="5.25"
                width="8"
                height="1.5"
                rx="0.75"
                fill="currentColor"
              />
              <rect
                x="5.25"
                y="2"
                width="1.5"
                height="8"
                rx="0.75"
                fill="currentColor"
                className={`origin-center transition-transform duration-300 ${isOpen ? "rotate-90 scale-y-0" : ""
                  }`}
              />
            </svg>
          </span>
        </button>

        <AnimatePresence initial={false}>
          {isOpen && (
            <motion.div
              initial={{ height: 0, opacity: 0 }}
              animate={{ height: "auto", opacity: 1 }}
              exit={{ height: 0, opacity: 0 }}
              transition={{ duration: 0.35, ease: [0.16, 1, 0.3, 1] }}
              className="overflow-hidden"
            >
              <div className="select-text pb-1 pl-8 pr-2 pt-4 text-sm font-albert font-light leading-[24px] text-sandstone-500 md:pl-11 md:pt-5 md:text-base md:leading-[28px]">
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
    <section className="relative overflow-x-clip bg-transparent py-24 lg:py-36">
      <div className="pointer-events-none absolute inset-0 overflow-visible">
        <>
          <div
            className="absolute pointer-events-none left-[10%] top-[20%] -translate-x-1/2 -translate-y-1/2 w-[clamp(30rem,10rem+70vw,72rem)] h-[clamp(18rem,7rem+42vw,44rem)] opacity-[0.8]"
            style={{
              background:
                "radial-gradient(50% 50%, rgba(var(--radial-gradient-color, 255, 97, 54), 0.09), rgba(var(--radial-gradient-color, 255, 97, 54), 0.04) 50%, rgba(var(--radial-gradient-color, 255, 97, 54), 0))",
            }}
          />

          <div
            className="absolute pointer-events-none right-[10%] bottom-[20%] translate-x-1/2 translate-y-1/2 w-[clamp(30rem,10rem+70vw,72rem)] h-[clamp(18rem,7rem+42vw,44rem)] opacity-[0.75]"
            style={{
              background:
                "radial-gradient(50% 50%, rgba(var(--radial-gradient-color, 255, 97, 54), 0.08), rgba(var(--radial-gradient-color, 255, 97, 54), 0.03) 50%, rgba(var(--radial-gradient-color, 255, 97, 54), 0))",
            }}
          />
        </>
      </div>

      <div className="relative z-10 mx-auto w-full max-w-[1440px] px-6 md:px-12 lg:px-16">
        <div className="grid grid-cols-1 items-start gap-16 lg:grid-cols-[1.1fr_1.9fr] lg:gap-24">
          <div className="h-fit lg:sticky lg:top-32">
            <h2 className="mb-6 font-cormorant text-4xl font-normal leading-[40px] tracking-tight md:text-5xl md:leading-[52px]">
              <span className="text-sandstone-600">Frequently Asked</span> <br />
              <em className="not-italic text-[rgb(var(--radial-gradient-color))]">Questions</em>
            </h2>

            <p className="mb-8 text-pretty font-albert text-base font-light leading-[28px] text-sandstone-500 md:text-lg md:leading-[30px]">
              Everything you need to know about the investment structure,
              timeline, and platform operations.
            </p>

            <div className="hidden border-t border-sandstone-300/30 pt-8 lg:block">
              <p className="mb-3 font-albert text-xs font-medium uppercase tracking-widest text-sandstone-500/60">
                Still have questions?
              </p>
              <a
                href="#ir-contact"
                className="group inline-flex items-center gap-2 font-albert text-sm font-semibold tracking-wider text-[rgba(var(--radial-gradient-color),0.85)] transition-colors hover:text-[rgb(var(--radial-gradient-color))]"
              >
                Contact Investor Relations
                <span className="inline-block transition-transform group-hover:translate-x-1">
                  →
                </span>
              </a>
            </div>
          </div>

          <div className="flex flex-col space-y-1">
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