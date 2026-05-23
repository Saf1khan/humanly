"use client";
import React, { useRef } from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';
import Image from 'next/image';

export const InvestHero = () => {
  const containerRef = useRef<HTMLElement>(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "end end"]
  });

  // Background card scroll transformations (starts full bleed, shrinks to showing a clean margin)
  const inset = useTransform(scrollYProgress, [0, 0.45], ["0px", "48px"]);
  const borderRadius = useTransform(scrollYProgress, [0, 0.45], ["0px", "40px"]);
  const borderAlpha = useTransform(scrollYProgress, [0, 0.45], ["rgba(255, 255, 255, 0)", "rgba(255, 255, 255, 0.08)"]);
  const shadowAlpha = useTransform(scrollYProgress, [0, 0.45], ["0px 0px 0px rgba(0,0,0,0)", "0px 25px 80px rgba(0, 0, 0, 0.55)"]);
  
  // Parallax translation for the video inside the container
  const videoY = useTransform(scrollYProgress, [0, 1], ["0%", "12%"]);

  // Screen 1: Title and Status (Fades out and slides/scales slightly on scroll)
  const screen1Opacity = useTransform(scrollYProgress, [0, 0.3], [1, 0]);
  const screen1Y = useTransform(scrollYProgress, [0, 0.3], [0, -60]);
  const screen1Scale = useTransform(scrollYProgress, [0, 0.3], [1, 0.96]);

  // Screen 2: Capital details and buttons (Fades in and slides up)
  const screen2Opacity = useTransform(scrollYProgress, [0.25, 0.55], [0, 1]);
  const screen2Y = useTransform(scrollYProgress, [0.25, 0.55], [60, 0]);
  const screen2Scale = useTransform(scrollYProgress, [0.25, 0.55], [0.96, 1]);
  const screen2PointerEvents = useTransform(scrollYProgress, (p) => p > 0.25 ? "auto" : "none");

  return (
    <section
      ref={containerRef}
      className="relative h-[200vh] w-full bg-[#0d1117]"
    >
      {/* Sticky viewport for hero animation */}
      <div className="sticky top-0 h-screen w-full flex items-center justify-center overflow-hidden">
        
        {/* Background Card that shrinks and rounds on scroll */}
        <motion.div
          style={{
            top: inset,
            bottom: inset,
            left: inset,
            right: inset,
            borderRadius: borderRadius,
            borderColor: borderAlpha,
            boxShadow: shadowAlpha,
          }}
          className="absolute border border-transparent overflow-hidden z-0"
        >
          {/* Inner Parallax video wrapper */}
          <motion.div
            style={{ y: videoY }}
            className="absolute inset-0 w-full h-[110%] -top-[5%]"
          >
            <video
              autoPlay
              muted
              loop
              playsInline
              poster="/images/AdobeStock_170554793.jpeg"
              className="w-full h-full object-cover"
            >
              <source
                src="https://player.vimeo.com/progressive_redirect/playback/1191107184/rendition/2160p/file.mp4?loc=external&signature=383062d7c76f755b1af1d252dc614c97905b716368c0f5441a64984d5dbb00f7"
                type="video/mp4"
              />
            </video>
            {/* Dark overlay to ensure text legibility */}
            <div className="absolute inset-0 bg-black/45" />
          </motion.div>
        </motion.div>

        {/* Dynamic content overlays */}
        <div className="container relative z-10 mx-auto px-6 max-w-[1200px] h-full flex flex-col justify-center items-center text-center">
          
          {/* Screen 1: Hero Intro */}
          <motion.div
            style={{
              opacity: screen1Opacity,
              y: screen1Y,
              scale: screen1Scale,
            }}
            className="absolute flex flex-col items-center justify-center pointer-events-auto"
          >
            <p className="text-[#c2c5ee] text-[0.75rem] font-bold tracking-[0.2em] uppercase mb-6">
              Investor Relations
            </p>

            <h1 className="font-serif text-5xl md:text-6xl lg:text-8xl text-white mb-8 leading-tight max-w-4xl mx-auto">
              Invest in the <br />
              <em className="lg:text-9xl text-[#f09050] not-italic font-serif">future of housing.</em>
            </h1>

            <div className="inline-flex items-center gap-3 bg-white/[0.04] border border-white/10 backdrop-blur-md rounded-full px-8 py-3 mt-4">
              <span className="relative flex h-2 w-2">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-[#3daf98] opacity-75"></span>
                <span className="relative inline-flex rounded-full h-2 w-2 bg-[#3daf98]"></span>
              </span>
              <span className="text-[0.85rem] font-medium text-[#f7f6f2]/90 tracking-wide">
                Series A Capital Raising for Texas Flagship Groundbreaking in 2026
              </span>
            </div>

            {/* Scroll Indicator */}
            <div className="absolute top-[calc(100%+80px)] flex flex-col items-center gap-2 text-white/40 text-[0.75rem] font-medium uppercase tracking-[0.15em] animate-pulse">
              <span>Scroll to explore</span>
              <svg className="w-4.5 h-4.5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 14l-7 7m0 0l-7-7m7 7V3" />
              </svg>
            </div>
          </motion.div>

          {/* Screen 2: Action details */}
          <motion.div
            style={{
              opacity: screen2Opacity,
              y: screen2Y,
              scale: screen2Scale,
              pointerEvents: screen2PointerEvents
            }}
            className="absolute flex flex-col items-center justify-center max-w-3xl"
          >
            <h2 className="font-serif text-3xl md:text-4xl lg:text-5xl text-white mb-6 leading-tight">
              A Vertically Integrated AI-Native Housing Platform
            </h2>
            
            <p className="text-[clamp(1.15rem,2.2vw,1.35rem)] text-white/90 leading-relaxed mb-10 font-light max-w-2xl mx-auto">
              Humanly® is right now raising capital to build the first vertically integrated AI-native workforce housing platform in America.
            </p>

            <div className="flex flex-wrap gap-4 justify-center">
              <a
                href="#dataroom"
                className="inline-flex items-center justify-center px-10 py-4 rounded-xl bg-[#d96a2b] text-white font-bold hover:bg-[#f09050] transition-all hover:-translate-y-0.5 shadow-xl shadow-orange-950/40"
              >
                Request Access ↗
              </a>
              <a
                href="#ir-contact"
                className="inline-flex items-center justify-center px-10 py-4 rounded-xl border border-white/20 bg-white/5 backdrop-blur-sm text-white font-semibold hover:border-white/50 hover:bg-white/10 transition-all"
              >
                Schedule a Call
              </a>
            </div>
          </motion.div>

        </div>
      </div>
    </section>
  );
};

