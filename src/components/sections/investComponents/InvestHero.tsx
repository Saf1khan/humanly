"use client";
import React from 'react';
import { motion } from 'framer-motion';

export const InvestHero = () => {
  return (
    <section className="relative bg-[#0e1b26] py-24 md:py-32 lg:py-48 text-center overflow-hidden">
      {/* Background Gradients */}
      <div className="absolute inset-0 pointer-events-none">
        <div 
          className="absolute inset-0"
          style={{
            background: `
              radial-gradient(ellipse 70% 60% at 50% 100%, rgba(45,125,210,0.22) 0%, transparent 65%),
              radial-gradient(ellipse 50% 40% at 20% 20%, rgba(91,63,158,0.18) 0%, transparent 60%),
              radial-gradient(ellipse 40% 50% at 80% 10%, rgba(217,106,43,0.10) 0%, transparent 55%)
            `
          }}
        />
        {/* Animated Grid Lines */}
        <div 
          className="absolute inset-0 opacity-30"
          style={{
            backgroundImage: `
              linear-gradient(rgba(255,255,255,0.025) 1px, transparent 1px),
              linear-gradient(90deg, rgba(255,255,255,0.025) 1px, transparent 1px)
            `,
            backgroundSize: '80px 80px'
          }}
        />
      </div>

      <div className="container relative z-10 mx-auto px-6 max-w-[1200px]">
        <motion.p 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-[#3daf98] text-[0.75rem] font-bold tracking-[0.14em] uppercase mb-4"
        >
          Investor Relations
        </motion.p>
        
        <motion.h1 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.1 }}
          className="font-serif text-5xl md:text-6xl lg:text-7xl text-white mb-6 leading-tight max-w-[16ch] mx-auto"
        >
          Invest in the <em className="italic text-[#f09050] not-italic">future of housing.</em>
        </motion.h1>

        <motion.p 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="text-[clamp(1.05rem,2vw,1.25rem)] text-[#f7f6f2]/70 max-w-[56ch] mx-auto leading-relaxed mb-10"
        >
          Humanly® is raising $200M to build the first vertically integrated AI-native workforce housing platform in America.
        </motion.p>

        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.3 }}
          className="flex flex-wrap gap-4 justify-center"
        >
          <a href="#dataroom" className="inline-flex items-center justify-center px-8 py-3.5 rounded-xl bg-[#d96a2b] text-white font-semibold hover:bg-[#f09050] transition-all hover:-translate-y-0.5 shadow-lg shadow-orange-900/20">
            Request Access ↗
          </a>
          <a href="#ir-contact" className="inline-flex items-center justify-center px-8 py-3.5 rounded-xl border border-white/30 text-white/85 font-semibold hover:border-white/70 hover:bg-white/5 transition-all">
            Schedule a Call
          </a>
        </motion.div>

        <motion.div 
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.8, delay: 0.5 }}
          className="inline-flex items-center gap-3 bg-white/5 border border-white/10 rounded-full px-6 py-2.5 mt-12"
        >
          <span className="w-2 h-2 rounded-full bg-[#3daf98] shadow-[0_0_8px_#3daf98] animate-pulse" />
          <span className="text-[0.82rem] font-semibold text-[#f7f6f2]/75 tracking-wide">
            Actively Raising — Series A · $200M Target · Texas Flagship Groundbreaking 2025
          </span>
        </motion.div>
      </div>
    </section>
  );
};
