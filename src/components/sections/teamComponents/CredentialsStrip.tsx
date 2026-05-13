"use client";
import React from 'react';
import { motion } from 'framer-motion';

const stats = [
  { num: "50", suffix: "+", label: "Combined years of real estate development & operations experience", sub: "Across master-planned, mixed-use, and workforce residential" },
  { num: "25", suffix: "", label: "Communities built, operated, or scaled across careers", sub: "Residential, mixed-income, and service-integrated developments" },
  { num: "2.5", prefix: "$", suffix: "B+", label: "Capital deployed across team members' prior roles", sub: "Real estate transactions, infrastructure, and community development" }
];

export const CredentialsStrip = () => {
  return (
    <section className="relative w-full bg-[#fdfcfb] py-24 overflow-hidden border-t border-black/5">
      {/* Subtle Background Decoration */}
      <div
        className="absolute pointer-events-none left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 w-[clamp(44rem,14.769rem+116.923vw,120rem)] h-[clamp(25rem,8.654rem+65.385vw,67.5rem)]"
        style={{ background: "radial-gradient(50% 50%, rgba(255, 182, 55, 0.03), rgba(255, 182, 55, 0.05) 50%, rgba(255, 182, 55, 0))" }}
      />

      <div className="container relative z-10 mx-auto px-6 max-w-[1200px]">
        <p className="text-[#3daf98] text-[0.75rem] font-bold tracking-[0.14em] uppercase mb-4">The Experience Behind the Vision</p>
        <h2 className="font-serif text-3xl md:text-4xl text-[#1a1a1a] mb-12">Numbers that prove execution capability.</h2>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {stats.map((stat, index) => (
            <motion.div 
              key={index}
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="bg-white border border-black/5 rounded-3xl p-10 text-center relative overflow-hidden group shadow-sm hover:shadow-md transition-all duration-300"
            >
              {/* Subtle Card Glow */}
              <div className="absolute inset-0 bg-radial-gradient from-[#1a4f82]/5 to-transparent pointer-events-none transition-opacity duration-500 opacity-0 group-hover:opacity-100" />
              
              <div className="relative z-10">
                <div className="font-serif text-5xl md:text-6xl lg:text-7xl text-[#1a1a1a] mb-3 leading-none">
                  {stat.prefix}<span className="text-[#d96a2b]">{stat.num}</span>{stat.suffix}
                </div>
                <div className="text-[1.05rem] text-[#5a5a5a] leading-relaxed mb-2">{stat.label}</div>
                <div className="text-[0.82rem] text-[#5a5a5a]/60 italic font-normal">{stat.sub}</div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};
