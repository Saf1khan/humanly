"use client";
import React, { useRef } from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';

export const TeamHero = () => {
  const containerRef = useRef<HTMLDivElement>(null);
  
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "end start"],
  });

  const y = useTransform(scrollYProgress, [0, 1], ["0%", "20%"]);
  const opacity = useTransform(scrollYProgress, [0, 0.8], [1, 0.4]);

  return (
    <section 
      ref={containerRef}
      className="relative w-full h-[1000px] flex items-center justify-center overflow-hidden bg-[#0e1b26]"
    >
      {/* Parallax Background Image */}
      <motion.div 
        style={{ y }}
        className="absolute inset-0 w-full h-[120%] -top-[10%]"
      >
        <img 
          src="/images/AdobeStock_446754975.jpeg" 
          alt="Team Hero Background" 
          className="w-full h-full object-cover brightness-50"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-[#0e1b26]5 via-transparent to-[#0e1b26]/5" />
      </motion.div>

      <div className="container relative z-10 mx-auto px-6 max-w-[1400px] text-center">
        <motion.div
          style={{ opacity }}
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
        >
          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-[#3daf98] text-[0.75rem] font-bold tracking-[0.2em] uppercase mb-8"
          >
            Our Team
          </motion.p>
          
          <motion.h1 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="font-serif text-5xl md:text-7xl lg:text-8xl text-white mb-10 leading-[1.1] max-w-[1200px] mx-auto"
          >
            Built by <em className="italic text-[#5ba3e0]">Operators, Technologists,</em><br className="hidden md:block" />
            and <em className="italic text-[#5ba3e0]">Community Builders.</em><br className="hidden md:block" />
          </motion.h1>

          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="text-lg md:text-xl text-[#f7f6f2]/80 max-w-[900px] mx-auto leading-relaxed text-pretty" 
          >
            The Humanly® team brings together deep expertise in Real Estate Development, AI & Technology, <br className="hidden lg:block" />
            Urban Design, Financial Services, Community Operations and Government Policy.
          </motion.p>
        </motion.div>
      </div>
    </section>
  );
};
