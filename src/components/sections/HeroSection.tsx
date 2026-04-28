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
      className="relative w-full h-[100svh] min-h-[800px] overflow-hidden bg-transparent"
    >
      
      {/* LAYER 1: The Parallax Background Image */}
      <div className="absolute top-0 left-0 right-0 h-full lg:mx-6 overflow-hidden rounded-t-none rounded-b-[12px] shadow-sm bg-stone-900">
        
        <motion.div 
          style={{ y, scale }}
          className="absolute inset-0 w-full h-[120%] -top-[10%]"
        >
          <img 
            src="/images/pexels-ianr-21853691.jpg" 
            alt="Hero Background" 
            className="absolute inset-0 w-full h-full object-cover"
          />
        </motion.div>

        {/* Overlay Tint to guarantee text readability */}
        <motion.div 
          style={{ opacity }}
          className="absolute inset-0 bg-black/30 pointer-events-none"
        ></motion.div>

        {/* LAYER 2: The Content Overlay */}
        <div className="relative z-20 max-w-[1600px] mx-auto w-full h-full flex flex-col justify-between px-6 pb-12 pt-[12vh] md:px-12 md:pb-16 lg:px-16 pointer-events-none">
          
          <div className="flex-1 flex flex-col justify-center">
            <div className="max-w-4xl pointer-events-auto">
              <h1 ref={titleRef} className="hero-title text-left font-sans flex flex-col md:items-start text-5xl md:text-6xl lg:text-[6.667vw] 2xl:text-8xl tracking-tighter leading-[0.85]">
                <span className="reveal-line block text-white drop-shadow-lg font-medium">
                  The neighborhood,
                </span>
                <em className="reveal-line hero-emphasis text-white drop-shadow-lg font-medium" style={{ transitionDelay: '0.3s' }}>
                  reimagined.
                </em>
              </h1>
            </div>
          </div>

          <HeroReveal delay="delay-400">
            <div className="pointer-events-auto">
              <div className="flex justify-start pb-6 mt-4">
                <a href="#" className="flex px-10 py-4 bg-slate-900 text-sandstone-200 font-bold rounded-full hover:bg-mustard-500 transition-colors shadow-2xl items-center content-center relative z-50">
                  Discover more
                </a>
              </div>
            </div>
          </HeroReveal>

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
                <p className="text-[0.875rem] text-[#e8e4db] font-sans font-medium mb-2 leading-snug">
                  Humanly.<br/>Explore the neighborhood.
                </p>
                <a href="/shop" className="inline-flex items-center gap-2">
                  <span className="text-[0.875rem] font-bold text-[#e8e4db]">Explore Now</span>
                  <svg className="w-4 h-4 text-[#e8e4db] transition-transform group-hover:translate-x-1" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 5l7 7-7 7" />
                  </svg>
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
