"use client";

import React from "react";
import { motion } from "framer-motion";
import Image from "next/image";

export const CHumanDesign = () => {
  return (
    <section className="relative overflow-x-clip bg-transparent py-4 lg:py-8">
      <div className="mx-auto max-w-[1440px] px-6 md:px-12 lg:px-16">
        <div
          className="relative grid h-full w-full rounded-[40px] py-10 md:bg-transparent md:py-20"
          data-cy="natural-cycles-section"
        >
          {/* Background image container */}
          <div
            className="relative col-start-1 row-start-1 h-[510px] w-full overflow-hidden rounded-[40px] md:row-start-1 md:row-end-2 md:h-[540px]"
            data-cy="gridItem_div"
          >
            <Image
              alt="Protected bicycle lane with cyclists in a human-centered street — walkable community design"
              loading="lazy"
              src="/images/AdobeStock_192330637.jpeg"
              fill
              className="rounded-[40px] object-cover object-[center_35%] transition-transform duration-1000 hover:scale-105 md:rounded-[40px]"
              sizes="100vw"
            />

            <div className="pointer-events-none absolute inset-0 hidden bg-gradient-to-r from-black/60 via-black/40 to-transparent md:block" />
            <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-black/85 via-black/35 to-transparent md:hidden" />
          </div>

          {/* Text/Content Container overlay */}
          <div className="relative z-10 col-start-1 row-start-1 row-end-3 flex h-full items-center md:row-start-1 md:row-end-2 md:items-center">
            <div className="flex max-w-2xl flex-col gap-4 px-5 py-10 text-sandstone-100 md:max-w-4xl md:gap-8 md:px-15 md:py-15 lg:px-24 lg:py-15">
              <motion.p
                initial={{ opacity: 0, y: 15 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6 }}
                className="mb-1 text-xs font-medium uppercase tracking-widest text-[#d96a2b] md:text-sm"
              >
                Design Philosophy
              </motion.p>

              <motion.h2
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.8, delay: 0.1 }}
                className="text-left font-cormorant text-[32px] leading-[34px] tracking-tight text-sandstone-100 md:text-5xl md:leading-[60px] md:max-w-4/5"
                data-cy="nc-title"
              >
                Neighborhoods that foster <br />{" "}
                <em className="font-cormorant font-light italic text-[#6BCEFF]">
                  connection and belonging.
                </em>
              </motion.h2>

              <div className="gap-5 md:grid md:grid-cols-1" data-cy="nc-subcopy">
                <div
                  className="flex flex-col gap-4 text-sm leading-[24px] text-gray-200 font-albert font-light md:gap-5 md:text-lg md:leading-[30px] md:text-gray-300"
                  data-cy="nc-subcopy-content"
                >
                  <motion.p
                    initial={{ opacity: 0, y: 15 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6, delay: 0.3 }}
                    data-cy="nc-subcopy-1"
                  >
                    Guided by principles that promote walkability, age-in-place, and financial mobility. The places we create inspire residents to connect, excel, and thrive. Anchored by a village center where life's essential services are seamlessly embedded and integrated, both in person and online to simplify and personalize daily living.
                  </motion.p>
                </div>
              </div>

              <motion.div
                initial={{ opacity: 0, y: 15 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: 0.5 }}
                className="flex"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};