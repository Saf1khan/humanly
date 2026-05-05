"use client";

import { useRef, useEffect } from "react";
import { motion, useScroll, useTransform } from "framer-motion";
import { HeroReveal } from "../ui/HeroReveal";

export const HeroSection = () => {
  const containerRef = useRef<HTMLDivElement>(null);
  const titleRef = useRef<HTMLHeadingElement>(null);

  useEffect(() => {
    if (titleRef.current) {
      setTimeout(() => {
        titleRef.current?.classList.add('is-active');
      }, 100);
    }
  }, []);

  // Track scroll progress within the Hero section
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "end start"],
  });

  // Map scroll progress to parallax transforms
  // y moves the image slightly slower than the scroll (20% of section height)
  // scale adds a subtle zoom-out effect as you scroll down for extra depth
  const y = useTransform(scrollYProgress, [0, 1], ["0%", "25%"]);
  const scale = useTransform(scrollYProgress, [0, 1], [1.1, 1]);
  const opacity = useTransform(scrollYProgress, [0, 0.8], [1, 0.4]);

  return (
    <section
      ref={containerRef}
      className="relative w-full h-[100svh] min-h-[800px] overflow-hidden bg-[#f4f3ef]"
    >

      {/* LAYER 1: Full Screen Background Image with Masking Rectangles */}
      <div className="absolute inset-0 overflow-hidden bg-stone-900 shadow-md">

        {/* The Parallax Image */}
        <motion.div
          style={{ y, scale }}
          className="absolute inset-0 w-full h-[120%] -top-[10%]"
        >
          <img
            src="/images/AdobeStock_524972490.jpeg"
            alt="Hero Background"
            className="absolute inset-0 w-full h-full object-cover"
          />
        </motion.div>

        {/* Overlay Tint */}
        <motion.div
          style={{ opacity }}
          className="absolute inset-0 bg-black/10 pointer-events-none"
        ></motion.div>

        {/* --- The 3 White Rectangles forming the perfect Polygon --- */}

        {/* 1. Top Left Rectangle */}
        <div className="absolute top-0 left-0 w-[45%] lg:w-[35%] h-[15%] lg:h-[20%] bg-[#f4f3ef] rounded-br-[100px] lg:rounded-br-[160px] pointer-events-none z-10"></div>

        {/* 2. Bottom Left Rectangle (smaller height, wider) */}
        <div className="absolute bottom-0 left-0 w-[75%] lg:w-[65%] h-[20%] lg:h-[20%] bg-[#f4f3ef] rounded-tr-[100px] lg:rounded-tr-[160px] pointer-events-none z-10"></div>

        {/* 3. Vertical Left Rectangle */}
        <div className="absolute top-0 bottom-0 left-0 w-[40px] bg-[#f4f3ef] pointer-events-none z-10"></div>

        {/* --- Inner Corner Rounded Fillets (Smooth Concave Curves) --- */}

        {/* Top Inner Fillet: Connects Top Rect to Vertical Rect */}
        <div
          className="absolute left-[40px] top-[15%] lg:top-[20%] w-[140px] h-[140px] pointer-events-none z-10"
          style={{ background: 'radial-gradient(circle at 100% 100%, transparent 139px, #f4f3ef 140px)' }}
        ></div>

        {/* Bottom Inner Fillet: Connects Bottom Rect to Vertical Rect */}
        <div
          className="absolute left-[40px] bottom-[20%] lg:bottom-[20%] w-[140px] h-[140px] pointer-events-none z-10"
          style={{ background: 'radial-gradient(circle at 100% 0%, transparent 139px, #f4f3ef 140px)' }}
        ></div>

      </div>

      <div className="absolute inset-0 flex flex-col justify-start pl-16 md:pl-24 lg:pl-32 pr-6 pt-[320px] z-20 pointer-events-none">
        <div className="pointer-events-auto">
          <h1 ref={titleRef} className="hero-title text-left text-[36px] md:text-[48px] lg:text-[72px] leading-[1.1] text-white drop-shadow-[0_4px_12px_rgba(0,0,0,0.9)] drop-shadow-[0_2px_4px_rgba(0,0,0,0.8)] m-0 max-w-[85%] lg:max-w-[45%]">
            <HeroReveal delay="delay-100">
              <span className="block drop-shadow-none font-medium">
                The neighborhood,
              </span>
            </HeroReveal>
            <HeroReveal delay="delay-200">
              <span className="pl-[308px] block drop-shadow-none opacity-90 italic font-light tracking-tighter">
                reimagined.
              </span>
            </HeroReveal>
          </h1>

          <HeroReveal delay="delay-500">
            <div className="flex flex-col xl:flex-row gap-4 mt-8">
              <a href="#" className="px-6 py-3 bg-white text-[#1a1818] rounded-full font-normal text-xs text-center transition-opacity hover:opacity-80 shadow-2xl drop-shadow-[0_4px_6px_rgba(0,0,0,0.3)] whitespace-nowrap">
                FOR INVESTORS
              </a>
              <a href="#" className="px-6 py-3 bg-black/20 text-white rounded-full font-normal text-xs text-center border border-white/40 transition-colors hover:bg-white hover:text-[#1a1818] shadow-2xl drop-shadow-[0_4px_6px_rgba(0,0,0,0.3)] whitespace-nowrap backdrop-blur-md">
                FOR STRATEGIC PARTNERS
              </a>
            </div>
          </HeroReveal>
        </div>
      </div>

      {/* LAYER 3: Description (On Bottom Rectangle) */}
      <div className="absolute bottom-0 left-0 w-[75%] lg:w-[65%] h-[20%] lg:h-[20%] z-20 pointer-events-none flex flex-col justify-center pl-16 md:pl-24 lg:pl-32 pr-12 lg:pr-24">
        <div className="pointer-events-auto">
          <HeroReveal delay="delay-400">
            <p className="text-base md:text-lg font-normal leading-[1.6] text-[#241f21] drop-shadow-[0_1px_3px_rgba(0,0,0,0.15)]">
              Humanly uplifts people’s lives by creating financially attainable, exceptional master-planned communities that champion health, wellness and education for all. Powered by intelligence. Sustained by services. We build places that make daily life simpler and more connected.
            </p>
          </HeroReveal>
        </div>
      </div>



      {/* LAYER 3: Floating Shop Chiclet */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 md:left-auto md:translate-x-0 md:bottom-10 md:right-10 lg:bottom-14 lg:right-14 z-30 flex items-center justify-center pointer-events-auto w-full px-4 md:w-auto md:px-0">
        <div className="relative w-full max-w-[360px] p-1 group cursor-pointer">

          {/* Glass Background Layer */}
          <div className="absolute inset-0 bg-[#4a4741]/40 backdrop-blur-xl rounded-2xl border border-white/10 transition-opacity group-hover:bg-[#4a4741]/50"></div>

          {/* Content Container */}
          <div className="relative z-10 flex flex-row items-center p-1">

            {/* Product Image */}
            <div className="relative aspect-[3/2] w-36 md:w-44 overflow-hidden rounded-xl bg-stone-200/10 p-2">
              <img
                src="/images/asset%200.png"
                alt="Humanly Logo"
                className="object-contain w-full h-full"
              />
            </div>

            {/* Text & CTA */}
            <div className="flex flex-col justify-center px-4 py-3 lg:pl-6 lg:pr-7">
              <p className="text-[0.875rem] text-[#e8e4db] mb-2 leading-snug font-normal">
                Humanly.<br />Explore the neighborhood.
              </p>
              <a href="/shop" className="inline-flex items-center gap-2">
                <span className="text-[0.875rem] font-normal text-[#e8e4db]">Explore Now</span>
                <svg className="w-4 h-4 text-[#e8e4db] transition-transform group-hover:translate-x-1" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 5l7 7-7 7" />
                </svg>
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};