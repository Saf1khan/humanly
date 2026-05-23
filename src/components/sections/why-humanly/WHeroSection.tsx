"use client";

import { useRef, useLayoutEffect } from "react";
import { motion, useScroll, useTransform } from "framer-motion";
import gsap from "gsap";
import SplitType from "split-type";

export const WHeroSection = () => {
  const containerRef = useRef<HTMLDivElement>(null);
  const titleRef = useRef<HTMLHeadingElement>(null);
  const btnRevealRef = useRef<HTMLDivElement>(null);

  useLayoutEffect(() => {
    if (!titleRef.current) return;

    // 1. Split the title into lines + individual characters
    const split = new SplitType(titleRef.current, { types: "lines,chars" });

    // Immediately reveal the title — chars are hidden behind .line overflow masks,
    // so nothing is visible yet. This removes the opacity:0 set before splitting.
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
      split.revert(); // Cleanup: restore original DOM on unmount
    };
  }, []);

  // Parallax for background image
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "end start"],
  });
  const y = useTransform(scrollYProgress, [0, 1], ["0%", "25%"]);
  const imgScale = useTransform(scrollYProgress, [0, 1], [1.1, 1]);

  return (
    <section
      ref={containerRef}
      className="hero-section relative w-full min-h-[100svh] flex flex-col justify-end overflow-hidden bg-[#E7E3DC]"
    >
      {/* Scoped CSS */}
      <style>{`
        .wh-hero-title {
          color: #ffffff;
          font-family: "Cormorant Garamond", Georgia, serif;
          font-size: clamp(36px, 6vw, 70px);
          font-weight: 300;
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

        /* Button starts invisible, GSAP fades it in */
        .wh-btn-reveal {
          opacity: 0;
          will-change: opacity;
        }
      `}</style>

      {/* Background Image with parallax */}
      <div className="absolute inset-0 w-full h-full overflow-hidden">
        <motion.div
          style={{ y, scale: imgScale }}
          className="absolute inset-0 w-full h-[120%] -top-[10%]"
        >
          <img
            src="/images/AdobeStock_192330637.jpeg"
            alt="Why Humanly — Every neighborhood a launchpad for human potential"
            className="w-full h-full object-cover object-[center_12%] scale-[1.1]"
          />
        </motion.div>

        {/* Bottom-to-top gradient for readability */}
        <div className="absolute inset-0 z-[2] bg-[linear-gradient(to_top,rgba(19,20,22,0.6)_0%,transparent_55%)] pointer-events-none"></div>
        {/* Top dark bar */}
        <div className="absolute inset-0 z-[2] bg-[linear-gradient(0deg,rgba(19,20,22,0)_89.25%,#131416_111.44%)] pointer-events-none"></div>
      </div>

      {/* Content anchored bottom-left */}
      <div className="relative z-10 px-4 md:px-8 pb-[50px] md:pb-[90px] w-full">
        {/* Title — SplitType will split this into .line and .char elements */}
        <h1 ref={titleRef} className="wh-hero-title font-serif font-normal">
          Every Neighborhood a Launchpad,
          <br />
          <span>For Human Potential.</span>
        </h1>

        {/* Button fades in at the end of the timeline */}
        <div ref={btnRevealRef} className="wh-btn-reveal mt-[30px]">
          <a
            href="/invest"
            className="inline-block bg-[#6E7C8D] text-[#131416] px-[32px] py-[12px] rounded-[50px] font-sans text-[16px] font-medium no-underline transition-all duration-300 hover:bg-[#131416] hover:text-[#DAD4CB] hover:scale-105"
          >
            Learn More
          </a>
        </div>
      </div>
    </section>
  );
};
