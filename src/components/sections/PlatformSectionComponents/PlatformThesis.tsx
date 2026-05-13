"use client";

import React from "react";
import { motion } from "framer-motion";

export const PlatformThesis = () => {
  return (
    <section className="py-[160px] relative overflow-hidden bg-[#F0EDEB]">
      {/* Subtle Luminous Glows */}
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_right,rgba(214,195,165,0.4),transparent_50%)] pointer-events-none" />
      {/* Logo-inspired Background Shapes */}
      <div
        className="absolute inset-0 pointer-events-none overflow-hidden opacity-[0.03]"
        style={{ mixBlendMode: 'soft-light' }}
      >
        <motion.div
          initial={{ opacity: 0, x: -100 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 2, ease: [0.16, 1, 0.3, 1] }}
          className="absolute -left-[10%] top-[20%] w-[25%] h-[70%] bg-gradient-to-b from-[#4179F2]/20 to-transparent rounded-[120px] blur-[100px] rotate-[-12deg]"
        />
        <motion.div
          initial={{ opacity: 0, x: 100 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 2, ease: [0.16, 1, 0.3, 1], delay: 0.2 }}
          className="absolute -right-[5%] bottom-[10%] w-[20%] h-[60%] bg-gradient-to-t from-[#6BCEFF]/15 to-transparent rounded-[120px] blur-[80px] rotate-[8deg]"
        />
      </div>

      <div className="container mx-auto px-6 md:px-12 max-w-[1200px] text-center relative z-10">
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="text-[11px] font-bold uppercase tracking-[0.15em] text-[#4179F2] mb-6"
        >
          Platform Thesis
        </motion.p>

        <motion.h2
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 1, delay: 0.1 }}
          className="text-[clamp(36px,5vw,64px)] font-extrabold leading-[1.08] tracking-[-2px] text-slate-900 max-w-[920px] mx-auto"
        >
          One company. One system. Full vertical. From land to living.
        </motion.h2>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="text-[17px] leading-[1.75] text-slate-600 max-w-[820px] mx-auto mt-6"
        >
          Our vertically integrated neighborhood platform enables us to own every layer of how a community is imagined, designed, built, and optimized. Every layer creates value. That value compounds, fueling long-term growth and measurable human outcomes.
        </motion.p>

        <motion.span
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.3 }}
          className="inline-block mt-8 px-[18px] py-[12px] rounded-full bg-[#4179F2]/5 border border-[#4179F2]/20 text-[12px] font-bold tracking-[0.09em] uppercase text-[#4179F2]"
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
              <span className="text-[10px] font-bold uppercase tracking-[0.2em] text-[#D6C3A5]">Acquisitions</span>
            </motion.div>
            <motion.div
              initial={{ opacity: 0, y: 10 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.7 }}
              className="text-center"
            >
              <span className="text-[10px] font-bold uppercase tracking-[0.2em] text-[#4179F2]">Lease-up</span>
            </motion.div>
            <motion.div
              initial={{ opacity: 0, y: 10 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.9 }}
              className="text-right"
            >
              <span className="text-[10px] font-bold uppercase tracking-[0.2em] text-[#6BCEFF]">Management</span>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
};
