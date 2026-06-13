"use client";
import React from 'react';
import { motion } from 'framer-motion';
import Image from 'next/image';
import { Mail, Globe, MapPin, Calendar } from 'lucide-react';

export const IrContactCard = () => {
  return (
    <section id="ir-contact" className="relative py-20 lg:py-32 bg-transparent overflow-x-clip">
      {/* Floating Fluid Glass Blobs */}
      <div className="absolute inset-0 overflow-visible pointer-events-none z-0">
        {/* Blob 1: Orange/Amber - floating and morphing */}
        <motion.div
          animate={{
            x: [-40, 40, -20],
            y: [-30, 50, -10],
            scale: [1, 1.2, 0.9],
            rotate: [0, 120, 240]
          }}
          transition={{
            duration: 20,
            repeat: Infinity,
            repeatType: "mirror",
            ease: "easeInOut"
          }}
          className="absolute top-1/4 left-1/4 w-[350px] h-[350px] md:w-[500px] md:h-[500px] rounded-full bg-gradient-to-tr from-[#d96a2b]/20 to-[#f09050]/5 blur-[80px] md:blur-[120px] mix-blend-screen"
        />

        {/* Blob 2: Teal/Green - floating in opposite phase */}
        <motion.div
          animate={{
            x: [50, -30, 20],
            y: [40, -40, 10],
            scale: [0.9, 1.15, 1],
            rotate: [360, 240, 120]
          }}
          transition={{
            duration: 24,
            repeat: Infinity,
            repeatType: "mirror",
            ease: "easeInOut"
          }}
          className="absolute bottom-1/4 right-1/4 w-[400px] h-[400px] md:w-[600px] md:h-[600px] rounded-full bg-gradient-to-br from-[#3daf98]/15 to-transparent blur-[90px] md:blur-[140px] mix-blend-screen"
        />

        {/* Blob 3: Deep Royal Blue/Purple */}
        <motion.div
          animate={{
            x: [-20, 30, -50],
            y: [50, -20, 30],
            scale: [1.1, 0.9, 1.2],
            rotate: [180, 0, 360]
          }}
          transition={{
            duration: 18,
            repeat: Infinity,
            repeatType: "mirror",
            ease: "easeInOut"
          }}
          className="absolute top-1/2 left-1/3 w-[300px] h-[300px] md:w-[450px] md:h-[450px] rounded-full bg-gradient-to-bl from-[#2d7dd2]/15 to-[#5b3f9e]/10 blur-[80px] md:blur-[120px] mix-blend-screen"
        />
      </div>

      <div className="mx-auto w-full max-w-[1440px] px-6 lg:px-16 relative grid grid-cols-1 lg:grid-cols-2 gap-12 items-stretch">

        {/* Left Column: Contact Content */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: false, amount: 0.25 }}
          transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
          className="relative z-10 flex h-full w-full flex-col justify-between overflow-visible rounded-[32px] bg-sandstone-100/55 p-8 shadow-[0_25px_60px_-15px_rgba(0,0,0,0.15)] backdrop-blur-[32px] md:p-12"
        >
          {/* Ambient premium glow */}
          <div className="pointer-events-none absolute inset-0">
            <div
              className="absolute right-0 top-0 -translate-x-[50%] -translate-y-[28%] w-[clamp(22rem,10rem+34vw,34rem)] h-[clamp(22rem,10rem+34vw,34rem)] opacity-[0.9]"
              style={{
                background:
                  "radial-gradient(50% 50%, rgba(var(--radial-gradient-color, 255, 97, 54), 0.06), rgba(var(--radial-gradient-color, 255, 97, 54), 0.03) 52%, rgba(var(--radial-gradient-color, 255, 97, 54), 0))",
              }}
            />

            <div
              className="absolute bottom-0 left-0 -translate-x-[28%] translate-y-[28%] w-[clamp(22rem,10rem+34vw,34rem)] h-[clamp(22rem,10rem+34vw,34rem)] opacity-[0.8]"
              style={{
                background:
                  "radial-gradient(50% 50%, rgba(var(--radial-gradient-color, 255, 97, 54), 0.05), rgba(var(--radial-gradient-color, 255, 97, 54), 0.02) 52%, rgba(var(--radial-gradient-color, 255, 97, 54), 0))",
              }}
            />

            <div className="absolute inset-[1px] rounded-[31px] border border-white/20" />
          </div>

          <div className="relative z-10">

            {/* Original heading */}
            <h2 className="mb-4 font-cormorant text-4xl font-normal leading-[40px] md:leading-[60px] tracking-tight text-sandstone-500 md:text-5xl">
              Contact <span className="not-italic text-[rgb(var(--radial-gradient-color))]">Investor Relations</span>
            </h2>

            {/* Original paragraph */}
            <p className="mb-12 max-w-[500px] font-albert text-base font-light leading-[28px] md:leading-[30px] text-sandstone-500 md:text-lg">
              Our investor relations team is available to answer questions, walk through the data room, and arrange a direct conversation with leadership.
            </p>

            {/* Premium info rows */}
            <div className="mb-12 space-y-4">
              <div className="group rounded-2xl border border-[rgba(var(--radial-gradient-color),0.1)] bg-white/30 px-5 py-5 transition-all duration-300 hover:border-sandstone-400/40 hover:bg-white/40">
                <div className="flex items-start gap-4">
                  <div className="mt-0.5 flex h-10 w-10 shrink-0 items-center justify-center rounded-full border border-[rgba(var(--radial-gradient-color),0.2)] bg-[rgba(var(--radial-gradient-color),0.08)]">
                    <Mail className="h-4 w-4 text-[rgb(var(--radial-gradient-color))]" strokeWidth={1.5} />
                  </div>
                  <div className="min-w-0">
                    <div className="mb-1 text-xs font-bold font-albert uppercase tracking-widest text-sandstone-500">
                      Email
                    </div>
                    <div className="break-all">
                      <a
                        href="mailto:investors@humanly.com"
                        className="text-[rgb(var(--radial-gradient-color))] font-albert font-medium text-base transition-colors duration-300 hover:text-[#ff7a55]"
                      >
                        investors@humanly.com
                      </a>
                    </div>
                  </div>
                </div>
              </div>

              <div className="group rounded-2xl border border-[rgba(var(--radial-gradient-color),0.1)] bg-white/30 px-5 py-5 transition-all duration-300 hover:border-sandstone-400/40 hover:bg-white/40">
                <div className="flex items-start gap-4">
                  <div className="mt-0.5 flex h-10 w-10 shrink-0 items-center justify-center rounded-full border border-[rgba(var(--radial-gradient-color),0.2)] bg-[rgba(var(--radial-gradient-color),0.08)]">
                    <Globe className="h-4 w-4 text-[rgb(var(--radial-gradient-color))]" strokeWidth={1.5} />
                  </div>
                  <div className="min-w-0">
                    <div className="mb-1 text-xs font-bold uppercase tracking-widest text-sandstone-500">
                      Website
                    </div>
                    <div className="break-all">
                      <a
                        href="https://humanly.us"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="font-medium text-base text-[rgb(var(--radial-gradient-color))] font-albert transition-colors duration-300 hover:text-[#ff7a55]"
                      >
                        humanly.us
                      </a>
                    </div>
                  </div>
                </div>
              </div>

              <div className="group rounded-2xl border border-[rgba(var(--radial-gradient-color),0.1)] bg-white/30 px-5 py-5 transition-all duration-300 hover:border-sandstone-400/40 hover:bg-white/40">
                <div className="flex items-start gap-4">
                  <div className="mt-0.5 flex h-10 w-10 shrink-0 items-center justify-center rounded-full border border-[rgba(var(--radial-gradient-color),0.2)] bg-[rgba(var(--radial-gradient-color),0.08)]">
                    <MapPin className="h-4 w-4 text-[rgb(var(--radial-gradient-color))]" strokeWidth={1.5} />
                  </div>
                  <div className="min-w-0">
                    <div className="mb-1 text-xs font-bold uppercase tracking-widest text-sandstone-500">
                      Office
                    </div>
                    <div className="text-base font-albert font-medium text-[rgb(var(--radial-gradient-color))]">
                      Dallas, Texas, US
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <div className="flex flex-wrap gap-5 justify-center md:justify-start">
              <a
                href="https://calendly.com"
                target="_blank"
                rel="noopener noreferrer"
                className="group relative inline-flex items-center gap-3 overflow-hidden rounded-xl border border-[rgba(var(--radial-gradient-color),0.3)] bg-sandstone-100/60 px-10 py-4 font-bold text-sandstone-700 shadow-md backdrop-blur-sm transition-all duration-300 hover:-translate-y-1 hover:border-[rgba(var(--radial-gradient-color),0.7)] hover:text-[rgb(var(--radial-gradient-color))] hover:shadow-[0_8px_30px_-6px_rgba(var(--radial-gradient-color),0.35)]"
              >
                <span className="absolute inset-0 rounded-xl bg-transparent transition-all duration-300 group-hover:bg-[rgba(var(--radial-gradient-color),0.08)]" />
                <Calendar
                  className="relative z-10 h-5 w-5 transition-colors duration-300"
                  strokeWidth={1.5}
                />
                <span className="relative text-sandstone-500 font-albert font-semibold z-10 group-hover:text-[rgb(var(--radial-gradient-color))]">Schedule a Call</span>
              </a>
            </div>
          </div>
        </motion.div>

        {/* Right Column: Image Container */}
        <div className="relative z-10 w-full h-[400px] lg:h-full min-h-[400px] overflow-hidden rounded-3xl shadow-[0_25px_60px_-15px_rgba(0,0,0,0.15)]">
          <Image
            src="/images/AdobeStock_195533712.jpeg"
            alt="Humanly Investor Relations"
            fill
            className="w-full h-full object-cover"
          />
          {/* Subtle gradient overlay to match styling */}
          <div className="z-10 absolute bottom-0 right-0 h-full w-full bg-gradient-to-t from-sandstone-200/40 via-transparent to-transparent pointer-events-none"></div>
        </div>
      </div>
    </section>
  );
};
