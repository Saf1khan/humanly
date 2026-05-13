"use client";

import React from "react";
import { motion } from "framer-motion";

export const CLease = () => {
  return (
    <section className="bg-white py-20 lg:py-32">
      <div className="max-w-[1200px] mx-auto px-6 lg:px-12">
        <div className="text-center mb-16 lg:mb-24">
          <div className="h-[3px] rounded-[2px] bg-gradient-to-r from-[#1a4f82] via-[#2d7dd2] to-[#d96a2b] w-[72px] mx-auto mb-4" />
          <h2 className="text-[clamp(1.75rem,3vw,2.5rem)] font-normal text-[#1a1a1a] mb-4">
            The Ground Lease Advantage
          </h2>
          <p className="text-[1rem] text-[#5a5a5a]">
            A structural model built for long-term value — for operators, investors, and residents.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-start">
          {/* Stat Card + Mini Diagram */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="bg-gradient-to-br from-[#1a4f82] via-[#2d7dd2] to-[#5b3f9e] rounded-[20px] p-8 lg:p-12 text-white shadow-[0_12px_40px_rgba(0,0,0,0.14)]"
          >
            <div className="text-[clamp(4rem,8vw,6rem)] font-normal leading-none mb-4">
              ~70%
            </div>
            <p className="text-[1rem] text-white/80 leading-[1.55] max-w-[32ch] mb-8">
              of lots retained on long-term ground lease instead of selling — preserving land value and alignment with residents.
            </p>

            <div className="flex gap-6 mt-4 w-full">
              {/* Sell Model */}
              <div className="flex-1 bg-white/10 rounded-[12px] p-4 text-center">
                <p className="text-[0.72rem] font-bold tracking-[0.1em] uppercase text-white/60 mb-4 font-sans">
                  Sell Model
                </p>
                <div className="flex items-end justify-center gap-1 h-20 mb-2">
                  <div className="w-7 h-20 bg-white/25 rounded-t-sm" />
                  <div className="w-7 h-5 bg-white/10 rounded-t-sm" />
                </div>
                <p className="text-[0.72rem] text-white/55">Land sold → value exits</p>
              </div>
              {/* Lease Model */}
              <div className="flex-1 bg-white/20 rounded-[12px] p-4 text-center border border-white/30">
                <p className="text-[0.72rem] font-bold tracking-[0.1em] uppercase text-white/60 mb-4 font-sans">
                  Lease Model ✓
                </p>
                <div className="flex items-end justify-center gap-1 h-20 mb-2">
                  <div className="w-7 h-12 bg-white/30 rounded-t-sm" />
                  <div className="w-7 h-20 bg-white/70 rounded-t-sm" />
                </div>
                <p className="text-[0.72rem] text-white/85 font-medium">Land retained → value compounds</p>
              </div>
            </div>
          </motion.div>

          {/* 3 Benefit Cards */}
          <div className="flex flex-col gap-6">
            {[
              {
                num: "01 — Long-term Land Appreciation",
                title: "Value builds over decades, not just at sale",
                desc: "Retaining land creates a compounding asset base that appreciates with each community milestone — delivering durable returns for investors.",
                borderColor: "#1a4f82",
              },
              {
                num: "02 — Reduced Upfront Capital",
                title: "Buyers access homes at lower entry cost",
                desc: "Ground lease separates land cost from home cost, lowering the purchase barrier for workforce families and expanding the addressable market.",
                borderColor: "#d96a2b",
              },
              {
                num: "03 — Community Stability",
                title: "Alignment between operator and resident outcomes",
                desc: "When Humanly® retains the land, we remain invested in the community's long-term health — structurally aligned with resident and investor success.",
                borderColor: "#0d7d6a",
              },
            ].map((benefit, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, x: 20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className="bg-[#f2f0eb] rounded-[12px] p-6 lg:p-8 border-l-4 shadow-[0_1px_4px_rgba(0,0,0,0.07)] transition-all duration-300 hover:-translate-y-[3px] hover:shadow-[0_4px_16px_rgba(0,0,0,0.1)]"
                style={{ borderLeftColor: benefit.borderColor }}
              >
                <p className="text-[0.72rem] font-bold tracking-[0.1em] uppercase text-[#5a5a5a] mb-[6px]">
                  {benefit.num}
                </p>
                <h3 className="text-[1.1rem] font-normal text-[#1a1a1a] mb-[6px]">
                  {benefit.title}
                </h3>
                <p className="text-[0.9375rem] text-[#5a5a5a] leading-[1.6]">
                  {benefit.desc}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};
