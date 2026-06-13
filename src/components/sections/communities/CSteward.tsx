"use client";

import React from "react";
import { motion } from "framer-motion";
import Image from "next/image";

export const CSteward = () => {
  return (
    <section className="relative z-0 overflow-x-clip bg-[#f7f1e8] py-24 md:py-40">
      <div className="relative mx-auto max-w-[1380px] px-6 md:px-12">
       
       {/* Purple gradient circle */}
       <div
        className="absolute pointer-events-none left-0 top-0 h-[clamp(25rem,8.654rem+65.385vw,67.5rem)] w-[clamp(44rem,14.769rem+116.923vw,120rem)] -translate-x-3/4 -translate-y-1/2"
        style={{
          background:
            "radial-gradient(50% 50%, rgba(var(--radial-gradient-color, 170, 61, 173), 0.25), rgba(var(--radial-gradient-color, 170, 61, 173), 0.08) 50%, rgba(var(--radial-gradient-color, 170, 61, 173), 0))",
        }}
      />

        {/* Decorative background element */}
        <div className="pointer-events-none absolute top-0 right-0 h-[600px] w-[600px] rounded-full bg-[#e8e0d5] opacity-60 blur-[100px]" />
        <div className="pointer-events-none absolute bottom-0 left-0 h-[400px] w-[400px] rounded-full bg-white opacity-40 blur-[80px]" />

        <div className="grid grid-cols-1 items-center gap-12 lg:grid-cols-12 lg:gap-20">
          {/* Left Column: Text Content */}
          <div className="relative z-10 lg:col-span-6 xl:col-span-7">
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
            >
              <h2 className="mb-10 text-sandstone-500">
                <span className="mb-2 block font-cormorant text-3xl font-normal leading-[40px] tracking-tight md:text-5xl md:leading-[60px]">
                  We don't build and exit.
                </span>
                <span className="block font-cormorant text-3xl font-light italic leading-[40px] text-sandstone-500 md:text-5xl md:leading-[60px]">
                  We stay and steward.
                </span>
              </h2>

              <div className="border-l border-[#5C472B]/20 pl-6">
                <p className="max-w-lg font-albert text-base font-light leading-[28px] text-sandstone-500 md:text-lg md:leading-[30px]">
                  We treat our land ownership as long-term infrastructure,
                  building communities designed for lasting growth and vibrancy.
                  As communities strengthen over time, locations thrive —
                  creating compounding value for operators and residents alike.
                </p>
              </div>
            </motion.div>
          </div>

          {/* Right Column: Image */}
          <div className="relative z-10 mt-16 lg:col-span-6 lg:mt-0 xl:col-span-5">
            <motion.div
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 1, delay: 0.2, ease: [0.16, 1, 0.3, 1] }}
              className="relative mx-auto aspect-[3/4] w-full max-w-[460px] lg:ml-auto"
            >
              {/* Main Image */}
              <div className="group absolute inset-0 overflow-hidden rounded-t-[200px] rounded-b-3xl shadow-[0_20px_60px_rgba(63,44,31,0.15)]">
                <Image
                  src="/images/pexels-silverkblack-23225003.jpg"
                  alt="Aerial view of green land plots"
                  fill
                  className="object-cover transition-transform duration-[2000ms] group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-[#3F2C1F]/5 mix-blend-overlay" />
              </div>

              {/* Decorative border */}
              <div className="absolute -inset-4 -z-10 rounded-t-[220px] rounded-b-[40px] border border-[#5C472B]/15 md:-inset-6" />

              {/* Floating Badge */}
              <motion.div
                initial={{ opacity: 0, y: 20, rotate: -2 }}
                whileInView={{ opacity: 1, y: 0, rotate: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.8, delay: 0.6, ease: [0.16, 1, 0.3, 1] }}
                className="group absolute -bottom-10 -left-10"
              >
                <div className="relative w-[90px] md:w-[140px] aspect-[3/4] overflow-hidden rounded-t-[60px] rounded-b-[18px] border border-white/20 shadow-[0_16px_32px_rgba(63,44,31,0.14)]">
                  {/* Background image */}
                  <div className="absolute inset-0">
                    <Image
                      src="/images/pexels-silverkblack-23225003.jpg"
                      alt=""
                      fill
                      className="object-cover"
                    />
                  </div>

                  {/* Soft tint */}
                  <div className="absolute inset-0 bg-[#3F2C1F]/18" />

                  {/* Full glass layer */}
                  <div className="absolute inset-0 bg-white/12 backdrop-blur-xl" />

                  {/* Content */}
                  <div className="relative z-10 flex h-full flex-col items-center justify-center px-2.5">
                    <motion.div
                      animate={{ rotate: 360 }}
                      transition={{ duration: 12, repeat: Infinity, ease: "linear" }}
                      className="mb-2 text-white drop-shadow-[0_1px_2px_rgba(0,0,0,0.18)]"
                    >
                      <svg
                        width="13"
                        height="13"
                        viewBox="0 0 24 24"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path
                          d="M12 2L14.4 9.6L22 12L14.4 14.4L12 22L9.6 14.4L2 12L9.6 9.6L12 2Z"
                          fill="currentColor"
                        />
                      </svg>
                    </motion.div>

                    <div className="mx-auto max-w-20 text-center">
                      <span className="mb-1 block font-cormorant text-xs leading-[16px] font-medium uppercase tracking-widest text-white/90">
                        Long-Term Impact
                      </span>

                      <span className="block font-albert text-[10px] font-light leading-[14px] tracking-widest text-white">
                        Compounding Community Value
                      </span>
                    </div>
                  </div>
                </div>
              </motion.div>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
};