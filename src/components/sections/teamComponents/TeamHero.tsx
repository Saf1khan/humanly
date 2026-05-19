"use client";
import React, { useRef } from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';

export const TeamHero = () => {
  const containerRef = useRef<HTMLDivElement>(null);
  
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "end start"],
  });

  const y = useTransform(scrollYProgress, [0, 1], ["0%", "30%"]);
  const opacity = useTransform(scrollYProgress, [0, 0.8], [1, 0.3]);

  return (
    <section 
      ref={containerRef}
      className="relative w-full h-[1049px] flex items-center justify-center overflow-hidden"
    >
      {/* Parallax Background Image */}
      <motion.div 
        style={{ y }}
        className="absolute inset-0 w-full h-[130%] -top-[10%]"
      >
        <img 
          src="/images/AdobeStock_446754975.jpeg" 
          alt="Team Hero Background" 
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-[#11161A]/40" />
      </motion.div>

      {/* Subtle gold accent line */}
      <div className="absolute bottom-0 left-0 right-0 h-[1px] bg-gradient-to-r from-transparent via-[#c2a077]/40 to-transparent" />

      <div className="container relative z-10 mx-auto px-6 max-w-[1400px] text-center">
        <motion.div
          style={{ opacity }}
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 2, ease: [0.16, 1, 0.3, 1] }}
        >
          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 2, delay: 0.2, ease: "easeOut" }}
            className="text-[#ffffff] text-[0.8rem] font-medium tracking-[0.28em] uppercase mb-10"
          >
            Our Team
          </motion.p>
          
          <motion.h1 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.3, ease: "easeOut" }}
            className="font-serif text-5xl md:text-7xl lg:text-8xl text-[#faf9f6] mb-12 leading-[1.1] max-w-[1200px] mx-auto tracking-tight"
          >
            Built by <em className="italic text-[#c2a077] font-light">Operators, Technologists,</em><br className="hidden md:block" />
            and <em className="italic text-[#c2a077] font-light">Community Builders.</em><br className="hidden md:block" />
          </motion.h1>

          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4, ease: "easeOut" }}
            className="text-lg md:text-xl text-[#faf9f6] max-w-[900px] mx-auto leading-relaxed font-light text-balance" 
          >
            The Humanly® team brings together deep expertise in Real Estate Development, AI & Technology, <br className="hidden lg:block" />
            Urban Design, Financial Services, Community Operations and Government Policy.
          </motion.p>
        </motion.div>
      </div>
    </section>
  );
};
