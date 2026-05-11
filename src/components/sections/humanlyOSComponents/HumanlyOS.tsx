"use client";

import React, { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import {
  Building2,
  Smartphone,
  ShoppingBag,
  Activity,
  Heart,
  GraduationCap,
  Utensils,
  Briefcase,
  Clapperboard,
  Car,
  Settings,
  Search,
  Hammer,
  CreditCard,
  Handshake,
  Sprout
} from "lucide-react";
import { CircleOfServicesSection } from "../CircleOfServicesSection";

// --- Constants & Data ---

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

const FINANCIAL_SERVICES = [
  {
    icon: "🏠",
    title: "Home Financing",
    body: "Right-fit financing solutions tailored to workforce income profiles, with transparent total-cost visibility including land lease and services.",
    badge: "Attainable",
    color: "#e8622a"
  },
  {
    icon: "📊",
    title: "Land Lease Revenue",
    body: "Humanly retains ~70% of lots on long-term lease, generating predictable recurring income that supports institutional refinancing.",
    badge: "Recurring",
    color: "#4a7fd4"
  },
  {
    icon: "⚡",
    title: "Service Revenue Share",
    body: "Each Circle of Services® partner contributes revenue share. Aggregated across communities, this creates a diversified, scalable income stream.",
    badge: "Scalable",
    color: "#8b5cf6"
  },
  {
    icon: "🔄",
    title: "NOI Compounding",
    body: "Net operating income grows as HumanlyOS® intelligence optimizes operations. Savings compound across the portfolio with each learning cycle.",
    badge: "Compound",
    color: "#c9a84c"
  },
  {
    icon: "🏠",
    title: "Institutional Capital",
    body: "Land + services + data creates a three-layer asset class. Permanent cash flows and community data valuation support refinance at institutional scale.",
    badge: "Asset Value",
    color: "#e8622a"
  },
  {
    icon: "📱",
    title: "Resident Transactions",
    body: "All resident financial activity — rent, services, upgrades, marketplace — flows through HumanlyOS®. Data ownership drives long-term platform value.",
    badge: "Data-Rich",
    color: "#4a7fd4"
  }
];

const FLOW_STEPS = [
  { icon: Search, title: "Discovery", desc: "AI-powered market intelligence identifies the right community match. Prospective residents explore neighborhoods via immersive 3D models before ground breaks." },
  { icon: Hammer, title: "Configure", desc: "Select lot, choose home type from the Design Kit of Parts, customize finishes. Total cost — home + land lease + services — is visible and transparent." },
  { icon: CreditCard, title: "Finance", desc: "Right-fit financing pathways matched to income profile. Pre-sale deposits secured. Streamlined approval integrated directly within HumanlyOS®." },
  { icon: Handshake, title: "Transact", desc: "One platform closes the deal. Contracts, identity, and payments handled end-to-end. The Digital Twin is updated the moment keys change hands." },
  { icon: Sprout, title: "Thrive", desc: "Resident onboards to HumanlyOS®. AI Navigator activates. Circle of Services® unlocks. The community's intelligence begins learning from their presence." }
];

export const HumanlyOSSection = () => {
  const [activePillar, setActivePillar] = useState<number | null>(null);

  return (
    <div id="humanlyos" className="relative min-h-screen bg-[#f2ece4] text-[#1e2427] font-sans selection:bg-[#e8622a]/30">

      {/* ─── Background Effects ─── */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute inset-0 bg-[linear-gradient(135deg,#f2ece4_0%,#d1d9e6_50%,#ffffff_100%)]" />

        {/* --- Large Cropped Logo Detail (Watermark) --- */}
        <div className="absolute top-0 -right-[15%] w-[1000px] h-[1000px] pointer-events-none opacity-[0.04] grayscale">
          <motion.div
            initial={{ opacity: 0, rotate: -5, scale: 4 }}
            whileInView={{ opacity: 1, rotate: 0, scale: 5 }}
            viewport={{ once: true }}
            transition={{ duration: 2.5, ease: "easeOut" }}
            className="w-full h-full"
            style={{
              maskImage: 'linear-gradient(to left, black 40%, transparent 90%)',
              WebkitMaskImage: 'linear-gradient(to left, black 40%, transparent 90%)'
            }}
          >
            <img
              src="/images/asset 0.png"
              alt=""
              className="w-full h-full object-contain object-right-top"
            />
          </motion.div>
        </div>

        <div className="absolute inset-0 bg-[radial-gradient(ellipse_60%_50%_at_80%_20%,rgba(74,127,212,0.15)_0%,transparent_60%)]" />
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_40%_60%_at_10%_80%,rgba(232,98,42,0.1)_0%,transparent_50%)]" />
      </div>

      {/* Main Centered Content Wrapper (Hero -> Financial Layer) */}
      <div className="relative z-10 max-w-[1280px] mx-auto px-6 md:px-12 py-24 md:py-32">

        {/* ─── Eyebrow ─── */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="flex items-center gap-3 mb-10 text-[10px] md:text-xs font-sans font-medium tracking-[0.2em] text-[#8a8880] uppercase"
        >
          <div className="h-px w-8 bg-gradient-to-r from-[#e8622a] via-[#c9a84c] to-[#4a7fd4]" />
          The Operating System
          <div className="h-px w-8 bg-gradient-to-r from-[#4a7fd4] via-[#8b5cf6] to-[#e8622a]" />
        </motion.div>

        {/* ─── Hero ─── */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 lg:gap-32 mb-32 items-start">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
          >
            <h1 className="font-sans text-5xl md:text-7xl lg:text-8xl font-bold leading-[0.9] tracking-tight mb-8 uppercase text-[#1e2427]">
              Humanly<span className="text-2xl md:text-3xl align-super font-normal text-[#8a8880] ml-1">®</span><br />
              <span className="bg-gradient-to-r from-[#e8622a] via-[#c9a84c] to-[#4a7fd4] bg-clip-text text-transparent">OS</span>
              <span className="text-2xl md:text-3xl align-super font-normal text-[#8a8880] ml-1">®</span>
            </h1>
            <div className="w-16 h-[3px] bg-gradient-to-r from-[#e8622a] to-[#c9a84c] rounded-full mb-8" />
            <p className="text-[#9e9b94] text-lg md:text-xl font-body font-light leading-relaxed">
              Vertically integrated community development and operations.
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            className="space-y-6 pt-4"
          >
            <p className="text-lg md:text-xl leading-relaxed text-[#4a4741] font-sans font-light">
              <strong className="text-[#1e2427] font-medium">HumanlyOS®</strong> converges AI-native Property Management Technology, AI Community Navigator, and Circle of Services® Marketplace into a <strong className="text-[#1e2427] font-medium">single point-of-access platform</strong> designed to liberate time and enhance quality of life.
            </p>

            <div className="flex flex-wrap gap-2 pt-4">
              {["AI-Native", "Property Mgmt", "Circle of Services®", "Resident Navigator"].map((tag) => (
                <span key={tag} className="px-3 py-1.5 rounded-full border border-black/10 bg-black/[0.02] text-[10px] md:text-xs font-sans font-medium tracking-wider text-[#8a8880] hover:border-black/20 hover:text-[#1e2427] transition-all cursor-default flex items-center gap-2 uppercase">
                  <span className="w-1.5 h-1.5 rounded-full bg-gradient-to-r from-[#e8622a] to-[#c9a84c]" />
                  {tag}
                </span>
              ))}
            </div>
          </motion.div>
        </div>

        {/* ─── OS Overview (2-col) ─── */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-24 mb-32 items-start">
          {/* Left: Text Content */}
          <div className="lg:col-span-5 space-y-8">
            <div className="space-y-4">
              <div className="font-sans text-[10px] font-medium tracking-[0.2em] text-[#8a8880] uppercase">01 / OS OVERVIEW</div>
              <h2 className="font-sans text-4xl md:text-5xl font-bold leading-tight text-[#1e2427] uppercase">
                One Platform.<br />
                Three-Sided Impact.
              </h2>
            </div>
            <p className="text-[#4a4741] text-lg font-sans font-light leading-relaxed">
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
                className={`group relative p-8 bg-[#ffffff]/60 backdrop-blur-xl border border-black/5 rounded-2xl cursor-pointer transition-all duration-500 hover:bg-[#ffffff] hover:border-black/10 shadow-sm ${idx === 2 ? 'md:col-span-2' : ''} ${activePillar === pillar.id ? 'bg-[#ffffff] ring-1 ring-black/5 shadow-xl' : ''}`}
              >
                <div className="h-0.5 w-10 rounded-full mb-6" style={{ backgroundColor: pillar.color }} />
                <div className="font-sans text-[10px] font-medium tracking-[0.2em] text-[#8a8880] mb-2 uppercase">{pillar.label}</div>
                <h4 className="font-sans text-xl font-bold text-[#1e2427] mb-3 uppercase">{pillar.name}</h4>
                <p className="text-[#8a8880] text-xs font-light leading-relaxed mb-4">{pillar.desc}</p>

                <AnimatePresence>
                  {activePillar === pillar.id && (
                    <motion.div
                      initial={{ height: 0, opacity: 0 }}
                      animate={{ height: 'auto', opacity: 1 }}
                      exit={{ height: 0, opacity: 0 }}
                      className="overflow-hidden border-t border-black/5 pt-4 space-y-2"
                    >
                      {pillar.features.map((f, i) => (
                        <div key={i} className="flex items-center gap-3 text-[10px] font-sans font-medium uppercase">
                          <span className={f.highlight ? 'text-[#e8622a]' : 'text-black/10'}>→</span>
                          <span className={f.highlight ? 'text-[#1e2427]' : 'text-[#8a8880]'}>{f.text}</span>
                        </div>
                      ))}
                    </motion.div>
                  )}
                </AnimatePresence>
              </motion.div>
            ))}
          </div>
        </div>

        {/* ─── Financial Layer ─── */}
        <section className="bg-white/10 border border-white/20 rounded-[40px] p-8 md:p-14 mb-32 relative overflow-hidden shadow-[0_30px_100px_rgba(0,0,0,0.03)]"
          style={{ backdropFilter: 'blur(20px)', WebkitBackdropFilter: 'blur(20px)' }}
        >
          {/* Background Glow Blobs to make Glassmorphism visible */}
          <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-[#e8622a]/10 blur-[120px] rounded-full -translate-y-1/2 translate-x-1/4 pointer-events-none" />
          <div className="absolute bottom-0 left-0 w-[400px] h-[400px] bg-[#4a7fd4]/10 blur-[100px] rounded-full translate-y-1/2 -translate-x-1/4 pointer-events-none" />
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-[#8b5cf6]/5 blur-[150px] rounded-full pointer-events-none" />

          <div className="flex flex-col md:flex-row justify-between items-end mb-16 gap-8 relative z-20">
            <div className="space-y-4">
              <div className="font-sans text-[11px] font-medium tracking-[0.15em] text-[#5c5a56]/70 uppercase">Financial Services — p15</div>
              <h2 className="font-sans text-4xl md:text-6xl font-bold text-[#1e2427]/90 uppercase leading-[0.95] tracking-tight">
                Integrated<br />
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#e8622a]/80 via-[#c9a84c]/80 to-[#4a7fd4]/80">Financial</span> Layer
              </h2>
            </div>
            <p className="text-[#5c5a56] text-base md:text-lg max-w-[360px] text-left md:text-right font-normal leading-relaxed">
              Every financial touchpoint unified — from homebuying to daily transactions — within the HumanlyOS® ecosystem.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 relative z-20">
            {FINANCIAL_SERVICES.map((item, i) => (
              <motion.div
                key={i}
                whileHover={{ y: -8 }}
                className="group relative p-10 rounded-[32px] bg-white/10 border border-white/20 hover:bg-white/20 transition-all duration-500 shadow-[0_20px_40px_rgba(0,0,0,0.03)] flex flex-col h-full overflow-hidden"
                style={{
                  backdropFilter: 'blur(20px) saturate(160%)',
                  WebkitBackdropFilter: 'blur(20px) saturate(160%)'
                }}
              >
                {/* Clean Specular Edge Glow */}
                <div className="absolute inset-0 bg-gradient-to-br from-white/30 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />

                {/* Subtle Bottom Glow */}
                <div className="absolute -bottom-1/2 -left-1/2 w-full h-full bg-white/5 blur-[80px] pointer-events-none" />

                {/* --- Content --- */}
                <div className="relative z-10 flex flex-col h-full">
                  <div className="w-10 h-[2px] mb-8 rounded-full" style={{ backgroundColor: item.color }} />

                  <h4 className="font-sans text-2xl font-bold text-[#1e2427] mb-4 tracking-tight leading-tight">{item.title}</h4>
                  <p className="text-[#3a3834] text-[15px] leading-relaxed font-normal mb-10 flex-grow">
                    {item.body}
                  </p>

                  <div className="mt-auto pt-8 border-t border-black/5 flex items-center justify-between">
                    <span className="text-[11px] font-sans font-bold tracking-[0.1em] uppercase text-[#1e2427]/60">
                      {item.badge}
                    </span>
                    <div className="flex items-center gap-2 text-[#1e2427]/40 group-hover:text-[#1e2427] transition-colors duration-300">
                      <span className="text-xs font-bold uppercase tracking-widest">Learn More</span>
                      <span className="text-xl">→</span>
                    </div>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </section>
      </div>

      {/* ─── Circle of Services (Full Width) ─── */}
      <CircleOfServicesSection isDark={false} />

      {/* Container for Transaction Flow */}
      <div className="relative z-10 w-full max-w-[1600px] mx-auto px-6 md:px-12 pb-24 md:pb-32">
        {/* ─── Transaction Flow ─── */}
        <section className="bg-white/20 backdrop-blur-lg border border-white/30 rounded-b-[40px] p-8 md:p-14 shadow-[0_20px_50px_rgba(0,0,0,0.01)]">
          <div className="flex flex-col md:flex-row justify-between items-end mb-16 gap-8">
            <div className="space-y-4">
             
              <h2 className="font-sans text-4xl md:text-6xl font-bold text-[#1e2427]/90 uppercase leading-[0.95] tracking-tight">
                Transaction<br />
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#e8622a]/80 to-[#c9a84c]/80">Flow</span>
              </h2>
            </div>
            <p className="text-[#5c5a56] text-base md:text-lg max-w-[360px] text-left md:text-right font-normal leading-relaxed">
              The journey from discovery to residency.
            </p>
          </div>

          <div className="flex flex-col lg:flex-row items-stretch gap-2 lg:gap-0">
            {FLOW_STEPS.map((step, i) => (
              <React.Fragment key={i}>
                <motion.div
                  whileHover={{ y: -4 }}
                  className="flex-1 group relative p-8 bg-white/30 backdrop-blur-md border border-white/40 rounded-3xl transition-all duration-700 hover:bg-white/50 shadow-[0_10px_30px_rgba(0,0,0,0.01)] overflow-hidden"
                >
                  {/* Soft active indicator line */}
                  <div className="absolute bottom-0 left-0 w-full h-[2px] bg-gradient-to-r from-[#e8622a]/40 to-[#c9a84c]/40 origin-left opacity-0 group-hover:opacity-100 transition-opacity duration-700" />

                  <step.icon className="w-8 h-8 text-[#e8622a]/70 mb-6 transition-transform duration-700 group-hover:scale-105" />

                  <div className="font-sans text-[11px] font-medium tracking-[0.1em] text-[#5c5a56]/50 mb-3 uppercase">Step 0{i + 1}</div>
                  <h4 className="font-sans text-xl font-medium text-[#1e2427]/70 mb-3 tracking-tight">{step.title}</h4>
                  <p className="text-[#5c5a56]/80 text-[13px] font-normal leading-relaxed">{step.desc}</p>
                </motion.div>

                {i < FLOW_STEPS.length - 1 && (
                  <div className="w-full h-8 lg:w-10 lg:h-auto flex items-center justify-center text-[#5c5a56]/20">
                    <span className="lg:rotate-0 rotate-90 text-xl font-light">→</span>
                  </div>
                )}
              </React.Fragment>
            ))}
          </div>


        </section>
      </div>
    </div>
  );
};