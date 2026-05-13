"use client";

import React from "react";
import { motion } from "framer-motion";

export const CPipeline = () => {
  return (
    <section className="bg-[#0e1b26] py-20 lg:py-32">
      <div className="max-w-[1200px] mx-auto px-6 lg:px-12">
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-[0.72rem] font-semibold tracking-[0.14em] uppercase text-[#3daf98] mb-4"
        >
          National Expansion
        </motion.p>
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.1 }}
          className="text-[clamp(1.75rem,3vw,2.5rem)] font-normal text-[#f7f6f2] mb-4"
        >
          Building across America — one community at a time.
        </motion.h2>
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="text-[1rem] text-[#f7f6f2a6] mb-12 max-w-[55ch]"
        >
          From our Texas flagship to a planned national footprint, Humanly® is scaling a proven model
          across the United States.
        </motion.p>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-5">
          {/* Texas Flagship */}
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="bg-gradient-to-br from-[#3daf982e] to-[#1a4f822e] border-[1px] border-[#3daf9873] rounded-[20px] p-[1.75rem_1.5rem] flex flex-col gap-3 transition-all duration-300"
          >
            <div className="text-[2rem]">🤠</div>
            <div className="text-[1.15rem] text-white leading-[1.2]">Texas</div>
            <span className="inline-flex items-center gap-[0.4rem] text-[0.72rem] font-bold tracking-[0.08em] uppercase px-[10px] py-[3px] rounded-[20px] bg-[#3daf9838] text-[#3daf98] border-[1px] border-[#3daf9866]">
              ● Breaking Ground
            </span>
            <p className="text-[0.82rem] text-[#f7f6f280]">
              Target: <strong className="text-white/80 font-semibold">2025</strong>
            </p>
            <p className="text-[0.82rem] text-[#f7f6f28c] leading-[1.55]">
              Flagship community — 5,000+ units, 1,000+ acres. First of its kind in the US.
            </p>
          </motion.div>

          {/* Pipeline 2–5 */}
          {[
            { year: "2027", status: "Planned", delay: 0.1 },
            { year: "2027", status: "Planned", delay: 0.2 },
            { year: "2028", status: "Planned", delay: 0.3 },
            { year: "2028", status: "Planned", delay: 0.4 },
          ].map((item, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: item.delay }}
              className="bg-white/5 border-[1px] border-white/10 rounded-[20px] p-[1.75rem_1.5rem] flex flex-col gap-3 transition-all duration-300 hover:bg-white/10 hover:border-[#3daf9859]"
            >
              <div className="text-[2rem]">📍</div>
              <div className="text-[1.15rem] text-white leading-[1.2]">State TBD</div>
              <span className="inline-flex items-center gap-[0.4rem] text-[0.72rem] font-bold tracking-[0.08em] uppercase px-[10px] py-[3px] rounded-[20px] bg-[#1a4f822e] text-[#5ba3e0] border-[1px] border-[#1a4f824d]">
                {item.status}
              </span>
              <p className="text-[0.82rem] text-[#f7f6f280]">
                Target: <strong className="text-white/80 font-semibold">{item.year}</strong>
              </p>
              <p className="text-[0.82rem] text-[#f7f6f266] leading-[1.55]">
                Site selection in progress. Modeled on Texas prototype.
              </p>
            </motion.div>
          ))}
        </div>

        {/* Vision banner */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 1 }}
          className="mt-12 text-center p-[1.75rem_2rem] bg-gradient-to-r from-[#1a4f8259] to-[#5b3f9e59] rounded-[20px] border-[1px] border-white/10"
        >
          <p className="text-[clamp(1.1rem,2.5vw,1.5rem)] italic text-[#f7f6f2e6] leading-[1.45]">
            "One Humanly® community in every state by 2032."
          </p>
          <p className="text-[0.82rem] text-[#f7f6f280] mt-2 tracking-[0.06em] uppercase">
            50 states · 50 communities · one mission
          </p>
        </motion.div>
      </div>
    </section>
  );
};
