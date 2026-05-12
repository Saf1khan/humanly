"use client";
import React from 'react';
import Image from 'next/image';
import { motion } from 'framer-motion';

const values = [
  "Mission First",
  "Long-term Stewardship",
  "Radical Inclusion",
  "Community-Led Design",
  "Equity by Default"
];

export const CultureSection = () => {
  return (
    <section className="bg-[#f2f0eb] overflow-hidden">
      <div className="grid grid-cols-1 lg:grid-cols-2 min-h-[560px]">
        
        {/* Left Content */}
        <div className="flex flex-col justify-center p-10 md:p-16 lg:p-24">
          <motion.div 
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <div className="h-[3px] w-[72px] rounded-full bg-gradient-to-r from-[#1a4f82] via-[#2d7dd2] to-[#d96a2b] mb-6" />
            <h2 className="font-serif text-3xl md:text-4xl lg:text-5xl text-[#1a1a1a] mb-6 leading-tight">
              We're not just building communities.<br/>
              <em className="italic text-[#1a4f82] not-italic">We're living the mission.</em>
            </h2>
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
        <div className="relative min-h-[480px] lg:min-h-full">
          <img
            src="https://images.unsplash.com/photo-1529156069898-49953e39b3ac?w=1200&q=80"
            alt="Humanly team culture"
            className="object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-l from-[#f2f0eb]/10 to-transparent" />
        </div>

      </div>
    </section>
  );
};
