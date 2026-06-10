"use client";

import React from "react";
import { motion } from "framer-motion";

export const CLease = () => {
  return (
    <section className="relative bg-transparent overflow-x-clip py-28 lg:py-40">
      {/* Violet radial gradient overlay */}
      <div
        className="absolute pointer-events-none right-0 top-1/5 translate-x-1/2 -translate-y-1/2 w-[clamp(44rem,14.769rem+116.923vw,120rem)] h-[clamp(25rem,8.654rem+65.385vw,67.5rem)]"
        style={{
          background:
            "radial-gradient(50% 50%, rgba(170, 61, 173, 0.10), rgba(170, 61, 173, 0.05) 50%, rgba(170, 61, 173, 0))",
        }}
      />
      <div
        className="absolute pointer-events-none left-0 bottom-0 -translate-x-1/2 translate-y-1/2 w-[clamp(44rem,14.769rem+116.923vw,120rem)] h-[clamp(25rem,8.654rem+65.385vw,67.5rem)]"
        style={{
          background:
            "radial-gradient(50% 50%, rgba(170, 61, 173, 0.15), rgba(170, 61, 173, 0.05) 50%, rgba(170, 61, 173, 0))",
        }}
      />
      <div className="max-w-[1280px] mx-auto px-6 lg:px-0">
        {/* Section Header */}
        <div className="mb-16 lg:mb-24 max-w-4xl">
          <h2 className="font-normal font-cormorant text-3xl md:text-5xl leading-[40px] md:leading-[60px] text-sandstone-500 mb-3 tracking-tight">
            The Ground Lease Advantage
          </h2>
          <p className="text-base md:text-lg font-light font-albert text-sandstone-500 leading-[28px] md:leading-[30px]">
            A structural model built for long-term value — for operators, investors, and residents.
          </p>
        </div>

        {/* Typographic Split Layout */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-16 lg:gap-24 pt-12 border-t border-slate-200/60">
          {/* Left Column: Big Stat & Editorial Comparison */}
          <div className="lg:col-span-5 space-y-10">
            <div>
              {/* Huge Serif Stat */}
              <div className="text-[108px] font-light font-bodoni text-sandstone-500/80 tracking-tight leading-none mb-4">
                ~70%
              </div>
              <p className="text-base md:text-lg font-albert font-light text-sandstone-500 leading-[28px] md:leading-[30px]">
                of lots retained on long-term ground lease instead of selling — preserving land value and alignment with residents.
              </p>
            </div>

            {/* Typographic Model Comparison */}
            <div className="space-y-4 pt-8 border-t border-slate-200/50 max-w-sm">
              <div className="flex items-baseline justify-between">
                <span className="font-albert text-xs font-semibold uppercase tracking-wider text-sandstone-500">01 / Sell Model</span>
                <span className="font-cormorant font-medium text-sm italic text-sandstone-500">Land sold, value exits</span>
              </div>
              <div className="flex items-baseline justify-between border-t border-slate-200/30 pt-3.5">
                <span className="font-albert text-xs font-semibold uppercase tracking-wider text-sandstone-500">02 / Lease Model ✓</span>
                <span className="font-cormorant text-sm italic text-[#1a4f82] font-medium">Land retained, value compounds</span>
              </div>
            </div>
          </div>

          {/* Right Column: Editorial Text Blocks with Line Dividers */}
          <div className="lg:col-span-7 space-y-12 lg:pl-16 lg:border-l lg:border-slate-200/60">
            {[
              {
                num: "Long-term Land Appreciation",
                title: "Value builds over decades, not just at sale",
                desc: "Retaining land creates a compounding asset base that appreciates with each community milestone — delivering durable returns for investors.",
                color: "#1a4f82",
              },
              {
                num: "Reduced Upfront Capital",
                title: "Buyers access homes at lower entry cost",
                desc: "Ground lease separates land cost from home cost, lowering the purchase barrier for workforce families and expanding the addressable market.",
                color: "#d96a2b",
              },
              {
                num: "Community Stability",
                title: "Alignment between operator and resident outcomes",
                desc: "When Humanly® retains the land, we remain invested in the community's long-term health — structurally aligned with resident and investor success.",
                color: "#0d7d6a",
              },
            ].map((benefit, index) => (
              <div key={index} className="space-y-3">
                <div className="flex items-center gap-4 mb-1">
                  <span 
                    className="font-bodoni text-base italic font-medium"
                    style={{ color: benefit.color }}
                  >
                    0{index + 1}
                  </span>
                  <span className="h-px flex-1 bg-slate-200/60" />
                </div>
                
                <h3 className="font-cormorant text-2xl md:text-3xl text-sandstone-500 font-normal tracking-tight">
                  {benefit.num}
                </h3>
                
                <p className="font-albert text-[10px] md:text-xs font-semibold tracking-widest text-sandstone-500 uppercase">
                  {benefit.title}
                </p>
                
                <p className="font-albert text-sm md:text-base font-light text-sandstone-500 leading-relaxed">
                  {benefit.desc}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};
