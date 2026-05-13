"use client";

import React from "react";
import { motion } from "framer-motion";

export const IntelligenceFlywheel = () => {
  return (
    <section className="py-[140px] bg-[#0a0809]">
      <div className="container mx-auto px-6 md:px-12 max-w-[1200px]">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 1, ease: [0.16, 1, 0.3, 1] }}
          className="p-8 md:p-[72px] rounded-[32px] bg-[#1a1618] border border-white/5 relative overflow-hidden"
        >
          {/* Subtle Background Glows */}
          <div className="absolute -top-20 -left-20 w-[400px] h-[400px] rounded-full blur-[120px] opacity-15 bg-[#4179F2]" />
          <div className="absolute -bottom-20 -right-20 w-[400px] h-[400px] rounded-full blur-[120px] opacity-15 bg-[#FF6136]" />

          <p className="text-[11px] font-bold uppercase tracking-[0.2em] text-[#4179F2] mb-6">Intelligence Flywheel</p>
          <h3 className="text-[clamp(32px,3.8vw,48px)] font-extrabold tracking-[-1.5px] leading-[1.1] text-white max-w-[720px] mb-6">
            The intelligence compounds with every community built.
          </h3>
          <p className="max-w-[740px] text-[16px] leading-[1.75] text-white/50 mb-16">
            Each community expands the system&apos;s understanding of product mix, service demand, design performance, operational efficiency, and resident behavior. That intelligence feeds the next community, which gets built smarter and faster than the last.
          </p>

          <div className="grid grid-cols-1 md:grid-cols-[1fr_auto_1fr_auto_1fr] gap-6 md:gap-8 items-center">
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.1 }}
              className="p-7 md:p-8 rounded-[24px] bg-white/5 border border-white/10 min-h-[140px] flex flex-col justify-center transition-all hover:bg-white/10"
            >
              <h5 className="text-[17px] font-extrabold text-white mb-3">Community 1</h5>
              <p className="text-[13px] leading-[1.6] text-white/40">Initial land, design, service, and resident data enters the Humanly system.</p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              transition={{ delay: 0.2 }}
              className="flex items-center justify-center h-full min-h-[40px] md:min-h-[140px] text-white/20 text-3xl font-light"
            >
              <span className="md:rotate-0 rotate-90">→</span>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.3 }}
              className="p-7 md:p-8 rounded-[24px] bg-white/5 border border-white/10 min-h-[140px] flex flex-col justify-center transition-all hover:bg-white/10"
            >
              <h5 className="text-[17px] font-extrabold text-white mb-3">AI Model Improves</h5>
              <p className="text-[13px] leading-[1.6] text-white/40">Planning assumptions, product choices, and operational decisions get sharper.</p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              transition={{ delay: 0.4 }}
              className="flex items-center justify-center h-full min-h-[40px] md:min-h-[140px] text-white/20 text-3xl font-light"
            >
              <span className="md:rotate-0 rotate-90">→</span>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.5 }}
              className="p-7 md:p-8 rounded-[24px] bg-white/5 border border-white/10 min-h-[140px] flex flex-col justify-center transition-all hover:bg-white/10 shadow-[0_0_40px_rgba(65,121,242,0.05)]"
            >
              <h5 className="text-[17px] font-extrabold text-white mb-3">Community 2 & 3</h5>
              <p className="text-[13px] leading-[1.6] text-white/40">New communities launch with better speed, better fit, and a deeper competitive moat.</p>
            </motion.div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};
