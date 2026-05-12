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
    <section className="bg-[#12212f] py-10 md:py-14 border-y border-white/5">
      <div className="container mx-auto px-6 max-w-[1200px]">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-[1px] bg-white/10 rounded-2xl overflow-hidden shadow-2xl">
          {metrics.map((metric, index) => (
            <motion.div 
              key={index}
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="bg-[#12212f] p-10 text-center hover:bg-white/[0.03] transition-colors group"
            >
              <div className="font-serif text-5xl lg:text-6xl text-white leading-none">
                {metric.prefix}<span className="text-[#f09050] italic">{metric.num}</span>{metric.suffix}
              </div>
              <div className="text-[0.82rem] font-bold tracking-[0.08em] uppercase text-[#f7f6f2]/50 mt-4 mb-1 group-hover:text-[#f7f6f2]/70 transition-colors">
                {metric.label}
              </div>
              <div className="text-[0.85rem] text-[#f7f6f2]/40">
                {metric.sub}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};
