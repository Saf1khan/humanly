"use client";

import React from "react";
import { motion } from "framer-motion";
import Image from "next/image";

export const CSteward = () => {
  return (
    <section className="relative min-h-[720px] overflow-hidden bg-[#faf8f1]">
      {/* Background image */}
      <Image
        src="https://pplx-res.cloudinary.com/image/upload/pplx_search_images/c97148b40231d48770c485e13047a6d157c8bb68.jpg"
        alt="Aerial view of green land plots"
        fill
        priority
        className="object-cover object-center brightness-[0.88] saturate-[1.08]"
      />

      {/* Top / bottom blending */}
      <div className="pointer-events-none absolute inset-x-0 top-0 h-80 bg-gradient-to-b from-[#faf8f1] to-transparent" />
      <div className="pointer-events-none absolute inset-x-0 bottom-0 h-80 bg-gradient-to-t from-[#faf8f1] to-transparent" />

      {/* Soft wash behind content for readability */}
      <div className="pointer-events-none absolute inset-y-0 left-0 w-full bg-[linear-gradient(90deg,rgba(250,248,241,0.99)_0%,rgba(250,248,241,0.34)_10%,rgba(250,248,241,0.08)_20%,rgba(250,248,241,0.0)_100%)]" />
      {/* Soft wash behind content for readability */}
      <div className="pointer-events-none absolute inset-y-0 left-0 w-full bg-[linear-gradient(to_left,rgba(250,248,241,0.99)_0%,rgba(250,248,241,0.34)_10%,rgba(250,248,241,0.08)_20%,rgba(250,248,241,0)_100%)]" />
      <div
        className="absolute pointer-events-none left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 w-[clamp(44rem,14.769rem+116.923vw,120rem)] h-[clamp(25rem,8.654rem+65.385vw,67.5rem)]"
        style={{ background: "radial-gradient(50% 50%, rgba(0, 0, 0, 0.08), rgba(0, 0, 0, 0.0) 50%, rgba(0, 0, 0, 0))" }}
      />
      {/* Content */}
      <div className="relative z-10 mx-auto flex min-h-[720px] max-w-[1280px] items-center justify-center px-6 py-24 md:px-0 md:py-32">
        <div className="flex flex-col items-center text-center max-w-5xl w-full">
          {/* Label */}
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="mb-8 text-sm font-medium font-albert uppercase tracking-[0.2em] text-white"
          >
            Our Philosophy
          </motion.p>

          {/* Title */}
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.1 }}
            className="text-4xl md:text-5xl font-bodoni font-bold leading-normal tracking-normal text-white mb-8"
          >
            <span className="block">We don't build and exit.</span>
            <span className="block mt-4">We stay and steward.</span>
          </motion.h2>

          {/* Description */}
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="text-sm leading-relaxed font-albert font-medium text-white lg:text-lg text-pretty"
          >
            We treat our land ownership as long-term infrastructure, building communities designed for lasting growth and vibrancy. <br/>
            As communities strengthen over time, locations thrive — creating compounding value for operators and residents alike.
          </motion.p>
        </div>
      </div>
    </section>
  );
};