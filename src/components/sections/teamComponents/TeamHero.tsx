"use client";
import React from 'react';
import { motion } from 'framer-motion';

const badges = [
  "Real Estate Development",
  "AI & Technology",
  "Urban Design",
  "Financial Services",
  "Community Operations",
  "Policy & Government"
];

export const TeamHero = () => {
  return (
    <section className="relative bg-[#0e1b26] py-20 md:py-32 lg:py-40 text-center overflow-hidden">
      {/* Background Gradients */}
      <div className="absolute inset-0 pointer-events-none">
        <div 
          className="absolute inset-0"
          style={{
            background: `
              radial-gradient(ellipse 60% 50% at 20% 50%, rgba(45,125,210,0.18) 0%, transparent 70%),
              radial-gradient(ellipse 50% 60% at 80% 50%, rgba(91,63,158,0.18) 0%, transparent 70%)
            `
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
          Our Team
        </motion.p>
        
        <motion.h1 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.1 }}
          className="font-serif text-4xl md:text-5xl lg:text-6xl text-white mb-6 leading-[1.18]"
        >
          Built by <em className="italic text-[#5ba3e0] not-italic">operators, technologists,</em><br/>
          and community builders.
        </motion.h1>

        <motion.p 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="text-[clamp(1rem,2vw,1.2rem)] text-[#f7f6f2]/70 max-w-[62ch] mx-auto leading-relaxed"
        >
          The Humanly® team brings together deep expertise in real estate development, AI, urban design, financial services, and community operations.
        </motion.p>

        <motion.div 
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          className="flex flex-wrap gap-3 justify-center mt-10"
        >
          {badges.map((badge, index) => (
            <span 
              key={index}
              className="text-[0.78rem] font-semibold tracking-wider px-[1.1rem] py-[0.4rem] rounded-full bg-white/10 border border-white/10 text-white/75"
            >
              {badge}
            </span>
          ))}
        </motion.div>
      </div>
    </section>
  );
};
