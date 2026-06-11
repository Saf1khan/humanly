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

  // Debounced hover — 60ms intent delay so fast mouse sweeps don't flap, yielding instant but stable response
  const handleRowHover = useCallback((idx: number) => {
    if (hoverTimer.current) clearTimeout(hoverTimer.current);
    hoverTimer.current = setTimeout(() => {
      setOpenIndex(idx);
    }, 60);
  }, []);

  const cancelHover = useCallback(() => {
    if (hoverTimer.current) clearTimeout(hoverTimer.current);
  }, []);

  return (
    <section
      ref={sectionRef}
      className="py-[clamp(5rem,10vw,8rem)] relative overflow-hidden"
    >

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
            {/* <p className="text-[10px] font-medium tracking-[0.22em] uppercase text-[#aeb6be] mb-5">
              p16 / RESIDENT JOURNEY
            </p> */}
            {/* <div className="h-[2px] rounded-full w-[80px] bg-gradient-to-r from-[#1a4f82] via-[#2d7dd2] to-[#d96a2b] mb-6" /> */}
            <h2 className="font-serif text-[clamp(2.2rem,4vw,3.2rem)] font-normal leading-[1.1] text-white" style={{ fontFamily: '"Cormorant Garamond", Georgia, serif' }}>
              Every payment builds<br />
              <span className="text-[#aeb6be]">a better future.</span>
            </h2>
          </div>
          <p className="text-[#94a3b8] text-[0.95rem] leading-relaxed font-light max-w-md">
            A seven-milestone program designed to turn residential stability into generational wealth. Hover any milestone to explore it.
          </p>
        </motion.div>

        {/* ── Interactive Containers ── */}
        <div
          onMouseEnter={() => setIsUserHovering(true)}
          onMouseLeave={() => {
            cancelHover();
            setIsUserHovering(false);
          }}
        >
          {/* 1. Desktop Layout (Horizontal Accordion Row) */}
          <div className="hidden lg:flex w-full h-[480px] gap-3 items-stretch">
            {milestones.map((step, idx) => {
              const isOpen = idx === openIndex;

              return (
                <motion.div
                  key={idx}
                  className="relative overflow-hidden rounded-[24px] border cursor-default select-none group"
                  animate={{
                    flexGrow: isOpen ? 6 : 1,
                    flexShrink: 1,
                    flexBasis: '0%',
                    backgroundColor: isOpen ? 'rgb(24, 38, 50)' : 'rgb(29, 44, 56)',
                    borderColor: isOpen ? `${step.color}35` : 'rgba(255, 255, 255, 0.05)',
                  }}
                  onMouseEnter={() => handleRowHover(idx)}
                  onMouseLeave={cancelHover}
                  transition={{
                    type: 'spring',
                    stiffness: 140,
                    damping: 22,
                    mass: 0.9
                  }}
                  style={{ willChange: 'flex-grow, background-color, border-color' }}
                >
                  {/* Subtle top indicator bar */}
                  <motion.div
                    className="absolute top-0 left-0 right-0 h-[3px]"
                    animate={{ background: isOpen ? step.color : 'transparent' }}
                    transition={{ duration: 0.4 }}
                  />

                  {/* Parallel cross-fade for seamless content transitions (removed mode="wait") */}
                  <AnimatePresence initial={false}>
                    {isOpen ? (
                      <motion.div
                        key="open"
                        initial={{ opacity: 0, scale: 0.97, y: 5 }}
                        animate={{ opacity: 1, scale: 1, y: 0 }}
                        exit={{ opacity: 0, scale: 0.97, y: 5 }}
                        transition={{ duration: 0.35, ease: 'easeOut' }}
                        className="absolute inset-0 w-full h-full p-8 flex flex-col justify-between"
                      >
                        {/* Header of Active Card */}
                        <div className="flex justify-between items-start">
                          <div>
                            <div className="flex items-center gap-3 mb-2">
                              <span className="text-[0.62rem] font-bold tracking-[0.2em] uppercase" style={{ color: step.color }}>
                                Milestone 0{step.num}
                              </span>
                              <span className="w-1.5 h-1.5 rounded-full" style={{ backgroundColor: step.color }} />
                              <span className="text-[0.62rem] font-medium tracking-[0.1em] text-white/40 uppercase">
                                {step.timeframe}
                              </span>
                            </div>
                            <h3 className="font-serif text-3xl font-normal text-white" style={{ fontFamily: '"Cormorant Garamond", Georgia, serif' }}>
                              {step.title}
                            </h3>
                          </div>

                          <span className="font-serif text-5xl font-light text-white/10">
                            0{step.num}
                          </span>
                        </div>

                        {/* Description & Impact Grid */}
                        <div className="grid grid-cols-[1fr_210px] gap-8 items-end mt-4">
                          <div className="space-y-6">
                            <p className="text-white/80 text-[0.95rem] leading-[1.75] font-light">
                              {step.desc}
                            </p>

                            <div className="flex items-start gap-3 pt-5 border-t border-white/5">
                              <div className="w-[2px] rounded-full shrink-0 self-stretch" style={{ background: step.color }} />
                              <div>
                                <span className="block text-[0.58rem] font-bold tracking-[0.15em] uppercase text-[#7a8a96] mb-0.5">
                                  Outcome
                                </span>
                                <p className="text-[0.88rem] text-white/90 font-light leading-snug">
                                  {step.outcome}
                                </p>
                              </div>
                            </div>
                          </div>

                          {/* Metric box */}
                          <div
                            className="rounded-2xl p-5 border shrink-0 text-left overflow-hidden relative"
                            style={{ background: 'rgb(22, 35, 46)', borderColor: `${step.color}25` }}
                          >
                            {/* Glass glow overlay */}
                            <div className="absolute inset-0 pointer-events-none" style={{ backgroundImage: "radial-gradient(circle at 80% 20%, rgba(215, 226, 232, 0.12) 0px, transparent 50%)" }} />
                            <div className="absolute inset-0 pointer-events-none" style={{ backgroundImage: "radial-gradient(circle at 20% 80%, rgba(215, 226, 232, 0.07) 0px, transparent 50%)" }} />
                            <span className="block text-[0.55rem] font-bold tracking-[0.18em] uppercase text-[#7a8a96] mb-2">
                              Impact
                            </span>
                            <div className="font-serif leading-none mb-1 text-3xl font-light" style={{ color: step.color, fontFamily: '"Cormorant Garamond", Georgia, serif' }}>
                              {step.metric}
                            </div>
                            <span className="block text-[0.72rem] text-white/60 font-light leading-snug">
                              {step.metricLabel}
                            </span>
                          </div>
                        </div>
                      </motion.div>
                    ) : (
                      <motion.div
                        key="closed"
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        exit={{ opacity: 0 }}
                        transition={{ duration: 0.2 }}
                        className="absolute inset-0 w-full h-full p-6 flex flex-col justify-between items-center"
                      >
                        <span className="font-serif text-2xl font-light text-white/20 group-hover:text-white/40 transition-colors duration-300" style={{ fontFamily: '"Cormorant Garamond", Georgia, serif' }}>
                          0{step.num}
                        </span>

                        <div
                          className="font-serif text-[1rem] tracking-wider text-white/35 group-hover:text-white/60 uppercase whitespace-nowrap transition-colors duration-300"
                          style={{ writingMode: 'vertical-rl', transform: 'rotate(180deg)', fontFamily: '"Cormorant Garamond", Georgia, serif' }}
                        >
                          {step.title}
                        </div>

                        <div
                          className="w-2.5 h-2.5 rounded-full border border-white/10 transition-transform duration-300 group-hover:scale-125"
                          style={{ backgroundColor: `${step.color}40` }}
                        />
                      </motion.div>
                    )}
                  </AnimatePresence>
                </motion.div>
              );
            })}
          </div>

          {/* 2. Mobile Layout (Vertical Accordion List) */}
          <div className="space-y-[1px] lg:hidden">
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
                    className="flex items-center gap-6 py-5 border-t cursor-default select-none"
                    style={{
                      borderColor: isOpen ? `${step.color}35` : 'rgba(255,255,255,0.07)',
                      transition: 'border-color 0.45s ease',
                    }}
                  >
                    {/* Oversized number */}
                    <div
                      className="font-serif text-[clamp(2.8rem,5vw,4.5rem)] font-normal leading-none shrink-0 w-[3.5rem] text-right"
                      style={{
                        color: isOpen
                          ? step.color
                          : isPast
                            ? `${step.color}50`
                            : 'rgba(255,255,255,0.13)',
                        transition: 'color 0.45s ease',
                        fontFamily: '"Cormorant Garamond", Georgia, serif'
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
                            fontFamily: '"Cormorant Garamond", Georgia, serif'
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
                        <div className="pl-[calc(3.5rem+1.5rem)] pb-8 pr-4">
                          <div className="grid grid-cols-1 gap-8 items-start">

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
                              className="rounded-2xl p-6 min-w-[180px] border shrink-0 overflow-hidden relative"
                              style={{
                                background: 'rgb(29, 44, 56)',
                                borderColor: `${step.color}22`,
                              }}
                            >
                              {/* Glass glow overlay */}
                              <div className="absolute inset-0 pointer-events-none" style={{ backgroundImage: "radial-gradient(circle at 80% 20%, rgba(215, 226, 232, 0.12) 0px, transparent 50%)" }} />
                              <div className="absolute inset-0 pointer-events-none" style={{ backgroundImage: "radial-gradient(circle at 20% 80%, rgba(215, 226, 232, 0.07) 0px, transparent 50%)" }} />
                              <span className="block text-[0.58rem] font-bold tracking-[0.18em] uppercase text-[#7a8a96] mb-3">
                                Impact
                              </span>
                              <div
                                className="font-serif leading-none mb-2 text-4xl font-light"
                                style={{
                                  color: step.color,
                                  fontFamily: '"Cormorant Garamond", Georgia, serif'
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

      </div>
    </section>
  );
};

export default OSJourney;