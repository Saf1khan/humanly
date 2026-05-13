"use client";

import React from "react";
import { motion } from "framer-motion";
import Image from "next/image";

export const CProofOfConcept = () => {
  return (
    <section className="bg-[#0e1b26] overflow-hidden relative">
      <div className="relative w-full min-h-[560px] overflow-hidden">
        {/* CSS aerial render fallback (visible as background) */}
        <div className="absolute inset-0 z-0 bg-gradient-to-br from-[#1a3a52] via-[#0e2233] to-[#0d1e1a] overflow-hidden">
          {/* SVG grid of "lots" drawn in CSS */}
          <div 
            className="absolute inset-0 opacity-[0.12]"
            style={{
              backgroundImage: `
                repeating-linear-gradient(0deg, #2d7dd2 0, #2d7dd2 1px, transparent 1px, transparent 48px),
                repeating-linear-gradient(90deg, #2d7dd2 0, #2d7dd2 1px, transparent 1px, transparent 64px)
              `
            }}
          />
          {/* Roads */}
          <div className="absolute inset-0 opacity-[0.18] bg-[linear-gradient(90deg,transparent_32%,#3daf98_32.5%,#3daf98_33%,transparent_33%),linear-gradient(90deg,transparent_62%,#3daf98_62.5%,#3daf98_63%,transparent_63%),linear-gradient(0deg,transparent_44%,#3daf98_44.5%,#3daf98_45%,transparent_45%),linear-gradient(0deg,transparent_70%,#3daf98_70.5%,#3daf98_71%,transparent_71%)]" />
          {/* Lake */}
          <div className="absolute right-[14%] top-[28%] w-[180px] h-[120px] rounded-[50%_60%_40%_55%] blur-[2px] bg-radial-ellipse from-[#2d7dd28c] via-[#1a4f824d] to-transparent" />
        </div>

        {/* Real aerial image layered on top */}
        <Image
          src="https://images.unsplash.com/photo-1449844908441-8829872d2607?w=1400&q=80"
          alt="Aerial master-planned community render showing homes, roads, and green space"
          fill
          className="object-cover object-center z-[4]"
          priority
        />

        <div className="absolute inset-0 bg-gradient-to-b from-[#0e1b2673] via-[#0e1b261a] to-[#0e1b268c] z-[5]" />

        <div className="absolute inset-0 z-[6] flex items-end p-6 lg:p-10 flex-wrap gap-6 justify-between">
          {/* Overlay gradient card */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="bg-gradient-to-br from-[#5b3f9ef2] to-[#1a4f82f2] rounded-[20px] p-7 lg:p-8 max-w-[480px] shadow-[0_12px_40px_rgba(0,0,0,0.15)] backdrop-blur-[12px]"
          >
            <p className="text-[0.68rem] font-bold tracking-[0.14em] uppercase text-white/65 mb-2">
              Proof of Concept
            </p>
            <h2 className="text-[clamp(1.1rem,2vw,1.45rem)] font-normal text-white leading-[1.35] mb-4">
              Humanly® is breaking ground on one of the largest master-planned developments in the United States focused on workforce housing.
            </h2>
            <div className="flex flex-wrap gap-4 lg:gap-6">
              {[
                { num: "5,000+", label: "Planned Units" },
                { num: "1,000+", label: "Total Acres" },
                { num: "80–120%", label: "AMI Target" },
                { num: "2025", label: "Groundbreak" },
              ].map((stat, idx) => (
                <div key={idx} className="text-center first:pl-0 pl-4 border-l border-white/20 first:border-0">
                  <div className="text-[1.4rem] text-white leading-none">{stat.num}</div>
                  <div className="text-[0.68rem] text-white/60 tracking-wider mt-1">{stat.label}</div>
                </div>
              ))}
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.3 }}
            className="bg-[#3daf9833] border-[1.5px] border-[#3daf9880] rounded-[6px] px-3 py-1.5 text-[0.75rem] font-semibold text-[#3daf98] tracking-wider self-end"
          >
            Texas Flagship ↗
          </motion.div>
        </div>
      </div>
    </section>
  );
};
