"use client";
import React from 'react';
import { motion } from 'framer-motion';

const metrics = [
  {
    num: "200",
    prefix: "$",
    suffix: "M",
    label: "Series A Target",
    sub: "Workforce Housing Platform development & site acquisition",
    color: "#2d7dd2",
  },
  {
    num: "4",
    prefix: "",
    suffix: "",
    label: "Communities Planned",
    sub: "Texas Flagship community plus 3 priority pipeline sites by 2028",
    color: "#f09050",
  },
  {
    num: "50",
    prefix: "",
    suffix: "States",
    label: "Scale by 2032",
    sub: "One Humanly® community in every state for national coverage",
    color: "#3daf98",
  }
];

// Tech-style highly readable card
const TechCard = ({
  metric,
  index,
}: {
  metric: (typeof metrics)[0];
  index: number;
}) => {
  return (
    <motion.div
      initial={{ opacity: 0, scaleY: 0.01, filter: "brightness(2) hue-rotate(90deg)" }}
      whileInView={{ 
        opacity: [0, 1, 0, 1],
        scaleY: [0.01, 1, 1],
        filter: ["brightness(2) hue-rotate(90deg)", "brightness(1) hue-rotate(0deg)"]
      }}
      viewport={{ once: true, margin: "-60px" }}
      transition={{ 
        duration: 0.6, 
        delay: index * 0.15, 
        times: [0, 0.2, 0.4, 1],
        ease: "anticipate"
      }}
      className="group relative bg-[#111316] border border-white/5 hover:border-white/20 hover:shadow-[0_0_30px_rgba(255,255,255,0.03)] transition-all duration-500 p-8 md:p-10 flex flex-col justify-between overflow-hidden cursor-default"
    >
      {/* Tech Corner Accents - Expands on hover */}
      <div className="absolute top-0 left-0 w-3 h-3 border-t-2 border-l-2 border-white/20 group-hover:border-white/80 group-hover:w-8 group-hover:h-8 transition-all duration-300 ease-out" />
      <div className="absolute top-0 right-0 w-3 h-3 border-t-2 border-r-2 border-white/20 group-hover:border-white/80 group-hover:w-8 group-hover:h-8 transition-all duration-300 ease-out" />
      <div className="absolute bottom-0 left-0 w-3 h-3 border-b-2 border-l-2 border-white/20 group-hover:border-white/80 group-hover:w-8 group-hover:h-8 transition-all duration-300 ease-out" />
      <div className="absolute bottom-0 right-0 w-3 h-3 border-b-2 border-r-2 border-white/20 group-hover:border-white/80 group-hover:w-8 group-hover:h-8 transition-all duration-300 ease-out" />

      {/* Grid Background Effect */}
      <div className="absolute inset-0 opacity-[0.02] group-hover:opacity-[0.08] transition-opacity duration-500" 
           style={{ backgroundImage: 'radial-gradient(circle at 1px 1px, white 1px, transparent 0)', backgroundSize: '16px 16px' }} />

      {/* Vertical Scanline on Hover */}
      <div 
        className="absolute left-0 right-0 h-32 -top-32 group-hover:top-[120%] transition-all duration-[1.5s] ease-in-out pointer-events-none opacity-0 group-hover:opacity-100 z-0 mix-blend-screen"
        style={{
          background: `linear-gradient(to bottom, transparent, ${metric.color}33, transparent)`
        }}
      />

      <div className="relative z-10">
        {/* Status Indicator */}
        <div className="flex items-center justify-between mb-8">
          <div className="flex items-center gap-2">
            <span className="w-2 h-2 group-hover:animate-pulse" style={{ backgroundColor: metric.color, boxShadow: `0 0 10px ${metric.color}` }} />
            <span className="text-[0.65rem] font-mono tracking-widest uppercase text-white/50 group-hover:text-white/90 transition-colors">
              SYS.METRIC.0{index + 1}
            </span>
          </div>
          <span className="text-[0.65rem] font-mono text-white/20 group-hover:text-[#3daf98] transition-colors tracking-widest relative overflow-hidden">
            <span className="inline-block group-hover:-translate-y-full transition-transform duration-300">[DATA_OK]</span>
            <span className="absolute top-0 left-0 w-full h-full inline-block translate-y-full group-hover:translate-y-0 transition-transform duration-300">[VERIFIED]</span>
          </span>
        </div>

        {/* Number Display */}
        <div className="flex items-baseline text-white select-none mb-6 font-mono group-hover:translate-x-2 transition-transform duration-500 ease-out">
          {metric.prefix && (
            <span className="text-white/40 font-light text-2xl lg:text-3xl mr-2 group-hover:text-white/70 transition-colors">
              {metric.prefix}
            </span>
          )}
          <span 
            className="font-bold text-5xl lg:text-6xl tracking-tighter transition-all duration-500" 
            style={{ 
              color: metric.color, 
              textShadow: '0 0 0px transparent' 
            }}
            // Framer Motion inline styles aren't needed here, pure CSS transitions work well.
            // We use inline style to override on hover via a hack, but tailwind is better.
          >
            {/* Adding a nested span to handle the glow using style block because we need dynamic color */}
            <span 
              className="inline-block transition-all duration-500"
              style={{ textShadow: `0 0 0px ${metric.color}` }}
              ref={(el) => {
                if (el) {
                  // Little hack to apply dynamic hover text-shadow
                  el.parentElement?.addEventListener('mouseenter', () => {
                    el.style.textShadow = `0 0 25px ${metric.color}`;
                    el.style.transform = 'scale(1.05)';
                  });
                  el.parentElement?.addEventListener('mouseleave', () => {
                    el.style.textShadow = `0 0 0px ${metric.color}`;
                    el.style.transform = 'scale(1)';
                  });
                }
              }}
            >
              {metric.num}
            </span>
          </span>
          {metric.suffix && (
            <span className="text-white/40 font-light text-xl lg:text-2xl ml-2 group-hover:text-white/70 transition-colors">
              {metric.suffix}
            </span>
          )}
        </div>

        {/* Scanning Divider */}
        <div className="h-px w-full bg-white/10 my-6 relative overflow-hidden group-hover:bg-white/20 transition-colors duration-500">
          <div className="absolute top-0 left-0 h-full w-1/3 bg-gradient-to-r from-transparent via-white/80 to-transparent -translate-x-full group-hover:translate-x-[300%] transition-transform duration-[1.5s] ease-in-out" />
        </div>

        {/* Label */}
        <h3 className="text-[0.9rem] font-mono tracking-widest uppercase text-white mb-3 group-hover:text-[#3daf98] transition-colors duration-300">
          <span className="opacity-50 mr-1">&gt;</span> {metric.label}
        </h3>

        {/* Description */}
        <p className="text-[0.8rem] text-white/50 font-mono leading-relaxed lowercase group-hover:text-white/70 transition-colors duration-300">
          <span className="text-[#3daf98] opacity-0 group-hover:opacity-100 transition-opacity duration-300 mr-1 animate-pulse">_</span>
          {metric.sub}
        </p>
      </div>
      
      {/* Subtle Glow on Hover */}
      <div 
        className="absolute inset-0 opacity-0 group-hover:opacity-[0.12] transition-opacity duration-500 pointer-events-none mix-blend-screen z-0"
        style={{ background: `radial-gradient(circle at center, ${metric.color}, transparent 80%)` }}
      />
    </motion.div>
  );
};

