"use client";

import React from "react";
import { motion } from "framer-motion";

export const PlatformHero = () => {
  return (
    <section
      className="relative min-h-screen flex items-center overflow-hidden pt-[120px] pb-[120px]"
      style={{
        background: `
          radial-gradient(circle at top center, rgba(35, 90, 255, 0.18) 0%, transparent 32%),
          radial-gradient(circle at bottom left, rgba(214,195,165,0.08) 0%, transparent 30%),
          linear-gradient(180deg, #02040A 0%, #050816 35%, #070B14 70%, #0A0F1C 100%)
        `
      }}
    >
      {/* Background Image with Intelligence Overlay */}
      <div className="absolute inset-0 z-0 overflow-hidden">
        <img
          src="/images/AdobeStock_152634981.jpeg"
          alt="Aerial neighborhood"
          className="w-full h-full object-cover scale-105"
        />
        {/* Intelligence Grid Overlay */}
        <div className="absolute inset-0 bg-black/40 backdrop-blur-[1px]" />
        <svg className="absolute inset-0 w-full h-full opacity-30 pointer-events-none">
          <defs>
            <pattern id="grid" width="100" height="100" patternUnits="userSpaceOnUse">
              <path d="M 100 0 L 0 0 0 100" fill="none" stroke="white" strokeWidth="0.5" />
            </pattern>
          </defs>
          <rect width="100%" height="100%" fill="url(#grid)" />
          {/* Animated Scanning Line */}
          <motion.rect
            width="100%" height="2" fill="rgba(107, 206, 255, 0.4)"
            animate={{ y: ["0%", "100%"] }}
            transition={{ duration: 8, repeat: Infinity, ease: "linear" }}
          />
        </svg>

        {/* Floating Data Nodes */}
        <div className="absolute inset-0 pointer-events-none">
          {[
            { top: '25%', left: '30%', label: 'Site Analytics' },
            { top: '60%', left: '75%', label: 'Energy Loop' },
            { top: '45%', left: '55%', label: 'Resident Flow' },
          ].map((node, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0 }}
              animate={{ opacity: [0, 1, 0] }}
              transition={{ duration: 4, delay: i * 1.5, repeat: Infinity }}
              className="absolute flex items-center gap-3"
              style={{ top: node.top, left: node.left }}
            >
              <div className="size-2 rounded-full bg-[#6BCEFF] shadow-[0_0_12px_#6BCEFF]" />
              <div className="px-2 py-1 rounded bg-black/40 border border-white/10 backdrop-blur-md">
                <span className="text-[9px] font-bold text-white/70 uppercase tracking-widest">{node.label}</span>
              </div>
            </motion.div>
          ))}
        </div>

        <div className="absolute inset-0 bg-gradient-to-b from-[#02040A]/20 via-transparent to-[#0A0F1C]/30" />
      </div>

      {/* Animated Orbs */}
      <motion.div
        animate={{
          translate: [0, -30, 20, 0],
          translateY: [0, -20, 15, 0]
        }}
        transition={{ duration: 15, repeat: Infinity, ease: "easeInOut" }}
        className="absolute w-[500px] h-[500px] rounded-full blur-[80px] pointer-events-none opacity-30"
        style={{
          background: "radial-gradient(circle, rgba(65, 121, 242, 0.3), transparent 70%)",
          top: "-15%",
          left: "-10%"
        }}
      />
      <motion.div
        animate={{
          translate: [0, 25, -15, 0],
          translateY: [0, -15, 25, 0]
        }}
        transition={{ duration: 18, repeat: Infinity, ease: "easeInOut" }}
        className="absolute w-[420px] h-[420px] rounded-full blur-[80px] pointer-events-none opacity-20"
        style={{
          background: "radial-gradient(circle, rgba(170, 61, 173, 0.2), transparent 70%)",
          top: "38%",
          right: "-8%"
        }}
      />

      <div className="container mx-auto px-6 lg:px-12 max-w-[1200px] relative z-10 backdrop-blur-sm">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-start">
          <motion.div
            initial={{ opacity: 0, x: -60 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 1.2, ease: [0.16, 1, 0.3, 1] }}
          >
            <p className="text-[11px] font-bold uppercase tracking-[0.15em] text-[#4179F2] mb-4">
              The Platform
            </p>
            <div className="h-[2px] w-[74px] bg-gradient-to-r from-[#4179F2] via-[#0C007A] to-[#FF6136] rounded-[1px] mb-8" />

            <h1 className="text-[clamp(40px,7vw,88px)] font-extrabold leading-[1.02] tracking-[-3px] text-white">
              Disrupting residential real estate development and management.
            </h1>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 60 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 1.2, delay: 0.1, ease: [0.16, 1, 0.3, 1] }}
            className="lg:pt-[120px]"
          >
            <p className="text-[clamp(16px,1.2vw,20px)] font-normal leading-[1.7] text-white/80 max-w-[580px]">
              Traditional development is a series of handoffs.
              <span className="text-white block mt-2 font-semibold">Humanly is a recursive loop.</span>
              <br />
              By integrating the full stack—from AI-driven site selection to tech-enabled community management—we turn every operational data point into a catalyst for the next phase of value creation.
            </p>
          </motion.div>
        </div>
      </div>

      {/* User Guidance: Scroll Indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 2, duration: 1 }}
        className="absolute bottom-12 left-1/2 -translate-x-1/2 flex flex-col items-center gap-3 z-20 pointer-events-none"
      >
        <span className="text-[9px] font-bold uppercase tracking-[0.2em] text-white/30">Explore the Intelligence</span>
        <motion.div
          animate={{ y: [0, 8, 0] }}
          transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
          className="w-px h-12 bg-gradient-to-b from-[#4179F2] to-transparent"
        />
      </motion.div>
    </section>
  );
};
