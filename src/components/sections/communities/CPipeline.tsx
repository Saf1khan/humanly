"use client";

import React, { useRef } from "react";
import { motion, useInView } from "framer-motion";

const pipeline = [
  {
    id: "01",
    location: "Texas",
    state: "TX",
    status: "Breaking Ground",
    statusColor: "#3daf98",
    statusBg: "rgba(61,175,152,0.12)",
    statusBorder: "rgba(61,175,152,0.35)",
    year: "2025",
    units: "5,000+",
    acres: "1,000+",
    desc: "Flagship community. First of its kind in the United States — setting the prototype for every community to follow.",
    isActive: true,
  },
  {
    id: "02",
    location: "Southeast",
    state: "TBD",
    status: "Planned",
    statusColor: "#5ba3e0",
    statusBg: "rgba(91,163,224,0.10)",
    statusBorder: "rgba(91,163,224,0.28)",
    year: "2027",
    units: "3,000+",
    acres: "600+",
    desc: "Site selection underway. Modeled on the Texas prototype with regional adaptation.",
    isActive: false,
  },
  {
    id: "03",
    location: "Midwest",
    state: "TBD",
    status: "Planned",
    statusColor: "#5ba3e0",
    statusBg: "rgba(91,163,224,0.10)",
    statusBorder: "rgba(91,163,224,0.28)",
    year: "2028",
    units: "3,000+",
    acres: "600+",
    desc: "Expanding the Humanly® model into America's heartland. Community design phase begins 2026.",
    isActive: false,
  },
  {
    id: "04",
    location: "West Coast",
    state: "TBD",
    status: "Vision",
    statusColor: "#a78bfa",
    statusBg: "rgba(167,139,250,0.10)",
    statusBorder: "rgba(167,139,250,0.25)",
    year: "2030",
    units: "4,000+",
    acres: "800+",
    desc: "Urban-adjacent workforce housing market. High-demand region for attainable homeownership.",
    isActive: false,
  },
  {
    id: "05",
    location: "Northeast",
    state: "TBD",
    status: "Vision",
    statusColor: "#a78bfa",
    statusBg: "rgba(167,139,250,0.10)",
    statusBorder: "rgba(167,139,250,0.25)",
    year: "2032",
    units: "3,500+",
    acres: "700+",
    desc: "Completing the coast-to-coast network. 50 states. 50 communities. One mission.",
    isActive: false,
  },
];

const stats = [
  { value: "5,000+", label: "Units · Flagship" },
  { value: "50", label: "States · Target" },
  { value: "2032", label: "National Goal" },
  { value: "1M+", label: "Lives Impacted" },
];