export const MetricsCards = () => {
  return (
    <section className="relative py-20 md:py-28 bg-[#0f0f0f] overflow-hidden font-sans">
      {/* Film Grain Noise Overlay — matveyan.com */}
      <div
        className="absolute inset-0 pointer-events-none z-[1] opacity-[0.04] mix-blend-overlay"
        style={{
          backgroundImage: `url("data:image/svg+xml,%3Csvg viewBox='0 0 200 200' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='n'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.85' numOctaves='4' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23n)'/%3E%3C/svg%3E")`,
          backgroundRepeat: 'repeat',
          backgroundSize: '128px',
        }}
      />
      {/* Edge Blur — matveyan.com */}
      <div className="absolute inset-x-0 top-0 h-16 bg-gradient-to-b from-[#0f0f0f] to-transparent pointer-events-none z-[2]" />
      <div className="absolute inset-x-0 bottom-0 h-16 bg-gradient-to-t from-[#0f0f0f] to-transparent pointer-events-none z-[2]" />
      
      {/* Corner crosshair marks — matveyan.com */}
      <svg width="5" height="5" viewBox="0 0 5 5" fill="none" className="absolute top-3 left-3 z-20 pointer-events-none text-white/30"><path d="M3 2H5V3H3V5H2V3H0V2H2V0H3V2Z" fill="currentColor" /></svg>
      <svg width="5" height="5" viewBox="0 0 5 5" fill="none" className="absolute top-3 right-3 z-20 pointer-events-none text-white/30"><path d="M3 2H5V3H3V5H2V3H0V2H2V0H3V2Z" fill="currentColor" /></svg>
      <svg width="5" height="5" viewBox="0 0 5 5" fill="none" className="absolute bottom-3 left-3 z-20 pointer-events-none text-white/30"><path d="M3 2H5V3H3V5H2V3H0V2H2V0H3V2Z" fill="currentColor" /></svg>
      <svg width="5" height="5" viewBox="0 0 5 5" fill="none" className="absolute bottom-3 right-3 z-20 pointer-events-none text-white/30"><path d="M3 2H5V3H3V5H2V3H0V2H2V0H3V2Z" fill="currentColor" /></svg>

      {/* Humanly-Inspired Tech Shapes (Background Left) */}
      <div className="absolute top-1/2 -left-48 lg:-left-32 -translate-y-1/2 w-[500px] h-[500px] pointer-events-none opacity-[0.25] z-[1]">
        <motion.svg 
          initial={{ rotate: -45, scale: 0.8, opacity: 0 }}
          whileInView={{ rotate: 0, scale: 1, opacity: 1 }}
          transition={{ duration: 1.5, ease: "easeOut" }}
          viewBox="0 0 400 400" 
          className="w-full h-full"
        >
          {/* Organic/Tech Rings */}
          <circle cx="200" cy="200" r="180" fill="none" stroke="#3daf98" strokeWidth="1" strokeDasharray="4 12" />
          <circle cx="200" cy="200" r="140" fill="none" stroke="#2d7dd2" strokeWidth="1.5" strokeDasharray="40 80" strokeLinecap="round" />
          
          {/* Geometric Data Lines */}
          <line x1="200" y1="0" x2="200" y2="400" stroke="url(#techGradLeft)" strokeWidth="1" />
          <line x1="0" y1="200" x2="400" y2="200" stroke="url(#techGradLeft)" strokeWidth="1" />

          {/* Glowing Node */}
          <circle cx="340" cy="200" r="4" fill="#3daf98" className="animate-pulse" />
          
          {/* Humanly Organic Glow Component */}
          <circle cx="200" cy="200" r="100" fill="url(#techGlowCenter)" />

          <defs>
            <linearGradient id="techGradLeft" x1="0" y1="0" x2="1" y2="1">
              <stop offset="0%" stopColor="#3daf98" stopOpacity="0.8" />
              <stop offset="100%" stopColor="transparent" stopOpacity="0" />
            </linearGradient>
            <radialGradient id="techGlowCenter" cx="50%" cy="50%" r="50%">
              <stop offset="0%" stopColor="#2d7dd2" stopOpacity="0.15" />
              <stop offset="100%" stopColor="transparent" stopOpacity="0" />
            </radialGradient>
          </defs>
        </motion.svg>
      </div>

      {/* Humanly-Inspired Tech Shapes (Background Right) */}
      <div className="absolute top-1/4 -right-32 lg:-right-16 w-[350px] h-[550px] pointer-events-none opacity-[0.25] z-[1]">
        <motion.svg 
          initial={{ x: 50, opacity: 0 }}
          whileInView={{ x: 0, opacity: 1 }}
          transition={{ duration: 1.2, delay: 0.2, ease: "easeOut" }}
          viewBox="0 0 200 400" 
          className="w-full h-full"
        >
          {/* Tech/Data Track */}
          <path d="M 150 0 L 150 400" stroke="#f09050" strokeWidth="1" strokeDasharray="2 6" />
          
          {/* Organic Curvature (The Humanly touch) */}
          <path d="M 100 50 C 100 150, 50 150, 50 250 L 50 400" fill="none" stroke="#f09050" strokeWidth="1.5" strokeDasharray="8 16" strokeLinecap="round" />
          
          {/* Data Nodes */}
          <rect x="148" y="100" width="5" height="5" fill="#f09050" className="animate-pulse" />
          <rect x="148" y="280" width="5" height="5" fill="#f09050" />
          <circle cx="50" cy="250" r="4" fill="none" stroke="#f09050" strokeWidth="2" />
          <circle cx="100" cy="50" r="3" fill="#f09050" />

          {/* Organic Warm Glow */}
          <ellipse cx="120" cy="200" rx="80" ry="160" fill="url(#techGlowRight)" />

          <defs>
            <radialGradient id="techGlowRight" cx="50%" cy="50%" r="50%">
              <stop offset="0%" stopColor="#f09050" stopOpacity="0.15" />
              <stop offset="100%" stopColor="transparent" stopOpacity="0" />
            </radialGradient>
          </defs>
        </motion.svg>
      </div>

      <div className="container relative z-10 mx-auto px-6 max-w-[1100px]">
        {/* Tech Section label */}
        <motion.div
          initial={{ opacity: 0, scaleX: 0, filter: "blur(4px)" }}
          whileInView={{ opacity: 1, scaleX: 1, filter: "blur(0px)" }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, ease: "easeOut" }}
          className="flex items-center justify-center gap-4 mb-16 origin-center"
        >
          <div className="h-[1px] w-12 bg-gradient-to-r from-transparent to-[#3daf98]/50" />
          <span className="text-[0.7rem] font-mono tracking-[0.25em] uppercase text-[#3daf98]">
            [ SYSTEM.METRICS :: INVESTMENT ]
          </span>
          <div className="h-[1px] w-12 bg-gradient-to-l from-transparent to-[#3daf98]/50" />
        </motion.div>

        {/* Minimal grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {metrics.map((metric, index) => (
            <TechCard key={index} metric={metric} index={index} />
          ))}
        </div>

        {/* Tech Bottom indicator */}
        <motion.div
          initial={{ opacity: 0, y: 10, filter: "invert(100%)" }}
          whileInView={{ opacity: [0, 1, 0, 1], y: 0, filter: "invert(0%)" }}
          viewport={{ once: true }}
          transition={{ duration: 0.4, delay: 0.6, times: [0, 0.3, 0.6, 1] }}
          className="flex justify-center mt-16"
        >
          <div className="inline-flex items-center gap-3 px-5 py-2 border border-[#3daf98]/30 bg-[#3daf98]/[0.02] text-[0.65rem] font-mono text-[#3daf98] uppercase tracking-widest relative overflow-hidden group">
            <span className="absolute top-0 left-0 w-full h-[1px] bg-[#3daf98]/50 scale-x-0 group-hover:scale-x-100 transition-transform origin-left duration-300" />
            <span className="absolute bottom-0 right-0 w-full h-[1px] bg-[#3daf98]/50 scale-x-0 group-hover:scale-x-100 transition-transform origin-right duration-300" />
            <span className="w-1.5 h-1.5 bg-[#3daf98] animate-pulse" style={{ boxShadow: '0 0 8px #3daf98' }} />
            STATUS_ACTIVE :: SERIES_A :: 2025
          </div>
        </motion.div>
      </div>
    </section>
  );
};

