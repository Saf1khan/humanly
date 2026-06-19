"use client";
import React, { useEffect, useRef } from "react";

export const WShiftSection = () => {
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const obs = new IntersectionObserver(
      (entries) =>
        entries.forEach((e) => {
          if (e.isIntersecting) {
            e.target.classList.add("wh-on");
            obs.unobserve(e.target);
          }
        }),
      { threshold: 0.12 },
    );
    if (ref.current) obs.observe(ref.current);
    return () => obs.disconnect();
  }, []);

  return (
    <section className="gl-b-cta bg-neutral-800 px-6 py-16 md:px-12 md:py-20 lg:py-24 w-full font-['Albert_Sans',-apple-system,BlinkMacSystemFont,sans-serif] rounded-b-[40px] md:rounded-b-[64px] relative z-20 overflow-hidden">
      {/* Background Gradients — matching DataRoomForm */}
      <div
        className="absolute pointer-events-none right-0 translate-x-1/2 top-0 -translate-y-1/2 w-[clamp(44rem,14.769rem+116.923vw,120rem)] h-[clamp(25rem,8.654rem+65.385vw,67.5rem)]"
        style={{ background: "radial-gradient(50% 50%, rgba(105, 165, 255, 0.15), rgba(105, 165, 255, 0.05) 50%, rgba(105, 165, 255, 0))" }}
      />
      <div
        className="absolute pointer-events-none left-1/2 -translate-x-1/2 top-1/2 -translate-y-1/2 w-[clamp(44rem,14.769rem+116.923vw,120rem)] h-[clamp(25rem,8.654rem+65.385vw,67.5rem)]"
        style={{ background: "radial-gradient(50% 50%, rgba(105, 165, 255, 0.12), rgba(105, 165, 255, 0.05) 50%, rgba(105, 165, 255, 0))" }}
      />
      <div
        ref={ref}
        className="content-container flex flex-col lg:flex-row lg:items-stretch max-w-[1400px] mx-auto transition-all duration-1000 ease-out opacity-0 translate-y-8 [&.wh-on]:opacity-100 [&.wh-on]:translate-y-0"
      >
        {/* Left Content: Image Column */}
        <div className="left-content flex-1 basis-[100%] lg:basis-1/2 overflow-hidden rounded-[12px] lg:rounded-xl max-h-[350px] md:max-h-none lg:max-h-none">
          <img
            loading="lazy"
            decoding="async"
            src="/images/TheShift-Image.png"
            className="w-full h-full object-cover object-center aspect-[16/9] lg:aspect-auto hover:scale-105 transition-transform duration-700 ease-out"
            alt="Humanly Shift"
          />
        </div>

        {/* Right Content: Text Column */}
        <div className="right-content flex flex-1 basis-[100%] items-center justify-center lg:basis-1/2">
          <div className="text-container w-full px-0 py-10 lg:pl-8 lg:pr-0 xl:px-[64px]">
            <h2 className="text-[32px] font-serif font-normal leading-[1.08] tracking-[-0.03em] text-white md:text-[40px] lg:text-[48px]">
              Humanly doesn&apos;t patch the problem. It rebuilds the system{" "}
              <span className="font-serif font-normal">
                from the ground up.
              </span>
            </h2>
            <p className="mt-6 w-full font-normal text-[15px] md:text-[16px] lg:text-[17px] leading-relaxed lg:w-[90%] text-[#a8a5a0]">
              Humanly deploys an AI-native, vertically integrated community
              platform that connects land acquisition, design, development,
              operations, service delivery, and resident financial tools into
              one coordinated ecosystem. The result is a neighborhood model
              engineered to improve both investor performance and human
              outcomes.
            </p>
            <a
              href="/platform"
              className="w-full md:w-auto px-10 py-3.5 bg-white text-[#111213] font-bold rounded-full hover:bg-neutral-200 transition-colors shadow-lg shadow-white/10 mt-6 inline-block text-center text-[16px] leading-[20px] md:mt-[27.17px] lg:mt-[36px]"
            >
              Explore the Platform
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};
