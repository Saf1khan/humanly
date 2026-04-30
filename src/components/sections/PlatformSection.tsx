"use client";

import { useState } from "react";
import clsx from "clsx";

const layerRows = [
  {
    id: "intelligence",
    eyebrow: "CAPTURE",
    title: "Intelligence",
    content: "AI-driven site selection, market analysis, and community design. Machine learning models evaluate 200+ data points per site.",
  },
  {
    id: "layer1",
    eyebrow: "LAYER 1",
    title: "Land & Entitlement",
    content: "Strategic acquisition paired with municipal partnerships to secure entitlements, tax incentives, and below-market financing.",
  },
  {
    id: "layer2",
    eyebrow: "LAYER 2",
    title: "Development",
    content: "A hybrid construction approach combining modular efficiency with traditional quality — reducing build timelines by 30% and costs by 20%.",
  },
  {
    id: "layer3",
    eyebrow: "LAYER 3",
    title: "Operations",
    content: "HumanlyOS® manages leasing, maintenance, resident communications, and compliance — reducing cost per unit while improving resident satisfaction.",
  },
  {
    id: "layer4",
    eyebrow: "LAYER 4",
    title: "Services",
    content: "Eight integrated service categories transacted through the Humanly platform — healthcare, childcare, education, food, legal, mobility, financial wellness, and workforce.",
  },
  {
    id: "layer5",
    eyebrow: "LAYER 5",
    title: "Financial",
    content: "HumanlyPay™ delivers embedded credit building, savings, micro-lending, and insurance products directly to residents.",
  },
  {
    id: "layer6",
    eyebrow: "LAYER 6",
    title: "Compounding",
    content: "Every resident interaction generates anonymized data that improves service delivery and creates compounding network effects across the ecosystem.",
  },
  {
    id: "capture-rev",
    eyebrow: "CAPTURE",
    title: "Revenue Aggregation",
    content: "Five discrete revenue streams — NOI, service fees, financial product margins, data licensing, and platform fees — compound into a diversified return profile.",
  },
  {
    id: "moat",
    eyebrow: "MOAT",
    title: "Vertical Integration",
    content: "By owning the land, building, operating system, services, and financial layer, Humanly creates a defensible moat no horizontal competitor can replicate.",
  },
];

import { RevealOnScroll } from "../ui/RevealOnScroll";

