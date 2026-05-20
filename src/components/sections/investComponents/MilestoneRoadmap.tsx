"use client";
import React, { useState, useRef } from 'react';
import { motion, AnimatePresence, useScroll, useTransform } from 'framer-motion';

const milestones = [
  {
    id: "m1",
    date: "Q3 2025",
    year: "2025",
    title: "Texas Groundbreak",
    desc: "Break ground on our flagship master-planned community — 5,000+ units, 1,000+ acres, Texas workforce market.",
    status: "Active",
  },
  {
    id: "m2",
    date: "Q4 2026",
    year: "2026",
    title: "First Residents Move In",
    desc: "Phase 1 homes delivered. Village Center services go live. HumanlyOS® resident platform launches for day-one residents.",
    status: "Upcoming",
  },
  {
    id: "m3",
    date: "2028",
    year: "2028",
    title: "Communities 2–4",
    desc: "Three additional communities break ground across new Sun Belt and Midwest markets, replicating the Texas prototype.",
    status: "Planned",
  },
  {
    id: "m4",
    date: "2030",
    year: "2030",
    title: "HumanlyOS® Licensing",
    desc: "Platform licensing to third-party community operators begins — unlocking a high-margin recurring SaaS revenue stream at national scale.",
    status: "Planned",
  },
];

const EASE = [0.16, 1, 0.3, 1] as const;

