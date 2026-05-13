"use client";

import React from "react";
import { motion } from "framer-motion";

const outcomes = [
  { id: "01", text: "Providing access to high-quality attainable housing", dotColor: "#1a4f82" },
  { id: "02", text: "Democratizing access to integrated life-enhancing services", dotColor: "#0d7d6a" },
  { id: "03", text: "Fostering human connection through community design", dotColor: "#d96a2b" },
  { id: "04", text: "Easing the burden of daily tasks through a resident AI navigator", dotColor: "#5b3f9e" },
  { id: "05", text: "Promoting sustained home and community value", dotColor: "#2d7dd2" },
  { id: "06", text: "Self-improving communities via HumanlyOS®", dotColor: "#3daf98" },
];

export const COutcomes = () => {
  return (
    <section className="bg-[#f2f0eb] py-20 lg:py-32">
      <div className="max-w-[1200px] mx-auto px-6 lg:px-12">
        <div className="mb-10">
          <div className="h-[3px] rounded-[2px] bg-gradient-to-r from-[#1a4f82] via-[#2d7dd2] to-[#d96a2b] w-[72px]" />
          <h2 className="text-[clamp(1.75rem,3vw,2.5rem)] font-normal text-[#1a1a1a] mt-4">
            Built to deliver outcomes, not just housing.
          </h2>
        </div>

        <ul className="flex flex-col">
          {outcomes.map((outcome, index) => (
            <motion.li
              key={outcome.id}
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="group flex items-center gap-6 py-6 border-b border-black/10 first:border-t border-black/10 cursor-default transition-all duration-300 hover:pl-4"
            >
              <span
                className="w-[10px] h-[10px] rounded-full flex-shrink-0"
                style={{ backgroundColor: outcome.dotColor }}
              />
              <span className="text-[0.75rem] font-bold text-[#5a5a5a] tracking-wider min-w-[24px]">
                {outcome.id}
              </span>
              <span className="text-[1.0625rem] font-normal text-[#1a1a1a] transition-colors duration-200 group-hover:text-[#1a4f82] group-hover:underline underline-offset-4">
                {outcome.text}
              </span>
            </motion.li>
          ))}
        </ul>
      </div>
    </section>
  );
};
