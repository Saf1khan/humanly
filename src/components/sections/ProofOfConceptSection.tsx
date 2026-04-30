"use client";

import { RevealOnScroll } from "../ui/RevealOnScroll";

export const ProofOfConceptSection = () => {
  return (
    <section className="relative w-full bg-transparent py-16 lg:py-24 overflow-hidden">
      {/* Background Gradients — exact match to DataRoom */}
      <div
        className="absolute pointer-events-none right-0 translate-x-1/3 top-1/3 -translate-y-1/2 w-[clamp(44rem,14.769rem+116.923vw,120rem)] h-[clamp(25rem,8.654rem+65.385vw,67.5rem)]"
        style={{ background: "radial-gradient(50% 50%, rgba(255, 182, 55, 0.08), rgba(255, 182, 55, 0.02) 50%, rgba(255, 182, 55, 0))" }}
      />
      <div
        className="absolute pointer-events-none left-0 -translate-x-1/2 top-1/3 -translate-y-1/4 w-[clamp(44rem,14.769rem+116.923vw,120rem)] h-[clamp(25rem,8.654rem+65.385vw,67.5rem)]"
        style={{ background: "radial-gradient(50% 50%, rgba(255, 182, 55, 0.08), rgba(255, 182, 55, 0.02) 50%, rgba(255, 182, 55, 0))" }}
      />
      <div className="max-w-[1440px] mx-auto px-6 md:px-12 lg:px-16 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20 items-center">
          
          {/* Text Content Block */}
          <div className="order-2 lg:order-1 flex flex-col pt-8 lg:py-12">
            <RevealOnScroll>
              <span className="block text-xs md:text-sm font-bold tracking-[0.2em] text-[#1C1B1A]/60 uppercase mb-2 md:mb-3">
                Proof of Concept
              </span>
              <div className="h-[1px] w-[176] bg-[linear-gradient(to_right,#6BCEFF,#0c007a,#AA3DAD,#FF6136,#FFE366)] rounded-full mb-2 md:mb-3"></div>
              <h2 className="text-[2rem] md:text-[2.5rem] lg:text-[3.5rem] text-left font-bold leading-tight text-sandstone-500 tracking-tight mb-6">
                $5M flagship investment.<br className="hidden md:block" />
                $100M projected value.
              </h2>
            </RevealOnScroll>

            <RevealOnScroll delay="delay-100">
              <p className="text-base md:text-[1.125rem] text-sandstone-500/80 leading-relaxed mb-8 max-w-[540px]">
                Our first community demonstrates the full model — from AI-driven site selection through integrated services and compounding returns.
              </p>
            </RevealOnScroll>

            <RevealOnScroll delay="delay-200">
              <div className="flex flex-col sm:flex-row items-start gap-4">
                <a 
                  href="#" 
                  className="rounded-full text-center inline-block transition bg-[#1C1B1A] text-white hover:bg-black py-4 px-10 whitespace-nowrap shadow-xl hover:shadow-2xl hover:-translate-y-1"
                >
                  <span className="items-center inline-flex gap-2 content-center justify-center font-medium">
                    View Investment Details
                  </span>
                </a>
              </div>
            </RevealOnScroll>
          </div>

          {/* Image Block */}
          <div className="order-1 lg:order-2 w-full">
            <RevealOnScroll delay="delay-300">
              <div className="relative overflow-hidden rounded-[2rem] aspect-square lg:aspect-[4/3] shadow-xl border border-white/20">
                <img 
                  alt="M.D. in a lab coat reviewing data" 
                  loading="lazy" 
                  decoding="async" 
                  className="object-cover absolute inset-0 w-full h-full transition-transform duration-1000 hover:scale-105" 
                  src="/images/pexels-ninobur-16808494.jpg" 
                />
              </div>
            </RevealOnScroll>
          </div>

        </div>
      </div>
    </section>
  );
};
