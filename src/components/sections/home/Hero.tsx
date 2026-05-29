"use client";
import React, { useRef, useLayoutEffect } from 'react';
import { motion } from 'framer-motion';
import gsap from "gsap";
import SplitType from "split-type";

export const Hero = () => {
  const titleRef = useRef<HTMLHeadingElement>(null);
  const contentRevealRef = useRef<HTMLDivElement>(null);

  useLayoutEffect(() => {
    if (!titleRef.current) return;

    // 1. Split the title into lines + individual characters
    const split = new SplitType(titleRef.current, { types: "lines,chars" });

    // Immediately reveal the title — chars are hidden behind .line overflow masks,
    // so nothing is visible yet. This removes the opacity:0 set before splitting.
    gsap.set(titleRef.current, { opacity: 1 });

    // 2. Animate characters from translateY(105%) → 0, letter by letter
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

    // 3. Fade the rest of the content in slightly before the text finishes
    if (contentRevealRef.current) {
      tl.to(
        contentRevealRef.current,
        {
          opacity: 1,
          duration: 1,
        },
        "-=0.5",
      );
    }

    return () => {
      split.revert(); // Cleanup: restore original DOM on unmount
    };
  }, []);

  return (
    <section className="relative w-full min-h-[100svh] flex flex-col justify-end overflow-hidden">
      {/* Scoped CSS */}
      <style>{`
        .wh-hero-title {
          color: #ffffff;
          font-family: "Cormorant Garamond", Georgia, serif;
          font-size: clamp(36px, 6vw, 80px);
          font-weight: 400;
          line-height: 0.9;
          letter-spacing: -0.8px;
          margin: 0 0 30px 0;
          /* Hidden until SplitType finishes — prevents layout flash on reload */
          opacity: 0;
          -webkit-font-smoothing: antialiased;
          -moz-osx-font-smoothing: grayscale;
          text-rendering: optimizeLegibility;
        }

        /* SplitType adds .line automatically — overflow:hidden masks the sliding chars */
        .wh-hero-title .line {
          overflow: hidden;
          padding-bottom: 0.15em; /* Prevents clipping descenders */
        }

        /* SplitType adds .char — starts hidden below the line mask with organic scale/rotate */
        .wh-hero-title .char {
          display: inline-block;
          transform: translateY(105%) scale(1.1) rotate(2deg);
          transform-origin: bottom left;
          opacity: 0;
          will-change: transform, opacity;
        }

        /* Content starts invisible, GSAP fades it in */
        .wh-content-reveal {
          opacity: 0;
          will-change: opacity;
        }
      `}</style>

      {/* Background Video with Overlay */}
      <div className="absolute inset-0 z-0">
        <video
          src="/images/Firefly A static fixed-camera shot where only the clouds move slowly and smoothly across the sky. T.mp4"
          autoPlay
          loop
          muted
          playsInline
          className="w-full h-full object-cover"
        />
        {/* Smooth gradient overlay blending from the bottom-left and fading completely to transparent before the top-right, ensuring no hard lines */}
        <div className="absolute inset-0 bg-gradient-to-tr from-black/90 from-10% via-black/30 via-45% to-transparent to-70% pointer-events-none" />
      </div>

      {/* Decorative Glows */}
      <div className="absolute top-1/4 -left-20 w-[600px] h-[600px] bg-[#6E7C8D]/20 rounded-full blur-[120px] pointer-events-none" />

      <div className="relative z-10 w-full px-8 md:px-16 pb-[50px] md:pb-[90px] pt-20">
        <div className="max-w-[1200px] text-left">
          <div className="flex items-center justify-start gap-3 mb-6">
            <p className="text-xs font-bold tracking-[0.2em] uppercase text-white">
              AI-Native · Vertically Integrated
            </p>
            <div className="h-[1px] w-12 bg-white"></div>
          </div>

          <h1 ref={titleRef} className="wh-hero-title font-serif font-normal drop-shadow-2xl whitespace-nowrap">
            The Neighborhood, <span className="text-white">Reimagined.</span>
          </h1>

          <div ref={contentRevealRef} className="wh-content-reveal">
            <p className="text-lg md:text-xl text-white max-w-2xl mb-12 leading-relaxed drop-shadow-md font-sans">
              Humanly is building the future of workforce housing. From land acquisition through lifelong resident services, powered by HumanlyOS®.
            </p>

            <div className="flex flex-wrap justify-start gap-5">
              <a href="invest.html" className="px-10 py-4 bg-white text-[#111213] font-bold rounded-full hover:bg-neutral-200 transition-colors shadow-lg shadow-white/10 font-sans">
                Request Data Room Access
              </a>
              <a href="platform.html" className="px-10 py-4 bg-white/10 backdrop-blur-md border border-white/20 text-white rounded-full font-bold hover:bg-white/20 transition-all font-sans">
                Explore the Platform
              </a>
            </div>
          </div>
        </div>
      </div>

    </section>
  );
};