export const CPipeline = () => {
  const sectionRef = useRef<HTMLElement>(null);
  const inView = useInView(sectionRef, { once: true, margin: "-100px" });

  return (
    <section
      ref={sectionRef}
      className="relative overflow-hidden bg-[#071019] py-24 lg:py-36"
    >
      <div
        className="pointer-events-none absolute inset-0"
        style={{
          background: [
            "radial-gradient(circle at 18% 22%, rgba(61,175,152,0.14), transparent 28%)",
            "radial-gradient(circle at 78% 68%, rgba(91,63,158,0.12), transparent 34%)",
            "radial-gradient(circle at 85% 15%, rgba(170, 61, 173, 0.10), transparent 30%)",
            "radial-gradient(circle at 10% 80%, rgba(170, 61, 173, 0.08), transparent 28%)",
            "linear-gradient(180deg, rgba(255,255,255,0.02), transparent 30%, rgba(255,255,255,0.01) 100%)",
          ].join(","),
        }}
      />

      <div
        className="pointer-events-none absolute inset-0 opacity-[0.04]"
        style={{
          backgroundImage:
            "linear-gradient(rgba(247,246,242,0.35) 1px, transparent 1px), linear-gradient(90deg, rgba(247,246,242,0.35) 1px, transparent 1px)",
          backgroundSize: "72px 72px",
          maskImage:
            "radial-gradient(circle at center, black 45%, transparent 100%)",
          WebkitMaskImage:
            "radial-gradient(circle at center, black 45%, transparent 100%)",
        }}
      />

      <div className="relative max-w-[1380px] mx-auto px-6 lg:px-12">
        <div className="grid grid-cols-1 lg:grid-cols-[1.15fr_0.85fr] gap-16 lg:gap-10 items-start mb-16 lg:mb-20">
          <div>
            <motion.p
              initial={{ opacity: 0, y: 24 }}
              animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 24 }}
              transition={{ duration: 0.7, delay: 0, ease: [0.22, 1, 0.36, 1] }}
              className="mb-4 inline-flex items-center gap-3 text-[11px] font-semibold tracking-[0.3em] uppercase text-[#3daf98]"
              style={{ fontFamily: "'Bricolage Grotesque', sans-serif" }}
            >
              <span className="block w-8 h-px bg-[#3daf98]" />
              National Expansion Pipeline
            </motion.p>

            <motion.h2
              initial={{ opacity: 0, y: 24 }}
              animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 24 }}
              transition={{ duration: 0.7, delay: 0.08, ease: [0.22, 1, 0.36, 1] }}
              className="text-[clamp(2.35rem,5.4vw,4.9rem)] leading-[0.96] tracking-[-0.04em] text-[#f7f6f2]"
              style={{ fontFamily: "'IvyOraDisplay', serif" }}
            >
              A national roadmap,<br />
              <span className="text-[#3daf98]">cinematic in motion.</span>
            </motion.h2>
          </div>

          <motion.div
            initial={{ opacity: 0, y: 24 }}
            animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 24 }}
            transition={{ duration: 0.7, delay: 0.16, ease: [0.22, 1, 0.36, 1] }}
            className="lg:pt-8"
          >
            <p
              className="max-w-[42ch] text-[0.97rem] leading-[1.9] text-[#f7f6f2]/56"
              style={{ fontFamily: "'Bricolage Grotesque', sans-serif" }}
            >
              This direction turns the pipeline into a long-form expansion filmstrip — one active launch point,
              followed by future markets unfolding across a glowing national rail.
            </p>
          </motion.div>
        </div>

        <motion.div
          initial={{ opacity: 0, y: 24 }}
          animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 24 }}
          transition={{ duration: 0.7, delay: 0.22, ease: [0.22, 1, 0.36, 1] }}
          className="grid grid-cols-2 lg:grid-cols-4 gap-px rounded-[28px] overflow-hidden border border-white/[0.07] bg-white/[0.06] mb-14 lg:mb-20"
        >
          {stats.map((stat) => (
            <div key={stat.label} className="bg-[#08121c] px-6 py-6 lg:px-7 lg:py-7">
              <div
                className="text-[clamp(1.7rem,3vw,2.5rem)] leading-none text-[#f7f6f2] tracking-[-0.03em]"
                style={{ fontFamily: "'IvyOraDisplay', serif" }}
              >
                {stat.value}
              </div>
              <div
                className="mt-2 text-[10px] uppercase tracking-[0.24em] text-[#f7f6f2]/36"
                style={{ fontFamily: "'Bricolage Grotesque', sans-serif" }}
              >
                {stat.label}
              </div>
            </div>
          ))}
        </motion.div>

        <div className="relative">
          <motion.div
            initial={{ width: 0 }}
            animate={inView ? { width: "22%" } : { width: 0 }}
            transition={{ duration: 1.6, delay: 0.5, ease: [0.22, 1, 0.36, 1] }}
            style={{
              background: "linear-gradient(90deg, #3daf98 0%, rgba(61,175,152,0.15) 100%)",
              boxShadow: "0 0 18px rgba(61,175,152,0.5)",
            }}
          />

          <div className="grid grid-cols-1 lg:grid-cols-[1.7fr_1fr_0.92fr_0.84fr_0.76fr] gap-5 lg:gap-4 items-start">
            <motion.div
              initial={{ opacity: 0, y: 24 }}
              animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 24 }}
              transition={{ duration: 0.7, delay: 0.28, ease: [0.22, 1, 0.36, 1] }}
              className="relative rounded-[30px] border border-[#3daf98]/25 overflow-hidden min-h-[430px] lg:min-h-[520px] bg-[linear-gradient(180deg,rgba(61,175,152,0.18)_0%,rgba(16,31,42,0.72)_46%,rgba(8,14,22,0.98)_100%)]"
            >
              <div className="absolute inset-0 bg-[radial-gradient(circle_at_20%_15%,rgba(255,255,255,0.18),transparent_30%)]" />
              <div className="absolute -right-10 top-12 w-48 h-48 rounded-full bg-[#3daf98]/15 blur-3xl" />
              <div className="absolute bottom-0 left-0 right-0 h-28 bg-[linear-gradient(180deg,transparent,rgba(0,0,0,0.45))]" />

              <div className="relative z-10 h-full flex flex-col justify-between p-7 lg:p-9">
                <div>
                  <div className="flex items-center justify-between gap-4 mb-10">
                    <span
                      className="inline-flex items-center gap-2 rounded-full border px-4 py-1.5 text-[10px] font-semibold uppercase tracking-[0.16em]"
                      style={{
                        color: pipeline[0].statusColor,
                        background: pipeline[0].statusBg,
                        borderColor: pipeline[0].statusBorder,
                        fontFamily: "'Bricolage Grotesque', sans-serif",
                      }}
                    >
                      {pipeline[0].status}
                    </span>

                    <motion.div
                      animate={{ opacity: [0.65, 1, 0.65], scale: [1, 1.06, 1] }}
                      transition={{ duration: 2.8, repeat: Infinity, ease: "easeInOut" }}
                      className="flex items-center gap-2"
                    >
                      <span className="w-2.5 h-2.5 rounded-full bg-[#3daf98] shadow-[0_0_16px_rgba(61,175,152,0.95)]" />
                      <span
                        className="text-[10px] uppercase tracking-[0.26em] text-[#f7f6f2]"
                        style={{ fontFamily: "'Bricolage Grotesque', sans-serif" }}
                      >
                        Live launch
                      </span>
                    </motion.div>
                  </div>

                  <div
                    className="text-[5.6rem] leading-none tracking-[-0.06em] text-white/10 mb-5"
                    style={{ fontFamily: "'IvyOraDisplay', serif" }}
                  >
                    {pipeline[0].id}
                  </div>

                  <div
                    className="text-[clamp(2rem,4vw,3rem)] leading-[0.95] tracking-[-0.03em] text-[#f7f6f2]"
                    style={{ fontFamily: "'IvyOraDisplay', serif" }}
                  >
                    {pipeline[0].location}
                  </div>
                  <div
                    className="mt-2 text-[11px] uppercase tracking-[0.28em] text-[#f7f6f2]/38"
                    style={{ fontFamily: "'Bricolage Grotesque', sans-serif" }}
                  >
                    Ground zero · target {pipeline[0].year}
                  </div>
                </div>

                <div>
                  <p
                    className="max-w-[34ch] text-[0.94rem] leading-[1.85] text-[#f7f6f2]/64 mb-8"
                    style={{ fontFamily: "'Bricolage Grotesque', sans-serif" }}
                  >
                    {pipeline[0].desc}
                  </p>

                  <div className="grid grid-cols-2 gap-4 mb-6">
                    <div className="rounded-2xl border border-white/[0.08] bg-black/15 px-5 py-4 backdrop-blur-sm">
                      <div
                        className="text-[1.5rem] leading-none text-[#f7f6f2]"
                        style={{ fontFamily: "'IvyOraDisplay', serif" }}
                      >
                        {pipeline[0].units}
                      </div>
                      <div
                        className="mt-2 text-[10px] uppercase tracking-[0.18em] text-[#f7f6f2]/34"
                        style={{ fontFamily: "'Bricolage Grotesque', sans-serif" }}
                      >
                        Units planned
                      </div>
                    </div>
                    <div className="rounded-2xl border border-white/[0.08] bg-black/15 px-5 py-4 backdrop-blur-sm">
                      <div
                        className="text-[1.5rem] leading-none text-[#f7f6f2]"
                        style={{ fontFamily: "'IvyOraDisplay', serif" }}
                      >
                        {pipeline[0].acres}
                      </div>
                      <div
                        className="mt-2 text-[10px] uppercase tracking-[0.18em] text-[#f7f6f2]/34"
                        style={{ fontFamily: "'Bricolage Grotesque', sans-serif" }}
                      >
                        Acres secured
                      </div>
                    </div>
                  </div>

                  <div className="flex items-center justify-between gap-4 border-t border-white/[0.08] pt-5">
                    <div>
                      <div
                        className="text-[10px] uppercase tracking-[0.24em] text-[#f7f6f2]/30"
                        style={{ fontFamily: "'Bricolage Grotesque', sans-serif" }}
                      >
                        Expansion status
                      </div>
                      <div
                        className="mt-2 text-[1rem] text-[#f7f6f2]/84"
                        style={{ fontFamily: "'IvyOraDisplay', serif" }}
                      >
                        Prototype community in motion
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </motion.div>

            {pipeline.slice(1).map((item, idx) => {
              const sizeClasses = [
                "lg:mt-0 lg:min-h-[330px]",
                "lg:mt-5 lg:min-h-[306px]",
                "lg:mt-10 lg:min-h-[282px]",
                "lg:mt-14 lg:min-h-[258px]",
              ];

              return (
                <motion.div
                  key={item.id}
                  initial={{ opacity: 0, y: 24 }}
                  animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 24 }}
                  transition={{
                    duration: 0.7,
                    delay: 0.34 + idx * 0.08,
                    ease: [0.22, 1, 0.36, 1],
                  }}
                  className={`relative pt-8 lg:pt-0 ${sizeClasses[idx]}`}
                >
                  <div className="hidden lg:flex items-center justify-center h-[88px] relative">
                    <div
                      className="absolute top-[43px] left-1/2 -translate-x-1/2 w-px h-8"
                      style={{
                        background:
                          idx < 2
                            ? "linear-gradient(180deg, rgba(91,163,224,0.7), transparent)"
                            : "linear-gradient(180deg, rgba(167,139,250,0.65), transparent)",
                      }}
                    />
                    <motion.div
                      animate={{ scale: [1, 1.14, 1], opacity: [0.8, 1, 0.8] }}
                      transition={{ duration: 3.4, repeat: Infinity, delay: idx * 0.25 }}
                      className="relative"
                    >
                      <div
                        className="absolute inset-[-10px] rounded-full blur-md"
                        style={{ background: item.statusColor, opacity: 0.14 }}
                      />
                      <div
                        className="relative w-3.5 h-3.5 rounded-full border"
                        style={{
                          background: item.statusBg,
                          borderColor: item.statusBorder,
                          boxShadow: `0 0 18px ${item.statusColor}28`,
                        }}
                      />
                    </motion.div>
                  </div>

                  <motion.div
                    whileHover={{ y: -6, scale: 1.01 }}
                    transition={{ duration: 0.35, ease: [0.22, 1, 0.36, 1] }}
                    className="relative rounded-[24px] border border-white/[0.08] bg-white/[0.035] min-h-[290px] px-5 py-6 overflow-hidden"
                  >
                    <div
                      className="absolute inset-0 opacity-0 hover:opacity-100 transition-opacity duration-500"
                      style={{
                        background: `linear-gradient(180deg, ${item.statusBg}, transparent 65%)`,
                      }}
                    />

                    <div
                      className="absolute top-3 right-4 text-[2.85rem] leading-none tracking-[-0.04em] text-white/[0.045]"
                      style={{ fontFamily: "'IvyOraDisplay', serif" }}
                    >
                      {item.id}
                    </div>

                    <span
                      className="relative z-10 inline-flex items-center gap-1.5 rounded-full border px-3 py-1 text-[10px] font-semibold uppercase tracking-[0.14em]"
                      style={{
                        color: item.statusColor,
                        background: item.statusBg,
                        borderColor: item.statusBorder,
                        fontFamily: "'Bricolage Grotesque', sans-serif",
                      }}
                    >
                      <span
                        className="w-[5px] h-[5px] rounded-full"
                        style={{ background: item.statusColor }}
                      />
                      {item.status}
                    </span>

                    <div className="relative z-10 mt-6">
                      <div
                        className="text-[1.45rem] leading-[1.05] tracking-[-0.02em] text-[#f7f6f2]"
                        style={{ fontFamily: "'IvyOraDisplay', serif" }}
                      >
                        {item.location}
                      </div>
                      <div
                        className="mt-1 text-[10px] uppercase tracking-[0.22em] text-[#f7f6f2]/46"
                        style={{ fontFamily: "'Bricolage Grotesque', sans-serif" }}
                      >
                        Target {item.year}
                      </div>
                    </div>

                    <div className="relative z-10 mt-8 space-y-4">
                      <div>
                        <div
                          className="text-[1rem] text-[#f7f6f2]/90"
                          style={{ fontFamily: "'IvyOraDisplay', serif" }}
                        >
                          {item.units}
                        </div>
                        <div
                          className="mt-1 text-[10px] uppercase tracking-[0.18em] text-[#f7f6f2]/42"
                          style={{ fontFamily: "'Bricolage Grotesque', sans-serif" }}
                        >
                          Units
                        </div>
                      </div>
                      <div className="w-8 h-px bg-white/10" />
                      <div>
                        <div
                          className="text-[1rem] text-[#f7f6f2]/90"
                          style={{ fontFamily: "'IvyOraDisplay', serif" }}
                        >
                          {item.acres}
                        </div>
                        <div
                          className="mt-1 text-[10px] uppercase tracking-[0.18em] text-[#f7f6f2]/42"
                          style={{ fontFamily: "'Bricolage Grotesque', sans-serif" }}
                        >
                          Acres
                        </div>
                      </div>
                    </div>

                    <p
                      className="relative z-10 mt-8 text-[0.8rem] leading-[1.8] text-[#f7f6f2]/60"
                      style={{ fontFamily: "'Bricolage Grotesque', sans-serif" }}
                    >
                      {item.desc}
                    </p>
                  </motion.div>
                </motion.div>
              );
            })}
          </div>
        </div>

        <motion.div
          initial={{ opacity: 0, y: 24 }}
          animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 24 }}
          transition={{ duration: 0.7, delay: 0.72, ease: [0.22, 1, 0.36, 1] }}
          className="mt-16 lg:mt-20 rounded-[30px] border border-white/[0.08] bg-[linear-gradient(135deg,rgba(15,27,38,0.88),rgba(18,31,46,0.74),rgba(9,17,24,0.88))] overflow-hidden relative"
        >
          <div className="absolute inset-y-0 right-0 w-[40%] bg-[radial-gradient(circle_at_center,rgba(61,175,152,0.1),transparent_62%)]" />
          <div className="relative px-8 py-10 lg:px-12 lg:py-12 flex flex-col lg:flex-row items-start lg:items-center justify-between gap-10">
            <div>
              <p
                className="text-[clamp(1.35rem,2.8vw,2.2rem)] leading-[1.24] tracking-[-0.02em] text-[#f7f6f2]"
                style={{ fontFamily: "'IvyOraDisplay', serif" }}
              >
                The expansion story reads left to right —<br className="hidden lg:block" />
                from a built reality to a coast-to-coast future.
              </p>
              <p
                className="mt-4 max-w-[54ch] text-[0.9rem] leading-[1.8] text-[#f7f6f2]/55"
                style={{ fontFamily: "'Bricolage Grotesque', sans-serif" }}
              >
                One active state. Four future markets. Fifty-state ambition.
              </p>
            </div>

            <div className="w-full lg:w-[260px]">
              <div className="flex items-baseline gap-2 justify-start lg:justify-end">
                <span
                  className="text-[2.2rem] leading-none text-[#3daf98]"
                  style={{ fontFamily: "'IvyOraDisplay', serif" }}
                >
                  1
                </span>
                <span
                  className="text-[0.8rem] text-[#f7f6f2]/38"
                  style={{ fontFamily: "'Bricolage Grotesque', sans-serif" }}
                >
                  of 50 states live
                </span>
              </div>
              <div className="mt-4 h-[3px] rounded-full bg-white/[0.08] overflow-hidden">
                <motion.div
                  initial={{ width: 0 }}
                  animate={inView ? { width: "2%" } : { width: 0 }}
                  transition={{ duration: 1.5, delay: 0.95, ease: [0.22, 1, 0.36, 1] }}
                  className="h-full rounded-full bg-gradient-to-r from-[#3daf98] to-[#1a4f82] shadow-[0_0_16px_rgba(61,175,152,0.7)]"
                />
              </div>
              <div
                className="mt-3 text-[10px] uppercase tracking-[0.26em] text-[#f7f6f2]/28 lg:text-right"
                style={{ fontFamily: "'Bricolage Grotesque', sans-serif" }}
              >
                National expansion underway
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};