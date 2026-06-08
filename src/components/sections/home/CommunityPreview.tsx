"use client";
import React from 'react';
import { motion } from 'framer-motion';

export const CommunityPreview = () => {
  return (
    <section className="py-24 lg:py-32 bg-transparent relative overflow-x-clip">
      <div className="max-w-[1440px] mx-auto px-6 md:px-12 lg:px-16 relative z-10 w-full">

        <div className="flex flex-col lg:flex-row items-center gap-16 lg:gap-24">

          {/* Left Column */}
          <div className="w-full lg:w-1/2">
            <div className="h-full min-h-[540px] flex flex-col justify-between">

              {/* Top + Middle Content */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
              >
                <h2 className="text-3xl md:text-5xl font-cormorant font-light text-sandstone-500 leading-[40px] md:leading-[60px] tracking-tight mb-4">
                  Flagship Communities.
                </h2>

                <div className="max-w-xl">
                  <h3 className="text-xl md:text-2xl font-light font-albert tracking-tight text-sandstone-500 mb-8">
                    The Launchpad @ North Austin
                  </h3>

                  <p className="text-base md:text-lg text-sandstone-500 font-light font-albert leading-relaxed tracking-normal">
                    Our flagship community features 420 attainably priced units, a 20,000 sq ft Circle of Services® hub, and full HumanlyOS® integration. Designed as a blueprint for the future of workforce living.
                  </p>
                </div>
              </motion.div>

              {/* Bottom Stats */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.2 }}
                className="flex flex-wrap gap-12 pt-10 border-t border-black/10"
              >
                <div>
                  <div className="text-5xl md:text-6xl font-normal font-cormorant text-sandstone-500 mb-3">
                    80–120%
                  </div>
                  <div className="text-xs font-normal text-sandstone-500 font-albert uppercase tracking-widest">
                    AMI Target
                  </div>
                </div>

                <div>
                  <div className="text-5xl md:text-6xl font-normal font-cormorant text-sandstone-500 mb-3">
                    ~70%
                  </div>
                  <div className="text-xs font-normal text-sandstone-500 font-albert uppercase tracking-widest">
                    Lots Retained
                  </div>
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
                  "radial-gradient(50% 50%, rgba(107,206,255, 0.25), rgba(107,206,255, 0.1) 50%, rgba(107,206,255, 0))",
              }}
            />
            <motion.div
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, ease: "easeOut" }}
              className="relative w-full aspect-[4/5] lg:aspect-[3/4] rounded-[2rem] lg:rounded-[3rem] overflow-hidden shadow-[0_20px_60px_rgba(0,0,0,0.08)] group"
            >
              <img
                src="/images/pexels-ianr-21853691.jpg"
                alt="Community Preview"
                className="absolute inset-0 w-full h-full object-cover group-hover:scale-105 transition-transform duration-[1500ms] ease-out"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/50 via-transparent to-transparent pointer-events-none transition-opacity duration-700 opacity-80 group-hover:opacity-100"></div>

            </motion.div>
          </div>

        </div>
      </div>
    </section>
  );
};
