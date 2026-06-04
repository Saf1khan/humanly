"use client";

import { useEffect, useState, useRef } from "react";
import { motion } from "framer-motion";
import { RevealOnScroll } from "../ui/RevealOnScroll";

/* ─── Helpers ──────────────────────────────────────────────────── */

const fadeUp = (delay = 0) => ({
  initial: { opacity: 0, y: 28 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true, amount: 0.25 },
  transition: { duration: 0.65, delay, ease: [0.22, 1, 0.36, 1] as const },
});

const fadeLeft = (delay = 0) => ({
  initial: { opacity: 0, x: -32 },
  whileInView: { opacity: 1, x: 0 },
  viewport: { once: true, amount: 0.25 },
  transition: { duration: 0.7, delay, ease: [0.22, 1, 0.36, 1] as const },
});

const fadeRight = (delay = 0) => ({
  initial: { opacity: 0, x: 32 },
  whileInView: { opacity: 1, x: 0 },
  viewport: { once: true, amount: 0.2 },
  transition: { duration: 0.7, delay, ease: [0.22, 1, 0.36, 1] as const },
});

/* ─── Count-up Number ─────────────────────────────────────────── */

const CountUpNumber = ({
  end,
  prefix = "",
  suffix = "",
}: {
  end: number;
  prefix?: string;
  suffix?: string;
}) => {
  const [count, setCount] = useState(0);
  const [isVisible, setIsVisible] = useState(false);
  const ref = useRef<HTMLSpanElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
          observer.disconnect();
        }
      },
      { threshold: 0.1 },
    );
    if (ref.current) observer.observe(ref.current);
    return () => observer.disconnect();
  }, []);

  useEffect(() => {
    if (!isVisible) return;
    let start: number;
    const duration = 2000;
    const tick = (ts: number) => {
      if (!start) start = ts;
      const p = Math.min((ts - start) / duration, 1);
      const ease = p === 1 ? 1 : 1 - Math.pow(2, -10 * p);
      setCount(Math.floor(ease * end));
      if (p < 1) requestAnimationFrame(tick);
    };
    requestAnimationFrame(tick);
  }, [isVisible, end]);

  return (
    <span ref={ref} className="tabular-nums">
      {prefix}{count}{suffix}
    </span>
  );
};

/* ─── Data ────────────────────────────────────────────────────── */

const stats = [
  { value: 5,   prefix: "$", suffix: "M", label: "Flagship Investment", delay: 0.55 },
  { value: 100, prefix: "$", suffix: "M", label: "Projected Value",     delay: 0.65 },
  { value: 20,  prefix: "$", suffix: "M", label: "Capital Expansion",   delay: 0.75 },
];

/* ─── Stat Strip Card ─────────────────────────────────────────── */

const StatCard = ({
  value,
  prefix,
  suffix,
  label,
  delay,
  isLast,
}: {
  value: number;
  prefix?: string;
  suffix?: string;
  label: string;
  delay: number;
  isLast: boolean;
}) => (
  <motion.div
    {...fadeUp(delay)}
    whileHover={{ scale: 1.04, transition: { duration: 0.18 } }}
    className={`
      flex flex-col items-center justify-center text-center
      px-4 py-5 relative group cursor-default
      ${!isLast ? "border-r border-white/20" : ""}
    `}
  >
    {/* Hover shimmer */}
    <span className="absolute inset-0 rounded-xl bg-white/0 group-hover:bg-white/5 transition-colors duration-300 pointer-events-none" />

    <p className="relative text-3xl md:text-4xl lg:text-[2.6rem] font-alberta font-medium text-white leading-none tracking-tight mb-1.5">
      <CountUpNumber prefix={prefix} end={value} suffix={suffix} />
    </p>
    <h3 className="relative text-[0.65rem] md:text-[0.7rem] font-albert font-bold text-white/65 tracking-[0.18em] uppercase">
      {label}
    </h3>
  </motion.div>
);

/* ─── Section ─────────────────────────────────────────────────── */

