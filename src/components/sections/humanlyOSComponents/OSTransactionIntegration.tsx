"use client";

import React, { useState, useEffect, useRef } from 'react';
import { motion, AnimatePresence, useInView } from 'framer-motion';

// ─────────────────────────────────────────────────────────────────────────────

const flowSteps = [
  { label: 'Community',      color: '#2d7dd2' },
  { label: 'Home Buying',    color: '#0d9e87' },
  { label: 'Home Financing', color: '#8b5cf6' },
  { label: 'Home Insurance', color: '#d96a2b' },
];

const serviceCards = [
  { title: 'Healthcare',      desc: 'Preventative / Proactive, On-call Consultants, Emotional Intelligence Programs', accent: '#2d7dd2' },
  { title: 'Wellness',        desc: 'AI-Enabled Fitness, Pro Sports Ambassador Events, Fitness Studios & Programs, Pool & Spa', accent: '#0d9e87' },
  { title: 'Food',            desc: 'Restaurant, Food Market, Commercial Garden', accent: '#f59e0b' },
  { title: 'Education',       desc: 'AI-Based Learning Lab, AI Tutoring, Weekly Workshops, Continuous Learning Programs', accent: '#8b5cf6' },
  { title: 'General',         desc: 'Home Maintenance, Landscaping, Housekeeping, Dog Park / Pet Services', accent: '#3a7d44' },
  { title: 'Entertainment',   desc: 'Movie Theater, Music Events, Daily Events & Activities', accent: '#c0392b' },
  { title: 'Transportation',  desc: 'Autonomous Car Service, Ride Sharing, Trail Systems', accent: '#06b6d4' },
  { title: 'Work & Business', desc: 'Shared & Private Office Space, Conference Rooms, Daycare Services', accent: '#c9a227' },
];

// ─────────────────────────────────────────────────────────────────────────────

