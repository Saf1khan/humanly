"use client";

import React from 'react';
import { motion } from 'framer-motion';

const flowSteps = ['Community', 'Home Buying', 'Home Financing', 'Home Insurance'];

const serviceCards = [
  { title: 'Healthcare', desc: 'Preventative / Proactive, On-call Consultants, Emotional Intelligence Programs', accent: '#1a4f82' },
  { title: 'Wellness', desc: 'AI-Enabled Fitness, Pro Sports Ambassador Events, Fitness Studios & Programs, Pool & Spa', accent: '#0d7d6a' },
  { title: 'Food', desc: 'Restaurant, Food Market, Commercial Garden', accent: '#d96a2b' },
  { title: 'Education', desc: 'AI-Based Learning Lab, AI Tutoring, Weekly Workshops, Continuous Learning Programs', accent: '#5b3f9e' },
  { title: 'General', desc: 'Home Maintenance, Landscaping, Housekeeping, Dog Park / Pet Services', accent: '#3a7d44' },
  { title: 'Entertainment', desc: 'Movie Theater, Music Events, Daily Events & Activities', accent: '#f09050' },
  { title: 'Transportation', desc: 'Autonomous Car Service, Ride Sharing, Trail Systems', accent: '#5ba3e0' },
  { title: 'Work & Business', desc: 'Shared & Private Office Space, Conference Rooms, Daycare Services', accent: '#c9a227' },
];

const OSTransactionIntegration = () => {
  return (
    <section className="bg-[#4C5C68] py-[clamp(4rem,10vw,8rem)] relative overflow-hidden">
      {/* Ambient glow */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[800px] h-[400px] bg-gradient-to-b from-[#1a4f82]/20 to-transparent blur-[100px] pointer-events-none"></div>

      <div className="max-w-[1280px] mx-auto px-6 md:px-12 relative z-10">

        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="mb-16"
        >
          <p className="text-[10px] font-medium tracking-[0.2em] uppercase text-[#aeb6be] mb-6">
            p17 / TRANSACTION INTEGRATION
          </p>
          <div className="h-[2px] rounded-full w-[80px] bg-gradient-to-r from-[#1a4f82] via-[#2d7dd2] to-[#d96a2b] mb-8"></div>
          <h2 className="font-serif text-[clamp(2.5rem,4vw,3.5rem)] font-normal leading-[1.1] text-white text-balance drop-shadow-sm">
            Transaction Integration
          </h2>
        </motion.div>

        {/* Flow Steps with arrows */}
        <div className="mb-8 relative">
          {/* Labels */}
          <div className="flex justify-between mb-4">
            <span className="text-[0.75rem] font-semibold tracking-[0.12em] uppercase text-emerald-400">$ Resident Payment ↑</span>
            <span className="text-[0.75rem] font-semibold tracking-[0.12em] uppercase text-[#d96a2b]">$ Revenue Flow ↓ ←</span>
          </div>

          <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 items-center">
            {flowSteps.map((step, idx) => (
              <motion.div
                key={idx}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: idx * 0.1, duration: 0.5 }}
                className="relative group"
              >
                <div className="bg-white/5 backdrop-blur-md border border-white/10 rounded-2xl p-5 text-center hover:bg-white/10 hover:border-white/20 transition-all duration-300 shadow-[0_4px_20px_rgba(0,0,0,0.15)]">
                  <span className="text-[0.65rem] font-bold tracking-[0.15em] uppercase text-[#aeb6be] mb-2 block">Step {idx + 1}</span>
                  <h4 className="font-serif text-white text-[1.05rem] font-normal">{step}</h4>
                </div>
                {/* Arrow connector */}
                {idx < flowSteps.length - 1 && (
                  <div className="hidden lg:flex absolute top-1/2 -right-[0.9rem] -translate-y-1/2 z-10 w-5 h-5 items-center justify-center">
                    <span className="text-[#2d7dd2] text-xl font-bold">→</span>
                  </div>
                )}
              </motion.div>
            ))}
          </div>
        </div>

        {/* Subscription Services Grid */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.3 }}
          className="relative"
        >
          {/* Outer Glow Container */}
          <div className="absolute -inset-[1px] bg-gradient-to-br from-[#1a4f82]/30 via-transparent to-[#d96a2b]/30 rounded-[2rem] blur-sm pointer-events-none"></div>

          <div className="relative bg-black/20 backdrop-blur-xl border border-white/10 rounded-[2rem] p-8 shadow-[0_20px_60px_rgba(0,0,0,0.3)]">
            {/* Grid header */}
            <div className="flex items-center gap-3 mb-8">
              <div className="h-[2px] flex-1 bg-gradient-to-r from-transparent to-white/10"></div>
              <span className="text-[0.65rem] font-bold tracking-[0.2em] uppercase text-[#aeb6be]">Subscription Services</span>
              <div className="h-[2px] flex-1 bg-gradient-to-l from-transparent to-white/10"></div>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
              {serviceCards.map((card, idx) => (
                <motion.div
                  key={idx}
                  initial={{ opacity: 0, scale: 0.95 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  viewport={{ once: true }}
                  transition={{ delay: idx * 0.07, duration: 0.4 }}
                  className="group relative bg-white/5 hover:bg-white/10 border border-white/5 hover:border-white/20 rounded-2xl p-5 min-h-[160px] transition-all duration-300 overflow-hidden cursor-default"
                  style={{ borderTop: `2px solid ${card.accent}` }}
                >
                  {/* Subtle inner glow on hover */}
                  <div
                    className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500 rounded-2xl"
                    style={{ background: `radial-gradient(circle at top left, ${card.accent}15, transparent 70%)` }}
                  ></div>

                  <h5 className="font-serif text-white text-[1rem] mb-2 relative z-10">{card.title}</h5>
                  <p className="text-[0.8rem] text-[#94a3b8] leading-relaxed relative z-10 font-light">{card.desc}</p>
                </motion.div>
              ))}
            </div>
          </div>
        </motion.div>

      </div>
    </section>
  );
};

export default OSTransactionIntegration;
