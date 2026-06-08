"use client";

import React from "react";
import { motion } from "framer-motion";

const housingTypes = [
  {
    label: "Manufactured",
    value: "35%",
    color: "#1a4f82",
    length: 351.86,
    gapLength: 348,
    offset: 0,
  },
  {
    label: "Modular",
    value: "30%",
    color: "#d96a2b",
    length: 301.59,
    gapLength: 298,
    offset: -351.86,
  },
  {
    label: "Multi-family",
    value: "25%",
    color: "#0d7d6a",
    length: 251.33,
    gapLength: 248,
    offset: -653.45,
  },
  {
    label: "Site-built",
    value: "10%",
    color: "#737373",
    length: 100.53,
    gapLength: 97,
    offset: -904.78,
  },
];

const callouts = [
  {
    color: "#1a4f82",
    polyline: "556.8,170 580,155 650,155",
    dot: { x: 650, y: 155 },
    labelPos: { left: "83.1%", top: "31%" },
    align: "left",
    value: "35%",
    label: "Manufactured",
  },
  {
    color: "#d96a2b",
    polyline: "445.5,420 460,425 650,425",
    dot: { x: 650, y: 425 },
    labelPos: { left: "83.1%", top: "85%" },
    align: "left",
    value: "30%",
    label: "Modular",
  },
  {
    color: "#0d7d6a",
    polyline: "230,295.5 210,325 150,325",
    dot: { x: 150, y: 325 },
    labelPos: { right: "83.1%", top: "65%" },
    align: "right",
    value: "25%",
    label: "Multi-family",
  },
  {
    color: "#737373",
    polyline: "345.6,82.6 330,75 150,75",
    dot: { x: 150, y: 75 },
    labelPos: { right: "83.1%", top: "15%" },
    align: "right",
    value: "10%",
    label: "Site-built",
  },
];