const OSTransactionIntegration = () => {
  const [activeStep, setActiveStep] = useState(0);
  const [hoveredCard, setHoveredCard] = useState<number | null>(null);
  const sectionRef = useRef<HTMLElement>(null);
  const isInView = useInView(sectionRef, { once: false, margin: '-80px' });

  // Auto-advance the flow diagram
  useEffect(() => {
    if (!isInView) return;
    const t = setInterval(() => setActiveStep(p => (p + 1) % flowSteps.length), 3200);
    return () => clearInterval(t);
  }, [isInView]);

  return (
    <section
      ref={sectionRef}
      className="bg-[#4C5C68] pt-[clamp(5rem,10vw,8rem)] pb-[clamp(5rem,10vw,8rem)] relative overflow-hidden"
    >
      {/* One ambient light source, top-center */}
      <div
        className="absolute top-0 left-1/2 -translate-x-1/2 w-[700px] h-[280px] pointer-events-none"
        style={{
          background: 'radial-gradient(ellipse at top, rgba(45,125,210,0.10) 0%, transparent 72%)',
        }}
      />

      <div className="max-w-[1280px] mx-auto px-6 md:px-12 relative z-10">

        {/* ─── Section Header — two-column, editorial layout ─── */}
        <motion.div
          initial={{ opacity: 0, y: 22 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.65, ease: [0.25, 0.1, 0.25, 1] }}
          className="mb-16"
        >
          <p className="text-[10px] font-medium tracking-[0.22em] uppercase text-[#aeb6be] mb-5">
            p17 / TRANSACTION INTEGRATION
          </p>
          <div className="h-[2px] rounded-full w-[80px] bg-gradient-to-r from-[#1a4f82] via-[#2d7dd2] to-[#d96a2b] mb-8" />

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-end">
            <h2 className="font-serif text-[clamp(2.5rem,4vw,3.5rem)] font-normal leading-[1.1] text-white">
              Transaction Integration
            </h2>
            <p className="text-[#94a3b8] text-[0.95rem] leading-relaxed font-light max-w-md">
              Every resident payment flows through a single intelligent layer — from home acquisition to daily subscriptions — consolidating revenue across the community ecosystem.
            </p>
          </div>
        </motion.div>

        {/* ─── Flow Diagram ─── */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.55, delay: 0.1 }}
          className="mb-4"
        >
          {/* Money flow direction labels */}
          <div className="flex justify-between mb-4">
            <span className="text-[0.68rem] font-semibold tracking-[0.14em] uppercase text-emerald-400">
              ↑ Resident Payment
            </span>
            <span className="text-[0.68rem] font-semibold tracking-[0.14em] uppercase text-[#d96a2b]">
              Revenue Flow ↓
            </span>
          </div>

          {/* Steps — horizontal row */}
          <div className="relative flex flex-col sm:flex-row gap-3">
            {/* Connecting track line (desktop only) */}
            <div className="hidden sm:block absolute top-1/2 left-0 right-0 h-px bg-white/[0.08] -translate-y-1/2 z-0" />

            {/* Progress fill — animated */}
            <motion.div
              className="hidden sm:block absolute top-1/2 left-0 h-px -translate-y-1/2 z-0 origin-left rounded-full"
              style={{
                background: `linear-gradient(90deg, ${flowSteps[activeStep].color}, ${flowSteps[activeStep].color}33)`,
              }}
              animate={{ width: `${((activeStep + 1) / flowSteps.length) * 100}%` }}
              transition={{ duration: 0.55, ease: [0.25, 0.1, 0.25, 1] }}
            />

            {flowSteps.map((step, idx) => {
              const isActive = idx === activeStep;
              const isPast   = idx < activeStep;

              return (
                <motion.button
                  key={idx}
                  onClick={() => setActiveStep(idx)}
                  className="relative flex-1 z-10 text-left group"
                  whileTap={{ scale: 0.98 }}
                  transition={{ type: 'spring', stiffness: 400, damping: 30 }}
                >
                  <div
                    className="rounded-2xl p-5 border"
                    style={{
                      background: isActive
                        ? 'rgba(0,0,0,0.30)'
                        : 'rgba(0,0,0,0.15)',
                      borderColor: isActive
                        ? `${step.color}50`
                        : isPast
                        ? `${step.color}22`
                        : 'rgba(255,255,255,0.07)',
                      backdropFilter: 'blur(16px)',
                      transition: 'background 0.35s ease, border-color 0.35s ease',
                    }}
                  >
                    {/* Color rule — the sole decorative element */}
                    <div
                      className="h-[2px] rounded-full mb-4"
                      style={{
                        background: step.color,
                        width: isActive ? '2.25rem' : '1.5rem',
                        opacity: isActive ? 1 : isPast ? 0.45 : 0.2,
                        transition: 'width 0.4s ease, opacity 0.4s ease',
                      }}
                    />

                    <span
                      className="block text-[0.58rem] font-semibold tracking-[0.16em] uppercase mb-1.5"
                      style={{ color: '#6b7a87' }}
                    >
                      Step {idx + 1}
                    </span>
                    <h4
                      className="font-serif text-[0.95rem] font-normal"
                      style={{
                        color: isActive ? '#ffffff' : 'rgba(255,255,255,0.48)',
                        transition: 'color 0.35s ease',
                      }}
                    >
                      {step.label}
                    </h4>
                  </div>
                </motion.button>
              );
            })}
          </div>
        </motion.div>

        {/* Active step label — slim, typographic */}
        <div className="mb-14 h-[1.2rem] relative overflow-hidden">
          <AnimatePresence mode="wait">
            <motion.div
              key={activeStep}
              initial={{ opacity: 0, y: 6 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -6 }}
              transition={{ duration: 0.22, ease: 'easeOut' }}
              className="absolute left-0 flex items-center gap-2"
            >
              <div
                className="w-[5px] h-[5px] rounded-full shrink-0"
                style={{ background: flowSteps[activeStep].color }}
              />
              <span
                className="text-[0.62rem] font-semibold tracking-[0.16em] uppercase"
                style={{ color: flowSteps[activeStep].color }}
              >
                {flowSteps[activeStep].label}
              </span>
            </motion.div>
          </AnimatePresence>
        </div>

        {/* ─── Subscription Services ─── */}
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.65, delay: 0.18, ease: [0.25, 0.1, 0.25, 1] }}
        >
          {/* Section label */}
          <div className="flex items-center gap-5 mb-8">
            <div className="h-px bg-white/10 flex-1" />
            <span className="text-[0.63rem] font-semibold tracking-[0.2em] uppercase text-[#aeb6be]">
              Subscription Services
            </span>
            <div className="h-px bg-white/10 flex-1" />
          </div>

          {/* 4-column card grid */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-3">
            {serviceCards.map((card, idx) => (
              <motion.div
                key={idx}
                initial={{ opacity: 0, y: 18 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: '-24px' }}
                transition={{
                  delay: idx * 0.045,
                  duration: 0.48,
                  ease: [0.25, 0.1, 0.25, 1],
                }}
                onMouseEnter={() => setHoveredCard(idx)}
                onMouseLeave={() => setHoveredCard(null)}
                className="relative rounded-2xl p-5 border overflow-hidden cursor-default"
                style={{
                  background: hoveredCard === idx ? 'rgba(0,0,0,0.28)' : 'rgba(0,0,0,0.16)',
                  borderColor: hoveredCard === idx
                    ? `${card.accent}38`
                    : 'rgba(255,255,255,0.07)',
                  backdropFilter: 'blur(14px)',
                  transition: 'background 0.28s ease, border-color 0.28s ease',
                  minHeight: '9.5rem',
                }}
              >
                {/* Left accent bar — the single design element on the card */}
                <div
                  className="absolute top-5 bottom-5 left-0 w-[2px] rounded-r-full"
                  style={{
                    background: card.accent,
                    opacity: hoveredCard === idx ? 0.9 : 0.28,
                    transition: 'opacity 0.28s ease',
                  }}
                />

                <div className="pl-4">
                  <h5 className="font-serif text-white text-[0.95rem] font-normal mb-2 leading-snug">
                    {card.title}
                  </h5>
                  <p className="text-[0.76rem] text-[#7a8a96] leading-relaxed font-light">
                    {card.desc}
                  </p>
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>

      </div>
    </section>
  );
};

export default OSTransactionIntegration;
