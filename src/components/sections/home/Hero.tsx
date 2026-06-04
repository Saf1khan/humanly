"use client";

import React, { useRef, useLayoutEffect } from "react";
import gsap from "gsap";
import SplitType from "split-type";

export const Hero = () => {
  const containerRef = useRef<HTMLDivElement>(null);
  const titleRef = useRef<HTMLHeadingElement>(null);
  const btnRevealRef = useRef<HTMLDivElement>(null);

  useLayoutEffect(() => {
    if (!titleRef.current) return;

    // 1. Split the title into lines + individual characters
    const split = new SplitType(titleRef.current, { types: "lines,chars" });

    // Immediately reveal the title — chars are hidden behind .line overflow masks
    gsap.set(titleRef.current, { opacity: 1 });

    // 2. Animate characters from translateY(115%) → 0, letter by letter
    const tl = gsap.timeline();

    tl.to(split.chars, {
      y: "0%",
      scale: 1,
      rotate: 0,
      opacity: 1,
      duration: 1.5,
      ease: "power4.out",
      stagger: {
        each: 0.02,
        from: "center",
        grid: "auto",
      },
      delay: 0.5,
    });

    // 3. Fade the button/subtitle in slightly before the text finishes
    tl.to(
      btnRevealRef.current,
      {
        opacity: 1,
        y: 0,
        duration: 1,
      },
      "-=0.5",
    );

    return () => {
      split.revert();
    };
  }, []);

  return (
    <section ref={containerRef} className="relative flex flex-col min-h-screen px-[20px] pb-[16px]">
      <style>{`
        .wh-hero-title {
          font-family: "Cormorant Garamond", Georgia, serif;
          opacity: 0;
          -webkit-font-smoothing: antialiased;
          -moz-osx-font-smoothing: grayscale;
          text-rendering: optimizeLegibility;
        }
        .wh-hero-title .line {
          overflow: hidden;
          padding-bottom: 0.15em;
        }
        .wh-hero-title .char {
          display: inline-block;
          transform: translateY(105%) scale(1.1) rotate(2deg);
          transform-origin: bottom left;
          opacity: 0;
          will-change: transform, opacity;
        }
        .wh-btn-reveal {
          opacity: 0;
          transform: translateY(20px);
          will-change: transform, opacity;
        }
      `}</style>

      {/* Hero Container */}
      <div className="hero-container relative flex-grow rounded-b-[12px] lg:rounded-b-xl overflow-hidden flex flex-col justify-center">
        {/* Background Image with Overlay */}
        <div className="absolute inset-0 z-0">
          <img
            src="/images/AdobeStock_192330637.jpeg"
            alt="Modern Community"
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-black/10" />
          <div className="absolute inset-y-0 left-0 w-full md:w-2/3 lg:w-1/2 bg-gradient-to-r from-black/80 via-black/30 to-transparent" />
        </div>

        {/* Decorative Glows */}
        <div className="absolute top-1/4 -left-20 w-[600px] h-[600px] bg-h-primary/20 rounded-full blur-[120px] pointer-events-none" />

        {/* Content Grid (The Wrapper) */}
        <div className="grid grid-cols-[minmax(1rem,1fr)_repeat(22,minmax(0,1fr))_minmax(1rem,1fr)] lg:grid-cols-[64px_repeat(22,minmax(0,1fr))_64px] relative w-full pt-24 pb-16 min-h-[600px] items-center z-10 lg:grow">
          
          {/* Main Content Column */}
          <div className="col-start-2 col-end-[24] lg:col-end-[18] xl:col-end-[16] flex flex-col items-center lg:items-start gap-8 lg:gap-10">
            
            <div className="flex flex-col items-center lg:items-start w-full">
              <h1 ref={titleRef} className="wh-hero-title text-[#f7f1e8] text-[2.5rem] md:text-[3.75rem] lg:text-[5rem] font-light leading-[1.05] tracking-[-0.05em] text-center lg:text-left m-0 drop-shadow-2xl">
                Every Neighborhood<br />
                <span className="text-h-primary">a Launchpad.</span>
              </h1>
            </div>

            <div ref={btnRevealRef} className="wh-btn-reveal w-full text-center lg:text-left">
              <p className="text-lg md:text-xl text-white max-w-2xl mx-auto lg:mx-0 mb-10 leading-relaxed drop-shadow-md">
                Humanly is building the future of workforce housing. From land acquisition through lifelong resident services, powered by HumanlyOS®.
              </p>

              <div className="flex flex-wrap justify-center lg:justify-start gap-5">
                <a href="invest.html" className="group relative px-10 py-4 bg-h-primary text-white rounded-full font-bold overflow-hidden transition-all hover:pr-14">
                  <span className="relative z-10">Request Data Room Access</span>
                  <span className="absolute right-6 top-1/2 -translate-y-1/2 opacity-0 group-hover:opacity-100 transition-all">→</span>
                </a>
                <a href="platform.html" className="px-10 py-4 bg-white/10 backdrop-blur-md border border-white/20 text-white rounded-full font-bold hover:bg-white/20 transition-all">
                  Explore the Platform
                </a>
              </div>
            </div>

          </div>
        </div>
      </div>
    </section>
  );
};
