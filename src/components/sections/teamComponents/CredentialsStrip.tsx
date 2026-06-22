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
    <section className="relative w-full py-16 md:py-20 lg:py-24 overflow-x-clip bg-transparent">

      {/* Container at z-10 — cards' backdrop-filter blurs the z-0 blobs behind */}
      <div className="w-full max-w-[1440px] mx-auto px-6 md:px-12 relative z-10">
        <div className="max-w-[1200px] mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 1.5, ease: "easeOut" }}
          >
            <p className="text-[0.75rem] font-semibold tracking-[0.2em] uppercase text-[rgba(34,66,40,0.6)] mb-4">The Experience Behind the Vision</p>
            <h2 className="font-cormorant font-normal text-3xl md:text-4xl lg:text-5xl text-[rgb(34,66,40)] mb-10 md:mb-16 lg:mb-20 tracking-tight">Numbers that prove execution capability.</h2>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {stats.map((stat, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 0 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-50px" }}
                transition={{ duration: 1.5, delay: index * 0.5, ease: [0.16, 1, 0.3, 1] }}
                className="rounded-2xl p-6 md:p-8 lg:p-10 text-center relative overflow-hidden group hover:-translate-y-1 transition-all duration-500"
                style={{
                  background: "rgba(255, 255, 255, 0.5)",
                  backdropFilter: "blur(16px)",
                  WebkitBackdropFilter: "blur(16px)",
                  border: "1px solid rgba(255, 255, 255, 0.6)",
                  boxShadow: "0 4px 30px rgba(0, 0, 0, 0.04)"
                }}
              >
                {/* Green top border on hover */}
                <div className="absolute top-0 left-0 right-0 h-[2px] bg-gradient-to-r from-transparent via-[rgb(34,66,40)] to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />

                <div className="relative z-10">
                  <div className="font-cormorant text-4xl sm:text-5xl md:text-6xl lg:text-7xl text-[rgb(34,66,40)] mb-4 leading-none tracking-tight">
                    {stat.prefix}{stat.num}{stat.suffix}
                  </div>
                  <div className="text-[1.05rem] text-[rgba(34,66,40,0.6)] leading-relaxed mb-3 font-light">{stat.label}</div>
                  <div className="text-[0.85rem] text-[rgba(34,66,40,0.55)] font-light">{stat.sub}</div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};
