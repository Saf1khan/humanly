"use client";

import { useState, useEffect, useRef } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { RevealOnScroll } from "../ui/RevealOnScroll";

/* ─────────────────────── data ─────────────────────── */
const services = [
  {
    id: "credit-building",
    index: "01",
    title: "Credit Building",
    tagline: "Turn rent into credit history.",
    description:
      "From your very first payment, HumanlyPay reports your rent to all three major credit bureaus — automatically building your credit score without lifting a finger. Pair that with our on-demand credit coaching and watch your score climb.",
    image: "/images/AdobeStock_571214762.jpeg",
    stat: "+82",
    statUnit: "pts",
    statContext: "avg. resident score lift in 12 months",
    tag: "Most Popular",
    color: "#6BCEFF",
  },
  {
    id: "savings-programs",
    index: "02",
    title: "Savings Programs",
    tagline: "Save together, grow together.",
    description:
      "Automated round-ups and recurring transfers move money into your savings before you even notice it's gone. Humanly matches community savings milestones — so your neighbours' progress fuels yours.",
    image: "/images/AdobeStock_536583618.jpeg",
    stat: "3×",
    statUnit: "",
    statContext: "community match on milestone deposits",
    tag: null,
    color: "#FFB637",
  },
  {
    id: "insurance-products",
    index: "03",
    title: "Insurance Products",
    tagline: "Group rates. Real coverage.",
    description:
      "Because Humanly negotiates as a community, residents access renters, health, and life insurance at 40% below market average. One application covers everything — no hidden exclusions.",
    image: "/images/pexels-shkrabaanthony-5214992.jpg",
    stat: "40%",
    statUnit: "",
    statContext: "below-market premiums for all residents",
    tag: null,
    color: "#AA3DAD",
  },
  {
    id: "bill-pay",
    index: "04",
    title: "Bill Pay",
    tagline: "One bill. Zero chaos.",
    description:
      "Rent, utilities, internet, and community services all land in a single statement. Pay once, stay organised, and never miss a due date again with smart reminders built right into your resident portal.",
    image: "/images/pexels-tima-miroshnichenko-6914062.jpg",
    stat: "1",
    statUnit: "bill",
    statContext: "for rent, utilities & every service",
    tag: null,
    color: "#6BCEFF",
  },
  {
    id: "emergency-fund",
    index: "05",
    title: "Emergency Fund",
    tagline: "A safety net built by the community.",
    description:
      "Life doesn't wait. Humanly's pooled emergency fund disburses within 24 hours of an approved request — no credit check, no interest, no shame. Because every neighbour deserves a safety net.",
    image: "/images/pexels-rdne-6647050.jpg",
    stat: "24h",
    statUnit: "",
    statContext: "average disbursement after approval",
    tag: "Resident exclusive",
    color: "#FF6136",
  },
  {
    id: "financial-coaching",
    index: "06",
    title: "Financial Coaching",
    tagline: "Your goals, your advisor, your pace.",
    description:
      "Every Humanly resident gets access to certified financial advisors for 1-on-1 sessions — whether you're building a budget for the first time or planning a path to homeownership.",
    image: "/images/pexels-silverkblack-23496452.jpg",
    stat: "1:1",
    statUnit: "",
    statContext: "dedicated advisor sessions, always free",
    tag: null,
    color: "#AA3DAD",
  },
];

/* ─────────────────────── progress bar (auto-advance) ─────────────────────── */
const AUTO_ADVANCE_MS = 5000;

const ProgressBar = ({ active, duration }: { active: boolean; duration: number }) => (
  <div className="absolute bottom-0 left-0 right-0 h-[2px] bg-transparent">
    {active && (
      <motion.div
        className="h-full"
        style={{ background: "linear-gradient(to right,#6BCEFF,#AA3DAD,#FF6136)" }}
        initial={{ width: "0%" }}
        animate={{ width: "100%" }}
        transition={{ duration: duration / 1000, ease: "linear" }}
      />
    )}
  </div>
);

