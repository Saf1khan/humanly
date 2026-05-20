"use client";

import React, { useState, useEffect, useRef, useCallback } from 'react';
import { motion, AnimatePresence, useInView } from 'framer-motion';

const milestones = [
  {
    num: 1,
    title: 'Move In',
    timeframe: 'Immediate',
    desc: 'Securing a permanent, premium home base establishes the foundation. Residents settle into an ecosystem designed to support wellness, community connection, and long-term security from day one.',
    metric: '100%',
    metricLabel: 'Secure Housing Placement',
    outcome: 'Immediate structural and residential stability.',
    color: '#2d7dd2',
  },
  {
    num: 2,
    title: 'Build Credit',
    timeframe: 'Months 1 – 6',
    desc: 'Every monthly payment is automatically reported to major credit bureaus. Rent, utilities, and community services become an active engine for building personal credit history.',
    metric: '+45 pts',
    metricLabel: 'Avg. Credit Score Increase',
    outcome: 'Access to lower interest rates and prime financial products.',
    color: '#0d9e87',
  },
  {
    num: 3,
    title: 'Financial Literacy',
    timeframe: 'Month 3 onward',
    desc: 'Access embedded learning modules and personalized financial coaching. Residents master compounding interest, strategic budgeting, and equity growth principles.',
    metric: '12h+',
    metricLabel: 'Direct Coaching Hours',
    outcome: 'Confident financial decision-making and asset navigation.',
    color: '#8b5cf6',
  },
  {
    num: 4,
    title: 'Savings Program',
    timeframe: 'Months 6 – 12',
    desc: 'Micro-rounding and automated savings triggers compound a highly liquid emergency buffer across every platform transaction — without manual friction.',
    metric: '$2,400',
    metricLabel: 'Avg. First-Year Buffer',
    outcome: 'Protection against unexpected expenses and financial shocks.',
    color: '#d96a2b',
  },
  {
    num: 5,
    title: 'Access HELOC',
    timeframe: 'Year 2+',
    desc: 'Unlock low-interest Home Equity Lines of Credit backed by accumulated residency equity — flexible growth capital for business or educational ventures.',
    metric: '3.2%',
    metricLabel: 'Fixed Base Rate Access',
    outcome: 'Flexible emergency capital and strategic deployment assets.',
    color: '#c9a227',
  },
  {
    num: 6,
    title: 'Build Wealth',
    timeframe: 'Years 3 – 5',
    desc: 'Recurring payments, engagement points, and longevity loyalty convert directly into fractional real estate ownership. Platform-wide dividends compound quarterly.',
    metric: '$14,200',
    metricLabel: 'Avg. Year-3 Fractional Equity',
    outcome: 'Asset diversification and genuine, tangible net worth.',
    color: '#3a7d44',
  },
  {
    num: 7,
    title: 'Equity Stewardship',
    timeframe: 'Year 5+',
    desc: 'Estate planning frameworks, equity management, and wealth preservation protocols transition accumulated assets smoothly into multigenerational family legacy.',
    metric: '100%',
    metricLabel: 'Protected Wealth Handover',
    outcome: 'Intergenerational wealth security and permanent asset legacy.',
    color: '#c0392b',
  },
];

// Natural ease curves
const EASE_OUT = [0.16, 1, 0.3, 1] as const;   // gentle spring-out for opening
const EASE_IN = [0.4, 0, 0.6, 1] as const;    // snappy ease-in for closing

