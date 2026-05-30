"use client";

import React, { useRef } from "react";
import { motion, useInView } from "framer-motion";

const outcomes = [
  { id: "01", text: "Providing access to high-quality attainable housing", dotColor: "#1a4f82" },
  { id: "02", text: "Democratizing access to integrated life-enhancing services", dotColor: "#0d7d6a" },
  { id: "03", text: "Fostering human connection through community design", dotColor: "#d96a2b" },
  { id: "04", text: "Easing the burden of daily tasks through a resident AI navigator", dotColor: "#5b3f9e" },
  { id: "05", text: "Promoting sustained home and community value", dotColor: "#2d7dd2" },
  { id: "06", text: "Self-improving communities via HumanlyOS®", dotColor: "#3daf98" },
];

export const COutcomes = () => {
  const sectionRef = useRef<HTMLElement>(null);
  const inView = useInView(sectionRef, { once: true, margin: "-80px" });

  return (
    <section
      ref={sectionRef}
      className="bg-[#faf8f1] py-20 lg:py-28 overflow-hidden"
    >
      <div className="max-w-[1380px] mx-auto px-6 lg:px-12">
        <div className="flex flex-col lg:flex-row gap-12 lg:gap-8 items-stretch">
          

          {/* ── LEFT COLUMN: bordered frame + ornament ── */}
          <motion.div
            className="lg:w-1/2 relative"
            initial={{ opacity: 0, y: 20 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6 }}
          >
            {/* Outer border frame */}
            <div className="relative border border-[#866d4b] px-8 pt-12 pb-8 lg:px-10 lg:pt-14 lg:pb-10 flex flex-col justify-center h-full">

              {/* Humanly logo mark centred on the top border */}
              <div className="absolute -top-[18px] left-1/2 -translate-x-1/2 bg-[#faf8f1] px-0">
                <img
                  src="/images/Humanly_Logo_Mark_Gradient on Light.svg"
                  alt="Humanly mark"
                  className="w-10 h-10 object-contain"
                />
              </div>

              {/* Heading */}
              <motion.h2
                initial={{ opacity: 0, y: 14 }}
                animate={inView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.55, delay: 0.08 }}
                className="text-[32px] font-normal leading-[1.2] tracking-[-0.02em] text-[#1a1a1a] mb-8 text-left"
              >
                Humanly<span className="text-[0.7em] align-super">®</span> Communities Outcomes
              </motion.h2>

              {/* List */}
              <ul className="flex flex-col mb-8">
                {outcomes.map((outcome, index) => (
                  <motion.li
                    key={outcome.id}
                    initial={{ opacity: 0, x: -14 }}
                    animate={inView ? { opacity: 1, x: 0 } : {}}
                    transition={{ duration: 0.42, delay: 0.12 + index * 0.07 }}
                    className="group flex items-center gap-4 py-[16px] border-b border-[#866d4b]/10 first:border-t first:border-[#4A4741]/10 cursor-default transition-all duration-300 hover:pl-2"
                  >
                    {/* Dot */}
                    <span
                      className="w-[4px] h-[4px] rounded-full flex-shrink-0 transition-transform duration-300 group-hover:scale-125"
                      style={{ backgroundColor: outcome.dotColor }}
                    />
                    {/* Text */}
                    <span className="text-[0.9375rem] font-normal text-[#1a1a1a] leading-[1.5] transition-colors duration-200 group-hover:text-[#1a4f82]">
                      {outcome.text}
                    </span>
                  </motion.li>
                ))}
              </ul>

              {/* Disclaimer */}
              <motion.p
                initial={{ opacity: 0, y: 8 }}
                animate={inView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.45, delay: 0.68 }}
                className="text-[0.8125rem] text-[#4A4741]/60 leading-[1.6]"
              >
                Plus additional benefits for residents of ground-lease homeowners &amp; Humanly® Residences.
              </motion.p>
            </div>
          </motion.div>

          {/* ── RIGHT COLUMN: video ── */}
          <motion.div
            className="lg:w-1/2 relative"
            initial={{ opacity: 0, scale: 0.97 }}
            animate={inView ? { opacity: 1, scale: 1 } : {}}
            transition={{ duration: 0.7, delay: 0.15, ease: [0.22, 1, 0.36, 1] }}
          >
            <div className="relative w-full h-full min-h-[340px] lg:min-h-[520px] overflow-hidden bg-[#d4cfc9]">
              <video
                autoPlay
                loop
                playsInline
                muted
                className="absolute inset-0 w-full h-full object-cover"
              >
                <source src="/images/7982599-hd_1920_1080_30fps.mp4" type="video/mp4" />
              </video>

              {/* Subtle gradient overlay */}
              <div className="absolute inset-0 bg-gradient-to-t from-black/30 via-transparent to-transparent pointer-events-none" />

              {/* Caption badge */}
              <div className="absolute bottom-6 left-6 right-6">
                <span className="inline-block text-[11px] uppercase tracking-[0.24em] text-white/80 bg-black/30 backdrop-blur-sm px-4 py-2 rounded-full">
                  Humanly® Community Life
                </span>
              </div>
            </div>
          </motion.div>

        </div>
      </div>
    </section>
  );
};
