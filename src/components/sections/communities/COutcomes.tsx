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
      className="relative z-10 bg-transparent py-20 lg:py-28 overflow-x-clip"
    >
      <div
        className="absolute pointer-events-none left-1/3 bottom-1/2 -translate-x-2/3 translate-y-1/2 w-[clamp(44rem,14.769rem+116.923vw,120rem)] h-[clamp(25rem,8.654rem+65.385vw,67.5rem)]"
        style={{
          background:
            "radial-gradient(50% 50%, rgba(255, 255, 255, 0.30), rgba(255, 255, 255, 0.20) 50%, rgba(255, 255, 255, 0))",
        }}
      />
      <div className="max-w-[1440px] mx-auto px-6 md:px-12 lg:px-16">
        <div className="flex flex-col lg:flex-row gap-12 lg:gap-8 items-stretch">


          {/* ── LEFT COLUMN: bordered frame + ornament ── */}
          <motion.div
            className="lg:w-1/2 relative"
            initial={{ opacity: 0, y: 20 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6 }}
          >
            {/* Outer border frame */}
            <div className="relative pb-8 lg:pb-10 flex flex-col justify-top h-full">

              {/* Heading */}
              <motion.h2
                initial={{ opacity: 0, y: 14 }}
                animate={inView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.55, delay: 0.08 }}
                className="text-3xl md:text-5xl font-normal leading-[40px] md:leading-[60px] tracking-tight text-sandstone-500 font-cormorant mb-8 text-left"
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
                    {/* Text */}
                    <span className="text-sm md:text-base font-albert font-light text-[#30302e]/80 leading-[20px] md:leading-[24px] transition-colors duration-200 group-hover:text-[#30302e]">
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
                className="text-sm md:text-base font-albert font-normal text-[#4a4741] leading-[20px] md:leading-[24px]"
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
            <div className="relative w-full h-full min-h-[340px] lg:min-h-[520px] overflow-hidden rounded-3xl">
              <video
                autoPlay
                loop
                playsInline
                muted
                className="absolute inset-0 w-full h-full object-cover"
              >
                <source src="/images/AdobeStock_624561241.mov" type="video/mp4" />
              </video>

              {/* Subtle gradient overlay */}
              <div className="absolute inset-0 bg-[#AA3DAD]/5" />

              {/* Caption badge */}
              <div className="absolute bottom-6 left-6 right-6">
                <span className="inline-block text-xs uppercase tracking-widest font-albert font-medium text-white/80 bg-black/30 backdrop-blur-sm px-4 py-2 rounded-full">
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
