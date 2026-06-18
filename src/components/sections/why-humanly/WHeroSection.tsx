"use client";

import { useRef, useLayoutEffect } from "react";
import gsap from "gsap";
import SplitType from "split-type";
import Image from "next/image";

export const WHeroSection = () => {
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

    // 3. Fade the button in slightly before the text finishes
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
      className="hero-section relative flex flex-col min-h-screen px-0 lg:px-5 pb-0 lg:pb-[16px]"
    >
      <style>{`
        .wh-hero-title {
          /* Using the requested sandstone text color for contrast against charcoal */
          color: #F7F1E8;
          text-shadow: 2px 2px 4px rgba(255, 255, 255, 0.2);
          font-family: "Cormorant Garamond", Georgia, serif;
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

        /* Button starts invisible, GSAP fades it in */
        .wh-btn-reveal {
          opacity: 0;
          will-change: opacity;
        }

        .hero-gradient-charcoal {
          /* This reproduces the 'focal' lighting of the charcoal image */
          background: radial-gradient(
            circle at 75% 45%,        /* Focal point (where the light is strongest) */
            rgba(60, 60, 60, 1) 0%,   /* Inner 'glow' color */
            rgba(18, 18, 18, 1) 60%,  /* Middle charcoal transition */
            rgba(10, 10, 10, 1) 100%  /* Outer deep charcoal/black */
          );
        }
      `}</style>

      {/* Hero Container */}
      <div className="hero-container hero-gradient-charcoal relative flex-grow rounded-none lg:rounded-b-xl overflow-hidden flex flex-col">

        {/* Content Grid (The Wrapper) */}
        <div className="grid grid-cols-[minmax(1rem,1fr)_repeat(22,minmax(0,1fr))_minmax(1rem,1fr)] lg:grid-cols-[64px_repeat(22,minmax(0,1fr))_64px] grid-rows-[auto_auto] gap-y-0 gap-x-2 relative w-full pt-24 pb-16 min-h-[600px] items-end z-10 lg:grow">

          {/* Title Column */}
          <div className="col-start-2 col-end-[24] lg:col-end-[14] xl:col-end-12 row-start-1 row-end-2 lg:mt-auto lg:self-center">
            <div className="my-5 flex flex-col items-center lg:items-start lg:pt-[5vw] lg:pb-[8vw]">
              <h1 ref={titleRef} className="wh-hero-title text-[#f7f1e8] text-[clamp(2.5rem,1.4rem+4.5vw,5rem)] font-light leading-tight tracking-[-0.02em] lg:tracking-[-0.05em] text-center lg:text-left m-0">
                Every Neighborhood a Launchpad,
                <br />
                <span>For Human Potential.</span>
              </h1>
            </div>
          </div>

          {/* Description / CTA Column */}
          <div className="col-start-2 md:col-start-4 lg:col-start-2 col-end-[24] md:col-end-[22] lg:col-end-11 xl:col-end-9 row-start-2 row-end-3 lg:self-end">
            <div className="flex flex-col gap-6 h-full items-center justify-end lg:h-auto lg:items-start lg:justify-start lg:pb-0">

              <div className="w-full text-center lg:text-left lg:relative lg:block">
                <div ref={btnRevealRef} className="wh-btn-reveal">
                  <a
                    href="/invest"
                    className="inline-block bg-[#f7f1e8] text-[#4a4741] px-6 py-3 rounded-full font-sans font-medium transition-colors duration-150 hover:bg-[#838280] no-underline cursor-pointer"
                  >
                    Learn More
                  </a>
                </div>
              </div>

            </div>
          </div>

          {/* 2. The Secondary (Smaller/Back) Card */}
          {/* Reduced size (now spans 4 cols instead of 5) */}
          <div className="col-start-2 lg:col-start-[14] col-end-6 lg:col-end-[18] row-start-3 lg:row-start-1 row-end-4 lg:row-end-3 mb-[45vw] lg:mb-[17vw] self-end z-20 lg:-translate-y-12">
            <div className="motionComponent relative aspect-square w-full">
              <Image 
                src="/images/pexels-tomfisk-34115060.jpg" 
                className="object-cover rounded-lg shadow-2xl" 
                alt="Overlapping Card"
                fill
                quality={100}
                sizes="(max-width: 1024px) 100vw, 33vw"
              />
            </div>
          </div>

          {/* 3. The Primary (Larger/Front) Card */}
          {/* Reduced size (now spans 7 cols instead of 8) */}
          {/* Set z-10 so it sits behind the top card */}
          <div className="col-start-3 lg:col-start-[16] col-end-[23] row-start-3 lg:row-start-1 row-end-4 lg:row-end-3 self-end pt-32 lg:pt-0 z-10 lg:-translate-y-12">
            <div className="motionComponent relative aspect-[3/2] w-full">
              <Image 
                src="/images/pexels-cphuyal-15524962.jpg" 
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
