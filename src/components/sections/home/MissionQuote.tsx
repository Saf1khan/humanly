"use client";
import React from 'react';
import { motion } from 'framer-motion';

export const MissionQuote = () => {
  return (
    <section className="relative h-[780px] flex items-center justify-center overflow-hidden">
      {/* Background Image with Dark Overlay */}
      <div className="absolute inset-0 z-0">
        <img
          src="/images/AdobeStock_170554793.jpeg"
          alt="Mission Background"
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-sandstone-200/95" />
        <div className="absolute top-0 left-0 w-full h-48 bg-gradient-to-b from-sandstone-200 to-sandstone-200/95 z-10"></div>
        <div className="absolute bottom-0 left-0 w-full h-48 bg-gradient-to-t from-sandstone-200 to-sandstone-200/95 z-10"></div>
        <div
          className="absolute pointer-events-none left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 w-[clamp(44rem,14.769rem+116.923vw,120rem)] h-[clamp(25rem,8.654rem+65.385vw,67.5rem)]"
          style={{ background: "radial-gradient(50% 50%, rgba(0, 0, 0, 0.3), rgba(0, 0, 0, 0.03) 50%, rgba(0, 0, 0, 0))" }}
        />
      </div>

      <div className="max-w-[1440px] mx-auto px-6 md:px-12 lg:px-16 relative z-10 text-center w-full flex flex-col items-center">
        <motion.p
          initial={{ opacity: 0, y: -10 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="text-white text-xs uppercase tracking-[0.4em] font-bold"
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
          className="text-[1.75rem] md:text-[2.5rem] lg:text-[3.25rem] font-serif font-bold leading-[1.5] text-white tracking-tight"
        >
          "Humanly doesn't patch the <span className="italic font-semibold text-h-primary">housing problem.</span><br />
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
