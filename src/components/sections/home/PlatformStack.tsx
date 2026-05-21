"use client";
import React, { useRef } from 'react';
import { motion, useScroll, useTransform, MotionValue } from 'framer-motion';
import { ArrowUpRight } from 'lucide-react';
import Image from 'next/image';

/* ─────────────────────────────────────────────
   Data
───────────────────────────────────────────── */
const steps = [
  {
    num: '01',
    title: 'Land',
    desc: 'AI-driven site selection, market intelligence, and entitlement.',
    bgColor: '#BFCCD8',
    bullets: [
      'Audit & benchmark',
      'AI site selection',
      'Market intelligence',
      'Zoning entitlement',
      'Predictive valuation',
      'Acquisition strategy',
    ],
    image: '/images/AdobeStock_117288790.jpeg'
  },
  {
    num: '02',
    title: 'Build',
    desc: 'Design kit, rapid 3D modelling, and streamlined construction.',
    bgColor: '#B692A1',
    bullets: [
      'Modular design kit',
      'Rapid 3D modeling',
      'Prefabricated assembly',
      'Supply optimization',
      'Site orchestration',
      'Sustainable building',
    ],
    image: '/images/AdobeStock_383551453.jpeg'
  },
  {
    num: '03',
    title: 'Operate',
    desc: 'HumanlyOS® powers every community service and transaction.',
    bgColor: '#798E7B',
    bullets: [
      'Embedded finance core',
      'Automated service flow',
      'Intelligent dispatch',
      'Resident engagement',
      'Ops orchestration',
      'Smart maintenance',
    ],
    image: '/images/AdobeStock_383434417.jpeg'
  },
  {
    num: '04',
    title: 'Compound',
    desc: 'Data flywheel drives continuous improvement across all communities.',
    bgColor: '#E49366',
    bullets: [
      'Feedback cycle loops',
      'Community asset yield',
      'Predictive maintenance',
      'Compound returns',
      'Tenant longevity',
      'Flywheel performance',
    ],
    image: '/images/pexels-rdne-6647050.jpg'
  },
];

/* ─────────────────────────────────────────────
   Individual Card — hooks are safe here
───────────────────────────────────────────── */
interface CardProps {
  step: (typeof steps)[0];
  idx: number;
  scrollYProgress: MotionValue<number>;
}

