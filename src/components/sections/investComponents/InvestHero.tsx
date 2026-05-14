"use client";
import React, { useRef } from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';
import Image from 'next/image';

export const InvestHero = () => {
  const containerRef = useRef<HTMLElement>(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "end start"]
  });

  const y = useTransform(scrollYProgress, [0, 1], ["0%", "30%"]);
  const opacity = useTransform(scrollYProgress, [0, 0.8], [1, 0]);

  return (
    <section
      ref={containerRef}
      className="relative h-[1000px] flex items-center py-24 md:py-32 lg:py-48 text-center overflow-hidden"
    >
      {/* Background Image Layer with Parallax */}
      <motion.div
        style={{ y, opacity }}
        className="absolute inset-0 z-0"
      >
        <Image
          src="/images/AdobeStock_170554793.jpeg"
          alt="Modern Workforce Housing"
          fill
          priority
          className="object-cover"
        />
        {/* Overlay to ensure readability and blend with the brand */}
        <div className="absolute inset-0 bg-black/40" />
      </motion.div>

      {/* Background Gradients & Grid */}
      <div className="absolute inset-0 pointer-events-none z-[1]">
        <div
          className="absolute inset-0"
          style={{
            background: `
              radial-gradient(ellipse 70% 60% at 50% 100%, rgba(45,125,210,0.22) 0%, transparent 65%),
              radial-gradient(ellipse 50% 40% at 20% 20%, rgba(91,63,158,0.18) 0%, transparent 60%),
              radial-gradient(ellipse 40% 50% at 80% 10%, rgba(217,106,43,0.10) 0%, transparent 55%)
            `
          }}
        />
        {/* Animated Grid Lines */}
        <div
          className="absolute inset-0 opacity-20"
          style={{
            backgroundImage: `
              linear-gradient(rgba(255,255,255,0.02) 1px, transparent 1px),
              linear-gradient(90deg, rgba(255,255,255,0.02) 1px, transparent 1px)
            `,
            backgroundSize: '80px 80px'
          }}
        />
      </div>

      <div className="container relative z-10 mx-auto px-6 max-w-[1200px]">
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-[#c2c5ee] text-[0.75rem] font-bold tracking-[0.14em] uppercase mb-4"
        >
          Investor Relations
        </motion.p>

        <motion.h1
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.1 }}
          className="font-serif text-4xl md:text-5xl lg:text-7xl text-white mb-6 leading-tight max-w-4xl mx-auto"
        >
          Invest in the <br /><em className="lg:text-8xl text-[#f09050] not-italic">future of housing.</em>
        </motion.h1>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="text-[clamp(1.15rem,2.5vw,1.4rem)] text-white max-w-[50ch] mx-auto leading-relaxed mb-10 font-light"
        >
          Humanly® is right now raising capital to build the first vertically integrated AI-native workforce housing platform in America.
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.3 }}
          className="flex flex-wrap gap-4 justify-center"
        >
          <a href="#dataroom" className="inline-flex items-center justify-center px-10 py-4 rounded-xl bg-[#d96a2b] text-white font-bold hover:bg-[#f09050] transition-all hover:-translate-y-0.5 shadow-xl shadow-orange-950/40">
            Request Access ↗
          </a>
          <a href="#ir-contact" className="inline-flex items-center justify-center px-10 py-4 rounded-xl border border-white/20 bg-white/5 backdrop-blur-sm text-white font-semibold hover:border-white/50 hover:bg-white/10 transition-all">
            Schedule a Call
          </a>
        </motion.div>

        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 1, delay: 0.6 }}
          className="inline-flex items-center gap-3 bg-white/[0.03] border border-white/10 backdrop-blur-md rounded-full px-8 py-3 mt-16"
        >
          <span className="relative flex h-2 w-2">
            <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-[#3daf98] opacity-75"></span>
            <span className="relative inline-flex rounded-full h-2 w-2 bg-[#3daf98]"></span>
          </span>
          <span className="text-[0.85rem] font-medium text-[#f7f6f2]/80 tracking-wide">
            Actively Raising — Series A Capital for Texas Flagship Groundbreaking in 2026
          </span>
        </motion.div>
      </div>
    </section>
  );
};

