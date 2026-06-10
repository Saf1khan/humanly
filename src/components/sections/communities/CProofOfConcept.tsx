"use client";

import React from "react";
import { motion } from "framer-motion";
import Image from "next/image";

export const CProofOfConcept = () => {
  const stats = [
    { value: "5,000+", label: "Planned Units" },
    { value: "1,000+", label: "Total Acres" },
    { value: "80–120%", label: "AMI Target" },
    { value: "2026", label: "Ground Break" },
  ];

  return (
    <section className="relative z-0 overflow-x-clip bg-transparent">
      <div className="relative min-h-[720px] lg:min-h-[920px]">
        {/* Content */}
        <div className="relative z-10 mx-auto flex w-full min-h-[920px] max-w-[1380px] items-center px-6 py-20 lg:px-12">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="w-full max-w-[1380px]"
          >
            {/* Top row with Badge */}
            <div className="mb-6 flex w-full justify-end">
              {/* Premium Floating Badge */}
              <motion.div
                initial={{ opacity: 0, x: 30 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.4 }}
              >
                <div className="relative overflow-hidden rounded-full border border-white/05 px-5 py-2">
                  <Image
                    src="/images/pexels-hongzheng-tian-3519205-8640500.jpg"
                    alt="Badge background"
                    fill
                    className="object-cover -z-20"
                  />
                  <div className="absolute inset-0 bg-[#AA3DAD]/[5%] backdrop-blur-lg -z-10" />
                  <span className="relative z-10 text-xs tracking-[0.25em] text-white/70">
                    Texas Flagship
                  </span>
                </div>
              </motion.div>
            </div>

            {/* Glass Panel */}
            <div className="relative overflow-hidden rounded-[32px] p-10 md:p-16 lg:p-20 shadow-[0_30px_80px_rgba(0,0,0,0.35)]">
              {/* Background Image */}
              <Image
                src="/images/pexels-hongzheng-tian-3519205-8640500.jpg"
                alt="Master planned community"
                fill
                priority
                className="object-cover -z-20"
              />
              
              {/* Glass Effect Overlay */}
              <div className="absolute inset-0 bg-[#AA3DAD]/[5%] backdrop-blur-lg -z-10 drop-shadow-2xl" />

              {/* Light Reflection */}
              <div className="absolute inset-0 bg-gradient-to-br from-white/15 via-transparent to-transparent pointer-events-none" />

              <div className="grid grid-cols-1 gap-8 lg:gap-16 items-start">
                <div>
                  {/* Eyebrow */}
                  <div className="relative overflow-hidden inline-flex items-center gap-3 py-2 mb-4">
                    <Image
                      src="/images/pexels-hongzheng-tian-3519205-8640500.jpg"
                      alt="Eyebrow background"
                      fill
                      className="object-cover -z-20"
                    />
                    <span className="relative z-10 text-xs font-albert font-medium uppercase tracking-[0.25em] text-white/70">
                      Proof of Concept
                    </span>
                  </div>

                  <h2 className="relative text-xl font-cormorant font-light leading-[30px] md:leading-[36px] text-white md:text-2xl">
                    Humanly® is breaking ground on one of the largest
                    master-planned developments in the United States focused on
                    workforce housing. Creating attainable communities at scale through long-term land
                    stewardship, thoughtful planning, and sustainable growth.
                  </h2>
                </div>
              </div>

              {/* Divider */}
              <div className="my-8 h-px w-full bg-gradient-to-r from-white/20 via-white/10 to-white/20" />

              {/* Stats */}
              <div className="flex w-full flex-wrap justify-between gap-y-6">
                {stats.map((item) => (
                  <div key={item.label} className="w-[48%] md:w-auto p-8 rounded-3xl backdrop-blur-xl shadow-2xl border border-white/10">
                    <div className="text-2xl font-albert font-light text-white text-center">
                      {item.value}
                    </div>
                    <div className="mt-2 text-xs font-albert uppercase font-light text-center tracking-widest text-white/55">
                      {item.label}
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </motion.div>
        </div>

      </div>
    </section>
  );
};