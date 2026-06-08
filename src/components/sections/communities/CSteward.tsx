"use client";

import React from "react";
import { motion } from "framer-motion";
import Image from "next/image";

export const CSteward = () => {
  return (
    <section className="relative min-h-[800px] overflow-visible ">
      {/* Background image */}
      <Image
        src="/images/pexels-silverkblack-23225003.jpg"
        alt="Aerial view of green land plots"
        fill
        priority
        className="object-cover object-center min-h-[]"
      />

      {/* Top / bottom blending */}
      <div className="pointer-events-none absolute inset-x-0 top-0 h-40 bg-gradient-to-b from-[#f7f1e8] to-transparent" />
      <div className="pointer-events-none absolute inset-x-0 bottom-0 h-64 bg-gradient-to-t from-[#f7f1e8] to-transparent" />

      {/* Soft wash behind content for readability */}
      <div className="pointer-events-none absolute inset-y-0 left-0 w-full bg-[linear-gradient(90deg,rgba(247,241,232,0.99)_0%,rgba(247,241,232,0.34)_10%,rgba(247,241,232,0.08)_20%,rgba(247,241,232,0.0)_100%)]" />
      {/* Soft wash behind content for readability */}
      <div className="pointer-events-none absolute inset-y-0 left-0 w-full bg-[linear-gradient(to_left,rgba(247,241,232,0.99)_0%,rgba(247,241,232,0.34)_10%,rgba(247,241,232,0.08)_20%,rgba(247,241,232,0)_100%)]" />
      {/* Content */}
      <div className="relative z-10 mx-auto flex min-h-[720px] max-w-[1280px] items-center justify-center px-6 py-24 md:px-0 md:py-32">
        <div className="flex flex-col items-center text-center max-w-5xl w-full">
          {/* Label */}
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="mb-8 text-sm font-medium font-albert uppercase tracking-widest text-white"
          >
            Our Philosophy
          </motion.p>

          {/* Title */}
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.1 }}
            className="text-3xl md:text-5xl font-cormorant font-normal leading-[40px] md:leading-[60px] tracking-tight text-white mb-8"
          >
            <span className="block">We don't build and exit.</span>
            <span className="block">We stay and steward.</span>
          </motion.h2>

          {/* Description */}
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="text-base leading-[28px] md:leading-[30px] font-albert font-light  text-white md:text-lg text-pretty"
          >
            We treat our land ownership as long-term infrastructure, building communities designed for lasting growth and vibrancy. <br />
            As communities strengthen over time, locations thrive — creating compounding value for operators and residents alike.
          </motion.p>
        </div>
      </div>
    </section>
  );
};