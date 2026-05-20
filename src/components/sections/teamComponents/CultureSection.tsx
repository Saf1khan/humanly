"use client";
import React from 'react';
import Image from 'next/image';
import { motion } from 'framer-motion';

export const CultureSection = () => {
  return (
    <section className="relative w-full bg-[#faf9f6] py-24 lg:py-32 overflow-hidden">
      {/* Subtle Background Decoration */}
      <div
        className="absolute pointer-events-none left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 w-[clamp(44rem,14.769rem+116.923vw,120rem)] h-[clamp(25rem,8.654rem+65.385vw,67.5rem)]"
        style={{ background: "radial-gradient(50% 50%, rgba(194,160,119,0.03), rgba(194,160,119,0.05) 50%, rgba(194,160,119,0))" }}
      />

      <div className="container relative z-10 mx-auto px-6 max-w-[1200px]">
        <div className="grid grid-cols-1 lg:grid-cols-2 min-h-[560px] gap-16 lg:gap-24 items-start">

          {/* Left Content */}
          {/* Left Content */}
          <div className="flex flex-col justify-center">

            <motion.h2
              className="text-3xl md:text-4xl lg:text-5xl text-[#11161a] mb-2 leading-tight tracking-tight"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 2.5, ease: [0.16, 1, 0.3, 1]}}
            >
              We're not just building communities.
            </motion.h2>

            <motion.h2
              className="font-serif text-3xl md:text-4xl lg:text-5xl italic text-[#c2a077] font-light"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 2.5, ease: [0.16, 1, 0.3, 1]}}
            >
              We're living the mission.
            </motion.h2>

            <motion.div
              className="h-[1px] w-[508px] bg-gradient-to-r from-[#c2a077] to-transparent mb-8 mt-8"
              initial={{ opacity: 0, scaleX: 0 }}
              whileInView={{ opacity: 1, scaleX: 1 }}
              viewport={{ once: true, margin: "-100px" }}
              style={{ originX: 0 }}
              transition={{ duration: 1.5, ease: [0.16, 1, 0.3, 1]}}
            />

            <motion.div
              className="space-y-6 text-[#11161a]/60 text-[1.0625rem] leading-relaxed max-w-[52ch] font-light mb-8"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 2.5, ease: [0.16, 1, 0.3, 1]}}
            >
              <p>
                Every member of the Humanly® team came to this work through a personal
                connection to the housing crisis — a family member priced out of a city, a
                community hollowed out by displacement, or a career spent watching the
                system fail the people it was supposed to serve.
              </p>
            </motion.div>
            <motion.div
              className="space-y-6 text-[#11161a]/60 text-[1.0625rem] leading-relaxed max-w-[52ch] font-light"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 2.5, ease: [0.16, 1, 0.3, 1]}}
            >
              <p>
                We started Humanly® because we know the workforce family who needs a
                second chance, a brilliant start, a safe home, and a community that shows
                up for them. That's not a target demographic. That's us. That's our
                neighbors. And that's exactly why we will not stop building until every
                American family has access to what Humanly® delivers.
              </p>
            </motion.div>

          </div>

          {/* Right Image */}
          <motion.div
            initial={{ opacity: 0, clipPath: "inset(20% 20% 20% 20%)" }}
            whileInView={{ opacity: 1, clipPath: "inset(0% 0% 0% 0%)" }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 2.5, ease: [0.16, 1, 0.3, 1] }}
            className="relative overflow-hidden rounded-2xl shadow-sm"
          >
            <motion.img
              initial={{ scale: 1.1, filter: "grayscale(30%)" }}
              whileInView={{ scale: 1, filter: "grayscale(0%)" }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 2.5, ease: [0.16, 1, 0.3, 1] }}
              src="https://images.unsplash.com/photo-1529156069898-49953e39b3ac?w=1200&q=80"
              alt="Humanly team culture"
              className="w-full aspect-square md:aspect-[4/5] object-cover"
            />
          </motion.div>
        </div>
      </div>
    </section>
  );
};
