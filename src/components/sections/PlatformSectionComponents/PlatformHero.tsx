"use client";

import { useRef, useLayoutEffect } from "react";
import gsap from "gsap";
import SplitType from "split-type";
import Image from "next/image";

export const PlatformHero = () => {
  const containerRef = useRef<HTMLDivElement>(null);
  const titleRef = useRef<HTMLHeadingElement>(null);
  const btnRevealRef = useRef<HTMLDivElement>(null);

  useLayoutEffect(() => {
    if (!titleRef.current) return;

    // 1. Split the title into lines + individual characters
    const split = new SplitType(titleRef.current, { types: "lines,chars" });

    // Immediately reveal the title — chars are hidden behind .line overflow masks
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
      className="hero-section relative flex flex-col min-h-screen px-0 lg:px-0 xl:px-[20px] pb-0 lg:pb-0 xl:pb-[16px]"
    >
      <style>{`
        .wh-hero-title {
          color: #3E2242;
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
        @media (max-width: 1023px) {
          .wh-hero-title {
            font-size: clamp(34px, 9.5vw, 60px) !important;
            line-height: clamp(38px, 10vw, 66px) !important;
          }
          .wh-hero-desc {
            font-size: clamp(14px, 2.3vw, 18px) !important;
            line-height: clamp(20px, 3.2vw, 26px) !important;
          }
        }

        @media (min-width: 360px) and (max-width: 767px) {
          .wh-hero-title {
            font-size: 40px !important;
            line-height: 46px !important;
          }
        }

        /* Named grid system at 768px (md) breakpoint to match Oura Ring */
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

          .wh-hero-desc {
            font-size: 18px !important;
            line-height: 26px !important;
            text-align: center !important;
          }
        }

        /* Named grid system at 1024px (lg) breakpoint to match Oura Ring */
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
            font-size: clamp(52px, 5.2vw, 80px) !important;
            line-height: clamp(58px, 5.7vw, 88px) !important;
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
            grid-column: 15 / 21 !important;
            grid-row: 1 / 3 !important;
            margin-bottom: 17vw !important;
            align-self: end !important;
            z-index: 20 !important;
          }

          .wh-primary-card-container {
            grid-column: 16 / 24 !important;
            grid-row: 1 / 3 !important;
            padding-top: 0 !important;
            align-self: end !important;
            z-index: 10 !important;
          }
        }

        @media (min-width: 1280px) {
          .wh-title-container {
            grid-column: main-start / 12 !important;
          }

          .wh-desc-container {
            grid-column: main-start / 9 !important;
          }

          .wh-secondary-card-container {
            grid-column: 14 / 18 !important;
            transform: translateY(-3rem) !important;
          }

          .wh-primary-card-container {
            grid-column: 16 / 23 !important;
            transform: translateY(-3rem) !important;
          }

          /* At xl+, slow down the vw growth so text stays within its column */
          .wh-hero-title {
            font-size: clamp(52px, 4.2vw, 80px) !important;
            line-height: clamp(58px, 4.7vw, 88px) !important;
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

        .hero-container-sandstone {
          position: relative;
          background-color: rgb(247, 241, 232);
          overflow: hidden;
        }

        .hero-container-sandstone::before {
          content: "";
          position: absolute;
          inset: 0;
          pointer-events: none;
          opacity: 0.8;
          z-index: 1;
          background-image: 
            /* Mobile header readability gradient */
            linear-gradient(to bottom, rgb(247, 241, 232) 0%, transparent 100%),
            /* Top Left - Luminous Blue/Purple */
            radial-gradient(circle at 10% 0%, rgba(160, 161, 208, 0.4) 0%, transparent 30%),
            /* Middle Right - Accent */
            radial-gradient(circle at 99% 40%, rgba(160, 161, 208, 0.5) 0%, transparent 40%),
            /* Bottom Left */
            radial-gradient(circle at 10% 99%, rgba(160, 161, 208, 0.6) 0%, transparent 40%),
            /* Center Highlight - Bright White */
            radial-gradient(circle at 35% 30%, rgb(254, 252, 249) 0%, transparent 15%),
            /* Bottom Right - Deep Earthy Accent */
            radial-gradient(circle at 90% 70%, rgba(62, 34, 66, 0.15) 0%, transparent 30%);
        }
      `}</style>

      {/* Hero Container */}
      <div className="hero-container hero-container-sandstone relative flex-grow rounded-b-[12px] lg:rounded-b-xl overflow-hidden flex flex-col">

        {/* Content Grid (The Wrapper) */}
        <div className="grid grid-cols-[24px_repeat(8,1fr)_24px] hero-grid-md hero-grid-lg grid-rows-[auto_auto] gap-y-0 gap-x-0 lg:gap-x-0 relative w-full pt-24 md:pt-28 lg:pt-24 pb-16 min-h-[600px] items-end z-10 lg:grow lg:content-between">

          {/* Title Column */}
          <div className="col-start-2 col-end-10 md:col-start-[main-start] md:col-end-[main-end] lg:col-start-2 lg:col-end-[14] xl:col-end-12 row-start-1 row-end-2 lg:mt-auto lg:self-center wh-title-container">
            <div className="mt-5 mb-4 lg:my-5 flex flex-col items-center lg:items-start lg:pt-[5vw] lg:pb-[8vw]">
              <h1 ref={titleRef} className="wh-hero-title font-light tracking-[-0.05em] text-center whitespace-normal lg:whitespace-nowrap lg:text-left m-0">
                Disrupting residential
                <br className="block" />
                real estate development
                <br className="block" />
                & management.
              </h1>
            </div>
          </div>

          {/* Description / CTA Column */}
          <div className="col-start-2 col-end-10 md:col-start-[main-start] md:col-end-[main-end] lg:col-start-2 lg:col-end-11 xl:col-end-9 row-start-2 row-end-3 lg:self-end mb-[48px] lg:mb-0 max-w-[312px] md:max-w-[450px] mx-auto lg:max-w-none lg:mx-0 wh-desc-container">
            <div className="flex flex-col gap-6 h-full items-center justify-end lg:h-auto lg:items-start lg:justify-start lg:pb-0">

              <div className="w-full text-center lg:text-left lg:relative lg:block">
                <div ref={btnRevealRef} className="wh-btn-reveal">
                  <p className="wh-hero-desc text-[16px] leading-[24px] lg:text-lg md:text-xl text-[rgba(15,23,42,0.8)] font-light text-balance m-0">
                    Traditional development is a series of handoffs.
                    <span className="text-slate-900 block mt-2 font-semibold">Humanly is a recursive loop.</span>
                    <br className="hidden lg:block" />
                    By integrating the full stack—from AI-driven site selection to tech-enabled community management—we turn every operational data point into a catalyst for the next phase of value creation.
                  </p>
                </div>
              </div>

            </div>
          </div>

          {/* 2. The Secondary (Smaller/Back) Card */}
          <div className="col-start-2 md:col-start-[main-start] lg:col-start-[14] xl:col-start-[14] col-end-6 md:col-end-13 lg:col-end-[20] xl:col-end-[19] row-start-3 lg:row-start-1 xl:row-start-1 row-end-4 lg:row-end-3 xl:row-end-3 mb-[45vw] md:mb-[25vw] lg:mb-[17vw] self-end z-20 wh-secondary-card-container">
            <div className="motionComponent relative aspect-square w-full">
              <Image
                src="/images/AdobeStock_308963762.jpeg"
                className="object-cover rounded-lg shadow-2xl"
                alt="Secondary Card"
                fill
                quality={100}
                sizes="(max-width: 1024px) 100vw, 33vw"
              />
            </div>
          </div>

          {/* 3. The Primary (Larger/Front) Card */}
          <div className="col-start-3 md:col-start-5 lg:col-start-[16] col-end-10 md:col-end-[main-end] lg:col-end-[24] row-start-3 lg:row-start-1 row-end-4 lg:row-end-3 self-end pt-32 md:pt-80 lg:pt-0 z-10 wh-primary-card-container">
            <div className="motionComponent relative aspect-[3/2] w-full">
              <Image
                src="/images/pexels-silverkblack-36733379.jpg"
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

