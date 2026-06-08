"use client";

import { RevealOnScroll } from "../../ui/RevealOnScroll";
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
        src="/images/pexels-cottonbro-6153354.jpg"
        alt=""
        aria-hidden="true"
        className="absolute inset-0 w-full h-full object-cover object-[50%_50%] md:object-[center_50%] z-0"
      />
      <div className="absolute top-0 left-0 w-full h-48 bg-gradient-to-b from-sandstone-200 to-transparent z-0"></div>
      <div className="absolute bottom-0 left-0 w-full h-64 bg-gradient-to-t from-sandstone-200 to-transparent z-0"></div>

      {/* ── Content ── */}
      <div className="max-w-[1440px] mx-auto px-6 md:px-12 lg:px-16 h-full flex flex-col justify-between">

        <div className="flex flex-col lg:flex-row justify-between gap-6 lg:gap-[4%]">

          {/* ── Left: hero copy ── */}
          <RevealOnScroll delay="delay-100" className="w-full lg:w-[63%] flex flex-col justify-end pt-48 lg:pt-64 pb-4">
            <div className="mb-6">
              <div className="py-2 rounded-md uppercase inline-block bg-[#f7f1e8] text-xs px-3">
                <p className="text-left text-[#1c1b1a] leading-normal font-albert font-normal">
                  THE OPERATING SYSTEM
                </p>
              </div>
            </div>

            <h2 className="text-left text-white leading-tight font-cormorant font-light mb-4 text-3xl md:text-5xl tracking-tight">
              HumanlyOS<sup>&reg;</sup>
            </h2>
            <p className="text-left text-white/90 font-light font-albert leading-relaxed text-base md:text-lg max-w-[640px]">
              The AI-native operating system that transforms community management from fragmented services into an integrated, revenue-generating platform.
            </p>
          </RevealOnScroll>

          {/* ── Right: feature cards (desktop) ── */}
          <div className="hidden md:flex flex-col gap-6 w-full lg:w-[30%] pt-4 lg:pt-0">
            {features.map((feature, idx) => (
              <div key={feature.id} className="flex-1">
                <article className="relative flex h-44 flex-col justify-center rounded-3xl group transition-colors duration-500 shadow-[0_16px_40px_rgba(0,0,0,0.15)] hover:shadow-[0_16px_40px_rgba(0,0,0,0.25)]">
                  {/* Glass Background Layer */}
                  <div className="absolute inset-0 rounded-3xl bg-black/15 backdrop-blur-xl border border-white/20"></div>

                  <div className="relative z-10 p-6 lg:p-8 flex flex-col h-full justify-center">
                    {/* ── Title + icon row ── */}
                    <div className="flex items-center justify-between mb-2">
                      <h2 className="text-left leading-tight font-light font-cormorant text-2xl text-[#f7f1e8]">
                        {feature.title}
                      </h2>
                      <div className="text-white/80 shrink-0 ml-3">
                        <feature.icon className="w-6 h-6" strokeWidth={1.5} />
                      </div>
                    </div>
                    <p className="text-left text-white/70 text-base font-light font-albert">
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
                  <div className="absolute inset-0 bg-black backdrop-blur-md border border-white/30"></div>

                  <div className="relative z-10 p-6 flex flex-col h-full justify-center">
                    {/* ── Title + icon row ── */}
                    <div className="flex items-center justify-between mb-2">
                      <h2 className="text-left text-[#f7f1e8] leading-tight font-bold text-[1.25rem]">
                        {feature.title}
                      </h2>
                      <div className="text-white/80 shrink-0 ml-3">
                        <feature.icon className="w-6 h-6" strokeWidth={1.5} />
                      </div>
                    </div>
                    <p className="text-left text-white/70 text-[0.95rem]">
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