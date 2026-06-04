"use client";

import { useState, useEffect, useRef } from "react";
import { motion, AnimatePresence, useScroll, useTransform } from "framer-motion";
import { RevealOnScroll } from "../ui/RevealOnScroll";

/* ─────────────────── data ─────────────────── */
const steps = [
  {
    id: "flow-1",
    num: "01",
    title: "Resident Need",
    subtitle: "Intent captured",
    description:
      "A resident identifies a need — whether it's housing, a financial product, healthcare, or a community service. The Humanly OS detects the intent through the resident portal and routes it intelligently.",
    color: "#6BCEFF",
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={1.5} strokeLinecap="round" strokeLinejoin="round" className="w-6 h-6">
        <circle cx="12" cy="8" r="4" />
        <path d="M4 20c0-4 3.6-7 8-7s8 3 8 7" />
      </svg>
    ),
    metric: "100%",
    metricLabel: "of needs logged & tracked",
  },
  {
    id: "flow-2",
    num: "02",
    title: "Circle of Services",
    subtitle: "Smart routing",
    description:
      "The request enters the integrated services marketplace. AI-driven matching connects the resident with the right vendor, partner, or community resource — instantly and without friction.",
    color: "#818CF8",
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={1.5} strokeLinecap="round" strokeLinejoin="round" className="w-6 h-6">
        <circle cx="12" cy="12" r="3" />
        <path d="M12 2v3M12 19v3M2 12h3M19 12h3M4.22 4.22l2.12 2.12M17.66 17.66l2.12 2.12M4.22 19.78l2.12-2.12M17.66 6.34l2.12-2.12" />
      </svg>
    ),
    metric: "<2s",
    metricLabel: "average match time",
  },
  {
    id: "flow-3",
    num: "03",
    title: "HumanlyPay™",
    subtitle: "Embedded payment",
    description:
      "Payment is processed through HumanlyPay™ — our embedded finance rail. No third-party redirects, no friction. Residents pay once within the portal; funds are split and settled in real time.",
    color: "#C084FC",
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={1.5} strokeLinecap="round" strokeLinejoin="round" className="w-6 h-6">
        <rect x="2" y="5" width="20" height="14" rx="3" />
        <path d="M2 10h20M6 15h4" />
      </svg>
    ),
    metric: "0%",
    metricLabel: "payment friction for residents",
  },
  {
    id: "flow-4",
    num: "04",
    title: "Revenue Capture",
    subtitle: "Operator yield",
    description:
      "Every fulfilled transaction generates a revenue event for the operator. Platform fees, service margins, and partner commissions are automatically calculated and credited — no manual reconciliation.",
    color: "#FB923C",
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={1.5} strokeLinecap="round" strokeLinejoin="round" className="w-6 h-6">
        <path d="M12 2v20M17 5H9.5a3.5 3.5 0 000 7h5a3.5 3.5 0 010 7H6" />
      </svg>
    ),
    metric: "∞",
    metricLabel: "revenue streams, one platform",
  },
  {
    id: "flow-5",
    num: "05",
    title: "Community Reinvestment",
    subtitle: "Value loop closes",
    description:
      "A portion of every transaction flows back into community programs, amenities, and shared savings — creating a self-reinforcing loop where resident activity directly improves resident life.",
    color: "#34D399",
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={1.5} strokeLinecap="round" strokeLinejoin="round" className="w-6 h-6">
        <path d="M4 4v5h.582m15.356 2A8.001 8.001 0 004.582 9m0 0H9m11 11v-5h-.581m0 0a8.003 8.003 0 01-15.357-2m15.357 2H15" />
      </svg>
    ),
    metric: "100%",
    metricLabel: "value returned to community",
  },
];

/* ─────────────────── animated rail dot ─────────────────── */
const CYCLE_MS = 6000;

