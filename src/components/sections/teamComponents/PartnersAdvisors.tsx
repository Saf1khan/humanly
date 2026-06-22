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
    <section className="relative w-full bg-transparent py-16 md:py-20 lg:py-24 overflow-x-clip">
      <div className="container relative z-10 mx-auto px-6 max-w-[1200px]">

        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: 0.9, ease: [0.16, 1, 0.3, 1] }}
          className="mb-10"
        >
          <h2 className="font-cormorant font-normal text-3xl md:text-4xl lg:text-5xl text-[rgb(34,66,40)] mb-4 tracking-tight">Partners & Advisors</h2>
          <p className="text-[1.05rem] font-light text-[rgba(34,66,40,0.55)] leading-relaxed mb-8">
            The organizations and individuals who amplify Humanly®'s reach, credibility, and capabilities.
          </p>

        </motion.div>

        {/* Category Sections */}
        <div className="space-y-12 md:space-y-16 lg:space-y-20">
          {partnerCategories.map((category, catIndex) => (
            <motion.div
              key={catIndex}
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-60px" }}
              transition={{ duration: 1.5, delay: catIndex * 0.1, ease: [0.16, 1, 0.3, 1] }}
            >
              {/* Category Label */}
              <div className="flex items-center gap-4 mb-6 md:mb-8 lg:mb-10">
                <span className="text-[0.75rem] font-semibold tracking-[0.2em] uppercase text-[rgba(34,66,40,0.6)]">
                  {category.label}
                </span>
                <div className="flex-1 h-[1px] bg-[rgba(34,66,40,0.08)]" />
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
                    className="group relative bg-white border border-[rgba(34,66,40,0.06)] rounded-2xl p-3 md:p-6 flex items-center justify-center overflow-hidden cursor-pointer hover:-translate-y-1 transition-all duration-500 hover:shadow-lg hover:shadow-[rgba(34,66,40,0.50)]/[0.30] hover:border-[rgba(34,66,40,0.50)]/20"
                  >
                    {/* Hover gold shimmer */}
                    {/* <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_70%,rgba(194,160,119,0.25),transparent_100%)] opacity-0 group-hover:opacity-100 transition-opacity duration-700 pointer-events-none" /> */}
                    {/* Top gold line reveal */}
                    <div className="absolute top-0 left-0 right-0 h-[1px] bg-gradient-to-r from-transparent via-[rgba(34,66,40,0.9)] to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />

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
