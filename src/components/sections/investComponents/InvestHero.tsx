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
      className="ih-hero-section relative flex flex-col min-h-screen px-[20px] pb-[16px]"
    >
      <style>{`
        .ih-hero-title {
          color: rgb(var(--radial-gradient-color));
          text-shadow: 2px 2px 4px rgba(0, 0, 0, 0.2);
          opacity: 0;
          -webkit-font-smoothing: antialiased;
          -moz-osx-font-smoothing: grayscale;
          text-rendering: optimizeLegibility;
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

        .ih-hero-container {
          position: relative;
          background-color: rgb(247, 241, 232);
          overflow: hidden;
        }

        .ih-hero-container::before {
          content: none;
        }
      `}</style>

      {/* Hero Container */}
      <div className="ih-hero-container hero-container relative flex-grow rounded-b-[12px] lg:rounded-b-xl overflow-hidden flex flex-col">
        {/* Radial gradient overlay — reads from CSS variable */}
        <div
          className="absolute inset-0 pointer-events-none opacity-80 z-[1]"
          style={{
            backgroundImage: [
              `radial-gradient(circle at 0% 20%, rgba(var(--radial-gradient-color), 0.30) 0%, transparent 20%)`,
              `linear-gradient(to bottom, rgb(247, 241, 232) 0%, transparent 100%)`,
              `radial-gradient(circle at 99% 40%, rgba(var(--radial-gradient-color), 0.30) 0%, transparent 40%)`,
              `radial-gradient(circle at 60% 50%, rgba(var(--radial-gradient-color), 0.30) 0%, transparent 30%)`,
              `radial-gradient(circle at 10% 90%, rgba(var(--radial-gradient-color), 0.15) 0%, transparent 70%)`,
              `radial-gradient(circle at 90% 70%, rgba(var(--radial-gradient-color), 0.35) 0%, transparent 10%)`,
            ].join(", "),
          }}
        />

        {/* Content Grid (The Wrapper) */}
        <div className="grid grid-cols-[minmax(1rem,1fr)_repeat(22,minmax(0,1fr))_minmax(1rem,1fr)] lg:grid-cols-[64px_repeat(22,minmax(0,1fr))_64px] grid-rows-[auto_auto] gap-y-0 gap-x-2 relative w-full pt-24 pb-16 min-h-[600px] items-end z-10 lg:grow">

          {/* Title Column */}
          <div className="col-start-2 col-end-[24] lg:col-end-[16] xl:col-end-14 row-start-1 row-end-2 lg:mt-auto lg:self-center">
            <div className="my-5 flex flex-col items-center lg:items-start lg:pt-[5vw] lg:pb-[8vw]">

              <h1 ref={titleRef} className="ih-hero-title text-4xl md:text-6xl lg:text-[80px] font-cormorant font-light leading-[52px] md:leading-[72px] lg:leading-[92px] tracking-tight text-center lg:text-left m-0">
                Invest in the future <br />of housing
              </h1>
            </div>
          </div>

          {/* Description / CTA Column */}
          <div className="col-start-2 md:col-start-4 lg:col-start-2 col-end-[24] md:col-end-[22] lg:col-end-11 xl:col-end-9 row-start-2 row-end-3 lg:self-end">
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
                      className="inline-flex items-center justify-center px-8 py-3.5 rounded-xl bg-[rgba(var(--radial-gradient-color),0.95)] text-white font-bold hover:bg-[#ff7a55] transition-all hover:-translate-y-0.5 shadow-xl shadow-orange-950/30 text-sm"
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
          <div className="col-start-2 lg:col-start-[14] col-end-6 lg:col-end-[18] row-start-3 lg:row-start-1 row-end-4 lg:row-end-3 mb-[45vw] lg:mb-[17vw] self-end z-20 lg:-translate-y-12">
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

          {/* 3. The Primary (Larger/Front) Card */}
          <div className="col-start-3 lg:col-start-[16] col-end-[23] row-start-3 lg:row-start-1 row-end-4 lg:row-end-3 self-end pt-32 lg:pt-0 z-10 lg:-translate-y-12">
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