const OSJourney = () => {
  const [openIndex, setOpenIndex] = useState(0);
  const [isUserHovering, setIsUserHovering] = useState(false);
  const hoverTimer = useRef<ReturnType<typeof setTimeout> | null>(null);
  const sectionRef = useRef<HTMLElement>(null);
  const isInView = useInView(sectionRef, { once: false, margin: '-80px' });

  // Autoplay pauses while hovering
  useEffect(() => {
    if (!isInView || isUserHovering) return;
    const t = setInterval(() => {
      setOpenIndex(p => (p + 1) % milestones.length);
    }, 4000);
    return () => clearInterval(t);
  }, [isInView, isUserHovering]);

  // Debounced hover — 120ms intent delay so fast mouse sweeps don't flap
  const handleRowHover = useCallback((idx: number) => {
    if (hoverTimer.current) clearTimeout(hoverTimer.current);
    hoverTimer.current = setTimeout(() => {
      setOpenIndex(idx);
    }, 120);
  }, []);

  const cancelHover = useCallback(() => {
    if (hoverTimer.current) clearTimeout(hoverTimer.current);
  }, []);

  return (
    <section
      ref={sectionRef}
      className="bg-[#4C5C68] py-[clamp(5rem,10vw,8rem)] relative overflow-hidden"
    >
      {/* Live colored spine */}
      <motion.div
        className="absolute left-0 top-0 bottom-0 w-[3px] pointer-events-none"
        animate={{ background: milestones[openIndex].color }}
        transition={{ duration: 0.6, ease: 'easeInOut' }}
      />
      {/* Directional ambient glow */}
      <motion.div
        className="absolute left-0 top-1/2 -translate-y-1/2 w-[360px] h-[700px] pointer-events-none"
        animate={{
          background: `radial-gradient(ellipse at left, ${milestones[openIndex].color}12 0%, transparent 72%)`,
        }}
        transition={{ duration: 0.9, ease: 'easeInOut' }}
      />

      <div className="max-w-[1240px] mx-auto px-6 md:px-12 relative z-10">

        {/* ── Header ── */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7, ease: EASE_OUT }}
          className="mb-16 grid grid-cols-1 lg:grid-cols-2 gap-8 items-end"
        >
          <div>
            <p className="text-[10px] font-medium tracking-[0.22em] uppercase text-[#aeb6be] mb-5">
              p16 / RESIDENT JOURNEY
            </p>
            <div className="h-[2px] rounded-full w-[80px] bg-gradient-to-r from-[#1a4f82] via-[#2d7dd2] to-[#d96a2b] mb-6" />
            <h2 className="font-serif text-[clamp(2.2rem,4vw,3.2rem)] font-normal leading-[1.1] text-white">
              Every payment builds<br />
              <span className="text-[#aeb6be]">a better future.</span>
            </h2>
          </div>
          <p className="text-[#94a3b8] text-[0.95rem] leading-relaxed font-light max-w-md">
            A seven-milestone program designed to turn residential stability into generational wealth. Hover any milestone to explore it.
          </p>
        </motion.div>

        {/* ── Accordion ── */}
        <div
          onMouseEnter={() => setIsUserHovering(true)}
          onMouseLeave={() => {
            cancelHover();
            setIsUserHovering(false);
          }}
          className="space-y-[1px]"
        >
          {milestones.map((step, idx) => {
            const isOpen = idx === openIndex;
            const isPast = idx < openIndex;

            return (
              <motion.div
                key={idx}
                initial={{ opacity: 0, x: -16 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true, margin: '-20px' }}
                transition={{ delay: idx * 0.055, duration: 0.55, ease: EASE_OUT }}
                onMouseEnter={() => handleRowHover(idx)}
                onMouseLeave={cancelHover}
              >
                {/* Row header */}
                <div
                  className="flex items-center gap-6 lg:gap-10 py-5 border-t cursor-default select-none"
                  style={{
                    borderColor: isOpen ? `${step.color}35` : 'rgba(255,255,255,0.07)',
                    transition: 'border-color 0.45s ease',
                  }}
                >
                  {/* Oversized number */}
                  <div
                    className="font-serif text-[clamp(2.8rem,5vw,4.5rem)] font-normal leading-none shrink-0 w-[3.5rem] lg:w-[5rem] text-right"
                    style={{
                      color: isOpen
                        ? step.color
                        : isPast
                          ? `${step.color}50`
                          : 'rgba(255,255,255,0.13)',
                      transition: 'color 0.45s ease',
                    }}
                  >
                    {String(step.num).padStart(2, '0')}
                  </div>

                  {/* Title + timeframe */}
                  <div className="flex-1 min-w-0">
                    <div className="flex items-baseline gap-4 flex-wrap">
                      <h3
                        className="font-serif text-[clamp(1.25rem,2.5vw,1.75rem)] font-normal leading-tight"
                        style={{
                          color: isOpen ? '#ffffff' : 'rgba(255,255,255,0.5)',
                          transition: 'color 0.45s ease',
                        }}
                      >
                        {step.title}
                      </h3>
                      <span
                        className="text-[0.62rem] font-semibold tracking-[0.15em] uppercase"
                        style={{
                          color: isOpen ? step.color : '#6b7a87',
                          transition: 'color 0.45s ease',
                        }}
                      >
                        {step.timeframe}
                      </span>
                    </div>
                  </div>

                  {/* Metric peek */}
                  <div
                    className="hidden lg:block shrink-0 text-right"
                    style={{
                      opacity: isOpen ? 0 : isPast ? 0.28 : 0.2,
                      transition: 'opacity 0.45s ease',
                    }}
                  >
                    <span
                      className="font-serif text-[1.75rem] font-light leading-none"
                      style={{ color: step.color }}
                    >
                      {step.metric}
                    </span>
                  </div>

                  {/* + chevron */}
                  <motion.div
                    animate={{ rotate: isOpen ? 45 : 0 }}
                    transition={{ duration: 0.35, ease: EASE_OUT }}
                    className="shrink-0 w-5 h-5 flex items-center justify-center"
                    style={{
                      color: isOpen ? step.color : 'rgba(255,255,255,0.22)',
                      transition: 'color 0.45s ease',
                    }}
                  >
                    <svg width="12" height="12" viewBox="0 0 12 12" fill="none">
                      <path d="M6 1V11M1 6H11" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
                    </svg>
                  </motion.div>
                </div>

                {/* Expanded content */}
                <AnimatePresence initial={false}>
                  {isOpen && (
                    <motion.div
                      key="content"
                      initial={{ height: 0, opacity: 0 }}
                      animate={{ height: 'auto', opacity: 1 }}
                      exit={{ height: 0, opacity: 0 }}
                      transition={{
                        height: { duration: 0.48, ease: EASE_OUT },
                        opacity: { duration: isOpen ? 0.35 : 0.22, ease: isOpen ? EASE_OUT : EASE_IN },
                      }}
                      style={{ willChange: 'height, opacity' }}
                      className="overflow-hidden"
                    >
                      <div className="pl-[calc(3.5rem+1.5rem)] lg:pl-[calc(5rem+2.5rem)] pb-8 pr-4">
                        <div className="grid grid-cols-1 lg:grid-cols-[1fr_auto] gap-8 items-start">

                          {/* Description + outcome */}
                          <motion.div
                            initial={{ opacity: 0, y: 10 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ delay: 0.12, duration: 0.4, ease: EASE_OUT }}
                            className="space-y-5 max-w-xl"
                          >
                            <p className="text-[#e2e8f0] text-[1rem] leading-[1.85] font-light">
                              {step.desc}
                            </p>
                            <div
                              className="flex items-start gap-3 pt-5 border-t"
                              style={{ borderColor: 'rgba(255,255,255,0.07)' }}
                            >
                              <div
                                className="w-[2px] rounded-full mt-1 shrink-0 self-stretch"
                                style={{ background: step.color, minHeight: '2.5rem' }}
                              />
                              <div>
                                <span className="block text-[0.6rem] font-bold tracking-[0.18em] uppercase text-[#7a8a96] mb-1">
                                  Outcome
                                </span>
                                <span className="text-[0.92rem] text-white font-light">
                                  {step.outcome}
                                </span>
                              </div>
                            </div>
                          </motion.div>

                          {/* Metric block */}
                          <motion.div
                            initial={{ opacity: 0, y: 10 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ delay: 0.2, duration: 0.4, ease: EASE_OUT }}
                            className="rounded-2xl p-6 min-w-[180px] lg:min-w-[200px] border shrink-0"
                            style={{
                              background: 'rgba(0,0,0,0.2)',
                              borderColor: `${step.color}22`,
                              backdropFilter: 'blur(12px)',
                            }}
                          >
                            <span className="block text-[0.58rem] font-bold tracking-[0.18em] uppercase text-[#7a8a96] mb-3">
                              Impact
                            </span>
                            <div
                              className="font-serif leading-none mb-2"
                              style={{
                                fontSize: 'clamp(2.5rem, 4vw, 3.25rem)',
                                color: step.color,
                                fontWeight: 300,
                              }}
                            >
                              {step.metric}
                            </div>
                            <span className="block text-[0.78rem] text-[#94a3b8] font-light leading-snug">
                              {step.metricLabel}
                            </span>
                          </motion.div>

                        </div>
                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>
              </motion.div>
            );
          })}

          <div className="border-t border-white/[0.07]" />
        </div>

      </div>
    </section>
  );
};

export default OSJourney;
