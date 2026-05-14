"use client";
import React from 'react';
import { motion } from 'framer-motion';

const metrics = [
  { num: "200", prefix: "$", suffix: "M", label: "Raise Target", sub: "Series A · Workforce Housing Platform" },
  { num: "4", prefix: "", suffix: "", label: "Communities Planned", sub: "Texas Flagship + 3 pipeline sites by 2028" },
  { num: "50", prefix: "", suffix: "", label: "Target States by 2032", sub: "One Humanly® community in every state" }
];

export const MetricsCards = () => {
  return (
    <section className="relative bg-[#0e1b26] py-12 md:py-20 border-y border-white/5 overflow-hidden">
      {/* Background Gradients & Grid */}
      <div className="absolute inset-0 pointer-events-none">
        <div 
          className="absolute inset-0"
          style={{
            background: `
              radial-gradient(ellipse 50% 50% at 50% 50%, rgba(45,125,210,0.12) 0%, transparent 80%)
            `
          }}
        />
        <div 
          className="absolute inset-0 opacity-[0.1]"
          style={{
            backgroundImage: `
              linear-gradient(rgba(255,255,255,0.02) 1px, transparent 1px),
              linear-gradient(90deg, rgba(255,255,255,0.02) 1px, transparent 1px)
            `,
            backgroundSize: '100px 100px'
          }}
        />
      </div>

      <div className="container relative z-10 mx-auto px-6 max-w-[1200px]">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-[1px] bg-white/10 rounded-3xl overflow-hidden shadow-2xl backdrop-blur-sm border border-white/10">
          {metrics.map((metric, index) => (
            <motion.div 
              key={index}
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="bg-[#0e1b26]/80 p-12 text-center hover:bg-white/[0.05] transition-all group"
            >
              <div className="font-serif text-5xl lg:text-7xl text-white leading-none">
                {metric.prefix}<span className="text-[#f09050] italic font-light">{metric.num}</span>{metric.suffix}
              </div>
              <div className="text-[0.85rem] font-bold tracking-[0.15em] uppercase text-[#3daf98] mt-6 mb-2 group-hover:text-white transition-colors">
                {metric.label}
              </div>
              <div className="text-[0.9rem] text-white/40 font-light max-w-[20ch] mx-auto">
                {metric.sub}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

