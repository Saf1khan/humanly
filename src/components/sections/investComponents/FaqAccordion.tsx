"use client";
import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

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

export const FaqAccordion = () => {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  return (
    <section className="bg-[#f2f0eb] py-20 lg:py-32">
      <div className="container mx-auto px-6 max-w-[1200px]">
        <div className="text-center mb-16">
          <div className="h-[3px] w-[72px] rounded-full bg-gradient-to-r from-[#1a4f82] via-[#2d7dd2] to-[#d96a2b] mx-auto mb-4" />
          <h2 className="font-serif text-3xl md:text-4xl text-[#1a1a1a]">Frequently Asked Questions</h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 items-start">
          {faqs.map((faq, idx) => (
            <div key={idx} className="bg-white rounded-2xl border border-black/5 overflow-hidden shadow-sm">
              <button 
                onClick={() => setOpenIndex(openIndex === idx ? null : idx)}
                className="w-full text-left px-6 py-5 flex items-start justify-between gap-4 hover:bg-[#1a4f82]/[0.02] transition-colors group"
              >
                <span className="font-serif text-[1.05rem] text-[#1a1a1a] leading-snug">{faq.q}</span>
                <span className={`text-[#2d7dd2] transition-transform duration-300 flex-shrink-0 mt-1 ${openIndex === idx ? 'rotate-180' : ''}`}>
                  ▼
                </span>
              </button>
              <AnimatePresence>
                {openIndex === idx && (
                  <motion.div 
                    initial={{ height: 0, opacity: 0 }}
                    animate={{ height: 'auto', opacity: 1 }}
                    exit={{ height: 0, opacity: 0 }}
                    transition={{ duration: 0.3 }}
                    className="overflow-hidden"
                  >
                    <div className="px-6 pb-6 text-[0.93rem] text-[#5a5a5a] leading-relaxed border-t border-black/5 pt-4">
                      {faq.a}
                    </div>
                  </motion.div>
                )}
              </AnimatePresence>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
