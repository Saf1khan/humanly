"use client";
import React from 'react';
import { motion } from 'framer-motion';

export const ProblemStats = () => {
  const stats = [
    { value: '7M+', label: 'Unit housing shortage nationwide', color: 'text-h-dark' },
    { value: '$1T+', label: 'Annual gap in workforce housing investment', color: 'text-h-dark' },
    { value: '40%', label: 'Of American renters are cost-burdened', color: 'text-h-dark' }
  ];

  return (
    <section className="py-32 bg-h-surface relative overflow-hidden">
      {/* Background Accent */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[1000px] h-[1000px] bg-h-primary/5 rounded-full blur-[120px] pointer-events-none" />
      
      <div className="wrap relative z-10">
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-20"
        >
          <div className="flex flex-col items-center gap-2 mb-6">
            <p className="text-[11px] font-bold tracking-[0.2em] uppercase text-h-primary">
              THE CRISIS
            </p>
            <div className="h-[2px] w-12 bg-h-primary rounded-full"></div>
          </div>
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-display font-bold text-h-dark leading-[1.1] tracking-tight">
            America's housing system<br />is broken.
          </h2>
        </motion.div>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {stats.map((stat, idx) => (
            <motion.div 
              key={idx}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: idx * 0.1, duration: 0.8 }}
              className="oura-exact-glass rounded-[2.5rem] p-12 text-center border border-white/40 shadow-xl group hover:scale-[1.02] transition-all duration-500"
            >
              <div className={`text-6xl md:text-7xl font-bold font-display ${stat.color} leading-none mb-6 group-hover:scale-110 transition-transform duration-500`}>
                {stat.value}
              </div>
              <div className="text-xs md:text-sm font-bold text-h-muted uppercase tracking-[0.1em] max-w-[200px] mx-auto leading-relaxed">
                {stat.label}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};