/* ─────────────────── main section ─────────────────── */
export const TransactionFlowSection = () => {
  const [active, setActive] = useState(0);
  const [progress, setProgress] = useState(0);
  const startRef = useRef(Date.now());
  const rafRef = useRef<number>();
  const sectionRef = useRef<HTMLDivElement>(null);

  const { scrollYProgress } = useScroll({ target: sectionRef, offset: ["start end", "end start"] });
  const bgY = useTransform(scrollYProgress, [0, 1], ["0%", "15%"]);

  useEffect(() => {
    const tick = () => {
      const elapsed = (Date.now() - startRef.current) % (CYCLE_MS * steps.length);
      const stepIndex = Math.floor(elapsed / CYCLE_MS);
      const stepProgress = (elapsed % CYCLE_MS) / CYCLE_MS;
      setActive(stepIndex);
      setProgress(stepProgress);
      rafRef.current = requestAnimationFrame(tick);
    };
    rafRef.current = requestAnimationFrame(tick);
    return () => { if (rafRef.current) cancelAnimationFrame(rafRef.current); };
  }, []);

  const handleManualSelect = (i: number) => {
    startRef.current = Date.now() - i * CYCLE_MS;
    setActive(i);
    setProgress(0);
  };

  const svc = steps[active];

  return (
    <section
      ref={sectionRef}
      className="relative w-full py-20 lg:py-32 overflow-hidden"
    >
      {/* Ambient colour blooms — light, warm */}
      <div
        className="absolute pointer-events-none top-[-10%] left-[-5%] w-[60vw] h-[60vw] rounded-full"
        style={{
          background: `radial-gradient(circle, ${svc.color}0F 0%, transparent 65%)`,
          transition: "background 1.2s ease",
        }}
      />
      <div
        className="absolute pointer-events-none bottom-[-10%] right-[-5%] w-[50vw] h-[50vw] rounded-full"
        style={{ background: "radial-gradient(circle, rgba(255,182,55,0.07) 0%, transparent 65%)" }}
      />

      <div className="max-w-[1440px] mx-auto px-6 md:px-12 lg:px-16 relative z-10">

        {/* ── Header ── */}
        <RevealOnScroll>
          <header className="flex flex-col gap-3 mb-16 lg:mb-20">
            <div className="flex items-center gap-3">
              <div className="h-[1px] w-8" style={{ background: `linear-gradient(to right, ${svc.color}, transparent)`, transition: "background 0.8s ease" }} />
              <span className="text-[0.65rem] font-albert font-semibold tracking-[0.22em] uppercase text-[#a8a5a0]">
                Platform Intelligence
              </span>
            </div>
            <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold font-bodoni text-sandstone-500 leading-[1.05]">
              Transaction Flow
            </h2>
            <p className="text-sm md:text-base font-albert font-light text-[#1C1B1A]/45 max-w-md leading-relaxed mt-1">
              Every resident interaction generates value — automatically captured, distributed, and reinvested.
            </p>
          </header>
        </RevealOnScroll>

        {/* ── Main Layout ── */}
        <div className="flex flex-col lg:flex-row gap-10 lg:gap-16 items-start">

          {/* ── LEFT: Pipeline rail ── */}
          <div className="w-full lg:w-auto flex lg:flex-col items-center lg:items-stretch gap-0 overflow-x-auto lg:overflow-visible pb-2 lg:pb-0">

            {steps.map((s, i) => {
              const isActive = i === active;
              const isPast = i < active;

              return (
                <div key={s.id} className="flex lg:flex-col items-center lg:items-start flex-shrink-0">

                  {/* Node row */}
                  <button
                    onClick={() => handleManualSelect(i)}
                    className="flex items-center gap-4 group relative"
                    aria-label={`Go to step ${s.num}`}
                  >
                    {/* Node circle */}
                    <div className="relative flex-shrink-0">
                      <motion.div
                        className="w-12 h-12 rounded-full flex items-center justify-center relative z-10 transition-all duration-500"
                        animate={{
                          background: isActive
                            ? `${s.color}18`
                            : isPast ? `${s.color}08` : "rgba(74,71,65,0.04)",
                          borderColor: isActive ? s.color : isPast ? `${s.color}40` : "rgba(74,71,65,0.12)",
                          scale: isActive ? 1.1 : 1,
                        }}
                        style={{ border: "1px solid" }}
                        transition={{ duration: 0.5 }}
                      >
                        <span
                          className="transition-colors duration-500"
                          style={{ color: isActive ? s.color : isPast ? `${s.color}90` : "rgba(28,27,26,0.25)" }}
                        >
                          {s.icon}
                        </span>
                      </motion.div>

                      {/* Pulse ring on active */}
                      {isActive && (
                        <motion.div
                          className="absolute inset-0 rounded-full pointer-events-none"
                          style={{ border: `1px solid ${s.color}` }}
                          animate={{ scale: [1, 1.6], opacity: [0.6, 0] }}
                          transition={{ duration: 1.4, repeat: Infinity, ease: "easeOut" }}
                        />
                      )}
                    </div>

                    {/* Label — visible on desktop */}
                    <div className="hidden lg:flex flex-col gap-0.5 text-left">
                      <span
                        className="text-[0.6rem] font-albert font-semibold tracking-[0.18em] uppercase transition-colors duration-400"
                        style={{ color: isActive ? s.color : "rgba(168,165,160,0.7)" }}
                      >
                        {s.num}
                      </span>
                      <span
                        className="text-sm font-albert font-semibold transition-colors duration-400"
                        style={{ color: isActive ? "#1C1B1A" : isPast ? "rgba(28,27,26,0.55)" : "rgba(28,27,26,0.28)" }}
                      >
                        {s.title}
                      </span>
                    </div>
                  </button>

                  {/* Connector */}
                  {i < steps.length - 1 && (
                    <>
                      {/* Mobile: horizontal */}
                      <div className="flex lg:hidden w-10 h-[1px] flex-shrink-0 mx-1 relative overflow-hidden"
                        style={{ background: "rgba(74,71,65,0.1)" }}>
                        {isPast && (
                          <div className="absolute inset-0" style={{ background: `linear-gradient(to right, ${s.color}70, ${steps[i + 1].color}50)` }} />
                        )}
                      </div>

                      {/* Desktop: vertical */}
                      <div className="hidden lg:flex flex-col items-center ml-6 my-1 relative overflow-hidden" style={{ height: "40px", width: "1px" }}>
                        <div className="w-full h-full" style={{ background: "rgba(74,71,65,0.1)" }} />
                        {isPast && (
                          <motion.div
                            className="absolute top-0 left-0 w-full"
                            style={{ background: `linear-gradient(to bottom, ${s.color}80, ${steps[i + 1].color}50)` }}
                            initial={{ height: 0 }}
                            animate={{ height: "100%" }}
                            transition={{ duration: 0.6, ease: "easeOut" }}
                          />
                        )}
                        {isActive && (
                          <motion.div
                            className="absolute top-0 left-0 w-full"
                            style={{ background: `${s.color}`, height: `${progress * 100}%` }}
                          />
                        )}
                      </div>
                    </>
                  )}
                </div>
              );
            })}
          </div>

          {/* ── RIGHT: Active step detail panel ── */}
          <div className="flex-1 w-full">
            <AnimatePresence mode="wait">
              <motion.div
                key={svc.id}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -20 }}
                transition={{ duration: 0.45, ease: [0.22, 1, 0.36, 1] }}
                className="relative rounded-[2rem] overflow-hidden p-8 lg:p-12"
                style={{
                  background: "rgba(255,255,255,0.55)",
                  border: `1px solid ${svc.color}30`,
                  backdropFilter: "blur(24px)",
                  WebkitBackdropFilter: "blur(24px)",
                  boxShadow: `0 0 60px ${svc.color}10, 0 16px 48px rgba(74,71,65,0.08)`,
                }}
              >
                {/* Corner glow */}
                <div
                  className="absolute top-0 right-0 w-64 h-64 rounded-bl-[8rem] pointer-events-none"
                  style={{ background: `radial-gradient(circle at 100% 0%, ${svc.color}14, transparent 60%)` }}
                />
                {/* Bottom-left accent */}
                <div
                  className="absolute bottom-0 left-0 w-48 h-48 pointer-events-none"
                  style={{ background: `radial-gradient(circle at 0% 100%, ${svc.color}0C, transparent 70%)` }}
                />

                {/* Top shimmer */}
                <div
                  className="absolute top-0 left-8 right-8 h-[1px] pointer-events-none"
                  style={{ background: `linear-gradient(to right, transparent, ${svc.color}50, transparent)` }}
                />

                <div className="relative z-10 flex flex-col gap-8">

                  {/* Step badge + number */}
                  <div className="flex items-center justify-between">
                    <div
                      className="flex items-center gap-2 px-4 py-1.5 rounded-full text-xs font-albert font-semibold tracking-[0.16em] uppercase"
                      style={{
                        color: svc.color,
                        background: `${svc.color}15`,
                        border: `1px solid ${svc.color}30`,
                      }}
                    >
                      <span
                        className="w-1.5 h-1.5 rounded-full inline-block"
                        style={{ background: svc.color, boxShadow: `0 0 6px ${svc.color}` }}
                      />
                      Step {svc.num}
                    </div>
                    <span className="text-[0.6rem] font-albert font-medium tracking-widest uppercase text-[#1C1B1A]/25">
                      {active + 1} of {steps.length}
                    </span>
                  </div>

                  {/* Title */}
                  <div className="flex flex-col gap-2">
                    <p className="text-xs font-albert font-medium tracking-widest uppercase" style={{ color: `${svc.color}90` }}>
                      {svc.subtitle}
                    </p>
                    <h3 className="text-4xl md:text-5xl font-bold font-bodoni text-sandstone-500 leading-tight">
                      {svc.title}
                    </h3>
                  </div>

                  {/* Description */}
                  <p className="text-base md:text-lg font-albert font-light text-[#1C1B1A]/55 leading-relaxed max-w-xl">
                    {svc.description}
                  </p>

                  {/* Metric + progress row */}
                  <div
                    className="flex flex-col sm:flex-row items-start sm:items-end gap-6 pt-6"
                    style={{ borderTop: "1px solid rgba(74,71,65,0.1)" }}
                  >
                    {/* Big metric */}
                    <div>
                      <p
                        className="text-5xl md:text-6xl font-bold font-bodoni leading-none"
                        style={{ color: svc.color }}
                      >
                        {svc.metric}
                      </p>
                      <p className="text-xs font-albert font-medium tracking-widest uppercase text-[#1C1B1A]/35 mt-2">
                        {svc.metricLabel}
                      </p>
                    </div>

                    {/* Dot progress nav */}
                    <div className="flex items-center gap-3 sm:ml-auto sm:pb-1">
                      {steps.map((_, i) => (
                        <button
                          key={i}
                          onClick={() => handleManualSelect(i)}
                          className="rounded-full transition-all duration-400"
                          style={{
                            width: i === active ? "28px" : "7px",
                            height: "7px",
                            background: i === active ? svc.color : i < active ? `${svc.color}45` : "rgba(74,71,65,0.15)",
                          }}
                          aria-label={`Go to step ${steps[i].num}`}
                        />
                      ))}
                    </div>
                  </div>

                  {/* Auto-progress bar */}
                  <div className="h-[2px] rounded-full overflow-hidden" style={{ background: "rgba(74,71,65,0.1)" }}>
                    <motion.div
                      className="h-full rounded-full"
                      style={{ background: `linear-gradient(to right, ${svc.color}, ${svc.color}80)` }}
                      animate={{ width: `${progress * 100}%` }}
                      transition={{ duration: 0.1, ease: "linear" }}
                    />
                  </div>
                </div>
              </motion.div>
            </AnimatePresence>
          </div>
        </div>

      </div>
    </section>
  );
};
