"use client";
import React, { useEffect, useRef } from "react";

const layers = [
  {
    num: "Layer 1",
    title: "Real Estate Operations",
    desc: "NOI from attainable housing serving workforce households in the 80–120% AMI segment.",
    color: "#0099ff",
  },
  {
    num: "Layer 2",
    title: "Service Revenue",
    desc: "Circle of Services® transaction fees across healthcare, food, wellness, work, transportation, education, entertainment, and general services.",
    color: "#6BCEFF",
  },
  {
    num: "Layer 3",
    title: "Financial Products",
    desc: "HumanlyPay™ supports credit building, savings, insurance, and embedded resident financial progression.",
    color: "#AA3DAD",
  },
  {
    num: "Layer 4",
    title: "Data Intelligence",
    desc: "Anonymized community insights, operational learning loops, and municipal or partner intelligence products.",
    color: "#ff7e5d",
  },
  {
    num: "Layer 5",
    title: "Platform Licensing",
    desc: "HumanlyOS® can be licensed to third-party operators, municipalities, and future development partners.",
    color: "#FFE366",
  },
];

export const WRevenueSection = () => {
  const headRefs = useRef<(HTMLElement | null)[]>([]);
  const cardRefs = useRef<(HTMLDivElement | null)[]>([]);

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
    headRefs.current.forEach((el) => el && obs.observe(el));
    cardRefs.current.forEach((el) => el && obs.observe(el));
    return () => obs.disconnect();
  }, []);

  return (
    <section 
      className="py-[140px] md:py-[100px]"
      style={{
        background: 'radial-gradient(ellipse 80% 50% at 10% 30%, rgba(0,153,255,.05) 0, transparent 50%), radial-gradient(ellipse 60% 60% at 90% 70%, rgba(255,126,93,.04) 0, transparent 50%), #f0edeb'
      }}
    >
      <div className="max-w-[1200px] mx-auto px-12 md:px-6">
        <div className="wh-rev-grid grid grid-cols-1 lg:grid-cols-2 gap-16 items-start">
          {/* Left */}
          <div>
            <p
              className="wh-eyebrow wh-rvl text-[11px] font-bold uppercase tracking-[0.15em] text-[#ff7e5d]"
              ref={(el) => { headRefs.current[0] = el; }}
            >
              Designed Revenue Model
            </p>
            <div
              className="wh-gline wh-rvl h-[2px] w-16 bg-gradient-to-r from-[#ff7e5d] to-[#0099ff] rounded-[1px] my-4 mb-3"
              ref={(el) => { headRefs.current[1] = el as HTMLElement | null; }}
            />
            <h2
              className="wh-rvl text-[clamp(28px,3vw,44px)] font-extrabold tracking-[-1.5px] leading-[1.1] text-[#111111]"
              ref={(el) => { headRefs.current[2] = el; }}
            >
              Five revenue layers. One integrated platform.
            </h2>
            <p
              className="wh-rvl mt-5 text-base leading-[1.7] text-[#827e7a]"
              ref={(el) => { headRefs.current[3] = el; }}
              style={{
                transitionDelay: "0.1s",
              }}
            >
              Unlike a traditional developer that captures only one value
              stream, Humanly is designed to compound value across the built
              environment, daily service flows, and platform intelligence.
            </p>
          </div>

          {/* Right — stacked cards */}
          <div className="wh-rev-stack flex flex-col gap-2 mt-6">
            {layers.map((l, i) => (
              <div
                key={i}
                className="wh-rev-card wh-sg p-4 px-6 rounded-2xl transition-all duration-400 ease-[cubic-bezier(0.16,1,0.3,1)] bg-white border border-[#e0e4e5] border-l-[3px] shadow-[0_2px_10px_rgba(0,0,0,0.02)] hover:border-[#ff7e5d] hover:pl-8 hover:shadow-[0_4px_15px_rgba(0,0,0,0.04)]"
                ref={(el) => { cardRefs.current[i] = el; }}
                style={{
                  borderLeftColor: l.color,
                  transitionDelay: `${i * 0.1}s`,
                }}
              >
                <div className="wh-rev-num text-[11px] font-bold tracking-[0.08em] uppercase" style={{ color: l.color }}>
                  {l.num}
                </div>
                <h4 className="text-base font-bold mt-2 mb-1 text-[#111111]">{l.title}</h4>
                <p className="text-[13px] text-[#827e7a] leading-normal">{l.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};
