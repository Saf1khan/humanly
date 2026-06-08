"use client";

import React from "react";
import { motion } from "framer-motion";

export const CLease = () => {
  return (
    <section className="relative bg-transparent py-28 lg:py-40">
      {/* Violet radial gradient overlay */}
      <div
        className="absolute inset-0 pointer-events-none"
        style={{ background: "radial-gradient(ellipse at 80% 20%, rgba(170, 61, 173, 0.07) 0%, transparent 50%), radial-gradient(ellipse at 10% 80%, rgba(170, 61, 173, 0.06) 0%, transparent 45%)" }}
      />
      <div className="max-w-[1280px] mx-auto px-6 lg:px-0">
        {/* Section Header */}
        <div className="mb-16 lg:mb-24 max-w-4xl">
          <h2 className="font-normal font-cormorant text-3xl md:text-5xl leading-[40px] md:leading-[60px] text-[#1a1a1a] mb-3 tracking-tight">
            The Ground Lease Advantage
          </h2>
          <p className="text-base md:text-lg font-light font-albert text-[#5a5a5a] leading-[28px] md:leading-[30px]">
            A structural model built for long-term value — for operators, investors, and residents.
          </p>
        </div>

        {/* Typographic Split Layout */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-16 lg:gap-24 pt-12 border-t border-slate-200/60">
          {/* Left Column: Big Stat & Editorial Comparison */}
          <div className="lg:col-span-5 space-y-10">
            <div>
              {/* Huge Serif Stat */}
              <div className="text-[108px] font-light font-bodoni text-[#1a1a1a]/80 tracking-tight leading-none mb-4">
                ~70%
              </div>
              <p className="text-base md:text-lg font-albert font-medium text-[#4a4a4a] leading-relaxed">
                of lots retained on long-term ground lease instead of selling — preserving land value and alignment with residents.
              </p>
            </div>

            {/* Typographic Model Comparison */}
            <div className="space-y-4 pt-8 border-t border-slate-200/50 max-w-sm">
              <div className="flex items-baseline justify-between">
                <span className="font-albert text-xs font-semibold uppercase tracking-wider text-[#8a8a8a]">01 / Sell Model</span>
                <span className="font-cormorant text-sm italic text-[#8a8a8a]">Land sold, value exits</span>
              </div>
              <div className="flex items-baseline justify-between border-t border-slate-200/30 pt-3.5">
                <span className="font-albert text-xs font-semibold uppercase tracking-wider text-[#1a1a1a]">02 / Lease Model ✓</span>
                <span className="font-cormorant text-sm italic text-[#1a4f82] font-semibold">Land retained, value compounds</span>
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
                    className="font-cormorant text-xl italic font-semibold"
                    style={{ color: benefit.color }}
                  >
                    0{index + 1}
                  </span>
                  <span className="h-px flex-1 bg-slate-200/60" />
                </div>
                
                <h3 className="font-bodoni text-2xl md:text-3xl text-[#1a1a1a] font-normal tracking-tight">
                  {benefit.num}
                </h3>
                
                <p className="font-albert text-[10px] md:text-[11px] font-bold tracking-widest text-[#8a8a8a] uppercase">
                  {benefit.title}
                </p>
                
                <p className="font-albert text-sm md:text-base text-[#5a5a5a] leading-relaxed">
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
