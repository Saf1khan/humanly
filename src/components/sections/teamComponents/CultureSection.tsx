"use client";
import React from 'react';
import Image from 'next/image';
import { motion } from 'framer-motion';

const values = [
  "Mission First",
  "Long-term Stewardship",
  "Community-Led Design",
];

export const CultureSection = () => {
  return (
    <section className="relative w-full bg-[#fdfcfb] py-24 overflow-hidden border-t border-black/5">
      {/* Subtle Background Decoration */}
      <div
        className="absolute pointer-events-none left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 w-[clamp(44rem,14.769rem+116.923vw,120rem)] h-[clamp(25rem,8.654rem+65.385vw,67.5rem)]"
        style={{ background: "radial-gradient(50% 50%, rgba(255, 182, 55, 0.03), rgba(255, 182, 55, 0.05) 50%, rgba(255, 182, 55, 0))" }}
      />

      <div className="container relative z-10 mx-auto px-6 max-w-[1200px]">
        <div className="grid grid-cols-1 lg:grid-cols-2 min-h-[560px] gap-12 lg:gap-24">
        
        {/* Left Content */}
        <div className="flex flex-col justify-center">
          <motion.div 
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            
            <h2 className="text-3xl md:text-4xl lg:text-5xl text-[#1a1a1a] mb-2 leading-tight">We're not just building communities.</h2>
            <h2 className="text-3xl md:text-4xl lg:text-5xl italic text-[#1a4f82]">We're living the mission.</h2>
            <div className="h-[3px] w-[524px] rounded-full bg-gradient-to-r from-[#1a4f82] via-[#2d7dd2] to-[#d96a2b] mb-4 mt-4" />
            <div className="space-y-4 text-[#5a5a5a] text-[1.0625rem] leading-relaxed max-w-[52ch]">
              <p>
                Every member of the Humanly® team came to this work through a personal connection to the housing crisis — a family member priced out of a city, a community hollowed out by displacement, or a career spent watching the system fail the people it was supposed to serve.
              </p>
              <p>
                We started Humanly® because we know the workforce family who needs a second chance, a brilliant start, a safe home, and a community that shows up for them. That's not a target demographic. That's us. That's our neighbors. And that's exactly why we will not stop building until every American family has access to what Humanly® delivers.
              </p>
            </div>

            <div className="flex flex-wrap gap-3 mt-10">
              {values.map((value, index) => (
                <span 
                  key={index}
                  className="text-[0.82rem] font-semibold px-[1rem] py-[0.4rem] rounded-full bg-[#1a4f82]/5 text-[#1a4f82] border-[1.5px] border-[#1a4f82]/10"
                >
                  {value}
                </span>
              ))}
            </div>
          </motion.div>
        </div>

        {/* Right Image */}
          <img
            src="https://images.unsplash.com/photo-1529156069898-49953e39b3ac?w=1200&q=80"
            alt="Humanly team culture"
            className="h-[540px] w-[540px] object-cover rounded-3xl"
          />
      </div>
      </div>
    </section>
  );
};
