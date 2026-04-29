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
  }
];

export const HumanlyOSSection = () => {
  return (
    <section className="relative w-full bg-transparent py-8 lg:py-16 overflow-hidden">
      {/* Background Gradients — exact match to DataRoom */}
      <div
        className="absolute pointer-events-none right-0 translate-x-1/3 top-1/3 -translate-y-1/2 w-[clamp(44rem,14.769rem+116.923vw,120rem)] h-[clamp(25rem,8.654rem+65.385vw,67.5rem)]"
        style={{ background: "radial-gradient(50% 50%, rgba(255, 182, 55, 0.12), rgba(255, 182, 55, 0.02) 50%, rgba(255, 182, 55, 0))" }}
      />
      <div
        className="absolute pointer-events-none left-0 -translate-x-1/2 top-1/3 -translate-y-1/4 w-[clamp(44rem,14.769rem+116.923vw,120rem)] h-[clamp(25rem,8.654rem+65.385vw,67.5rem)]"
        style={{ background: "radial-gradient(50% 50%, rgba(255, 182, 55, 0.12), rgba(255, 182, 55, 0.03) 50%, rgba(255, 182, 55, 0))" }}
      />

      <div className="max-w-[1440px] mx-auto px-6 md:px-[64px]">
        <RevealOnScroll>
          <h2 
            className="text-[1.125rem] text-left text-[#A8A5A0] font-sans font-bold mb-8 uppercase" 
            style={{ letterSpacing: "0.05em" }}
          >
            HUMANLY OS
          </h2>
        </RevealOnScroll>

        <div className="flex flex-col lg:flex-row justify-between gap-6 lg:gap-[4%]">
          
          {/* Main Visual - Left Side */}
          <div className="w-full lg:w-[63%] relative overflow-hidden rounded-lg group">
            <RevealOnScroll delay="delay-100" className="h-full">
              <div className="relative h-full min-h-[480px] lg:min-h-[580px]">
                <img 
                  src="/images/pexels-tara-winstead-8386434.jpg"
                  alt="HumanlyOS App Interface Background"
                  className="absolute inset-0 w-full h-full object-cover transition-transform duration-1000 group-hover:scale-105"
                />
                <div className="absolute inset-x-0 top-1/4 bottom-0 bg-gradient-to-b from-transparent to-[#1c1b1a]/90"></div>
                
                <article className="absolute inset-0 flex flex-col justify-between p-8">
                  <div>
                    <span className="text-[#A8A5A0] text-xs font-bold tracking-widest uppercase">
                      THE PLATFORM
                    </span>
                    <div className="h-0.5 w-16 bg-gradient-to-r from-[#A8A5A0] to-purple-500 rounded-full mb-4"></div>
                    <div className="font-bold py-2 rounded-md uppercase inline-block bg-[#f7f1e8] text-xs px-3">
                      <p className="text-left text-[#1c1b1a] font-sans leading-normal font-bold">
                        THE OPERATING SYSTEM
                      </p>
                    </div>
                  </div>
                  
                  <div className="mt-auto pt-64 md:pt-0 pb-4">
                    <h2 className="text-left text-white font-sans leading-tight font-bold mb-4 text-[2.5rem] md:text-[3rem] lg:text-[4rem] tracking-tight">
                      HumanlyOS&reg;
                    </h2>
                    <p className="text-left text-white/90 font-sans leading-relaxed text-[1rem] md:text-[1.125rem] max-w-xl">
                      The AI-native operating system that transforms community management from fragmented services into an integrated, revenue-generating platform.
                    </p>
                  </div>
                </article>
              </div>
            </RevealOnScroll>
          </div>

          {/* Sidebar Features - Right Side */}
          <div className="hidden md:flex flex-col gap-6 w-full lg:w-[33%] pt-4 lg:pt-0">
            {features.map((feature, idx) => (
              <RevealOnScroll key={feature.id} delay={`delay-${Math.min((idx + 2) * 100, 700)}` as any} className="flex-1">
                <article className="flex h-full flex-col justify-center overflow-hidden rounded-lg p-6 lg:p-8 bg-white/80 backdrop-blur-sm border border-[#1c1b1a]/5 group hover:-translate-y-1 transition-transform duration-300 shadow-sm">
                  <div className="mb-6 text-[#3b82f6]">
                    <feature.icon className="w-8 h-8 md:w-10 md:h-10" />
                  </div>
                  <h2 className="text-left font-sans leading-tight font-bold mb-2 text-[1.25rem] text-[#1e2427]">
                    {feature.title}
                  </h2>
                  <p className="text-left font-sans text-[#4a4741] text-[0.95rem]">
                    {feature.description}
                  </p>
                </article>
              </RevealOnScroll>
            ))}
          </div>

          {/* Mobile Slider Component for Features */}
          <div className="md:hidden mt-4 pt-4 overflow-hidden w-full">
             <div className="flex overflow-x-auto snap-x snap-mandatory gap-x-6 pr-6 snap-always -mx-6 px-6 [&::-webkit-scrollbar]:hidden" style={{ scrollbarWidth: 'none' }}>
                {features.map((feature) => (
                  <article key={feature.id} className="flex-shrink-0 w-[75vw] snap-center flex flex-col justify-center overflow-hidden rounded-lg p-6 bg-white/80 border border-[#1c1b1a]/5 min-h-[200px]">
                    <div className="mb-4 text-[#3b82f6]">
                      <feature.icon className="w-8 h-8" />
                    </div>
                    <h2 className="text-left text-[#1e2427] font-sans leading-tight font-bold mb-2 text-[1.25rem]">
                      {feature.title}
                    </h2>
                    <p className="text-left font-sans text-[#4a4741] text-[0.95rem]">
                      {feature.description}
                    </p>
                  </article>
                ))}
             </div>
          </div>

        </div>
      </div>
    </section>
  );
};
