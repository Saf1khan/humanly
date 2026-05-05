"use client";

import { useState } from "react";
import clsx from "clsx";
import { RevealOnScroll } from "../ui/RevealOnScroll";

const accordionData = [
  {
    id: "layer1",
    eyebrow: "Layer 1",
    title: "Real Estate Operations",
    content: "Traditional NOI from attainable housing at 80–120% AMI."
  },
  {
    id: "layer2",
    eyebrow: "Layer 2",
    title: "Service Revenue",
    content: "Circle of Services® transaction fees across 8 categories."
  },
  {
    id: "layer3",
    eyebrow: "Layer 3",
    title: "Financial Products",
    content: "HumanlyPay™ embedded financial services — credit building, savings, insurance."
  },
  {
    id: "layer4",
    eyebrow: "Layer 4",
    title: "Data & Intelligence",
    content: "Anonymized community insights and behavioral data products."
  },
  {
    id: "layer5",
    eyebrow: "Layer 5",
    title: "Platform Licensing",
    content: "HumanlyOS® licensing to third-party operators and municipalities."
  }
];

export const InvestmentThesisSection = () => {
  const [activeIndex, setActiveIndex] = useState(0);

  const goPrev = () => {
    setActiveIndex((prev) => (prev - 1 + accordionData.length) % accordionData.length);
  };

  const goNext = () => {
    setActiveIndex((prev) => (prev + 1) % accordionData.length);
  };

  return (
    <section className="w-full min-h-[1024px] flex items-stretch justify-center p-4 md:p-10 bg-transparent">

      {/* The SINGLE container div */}
      <div className="relative w-full rounded-[2rem] overflow-hidden shadow-2xl flex flex-col items-start justify-between min-h-[1024px]">

        {/* Background Image (Absolute inside the single div) */}
        <div className="absolute inset-0 z-0">
          <img
            src="/images/pexels-ianr-21853691.jpg"
            alt="Neighborhood"
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-black/5"></div>
        </div>

        {/* Top Content Row: Header and Cards */}
        <div className="relative z-10 w-full flex flex-col lg:flex-row items-start justify-between pl-6 md:pl-12 pt-6 md:pt-12 lg:pl-20 lg:pt-20">

          {/* Left Side: Header */}
          <div className="flex flex-col items-start lg:w-1/2">
            <div className="bg-white/40 backdrop-blur-md rounded-full px-5 py-2 mb-6 shadow-sm border border-white/40 overflow-hidden">
              <span className="text-[10px] md:text-xs font-bold tracking-[0.2em] uppercase text-slate-950 block">
                INVESTMENT THESIS
              </span>
            </div>
            <RevealOnScroll delay="delay-300">
              <h2 className="text-4xl md:text-5xl lg:text-[60px] leading-[1.1] tracking-tight text-white lg:whitespace-nowrap">
                Five revenue layers.<br />
                One integrated platform.
              </h2>
            </RevealOnScroll>
            <div className="h-[2px] w-[80%] md:w-[600px] bg-[linear-gradient(to_right,#6BCEFF,#0c007a,#AA3DAD,#FF6136,#FFE366)] rounded-full mt-3"></div>
          </div>

          {/* Right Side: Stacked Glass Cards */}
          <div className="lg:w-1/2 flex justify-center w-full pb-36 lg:pb-0 absolute top-56 right-10">
            <div className="relative w-[280px] sm:w-[380px] md:w-[420px] h-[450px] shrink-0 mr-10 md:mr-20 lg:mr-32 lg:mt-16">
              {accordionData.map((slide, index) => {
                const offset = (index - activeIndex + accordionData.length) % accordionData.length;
                const isVisible = offset < 5;

                if (!isVisible) return null;

                return (
                  <div
                    key={index}
                    className={clsx(
                      "absolute top-0 right-0 w-full h-full p-8 md:p-10 rounded-[2rem] transition-all duration-700 ease-in-out backdrop-blur-xl border border-white/40 shadow-2xl",
                      offset === 0 ? "z-50 translate-x-0 scale-100 bg-white/20 opacity-100 blur-none border border-white/30" :
                        offset === 1 ? "z-40 translate-x-8 scale-[0.96] bg-white/15 opacity-90 blur-[1px] border border-white/30" :
                          offset === 2 ? "z-30 translate-x-16 scale-[0.92] bg-white/15 opacity-80 blur-[1px] border border-white/30" :
                            offset === 3 ? "z-20 translate-x-24 scale-[0.88] bg-white/15 opacity-70 blur-[1px] border border-white/30" :
                              "z-10 translate-x-32 scale-[0.84] bg-white/15 opacity-60 blur-[1px] border border-white/30"
                    )}
                  >
                    <h3 className="text-3xl text-slate-800 mb-3 leading-tight pr-4">{slide.title}</h3>
                    <p className="text-sm font-medium text-slate-600 mb-6">{slide.eyebrow}</p>
                    <p className="text-base text-slate-800/90 leading-relaxed">
                      {slide.content}
                    </p>
                  </div>
                )
              })}

              {/* Arrows */}
              <button
                onClick={goPrev}
                className="absolute top-1/2 -translate-y-1/2 -left-6 z-50 w-12 h-12 bg-white rounded-full flex items-center justify-center shadow-xl hover:bg-slate-50 transition-colors border border-slate-100 text-slate-500"
              >
                <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M15 18l-6-6 6-6" /></svg>
              </button>

              <button
                onClick={goNext}
                className="absolute top-1/2 -translate-y-1/2 -right-6 z-50 w-12 h-12 bg-white rounded-full flex items-center justify-center shadow-xl hover:bg-slate-50 transition-colors border border-slate-100 text-slate-500"
              >
                <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M9 18l6-6-6-6" /></svg>
              </button>
            </div>
          </div>

        </div>

        {/* Bottom Left White Overlay */}
        <div className="absolute bottom-0 left-0 w-full md:w-[700px] z-20 mt-auto">
          <div className="bg-white rounded-tr-[80px] p-10 md:p-16 lg:p-20 shadow-[0_-10px_40px_rgba(0,0,0,0.05)] border-t border-r border-white/50">
            <RevealOnScroll delay="delay-300">
              <p className="text-base md:text-xl italic text-slate-800 leading-relaxed pr-8">
                Traditional real estate captures one revenue stream. Humanly captures five — compounding returns through vertical integration from land to living to lifelong services.
              </p>
            </RevealOnScroll>
          </div>
        </div>

      </div>
    </section>
  );
};
