"use client";

import { useRef, useLayoutEffect } from "react";
import gsap from "gsap";
import SplitType from "split-type";
import Image from "next/image";

export const TeamHero = () => {
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
      className="hero-section relative flex flex-col min-h-screen px-[20px] pb-[16px]"
    >
      <style>{`
        .wh-hero-title {
          /* Using the deep earthy green text color to keep the greenish effect */
          color: rgb(34, 66, 40);
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
            /* Top Left - Sage Green */
            radial-gradient(circle at 10% 0%, rgba(132, 150, 113, 0.4) 0%, transparent 20%),
            /* Middle Right - Sage Green */
            radial-gradient(circle at 99% 40%, rgba(132, 150, 113, 0.5) 0%, transparent 40%),
            /* Bottom Left - Sage Green */
            radial-gradient(circle at 10% 99%, rgba(132, 150, 113, 0.6) 0%, transparent 40%),
            /* Center Highlight - Bright White */
            radial-gradient(circle at 35% 30%, rgb(254, 252, 249) 0%, transparent 15%),
            /* Bottom Right - Deep Greenish Muted Tone */
            radial-gradient(circle at 90% 70%, rgba(104, 113, 99, 0.7) 0%, transparent 20%);
        }
      `}</style>

      {/* Hero Container */}
      <div className="hero-container hero-container-sandstone relative flex-grow rounded-b-[12px] lg:rounded-b-xl overflow-hidden flex flex-col">

        {/* Content Grid (The Wrapper) */}
        <div className="grid grid-cols-[minmax(1rem,1fr)_repeat(22,minmax(0,1fr))_minmax(1rem,1fr)] lg:grid-cols-[64px_repeat(22,minmax(0,1fr))_64px] grid-rows-[auto_auto] gap-y-0 gap-x-2 relative w-full pt-24 pb-16 min-h-[600px] items-end z-10 lg:grow">

          {/* Title Column */}
          <div className="col-start-2 col-end-[24] lg:col-end-[14] xl:col-end-12 row-start-1 row-end-2 lg:mt-auto lg:self-center">
            <div className="my-5 flex flex-col items-center lg:items-start lg:pt-[5vw] lg:pb-[8vw]">
              <h1 ref={titleRef} className="wh-hero-title text-[rgb(34,66,40)] text-[2.5rem] md:text-[3.75rem] lg:text-[5rem] font-light leading-tight tracking-[-0.05em] text-center lg:text-left m-0">
                Built by Operators, Technologists,
                <br />
                <span>and Community Builders.</span>
              </h1>
            </div>
          </div>

          {/* Description / CTA Column */}
          <div className="col-start-2 md:col-start-4 lg:col-start-2 col-end-[24] md:col-end-[22] lg:col-end-11 xl:col-end-9 row-start-2 row-end-3 lg:self-end">
            <div className="flex flex-col gap-6 h-full items-center justify-end lg:h-auto lg:items-start lg:justify-start lg:pb-0">

              <div className="w-full text-center lg:text-left lg:relative lg:block">
                <div ref={btnRevealRef} className="wh-btn-reveal">
                  <p className="text-lg md:text-xl text-[rgba(34,66,40,0.8)] leading-relaxed font-light text-balance m-0">
                    The Humanly® team brings together deep expertise in Real Estate Development, AI & Technology,{" "}
                    <br className="hidden lg:block" />
                    Urban Design, Financial Services, Community Operations and Government Policy.
                  </p>
                </div>
              </div>

            </div>
          </div>

          {/* 2. The Secondary (Smaller/Back) Card */}
          <div className="col-start-2 lg:col-start-[14] col-end-6 lg:col-end-[18] row-start-3 lg:row-start-1 row-end-4 lg:row-end-3 mb-[45vw] lg:mb-[17vw] self-end z-20 lg:-translate-y-12">
            <div className="motionComponent relative aspect-square w-full">
              <Image 
                src="/images/AdobeStock_446591769.jpeg" 
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
                src="/images/AdobeStock_446754975.jpeg" 
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
