"use client";

import React from "react";
import { motion } from "framer-motion";

export const AcquisitionsPhase = () => {
  return (
    <section className="py-[140px] relative overflow-hidden bg-[#F0EDEB]">
      {/* Subtle Luminous Glows */}
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_right,rgba(214,195,165,0.4),transparent_50%)] pointer-events-none" />
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
      </div>
      <div className="container mx-auto px-6 md:px-12 max-w-[1200px]">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="flex flex-col md:flex-row justify-between items-end gap-5 mb-12"
        >
          <div>
            <p className="text-[11px] font-bold uppercase tracking-[0.15em] text-[#4179F2] mb-4">Phase 1 — Acquisitions</p>
            <motion.h3
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 1, ease: [0.16, 1, 0.3, 1] }}
              className="text-[clamp(32px,4vw,56px)] font-extrabold leading-[1.1] tracking-[-2px] text-slate-900 max-w-[720px]"
            >
              From finding land to knowing exactly what to build on it.
            </motion.h3>
          </div>
          <p className="max-w-[520px] text-[15px] leading-[1.7] text-slate-600">
            Humanly compresses the earliest, riskiest part of development by combining proprietary land intelligence, rapid design modelling, collaborative entitlement, and disciplined product planning into one integrated acquisition engine.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-[26px]">
          {[
            { title: "Faster land discovery", desc: "AI surfaces off-market parcels that meet buy criteria and reduces dependence on slow, expensive broker-driven sourcing.", mini: "Better inputs at the start", color: "bg-[#D6C3A5]" },
            { title: "Design clarity from day one", desc: "Market intelligence feeds test-fit models and a repeatable kit of parts so the site is understood before time and money are wasted.", mini: "Less ambiguity, faster decisions", color: "bg-[#4179F2]" },
            { title: "Entitlement through transparency", desc: "Shared 3D visualizations align municipalities, planners, and communities earlier in the process to build trust and reduce friction.", mini: "Trust built, not bought", color: "bg-[#AA3DAD]" },
            { title: "Disciplined basis, better mix", desc: "Density, lease strategy, and product mix are defined with precision, improving long-term land value and reducing avoidable soft costs.", mini: "Stronger economics before construction", color: "bg-[#6BCEFF]" }
          ].map((card, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, delay: i * 0.1, ease: [0.16, 1, 0.3, 1] }}
              className="group relative p-8 md:p-12 rounded-[24px] bg-white/60 border border-black/5 overflow-hidden backdrop-blur-xl transition-all hover:bg-white/80 hover:border-black/10 shadow-sm border-l-4 border-l-[#D6C3A5]"
            >
              <div className="transition-all duration-500 ease-out group-hover:pl-8">
                <div className={`absolute -top-5 -right-5 w-[110px] h-[110px] rounded-full blur-[70px] opacity-10 ${card.color}`} />
                <h4 className="text-[22px] font-extrabold tracking-[-0.6px] text-slate-900 mb-4">{card.title}</h4>
                <p className="text-[14px] leading-[1.7] text-slate-500 max-w-[400px]">{card.desc}</p>
                <div className="mt-8 text-[10px] font-bold tracking-[0.12em] uppercase text-[#D6C3A5]">{card.mini}</div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Phase Visual Placeholder */}
        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          className="mt-[26px] relative min-h-[320px] rounded-[24px] overflow-hidden border border-white/5 bg-gradient-to-br from-[#4179F2]/10 to-[#0C007A]/20 shadow-2xl"
        >
          <div className="absolute left-6 top-6 text-[11px] font-bold tracking-[0.08em] uppercase text-slate-900">
            3D Site Model / Design Kit Render
          </div>
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_20%_30%,rgba(107,206,255,0.18),transparent_20%),radial-gradient(circle_at_75%_60%,rgba(255,97,54,0.16),transparent_22%)]" />

          <div className="absolute inset-4 rounded-[18px] border border-white/5 [background-image:linear-gradient(rgba(255,255,255,0.04)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.04)_1px,transparent_1px)] [background-size:36px_36px]">
            {/* Abstract Site Blocks */}
            <div className="absolute left-[8%] top-[22%] w-[20%] h-[18%] rounded-[14px] border border-white/10 bg-white/5" />
            <div className="absolute left-[34%] top-[18%] w-[18%] h-[26%] rounded-[14px] border border-white/10 bg-white/5" />
            <div className="absolute left-[58%] top-[26%] w-[24%] h-[14%] rounded-[14px] border border-white/10 bg-white/5" />
            <div className="absolute left-[20%] top-[54%] w-[28%] h-[18%] rounded-[14px] border border-white/10 bg-white/5" />
            <div className="absolute left-[54%] top-[52%] w-[18%] h-[22%] rounded-[14px] border border-white/10 bg-white/5" />
          </div>
        </motion.div>
      </div>

      {/* Divider */}
      <div className="absolute bottom-0 left-0 right-0 h-[1px] bg-gradient-to-r from-transparent via-white/5 to-transparent" />
    </section>
  );
};
