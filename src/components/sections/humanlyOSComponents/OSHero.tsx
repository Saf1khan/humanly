"use client";

import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

const PILLARS = [
  {
    id: 1,
    name: "AI-Native Property Management",
    desc: "Intelligent, automated operations that adapt to community needs in real time. Maintenance, compliance, and cost optimization — handled.",
    color: "#e8622a",
    features: [
      { text: "Predictive maintenance alerts", highlight: true },
      { text: "Automated lease & compliance tracking", highlight: true },
      { text: "Cost optimization engine", highlight: false },
      { text: "Vendor coordination workflows", highlight: false },
      { text: "Real-time occupancy analytics", highlight: false },
    ]
  },
  {
    id: 2,
    name: "AI Community Navigator",
    desc: "A personal AI assistant for every resident. Simplifies daily life, connects to services, and anticipates needs before they arise.",
    color: "#4a7fd4",
    features: [
      { text: "Personalized daily briefings", highlight: true },
      { text: "Service booking & scheduling", highlight: true },
      { text: "Community event discovery", highlight: false },
      { text: "Resource & benefit navigation", highlight: false },
      { text: "Health & wellness prompts", highlight: false },
    ]
  },
  {
    id: 3,
    name: "Circle of Services® Marketplace",
    desc: "An integrated ecosystem of essential services — healthcare, education, wellness, food, and work — available on and offline from one hub.",
    color: "#8b5cf6",
    features: [
      { text: "8 service verticals integrated", highlight: true },
      { text: "Revenue share with service partners", highlight: true },
      { text: "On + offline delivery modes", highlight: false },
      { text: "Community-wide discounts", highlight: false },
      { text: "Usage data feeds OS learning", highlight: false },
    ]
  }
];

const OSHero = () => {
  const [activePillar, setActivePillar] = useState<number | null>(null);

  return (
    <section className="bg-[#4C5C68] pb-[clamp(3rem,7vw,5rem)]">
      {/* ─── Hero Part ─── */}
      <div className="relative w-full min-h-[70vh] lg:min-h-[85vh] flex flex-col justify-center items-center overflow-hidden mb-24 lg:mb-32">
        {/* Background Image & Overlay */}
        <div className="absolute inset-0 z-0">
          <img
            src="/images/AdobeStock_308963762.jpeg"
            alt="HumanlyOS Hero Background"
            className="w-full h-full object-cover object-center block opacity-100"
            loading="eager"
          />
          <div className="absolute inset-0 bg-black/50 bg-gradient-to-b from-black/30 via-transparent to-[#4C5C68]"></div>
        </div>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.1 }}
          className="relative z-10 flex flex-col items-center text-center p-[clamp(2rem,5vw,4rem)] max-w-5xl bg-black/20 backdrop-blur-md border border-white/10 rounded-3xl shadow-2xl"
        >
          <p className="text-[0.75rem] font-bold tracking-[0.14em] uppercase text-[#5ba3e0] mb-4">
            THE OPERATING SYSTEM
          </p>
          <div className="h-[3px] rounded-[2px] w-[84px] bg-gradient-to-r from-[#1a4f82] via-[#2d7dd2] to-[#d96a2b] mb-4"></div>
          <h1 className="font-serif text-[clamp(2rem,4vw,4rem)] font-normal leading-[1.18] my-4 text-white drop-shadow-md">
            HumanlyOS® vertically <br className="hidden md:block" />
            integrated community <br className="hidden md:block" />
            development and operations.
          </h1>

        </motion.div>
      </div>

      {/* ─── OS Overview (2-col) with Reveal 3 Pillar Cards ─── */}
      <div className="max-w-[1280px] mx-auto px-6 md:px-12 grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-24 items-start">
        {/* Left: Text Content */}
        <div className="lg:col-span-5 space-y-8">
          <div className="space-y-4">
            <div className="font-sans text-xs font-medium tracking-[0.2em] text-[#aeb6be] uppercase">p14 / OS OVERVIEW</div>
            <h2 className="font-sans text-4xl md:text-5xl font-bold leading-tight text-white uppercase">
              One Platform.<br />
              Three-Sided Impact.
            </h2>
          </div>
          <p className="text-[#e2e8f0] text-lg font-sans font-light leading-relaxed">
            A single converged platform unifying property management, resident experience, and service delivery. Every interaction feeds intelligence back into the system, creating a self-improving loop that benefits operators, residents, and service partners simultaneously.
          </p>
        </div>

        {/* Right: 3 Pillar Cards */}
        <div className="lg:col-span-7 grid grid-cols-1 md:grid-cols-2 gap-4">
          {PILLARS.map((pillar, idx) => (
            <motion.div
              key={pillar.id}
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ delay: idx * 0.1 }}
              onClick={() => setActivePillar(activePillar === pillar.id ? null : pillar.id)}
              className={`group relative p-8 bg-white/10 backdrop-blur-xl border border-white/10 rounded-2xl cursor-pointer transition-all duration-500 hover:bg-white/20 hover:border-white/20 shadow-sm ${idx === 2 ? 'md:col-span-2' : ''} ${activePillar === pillar.id ? 'bg-white/20 ring-1 ring-white/20 shadow-xl' : ''}`}
            >
              <div className="h-0.5 w-10 rounded-full mb-6" style={{ backgroundColor: pillar.color }} />

              <h4 className="font-sans text-xl font-bold text-white mb-3 uppercase">{pillar.name}</h4>
              <p className="text-[#f7f6f2] text-sm font-light leading-relaxed mb-4">{pillar.desc}</p>

              <AnimatePresence>
                {activePillar === pillar.id && (
                  <motion.div
                    initial={{ height: 0, opacity: 0 }}
                    animate={{ height: 'auto', opacity: 1 }}
                    exit={{ height: 0, opacity: 0 }}
                    className="overflow-hidden border-t border-white/10 pt-4 space-y-2"
                  >
                    {pillar.features.map((f, i) => (
                      <div key={i} className="flex items-center gap-3 text-xs font-sans font-medium uppercase">
                        <span className={f.highlight ? 'text-[#e8622a]' : 'text-white/30'}>→</span>
                        <span className={f.highlight ? 'text-white' : 'text-[#e2e8f0]'}>{f.text}</span>
                      </div>
                    ))}
                  </motion.div>
                )}
              </AnimatePresence>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default OSHero;
