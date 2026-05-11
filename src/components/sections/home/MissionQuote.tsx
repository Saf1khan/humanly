"use client";
import React from 'react';
import { motion } from 'framer-motion';

export const MissionQuote = () => {
  return (
    <section className="relative h-[85vh] flex items-center justify-center overflow-hidden">
      {/* Background Image with Dark Overlay */}
      <div className="absolute inset-0 z-0">
        <img 
          src="/images/pexels-ninobur-16808494.jpg" 
          alt="Mission Background" 
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-black/65 backdrop-blur-[1px]" />
      </div>

      <div className="wrap-sm relative z-10 text-center px-6">
        <motion.p
          initial={{ opacity: 0, y: -10 }}
          whileInView={{ opacity: 0.6, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="text-white text-xs uppercase tracking-[0.4em] mb-12 font-bold"
        >
          OUR CORE MISSION
        </motion.p>

        <motion.div 
          initial={{ scaleX: 0 }}
          whileInView={{ scaleX: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 1.2, ease: "circOut" }}
          className="h-[1px] w-16 bg-h-primary mx-auto mb-16" 
        />
        
        <motion.blockquote 
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 1.2, ease: "easeOut" }}
          className="text-[1.75rem] md:text-[2.5rem] lg:text-[3.25rem] font-display font-medium leading-[1.25] text-white tracking-tight"
        >
          "Humanly doesn't patch the <span className="italic font-light opacity-80 text-h-primary">housing problem.</span><br />
          It <span className="italic text-h-primary">rebuilds the system</span> — from land to living to lifelong services."
        </motion.blockquote>
        
        <motion.div 
          initial={{ scaleX: 0 }}
          whileInView={{ scaleX: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 1.2, ease: "circOut", delay: 0.3 }}
          className="h-[1px] w-16 bg-h-primary mx-auto mt-16" 
        />
      </div>
    </section>
  );
};