export const CHousingMix = () => {
  return (
    <section className="relative bg-transparent py-24 lg:py-40">
      {/* Violet radial gradient overlay */}
      <div
        className="absolute inset-0 pointer-events-none"
        style={{ background: "radial-gradient(ellipse at 20% 20%, rgba(170, 61, 173, 0.07) 0%, transparent 45%), radial-gradient(ellipse at 80% 80%, rgba(170, 61, 173, 0.07) 0%, transparent 45%)" }}
      />
      <div className="mx-auto max-w-[1280px] px-6 lg:px-0">
        <div className="grid grid-cols-1 lg:grid-cols-2 lg:gap-x-16 lg:gap-y-10">
          {/* Title */}
          <h2 className="lg:col-span-2 font-bodoni text-4xl font-bold tracking-normal text-[#1a1a1a] md:text-5xl leading-[1.15] max-w-4xl">
            Integrating Missing Middle Housing
          </h2>

          {/* Description full width */}
          <div className="lg:col-span-2">
            <p className="font-albert text-base font-normal text-[#5a5a5a] md:text-lg max-w-5xl md:leading-8">
              Every Humanly® community blends four proven housing types to
              maximize affordability, density, and resident choice — solving
              the fractured model that leaves workforce families without
              options.
            </p>
          </div>

          {/* Chart */}
          <div className="lg:col-start-2 lg:row-start-3 lg:row-span-2 flex items-center justify-center">
            {/* Desktop Chart */}
            <div className="relative mx-auto hidden aspect-[8/5] w-full max-w-[600px] lg:block md:-ml-40">
              <svg className="absolute inset-0 h-full w-full" viewBox="0 0 800 500">
                <circle
                  cx="400"
                  cy="250"
                  r="160"
                  fill="none"
                  stroke="#f1ede4"
                  strokeWidth="12"
                />

                <g transform="rotate(-90 400 250)">
                  {housingTypes.map((item, idx) => (
                    <motion.circle
                      key={`arc-${idx}`}
                      cx="400"
                      cy="250"
                      r="160"
                      fill="none"
                      stroke={item.color}
                      strokeWidth="12"
                      strokeDasharray={`${item.gapLength} 1005.3`}
                      strokeDashoffset={item.offset}
                      initial={{ strokeDasharray: `0 1005.3` }}
                      whileInView={{ strokeDasharray: `${item.gapLength} 1005.3` }}
                      viewport={{ once: true }}
                      transition={{
                        duration: 1.4,
                        delay: 0.2 + idx * 0.15,
                        ease: [0.22, 1, 0.36, 1],
                      }}
                    />
                  ))}
                </g>

                {callouts.map((call, idx) => (
                  <g key={`callout-${idx}`}>
                    <motion.polyline
                      points={call.polyline}
                      fill="none"
                      stroke="#cbd5e1"
                      strokeWidth="1.5"
                      initial={{ pathLength: 0 }}
                      whileInView={{ pathLength: 1 }}
                      viewport={{ once: true }}
                      transition={{ duration: 0.8, delay: 1 + idx * 0.2 }}
                    />
                    <motion.circle
                      cx={call.dot.x}
                      cy={call.dot.y}
                      r="4"
                      fill={call.color}
                      initial={{ scale: 0 }}
                      whileInView={{ scale: 1 }}
                      viewport={{ once: true }}
                      transition={{ duration: 0.3, delay: 1.6 + idx * 0.2 }}
                    />
                  </g>
                ))}
              </svg>

              <div className="pointer-events-none absolute inset-0 flex flex-col items-center justify-center">
                <div className="font-bodoni text-6xl font-light tracking-tight text-[#1a1a1a]">
                  4
                </div>
                <div className="font-albert mt-2 text-[10px] font-bold uppercase tracking-widest text-[#8a8a8a]">
                  Housing Types
                </div>
              </div>

              {callouts.map((call, idx) => (
                <motion.div
                  key={`label-${idx}`}
                  className={`absolute flex flex-col ${call.align === "right"
                      ? "items-end text-right"
                      : "items-start text-left"
                    }`}
                  style={{
                    ...call.labelPos,
                    transform: "translateY(-50%)",
                  }}
                  initial={{ opacity: 0, x: call.align === "right" ? 10 : -10 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.6, delay: 1.4 + idx * 0.2 }}
                >
                  <div className="font-bodoni text-4xl tracking-tight text-[#1a1a1a]">
                    {call.value}
                  </div>
                  <div className="font-albert mt-1 whitespace-nowrap text-xs font-bold uppercase tracking-widest text-[#5a5a5a]">
                    {call.label}
                  </div>
                </motion.div>
              ))}
            </div>

            {/* Mobile */}
            <div className="mx-auto mt-6 block w-full max-w-md space-y-12 lg:hidden">
              <div className="relative mx-auto flex aspect-square w-full max-w-[260px] items-center justify-center">
                <svg
                  className="relative h-full w-full -rotate-90 transform"
                  viewBox="0 0 400 400"
                >
                  <circle
                    cx="200"
                    cy="200"
                    r="160"
                    fill="none"
                    stroke="#f1ede4"
                    strokeWidth="12"
                  />
                  {housingTypes.map((item, idx) => (
                    <motion.circle
                      key={`mobile-arc-${idx}`}
                      cx="200"
                      cy="200"
                      r="160"
                      fill="none"
                      stroke={item.color}
                      strokeWidth="12"
                      strokeDasharray={`${item.gapLength} 1005.3`}
                      strokeDashoffset={item.offset}
                      initial={{ strokeDasharray: `0 1005.3` }}
                      whileInView={{ strokeDasharray: `${item.gapLength} 1005.3` }}
                      viewport={{ once: true }}
                      transition={{
                        duration: 1.4,
                        delay: 0.2 + idx * 0.15,
                        ease: [0.22, 1, 0.36, 1],
                      }}
                    />
                  ))}
                </svg>
                <div className="pointer-events-none absolute inset-0 flex flex-col items-center justify-center">
                  <div className="font-bodoni text-5xl font-light tracking-tight text-[#1a1a1a]">
                    4
                  </div>
                  <div className="font-albert mt-1 text-[9px] font-bold uppercase tracking-widest text-[#8a8a8a]">
                    Housing Types
                  </div>
                </div>
              </div>

              <div className="grid grid-cols-2 gap-x-6 gap-y-8">
                {callouts.map((type, index) => (
                  <div
                    key={`mobile-label-${index}`}
                    className="flex flex-col items-center text-center"
                  >
                    <div className="mb-3 flex h-8 w-8 items-center justify-center rounded-full border border-slate-200/60 bg-white shadow-sm">
                      <div
                        className="h-2.5 w-2.5 rounded-full"
                        style={{ backgroundColor: type.color }}
                      />
                    </div>
                    <div className="font-bodoni mb-1 text-4xl text-[#1a1a1a]">
                      {type.value}
                    </div>
                    <div className="font-albert text-[10px] font-bold uppercase tracking-widest text-[#5a5a5a]">
                      {type.label}
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Footer below chart, left side */}
          <motion.div
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.9, delay: 0.65 }}
            className="lg:col-start-1 lg:row-start-6 self-end lg:self-end justify-self-end"
          >
            <div className="font-cormorant text-lg italic text-[#1a1a1a] sm:text-xl max-w-xl">
              Designed to serve{" "}
              <span className="font-semibold text-[#1a4f82]">
                80–120% AMI
              </span>{" "}
              workforce families
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};