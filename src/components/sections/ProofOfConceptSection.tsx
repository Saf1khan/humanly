"use client";

import { RevealOnScroll } from "../ui/RevealOnScroll";

export const ProofOfConceptSection = () => {
  return (
    <section
      className="relative w-full py-16 lg:py-24 overflow-visible"
    >
      <div className="max-w-[1440px] mx-auto px-6 md:px-12 lg:px-16 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20 items-center">

          {/* Text Content Block */}
          <div className="w-[640px] flex flex-col pt-8 lg:py-12">
            <RevealOnScroll>
              <span className="block text-xs md:text-sm font-albert font-medium tracking-[0.2em] text-[#1C1B1A]/60 uppercase mb-2 md:mb-3">
                Proof of Concept
              </span>
              <div className="h-[1px] w-[188px] bg-[linear-gradient(to_right,#6BCEFF,#0c007a,#AA3DAD,#FF6136,#FFE366)] rounded-full mb-2 md:mb-3"></div>
              <h2 className="text-2xl md:text-5xl text-left font-bodoni font-bold leading-tight text-sandstone-500 tracking-wide mb-2">
                <span className="font-albert">$5M</span> Flagship Investment.</h2>
                <h2 className="text-2xl md:text-5xl text-left font-bodoni font-bold leading-tight text-sandstone-500 tracking-wide mb-6">
                <span className="font-albert">$100M</span> Projected Value.
              </h2>
            </RevealOnScroll>

            <RevealOnScroll delay="delay-100">
              <p className="text-base md:text-lg font-albert text-sandstone-500/80 font-normal leading-relaxed mb-8 max-w-[540px]">
                Our first community demonstrates the full model — from AI-driven site selection through integrated services and compounding returns.
              </p>
            </RevealOnScroll>

            <RevealOnScroll delay="delay-200">
              <div className="flex flex-col sm:flex-row items-start gap-4">
                <a
                  href="#"
                  className="rounded-full text-center inline-block transition bg-[#1C1B1A] text-white hover:bg-black py-4 px-10 whitespace-nowrap shadow-xl hover:shadow-2xl hover:-translate-y-1"
                >
                  <span className="items-center text-sm md:text-base inline-flex gap-2 content-center justify-center font-albert font-medium">
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
                  src="/images/AdobeStock_1011273017.jpeg"
                />
              </div>
            </RevealOnScroll>
          </div>

        </div>
      </div>
    </section>
  );
};
