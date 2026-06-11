"use client";

import React, { useState, useRef } from "react";
import {
  motion,
  AnimatePresence,
  useScroll,
  useTransform,
  useReducedMotion,
} from "framer-motion";

const milestones = [
  {
    id: "m1",
    num: "01",
    date: "Q3 2025",
    year: "2025",
    title: "Texas Groundbreak",
    subtitle: "Flagship launch",
    desc: "Break ground on our flagship master-planned community — 5,000+ units, 1,000+ acres, Texas workforce market.",
    status: "Active",
    color: "#FF6136",
    metric: "5,000+",
    metricLabel: "homes planned",
    image: "/images/pexels-fotoaibe-1643389.jpg",
    imagePosition: "center",
    icon: (
      <svg
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth={1.5}
        strokeLinecap="round"
        strokeLinejoin="round"
        className="w-5 h-5"
      >
        <path d="M3 10.5 12 3l9 7.5" />
        <path d="M5 9.5V21h14V9.5" />
        <path d="M9.5 21v-6h5v6" />
      </svg>
    ),
  },
  {
    id: "m2",
    num: "02",
    date: "Q4 2026",
    year: "2026",
    title: "First Residents Move In",
    subtitle: "Community goes live",
    desc: "Phase 1 homes delivered. Village Center services go live. HumanlyOS® resident platform launches for day-one residents.",
    status: "Upcoming",
    color: "#F59E0B",
    metric: "Phase 1",
    metricLabel: "delivery begins",
    image: "/images/first-residents.jpg",
    imagePosition: "center",
    icon: (
      <svg
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth={1.5}
        strokeLinecap="round"
        strokeLinejoin="round"
        className="w-5 h-5"
      >
        <circle cx="12" cy="8" r="4" />
        <path d="M4 20c0-4 3.6-7 8-7s8 3 8 7" />
      </svg>
    ),
  },
  {
    id: "m3",
    num: "03",
    date: "2028",
    year: "2028",
    title: "Communities 2–4",
    subtitle: "Market expansion",
    desc: "Three additional communities break ground across new Sun Belt and Midwest markets, replicating the Texas prototype.",
    status: "Planned",
    color: "#818CF8",
    metric: "4",
    metricLabel: "communities live",
    image: "/images/expansion.jpg",
    imagePosition: "center",
    icon: (
      <svg
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth={1.5}
        strokeLinecap="round"
        strokeLinejoin="round"
        className="w-5 h-5"
      >
        <path d="M12 3v18" />
        <path d="M3 12h18" />
        <circle cx="12" cy="12" r="3" />
      </svg>
    ),
  },
  {
    id: "m4",
    num: "04",
    date: "2030",
    year: "2030",
    title: "HumanlyOS® Licensing",
    subtitle: "National platform scale",
    desc: "Platform licensing to third-party community operators begins — unlocking a high-margin recurring SaaS revenue stream at national scale.",
    status: "Planned",
    color: "#34D399",
    metric: "SaaS",
    metricLabel: "licensing revenue",
    image: "/images/licensing.jpg",
    imagePosition: "center",
    icon: (
      <svg
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth={1.5}
        strokeLinecap="round"
        strokeLinejoin="round"
        className="w-5 h-5"
      >
        <rect x="2" y="5" width="20" height="14" rx="3" />
        <path d="M2 10h20" />
        <path d="M6 15h4" />
      </svg>
    ),
  },
];

const EASE = [0.22, 1, 0.36, 1] as const;

