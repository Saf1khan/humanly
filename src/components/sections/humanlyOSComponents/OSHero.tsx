"use client";

import React, { useState, useRef, useLayoutEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import gsap from "gsap";
import SplitType from "split-type";
import Image from "next/image";

const PILLARS = [
  {
    id: 1,
    name: "AI-Native Property Management",
    desc: "Intelligent, automated operations that adapt to community needs in real time. Maintenance, compliance, and cost optimization — handled.",
    color: "#e8622a",
    features: [
      { text: "Predictive maintenance alerts", highlight: true },
      { text: "Automated lease & compliance tracking", highlight: true },
      { text: "Cost optimization engine", highlight: false },
      { text: "Vendor coordination workflows", highlight: false },
      { text: "Real-time occupancy analytics", highlight: false },
    ]
  },
  {
    id: 2,
    name: "AI Community Navigator",
    desc: "A personal AI assistant for every resident. Simplifies daily life, connects to services, and anticipates needs before they arise.",
    color: "#4a7fd4",
    features: [
      { text: "Personalized daily briefings", highlight: true },
      { text: "Service booking & scheduling", highlight: true },
      { text: "Community event discovery", highlight: false },
      { text: "Resource & benefit navigation", highlight: false },
      { text: "Health & wellness prompts", highlight: false },
    ]
  },
  {
    id: 3,
    name: "Circle of Services® Marketplace",
    desc: "An integrated ecosystem of essential services — healthcare, education, wellness, food, and work — available on and offline from one hub.",
    color: "#8b5cf6",
    features: [
      { text: "8 service verticals integrated", highlight: true },
      { text: "Revenue share with service partners", highlight: true },
      { text: "On + offline delivery modes", highlight: false },
      { text: "Community-wide discounts", highlight: false },
      { text: "Usage data feeds OS learning", highlight: false },
    ]
  }
];

const OSHero = () => {
  const [activePillar, setActivePillar] = useState<number | null>(null);
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
    <>
      <section
        ref={containerRef}
        className="hero-section relative flex flex-col min-h-screen px-0 lg:px-0 xl:px-[20px] pb-0 lg:pb-0 xl:pb-[16px]"
      >
        <style>{`
          .hero-section {
            background-color: rgb(75, 95, 104);
            background-image: url("https://d2o9p5vky89u4e.cloudfront.net/MGFjMmZkODA4MmFmLm8zbi5pbw%3D%3D/l9bkxtucizywp9dbc45e7z0gb/b3VyYXJpbmcuY29t/img.gif");
            background-repeat: repeat;
            background-size: auto;
          }

          .wh-hero-title {
            color: #ffffff;
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

          .hero-container-oshero {
            position: relative;
            background-color: rgb(75, 95, 104);
            background-image: url("https://d2o9p5vky89u4e.cloudfront.net/MGFjMmZkODA4MmFmLm8zbi5pbw%3D%3D/l9bkxtucizywp9dbc45e7z0gb/b3VyYXJpbmcuY29t/img.gif");
            background-repeat: repeat;
            background-size: auto;
            overflow: hidden;
          }

          .hero-gradient-layer {
            position: absolute;
            top: 0;
            left: 0;
            width: 100%;
            height: 100%;
            pointer-events: none; /* Allows clicking through the gradients to the content */
            z-index: 1;
          }

          .overlay-glow {
            position: absolute;
            top: 0;
            left: 0;
            width: 100%;
            height: 100%;
            pointer-events: none; /* Let clicks pass to the image */
            z-index: 1;
          }
        `}</style>

        {/* Hero Container */}
        <div className="hero-container hero-container-oshero relative flex-grow rounded-b-[12px] lg:rounded-b-xl overflow-hidden flex flex-col">
          {/* Gradient Layers */}
          <div className="hero-gradient-layer" id="gradient-1" style={{ backgroundImage: "radial-gradient(circle at 10% 90%, rgb(56, 73, 84) 0px, transparent 25%)" }} />
          <div className="hero-gradient-layer" id="gradient-2" style={{ backgroundImage: "radial-gradient(circle at 90% 30%, rgb(56, 73, 84) 0px, transparent 25%)" }} />
          <div className="hero-gradient-layer" id="gradient-3" style={{ backgroundImage: "radial-gradient(circle at 10% 10%, rgba(215, 226, 232, 0.3) 0px, transparent 25%)" }} />
          <div className="hero-gradient-layer" id="gradient-4" style={{ backgroundImage: "radial-gradient(circle at 90% 90%, rgba(215, 226, 232, 0.3) 0px, transparent 20%)" }} />
          <div className="hero-gradient-layer" id="gradient-5" style={{ backgroundImage: "radial-gradient(circle at 70% 90%, rgba(215, 226, 232, 0.2) 0px, transparent 20%)" }} />
          <div className="hero-gradient-layer" id="gradient-6" style={{ backgroundImage: "radial-gradient(circle at 60% 60%, rgba(215, 226, 232, 0.1) 0px, transparent 20%)" }} />
          <div className="hero-gradient-layer" id="logo-glow" style={{ backgroundImage: "radial-gradient(circle at 5% 5%, rgba(215, 226, 232, 0.35) 0px, transparent 15%)" }} />
          <div className="hero-gradient-layer" id="bottom-left-glow" style={{ backgroundImage: "radial-gradient(circle at 0% 100%, rgba(215, 226, 232, 0.25) 0px, transparent 18%)" }} />

          {/* Content Grid (The Wrapper) */}
          <div className="grid grid-cols-[12px_repeat(8,1fr)_12px] sm:grid-cols-[24px_repeat(8,1fr)_24px] hero-grid-md hero-grid-lg grid-rows-[auto_auto] gap-y-0 gap-x-0 lg:gap-x-0 relative w-full pt-24 md:pt-28 lg:pt-24 pb-16 min-h-[600px] items-end z-10 lg:grow lg:content-between">

            {/* Title Column */}
            <div className="col-start-2 col-end-10 md:col-start-[main-start] md:col-end-[main-end] lg:col-start-2 lg:col-end-[14] xl:col-end-12 row-start-1 row-end-2 lg:mt-auto lg:self-center wh-title-container">
              <div className="mt-5 mb-4 lg:my-5 flex flex-col items-center lg:items-start lg:pt-[5vw] lg:pb-[8vw]">
                <h1 ref={titleRef} className="wh-hero-title font-light tracking-[-0.05em] text-center whitespace-normal lg:whitespace-nowrap lg:text-left m-0">
                  HumanlyOS®
                  <br className="block" />
                  vertically integrated
                  <br className="block" />
                  community
                  <br className="block" />
                  development
                  <span className="md:hidden lg:inline"> & operations.</span>
                </h1>
              </div>
            </div>

            {/* Description / CTA Column */}
            <div className="col-start-2 col-end-10 md:col-start-[main-start] md:col-end-[main-end] lg:col-start-2 lg:col-end-11 xl:col-end-9 row-start-2 row-end-3 lg:self-end mb-[48px] lg:mb-0 max-w-[312px] md:max-w-[450px] mx-auto lg:max-w-none lg:mx-0 wh-desc-container">
              <div className="flex flex-col gap-6 h-full items-center justify-end lg:h-auto lg:items-start lg:justify-start lg:pb-0">

                <div className="w-full text-center lg:text-left lg:relative lg:block">
                  <div ref={btnRevealRef} className="wh-btn-reveal">
                    <p className="wh-hero-desc text-[16px] leading-[24px] lg:text-lg md:text-xl text-[#e2e8f0] font-light text-balance m-0">
                      A converged platform unifying property management, resident experience, and service delivery. Every interaction feeds intelligence back into the system.
                    </p>
                  </div>
                </div>

              </div>
            </div>

            {/* 2. The Secondary (Smaller/Back) Card */}
            <div className="col-start-2 md:col-start-[main-start] lg:col-start-[14] xl:col-start-[14] col-end-6 md:col-end-13 lg:col-end-[20] xl:col-end-[19] row-start-3 lg:row-start-1 xl:row-start-1 row-end-4 lg:row-end-3 xl:row-end-3 mb-[45vw] md:mb-[25vw] lg:mb-[17vw] self-end z-20 wh-secondary-card-container">
              <div className="motionComponent relative aspect-square w-full">
                <Image
                  src="/images/pexels-themob000-30766684.jpg"
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
                  src="/images/pexels-soc-nang-d-ng-2150345854-36779651.jpg"
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

      {/* ─── OS Overview (2-col) with Reveal 3 Pillar Cards ─── */}
      {/* <section 
        className="py-[clamp(3rem,7vw,5rem)]"
        style={{
          backgroundColor: 'rgb(75, 95, 104)',
          backgroundImage: 'url("https://d2o9p5vky89u4e.cloudfront.net/MGFjMmZkODA4MmFmLm8zbi5pbw%3D%3D/l9bkxtucizywp9dbc45e7z0gb/b3VyYXJpbmcuY29t/img.gif")',
          backgroundRepeat: 'repeat',
          backgroundSize: 'auto'
        }}
      >
        <div className="max-w-[1280px] mx-auto px-6 md:px-12 grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-24 items-start">
          <div className="lg:col-span-5 space-y-8">
            <div className="space-y-4">
              <h2 className="font-serif text-4xl md:text-5xl font-normal leading-tight text-white uppercase" style={{ fontFamily: '"Cormorant Garamond", Georgia, serif' }}>
                One Platform.<br />
                Three-Sided Impact.
              </h2>
            </div>
            <p className="text-[#e2e8f0] text-lg font-sans font-light leading-relaxed">
              A single converged platform unifying property management, resident experience, and service delivery. Every interaction feeds intelligence back into the system, creating a self-improving loop that benefits operators, residents, and service partners simultaneously.
            </p>
          </div>

          <div className="lg:col-span-7 grid grid-cols-1 md:grid-cols-2 gap-4">
            {PILLARS.map((pillar, idx) => (
              <motion.div
                key={pillar.id}
                initial={{ opacity: 0, x: 20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ delay: idx * 0.1 }}
                onClick={() => setActivePillar(activePillar === pillar.id ? null : pillar.id)}
                className={`group relative p-8 border border-white/10 rounded-2xl cursor-pointer transition-all duration-500 hover:border-white/20 shadow-sm ${idx === 2 ? 'md:col-span-2' : ''} ${activePillar === pillar.id ? 'ring-1 ring-white/20 shadow-xl' : ''}`}
                style={{ backgroundColor: 'rgb(29, 44, 56)' }}
              >
                <div className="overlay-glow" style={{ backgroundImage: "radial-gradient(circle at 80% 40%, rgba(215, 226, 232, 0.2) 0px, transparent 50%)" }} />
                <div className="overlay-glow" style={{ backgroundImage: "radial-gradient(circle at 20% 90%, rgba(215, 226, 232, 0.1) 0px, transparent 50%)" }} />
                <div className="overlay-glow" style={{ backgroundImage: "radial-gradient(circle at 5% 5%, rgba(215, 226, 232, 0.1) 0px, transparent 30%)" }} />
                <div className="overlay-glow" style={{ backgroundImage: "radial-gradient(circle at 65% 65%, rgba(216, 202, 155, 0.1) 0px, transparent 30%)" }} />

                <div className="relative z-10">
                  <div className="h-0.5 w-10 rounded-full mb-6" style={{ backgroundColor: pillar.color }} />
                  <h4 className="font-serif text-xl font-normal text-white mb-3 uppercase" style={{ fontFamily: '"Cormorant Garamond", Georgia, serif' }}>{pillar.name}</h4>
                  <p className="text-[#f7f6f2] text-sm font-light leading-relaxed mb-4">{pillar.desc}</p>

                  <AnimatePresence>
                    {activePillar === pillar.id && (
                      <motion.div
                        initial={{ height: 0, opacity: 0 }}
                        animate={{ height: 'auto', opacity: 1 }}
                        exit={{ height: 0, opacity: 0 }}
                        className="overflow-hidden border-t border-white/10 pt-4 space-y-2"
                      >
                        {pillar.features.map((f, i) => (
                          <div key={i} className="flex items-center gap-3 text-xs font-sans font-medium uppercase">
                            <span className={f.highlight ? 'text-[#e8622a]' : 'text-white/30'}>→</span>
                            <span className={f.highlight ? 'text-white' : 'text-[#e2e8f0]'}>{f.text}</span>
                          </div>
                        ))}
                      </motion.div>
                    )}
                  </AnimatePresence>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section> */}
    </>
  );
};

export default OSHero;
