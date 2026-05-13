"use client";

import React from "react";
import { motion } from "framer-motion";
import Image from "next/image";

export const CHumanDesign = () => {
  return (
    <section className="bg-[#f2f0eb] overflow-hidden">
      <div className="grid grid-cols-1 lg:grid-cols-2 min-h-[600px]">
        {/* Left: Text */}
        <div className="flex flex-col justify-center px-6 lg:px-24 py-16 lg:py-20">
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="text-[0.72rem] font-semibold tracking-[0.14em] uppercase text-[#d96a2b] mb-4"
          >
            Design Philosophy
          </motion.p>
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.1 }}
            className="text-[clamp(1.8rem,3vw,2.6rem)] font-normal text-[#1a1a1a] mb-6 leading-[1.2]"
          >
            Human-centered neighborhoods that foster{" "}
            <em className="italic text-[#1a4f82] not-italic">connection and belonging.</em>
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="text-[1.0625rem] text-[#5a5a5a] leading-[1.72] mb-8"
          >
            Guided by principles that promote walkability, age-in-place, and financial mobility. The
            places we create inspire residents to connect, excel, and thrive. Anchored by a village
            center where life's essential services are seamlessly embedded and integrated, both in
            person and online to simplify and personalize daily living.
          </motion.p>

          <div className="flex flex-wrap gap-4">
            {[
              { label: "Walkability", color: "#1a4f82", bg: "rgba(26,79,130,0.06)" },
              { label: "Age-in-Place", color: "#0d7d6a", bg: "rgba(13,125,106,0.06)" },
              { label: "Financial Mobility", color: "#d96a2b", bg: "rgba(217,106,43,0.06)" },
            ].map((tag, idx) => (
              <motion.span
                key={tag.label}
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: 0.3 + idx * 0.1 }}
                className="text-[0.82rem] font-semibold px-[18px] py-[6px] rounded-[6px] border-[1.5px] tracking-wider"
                style={{ color: tag.color, borderColor: tag.color, backgroundColor: tag.bg }}
              >
                {tag.label}
              </motion.span>
            ))}
          </div>
        </div>

        {/* Right: Cycling neighborhood photo */}
        <div className="relative overflow-hidden min-h-[480px]">
          <Image
            src="https://pplx-res.cloudinary.com/image/upload/pplx_search_images/17c9635d94c55d0aec8eb00b682ba9882c9a9eb6.jpg"
            alt="Protected bicycle lane with cyclists in a human-centered street — walkable community design"
            fill
            className="object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-l from-[#f2f0eb1f] to-transparent pointer-events-none" />
        </div>
      </div>
    </section>
  );
};