function PlatformCard({ step, idx, scrollYProgress }: CardProps) {
  const N = steps.length;

  /**
   * Scroll segments (N-1 transitions for N cards):
   *   Card 0 → base (always visible)
   *   Card 1 → slides in during scroll [0,      1/(N-1)]
   *   Card 2 → slides in during scroll [1/(N-1), 2/(N-1)]
   *   Card 3 → slides in during scroll [2/(N-1), 3/(N-1)]
   *
   * useTransform clamps by default, so once a card reaches 0% it stays there.
   */
  const segStart = idx === 0 ? 0 : (idx - 1) / (N - 1);
  const segEnd = idx === 0 ? 0 : idx / (N - 1);

  const translateX = useTransform(
    scrollYProgress,
    idx === 0 ? [0, 1] : [segStart, segEnd],
    idx === 0 ? ['0%', '0%'] : ['100%', '0%']
  );

  /* Content slides up as the card enters */
  const contentY = useTransform(
    scrollYProgress,
    idx === 0 ? [0, 0.001] : [segStart, segEnd],
    idx === 0 ? ['0px', '0px'] : ['100px', '0px']
  );

  const contentOpacity = useTransform(
    scrollYProgress,
    idx === 0 ? [0, 0.001] : [segStart, segEnd],
    idx === 0 ? [1, 1] : [0, 1]
  );

  /* Akaru-style Image Reveal Effects */
  const imageContainerX = useTransform(
    scrollYProgress,
    idx === 0 ? [0, 1] : [segStart, segEnd],
    idx === 0 ? ['0%', '0%'] : ['-150%', '0%']
  );
  
  const imageContainerScale = useTransform(
    scrollYProgress,
    idx === 0 ? [0, 1] : [segStart, segEnd],
    idx === 0 ? [1, 1] : [0.8, 1]
  );

  const imageInnerScale = useTransform(
    scrollYProgress,
    idx === 0 ? [0, 1] : [segStart, segEnd],
    idx === 0 ? [1, 1] : [1.2, 1]
  );

  return (
    <motion.div
      className="absolute inset-0"
      style={{ x: translateX, backgroundColor: step.bgColor, zIndex: idx + 1 }}
    >
      <div className="w-full h-full flex flex-col justify-between px-10 lg:px-20 py-12 lg:py-16">

        {/* ── Top bar ── */}
        <div className="flex items-center justify-between">
          <span className="text-[10px] font-mono font-bold tracking-[0.35em] text-slate-900/40 uppercase select-none">
            {step.num}
          </span>

          {/* Progress pips */}
          <div className="flex items-center gap-2">
            {steps.map((_, i) => (
              <div
                key={i}
                className="rounded-full transition-all duration-500"
                style={{
                  width: i === idx ? '24px' : '6px',
                  height: '4px',
                  backgroundColor:
                    i < idx
                      ? 'rgba(15,23,42,0.5)'
                      : i === idx
                        ? 'rgba(15,23,42,0.85)'
                        : 'rgba(15,23,42,0.15)',
                }}
              />
            ))}
          </div>
        </div>

        {/* ── Main content ── */}
        <div className="flex-1 flex flex-col lg:flex-row items-center gap-8 lg:gap-16 my-8">
          <motion.div
            className="flex flex-col gap-6 max-w-2xl lg:w-[45%] justify-center h-full"
            style={{ y: contentY, opacity: contentOpacity }}
          >
            {/* Giant display title */}
            <h3
              className="font-display font-extrabold text-slate-900 leading-[0.88] tracking-tight uppercase break-words"
              style={{ fontSize: 'clamp(2.5rem, 6vw, 5.5rem)' }}
            >
              {step.title}
            </h3>

            {/* Description */}
            <p className="text-base md:text-lg text-slate-800/75 max-w-md leading-relaxed font-medium">
              {step.desc}
            </p>

            {/* Bullet grid */}
            <div className="grid grid-cols-2 md:grid-cols-2 gap-x-10 gap-y-3 border-t border-slate-900/10 pt-6 max-w-md">
              {step.bullets.map((bullet, bIdx) => (
                <div
                  key={bIdx}
                  className="text-[10.5px] font-mono font-bold tracking-wider text-slate-900 flex items-center gap-2"
                >
                  <span className="text-slate-900/30 text-sm font-light leading-none">/</span>
                  {bullet.toUpperCase()}
                </div>
              ))}
            </div>

            {/* Akaru-style CTA button */}
            <div className="mt-8 flex items-center gap-4 group cursor-pointer w-fit">
              <div className="border border-slate-900/20 rounded-full px-6 py-3 text-[10.5px] font-mono font-bold tracking-widest uppercase text-slate-900 transition-colors duration-300 group-hover:border-slate-900">
                See the stage
              </div>
              <div className="relative w-12 h-12 rounded-full border border-slate-900/20 flex items-center justify-center overflow-hidden transition-colors duration-300 group-hover:border-slate-900">
                <div className="absolute inset-0 flex items-center justify-center">
                   <div className="w-2 h-2 rounded-full bg-slate-900 transition-transform duration-500 ease-out group-hover:scale-[15]" />
                </div>
                <div className="relative z-10 flex items-center justify-center w-full h-full overflow-hidden">
                  <ArrowUpRight className="w-5 h-5 text-slate-900 transition-all duration-500 ease-out group-hover:text-white group-hover:translate-x-1 group-hover:-translate-y-1" />
                </div>
              </div>
            </div>
          </motion.div>

          {/* Image */}
          <motion.div
            className="hidden lg:block lg:w-[45%] h-[40vh] lg:h-[65vh] w-full"
            style={{ 
              y: contentY, 
              opacity: contentOpacity,
              x: imageContainerX,
              scale: imageContainerScale,
              transformOrigin: "100% 100%"
            }}
          >
            <motion.div 
              className="w-full h-full rounded-3xl overflow-hidden shadow-[0_20px_50px_rgba(0,0,0,0.15)] relative"
              style={{
                scale: imageInnerScale,
                transformOrigin: "50% 50%"
              }}
            >
              <Image src={step.image} alt={step.title} fill className="object-cover" sizes="(max-width: 360px) 30vw, 55vw" />
            </motion.div>
          </motion.div>
        </div>

        {/* ── Bottom bar ── */}
        <div className="flex items-center gap-5 select-none mt-auto">
          <span className="text-[10px] font-mono font-bold tracking-[0.3em] text-slate-900/35 uppercase">
            {step.title}
          </span>
          <div className="flex-1 h-px bg-slate-900/10" />
          <span className="text-[9px] font-mono text-slate-900/25 uppercase tracking-widest">
            {idx < steps.length - 1 ? 'Scroll ↓' : 'End of platform'}
          </span>
        </div>

      </div>
    </motion.div>
  );
}

/* ─────────────────────────────────────────────
   Section wrapper
───────────────────────────────────────────── */
export const PlatformStack = () => {
  const containerRef = useRef<HTMLDivElement>(null);

  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ['start start', 'end end'],
  });

  return (
    <>
      {/* ── Static header (scrolls away naturally) ── */}
      <section className="py-24 bg-[#f4f1ea] text-center relative z-10">
        <div className="flex flex-col items-center gap-2 mb-6">
          <p className="text-[11px] font-bold tracking-[0.2em] uppercase text-slate-800/55">
            THE PLATFORM
          </p>
          <div className="h-[2px] w-10 bg-slate-800/35 rounded-full" />
        </div>
        <h2 className="text-4xl md:text-5xl lg:text-6xl font-display font-bold text-slate-900 leading-[1.1] tracking-tight">
          One company. One system.<br />Full vertical integration.
        </h2>
        <p className="mt-8 text-xs font-mono text-slate-900/35 uppercase tracking-[0.25em] animate-pulse">
          ↓ &nbsp; Scroll to explore each stage
        </p>
      </section>

      {/* ── Scroll-driven sticky card stack ── */}
      {/*
          Height = steps.length × 100vh
          ↳  gives 1 full viewport of scroll per stage transition
      */}
      <div
        ref={containerRef}
        style={{ height: `${steps.length * 100}vh` }}
        className="relative"
      >
        <div className="sticky top-0 h-screen overflow-hidden">
          {steps.map((step, idx) => (
            <PlatformCard
              key={idx}
              step={step}
              idx={idx}
              scrollYProgress={scrollYProgress}
            />
          ))}
        </div>
      </div>
    </>
  );
};
