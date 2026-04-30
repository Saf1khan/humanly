"use client";

import { RevealOnScroll } from "../ui/RevealOnScroll";
import { Building2, CreditCard, RefreshCw } from "lucide-react";

const features = [
  {
    id: 1,
    icon: Building2,
    title: "Community Management",
    description: "AI-driven ops, maintenance, leasing",
  },
  {
    id: 2,
    icon: CreditCard,
    title: "Financial Services",
    description: "HumanlyPay™ embedded finance",
  },
  {
    id: 3,
    icon: RefreshCw,
    title: "Service Marketplace",
    description: "Circle of Services® integration",
  },
];

export const HumanlyOSSection = () => {
  return (
    <section className="relative w-full py-8 lg:py-16 overflow-hidden min-h-[680px] lg:min-h-[780px]">

      {/* ── Full-section background image ── */}
      <img
        src="/images/pexels-tara-winstead-8386434.jpg"
        alt=""
        aria-hidden="true"
        className="absolute inset-0 w-full object-cover -z-20"
        style={{ zIndex: 0, height: "100%" }}
      />

      {/* ── Ambient colour gradients ── */}
      <div
        className="absolute pointer-events-none right-0 translate-x-1/3 top-1/3 -translate-y-1/2 w-[clamp(44rem,14.769rem+116.923vw,120rem)] h-[clamp(25rem,8.654rem+65.385vw,67.5rem)] -z-10"
        style={{ background: "radial-gradient(50% 50%, rgba(255,182,55,0.08), rgba(255,182,55,0.02) 50%, rgba(255,182,55,0))" }}
      />
      <div
        className="absolute pointer-events-none left-0 -translate-x-1/2 top-1/3 -translate-y-1/4 w-[clamp(44rem,14.769rem+116.923vw,120rem)] h-[clamp(25rem,8.654rem+65.385vw,67.5rem)] -z-10"
        style={{ background: "radial-gradient(50% 50%, rgba(255,182,55,0.08), rgba(255,182,55,0.03) 50%, rgba(255,182,55,0))" }}
      />

      {/* ── Content ── */}
      <div className="max-w-[1440px] mx-auto px-6 md:px-[64px] h-full flex flex-col justify-between">

        <div className="flex flex-col lg:flex-row justify-between gap-6 lg:gap-[4%]">

          {/* ── Left: hero copy ── */}
          <RevealOnScroll delay="delay-100" className="w-full lg:w-[63%] flex flex-col justify-end pt-48 lg:pt-64 pb-4">
            <div className="mb-6">
              <div className="font-bold py-2 rounded-md uppercase inline-block bg-[#f7f1e8] text-xs px-3">
                <p className="text-left text-[#1c1b1a] font-sans leading-normal font-bold">
                  THE OPERATING SYSTEM
                </p>
              </div>
            </div>

            <h2 className="text-left text-white font-sans leading-tight font-bold mb-4 text-[2.5rem] md:text-[3rem] lg:text-[4rem] tracking-tight">
              HumanlyOS&reg;
            </h2>
            <p className="text-left text-white/90 font-sans leading-relaxed text-[1rem] md:text-[1.125rem] max-w-xl">
              The AI-native operating system that transforms community management from fragmented services into an integrated, revenue-generating platform.
            </p>
          </RevealOnScroll>

          {/* ── Right: feature cards (desktop) ── */}
          <div className="hidden md:flex flex-col gap-6 w-full lg:w-[30%] pt-4 lg:pt-0">
            {features.map((feature, idx) => (
              <div key={feature.id} className="flex-1">
                <article className="relative flex h-44 flex-col justify-center rounded-3xl group transition-colors duration-500 shadow-[0_16px_40px_rgba(0,0,0,0.15)] hover:shadow-[0_16px_40px_rgba(0,0,0,0.25)]">
                  {/* Glass Background Layer */}
                  <div className="absolute inset-0 rounded-3xl bg-[#4A4741]/10 backdrop-blur-md border border-white/30 transition-colors duration-500 group-hover:bg-white/5 group-hover:border-white/[0.12]"></div>
                  
                  <div className="relative z-10 p-6 lg:p-8 flex flex-col h-full justify-center">
                    {/* ── Title + icon row ── */}
                    <div className="flex items-center justify-between mb-2">
                      <h2 className="text-left font-sans leading-tight font-bold text-[1.25rem] text-[#f7f1e8]">
                        {feature.title}
                      </h2>
                      <div className="text-white/80 shrink-0 ml-3">
                        <feature.icon className="w-6 h-6" strokeWidth={1.5} />
                      </div>
                    </div>
                    <p className="text-left font-sans text-white/70 text-[0.95rem]">
                      {feature.description}
                    </p>
                  </div>
                </article>
              </div>
            ))}
          </div>

          {/* ── Right: feature cards (mobile slider) ── */}
          <div className="md:hidden mt-4 pt-4 overflow-hidden w-full">
            <div
              className="flex overflow-x-auto snap-x snap-mandatory gap-x-6 pr-6 snap-always -mx-6 px-6 [&::-webkit-scrollbar]:hidden"
              style={{ scrollbarWidth: "none" }}
            >
              {features.map((feature) => (
                <article
                  key={feature.id}
                  className="relative flex-shrink-0 w-[75vw] snap-center flex flex-col justify-center rounded-3xl min-h-[200px] shadow-[0_16px_40px_rgba(0,0,0,0.15)] transition-colors duration-500 hover:shadow-[0_16px_40px_rgba(0,0,0,0.25)] group"
                >
                  {/* Glass Background Layer */}
                  <div className="absolute inset-0 rounded-3xl bg-black/20 backdrop-blur-xl border border-white/[0.08] transition-colors duration-500 group-hover:bg-black/30 group-hover:border-white/[0.12]"></div>
                  
                  <div className="relative z-10 p-6 flex flex-col h-full justify-center">
                    {/* ── Title + icon row ── */}
                    <div className="flex items-center justify-between mb-2">
                      <h2 className="text-left text-[#f7f1e8] font-sans leading-tight font-bold text-[1.25rem]">
                        {feature.title}
                      </h2>
                      <div className="text-white/80 shrink-0 ml-3">
                        <feature.icon className="w-6 h-6" strokeWidth={1.5} />
                      </div>
                    </div>
                    <p className="text-left font-sans text-white/70 text-[0.95rem]">
                      {feature.description}
                    </p>
                  </div>
                </article>
              ))}
            </div>
          </div>

        </div>
      </div>
    </section>
  );
};