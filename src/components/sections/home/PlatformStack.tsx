"use client";
import React from 'react';
import { motion } from 'framer-motion';

export const PlatformStack = () => {
  const steps = [
    { emoji: '🌱', title: 'Land', desc: 'AI-driven site selection, market intelligence, and entitlement' },
    { emoji: '🏗️', title: 'Build', desc: 'Design kit, rapid 3D modelling, streamlined construction' },
    { emoji: '⚙️', title: 'Operate', desc: 'HumanlyOS® powers every community service and transaction' },
    { emoji: '📈', title: 'Compound', desc: 'Data flywheel drives continuous improvement across all communities' }
  ];

  return (
    <section className="py-32 bg-h-surface-off relative overflow-hidden">
      {/* Background Accent */}
      <div className="absolute top-1/4 right-0 w-[800px] h-[800px] bg-h-blue/5 rounded-full blur-[120px] pointer-events-none" />
      
      <div className="wrap relative z-10">
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-20"
        >
          <div className="flex flex-col items-center gap-2 mb-6">
            <p className="text-[11px] font-bold tracking-[0.2em] uppercase text-h-blue">
              THE PLATFORM
            </p>
            <div className="h-[2px] w-12 bg-h-blue rounded-full"></div>
          </div>
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-display font-bold text-h-dark leading-[1.1] tracking-tight">
            One company. One system.<br />Full vertical integration.
          </h2>
        </motion.div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 max-w-6xl mx-auto px-4">
          {steps.map((step, idx) => (
            <motion.div 
              key={idx}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: idx * 0.1, duration: 0.8 }}
              className="oura-exact-glass rounded-[2rem] px-8 py-10 text-center border border-white/40 shadow-xl group hover:scale-[1.02] transition-all duration-500"
            >
              <div className="text-4xl mb-6 group-hover:scale-110 transition-transform duration-500 inline-block">
                {step.emoji}
              </div>
              <h3 className="text-xl font-bold font-display text-h-dark mb-4 tracking-tight">{step.title}</h3>
              <p className="text-[0.85rem] text-h-muted leading-relaxed font-medium">{step.desc}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};
