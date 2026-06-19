"use client";

import { useRef, useLayoutEffect } from "react";
import gsap from "gsap";
import SplitType from "split-type";
import Image from "next/image";

export const CHero = () => {
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

    // 3. Fade the description in slightly before the text finishes
    tl.to(
      btnRevealRef.current,
      {
        opacity: 1,
        duration: 1,
      },
      "-=0.5",
    );

    return () => {
      split.revert();
    };
  }, []);

  return (
    <section
      ref={containerRef}
      className="hero-section relative flex flex-col min-h-screen lg:px-[20px] pb-[16px]"
    >
      <style>{`
        .wh-hero-title {
          /* Premium vibrant violet text color */
          color: rgb(var(--radial-gradient-color, 170, 61, 173));
          text-shadow: 2px 2px 4px rgba(0, 0, 0, 0.2);
          font-family: "Cormorant Garamond", Georgia, serif;
          /* Hidden until SplitType finishes — prevents layout flash on reload */
          opacity: 0;
          -webkit-font-smoothing: antialiased;
          -moz-osx-font-smoothing: grayscale;
          text-rendering: optimizeLegibility;
          word-break: keep-all;
          overflow-wrap: break-word;
        }

        /* Fluid typography for mobile/tablet only — clamp(34px → 60px) between 360px and 768px */
        

        @media (min-width: 360px) and (max-width: 767px) {
          .wh-hero-title {
            font-size: 40px !important;
            line-height: 46px !important;
          }

          .wh-desc-container{
            max-width: 85% !important;
          }
        }

        /* Named grid system at 768px (md) breakpoint */
        @media (min-width: 768px) and (max-width: 1023px) {
          .hero-grid-md {
            display: grid !important;
            grid-template-columns: [full-start] 24px [main-start] repeat(22, 1fr) [main-end] 24px [full-end] !important;
          }

          .wh-title-container {
            grid-column: main-start / main-end !important;
            grid-row: 1 / 2 !important;
            text-align: center !important;
          }

          .wh-desc-container {
            grid-column: main-start / main-end !important;
            grid-row: 2 / 3 !important;
            max-width: 450px !important;
            margin-left: auto !important;
            margin-right: auto !important;
            max-width: 85% !important;
          }

          .wh-secondary-card-container {
            grid-column: main-start / 13 !important;
            grid-row: 3 / 4 !important;
            margin-bottom: 45vw !important;
            align-self: end !important;
            z-index: 20 !important;
          }

          .wh-primary-card-container {
            grid-column: 5 / main-end !important;
            grid-row: 3 / 4 !important;
            padding-top: 320px !important;
            align-self: end !important;
            z-index: 10 !important;
          }

          .wh-hero-title {
            font-size: 60px !important;
            line-height: 66px !important;
            text-align: center !important;
          }
        }

        /* Named grid system at 1024px (lg) breakpoint */
        @media (min-width: 1024px) {
          .hero-grid-lg {
            display: grid !important;
            grid-template-columns: [full-start] 64px [main-start] repeat(22, 1fr) [main-end] 64px [full-end] !important;
          }

          .wh-title-container {
            grid-column: main-start / 14 !important;
            grid-row: 1 / 2 !important;
            text-align: left !important;
          }

          .wh-title-container > div {
            align-items: flex-start !important;
          }

          .wh-hero-title {
            text-align: left !important;
            font-size: clamp(60px, 5.2vw, 80px) !important;
            line-height: clamp(72px, 5.7vw, 88px) !important;
          }

          .wh-desc-container {
            grid-column: main-start / 11 !important;
            grid-row: 2 / 3 !important;
            max-width: none !important;
            margin-left: 0 !important;
            margin-right: 0 !important;
            align-self: end !important;
          }

          .wh-secondary-card-container {
            grid-column: 15 / 19 !important;
            grid-row: 1 / 3 !important;
            margin-bottom: 17vw !important;
            align-self: end !important;
            z-index: 20 !important;
          }

          .wh-primary-card-container {
            grid-column: 16 / 23 !important;
            grid-row: 1 / 3 !important;
            padding-top: 0 !important;
            align-self: end !important;
            z-index: 10 !important;
          }
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

        /* Description starts invisible, GSAP fades it in */
        .wh-btn-reveal {
          opacity: 0;
          will-change: opacity;
        }

        .hero-container-chero {
          position: relative;
          background-color: rgb(247, 241, 232);
          overflow: hidden;
        }

        .hero-container-chero::before {
          content: "";
          position: absolute;
          inset: 0;
          pointer-events: none;
          opacity: 0.8;
          z-index: 1;
          background-image: 
            /* top Left - Custom Violet */
            radial-gradient(circle at 0% 20%, rgba(var(--radial-gradient-color, 170, 61, 173), 0.30) 0%, transparent 20%),
            /* Mobile header readability gradient */
            linear-gradient(to bottom, rgb(247, 241, 232) 0%, transparent 100%),
            /* Middle Right - Custom Violet */
            radial-gradient(circle at 99% 40%, rgba(var(--radial-gradient-color, 170, 61, 173), 0.3) 0%, transparent 40%),
            /* Center Highlight - Bright White */
            radial-gradient(circle at 60% 50%, rgba(var(--radial-gradient-color, 170, 61, 173), 0.30) 0%, transparent 30%),
            /* Bottom Left - Custom Violet Muted Tone */
            radial-gradient(circle at 10% 90%, rgba(var(--radial-gradient-color, 170, 61, 173), 0.15) 0%, transparent 70%),
            /* Bottom Right - Custom Violet Muted Tone */
            radial-gradient(circle at 90% 70%, rgba(var(--radial-gradient-color, 170, 61, 173), 0.35) 0%, transparent 10%);
        }
      `}</style>

      {/* Hero Container */}
      <div className="hero-container hero-container-chero relative flex-grow lg:rounded-b-xl overflow-hidden flex flex-col">

        {/* Content Grid (The Wrapper) */}
        <div className="grid grid-cols-[24px_repeat(8,1fr)_24px] hero-grid-md hero-grid-lg grid-rows-[auto_auto] gap-y-0 gap-x-0 lg:gap-x-0 relative w-full pt-12 lg:pt-24 pb-16 min-h-[600px] items-end z-10 lg:grow lg:content-between">

          {/* Title Column */}
          <div className="col-start-2 col-end-10 row-start-1 row-end-2 lg:mt-auto lg:self-center wh-title-container">
            <div className="mt-5 mb-4 lg:my-5 flex flex-col items-center lg:items-start lg:pt-[5vw] lg:pb-[8vw]">
              <h1 ref={titleRef} className="wh-hero-title font-light tracking-tight text-center whitespace-normal lg:text-left m-0">
                Every Humanly® <br />community shares a <br/> common foundation
              </h1>
            </div>
          </div>

          {/* Description / CTA Column */}
          <div className="col-start-2 col-end-10 row-start-2 row-end-3 lg:self-end mb-[48px] lg:mb-0 max-w-[312px] md:max-w-[450px] mx-auto lg:max-w-none lg:mx-0 wh-desc-container">
            <div className="flex flex-col gap-6 h-full items-center justify-end lg:h-auto lg:items-start lg:justify-start lg:pb-0">

              <div className="w-full text-center lg:text-left lg:relative lg:block">
                <div ref={btnRevealRef} className="wh-btn-reveal">
                  <p className="text-base md:text-lg text-[rgba(var(--radial-gradient-color,170,61,173))]/80 font-light text-pretty m-0 mb-4">
                    "Humanly® empowers second chances and brilliant starts
                    for those left behind by the housing crisis."
                    Our master-planned communities integrate
                    missing-middle housing products to solve the fractured
                    building model and unlock uncommon outcomes.
                  </p>
                </div>
              </div>

            </div>
          </div>

          {/* 2. The Secondary (Smaller/Back) Card */}
          <div className="col-start-2 col-end-6 row-start-3 row-end-4 mb-[45vw] md:mb-[25vw] self-end z-20 wh-secondary-card-container">
            <div className="motionComponent relative aspect-square w-full">
              <Image
                src="/images/AdobeStock_815248903.jpeg"
                className="object-cover rounded-lg shadow-2xl"
                alt="Secondary Card"
                fill
                quality={100}
                sizes="(max-width: 1024px) 100vw, 33vw"
              />
            </div>
          </div>

          {/* 3. The Primary (Larger/Front) Card */}
          <div className="col-start-3 col-end-10 row-start-3 row-end-4 self-end pt-32 md:pt-80 z-10 wh-primary-card-container">
            <div className="motionComponent relative aspect-[3/2] w-full">
              <Image
                src="/images/AdobeStock_610237900.jpeg"
                className="object-cover rounded-lg shadow-xl"
                alt="Main Card"
                fill
                quality={100}
                sizes="(max-width: 1024px) 100vw, 50vw"
              />
            </div>
          </div>

        </div>
      </div>
    </section>
  );
};
