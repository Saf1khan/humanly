"use client";
import React from 'react';
import { motion } from 'framer-motion';
import Image from 'next/image';

const partnerCategories = [
  {
    label: "Strategic Partners",
    type: "strategic",
    items: [
      { icon: "/images/CJSarchitects.png" },
      { icon: "/images/Figure.png" },
      { icon: "/images/HeyHomie.png" }
    ]
  },
  {
    label: "Advisory Board",
    type: "advisory",
    items: [
      { icon: "/images/AutoDesk360.png" },
      { icon: "/images/HarrisBeachMurtha.png" },
      { icon: "/images/Tesla.png" }
    ]
  },
  {
    label: "Institutional Partners",
    type: "institutional",
    items: [
      { icon: "/images/FountainLife.png" },
      { icon: "/images/GolisanoInstitute.png" },
      { icon: "/images/Starlink.png" }
    ]
  }
];

export const PartnersAdvisors = () => {
  return (
    <section className="relative w-full bg-[#faf9f6] py-24 lg:py-32 overflow-hidden">
      {/* Background */}
      <div
        className="absolute pointer-events-none left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 w-[clamp(44rem,14.769rem+116.923vw,120rem)] h-[clamp(25rem,8.654rem+65.385vw,67.5rem)]"
        style={{ background: "radial-gradient(50% 50%, rgba(194,160,119,0.04), rgba(194,160,119,0.07) 50%, rgba(194,160,119,0))" }}
      />

      <div className="container relative z-10 mx-auto px-6 max-w-[1200px]">

        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: 0.9, ease: [0.16, 1, 0.3, 1] }}
          className="mb-20"
        >
          <div className="h-[1px] w-12 bg-[#c2a077] mb-6" />
          <h2 className="font-serif text-3xl md:text-4xl text-[#11161a] mb-4 tracking-tight">Partners & Advisors</h2>
          <p className="text-[#11161a]/50 max-w-xl font-light text-[1.05rem] leading-relaxed">
            The organizations and individuals who amplify Humanly®'s reach, credibility, and capabilities.
          </p>
        </motion.div>

        {/* Category Sections */}
        <div className="space-y-20">
          {partnerCategories.map((category, catIndex) => (
            <motion.div
              key={catIndex}
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-60px" }}
              transition={{ duration: 1.5, delay: catIndex * 0.1, ease: [0.16, 1, 0.3, 1] }}
            >
              {/* Category Label */}
              <div className="flex items-center gap-4 mb-10">
                <span className="text-[0.7rem] font-semibold tracking-[0.2em] uppercase text-[#c2a077]">
                  {category.label}
                </span>
                <div className="flex-1 h-[1px] bg-[#11161a]/8" />
              </div>

              {/* Logo Grid */}
              <div className="grid grid-cols-3 gap-4 md:gap-6">
                {category.items.map((item, itemIndex) => (
                  <motion.div
                    key={itemIndex}
                    initial={{ opacity: 0, y: 10 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true, margin: "-40px" }}
                    transition={{ duration: 2, delay: itemIndex * 0.08, ease: "easeOut" }}
                    className="group relative bg-white border border-[#11161a]/[0.06] rounded-2xl p-8 md:p-10 flex items-center justify-center overflow-hidden cursor-pointer hover:-translate-y-1 transition-all duration-500 hover:shadow-lg hover:shadow-[#c2a077]/[0.07] hover:border-[#c2a077]/20"
                  >
                    {/* Hover gold shimmer */}
                    <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_100%,rgba(194,160,119,0.07),transparent_70%)] opacity-0 group-hover:opacity-100 transition-opacity duration-700 pointer-events-none" />
                    {/* Top gold line reveal */}
                    <div className="absolute top-0 left-0 right-0 h-[1px] bg-gradient-to-r from-transparent via-[#c2a077] to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />

                    <div className="relative w-full h-36 md:h-44">
                      <Image
                        src={item.icon}
                        alt="Partner Logo"
                        fill
                        className="object-contain grayscale opacity-80 group-hover:grayscale-0 group-hover:opacity-100 transition-all duration-700 ease-out"
                      />
                    </div>
                  </motion.div>
                ))}
              </div>
            </motion.div>
          ))}
        </div>

      </div>
    </section>
  );
};
