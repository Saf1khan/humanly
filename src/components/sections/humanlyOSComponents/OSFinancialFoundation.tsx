"use client";

import React, { useRef } from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';

const OSFinancialFoundation = () => {
  const containerRef = useRef(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start end", "end start"]
  });
  
  // Parallax translation values
  const y = useTransform(scrollYProgress, [0, 1], ["-20%", "20%"]);

  return (
    <section ref={containerRef} className="relative flex items-center min-h-[70vh] py-[clamp(4rem,10vw,8rem)] overflow-hidden">
      {/* Full Background Image & Overlay */}
      <div className="absolute inset-0 z-0">
        <motion.img 
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 1.5, ease: "easeOut" }}
          style={{ y, scale: 1.25 }}
          src="/images/AdobeStock_581947926.jpeg" 
          alt="Financial Foundation Background" 
          className="w-full h-full object-cover object-center transform-gpu"
          loading="lazy" 
        />
        {/* Gradient overlay to seamlessly blend with both the previous and next #4C5C68 sections */}
        <div className="absolute inset-0 bg-gradient-to-b from-[#4C5C68] via-black/40 to-[#4C5C68]"></div>
      </div>

      {/* Decorative blurred background element to add a magical glow */}
      <div className="absolute top-1/2 left-0 -translate-y-1/2 w-full h-[500px] bg-gradient-to-r from-[#1a4f82]/30 via-[#d96a2b]/0 to-transparent blur-[120px] pointer-events-none z-0"></div>

      <div className="max-w-[1400px] mx-auto px-6 md:px-12 relative z-10 w-full">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12">
          
          {/* Text Content wrapped in a floating glass container layout */}
          <motion.div 
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, ease: "easeOut" }}
            className="lg:col-span-7 flex flex-col justify-center"
          >
            <p className="text-[10px] font-medium tracking-[0.2em] uppercase text-[#aeb6be] mb-6">
              p15 / WEALTH CREATION
            </p>
            <div className="h-[2px] rounded-full w-[84px] bg-gradient-to-r from-[#1a4f82] via-[#2d7dd2] to-[#d96a2b] mb-8"></div>
            
            <h2 className="font-serif text-[clamp(2.5rem,4vw,3.5rem)] font-normal leading-[1.1] mb-8 text-white text-balance drop-shadow-lg">
              Your home becomes a foundation for financial literacy, wealth creation, and equity stewardship.
            </h2>
            
            <div className="p-8 bg-black/20 backdrop-blur-xl border border-white/10 rounded-3xl shadow-[0_0_40px_rgba(0,0,0,0.3)] relative overflow-hidden group">
              {/* Subtle glow effect on hover */}
              <div className="absolute inset-0 bg-gradient-to-br from-white/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
              
              <p className="text-lg text-[#e2e8f0] font-light leading-relaxed relative z-10 drop-shadow-sm">
                The resident outcome is the investor return. Every payment builds equity. Every year builds wealth. Every neighbor strengthens the community. We don't just build homes. We create the conditions for families to build wealth and change their financial trajectory.
              </p>
            </div>
          </motion.div>

        </div>
      </div>
    </section>
  );
};

export default OSFinancialFoundation;
