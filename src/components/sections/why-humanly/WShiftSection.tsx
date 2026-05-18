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
      { threshold: 0.12 }
    );
    if (ref.current) obs.observe(ref.current);
    return () => obs.disconnect();
  }, []);

  return (
    <section className="py-[140px] md:py-[100px]">
      <div className="max-w-[1200px] mx-auto px-12 md:px-6">
        <div className="wh-shift wh-rv text-center py-20 border-t border-b border-[#e0e4e5]" ref={ref}>
          <p className="text-[11px] font-bold uppercase tracking-[0.15em] text-[#ff7e5d]">The Shift</p>
          <h2 className="text-[clamp(30px,3.8vw,52px)] font-extrabold tracking-[-1.6px] max-w-[840px] mx-auto my-4 leading-[1.08] text-[#111111]">
            Humanly doesn&apos;t patch the problem. It rebuilds the system from
            the ground up.
          </h2>
          <p className="max-w-[760px] mx-auto mt-5 text-base leading-[1.75] text-[#827e7a]">
            Humanly deploys an AI-native, vertically integrated community
            platform that connects land acquisition, design, development,
            operations, service delivery, and resident financial tools into one
            coordinated ecosystem. The result is a neighborhood model engineered
            to improve both investor performance and human outcomes.
          </p>
        </div>
      </div>
    </section>
  );
};
