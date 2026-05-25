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
    <section className="gl-b-cta bg-[#131416] px-4 pt-20 pb-20 md:px-8 md:pt-20 md:pb-20 lg:pt-[100px] lg:pb-[140px] w-full font-['Albert_Sans',-apple-system,BlinkMacSystemFont,sans-serif] rounded-b-[40px] md:rounded-b-[64px] relative z-20">
      <div
        ref={ref}
        className="content-container flex flex-col md:flex-row max-w-[1400px] mx-auto transition-all duration-1000 ease-out opacity-0 translate-y-8 [&.wh-on]:opacity-100 [&.wh-on]:translate-y-0"
      >
        {/* Left Content: Image Column */}
        <div className="left-content flex-1 basis-[100%] md:basis-[39.325%] lg:basis-1/2 overflow-hidden">
          <img
            loading="lazy"
            decoding="async"
            src="/images/TheShift-Image.png"
            className="w-full h-full object-cover object-center aspect-[328/250] md:aspect-[280/300] lg:aspect-[688/400] hover:scale-105 transition-transform duration-700 ease-out"
            alt="Humanly Shift"
          />
        </div>

        {/* Right Content: Text Column */}
        <div className="right-content flex flex-1 basis-[100%] items-center justify-center bg-[#DAD4CB] md:basis-[60.675%] lg:basis-1/2">
          <div className="text-container w-full px-6 py-10 md:px-8 md:py-12 lg:px-[64px]">
            <p className="text-[11px] font-bold uppercase tracking-[0.15em] text-[#6E7C8D] mb-3 block">
              THE SHIFT
            </p>
            <h2 className="text-[32px] font-serif font-normal leading-[1.08] tracking-[-0.03em] text-[#111111] md:text-[40px] lg:text-[48px]">
              Humanly doesn&apos;t patch the problem. It rebuilds the system{" "}
              <em className="font-serif italic font-normal text-[#6E7C8D]">
                from the ground up.
              </em>
            </h2>
            <p className="mt-3 w-full text-[14px] font-normal leading-[20px] tracking-[0.14px] md:mt-4 md:w-full md:max-w-full md:text-[15px] md:leading-[22px] md:tracking-[0.15px] lg:mt-3 lg:w-[90%] lg:text-[16px] lg:leading-[24px] text-[#5F646B]">
              Humanly deploys an AI-native, vertically integrated community
              platform that connects land acquisition, design, development,
              operations, service delivery, and resident financial tools into
              one coordinated ecosystem. The result is a neighborhood model
              engineered to improve both investor performance and human
              outcomes.
            </p>
            <a
              href="/platform"
              className="cta-button border-b border-[#6E7C8D]/30 text-[#111111] hover:text-[#6E7C8D] hover:border-[#6E7C8D] transition-colors duration-300 mt-6 block w-fit text-[16px] font-semibold leading-[20px] md:mt-[27.17px] lg:mt-[36px]"
            >
              Explore the Platform
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};
