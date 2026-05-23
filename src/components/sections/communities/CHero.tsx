"use client";

import { useEffect, useRef, useState } from "react";
import {
  motion,
  useMotionValueEvent,
  useScroll,
  useTransform,
} from "framer-motion";
import { HeroReveal } from "../../ui/HeroReveal";

export const CHero = () => {
  const sectionRef = useRef<HTMLElement>(null);
  const titleRef = useRef<HTMLHeadingElement>(null);

  const [showSecondSubtitle, setShowSecondSubtitle] = useState(false);

  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ["start start", "end start"],
  });

  const videoY = useTransform(scrollYProgress, [0, 1], [0, -320]);

  useEffect(() => {
    if (!titleRef.current) return;

    const timer = setTimeout(() => {
      titleRef.current?.classList.add("is-active");
    }, 100);

    return () => clearTimeout(timer);
  }, []);

  useMotionValueEvent(scrollYProgress, "change", (latest) => {
    if (latest == null) return;

    setShowSecondSubtitle((prev) => {
      const switchOn = 0.18;
      const switchOff = 0.1;

      if (!prev && latest > switchOn) return true;
      if (prev && latest < switchOff) return false;
      return prev;
    });
  });

  return (
    <section
      ref={sectionRef}
      className="relative w-full h-[1100px] bg-[#f0edeb]"
    >
      {/* VIDEO LAYER */}
      <div className="absolute inset-0 overflow-hidden">
        <motion.video
          autoPlay
          loop
          playsInline
          muted
          style={{ y: videoY }}
          className="absolute inset-0 h-[130%] w-full object-cover object-bottom will-change-transform"
        >
          <source
            src="/images/6893579-uhd_3840_2160_25fps.mp4"
            type="video/mp4"
          />
        </motion.video>

        <div className="absolute inset-0 bg-black/20 pointer-events-none" />
      </div>

      {/* CONTENT LAYER */}
      <div className="absolute inset-0 z-10 h-screen">
        <div className="flex h-full flex-col justify-between px-6 pb-14 pt-24 md:px-12 md:pb-20 md:pt-28 lg:px-20 lg:pb-24 lg:pt-80">
          {/* Heading */}
          <div className="grid w-full max-w-[1400px] grid-cols-1 gap-10 lg:grid-cols-12 lg:gap-8">
            <div className="lg:col-span-8">
              <div className="mb-5">
                <HeroReveal delay="delay-100">
                  <p className="text-[11px] uppercase tracking-[0.28em] text-white/75 md:text-xs">
                    Humanly® Communities
                  </p>
                </HeroReveal>
              </div>

              <h1 ref={titleRef} className="max-w-[980px] text-left">
                <HeroReveal delay="delay-200">
                  <span className="block text-[42px] leading-[0.96] tracking-[-0.05em] md:text-[64px] lg:text-[92px] xl:text-[112px]">
                    <span className="font-medium text-white">
                      Every Humanly® community{" "}
                    </span>
                    <span className="font-light italic text-blue-300">
                      shares a common foundation.
                    </span>
                  </span>
                </HeroReveal>
              </h1>
            </div>
          </div>

          {/* Subtitles */}
          <div className="w-full max-w-[1400px]">
            <div className="lg:max-w-[760px]">
              <div className="relative min-h-[180px] md:min-h-[210px] lg:min-h-[230px]">
                {/* Subtitle 1 */}
                <motion.div
                  initial={false}
                  animate={{
                    opacity: showSecondSubtitle ? 0 : 1,
                    y: showSecondSubtitle ? -12 : 0,
                  }}
                  transition={{
                    duration: 0.6,
                    ease: [0.22, 1, 0.36, 1],
                  }}
                  className="absolute inset-x-0 bottom-16 md:bottom-20"
                >
                  <div className="max-w-[720px] pl-5">
                    <HeroReveal delay="delay-300">
                      <p className="text-sm leading-7 text-white/80 md:text-2xl">
                        "Humanly® empowers second chances and brilliant starts
                        for those left behind by the housing crisis."
                      </p>
                    </HeroReveal>
                  </div>
                </motion.div>

                {/* Subtitle 2 */}
                <motion.div
                  initial={false}
                  animate={{
                    opacity: showSecondSubtitle ? 1 : 0,
                    y: showSecondSubtitle ? 0 : 20,
                  }}
                  transition={{
                    duration: 0.6,
                    ease: [0.22, 1, 0.36, 1],
                  }}
                  className="absolute inset-x-0 bottom-16 md:bottom-20"
                >
                  <div className="max-w-[760px] pl-5">
                    <HeroReveal delay="delay-400">
                      <p className="text-[20px] font-normal leading-[1.5] tracking-[-0.02em] text-white/80 md:text-[28px] lg:text-2xl">
                        Our master-planned communities integrate
                        missing-middle housing products to solve the fractured
                        building model and unlock uncommon outcomes.
                      </p>
                    </HeroReveal>
                  </div>
                </motion.div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Spacer */}
      <div className="h-[1100px]" />
    </section>
  );
};