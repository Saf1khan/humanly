"use client";

import React from 'react';
import { motion } from 'framer-motion';

const OSServicesQuote = () => {
  return (
    <section className="bg-[#4C5C68] py-[clamp(4rem,8vw,6rem)] relative overflow-hidden">
      {/* Vibrant decorative glow behind the card to create a strong glass refraction effect */}
      <div className="absolute top-[10%] right-[5%] w-[500px] h-[500px] bg-gradient-to-br from-[#d96a2b]/40 to-[#1a4f82]/40 rounded-full blur-[120px] pointer-events-none"></div>

      <div className="max-w-[1240px] mx-auto px-[clamp(1.5rem,5vw,3rem)] relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-[1.1fr_0.9fr] gap-12 lg:gap-20 items-center">

          {/* Left: Premium Features Stack */}
          <motion.div 
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="flex flex-col gap-4"
          >
            <div className="h-[2px] rounded-full w-[80px] bg-gradient-to-r from-[#1a4f82] via-[#2d7dd2] to-[#d96a2b] mb-4"></div>
            
            {[
              "Access to embedded financial services and support",
              "Integrated mortgage and insurance products",
              "Financial literacy programs",
              "Structured wealth programs yielding real outcomes",
              "Financial stewardship and accountability",
              "Favorable HELOC and debt restructuring support"
            ].map((item, idx) => (
              <motion.div 
                key={idx}
                initial={{ opacity: 0, y: 15 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: idx * 0.1, duration: 0.5 }}
                className="group relative bg-[#050505]/20 hover:bg-[#050505]/40 backdrop-blur-md border border-white/5 hover:border-white/20 rounded-2xl p-5 flex items-center gap-5 transition-all duration-300 shadow-[0_4px_20px_rgba(0,0,0,0.1)]"
              >
                {/* Icon Container */}
                <div className="flex-shrink-0 w-10 h-10 rounded-full bg-white/5 flex items-center justify-center border border-white/10 group-hover:bg-[#d96a2b]/20 group-hover:border-[#d96a2b]/50 transition-colors duration-300">
                  <div className="w-2.5 h-2.5 rounded-full bg-[#d96a2b] group-hover:scale-125 group-hover:shadow-[0_0_12px_rgba(217,106,43,0.8)] transition-all duration-300"></div>
                </div>
                
                {/* Text */}
                <p className="text-[#e2e8f0] text-[1.05rem] font-light leading-snug group-hover:text-white transition-colors duration-300">
                  {item}
                </p>
              </motion.div>
            ))}
          </motion.div>

          {/* Right: Glassmorphic Quote */}
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="relative"
          >
            <div className="bg-white/10 backdrop-blur-3xl border border-white/20 p-10 lg:p-12 rounded-[2rem] shadow-[0_8px_32px_rgba(0,0,0,0.3)] relative overflow-hidden group">
              {/* Subtle animated gradient inside the quote box */}
              <div className="absolute inset-0 bg-gradient-to-br from-white/5 to-transparent opacity-50 group-hover:opacity-100 transition-opacity duration-700"></div>

              {/* Large Quote Mark Decoration */}
              <div className="absolute -top-4 -left-2 text-[8rem] font-serif text-white/5 leading-none select-none pointer-events-none">
                "
              </div>

              <blockquote className="relative z-10 font-serif text-[clamp(1.4rem,2.5vw,2rem)] italic text-white leading-[1.6] m-0 drop-shadow-md">
                “The resident journey is not charity. It is the flywheel. The human story. The trajectory change. The before and after. The result is compounding wealth, health, education, and connection.”
              </blockquote>
            </div>
          </motion.div>

        </div>
      </div>
    </section>
  );
};

export default OSServicesQuote;