export const MilestoneRoadmap = () => {
  const [active, setActive] = useState(0);
  const sectionRef = useRef<HTMLElement>(null);
  const shouldReduceMotion = useReducedMotion();

  const current = milestones[active];

  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ["start end", "end start"],
  });

  const ambientY = useTransform(scrollYProgress, [0, 1], ["0%", "12%"]);
  const panelY = useTransform(scrollYProgress, [0, 1], [20, -20]);

  const goPrev = () => setActive((prev) => Math.max(0, prev - 1));
  const goNext = () => setActive((prev) => Math.min(milestones.length - 1, prev + 1));

  return (
    <section
      ref={sectionRef}
      className="relative w-full overflow-hidden py-20 lg:py-32"
    >
      {/* Ambient blooms */}
      <motion.div
        className="absolute inset-0 pointer-events-none"
        style={{ y: shouldReduceMotion ? 0 : ambientY }}
      >
        <div
          className="absolute top-[-10%] left-[-5%] w-[60vw] h-[60vw] rounded-full"
          style={{
            background: `radial-gradient(circle, ${current.color}12 0%, transparent 65%)`,
            transition: "background 0.8s ease",
          }}
        />
        <div
          className="absolute bottom-[-10%] right-[-5%] w-[50vw] h-[50vw] rounded-full"
          style={{
            background: `radial-gradient(circle, ${current.color}0B 0%, transparent 65%)`,
            transition: "background 0.8s ease",
          }}
        />
      </motion.div>

      <div className="max-w-[1440px] mx-auto px-6 md:px-12 lg:px-16 relative z-10">
        {/* Header */}
        <header className="flex flex-col gap-3 mb-16 lg:mb-20">
          <div className="flex items-center gap-3">
            <div
              className="h-[1px] w-8"
              style={{
                background: `linear-gradient(to right, ${current.color}, transparent)`,
                transition: "background 0.5s ease",
              }}
            />
            <span className="text-[0.65rem] font-semibold tracking-[0.22em] uppercase text-[#a8a5a0]">
              Growth Roadmap
            </span>
          </div>

          <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold text-sandstone-700 leading-[1.05]">
            The Path to Scale
          </h2>

          <p className="text-sm md:text-base font-light text-[#1C1B1A]/45 max-w-md leading-relaxed mt-1">
            A disciplined, milestone-driven progression from Texas groundbreak to
            national HumanlyOS® licensing.
          </p>
        </header>

        {/* Main layout */}
        <div className="flex flex-col lg:flex-row gap-10 lg:gap-16 items-start">
          {/* Left rail */}
          <div className="w-full lg:w-auto flex lg:flex-col items-center lg:items-stretch gap-0 overflow-x-auto lg:overflow-visible pb-2 lg:pb-0">
            {milestones.map((m, i) => {
              const isActive = i === active;
              const isPast = i < active;

              return (
                <div
                  key={m.id}
                  className="flex lg:flex-col items-center lg:items-start flex-shrink-0"
                >
                  <button
                    onClick={() => setActive(i)}
                    className="flex items-center gap-4 group relative"
                    aria-label={`Go to milestone ${m.num}`}
                  >
                    <div className="relative flex-shrink-0">
                      <motion.div
                        className="w-12 h-12 rounded-full flex items-center justify-center relative z-10"
                        animate={{
                          background: isActive
                            ? `${m.color}18`
                            : isPast
                            ? `${m.color}08`
                            : "rgba(74,71,65,0.04)",
                          borderColor: isActive
                            ? m.color
                            : isPast
                            ? `${m.color}40`
                            : "rgba(74,71,65,0.12)",
                          scale: isActive ? 1.08 : 1,
                        }}
                        style={{ border: "1px solid" }}
                        transition={{ duration: 0.45 }}
                      >
                        <span
                          style={{
                            color: isActive
                              ? m.color
                              : isPast
                              ? `${m.color}90`
                              : "rgba(28,27,26,0.25)",
                          }}
                        >
                          {m.icon}
                        </span>
                      </motion.div>

                      {isActive && (
                        <motion.div
                          className="absolute inset-0 rounded-full pointer-events-none"
                          style={{ border: `1px solid ${m.color}` }}
                          animate={{ scale: [1, 1.6], opacity: [0.55, 0] }}
                          transition={{
                            duration: 1.4,
                            repeat: Infinity,
                            ease: "easeOut",
                          }}
                        />
                      )}
                    </div>

                    <div className="hidden lg:flex flex-col gap-0.5 text-left">
                      <span
                        className="text-[0.6rem] font-semibold tracking-[0.18em] uppercase transition-colors duration-300"
                        style={{
                          color: isActive
                            ? m.color
                            : "rgba(168,165,160,0.7)",
                        }}
                      >
                        {m.date}
                      </span>
                      <span
                        className="text-sm font-semibold transition-colors duration-300"
                        style={{
                          color: isActive
                            ? "#1C1B1A"
                            : isPast
                            ? "rgba(28,27,26,0.55)"
                            : "rgba(28,27,26,0.28)",
                        }}
                      >
                        {m.title}
                      </span>
                    </div>
                  </button>

                  {i < milestones.length - 1 && (
                    <>
                      {/* Mobile connector */}
                      <div
                        className="flex lg:hidden w-10 h-[1px] flex-shrink-0 mx-1 relative overflow-hidden"
                        style={{ background: "rgba(74,71,65,0.1)" }}
                      >
                        {(isPast || isActive) && (
                          <motion.div
                            className="absolute inset-0"
                            style={{
                              background: `linear-gradient(to right, ${m.color}70, ${milestones[i + 1].color}40)`,
                            }}
                            initial={{ width: 0 }}
                            animate={{ width: isPast ? "100%" : "50%" }}
                            transition={{ duration: 0.45 }}
                          />
                        )}
                      </div>

                      {/* Desktop connector */}
                      <div
                        className="hidden lg:flex flex-col items-center ml-6 my-1 relative overflow-hidden"
                        style={{ height: "40px", width: "1px" }}
                      >
                        <div
                          className="w-full h-full"
                          style={{ background: "rgba(74,71,65,0.1)" }}
                        />
                        {(isPast || isActive) && (
                          <motion.div
                            className="absolute top-0 left-0 w-full"
                            style={{
                              background: `linear-gradient(to bottom, ${m.color}80, ${milestones[i + 1].color}40)`,
                            }}
                            initial={{ height: 0 }}
                            animate={{ height: isPast ? "100%" : "50%" }}
                            transition={{ duration: 0.5, ease: "easeOut" }}
                          />
                        )}
                      </div>
                    </>
                  )}
                </div>
              );
            })}
          </div>

          {/* Right full-image panel */}
          <motion.div
            className="flex-1 w-full"
            style={{ y: shouldReduceMotion ? 0 : panelY }}
          >
            <AnimatePresence mode="wait">
              <motion.div
                key={current.id}
                initial={{ opacity: 0, y: 18 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -18 }}
                transition={{ duration: 0.45, ease: EASE }}
                className="relative rounded-[2rem] overflow-hidden min-h-[560px] lg:min-h-[620px]"
                style={{
                  border: `1px solid ${current.color}30`,
                  boxShadow: `0 0 60px ${current.color}12, 0 16px 48px rgba(74,71,65,0.08)`,
                  background: "rgba(255,255,255,0.35)",
                  backdropFilter: "blur(20px)",
                  WebkitBackdropFilter: "blur(20px)",
                }}
              >
                {/* Full image background */}
                <AnimatePresence mode="wait">
                  <motion.div
                    key={current.image}
                    initial={{ opacity: 0, scale: 1 }}
                    animate={{ opacity: 1, scale: 1 }}
                    exit={{ opacity: 0, scale: 1 }}
                    transition={{ duration: 0.6, ease: EASE }}
                    className="absolute inset-0"
                  >
                    <img
                      src={current.image}
                      alt={current.title}
                      className="absolute inset-0 w-full h-full object-cover"
                      style={{ objectPosition: current.imagePosition }}
                    />
                    <div className="absolute inset-0 bg-gradient-to-r from-[#111111]/62 via-[#111111]/34 to-[#111111]/18" />
                    <div className="absolute inset-0 bg-gradient-to-t from-[#111111]/60 via-transparent to-transparent" />
                    <div
                      className="absolute inset-0"
                      style={{
                        background: `radial-gradient(circle at 18% 20%, ${current.color}22, transparent 42%)`,
                      }}
                    />
                  </motion.div>
                </AnimatePresence>

                {/* top shimmer */}
                <div
                  className="absolute top-0 left-8 right-8 h-[1px] z-20 pointer-events-none"
                  style={{
                    background: `linear-gradient(to right, transparent, ${current.color}60, transparent)`,
                  }}
                />

                {/* floating year */}
                <div className="absolute right-6 bottom-4 z-10 text-white/[0.08] text-[6rem] md:text-[9rem] lg:text-[11rem] font-bold leading-none select-none pointer-events-none">
                  {current.year}
                </div>

                {/* content overlay */}
                <div className="relative z-20 h-full flex flex-col p-8 lg:p-12">
                  {/* top row */}
                  <div className="flex items-start justify-between gap-4">
                    <div
                      className="flex items-center gap-2 px-4 py-1.5 rounded-full text-xs font-semibold tracking-[0.16em] uppercase"
                      style={{
                        color: "#fff",
                        background: "rgba(255,255,255,0.12)",
                        border: "1px solid rgba(255,255,255,0.2)",
                        backdropFilter: "blur(14px)",
                        WebkitBackdropFilter: "blur(14px)",
                      }}
                    >
                      <span
                        className="w-1.5 h-1.5 rounded-full inline-block"
                        style={{
                          background: current.color,
                          boxShadow: `0 0 8px ${current.color}`,
                        }}
                      />
                      Milestone {current.num}
                    </div>

                    <div
                      className="px-3 py-1.5 rounded-full text-[0.65rem] font-semibold tracking-[0.18em] uppercase text-white"
                      style={{
                        background: "rgba(255,255,255,0.12)",
                        border: "1px solid rgba(255,255,255,0.18)",
                        backdropFilter: "blur(14px)",
                        WebkitBackdropFilter: "blur(14px)",
                      }}
                    >
                      {active + 1} of {milestones.length}
                    </div>
                  </div>

                  {/* middle content */}
                  <div className="mt-auto max-w-2xl">
                    <p
                      className="text-xs font-medium tracking-widest uppercase mb-3"
                      style={{ color: current.color }}
                    >
                      {current.subtitle}
                    </p>

                    <h3 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white leading-[1.02] max-w-3xl">
                      {current.title}
                    </h3>

                    <div
                      className="h-[1px] w-14 mt-6 mb-6"
                      style={{
                        background: `linear-gradient(to right, ${current.color}, transparent)`,
                      }}
                    />

                    <p className="text-base md:text-lg font-light text-white/78 leading-relaxed max-w-xl">
                      {current.desc}
                    </p>
                  </div>

                  {/* bottom block */}
                  <div className="mt-10 pt-6 border-t border-white/12 flex flex-col gap-6">
                    <div className="flex flex-col sm:flex-row items-start sm:items-end gap-6">
                      <div>
                        <p
                          className="text-5xl md:text-6xl font-bold leading-none"
                          style={{ color: current.color }}
                        >
                          {current.metric}
                        </p>
                        <p className="text-xs font-medium tracking-widest uppercase text-white/45 mt-2">
                          {current.metricLabel}
                        </p>
                      </div>

                      <div className="sm:ml-auto flex items-center gap-2">
                        <span
                          className="w-2 h-2 rounded-full"
                          style={{
                            background:
                              current.status === "Active"
                                ? current.color
                                : "rgba(255,255,255,0.35)",
                            boxShadow:
                              current.status === "Active"
                                ? `0 0 8px ${current.color}`
                                : "none",
                          }}
                        />
                        <span className="text-[0.7rem] font-semibold tracking-[0.18em] uppercase text-white/60">
                          {current.status}
                        </span>
                      </div>
                    </div>

                    {/* dot nav */}
                    <div className="flex items-center gap-3">
                      {milestones.map((_, i) => (
                        <button
                          key={i}
                          onClick={() => setActive(i)}
                          className="rounded-full transition-all duration-300"
                          style={{
                            width: i === active ? "28px" : "7px",
                            height: "7px",
                            background:
                              i === active
                                ? current.color
                                : i < active
                                ? "rgba(255,255,255,0.45)"
                                : "rgba(255,255,255,0.18)",
                          }}
                          aria-label={`Go to milestone ${milestones[i].num}`}
                        />
                      ))}
                    </div>

                    {/* prev/next */}
                    <div className="flex items-center justify-between">
                      <button
                        onClick={goPrev}
                        disabled={active === 0}
                        className="text-[0.68rem] font-semibold tracking-[0.2em] uppercase text-white/55 hover:text-white transition-colors disabled:opacity-20 flex items-center gap-2 group"
                      >
                        <span className="w-4 h-[1px] bg-current group-hover:-translate-x-1 transition-transform inline-block" />
                        Prev
                      </button>

                      <button
                        onClick={goNext}
                        disabled={active === milestones.length - 1}
                        className="text-[0.68rem] font-semibold tracking-[0.2em] uppercase text-white/55 hover:text-white transition-colors disabled:opacity-20 flex items-center gap-2 group"
                      >
                        Next
                        <span className="w-4 h-[1px] bg-current group-hover:translate-x-1 transition-transform inline-block" />
                      </button>
                    </div>
                  </div>
                </div>
              </motion.div>
            </AnimatePresence>
          </motion.div>
        </div>
      </div>
    </section>
  );
};