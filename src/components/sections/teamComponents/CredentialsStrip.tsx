"use client";
import React from 'react';
import { motion } from 'framer-motion';

const stats = [
  { num: "[XX]", suffix: "+", label: "Combined years of real estate development & operations experience", sub: "Across master-planned, mixed-use, and workforce residential" },
  { num: "[XX]", suffix: "", label: "Communities built, operated, or scaled across careers", sub: "Residential, mixed-income, and service-integrated developments" },
  { num: "[X]", prefix: "$", suffix: "B+", label: "Capital deployed across team members' prior roles", sub: "Real estate transactions, infrastructure, and community development" }
];

export const CredentialsStrip = () => {
  return (
    <section className="bg-[#0e1b26] py-20 relative overflow-hidden">
      <div className="container mx-auto px-6 max-w-[1200px] relative z-10">
        <p className="text-[#3daf98] text-[0.75rem] font-bold tracking-[0.14em] uppercase mb-4">The Experience Behind the Vision</p>
        <h2 className="font-serif text-3xl md:text-4xl text-white mb-12">Numbers that prove execution capability.</h2>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {stats.map((stat, index) => (
            <motion.div 
              key={index}
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="bg-white/5 border border-white/10 rounded-3xl p-10 text-center relative overflow-hidden group"
            >
              {/* Background Glow */}
              <div className="absolute inset-0 bg-radial-gradient from-[#2d7dd2]/15 to-transparent pointer-events-none transition-opacity duration-500 opacity-0 group-hover:opacity-100" />
              
              <div className="relative z-10">
                <div className="font-serif text-5xl md:text-6xl lg:text-7xl text-white mb-3 leading-none">
                  {stat.prefix}<span className="text-[#f09050]">{stat.num}</span>{stat.suffix}
                </div>
                <div className="text-[1.05rem] text-[#f7f6f2]/75 leading-relaxed mb-2">{stat.label}</div>
                <div className="text-[0.82rem] text-[#f7f6f2]/40 italic">{stat.sub}</div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};
