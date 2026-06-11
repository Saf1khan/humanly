"use client";

import React from "react";
import { motion } from "framer-motion";

export const PlatformThesis = () => {
  return (
    <section
      className="py-[160px] overflow-visible"
      style={{
        position: "sticky",
        top: 0,
        zIndex: 1,
        backgroundColor: "rgb(247, 241, 232)",
      }}
    >
      {/* Subtle Luminous Glows - positioned away from the top edge to prevent border divide lines */}
      <div className="absolute inset-0 pointer-events-none overflow-hidden">
        {/* Soft Left Glow near bottom */}
        <div
          className="absolute -left-[10%] bottom-0 w-[40%] h-[60%] rounded-full blur-[130px]"
          style={{
            background: "radial-gradient(circle, rgba(160, 161, 208, 0.3) 0%, transparent 70%)"
          }}
        />
        {/* Soft Right Glow near bottom */}
        <div
          className="absolute -right-[10%] bottom-[10%] w-[40%] h-[60%] rounded-full blur-[130px]"
          style={{
            background: "radial-gradient(circle, rgba(160, 161, 208, 0.25) 0%, transparent 70%)"
          }}
        />
      </div>

      {/* Logo-inspired Background Shapes */}
      <div
        className="absolute inset-0 pointer-events-none overflow-hidden opacity-[0.03]"
        style={{ mixBlendMode: 'soft-light' }}
      >
        <motion.div
          initial={{ opacity: 0, x: 100 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 2, ease: [0.16, 1, 0.3, 1], delay: 0.2 }}
          className="absolute -right-[5%] bottom-[10%] w-[20%] h-[60%] bg-gradient-to-t from-[#6BCEFF]/15 to-transparent rounded-[120px] blur-[80px] rotate-[8deg]"
        />
      </div>

      <div className="container mx-auto px-6 md:px-12 max-w-[1200px] text-center relative z-10">
        
        <motion.h2
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 1, delay: 0.1 }}
          className="text-[clamp(32px,4.5vw,56px)] font-light font-cormorant leading-[1.1] tracking-[-0.03em] text-[#3E2242] max-w-[920px] mx-auto"
        >
          One company. One system. Full vertical. From land to living.
        </motion.h2>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="text-lg md:text-xl leading-relaxed text-[rgba(15,23,42,0.8)] font-light max-w-[820px] font-albert mx-auto mt-6"
        >
          Our vertically integrated neighborhood platform enables us to own every layer of how a community is imagined, designed, built, and optimized. Every layer creates value. That value compounds, fueling long-term growth and measurable human outcomes.
        </motion.p>

        <motion.span
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.3 }}
          className="inline-block mt-8 px-[18px] py-[12px] rounded-full bg-[#3E2242]/5 border border-[#3E2242]/20 text-[11px] font-bold tracking-[0.09em] uppercase text-[#3E2242]"
        >
          Control the full vertical. Compound the intelligence. No one else does both.
        </motion.span>

        {/* Phase Bar (p8 requirement) */}
        <div className="mt-24 max-w-[1000px] mx-auto">
          <motion.div
            initial={{ scaleX: 0 }}
            whileInView={{ scaleX: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 1.5, ease: [0.16, 1, 0.3, 1] }}
            className="h-[2px] w-full rounded-full origin-left"
            style={{
              background: "linear-gradient(to right, #0B1118, #D6C3A5, #4179F2, #AA3DAD, #6BCEFF)"
            }}
          />
          <div className="grid grid-cols-3 mt-6">
            <motion.div
              initial={{ opacity: 0, y: 10 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.5 }}
              className="text-left"
            >
              <span className="text-[10px] font-bold uppercase tracking-[0.2em] text-[#3E2242]/70">Acquisitions</span>
            </motion.div>
            <motion.div
              initial={{ opacity: 0, y: 10 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.7 }}
              className="text-center"
            >
              <span className="text-[10px] font-bold uppercase tracking-[0.2em] text-[#3E2242]/70">Lease-up</span>
            </motion.div>
            <motion.div
              initial={{ opacity: 0, y: 10 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.9 }}
              className="text-right"
            >
              <span className="text-[10px] font-bold uppercase tracking-[0.2em] text-[#3E2242]/70">Management</span>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
};
