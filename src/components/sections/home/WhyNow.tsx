"use client";
import React from 'react';
import { motion } from 'framer-motion';

export const WhyNow = () => {
  const points = [
    { badge: 'Legislative', title: 'Legislative Tailwinds', desc: 'Zoning reform, YIMBY legislation, and federal workforce housing incentives are opening land markets at unprecedented scale.', color: 'text-h-blue bg-h-blue/10' },
    { badge: 'Technology', title: 'AI-Native Moment', desc: 'For the first time, AI can manage community operations, predict maintenance, and personalize resident services at scale.', color: 'text-h-primary bg-h-primary/10' },
    { badge: 'Capital', title: 'ESG Capital Demand', desc: 'Institutional investors are allocating billions to workforce housing and impact real estate. Humanly is purpose-built to capture this capital.', color: 'text-h-orange bg-h-orange/10' }
  ];

  return (
    <section className="py-32 bg-h-surface relative overflow-hidden">
      {/* Background Accent */}
      <div className="absolute bottom-0 left-0 w-[600px] h-[600px] bg-h-primary/5 rounded-full blur-[120px] pointer-events-none" />
      
      <div className="wrap relative z-10">
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-20"
        >
          <div className="flex flex-col items-center gap-2 mb-6">
            <p className="text-[11px] font-bold tracking-[0.2em] uppercase text-h-primary">
              THE OPPORTUNITY
            </p>
            <div className="h-[2px] w-12 bg-h-primary rounded-full"></div>
          </div>
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-display font-bold text-h-dark leading-[1.1] tracking-tight">
            Why Humanly.<br />Why Now.
          </h2>
        </motion.div>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-6xl mx-auto px-4">
          {points.map((point, idx) => (
            <motion.div 
              key={idx}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: idx * 0.1, duration: 0.8 }}
              className="oura-exact-glass rounded-[2rem] p-10 text-left border border-white/40 shadow-xl group hover:scale-[1.02] transition-all duration-500 flex flex-col h-full"
            >
              <div className={`inline-flex px-3 py-1 rounded-full text-[10px] font-bold uppercase tracking-widest ${point.color} mb-6 w-fit`}>
                {point.badge}
              </div>
              <h3 className="text-2xl font-bold font-display text-h-dark mb-4 tracking-tight leading-tight">{point.title}</h3>
              <p className="text-[0.95rem] text-h-muted leading-relaxed font-medium mt-auto">{point.desc}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};
