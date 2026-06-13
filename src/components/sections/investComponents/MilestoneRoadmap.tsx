"use client";

import React, { useState, useRef, useEffect } from "react";
import {
  motion,
  AnimatePresence,
  useScroll,
  useTransform,
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
    color: "rgb(var(--radial-gradient-color))",
    metric: "5,000+",
    metricLabel: "homes planned",
    image: "/images/AdobeStock_1715809262.jpeg",
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
    image: "/images/AdobeStock_680093057.jpeg",
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
    image: "/images/AdobeStock_170554793.jpeg",
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
    image: "/images/AdobeStock_383551453.jpeg",
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

const EASE = [0.16, 1, 0.3, 1] as const;

export const MilestoneRoadmap = () => {
  const [active, setActive] = useState(0);
  const [isPaused, setIsPaused] = useState(false);
  const ms = milestones[active];

  // Refs for Parallax tracking
  const sectionRef = useRef<HTMLElement>(null);
  const panelRef = useRef<HTMLDivElement>(null);

  // Auto-flow with pause
  useEffect(() => {
    if (isPaused) return;
    const timer = setInterval(() => {
      setActive((prev) => (prev + 1) % milestones.length);
    }, 10000);
    return () => clearInterval(timer);
  }, [isPaused]);

  // Scroll tracking for the whole section
  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ["start end", "end start"],
  });

  // Parallax transformations
  const bgGridY = useTransform(scrollYProgress, [0, 1], ["-10%", "10%"]);
  const headerY = useTransform(scrollYProgress, [0, 0.5], [50, 0]);
  const panelNumberY = useTransform(scrollYProgress, [0.3, 0.8], [60, -40]);

  return (
    <section
      ref={sectionRef}
      className="relative overflow-x-clip py-24 lg:py-36 text-sandstone-500 cursor-pointer"
      onClick={() => setIsPaused((prev) => !prev)}
    >
      {/* ── Fluid Glass Background (Image Removed) ── */}
      <motion.div
        className="absolute inset-0 pointer-events-none z-0"
        style={{ y: bgGridY, scale: 1.1 }}
      >
        <div
          className="absolute pointer-events-none right-0 top-1/3 translate-x-1/2 -translate-y-1/4 w-[clamp(44rem,14.769rem+116.923vw,120rem)] h-[clamp(25rem,8.654rem+65.385vw,67.5rem)] opacity-[0.8]"
          style={{
            background:
              "radial-gradient(50% 50%, rgba(var(--radial-gradient-color, 255, 97, 54), 0.20), rgba(var(--radial-gradient-color, 255, 97, 54), 0.03) 50%, rgba(var(--radial-gradient-color, 255, 97, 54), 0))",
          }}
        />

        {/* Film grain effect overlay */}
        <div
          className="absolute inset-0 opacity-[0.04] mix-blend-overlay"
          style={{
            backgroundImage: `url("data:image/svg+xml,%3Csvg viewBox='0 0 200 200' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='noiseFilter'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.85' numOctaves='3' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23noiseFilter)'/%3E%3C/svg%3E")`,
          }}
        />
      </motion.div>

      {/* ── CONTENT ── */}
      <div className="max-w-[1440px] mx-auto px-6 md:px-12 lg:px-16 relative z-10 w-full">
        {/* Cinematic Header (with entrance scroll parallax) */}
        <motion.div
          style={{ y: headerY }}
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.9, ease: EASE }}
          className="mb-24 flex flex-col items-center md:items-start text-center md:text-left gap-4"
        >
          <h2 className="font-cormorant text-3xl md:text-5xl text-sandstone-500 leading-[40px] md:leading-[60px] tracking-tight font-noraml">
            The Path to<span className="not-italic font-light text-[rgb(var(--radial-gradient-color))]"> Scale</span>
          </h2>
          <p className="max-w-4xl text-base md:text-lg font-light font-albert leading-[28px] md:leading-[30px] text-sandstone-500">
            A disciplined, milestone-driven progression from our Texas
            groundbreak to national HumanlyOS® licensing.
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
          <div
            className="absolute top-[11px] h-[1px] bg-sandstone-500/[0.15] z-0"
            style={{
              left: `${100 / (milestones.length * 2)}%`,
              right: `${100 / (milestones.length * 2)}%`
            }}
          />

          {/* Animated sharp progress line */}
          <motion.div
            className="absolute top-[11px] h-[1px] bg-sandstone-500 z-0"
            style={{ left: `${100 / (milestones.length * 2)}%` }}
            animate={{ width: `${(active / (milestones.length - 1)) * (100 - (100 / milestones.length))}%` }}
            transition={{ duration: 0.8, ease: EASE }}
          />

          {/* Nodes */}
          <div className="flex justify-between relative z-10">
            {milestones.map((m, i) => {
              const isPast = i < active;
              const isCurrent = i === active;

              return (
                <button
                  key={m.id}
                  onClick={(e) => {
                    e.stopPropagation();
                    setActive(i);
                  }}
                  className="flex flex-col items-center gap-6 group focus:outline-none"
                  style={{ width: `${100 / milestones.length}%` }}
                >
                  {/* Node Shape */}
                  <div className="relative flex items-center justify-center h-6 w-6">
                    {/* Solid background mask to break the track line */}
                    <div className="absolute w-5 h-5 bg-sandstone-200 z-0" />

                    <motion.div
                      animate={{
                        scale: isCurrent ? 1 : 0.5,
                        backgroundColor: isCurrent
                          ? "rgb(var(--radial-gradient-color))"
                          : isPast
                            ? "rgba(74, 71, 65, 0.4)"
                            : "rgba(74, 71, 65, 0.15)",
                        borderColor: isCurrent
                          ? "#4a4741"
                          : "transparent",
                      }}
                      transition={{ duration: 0.5, ease: EASE }}
                      className="w-3 h-3 relative z-10 transition-colors duration-500"
                    />
                    {/* Outer pulse for current */}
                    {isCurrent && (
                      <motion.div
                        className="absolute w-3 h-3 border border-sandstone-500 z-10"
                        animate={{ scale: [1, 2.5, 2.5], opacity: [0.8, 0, 0] }}
                        transition={{
                          duration: 2,
                          repeat: Infinity,
                          ease: "easeOut",
                        }}
                      />
                    )}
                  </div>

                  {/* Date label */}
                  <motion.span
                    animate={{
                      color: isCurrent
                        ? "#4a4741"
                        : isPast
                          ? "rgba(74, 71, 65, 0.5)"
                          : "rgba(74, 71, 65, 0.2)",
                    }}
                    transition={{ duration: 0.4 }}
                    className="text-xs font-albert font-medium tracking-widest uppercase"
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
          className="relativ bg-[#101d2d]/60 border border-white/5 overflow-hidden backdrop-blur-md rounded-[24px] text-white"
          style={{ minHeight: "340px", boxShadow: `0 25px 60px -15px rgba(var(--radial-gradient-color), 0.25)` }}
          initial={{ opacity: 0, y: 40, scale: 0.97 }}
          whileInView={{ opacity: 1, y: 0, scale: 1 }}
          viewport={{ once: true, margin: "-40px" }}
          transition={{ duration: 0.9, ease: EASE, delay: 0.3 }}
        >
          {/* Subtle Color Overlay for Transition */}
          <motion.div
            className="absolute inset-0 pointer-events-none z-0"
            animate={{ backgroundColor: ms.color }}
            transition={{ duration: 1, ease: EASE }}
            style={{ opacity: 0.08 }}
          />

          <AnimatePresence mode="wait">
            <motion.div
              key={active}
              initial={{ opacity: 0, filter: "blur(12px)", scale: 0.97 }}
              animate={{ opacity: 1, filter: "blur(0px)", scale: 1 }}
              exit={{ opacity: 0, filter: "blur(8px)", scale: 1.02 }}
              transition={{ duration: 0.9, ease: EASE }}
              className="absolute inset-0 flex flex-col md:flex-row z-10"
            >
              {/* Optional background image from our milestone data */}
              <div className="absolute inset-0 z-0 opacity-20 mix-blend-screen pointer-events-none">
                <img
                  src={ms.image}
                  alt={ms.title}
                  className="w-full h-full object-cover"
                  style={{ objectPosition: ms.imagePosition }}
                />
                <div className="absolute inset-0 bg-gradient-to-r from-[#101d2d] to-transparent" />
              </div>

              {/* Left Column: Meta & Lines */}
              
              <div className="w-full md:w-1/3 p-8 md:p-12 border-b md:border-b-0 md:border-r border-white/5 flex flex-col justify-between relative bg-black/40 backdrop-blur-sm z-10">
                 <motion.div
                  initial={{ opacity: 0, x: 20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: 0.25, duration: 2, ease: EASE }}
                >
                <div>
                  <div className="flex items-center gap-3 mb-6">
                    <span className="w-1 h-1 bg-white" />
                    <p className="text-xs font-albert font-medium tracking-[0.2em] uppercase text-white">
                      Phase 0{active + 1}
                    </p>
                  </div>
                  <h3 className="font-bodoni text-3xl md:text-4xl text-[rgb(var(--radial-gradient-color))] font-normal tracking-widest mb-2">
                    {ms.year}
                  </h3>
                </div>
                </motion.div>

                {/* Minimalist Status */}
                <motion.div
                  initial={{ opacity: 0, x: 20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: 0.25, duration: 2, ease: EASE }}
                >
                <div className="flex items-center gap-2 mt-8 md:mt-0">
                  {ms.status === "Active" ? (
                    <span className="w-1.5 h-1.5 bg-white animate-pulse" />
                  ) : (
                    <span className="w-1.5 h-1.5 border border-white/40" />
                  )}
                  <span className="text-xs font-medium font-albert tracking-[0.2em] uppercase text-white">
                    {ms.status}
                  </span>
                </div>
                </motion.div>
              </div>

              {/* Right Column: Title & Desc */}
              <div className="w-full md:w-2/3 p-8 md:p-16 flex flex-col justify-center relative backdrop-blur-[2px] z-10">
                <motion.div
                  initial={{ opacity: 0, x: 20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: 0.25, duration: 2, ease: EASE }}
                >
                  <h4 className="font-cormorant text-2xl md:text-3xl font-bold text-[rgb(var(--radial-gradient-color))] mb-6">
                    {ms.title}
                  </h4>
                  <div className="h-[1px] w-12 bg-white/60 mb-6" />
                  <p className="text-base font-albert leading-relaxed font-light text-white max-w-2xl mb-8">
                    {ms.desc}
                  </p>

                  {/* Incorporating current milestone metrics into the new premium card */}
                  <div className="flex flex-col">
                    <span className="text-3xl md:text-4xl font-albert font-light text-[rgb(var(--radial-gradient-color))]">{ms.metric}</span>
                    <span className="text-[10px] font-light font-albert uppercase tracking-[0.2em] text-white mt-2">{ms.metricLabel}</span>
                  </div>
                </motion.div>
              </div>
            </motion.div>
          </AnimatePresence>
        </motion.div>

        {/* ── Navigation ── */}
        <div className="flex items-center justify-between pt-8">
          <button
            onClick={(e) => {
              e.stopPropagation();
              setActive(Math.max(0, active - 1));
            }}
            disabled={active === 0}
            className="text-[10px] font-medium tracking-[0.2em] uppercase text-sandstone-500/40 hover:text-sandstone-500 transition-colors duration-300 disabled:opacity-20 disabled:hover:text-sandstone-500/40 flex items-center gap-2 group"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="14"
              height="14"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
              className="group-hover:-translate-x-1 transition-transform duration-300"
            >
              <path d="M19 12H5M12 5l-7 7 7 7" />
            </svg>
            Prev
          </button>

          <button
            onClick={(e) => {
              e.stopPropagation();
              setActive(Math.min(milestones.length - 1, active + 1));
            }}
            disabled={active === milestones.length - 1}
            className="text-[10px] font-medium tracking-[0.2em] uppercase text-sandstone-500/40 hover:text-sandstone-500 transition-colors duration-300 disabled:opacity-20 disabled:hover:text-sandstone-500/40 flex items-center gap-2 group"
          >
            Next
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="14"
              height="14"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
              className="group-hover:translate-x-1 transition-transform duration-300"
            >
              <path d="M5 12h14M12 5l7 7-7 7" />
            </svg>
          </button>
        </div>
      </div>
    </section>
  );
};