export const ProofOfConceptSection = () => {
  return (
    <section className="relative w-full py-16 lg:py-28 overflow-hidden">
      <div className="max-w-[1440px] mx-auto px-6 md:px-12 lg:px-16">
        <div className="grid grid-cols-1 lg:grid-cols-[1fr_1.1fr] gap-10 lg:gap-16 items-stretch">

          {/* ── Left: Text Block ───────────────────────────────── */}
          <div className="flex flex-col justify-center py-4 lg:py-10">

            <motion.div {...fadeLeft(0)}>
              <span className="block text-[0.65rem] md:text-xs font-albert font-bold tracking-[0.22em] text-[#1C1B1A]/50 uppercase mb-3">
                Proof of Concept
              </span>
              <div className="h-px w-[160px] bg-[linear-gradient(to_right,#6BCEFF,#0c007a,#AA3DAD,#FF6136,#FFE366)] rounded-full mb-5" />
            </motion.div>

            <motion.h2
              {...fadeLeft(0.08)}
              className="text-[2rem] sm:text-[2.6rem] md:text-5xl lg:text-[3.2rem] font-bodoni font-bold leading-[1.12] text-sandstone-500 tracking-wide mb-3"
            >
              <span className="font-albert">$5M</span> Flagship<br />
              Investment.
            </motion.h2>

            <motion.h2
              {...fadeLeft(0.14)}
              className="text-[2rem] sm:text-[2.6rem] md:text-5xl lg:text-[3.2rem] font-bodoni font-bold leading-[1.12] text-sandstone-500/70 tracking-wide mb-8"
            >
              <span className="font-albert">$100M</span> Projected<br />
              Value.
            </motion.h2>

            <motion.p
              {...fadeLeft(0.22)}
              className="text-base md:text-lg font-albert text-sandstone-500/70 font-normal leading-relaxed mb-10 max-w-[480px]"
            >
              Our first community demonstrates the full model — from
              AI-driven site selection through integrated services and
              compounding returns.
            </motion.p>

            {/* Key metrics summary strip */}
            <motion.div
              {...fadeLeft(0.3)}
              className="grid grid-cols-3 gap-0 mb-10 border border-[#1C1B1A]/10 rounded-2xl overflow-hidden divide-x divide-[#1C1B1A]/10 bg-[#1C1B1A]/[0.03]"
            >
              {[
                { num: "20×", desc: "Return Potential" },
                { num: "8",   desc: "Service Categories" },
                { num: "Q4",  desc: "2025 Launch" },
              ].map((item) => (
                <div key={item.desc} className="flex flex-col items-center justify-center py-5 px-3 text-center">
                  <span className="text-xl md:text-2xl font-alberta font-semibold text-sandstone-500 mb-0.5">{item.num}</span>
                  <span className="text-[0.6rem] md:text-[0.65rem] font-albert font-bold tracking-[0.16em] uppercase text-sandstone-500/50">{item.desc}</span>
                </div>
              ))}
            </motion.div>

            <motion.div {...fadeLeft(0.38)} className="flex flex-col sm:flex-row items-start gap-4">
              <a
                href="#"
                className="rounded-full text-center inline-block transition-all duration-200 bg-[#1C1B1A] text-white hover:bg-black py-3.5 px-9 whitespace-nowrap shadow-xl hover:shadow-2xl hover:-translate-y-1 text-sm md:text-base font-albert font-medium"
              >
                View Investment Details
              </a>
              <a
                href="#"
                className="rounded-full text-center inline-block transition-all duration-200 border border-[#1C1B1A]/20 text-[#1C1B1A] hover:border-[#1C1B1A]/50 bg-transparent py-3.5 px-9 whitespace-nowrap hover:-translate-y-1 text-sm md:text-base font-albert font-medium"
              >
                Download Deck
              </a>
            </motion.div>
          </div>

          {/* ── Right: Image Panel with embedded stat cards ────── */}
          <motion.div
            {...fadeRight(0.12)}
            className="relative w-full rounded-[2rem] overflow-hidden min-h-[480px] lg:min-h-0 shadow-2xl"
          >
            {/* Photo */}
            <img
              alt="Humanly flagship community — lush green park surrounded by modern homes"
              loading="lazy"
              decoding="async"
              className="absolute inset-0 w-full h-full object-cover transition-transform duration-[1400ms] hover:scale-105"
              src="/images/AdobeStock_1011273017.jpeg"
            />

            {/* Gradient vignette — strong at bottom for readability */}
            <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent pointer-events-none" />

            {/* Top-right badge */}
            <motion.div
              {...fadeUp(0.45)}
              className="absolute top-5 right-5 px-4 py-2 rounded-full bg-white/15 backdrop-blur-md border border-white/25 shadow-lg"
            >
              <span className="text-[0.6rem] font-albert font-bold tracking-[0.18em] uppercase text-white">
                Live Deal
              </span>
            </motion.div>

            {/* Glassmorphism stat strip pinned to bottom */}
            <div className="absolute bottom-0 inset-x-0 z-10">
              {/* Frosted glass bar */}
              <div className="m-4 rounded-2xl overflow-hidden border border-white/20 shadow-[0_8px_40px_rgba(0,0,0,0.35)]">
                <div className="absolute inset-0 backdrop-blur-2xl bg-black/30 rounded-2xl" />
                <div className="relative z-10 grid grid-cols-3 divide-x divide-white/15">
                  {stats.map((s, i) => (
                    <StatCard key={s.label} {...s} isLast={i === stats.length - 1} />
                  ))}
                </div>
              </div>
            </div>
          </motion.div>

        </div>
      </div>
    </section>
  );
};