export const MilestoneRoadmap = () => {
  const [active, setActive] = useState(0);
  const ms = milestones[active];

  // Refs for Parallax tracking
  const sectionRef = useRef<HTMLElement>(null);
  const panelRef = useRef<HTMLDivElement>(null);

  // Scroll tracking for the whole section
  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ["start end", "end start"]
  });

  // Parallax transformations
  const bgGridY = useTransform(scrollYProgress, [0, 1], ["-10%", "10%"]);
  const headerY = useTransform(scrollYProgress, [0, 0.5], [50, 0]);
  const panelNumberY = useTransform(scrollYProgress, [0.3, 0.8], [60, -40]);

  return (
    <section ref={sectionRef} className="relative overflow-hidden py-24 lg:py-36 bg-[#060c14] text-white">
      {/* ── Fluid Glass Image Background with Parallax ── */}
      <motion.div 
        className="absolute inset-0 pointer-events-none z-0"
        style={{ y: bgGridY, scale: 1.1 }}
      >
        <img 
          src="/images/AdobeStock_167813129.jpeg" 
          alt="Fluid Glass Background" 
          className="absolute inset-0 w-full h-full object-cover "
        />
        {/* Heavy frost overlay to create the 'fluid glass' effect over the image */}
        <div className="absolute inset-0 backdrop-blur-[5px] bg-[#0a1520]/80" />
        
        {/* Film grain effect overlay */}
        <div 
          className="absolute inset-0 opacity-[0.04] mix-blend-overlay"
          style={{
            backgroundImage: `url("data:image/svg+xml,%3Csvg viewBox='0 0 200 200' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='noiseFilter'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.85' numOctaves='3' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23noiseFilter)'/%3E%3C/svg%3E")`
          }}
        />
      </motion.div>

      {/* Dramatic cinematic top/bottom fading shadows to blend seamlessly with the rest of the page */}
      <div className="absolute inset-x-0 top-0 h-40 bg-gradient-to-b from-[#060c14] to-transparent pointer-events-none z-0" />
      <div className="absolute inset-x-0 bottom-0 h-40 bg-gradient-to-t from-[#060c14] to-transparent pointer-events-none z-0" />

      {/* ── CONTENT ── */}
      <div className="container relative z-10 mx-auto px-6 max-w-[1100px]">

        {/* Cinematic Header (with entrance scroll parallax) */}
        <motion.div
          style={{ y: headerY }}
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.9, ease: EASE }}
          className="mb-24 text-center md:text-left flex flex-col md:flex-row md:items-end justify-between gap-8"
        >
          <div>
            <div className="flex items-center gap-4 mb-8 justify-center md:justify-start">
              <span className="w-1.5 h-1.5 bg-white rounded-none rotate-45" />
              <span className="text-[0.65rem] font-bold tracking-[0.3em] uppercase text-white/50">
                Strategic Roadmap
              </span>
            </div>
            <h2 className="font-serif text-4xl md:text-6xl text-white leading-none tracking-tight">
              The Path <br className="hidden md:block" />
              <span className="italic font-light text-white/60">to Scale.</span>
            </h2>
          </div>
          <p className="max-w-xs text-[0.85rem] font-light leading-relaxed text-white/40 md:text-right border-l md:border-l-0 md:border-r border-white/10 pl-4 md:pl-0 md:pr-4 py-2">
            A disciplined, milestone-driven progression from our Texas groundbreak to national HumanlyOS® licensing.
          </p>
        </motion.div>

        {/* ── TIMELINE TRACK (Sharp, geometric) ── */}
        <motion.div 
          className="relative mb-20 px-2"
          initial={{ opacity: 0, scaleX: 0.95 }}
          whileInView={{ opacity: 1, scaleX: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 1, ease: EASE, delay: 0.2 }}
        >
          {/* Base track line */}
          <div className="absolute top-[11px] left-0 right-0 h-[1px] bg-white/[0.05]" />

          {/* Animated sharp progress line */}
          <motion.div
            className="absolute top-[11px] left-0 h-[1px] bg-white"
            animate={{ width: `${(active / (milestones.length - 1)) * 100}%` }}
            transition={{ duration: 0.8, ease: EASE }}
          />

          {/* Nodes */}
          <div className="flex justify-between relative">
            {milestones.map((m, i) => {
              const isPast = i < active;
              const isCurrent = i === active;

              return (
                <button
                  key={m.id}
                  onClick={() => setActive(i)}
                  className="flex flex-col items-center gap-6 group focus:outline-none"
                  style={{ width: `${100 / milestones.length}%` }}
                >
                  {/* Node Diamond */}
                  <div className="relative flex items-center justify-center h-6 w-6">
                    <motion.div
                      animate={{
                        scale: isCurrent ? 1 : 0.6,
                        backgroundColor: isCurrent ? "#ffffff" : isPast ? "rgba(255,255,255,0.2)" : "rgba(255,255,255,0.05)",
                        borderColor: isCurrent ? "#ffffff" : isPast ? "rgba(255,255,255,0.3)" : "rgba(255,255,255,0.1)",
                      }}
                      transition={{ duration: 0.5, ease: EASE }}
                      className="w-4 h-4 border rotate-45 transition-colors duration-500"
                    />
                    {/* Outer pulse for current */}
                    {isCurrent && (
                      <motion.div
                        className="absolute inset-0 border border-white rotate-45"
                        animate={{ scale: [1, 2, 2], opacity: [0.8, 0, 0] }}
                        transition={{ duration: 2, repeat: Infinity, ease: "easeOut" }}
                      />
                    )}
                  </div>

                  {/* Date label */}
                  <motion.span
                    animate={{
                      color: isCurrent ? "#ffffff" : isPast ? "rgba(255,255,255,0.5)" : "rgba(255,255,255,0.2)",
                    }}
                    transition={{ duration: 0.4 }}
                    className="text-[0.65rem] font-bold tracking-[0.2em] uppercase"
                  >
                    {m.date}
                  </motion.span>
                </button>
              );
            })}
          </div>
        </motion.div>

        {/* ── DETAIL PANEL (Parallax Monolithic Effect) ── */}
        <motion.div 
          ref={panelRef} 
          className="relative bg-[#101d2d]/60 border border-white/5 overflow-hidden backdrop-blur-md rounded-[24px]" 
          style={{ minHeight: "340px" }}
          initial={{ opacity: 0, y: 40, scale: 0.97 }}
          whileInView={{ opacity: 1, y: 0, scale: 1 }}
          viewport={{ once: true, margin: "-40px" }}
          transition={{ duration: 0.9, ease: EASE, delay: 0.3 }}
        >
          
          {/* Parallaxing massive background text */}
          <motion.div 
            style={{ y: panelNumberY }}
            className="absolute -right-8 -bottom-16 font-serif text-[12rem] md:text-[16rem] leading-none text-white/[0.015] select-none pointer-events-none z-0"
            aria-hidden
          >
            0{active + 1}
          </motion.div>

          <AnimatePresence mode="wait">
            <motion.div
              key={active}
              initial={{ opacity: 0, filter: "blur(12px)", scale: 0.97 }}
              animate={{ opacity: 1, filter: "blur(0px)", scale: 1 }}
              exit={{ opacity: 0, filter: "blur(8px)", scale: 1.02 }}
              transition={{ duration: 0.9, ease: EASE }}
              className="absolute inset-0 flex flex-col md:flex-row z-10"
            >
              {/* Left Column: Meta & Lines */}
              <div className="w-full md:w-1/3 p-8 md:p-12 border-b md:border-b-0 md:border-r border-white/5 flex flex-col justify-between relative bg-black/40 backdrop-blur-sm">
                <div>
                  <div className="flex items-center gap-3 mb-6">
                    <span className="w-1 h-1 bg-white" />
                    <p className="text-[0.6rem] font-bold tracking-[0.25em] uppercase text-white/50">
                      Phase 0{active + 1}
                    </p>
                  </div>
                  <h3 className="font-serif text-3xl md:text-4xl text-white leading-tight mb-2">
                    {ms.year}
                  </h3>
                </div>
                
                {/* Minimalist Status */}
                <div className="flex items-center gap-2 mt-8 md:mt-0">
                  {ms.status === "Active" ? (
                    <span className="w-1.5 h-1.5 bg-white animate-pulse" />
                  ) : (
                    <span className="w-1.5 h-1.5 border border-white/40" />
                  )}
                  <span className="text-[0.65rem] font-bold tracking-[0.2em] uppercase text-white/40">
                    {ms.status}
                  </span>
                </div>
              </div>

              {/* Right Column: Title & Desc */}
              <div className="w-full md:w-2/3 p-8 md:p-16 flex flex-col justify-center relative backdrop-blur-[2px]">
                <motion.div
                  initial={{ opacity: 0, x: 20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: 0.25, duration: 0.7, ease: EASE }}
                >
                  <h4 className="font-serif text-2xl md:text-3xl text-white mb-6">
                    {ms.title}
                  </h4>
                  <div className="h-[1px] w-12 bg-white/20 mb-6" />
                  <p className="text-[0.95rem] leading-relaxed font-light text-white/50 max-w-lg">
                    {ms.desc}
                  </p>
                </motion.div>
              </div>
            </motion.div>
          </AnimatePresence>
        </motion.div>

        {/* ── Navigation ── */}
        <div className="flex items-center justify-between mt-8 border-t border-white/5 pt-8">
          <button
            onClick={() => setActive(Math.max(0, active - 1))}
            disabled={active === 0}
            className="text-[0.65rem] font-bold tracking-[0.2em] uppercase text-white/40 hover:text-white transition-colors duration-300 disabled:opacity-20 disabled:hover:text-white/40 flex items-center gap-2 group"
          >
            <span className="w-4 h-[1px] bg-current group-hover:-translate-x-1 transition-transform" /> Prev
          </button>

          <button
            onClick={() => setActive(Math.min(milestones.length - 1, active + 1))}
            disabled={active === milestones.length - 1}
            className="text-[0.65rem] font-bold tracking-[0.2em] uppercase text-white/40 hover:text-white transition-colors duration-300 disabled:opacity-20 disabled:hover:text-white/40 flex items-center gap-2 group"
          >
            Next <span className="w-4 h-[1px] bg-current group-hover:translate-x-1 transition-transform" />
          </button>
        </div>

      </div>
    </section>
  );
};
