"use client";

import React from "react";
import { motion } from "framer-motion";
import Image from "next/image";

export const CHumanDesign = () => {
  return (
    <section className="bg-[#faf8f1] py-4 lg:py-8 overflow-hidden">
      <div className="max-w-[1300px] mx-auto">
        <div className="grid h-full w-full rounded-[40px] py-10 md:bg-transparent md:py-20 relative" data-cy="natural-cycles-section">
          {/* Background image container */}
          <div className="col-start-1 row-start-1 md:row-start-1 md:row-end-2 relative h-[280px] overflow-hidden md:h-[540px] w-full rounded-[40px]" data-cy="gridItem_div">
            <Image
              alt="Protected bicycle lane with cyclists in a human-centered street — walkable community design"
              loading="lazy"
              src="/images/AdobeStock_192330637.jpeg"
              fill
              className="rounded-t-[40px] object-cover object-[center_35%] md:rounded-[40px] transition-transform duration-1000 hover:scale-105"
              sizes="100vw"
            />
            {/* Gradient Overlay for high premium contrast */}
            <div className="absolute inset-0 bg-gradient-to-r from-black/60 via-black/40 to-transparent hidden md:block pointer-events-none" />
            <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent md:hidden pointer-events-none" />
          </div>

          {/* Text/Content Container overlay */}
          <div className="col-start-1 row-start-2 md:row-start-1 row-end-3 md:row-end-2 relative z-10 flex items-center h-full">
            <div className="flex flex-col gap-8 rounded-b-[40px] bg-sandstone-500 px-6 py-10 text-sandstone-100 md:bg-transparent md:px-15 md:py-15 lg:px-24 lg:py-15 max-w-2xl md:max-w-4xl">
              
              <motion.p
                initial={{ opacity: 0, y: 15 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6 }}
                className="text-[0.72rem] font-semibold tracking-[0.14em] uppercase text-[#d96a2b] mb-1"
              >
                Design Philosophy
              </motion.p>

              <motion.h2
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.8, delay: 0.1 }}
                className="tracking-normal text-left font-bodoni leading-tight font-normal text-heading-base text-sandstone-100 text-3xl md:text-5xl md:max-w-4/5"
                data-cy="nc-title"
              >
                Neighborhoods that foster{" "}
                <em className="italic text-[#6BCEFF] not-italic font-serif">connection and belonging.</em>
              </motion.h2>

              <div className="gap-5 md:grid md:grid-cols-1" data-cy="nc-subcopy">
                  <div className="flex flex-col gap-5 text-base text-gray-300 font-albert font-normal" data-cy="nc-subcopy-content">
                    <motion.p
                      initial={{ opacity: 0, y: 15 }}
                      whileInView={{ opacity: 1, y: 0 }}
                      viewport={{ once: true }}
                      transition={{ duration: 0.6, delay: 0.3 }}
                      data-cy="nc-subcopy-1"
                    >
                      Guided by principles that promote walkability, age-in-place, and financial mobility. The places we create inspire residents to connect, excel, and thrive.Anchored by a village center where life's essential services are seamlessly embedded and integrated, both in person and online to simplify and personalize daily living.
                    </motion.p>
                </div>
              </div>

              <motion.div
                initial={{ opacity: 0, y: 15 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: 0.5 }}
                className="flex"
              >
              </motion.div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
