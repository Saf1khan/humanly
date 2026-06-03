"use client";

import React from "react";
import { motion } from "framer-motion";
import Image from "next/image";

export const CProofOfConcept = () => {
  const stats = [
    { value: "5,000+", label: "Planned Units" },
    { value: "1,000+", label: "Total Acres" },
    { value: "80–120%", label: "AMI Target" },
    { value: "2025", label: "Groundbreak" },
  ];

  return (
    <section className="relative overflow-hidden bg-[#faf8f1]">
      <div className="relative min-h-[720px] lg:min-h-[920px]">
        {/* Background Image */}
        <Image
          src="/images/pexels-hongzheng-tian-3519205-8640500.jpg"
          alt="Master planned community"
          fill
          priority
          className="object-cover"
        />

      {/* Top / bottom blending */}
      <div className="pointer-events-none absolute inset-x-0 top-0 h-80 bg-gradient-to-b from-[#faf8f1] to-transparent" />
      <div className="pointer-events-none absolute inset-x-0 bottom-0 h-80 bg-gradient-to-t from-[#faf8f1] to-transparent" />

      {/* Soft wash behind content for readability */}
      <div className="pointer-events-none absolute inset-y-0 left-0 w-full bg-[linear-gradient(90deg,rgba(250,248,241,0.99)_0%,rgba(250,248,241,0.34)_10%,rgba(250,248,241,0.08)_20%,rgba(250,248,241,0.0)_100%)]" />
      {/* Soft wash behind content for readability */}
      <div className="pointer-events-none absolute inset-y-0 left-0 w-full bg-[linear-gradient(to_left,rgba(250,248,241,0.99)_0%,rgba(250,248,241,0.34)_10%,rgba(250,248,241,0.08)_20%,rgba(250,248,241,0)_100%)]" />

        
     

        {/* Content */}
        <div className="relative z-10 mx-auto flex min-h-[920px] max-w-[1380px] items-center px-6 py-20 lg:px-12">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="max-w-[1380px]"
          >
            {/* Eyebrow */}
            <div className="mb-6 inline-flex items-center gap-3 rounded-full border border-white/10 bg-white/5 px-4 py-2 backdrop-blur-xl">
              <span className="text-[11px] uppercase tracking-[0.25em] text-white/70">
                Proof of Concept
              </span>
            </div>

            {/* Glass Panel */}
            <div className="relative overflow-hidden rounded-[32px] border border-white/15 bg-white/[0.08] p-10 md:p-16 lg:p-20 backdrop-blur-2xl shadow-[0_30px_80px_rgba(0,0,0,0.35)]">
              {/* Light Reflection */}
              <div className="absolute inset-0 bg-gradient-to-br from-white/15 via-transparent to-transparent pointer-events-none" />

              <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-16 items-start">
                <div>
                  <h2 className="relative text-lg font-light leading-relaxed text-white md:text-2xl">
                    Humanly® is breaking ground on one of the largest
                    master-planned developments in the United States focused on
                    workforce housing.
                  </h2>
                </div>
                <div>
                  <h2 className="relative text-lg font-light leading-relaxed text-white/80 md:text-2xl">
                    Creating attainable communities at scale through long-term land
                    stewardship, thoughtful planning, and sustainable growth.
                  </h2>
                </div>
              </div>

              {/* Divider */}
              <div className="my-8 h-px w-full bg-gradient-to-r from-white/20 via-white/10 to-white/20" />

              {/* Stats */}
              <div className="grid grid-cols-2 gap-6 md:grid-cols-4">
                {stats.map((item) => (
                  <div key={item.label}>
                    <div className="text-3xl font-light text-white">
                      {item.value}
                    </div>
                    <div className="mt-2 text-xs uppercase tracking-[0.18em] text-white/55">
                      {item.label}
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </motion.div>
        </div>

        {/* Premium Floating Badge */}
        <motion.div
          initial={{ opacity: 0, x: 30 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.4 }}
          className="absolute bottom-8 right-8 z-20"
        >
          <div className="rounded-full border border-emerald-400/30 bg-black/20 px-5 py-3 backdrop-blur-xl">
            <span className="text-sm font-medium tracking-wide text-emerald-300">
              Texas Flagship ↗
            </span>
          </div>
        </motion.div>
      </div>
    </section>
  );
};