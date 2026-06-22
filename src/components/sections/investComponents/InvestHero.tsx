"use client";

import { useRef, useLayoutEffect } from "react";
import gsap from "gsap";
import SplitType from "split-type";
import Image from "next/image";

export const InvestHero = () => {
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
        .ih-hero-title {
          color: rgb(var(--radial-gradient-color));
          text-shadow: 2px 2px 4px rgba(0, 0, 0, 0.2);
          font-family: "Cormorant Garamond", Georgia, serif;
          opacity: 0;
          -webkit-font-smoothing: antialiased;
          -moz-osx-font-smoothing: grayscale;
          text-rendering: optimizeLegibility;
          word-break: keep-all;
          overflow-wrap: break-word;
        }

        @media (min-width: 360px) and (max-width: 767px) {
          .ih-hero-title {
            font-size: 40px !important;
            line-height: 46px !important;
          }

          .ih-desc-container{
            max-width: 85% !important;
          }
        }

        @media (min-width: 768px) and (max-width: 1023px) {
          .hero-grid-md {
            display: grid !important;
            grid-template-columns: [full-start] 24px [main-start] repeat(22, 1fr) [main-end] 24px [full-end] !important;
          }

          .ih-title-container {
            grid-column: main-start / main-end !important;
            grid-row: 1 / 2 !important;
            text-align: center !important;
          }

          .ih-desc-container {
            grid-column: main-start / main-end !important;
            grid-row: 2 / 3 !important;
            max-width: 450px !important;
            margin-left: auto !important;
            margin-right: auto !important;
            max-width: 85% !important;
          }

          .ih-secondary-card-container {
            grid-column: main-start / 13 !important;
            grid-row: 3 / 4 !important;
            margin-bottom: 45vw !important;
            align-self: end !important;
            z-index: 20 !important;
          }

          .ih-primary-card-container {
            grid-column: 5 / main-end !important;
            grid-row: 3 / 4 !important;
            padding-top: 320px !important;
            align-self: end !important;
            z-index: 10 !important;
          }

          .ih-hero-title {
            font-size: 60px !important;
            line-height: 66px !important;
            text-align: center !important;
          }
        }

        @media (min-width: 1024px) {
          .hero-grid-lg {
            display: grid !important;
            grid-template-columns: [full-start] 64px [main-start] repeat(22, 1fr) [main-end] 64px [full-end] !important;
          }

          .ih-title-container {
            grid-column: main-start / 14 !important;
            grid-row: 1 / 2 !important;
            text-align: left !important;
          }

          .ih-title-container > div {
            align-items: flex-start !important;
          }

          .ih-hero-title {
            text-align: left !important;
            font-size: clamp(60px, 5.2vw, 80px) !important;
            line-height: clamp(72px, 5.7vw, 88px) !important;
          }

          .ih-desc-container {
            grid-column: main-start / 11 !important;
            grid-row: 2 / 3 !important;
            max-width: none !important;
            margin-left: 0 !important;
            margin-right: 0 !important;
            align-self: end !important;
          }

          .ih-secondary-card-container {
            grid-column: 14 / 20 !important;
            grid-row: 1 / 3 !important;
            margin-bottom: 16vw !important;
            align-self: end !important;
            z-index: 20 !important;
          }

          .ih-primary-card-container {
            grid-column: 16 / 24 !important;
            grid-row: 1 / 3 !important;
            padding-top: 0 !important;
            align-self: end !important;
            z-index: 10 !important;
          }
        }

        /* Named grid system at 1280px (xl) breakpoint to restore sizes */
        @media (min-width: 1280px) {
          .ih-secondary-card-container {
            grid-column: 14 / 19 !important;
          }

          .ih-secondary-card-wrapper {
            width: 100%;
            max-width: 20.5rem;
            margin-left: auto;
            margin-right: auto;
          }
          
          .ih-primary-card-container {
            grid-column: 16 / 23 !important;
          }
        }

        .ih-hero-title .line {
          overflow: hidden;
          padding-bottom: 0.15em;
        }

        .ih-hero-title .char {
          display: inline-block;
          transform: translateY(105%) scale(1.1) rotate(2deg);
          transform-origin: bottom left;
          opacity: 0;
          will-change: transform, opacity;
        }

        .ih-btn-reveal {
          opacity: 0;
          will-change: opacity;
        }

        .hero-container-ihero {
          position: relative;
          background-color: rgb(247, 241, 232);
          overflow: hidden;
        }

        .hero-container-ihero::before {
          content: "";
          position: absolute;
          inset: 0;
          pointer-events: none;
          opacity: 0.8;
          z-index: 1;
          background-image: 
            radial-gradient(circle at 0% 20%, rgba(var(--radial-gradient-color), 0.30) 0%, transparent 20%),
            linear-gradient(to bottom, rgb(247, 241, 232) 0%, transparent 100%),
            radial-gradient(circle at 99% 40%, rgba(var(--radial-gradient-color), 0.30) 0%, transparent 40%),
            radial-gradient(circle at 60% 50%, rgba(var(--radial-gradient-color), 0.30) 0%, transparent 30%),
            radial-gradient(circle at 10% 90%, rgba(var(--radial-gradient-color), 0.15) 0%, transparent 70%),
            radial-gradient(circle at 90% 70%, rgba(var(--radial-gradient-color), 0.35) 0%, transparent 10%);
        }
      `}</style>

      {/* Hero Container */}
      <div className="hero-container hero-container-ihero relative flex-grow lg:rounded-b-xl overflow-hidden flex flex-col">

        {/* Content Grid (The Wrapper) */}
        <div className="grid grid-cols-[24px_repeat(8,1fr)_24px] hero-grid-md hero-grid-lg grid-rows-[auto_auto] gap-y-0 gap-x-0 lg:gap-x-0 relative w-full pt-12 lg:pt-24 pb-16 min-h-[600px] items-end z-10 lg:grow lg:content-between">

          {/* Title Column */}
          <div className="col-start-2 col-end-10 row-start-1 row-end-2 lg:mt-auto lg:self-center ih-title-container">
            <div className="mt-5 mb-4 lg:my-5 flex flex-col items-center lg:items-start lg:pt-[5vw] lg:pb-[8vw]">
              <h1 ref={titleRef} className="ih-hero-title font-light tracking-tight text-center whitespace-normal lg:text-left m-0">
                Invest in the future <br />of housing
              </h1>
            </div>
          </div>

          {/* Description / CTA Column */}
          <div className="col-start-2 col-end-10 row-start-2 row-end-3 lg:self-end mb-[48px] lg:mb-0 max-w-[312px] md:max-w-[450px] mx-auto lg:max-w-none lg:mx-0 ih-desc-container">
            <div className="flex flex-col gap-6 h-full items-center justify-end lg:h-auto lg:items-start lg:justify-start lg:pb-0">

              <div className="w-full text-center lg:text-left lg:relative lg:block">
                <div ref={btnRevealRef} className="ih-btn-reveal">
                  <p className="text-base md:text-lg font-light text-pretty m-0 mb-6" style={{ color: `rgba(var(--radial-gradient-color), 0.80)` }}>
                    Humanly® is right now raising capital to build the first vertically integrated AI-native workforce housing platform in America. Series A — Texas Flagship groundbreaking 2026.
                  </p>

                  {/* CTA Buttons */}
                  <div className="flex flex-wrap gap-4 justify-center lg:justify-start">
                    <a
                      href="#dataroom"
                      className="inline-flex items-center justify-center px-8 py-3.5 rounded-xl bg-[rgba(var(--radial-gradient-color),0.95)] text-white font-bold hover:opacity-90 transition-all hover:-translate-y-0.5 shadow-xl text-sm"
                      style={{ boxShadow: "0 20px 25px -5px rgba(var(--radial-gradient-color), 0.3), 0 8px 10px -6px rgba(var(--radial-gradient-color), 0.3)" }}
                    >
                      Request Access ↗
                    </a>
                    <a
                      href="#ir-contact"
                      className="inline-flex items-center justify-center px-8 py-3.5 rounded-xl border border-[rgba(var(--radial-gradient-color),0.3)] bg-[rgba(var(--radial-gradient-color),0.05)] text-[rgb(var(--radial-gradient-color))] font-semibold hover:border-[rgba(var(--radial-gradient-color),0.6)] hover:bg-[rgba(var(--radial-gradient-color),0.1)] transition-all text-sm"
                    >
                      Schedule a Call
                    </a>
                  </div>
                </div>
              </div>

            </div>
          </div>

          {/* 2. The Secondary (Smaller/Back) Card */}
          <div className="col-start-2 col-end-6 row-start-3 row-end-4 mb-[45vw] md:mb-[25vw] self-end z-20 ih-secondary-card-container">
            <div className="ih-secondary-card-wrapper">
              <div className="motionComponent relative aspect-square w-full">
                <Image
                  src="/images/pexels-pixabay-221540.jpg"
                  className="object-cover rounded-lg shadow-2xl"
                  alt="Secondary Card"
                  fill
                  quality={100}
                  sizes="(max-width: 1024px) 100vw, 33vw"
                />
              </div>
            </div>
          </div>

          {/* 3. The Primary (Larger/Front) Card */}
          <div className="col-start-3 col-end-10 row-start-3 row-end-4 self-end pt-32 md:pt-80 z-10 ih-primary-card-container">
            <div className="motionComponent relative aspect-[3/2] w-full">
              <Image
                src="/images/pexels-vlada-karpovich-7433837.jpg"
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
