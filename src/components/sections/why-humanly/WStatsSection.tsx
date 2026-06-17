"use client";
import React, { useState, useEffect, useRef, useCallback } from "react";

const slides = [
  {
    title: "Housing Shortage",
    count: "7M",
    sub: "+ units",
    description:
      "Unit housing shortage nationwide — workforce families earning 80–120% AMI are systematically excluded from quality options.",
    image: "/images/pexels-ninobur-19443316.jpg",
    color: "#6E7C8D",
  },
  {
    title: "Market Opportunity",
    count: "$1T",
    sub: "+ gap",
    description:
      "Market opportunity gap left untapped by fragmented, siloed development that fails to serve the workforce segment.",
    image: "/images/pexels-brettjordan-35011601.jpg",
    color: "#A3B2C3",
  },
  {
    title: "Cost Burden",
    count: "40",
    sub: "% burdened",
    description:
      "Workforce families cost-burdened — spending more than 30% of income on housing, leaving little for savings or stability.",
    image: "/images/pexels-khwanchai-4174740.jpg",
    color: "#6E7C8D",
  },
];

const INTERVAL_MS = 3500;
const OUT_DURATION = 380;
const IN_DURATION = 560;

export const WStatsSection = () => {
  // ── Desktop state (hover) ──────────────────────────────────────────────
  const [active, setActive] = useState(2);

  // ── Mobile state ───────────────────────────────────────────────────────
  const [mobileIndex, setMobileIndex] = useState(0);
  // "idle" | "out" | "in"
  const [phase, setPhase] = useState<"idle" | "out" | "in">("idle");

  // Refs so the interval callback never goes stale
  const mobileIndexRef = useRef(0);
  const phaseRef = useRef<"idle" | "out" | "in">("idle");
  const t1 = useRef<ReturnType<typeof setTimeout> | null>(null);
  const t2 = useRef<ReturnType<typeof setTimeout> | null>(null);

  const goTo = useCallback((nextIndex: number) => {
    if (phaseRef.current !== "idle") return;   // already animating

    // 1. Slide current content OUT
    phaseRef.current = "out";
    setPhase("out");

    t1.current = setTimeout(() => {
      // 2. Swap the slide (invisible while "out" opacity=0)
      mobileIndexRef.current = nextIndex;
      setMobileIndex(nextIndex);

      // 3. Slide new content IN
      phaseRef.current = "in";
      setPhase("in");

      t2.current = setTimeout(() => {
        phaseRef.current = "idle";
        setPhase("idle");
      }, IN_DURATION);
    }, OUT_DURATION);
  }, []);

  // Auto-rotation
  useEffect(() => {
    const id = setInterval(() => {
      const next = (mobileIndexRef.current + 1) % slides.length;
      goTo(next);
    }, INTERVAL_MS);

    return () => {
      clearInterval(id);
      if (t1.current) clearTimeout(t1.current);
      if (t2.current) clearTimeout(t2.current);
    };
  }, [goTo]);

  const handleDotClick = (idx: number) => {
    if (idx === mobileIndexRef.current) return;
    goTo(idx);
  };

  // Derive animation style from phase
  const mobileAnimStyle: React.CSSProperties =
    phase === "out"
      ? { animation: `wstats-out ${OUT_DURATION}ms cubic-bezier(0.4,0,1,1) forwards` }
      : phase === "in"
      ? { animation: `wstats-in ${IN_DURATION}ms cubic-bezier(0.0,0,0.2,1) forwards` }
      : {};

  const slide = slides[mobileIndex];

  return (
    <section className="py-20 overflow-hidden">

      {/* ── MOBILE / TABLET  (< lg) ─────────────────────────────────────── */}
      <div className="lg:hidden w-full max-w-[1440px] mx-auto px-8 md:px-16">
        <div className="relative overflow-hidden" style={mobileAnimStyle}>
          {/* Top border accent */}
          <div className="w-full h-[1px] bg-[rgba(17,17,17,0.08)] mb-5" />

          {/* Title + Stat */}
          <p className="text-2xl font-serif text-[#5F646B] mb-4">{slide.title}</p>
          <p className="text-[clamp(72px,18vw,99px)] font-serif font-normal m-0 leading-none text-[#111111]">
            {slide.count}
            <sub className="text-base font-normal align-baseline ml-1 text-[#5F646B]">
              {slide.sub}
            </sub>
          </p>

          <div className="w-10 h-[1px] bg-[rgba(17,17,17,0.08)] my-5" />

          <p className="text-lg text-[#5F646B] mb-6">{slide.description}</p>

          {/* Image */}
          <div className="w-full h-[260px] sm:h-[320px] overflow-hidden rounded-xl">
            <img
              src={slide.image}
              alt={slide.title}
              className="w-full h-full object-cover"
            />
          </div>
        </div>

        {/* Dot indicators + progress bar */}
        <div className="flex items-center justify-center gap-2 mt-6">
          {slides.map((_, idx) => (
            <button
              key={idx}
              onClick={() => handleDotClick(idx)}
              aria-label={`Go to slide ${idx + 1}`}
              style={{
                height: "8px",
                width: idx === mobileIndex ? "24px" : "8px",
                borderRadius: "9999px",
                background: idx === mobileIndex ? "#111111" : "rgba(17,17,17,0.2)",
                border: "none",
                cursor: "pointer",
                transition: "width 300ms ease, background 300ms ease",
                padding: 0,
              }}
            />
          ))}
        </div>
      </div>

      {/* ── DESKTOP  (lg+) – original hover behaviour, untouched ─────────── */}
      <div className="hidden lg:flex gap-5 w-full max-w-[1440px] mx-auto px-10">
        {slides.map((s, i) => (
          <div
            key={i}
            className={`flex-none border-l border-[rgba(17,17,17,0.08)] pl-5 transition-[flex] duration-450 ease-in-out cursor-pointer overflow-hidden shrink basis-0 min-w-0 ${
              i === active ? "grow-[41] active" : "grow-[20]"
            }`}
            onMouseEnter={() => setActive(i)}
          >
            {/* Image always below text on all desktop sizes */}
            <div className="flex flex-col h-auto w-full">
              {/* Text column */}
              <div className="flex-none w-full flex flex-col pr-0">
                <p className="text-2xl font-serif text-[#5F646B] mb-5">{s.title}</p>
                <p className="text-[clamp(64px,6vw,99px)] font-serif font-normal m-0 leading-none text-[#111111]">
                  {s.count}
                  <sub className="text-base font-normal align-baseline ml-1 text-[#5F646B]">
                    {s.sub}
                  </sub>
                </p>
                <div className="w-10 h-[1px] bg-[rgba(17,17,17,0.08)] my-5" />
                <p
                  className={`text-lg text-[#5F646B] pb-4 transition-opacity duration-300 ${
                    i === active ? "opacity-100" : "opacity-0"
                  }`}
                >
                  {s.description}
                </p>
              </div>
              {/* Image — always below text */}
              <div
                className={`flex-none w-full h-[200px] mt-4 transition-opacity duration-300 overflow-hidden rounded-xl ${
                  i === active ? "opacity-100" : "opacity-0"
                }`}
              >
                <img src={s.image} alt={s.title} className="w-full h-full object-cover" />
              </div>
            </div>
          </div>
        ))}
      </div>

      {/* Keyframe definitions */}
      <style>{`
        @keyframes wstats-out {
          0%   { opacity: 1; transform: translateY(0px);   filter: blur(0px); }
          100% { opacity: 0; transform: translateY(-16px); filter: blur(3px); }
        }
        @keyframes wstats-in {
          0%   { opacity: 0; transform: translateY(16px);  filter: blur(3px); }
          60%  { opacity: 1; filter: blur(0px); }
          100% { opacity: 1; transform: translateY(0px);   filter: blur(0px); }
        }
      `}</style>
    </section>
  );
};