/* ─────────────────────── main section ─────────────────────── */
export const FinancialServicesSection = () => {
  const [active, setActive] = useState(0);
  const [paused, setPaused] = useState(false);
  const timerRef = useRef<ReturnType<typeof setInterval> | null>(null);

  const advance = () =>
    setActive((prev) => (prev + 1) % services.length);

  useEffect(() => {
    if (paused) return;
    timerRef.current = setInterval(advance, AUTO_ADVANCE_MS);
    return () => { if (timerRef.current) clearInterval(timerRef.current); };
  }, [paused, active]);

  const handleSelect = (i: number) => {
    if (timerRef.current) clearInterval(timerRef.current);
    setActive(i);
    setPaused(false);
  };

  const svc = services[active];

  return (
    <section
      className="relative w-full bg-transparent py-16 lg:py-24 overflow-hidden"
      onMouseEnter={() => setPaused(true)}
      onMouseLeave={() => setPaused(false)}
    >
      {/* Ambient glow */}
      <div
        className="absolute pointer-events-none right-0 top-0 w-[60vw] h-[60vw] max-w-[900px] max-h-[900px]"
        style={{
          background: `radial-gradient(50% 50% at 100% 0%, ${svc.color}12 0%, transparent 70%)`,
          transition: "background 1s ease",
        }}
      />
      <div
        className="absolute pointer-events-none left-0 bottom-0 w-[50vw] h-[50vw] max-w-[700px] max-h-[700px]"
        style={{ background: "radial-gradient(50% 50% at 0% 100%, rgba(255,182,55,0.06) 0%, transparent 70%)" }}
      />

      <div className="max-w-[1440px] mx-auto px-6 md:px-12 lg:px-16 relative z-10">

        {/* ── Top header ── */}
        <RevealOnScroll>
          <header className="mb-14 lg:mb-20 flex flex-col gap-3">
            <div className="flex items-center gap-3">
              <div className="h-[1px] w-10" style={{ background: `linear-gradient(to right, ${svc.color}, transparent)`, transition: "background 0.6s ease" }} />
              <span className="text-xs font-albert font-semibold tracking-[0.22em] uppercase text-[#a8a5a0]">
                HumanlyPay™ · Embedded Finance
              </span>
            </div>
            <h2 className="text-5xl md:text-6xl lg:text-7xl font-bold font-bodoni text-sandstone-500 leading-[1.02] tracking-normal">
              Financial Services
            </h2>
            <p className="text-base md:text-lg font-albert font-light text-[#1C1B1A]/45 max-w-lg mt-2 leading-relaxed">
              A full suite of financial tools woven into your residency — from credit building to emergency relief.
            </p>
          </header>
        </RevealOnScroll>

        {/* ── Main interactive layout ── */}
        <div className="flex flex-col lg:flex-row gap-8 lg:gap-12 items-stretch">

          {/* ── LEFT: Selector list ── */}
          <div className="lg:w-[340px] xl:w-[400px] flex-shrink-0 flex flex-col justify-between">
            {services.map((s, i) => {
              const isActive = i === active;
              return (
                <button
                  key={s.id}
                  onClick={() => handleSelect(i)}
                  className="relative group text-left flex items-center gap-5 px-5 py-5 rounded-2xl transition-all duration-300 overflow-hidden"
                  style={{
                    background: isActive ? "rgba(255,255,255,0.05)" : "transparent",
                    border: isActive ? `1px solid ${s.color}28` : "1px solid transparent",
                  }}
                >
                  {/* Active glow fill */}
                  {isActive && (
                    <motion.div
                      layoutId="selector-bg"
                      className="absolute inset-0 rounded-2xl pointer-events-none"
                      style={{ background: `linear-gradient(135deg, ${s.color}0A, transparent)` }}
                      transition={{ duration: 0.35, ease: [0.22, 1, 0.36, 1] }}
                    />
                  )}

                  {/* Number */}
                  <span
                    className="relative z-10 text-xs font-albert font-semibold tabular-nums transition-colors duration-300 w-6"
                    style={{ color: isActive ? s.color : "rgba(168,165,160,0.5)" }}
                  >
                    {s.index}
                  </span>

                  {/* Title + tagline */}
                  <div className="relative z-10 flex-1 min-w-0">
                    <p
                      className="text-base font-albert font-semibold leading-tight transition-colors duration-300 truncate"
                      style={{ color: isActive ? "#1C1B1A" : "rgba(28,27,26,0.45)" }}
                    >
                      {s.title}
                    </p>
                    {isActive && (
                      <motion.p
                        initial={{ opacity: 0, height: 0 }}
                        animate={{ opacity: 1, height: "auto" }}
                        exit={{ opacity: 0, height: 0 }}
                        className="text-xs font-albert font-normal text-[#a8a5a0] mt-1 leading-snug"
                      >
                        {s.tagline}
                      </motion.p>
                    )}
                  </div>

                  {/* Arrow */}
                  <motion.svg
                    className="relative z-10 w-4 h-4 flex-shrink-0"
                    style={{ color: isActive ? s.color : "rgba(168,165,160,0.3)" }}
                    animate={{ x: isActive ? 2 : 0 }}
                    transition={{ duration: 0.2 }}
                    fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}
                  >
                    <path strokeLinecap="round" strokeLinejoin="round" d="M9 5l7 7-7 7" />
                  </motion.svg>

                  {/* Auto-advance progress line */}
                  <ProgressBar active={isActive && !paused} duration={AUTO_ADVANCE_MS} />
                </button>
              );
            })}
          </div>

          {/* ── RIGHT: Feature panel ── */}
          <div className="flex-1 relative rounded-[2rem] overflow-hidden min-h-[520px] lg:min-h-[640px]">

            {/* Photos layer */}
            <AnimatePresence mode="sync">
              <motion.div
                key={svc.id + "-img"}
                className="absolute inset-0"
                initial={{ opacity: 0, scale: 1.04 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.98 }}
                transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
              >
                <img
                  src={svc.image}
                  alt={svc.title}
                  className="w-full h-full object-cover"
                />
                {/* Gradient overlay */}
                <div className="absolute inset-0" style={{
                  background: "linear-gradient(to top, rgba(28,27,26,0.88) 0%, rgba(28,27,26,0.3) 45%, rgba(28,27,26,0.05) 100%)"
                }} />
                {/* Tinted side vignette */}
                <div className="absolute inset-0" style={{
                  background: `linear-gradient(to right, ${svc.color}18 0%, transparent 50%)`,
                  transition: "background 0.6s ease"
                }} />
              </motion.div>
            </AnimatePresence>

            {/* Content overlay */}
            <div className="absolute inset-0 flex flex-col justify-between p-8 lg:p-12 z-10">

              {/* Top row: tag + index */}
              <div className="flex items-start justify-between">
                <AnimatePresence mode="wait">
                  {svc.tag && (
                    <motion.span
                      key={svc.id + "-tag"}
                      initial={{ opacity: 0, y: -8 }}
                      animate={{ opacity: 1, y: 0 }}
                      exit={{ opacity: 0, y: -8 }}
                      transition={{ duration: 0.35 }}
                      className="text-xs font-albert font-semibold tracking-[0.16em] uppercase px-3 py-1.5 rounded-full border"
                      style={{
                        color: svc.color,
                        borderColor: `${svc.color}40`,
                        background: `${svc.color}15`,
                      }}
                    >
                      {svc.tag}
                    </motion.span>
                  )}
                  {!svc.tag && <span key="empty" />}
                </AnimatePresence>

                <span className="text-xs font-albert font-semibold text-white/30 tracking-widest">
                  {svc.index} / 06
                </span>
              </div>

              {/* Bottom: text content + stat */}
              <AnimatePresence mode="wait">
                <motion.div
                  key={svc.id + "-content"}
                  className="flex flex-col gap-6"
                  initial={{ opacity: 0, y: 24 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -16 }}
                  transition={{ duration: 0.5, ease: [0.22, 1, 0.36, 1] }}
                >
                  {/* Title & desc */}
                  <div className="flex flex-col gap-3 max-w-xl">
                    <h3 className="text-4xl md:text-5xl font-bold font-bodoni text-white leading-tight">
                      {svc.title}
                    </h3>
                    <p className="text-base md:text-lg font-albert font-normal text-white/65 leading-relaxed max-w-lg">
                      {svc.description}
                    </p>
                  </div>

                  {/* Divider + stat */}
                  <div className="flex items-end gap-6 pt-2"
                    style={{ borderTop: `1px solid rgba(255,255,255,0.12)` }}
                  >
                    <div className="pt-5">
                      <p
                        className="text-5xl md:text-6xl font-bold font-bodoni leading-none"
                        style={{ color: svc.color }}
                      >
                        {svc.stat}
                        <span className="text-3xl ml-1">{svc.statUnit}</span>
                      </p>
                      <p className="text-xs font-albert font-medium tracking-widest uppercase text-white/40 mt-2">
                        {svc.statContext}
                      </p>
                    </div>

                    {/* Dot nav */}
                    <div className="flex items-center gap-2 pb-1 ml-auto">
                      {services.map((_, i) => (
                        <button
                          key={i}
                          onClick={() => handleSelect(i)}
                          className="rounded-full transition-all duration-300"
                          style={{
                            width: i === active ? "20px" : "6px",
                            height: "6px",
                            background: i === active ? svc.color : "rgba(255,255,255,0.25)",
                          }}
                          aria-label={`Go to ${services[i].title}`}
                        />
                      ))}
                    </div>
                  </div>
                </motion.div>
              </AnimatePresence>
            </div>

            {/* Corner accent */}
            <div
              className="absolute top-0 right-0 w-40 h-40 rounded-bl-[4rem] pointer-events-none"
              style={{ background: `radial-gradient(circle at 100% 0%, ${svc.color}18, transparent 70%)`, transition: "background 0.6s ease" }}
            />
          </div>
        </div>

      </div>
    </section>
  );
};