export const PlatformSection = () => {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  return (
    <section className="relative w-full bg-transparent text-[#1c1b1a] py-24 lg:py-36 overflow-hidden">
      {/* Background Gradients — exact match to DataRoom */}
      <div
        className="absolute pointer-events-none left-[-30%] translate-x-0 top-0 -translate-y-1/2 w-[clamp(44rem,14.769rem+116.923vw,120rem)] h-[clamp(25rem,8.654rem+65.385vw,67.5rem)]"
        style={{ background: "radial-gradient(50% 50%, rgba(255, 182, 55, 0.03), rgba(255, 182, 55, 0.02) 50%, rgba(255, 182, 55, 0))" }}
      />
      <div
        className="absolute pointer-events-none right-0 translate-x-1/3 top-1/4 -translate-y-1/2 w-[clamp(44rem,14.769rem+116.923vw,120rem)] h-[clamp(25rem,8.654rem+65.385vw,67.5rem)]"
        style={{ background: "radial-gradient(50% 50%, rgba(255, 182, 55, 0.03), rgba(255, 182, 55, 0.02) 50%, rgba(255, 182, 55, 0))" }}
      />
      <div
        className="absolute pointer-events-none translate-x-0 top-1/2 -translate-y-1/2 w-[clamp(44rem,14.769rem+116.923vw,120rem)] h-[clamp(25rem,8.654rem+65.385vw,67.5rem)]"
        style={{ background: "radial-gradient(50% 50%, rgba(255, 182, 55, 0.08), rgba(255, 182, 55, 0.06) 50%, rgba(255, 182, 55, 0))" }}
      />
      <div
        className="absolute pointer-events-none left-0 -translate-x-1/2 top-1/2 -translate-y-1/4 w-[clamp(44rem,14.769rem+116.923vw,120rem)] h-[clamp(25rem,8.654rem+65.385vw,67.5rem)]"
        style={{ background: "radial-gradient(50% 50%, rgba(255, 182, 55, 0.08), rgba(255, 182, 55, 0.02) 50%, rgba(255, 182, 55, 0))" }}
      />
      <div
        className="absolute pointer-events-none right-0 -translate-x-[-30%] top-1/2 -translate-y-[-20%] w-[clamp(44rem,14.769rem+116.923vw,120rem)] h-[clamp(25rem,8.654rem+65.385vw,67.5rem)]"
        style={{ background: "radial-gradient(50% 50%, rgba(255, 182, 55, 0.08), rgba(255, 182, 55, 0.02) 50%, rgba(255, 182, 55, 0))" }}
      />
      <div className="max-w-[1440px] mx-auto px-6 md:px-12 lg:px-16 relative flex flex-col gap-10 md:gap-16">

        {/* Two column: text left, image right */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-10 md:gap-16 items-center">

          {/* Left: Badge + Title + Description + Gradient bar */}
          <RevealOnScroll>
            <div className="flex flex-col gap-6">
              <div className="flex flex-col items-start gap-2">
                <span className="text-[#A8A5A0] text-xs font-bold tracking-widest uppercase">
                  THE PLATFORM
                </span>
                <div className="h-0.5 w-[104px] bg-[linear-gradient(to_right,#6BCEFF,#0c007a,#AA3DAD,#FF6136,#FFE366)] rounded-full"></div>
              </div>
              <h2 className="text-4xl md:text-5xl lg:text-[4rem] font-serif leading-tight tracking-tight text-[#1c1b1a]">
                Seven layers.<br />One vertical stack.
              </h2>
              <p className="text-base text-[#4a4741] max-w-lg leading-relaxed">
                From intelligence-driven site selection through compounding network effects — every layer feeds the next, creating a moat no horizontal competitor can replicate.
              </p>
              <div className="mt-2 flex flex-col gap-2">
                <div className="h-[3px] w-full rounded-full bg-[linear-gradient(to_right,#6BCEFF,#0c007a,#AA3DAD,#FF6136,#FFE366)]" />
                <div className="flex justify-between text-xs text-[#8f96a3] tracking-wide pt-1">
                  <span>Acquisitions</span>
                  <span>Lease-up</span>
                  <span>Management</span>
                </div>
              </div>
            </div>
          </RevealOnScroll>

          {/* Right: Image — same style as InvestmentThesisSection */}
          <RevealOnScroll delay="delay-100">
            <div className="relative w-full aspect-square md:aspect-auto md:h-[560px] bg-slate-800/50 rounded-2xl overflow-hidden border border-white/5 shadow-2xl">
              <img
                alt="Humanly Platform"
                loading="lazy"
                className="w-full h-full object-cover transition-transform duration-1000 hover:scale-105"
                src="/images/pexels-ron-lach-10037036.jpg"
              />
            </div>
          </RevealOnScroll>

        </div>

        {/* Bottom: Same accordion card style as InvestmentThesisSection */}
        <div className="flex flex-col gap-3">
          {layerRows.map((item, index) => {
            const isOpen = openIndex === index;
            return (
              <RevealOnScroll key={item.id} delay={`delay-${(index % 5 + 1) * 100}` as any}>
                <div className="bg-[#4A4741]/10 backdrop-blur-[32px] border border-[#4A4741]/10 p-2 rounded-2xl transition-all duration-500 shadow-[0_8px_32px_rgba(0,0,0,0.05)] hover:shadow-[0_8px_32px_rgba(0,0,0,0.1)] hover:bg-[#4A4741]/10">
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

                  <div className={clsx(
                    "overflow-hidden transition-all duration-500 ease-in-out px-3 md:px-5",
                    isOpen ? "max-h-48 opacity-100 pb-4" : "max-h-0 opacity-0"
                  )}>
                    <p className="text-[#4a4741] font-sans text-base leading-relaxed">
                      {item.content}
                    </p>
                  </div>
                </div>
              </RevealOnScroll>
            );
          })}
        </div>

      </div>
    </section>
  );
};
