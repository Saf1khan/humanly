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
    <section className="relative w-full bg-[#faf9f6] py-24 overflow-hidden">
      {/* Subtle Background Decoration */}
      <div
        className="absolute pointer-events-none left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 w-[clamp(44rem,14.769rem+116.923vw,120rem)] h-[clamp(25rem,8.654rem+65.385vw,67.5rem)]"
        style={{ background: "radial-gradient(50% 50%, rgba(194,160,119,0.05), rgba(194,160,119,0.02) 50%, rgba(194,160,119,0))" }}
      />

      <div className="container relative z-10 mx-auto px-6 max-w-[1200px]">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 1.5, ease: "easeOut" }}
        >
          <p className="text-[#c2a077] text-[1.2rem] font-medium tracking-[0.25em] uppercase mb-4">The Experience Behind the Vision</p>
          <h2 className="font-serif text-3xl md:text-5xl text-[#11161a] mb-20 tracking-tight">Numbers that prove execution capability.</h2>
        </motion.div>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {stats.map((stat, index) => (
            <motion.div 
              key={index}
              initial={{ opacity: 0, y: 0 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 1.5, delay: index * 0.5, ease: [0.16, 1, 0.3, 1] }}
              className="bg-[#EBDCD0]/30 backdrop-blur-2xl border border-[#11161a]/[0.07] rounded-2xl p-10 text-center relative overflow-hidden group hover:shadow-xl hover:shadow-[#c2a077]/[0.06] hover:-translate-y-1 transition-all duration-500"
            >
              {/* Subtle Card Glow */}
              <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_0%,rgba(194,160,119,0.08),transparent_70%)] pointer-events-none transition-opacity duration-700 opacity-0 group-hover:opacity-100" />
              {/* Gold top border on hover */}
              <div className="absolute top-0 left-0 right-0 h-[2px] bg-gradient-to-r from-transparent via-[#c2a077] to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
              
              <div className="relative z-10">
                <div className="font-serif text-5xl md:text-6xl lg:text-7xl text-[#11161a] mb-4 leading-none tracking-tight">
                  {stat.prefix}<span className="text-[#c2a077]">{stat.num}</span>{stat.suffix}
                </div>
                <div className="text-[1.05rem] text-[#11161a]/60 leading-relaxed mb-3 font-light">{stat.label}</div>
                <div className="text-[0.85rem] text-[#c2a077]/70 italic font-normal">{stat.sub}</div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};
