"use client";

import { useState } from "react";
import clsx from "clsx";

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

import { RevealOnScroll } from "../ui/RevealOnScroll";

export const InvestmentThesisSection = () => {
  const [openIndex, setOpenIndex] = useState<number | null>(0); // Default first item open

  return (
    <section className="relative w-full bg-transparent text-[#1c1b1a] py-24 lg:py-36 overflow-hidden">
      {/* Background Gradients — exact match to DataRoom */}
      <div
        className="absolute pointer-events-none right-0 translate-x-1/3 top-1/4 -translate-y-1/2 w-[clamp(44rem,14.769rem+116.923vw,120rem)] h-[clamp(25rem,8.654rem+65.385vw,67.5rem)]"
        style={{ background: "radial-gradient(50% 50%, rgba(255, 182, 55, 0.08), rgba(255, 182, 55, 0.02) 50%, rgba(255, 182, 55, 0))" }}
      />
      <div
        className="absolute pointer-events-none right-0 translate-x-1/3 top-1/4 -translate-y-[-30%] w-[clamp(44rem,14.769rem+116.923vw,120rem)] h-[clamp(25rem,8.654rem+65.385vw,67.5rem)]"
        style={{ background: "radial-gradient(50% 50%, rgba(255, 182, 55, 0.03), rgba(255, 182, 55, 0.02) 50%, rgba(255, 182, 55, 0))" }}
      />
      <div
        className="absolute pointer-events-none left-0 -translate-x-1/3 top-1/2 -translate-y-1/4 w-[clamp(44rem,14.769rem+116.923vw,120rem)] h-[clamp(25rem,8.654rem+65.385vw,67.5rem)]"
        style={{ background: "radial-gradient(50% 50%, rgba(255, 182, 55, 0.08), rgba(255, 182, 55, 0.02) 50%, rgba(255, 182, 55, 0))" }}
      />
      <div className="max-w-[1440px] mx-auto px-6 md:px-12 lg:px-16 relative flex flex-col gap-10 md:gap-16">

        {/* Header */}
        <RevealOnScroll>
          <header className="grid grid-cols-1 gap-6">
            <div className="flex flex-col gap-4 lg:gap-6">

              {/* Badge */}
              <div className="flex flex-col items-start gap-2">
                <span className="text-[#A8A5A0] text-xs font-bold tracking-widest uppercase">
                  INVESTMENT THESIS
                </span>
                <div className="h-0.5 w-[140px] bg-[linear-gradient(to_right,#6BCEFF,#0c007a,#AA3DAD,#FF6136,#FFE366)] rounded-full"></div>
              </div>

              <h2 className="text-4xl md:text-5xl lg:text-[4rem] font-serif leading-tight tracking-tight max-w-3xl text-[#1c1b1a]">
                Five revenue layers.<br />
                One integrated platform.
              </h2>

              <p className="text-base text-[#4a4741] max-w-2xl leading-relaxed mt-2">
                Traditional real estate captures one revenue stream. Humanly captures five — compounding returns through vertical integration from land to living to lifelong services.
              </p>
            </div>
          </header>
        </RevealOnScroll>

        {/* Content Body */}
        <div className="relative flex flex-col-reverse gap-10 md:gap-16 xl:gap-24 md:items-start md:flex-row-reverse">

          {/* Accordion Column */}
          <div className="md:grow md:shrink md:basis-1/2 flex flex-col gap-3 relative z-10 w-full" role="region" aria-label="Accordion content">
            {accordionData.map((item, index) => {
              const isOpen = openIndex === index;
              return (
                <RevealOnScroll key={item.id} delay={`delay-${(index + 1) * 100}` as any}>
                  <div className="bg-white/60 border border-[#1c1b1a]/5 p-2 rounded-xl transition-colors duration-300 shadow-sm">
                    <button
                      onClick={() => setOpenIndex(isOpen ? null : index)}
                      aria-expanded={isOpen}
                      type="button"
                      className="w-full p-3 md:p-5 flex items-center justify-between gap-4 md:gap-6 text-left group rounded-lg cursor-pointer"
                    >
                      <div className="flex flex-col gap-1">
                        <span className="text-[0.65rem] md:text-xs font-medium tracking-wider uppercase text-[#8f96a3]">
                          {item.eyebrow}
                        </span>
                        <h3 className={clsx(
                          "text-lg md:text-xl font-sans font-medium transition-colors duration-300",
                          isOpen ? "text-blue-600" : "text-[#1c1b1a] group-hover:text-blue-500"
                        )}>
                          {item.title}
                        </h3>
                      </div>
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        fill="none"
                        viewBox="0 0 15 15"
                        className={clsx(
                          "w-4 h-auto transition-all duration-300 shrink-0",
                          isOpen ? "fill-mustard-200" : "fill-[#c2c9d6] group-hover:fill-mustard-100"
                        )}
                      >
                        {isOpen ? (
                          <path d="M14.25 8.25H0.75A0.75.75 0 0 1 0.75 6.75H14.25A0.75.75 0 0 1 14.25 8.25Z" fill="currentColor" />
                        ) : (
                          <path d="M7.5 0a.75.75 0 0 1 .75.75v6h6a.75.75 0 0 1 0 1.5h-6v6a.75.75 0 0 1-1.5 0v-6h-6a.75.75 0 0 1 0-1.5h6v-6A.75.75 0 0 1 7.5 0" fill="currentColor" />
                        )}
                      </svg>
                    </button>

                    {/* Expandable Content Area */}
                    <div
                      className={clsx(
                        "overflow-hidden transition-all duration-500 ease-in-out px-3 md:px-5",
                        isOpen ? "max-h-48 opacity-100 pb-4" : "max-h-0 opacity-0"
                      )}
                    >
                      <p className="text-[#4a4741] font-sans text-base leading-relaxed">
                        {item.content}
                      </p>
                    </div>
                  </div>
                </RevealOnScroll>
              );
            })}
          </div>

          {/* Image Column */}
          <div className="md:grow md:shrink md:basis-1/2 w-full md:max-w-[600px] relative z-10" role="img" aria-label="Accompanying illustration">
            <RevealOnScroll delay="delay-100">
              <div className="relative aspect-square md:aspect-auto md:h-[600px] w-full bg-slate-800/50 rounded-2xl overflow-hidden border border-white/5 shadow-2xl">
                <img
                  alt="Healthcare insights illustration"
                  loading="lazy"
                  className="w-full h-full object-cover transition-transform duration-1000 hover:scale-105"
                  src="/images/pexels-ron-lach-10037036.jpg"
                />
                {/* Dynamic subtle overlay to map beautifully with the dark theme */}
                <div className="absolute inset-0 bg-gradient-to-t from-[#1e2427]/60 to-transparent pointer-events-none"></div>
              </div>
            </RevealOnScroll>
          </div>

        </div>
      </div>
    </section>
  );
};
