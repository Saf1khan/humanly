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
        <div className="relative z-10 mx-auto flex w-full min-h-[920px] max-w-[1440px] items-center px-6 py-20 md:px-12 lg:px-16">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="w-full max-w-[1380px]"
          >
            <div className="mb-6 flex w-full justify-end">
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
                    className="-z-20 object-cover"
                  />
                  <div className="absolute inset-0 -z-10 bg-[#a154a3]/20 backdrop-blur-lg" />
                  <span className="relative z-10 text-xs tracking-[0.25em] text-white/70">
                    Texas Flagship
                  </span>
                </div>
              </motion.div>
            </div>

            <div className="relative overflow-hidden rounded-[32px] p-8 shadow-[0_30px_80px_rgba(0,0,0,0.35)] md:p-16 lg:p-20">
              <Image
                src="/images/pexels-hongzheng-tian-3519205-8640500.jpg"
                alt="Master planned community"
                fill
                priority
                className="-z-20 object-cover"
              />

              <div className="absolute inset-0 -z-10 bg-[#AA3DAD]/[5%] drop-shadow-2xl backdrop-blur-lg" />
              <div className="pointer-events-none absolute inset-0 bg-gradient-to-br from-white/15 via-transparent to-transparent" />

              <div className="grid grid-cols-1 items-start gap-8 lg:gap-16">
                <div>
                  <div className="relative mb-4 inline-flex items-center gap-3 overflow-hidden py-2">
                    <Image
                      src="/images/pexels-hongzheng-tian-3519205-8640500.jpg"
                      alt="Eyebrow background"
                      fill
                      className="-z-20 object-cover"
                    />
                    <span className="relative z-10 font-albert text-xs font-medium uppercase tracking-[0.25em] text-white/70">
                      Proof of Concept
                    </span>
                  </div>

                  <h2 className="relative font-cormorant text-xl font-light leading-[30px] text-white md:text-2xl md:leading-[36px]">
                    Humanly® is breaking ground on one of the largest
                    master-planned developments in the United States focused on
                    workforce housing. Creating attainable communities at scale
                    through long-term land stewardship, thoughtful planning, and
                    sustainable growth.
                  </h2>
                </div>
              </div>

              <div className="my-8 h-px w-full bg-gradient-to-r from-white/20 via-white/10 to-white/20" />

              <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-4 lg:gap-6">
                {stats.map((item) => (
                  <div
                    key={item.label}
                    className="rounded-3xl border border-white/10 bg-[#a154a3]/10 p-6 shadow-2xl backdrop-blur-sm"
                  >
                    <div className="text-center font-albert text-2xl font-light text-white">
                      {item.value}
                    </div>
                    <div className="mt-2 text-center font-albert text-xs font-light uppercase tracking-widest text-white/55">
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