"use client";

import { RevealOnScroll } from "../ui/RevealOnScroll";

export const LandLeasingSection = () => {
  return (
    <section
      className="relative w-full py-14 lg:py-24 overflow-hidden"
    >
      {/* Background Gradients — exact match to DataRoom */}
      <div
        className="absolute pointer-events-none left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 w-[clamp(44rem,14.769rem+116.923vw,120rem)] h-[clamp(25rem,8.654rem+65.385vw,67.5rem)]"
        style={{ background: "radial-gradient(50% 50%, rgba(255, 182, 55, 0.08), rgba(255, 182, 55, 0.03) 50%, rgba(255, 182, 55, 0))" }}
      />
      <div className="max-w-[1440px] mx-auto px-6 md:px-12 lg:px-16 relative z-10">

        <div className="flex flex-col lg:flex-row items-center gap-14 lg:gap-20">

          {/* Left Column (Text Content) */}
          <div className="w-full lg:w-1/2 lg:pr-8 flex flex-col justify-center order-2 lg:order-1">
            <RevealOnScroll>
              <div className="flex flex-col items-start gap-4 mb-6">
                <span className="text-[#A8A5A0] text-xs font-normal tracking-widest uppercase">
                  LAND LEASING MODEL
                </span>
                <div className="h-[1px] w-[156px] bg-[linear-gradient(to_right,#6BCEFF,#0c007a,#AA3DAD,#FF6136,#FFE366)] rounded-full"></div>
                <h2 className="text-sandstone-500 text-[5rem] md:text-[7rem] lg:text-[9rem] font-medium leading-none tracking-tight">
                  ~70%
                </h2>
              </div>
            </RevealOnScroll>

            <RevealOnScroll delay="delay-100">
              <p className="text-left text-sandstone-500 font-normal text-xl leading-relaxed lg:text-2xl">
                of land retained through ground leases — creating long-term appreciation and community stability while reducing upfront capital requirements.
              </p>
            </RevealOnScroll>
          </div>

          {/* Right Column (Media Container) */}
          <div className="w-full lg:w-1/2 order-1 lg:order-2">
            <RevealOnScroll delay="delay-200">
              <div className="relative h-[70vh] max-h-[470px] w-full overflow-hidden rounded-lg md:aspect-3/2 md:h-auto md:max-h-[70vh] md:rounded-2xl lg:ml-auto lg:aspect-4/3">
                <video
                  autoPlay
                  loop
                  playsInline
                  muted
                  className="size-full object-cover object-center"
                >
                  <source src="/images/5031099-uhd_3840_2160_30fps.mp4" type="video/mp4" />
                </video>
              </div>
            </RevealOnScroll>
          </div>

        </div>
      </div>
    </section>
  );
};
