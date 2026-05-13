"use client";

import React from "react";
import { motion } from "framer-motion";

const housingTypes = [
  { label: "Manufactured", pct: "35%", color: "#1a4f82", offset: 0, length: 219.9 },
  { label: "Modular", pct: "30%", color: "#2d7dd2", offset: -219.9, length: 188.5 },
  { label: "Multi-family", pct: "25%", color: "#d96a2b", offset: -408.4, length: 157.1 },
  { label: "Site-built", pct: "10%", color: "#3daf98", offset: -565.4, length: 62.8 },
];

export const CHousingMix = () => {
  return (
    <section className="bg-white py-20 lg:py-32">
      <div className="max-w-[1200px] mx-auto px-6 lg:px-12">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <div className="h-[3px] rounded-[2px] bg-gradient-to-r from-[#1a4f82] via-[#2d7dd2] to-[#d96a2b] w-[72px] mb-4" />
            <h2 className="text-[clamp(1.75rem,3vw,2.5rem)] font-normal text-[#1a1a1a] mt-4">
              Missing-middle housing, by design.
            </h2>
            <p className="text-[#5a5a5a] leading-[1.72] mt-4 max-w-[68ch]">
              Every Humanly® community blends four proven housing types to maximize affordability,
              density, and resident choice — solving the fractured model that leaves workforce
              families without options.
            </p>
            <div className="mt-6 p-[1rem_1.25rem] bg-[#1a4f820f] border-l-[3px] border-[#1a4f82] rounded-r-[6px] text-[0.88rem] text-[#5a5a5a] italic">
              Planned product mix — designed to serve 80–120% AMI workforce families
            </div>
          </motion.div>

          <div className="flex flex-col items-center gap-8">
            {/* SVG Donut Chart */}
            <div className="relative w-[280px] h-[280px]">
              <svg className="w-[280px] h-[280px] rotate-[-90deg]" viewBox="0 0 280 280">
                <circle cx="140" cy="140" r="100" fill="none" stroke="#e8e4dd" strokeWidth="40" />
                {housingTypes.map((type, idx) => (
                  <motion.circle
                    key={idx}
                    cx="140"
                    cy="140"
                    r="100"
                    fill="none"
                    stroke={type.color}
                    strokeWidth="40"
                    strokeDasharray={`${type.length} 628.3`}
                    strokeDashoffset={type.offset}
                    initial={{ strokeDasharray: "0 628.3" }}
                    whileInView={{ strokeDasharray: `${type.length} 628.3` }}
                    viewport={{ once: true }}
                    transition={{ duration: 1, delay: 0.3 + idx * 0.1 }}
                  />
                ))}
              </svg>
              <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 text-center">
                <div className="text-[2.2rem] text-[#1a1a1a] leading-none">4</div>
                <div className="text-[0.72rem] text-[#5a5a5a] tracking-[0.06em] uppercase mt-[3px]">
                  Housing
                  <br />
                  Types
                </div>
              </div>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-[0.85rem_1.5rem] w-full max-w-[320px]">
              {housingTypes.map((type, idx) => (
                <div key={idx} className="flex items-center gap-[0.6rem]">
                  <span className="w-3 h-3 rounded-full flex-shrink-0" style={{ backgroundColor: type.color }} />
                  <span className="text-[0.85rem] text-[#1a1a1a]">{type.label}</span>
                  <span className="text-[0.85rem] font-bold text-[#5a5a5a] ml-auto">{type.pct}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
