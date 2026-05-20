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

// Minimalist highly readable card
const GlassCard = ({
  metric,
  index,
}: {
  metric: (typeof metrics)[0];
  index: number;
}) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-60px" }}
      transition={{ duration: 0.6, delay: index * 0.1, ease: [0.16, 1, 0.3, 1] }}
      className="relative rounded-2xl bg-white/[0.02] border border-white/10 hover:border-white/20 transition-all duration-300 p-8 md:p-10 flex flex-col justify-between"
    >
      <div>
        {/* Large, high-contrast, perfectly readable number */}
        <div className="flex items-baseline text-white select-none mb-6">
          {metric.prefix && (
            <span className="text-white/60 font-light text-3xl lg:text-4xl mr-1">
              {metric.prefix}
            </span>
          )}
          <span className="font-sans font-extrabold text-5xl lg:text-6xl tracking-tight leading-none text-white">
            {metric.num}
          </span>
          {metric.suffix && (
            <span className="text-white/60 font-light text-2xl lg:text-3xl ml-1">
              {metric.suffix}
            </span>
          )}
        </div>

        {/* Small indicator tag using the metric's theme color */}
        <div className="flex items-center gap-2 mb-4">
          <span className="w-2 h-2 rounded-full" style={{ backgroundColor: metric.color }} />
          <span className="text-[0.72rem] font-bold tracking-widest uppercase text-white/40">
            Metric
          </span>
        </div>

        {/* Label */}
        <h3 className="text-xl font-serif font-medium text-white mb-3">
          {metric.label}
        </h3>

        {/* Description */}
        <p className="text-[0.9rem] text-white/70 font-light leading-relaxed">
          {metric.sub}
        </p>
      </div>
    </motion.div>
  );
};

export const MetricsCards = () => {
  return (
    <section className="relative py-20 md:py-28 bg-[#070d14] overflow-hidden">
      {/* Subtle background grid pattern */}
      <div 
        className="absolute inset-0 pointer-events-none opacity-[0.03]"
        style={{
          backgroundImage: "radial-gradient(circle, rgba(255,255,255,0.4) 1px, transparent 1px)",
          backgroundSize: "32px 32px",
        }}
      />

      <div className="container relative z-10 mx-auto px-6 max-w-[1100px]">
        {/* Section label */}
        <motion.div
          initial={{ opacity: 0, y: 10 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="flex items-center justify-center gap-3 mb-14"
        >
          <div className="h-[1px] w-10 bg-white/10" />
          <span className="text-[0.7rem] font-bold tracking-[0.2em] uppercase text-white/30">
            Investment at a Glance
          </span>
          <div className="h-[1px] w-10 bg-white/10" />
        </motion.div>

        {/* Minimal grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {metrics.map((metric, index) => (
            <GlassCard key={index} metric={metric} index={index} />
          ))}
        </div>

        {/* Bottom indicator */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="flex justify-center mt-14"
        >
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full text-[0.7rem] text-white/40 bg-white/[0.02] border border-white/5">
            <span className="w-1.5 h-1.5 rounded-full bg-[#3daf98]" />
            Actively Raising · Series A · 2025
          </div>
        </motion.div>
      </div>
    </section>
  );
};
