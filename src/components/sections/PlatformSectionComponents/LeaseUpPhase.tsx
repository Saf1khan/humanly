"use client";

import React from "react";
import { motion } from "framer-motion";

export const LeaseUpPhase = () => {
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
          initial={{ opacity: 0, x: 100 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 2, ease: [0.16, 1, 0.3, 1] }}
          className="absolute -right-[10%] bottom-[20%] w-[25%] h-[70%] bg-gradient-to-t from-[#6BCEFF]/15 to-transparent rounded-[120px] blur-[80px] rotate-[8deg]"
        />
      </div>
      <div className="container mx-auto px-6 md:px-12 max-w-[1200px]">
        <div className="grid grid-cols-1 lg:grid-cols-[1fr_0.9fr] gap-12 lg:gap-20 items-center">
          <motion.div
            initial={{ opacity: 0, x: -40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 1.2, ease: [0.16, 1, 0.3, 1] }}
          >
            <p className="text-[11px] font-bold uppercase tracking-[0.15em] text-[#4179F2] mb-4">Phase 2 — Lease-Up</p>
            <div className="h-[2px] w-[74px] bg-gradient-to-r from-[#D6C3A5] via-[#4179F2] to-[#6BCEFF] rounded-[1px] mb-8" />
            <h3 className="text-[clamp(32px,4vw,56px)] font-extrabold tracking-[-2px] leading-[1.1] text-slate-900">
              Walk the neighborhood before it&apos;s built.
            </h3>
            <p className="mt-6 text-[16px] leading-[1.75] text-slate-600">
              Humanly turns design assets into a sales engine. The neighborhood becomes explorable long before ground is broken, creating confidence, pre-sale momentum, and faster conversion without sacrificing clarity.
            </p>

            <div className="grid gap-6 mt-10">
              {[
                { title: "Immersive storytelling becomes conviction", desc: "Prospective buyers and renters can move through streets, homes, and amenity spaces using the same 3D models created during planning and design.", mini: "Emotional conviction + pre-sale deposits" },
                { title: "Configuration turns interest into action", desc: "Choose a lot, select a home, customize finishes, view total cost, and complete the transaction in a single integrated experience.", mini: "Velocity + capital efficiency" }
              ].map((call, i) => (
                <motion.div
                  key={i}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.8, delay: 0.2 + i * 0.1, ease: [0.16, 1, 0.3, 1] }}
                  className="group relative p-7 md:p-10 rounded-[24px] bg-white border border-black/5 overflow-hidden transition-all hover:bg-slate-50 hover:border-black/10 shadow-sm border-l-4 border-l-[#4179F2]"
                >
                  <div className="transition-all duration-500 ease-out group-hover:pl-8">
                    <h5 className="text-[20px] font-extrabold tracking-[-0.4px] text-slate-900 mb-3">{call.title}</h5>
                    <p className="text-[14px] leading-[1.65] text-slate-500 max-w-[500px]">{call.desc}</p>
                    <div className="mt-6 text-[10px] font-bold tracking-[0.12em] uppercase text-[#4179F2]">{call.mini}</div>
                  </div>
                </motion.div>
              ))}
            </div>
          </motion.div>

          {/* Immersive Visual */}
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 1.2 }}
            className="relative min-h-[460px] rounded-[28px] overflow-hidden border border-white/5 bg-gradient-to-br from-[#AA3DAD]/15 to-[#4179F2]/10 shadow-2xl"
          >
            <div className="absolute left-6 top-6 text-[11px] font-bold tracking-[0.08em] uppercase text-[#6BCEFF] z-10">
              Immersive 3D Walkthrough Visual
            </div>

            {/* Inner Screen */}
            <div className="absolute inset-[54px] rounded-[20px] border border-white/10 bg-gradient-to-b from-[#6BCEFF]/12 to-[#0C007A]/18 overflow-hidden">
              <div className="absolute inset-0 bg-gradient-to-b from-transparent via-transparent to-black/35" />
              <div className="absolute inset-0 [background-image:radial-gradient(circle_at_50%_35%,rgba(255,255,255,0.18),transparent_18%)]" />

              {/* 3D Grid Perspective */}
              <div className="absolute left-[8%] right-[8%] bottom-[14%] h-[28%] [background-image:linear-gradient(rgba(255,255,255,0.08)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.08)_1px,transparent_1px)] [background-size:28px_28px] [transform:perspective(600px)_rotateX(70deg)]" />

              {/* Animated Pins */}
              <motion.div
                animate={{ scale: [1, 1.2, 1], opacity: [0.8, 1, 0.8] }}
                transition={{ duration: 3, repeat: Infinity }}
                className="absolute left-[28%] top-[36%] w-[18px] h-[18px] rounded-full bg-[#FFE366] shadow-[0_0_0_6px_rgba(255,227,102,0.14)]"
              />
              <motion.div
                animate={{ scale: [1.2, 1, 1.2], opacity: [1, 0.8, 1] }}
                transition={{ duration: 3.5, repeat: Infinity }}
                className="absolute left-[52%] top-[48%] w-[18px] h-[18px] rounded-full bg-[#6BCEFF] shadow-[0_0_0_6px_rgba(107,206,255,0.14)]"
              />
              <motion.div
                animate={{ scale: [1, 1.1, 1], opacity: [0.7, 0.9, 0.7] }}
                transition={{ duration: 4, repeat: Infinity }}
                className="absolute left-[68%] top-[34%] w-[18px] h-[18px] rounded-full bg-[#AA3DAD] shadow-[0_0_0_6px_rgba(170,61,173,0.14)]"
              />
            </div>
          </motion.div>
        </div>
      </div>

      {/* Divider */}
      <div className="absolute bottom-0 left-0 right-0 h-[1px] bg-gradient-to-r from-transparent via-white/5 to-transparent" />
    </section>
  );
};
