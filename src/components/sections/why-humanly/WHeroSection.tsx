"use client";

import { useRef, useEffect } from "react";
import { motion, useScroll, useTransform } from "framer-motion";
import { HeroReveal } from "../../ui/HeroReveal";

export const WHeroSection = () => {
  const containerRef = useRef<HTMLDivElement>(null);
  const titleRef = useRef<HTMLHeadingElement>(null);

  useEffect(() => {
    if (titleRef.current) {
      setTimeout(() => {
        titleRef.current?.classList.add("is-active");
      }, 100);
    }
  }, []);

  // Track scroll progress within the Hero section
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "end start"],
  });

  // Map scroll progress to parallax transforms
  const y = useTransform(scrollYProgress, [0, 1], ["0%", "25%"]);
  const scale = useTransform(scrollYProgress, [0, 1], [1.1, 1]);
  const opacity = useTransform(scrollYProgress, [0, 0.8], [1, 0.4]);

  return (
    <section
      ref={containerRef}
      className="relative w-full h-[100svh] min-h-[800px] overflow-hidden bg-[#f0edeb]"
    >
      {/* LAYER 1: Full Screen Background Image with Masking Rectangles */}
      <div className="absolute inset-0 overflow-hidden bg-stone-900 shadow-md">

        {/* The Parallax Image */}
        <motion.div
          style={{ y, scale }}
          className="absolute inset-0 w-full h-[100%] -top-[0%]"
        >
          <img
            src="/images/AdobeStock_192330637.jpeg"
            alt="Why Humanly — Every neighborhood a launchpad for human potential"
            className="absolute inset-0 w-full h-full object-cover object-top"
          />
        </motion.div>

        {/* Overlay Tint */}
        <motion.div
          style={{ opacity }}
          className="absolute inset-0 bg-black/20 pointer-events-none"
        ></motion.div>

        {/* --- The 3 White Rectangles forming the Polygon --- */}

        {/* 1. Top Left Rectangle */}
        <div className="absolute top-0 left-0 w-[45%] lg:w-[35%] h-[15%] lg:h-[20%] bg-[#f0edeb] rounded-br-[100px] lg:rounded-br-[160px] pointer-events-none z-10"></div>

        {/* 2. Bottom Left Rectangle */}
        <div className="absolute bottom-0 left-0 w-[75%] lg:w-[65%] h-[20%] lg:h-[20%] bg-[#f0edeb] rounded-tr-[100px] lg:rounded-tr-[160px] pointer-events-none z-10"></div>

        {/* 3. Vertical Left Rectangle */}
        <div className="absolute top-0 bottom-0 left-0 w-[40px] bg-[#f0edeb] pointer-events-none z-10"></div>

        {/* --- Inner Corner Rounded Fillets (Smooth Concave Curves) --- */}

        {/* Top Inner Fillet: Connects Top Rect to Vertical Rect */}
        <div
          className="absolute left-[40px] top-[15%] lg:top-[20%] w-[140px] h-[140px] pointer-events-none z-10"
          style={{ background: "radial-gradient(circle at 100% 100%, transparent 139px, #f0edeb 140px)" }}
        ></div>

        {/* Bottom Inner Fillet: Connects Bottom Rect to Vertical Rect */}
        <div
          className="absolute left-[40px] bottom-[20%] lg:bottom-[20%] w-[140px] h-[140px] pointer-events-none z-10"
          style={{ background: "radial-gradient(circle at 100% 0%, transparent 139px, #f0edeb 140px)" }}
        ></div>

      </div>

      {/* LAYER 2: Title & Eyebrow */}
      <div className="absolute inset-0 flex flex-col justify-start pl-16 md:pl-24 lg:pl-32 pr-6 pt-[320px] z-20 pointer-events-none">
        <div className="pointer-events-auto">

          <HeroReveal delay="delay-100">
            <p className="text-[11px] font-bold uppercase tracking-[0.15em] text-[#ff7e5d] mb-4">The Mission</p>
          </HeroReveal>

          <h1
            ref={titleRef}
            className="hero-title text-left text-[36px] md:text-[48px] lg:text-[72px] leading-[1.1] text-white drop-shadow-[0_4px_12px_rgba(0,0,0,0.9)] drop-shadow-[0_2px_4px_rgba(0,0,0,0.8)] m-0 max-w-[85%] lg:max-w-[50%]"
          >
            <HeroReveal delay="delay-200">
              <span className="block drop-shadow-none font-medium">
                Every neighborhood a
              </span>
            </HeroReveal>
            <HeroReveal delay="delay-300">
              <span className="block drop-shadow-none opacity-90 italic font-light tracking-tighter">
                launchpad for human potential.
              </span>
            </HeroReveal>
          </h1>

          <HeroReveal delay="delay-500">
            <p className="mt-8 text-sm font-bold tracking-[0.08em] uppercase text-[#0099ff]">
              One community in every state by 2032
            </p>
          </HeroReveal>

        </div>
      </div>

      {/* LAYER 3: Description (On Bottom Rectangle) */}
      <div className="absolute bottom-0 left-0 w-[75%] lg:w-[65%] h-[20%] lg:h-[20%] z-20 pointer-events-none flex flex-col justify-center pl-16 md:pl-24 lg:pl-32 pr-12 lg:pr-24">
        <div className="pointer-events-auto">
          <HeroReveal delay="delay-400">
            <p className="text-base md:text-lg font-normal leading-[1.6] text-[#241f21] drop-shadow-[0_1px_3px_rgba(0,0,0,0.15)]">
              We are building AI-native, vertically integrated communities for the workforce families left behind by the housing system.
            </p>
          </HeroReveal>
        </div>
      </div>
    </section>
  );
};
