"use client";

import React from "react";
import { motion } from "framer-motion";

export const ManagementPhase = () => {
  return (
    <section className="py-[140px] relative overflow-hidden bg-[#F0EDEB]">
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
      <div className="container mx-auto px-6 md:px-12 max-w-[1200px]">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="flex flex-col md:flex-row justify-between items-end gap-6 mb-12"
        >
          <div>
            <p className="text-[11px] font-bold uppercase tracking-[0.15em] text-[#4179F2] mb-4">Phase 3 — Management</p>
            <motion.h3
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 1, ease: [0.16, 1, 0.3, 1] }}
              className="text-[clamp(32px,4vw,56px)] font-extrabold leading-[1.1] tracking-[-2px] text-slate-900 max-w-[720px]"
            >
              One platform. Permanent value. Compounding returns.
            </motion.h3>
          </div>
          <p className="max-w-[520px] text-[15px] leading-[1.7] text-slate-600">
            Once the community is live, Humanly operates it as a connected system — one that improves service access, resident outcomes, and asset performance at the same time.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
            className="group relative p-8 md:p-12 rounded-[24px] bg-white/60 border border-black/5 overflow-hidden backdrop-blur-xl transition-all hover:bg-white/80 hover:border-black/10 shadow-sm border-l-4 border-l-[#6BCEFF]"
          >
            <div className="transition-all duration-500 ease-out group-hover:pl-8">
              <div className="absolute -top-6 -right-6 w-[120px] h-[120px] rounded-full blur-[80px] opacity-10 bg-[#6BCEFF]" />
              <h4 className="text-[24px] font-extrabold tracking-[-0.6px] text-slate-900 mb-4">HumanlyOS®</h4>
              <p className="text-[15px] leading-[1.75] text-slate-500 max-w-[420px]">
                One platform with three-sided impact. The resident AI navigator manages access to online and offline services, while the community Digital Twin captures operational data to improve delivery, coordination, and resident experience over time.
              </p>
              <div className="inline-block mt-8 px-4 py-2 rounded-full bg-black/5 text-[10px] font-bold tracking-[0.1em] uppercase text-[#6BCEFF]">
                Captures: service rev share + data ownership
              </div>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.1, ease: [0.16, 1, 0.3, 1] }}
            className="group relative p-8 md:p-12 rounded-[24px] bg-white/60 border border-black/5 overflow-hidden backdrop-blur-xl transition-all hover:bg-white/80 hover:border-black/10 shadow-sm border-l-4 border-l-[#6BCEFF]"
          >
            <div className="transition-all duration-500 ease-out group-hover:pl-8">
              <div className="absolute -top-6 -right-6 w-[120px] h-[120px] rounded-full blur-[80px] opacity-10 bg-[#6BCEFF]" />
              <h4 className="text-[24px] font-extrabold tracking-[-0.6px] text-slate-900 mb-4">Recurring Revenue & Asset Value</h4>
              <p className="text-[15px] leading-[1.75] text-slate-500 max-w-[420px]">
                Permanent cash flow from leases, services, and commercial rents supports institutional-scale refinancing. Every community also contributes data that sharpens future operations and raises the system&apos;s intelligence moat.
              </p>
              <div className="inline-block mt-8 px-4 py-2 rounded-full bg-black/5 text-[10px] font-bold tracking-[0.1em] uppercase text-[#6BCEFF]">
                Captures: NOI + asset valuation + learning
              </div>
            </div>
          </motion.div>
        </div>

        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ delay: 0.4 }}
          className="text-center mt-[48px] text-[14px] font-extrabold tracking-[0.08em] uppercase text-[#4179F2]"
        >
          Control the full vertical. Compound the intelligence. No one else does both.
        </motion.div>
      </div>


    </section>
  );
};
