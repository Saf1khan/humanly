"use client";

import React, { useState } from 'react';
import { motion } from 'framer-motion';

const features = [
  "Access to embedded financial services and support",
  "Integrated mortgage and insurance products",
  "Financial literacy programs",
  "Structured wealth programs yielding real outcomes",
  "Financial stewardship and accountability",
  "Favorable HELOC and debt restructuring support",
];

const EASE_OUT = [0.16, 1, 0.3, 1] as const;

const OSServicesQuote = () => {
  const [hoveredItem, setHoveredItem] = useState<number | null>(null);

  return (
    <section className="bg-[#4C5C68] py-[clamp(4rem,8vw,7rem)] relative overflow-hidden">
      {/* Single directional glow — top right, not a massive blob */}
      <div
        className="absolute top-0 right-0 w-[480px] h-[480px] pointer-events-none"
        style={{
          background: 'radial-gradient(ellipse at top right, rgba(217,106,43,0.12) 0%, transparent 65%)',
        }}
      />
      <div
        className="absolute bottom-0 left-0 w-[360px] h-[360px] pointer-events-none"
        style={{
          background: 'radial-gradient(ellipse at bottom left, rgba(26,79,130,0.1) 0%, transparent 65%)',
        }}
      />

      <div className="max-w-[1240px] mx-auto px-6 md:px-12 relative z-10">

        {/* Section header */}
        <motion.div
          initial={{ opacity: 0, y: 18 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.65, ease: EASE_OUT }}
          className="mb-14"
        >
          <p className="text-[10px] font-medium tracking-[0.22em] uppercase text-[#aeb6be] mb-5">
            p15b / FINANCIAL PILLARS
          </p>
          <div className="h-[2px] rounded-full w-[80px] bg-gradient-to-r from-[#1a4f82] via-[#2d7dd2] to-[#d96a2b]" />
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-[1.1fr_0.9fr] gap-12 lg:gap-20 items-start">

          {/* Left: Feature list */}
          <motion.div
            initial={{ opacity: 0, x: -24 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.65, ease: EASE_OUT }}
            className="flex flex-col gap-2"
          >
            {features.map((item, idx) => (
              <motion.div
                key={idx}
                initial={{ opacity: 0, y: 12 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: idx * 0.07, duration: 0.5, ease: EASE_OUT }}
                onMouseEnter={() => setHoveredItem(idx)}
                onMouseLeave={() => setHoveredItem(null)}
                className="relative flex items-center gap-4 rounded-2xl p-5 cursor-default overflow-hidden"
              >
                {/* Animated background */}
                <motion.div
                  className="absolute inset-0 rounded-2xl"
                  animate={{
                    backgroundColor: hoveredItem === idx
                      ? 'rgba(0,0,0,0.28)'
                      : 'rgba(0,0,0,0.12)',
                  }}
                  transition={{ duration: 0.3, ease: 'easeOut' }}
                />

                {/* Animated border */}
                <motion.div
                  className="absolute inset-0 rounded-2xl pointer-events-none"
                  style={{ border: '1px solid' }}
                  animate={{
                    borderColor: hoveredItem === idx
                      ? 'rgba(217,106,43,0.35)'
                      : 'rgba(255,255,255,0.06)',
                  }}
                  transition={{ duration: 0.3, ease: 'easeOut' }}
                />

                {/* Dot indicator */}
                <div className="relative z-10 flex-shrink-0">
                  <motion.div
                    className="w-[10px] h-[10px] rounded-full"
                    animate={{
                      backgroundColor: hoveredItem === idx ? '#d96a2b' : 'rgba(217,106,43,0.35)',
                      boxShadow: hoveredItem === idx
                        ? '0 0 10px rgba(217,106,43,0.6)'
                        : '0 0 0px rgba(217,106,43,0)',
                    }}
                    transition={{ duration: 0.3, ease: 'easeOut' }}
                  />
                </div>

                {/* Text */}
                <motion.p
                  className="relative z-10 text-[1rem] font-light leading-snug"
                  animate={{
                    color: hoveredItem === idx ? '#ffffff' : 'rgba(226,232,240,0.8)',
                  }}
                  transition={{ duration: 0.3, ease: 'easeOut' }}
                >
                  {item}
                </motion.p>
              </motion.div>
            ))}
          </motion.div>

          {/* Right: Glassmorphic Quote */}
          <motion.div
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7, delay: 0.2, ease: EASE_OUT }}
            className="relative lg:sticky lg:top-28"
          >
            {/* Outer glow halo */}
            <div
              className="absolute -inset-px rounded-[2rem] pointer-events-none"
              style={{
                background: 'linear-gradient(135deg, rgba(217,106,43,0.2) 0%, transparent 60%, rgba(26,79,130,0.15) 100%)',
                filter: 'blur(1px)',
              }}
            />

            <div
              className="relative rounded-[2rem] p-10 lg:p-12 overflow-hidden"
              style={{
                background: 'rgba(0,0,0,0.22)',
                backdropFilter: 'blur(24px)',
                border: '1px solid rgba(255,255,255,0.09)',
                boxShadow: '0 24px 80px rgba(0,0,0,0.3), inset 0 1px 0 rgba(255,255,255,0.06)',
              }}
            >
              {/* Inner ambient light */}
              <div
                className="absolute inset-0 pointer-events-none"
                style={{
                  background: 'radial-gradient(ellipse 70% 50% at 50% 0%, rgba(217,106,43,0.07), transparent 70%)',
                }}
              />

              {/* Large decorative quote mark */}
              <div
                className="absolute -top-2 left-8 font-serif text-[7rem] leading-none select-none pointer-events-none"
                style={{ color: 'rgba(217,106,43,0.08)' }}
              >
                "
              </div>

              {/* Quote text */}
              <blockquote
                className="relative z-10 font-serif italic text-white leading-[1.65] m-0"
                style={{ fontSize: 'clamp(1.25rem, 2.2vw, 1.75rem)' }}
              >
                "The resident journey is not charity. It is the flywheel. The human story. The trajectory change. The before and after. The result is compounding wealth, health, education, and connection."
              </blockquote>

              {/* Attribution rule */}
              <div className="mt-8 pt-6 border-t border-white/[0.07] flex items-center gap-3 relative z-10">
                <div
                  className="w-8 h-[2px] rounded-full"
                  style={{ background: 'linear-gradient(90deg, #d96a2b, #1a4f82)' }}
                />
                <span className="text-[0.65rem] font-semibold tracking-[0.18em] uppercase text-[#7a8a96]">
                  HumanlyOS® Philosophy
                </span>
              </div>
            </div>
          </motion.div>

        </div>
      </div>
    </section>
  );
};

export default OSServicesQuote;
