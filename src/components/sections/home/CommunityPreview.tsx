"use client";
import React from 'react';
import { motion } from 'framer-motion';

export const CommunityPreview = () => {
  return (
    <section className="py-24 lg:py-32 bg-transparent relative overflow-x-clip">
      <div className="max-w-[1440px] mx-auto px-6 md:px-12 lg:px-16 relative z-10 w-full">

        <div className="flex flex-col lg:flex-row items-center gap-10 lg:gap-12">

          {/* Left Column */}
          <div className="w-full lg:w-1/2">
            <div className="h-full flex flex-col justify-between">

              {/* Top + Middle Content */}
                <motion.div
                  initial={{ opacity: 0, y: 24 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, amount: 0.35 }}
                  transition={{ duration: 1 }}>
                  <div className="w-full">
                    <h2 className="text-4xl md:text-5xl font-cormorant font-light text-sandstone-500 leading-[40px] md:leading-[60px] tracking-tight mb-4">
                      Flagship Communities
                    </h2>
                    <h3 className="text-xl md:text-2xl font-light font-albert tracking-tight text-sandstone-500 mb-6">
                      The Launchpad @ North Austin
                    </h3>

                  </div>
                  <div className="w-full">
                    {/* Mobile/Tablet view */}
                    <p className="block lg:hidden text-base md:text-lg text-sandstone-500 font-light font-albert leading-relaxed tracking-normal">
                      Our flagship community features 420 attainably priced units, a 20,000 sq ft Circle of Services® hub, and full HumanlyOS® integration. Designed as a blueprint for the future of workforce living.
                    </p>
                  </div>
                </motion.div>

                {/* Desktop view */}
                <motion.div
                  initial={{ opacity: 0, y: 24 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, amount: 0.35 }}
                  transition={{ duration: 1 }}>
                <div className="hidden lg:block lg:text-base text-sandstone-500 font-light font-albert leading-relaxed tracking-normal">
                  <ol className="list-disc my-8 pl-10 space-y-4">
                    <li>420 attainably priced units</li>
                    <li>20,000 sq ft Circle of Services® hub</li>
                    <li>Full HumanlyOS® integration</li>
                  </ol>
                  <p className="text-pretty lg:text-lg">
                    Designed as a blueprint for the future of workforce living.
                  </p>
                </div>
                </motion.div>
        



            </div>
          </div>

          {/* Right Column: Stunning Imagery */}
          <div className="w-full lg:w-1/2 relative">
            <div
              className="absolute pointer-events-none right-1/3 bottom-1/2 translate-x-1/2 translate-y-1/2 w-[clamp(44rem,14.769rem+116.923vw,120rem)] h-[clamp(25rem,8.654rem+65.385vw,67.5rem)] -z-10"
              style={{
                background:
                  "radial-gradient(50% 50%, rgba(var(--radial-gradient-color, 107, 206, 255), 0.20), rgba(var(--radial-gradient-color, 107, 206, 255), 0.1) 50%, rgba(var(--radial-gradient-color, 107, 206, 255), 0))",
              }}
            />
            <motion.div
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, ease: "easeOut" }}
              className="relative w-full aspect-[3/1] lg:aspect-[3/4] rounded-3xl overflow-hidden shadow-[0_20px_60px_rgba(0,0,0,0.08)] group"
            >
              <img
                src="/images/pexels-ianr-21853691.jpg"
                alt="Community Preview"
                className="absolute inset-0 w-full h-full object-cover group-hover:scale-105 transition-transform duration-[1500ms] ease-out"
              />
              <div className="absolute inset-0 backdrop-blur-sm lg:backdrop-blur-none bg-gradient-to-t from-black/80 via-black/20 to-transparent pointer-events-none transition-opacity duration-700 opacity-80 group-hover:opacity-100"></div>

              {/* Bottom Stats */}
              <div className="absolute bottom-1/3 lg:bottom-0 left-0 w-full lg:p-12 z-10 flex flex-wrap text-white justify-around lg:bg-black/10 lg:rounded-t-3xl lg:backdrop-blur-sm">
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: 0.2 }}
                >
                  <div className="text-2xl sm:text-3xl md:text-4xl font-normal text-center font-albert drop-shadow-md">
                    80–120%
                  </div>
                  <div className="text-xs md:text-base font-medium text-center font-cormorant tracking-widest drop-shadow-md">
                    AMI Target
                  </div>
                </motion.div>

                <div className="h-30 w-0.5 bg-white/30" />

                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: 0.3 }}
                >
                  <div className="text-2xl sm:text-3xl md:text-4xl font-normal text-center font-albert drop-shadow-md">
                    ~70%
                  </div>
                  <div className="text-xs md:text-base font-medium text-center font-cormorant tracking-widest drop-shadow-md">
                    Lots Retained
                  </div>
                </motion.div>
              </div>
            </motion.div>
          </div>

        </div>
      </div>
    </section>
  );
};
