"use client";

import React from "react";
import { motion } from "framer-motion";
import Image from "next/image";

export const CSteward = () => {
  return (
    <section className="bg-[#0e1b26] overflow-hidden">
      <div className="grid grid-cols-1 lg:grid-cols-2 min-h-[560px]">
        {/* Left: Text over dark bg */}
        <div className="flex flex-col justify-center px-6 lg:px-24 py-16 lg:py-20">
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="text-[0.72rem] font-semibold tracking-[0.14em] uppercase text-[#3daf98] mb-4"
          >
            Our Philosophy
          </motion.p>
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.1 }}
            className="text-[clamp(1.8rem,3.2vw,2.75rem)] font-normal text-[#f7f6f2] mb-8 leading-[1.18]"
          >
            We don't build and exit.<br />
            <em className="italic text-[#3daf98] not-italic">We stay and steward.</em>
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="text-[1.0625rem] text-[#f7f6f2b8] leading-[1.75] max-w-[52ch]"
          >
            We treat our land ownership as long-term infrastructure. Each community is designed for
            sustained vibrancy and growth. As each community strengthens over time, the location
            thrives. Operators and residents benefit from a community that compounds in value for
            everyone.
          </motion.p>
        </div>

        {/* Right: Aerial photo */}
        <div className="relative overflow-hidden min-h-[420px]">
          <Image
            src="https://pplx-res.cloudinary.com/image/upload/pplx_search_images/c97148b40231d48770c485e13047a6d157c8bb68.jpg"
            alt="Aerial view of green land plots — long-term community infrastructure"
            fill
            className="object-cover brightness-[0.78] saturate-[1.1]"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-[#0e1b26] via-transparent to-transparent hidden lg:block" />
        </div>
      </div>
    </section>
  );
};
