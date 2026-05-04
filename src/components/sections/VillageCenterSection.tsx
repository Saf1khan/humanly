"use client";

import { useState, useEffect } from "react";
import { RevealOnScroll } from "../ui/RevealOnScroll";

const carouselItems = [
  { name: "Primary Care Clinic", image: "/images/pexels-shkrabaanthony-5214992.jpg", swatch: "/images/pexels-shkrabaanthony-5214992.jpg" },
  { name: "Behavioral Health", image: "/images/pexels-silverkblack-23496452.jpg", swatch: "/images/pexels-silverkblack-23496452.jpg" },
  { name: "Dental Care", image: "/images/pexels-cedric-fauntleroy-4269934.jpg", swatch: "/images/pexels-cedric-fauntleroy-4269934.jpg" },
  { name: "Pharmacy", image: "/images/pexels-yuugen-rai-924575946-25242198.jpg", swatch: "/images/pexels-yuugen-rai-924575946-25242198.jpg" },
  { name: "Fitness Center", image: "/images/pexels-hiroom-17227606.jpg", swatch: "/images/pexels-hiroom-17227606.jpg" },
  { name: "Childcare Center", image: "/images/pexels-kseniachernaya-8535629.jpg", swatch: "/images/pexels-kseniachernaya-8535629.jpg" },
  { name: "After-School Programs", image: "/images/pexels-anastasia-shuraeva-8466021.jpg", swatch: "/images/pexels-anastasia-shuraeva-8466021.jpg" },
  { name: "Co-Working Space", image: "/images/pexels-enginakyurt-19996231.jpg", swatch: "/images/pexels-enginakyurt-19996231.jpg" },
  { name: "Community Kitchen", image: "/images/pexels-rdne-6647050.jpg", swatch: "/images/pexels-rdne-6647050.jpg" },
  { name: "Fresh Market / Grocery", image: "/images/pexels-matthew-baxter-1366354232-33975355.jpg", swatch: "/images/pexels-matthew-baxter-1366354232-33975355.jpg" },
  { name: "Restaurant / Café", image: "/images/pexels-tkirkgoz-19535595.jpg", swatch: "/images/pexels-tkirkgoz-19535595.jpg" },
  { name: "Event Space", image: "/images/pexels-cflaten-5767823.jpg", swatch: "/images/pexels-cflaten-5767823.jpg" },
  { name: "Maker Space", image: "/images/pexels-cottonbro-7484164.jpg", swatch: "/images/pexels-cottonbro-7484164.jpg" },
  { name: "Business Incubator", image: "/images/pexels-tima-miroshnichenko-6914062.jpg", swatch: "/images/pexels-tima-miroshnichenko-6914062.jpg" },
  { name: "Outdoor Amphitheater", image: "/images/pexels-maxchen2k-18090276.jpg", swatch: "/images/pexels-maxchen2k-18090276.jpg" }
];

const facilitiesData = [
  { name: "Primary Care Clinic", size: "8,000 SF", color: "bg-blue-500" },
  { name: "Behavioral Health", size: "4,000 SF", color: "bg-cyan-500" },
  { name: "Dental Care", size: "3,000 SF", color: "bg-purple-500" },
  { name: "Pharmacy", size: "3,500 SF", color: "bg-orange-500" },
  { name: "Fitness Center", size: "6,000 SF", color: "bg-yellow-500" },
  { name: "Childcare Center", size: "8,000 SF", color: "bg-green-500" },
  { name: "After-School Programs", size: "4,000 SF", color: "bg-blue-500" },
  { name: "Co-Working Space", size: "5,000 SF", color: "bg-cyan-500" },
  { name: "Community Kitchen", size: "3,500 SF", color: "bg-purple-500" },
  { name: "Fresh Market / Grocery", size: "12,000 SF", color: "bg-orange-500" },
  { name: "Restaurant / Café", size: "4,000 SF", color: "bg-yellow-500" },
  { name: "Event Space", size: "6,000 SF", color: "bg-green-500" },
  { name: "Maker Space", size: "4,000 SF", color: "bg-blue-500" },
  { name: "Business Incubator", size: "5,000 SF", color: "bg-cyan-500" },
  { name: "Outdoor Amphitheater", size: "10,000 SF", color: "bg-purple-500" },
];

const VISIBLE_SWATCHES = 5;

export const VillageCenterSection = () => {
  const [activeIndex, setActiveIndex] = useState(0);
  const [windowStart, setWindowStart] = useState(0);

  const goTo = (index: number) => {
    setActiveIndex(index);
    const ideal = index - Math.floor(VISIBLE_SWATCHES / 2);
    const maxStart = carouselItems.length - VISIBLE_SWATCHES;
    setWindowStart(Math.max(0, Math.min(ideal, maxStart)));
  };

  const shiftWindow = (dir: "prev" | "next") => {
    if (dir === "prev") {
      setWindowStart(Math.max(0, windowStart - 1));
    } else {
      setWindowStart(Math.min(carouselItems.length - VISIBLE_SWATCHES, windowStart + 1));
    }
  };

  useEffect(() => {
    const timer = setInterval(() => {
      const nextIndex = (activeIndex + 1) % carouselItems.length;
      goTo(nextIndex);
    }, 6500); // Perfectly balanced 6.5s interval
    return () => clearInterval(timer);
  }, [activeIndex]);

  const visibleItems = carouselItems.slice(windowStart, windowStart + VISIBLE_SWATCHES);
  const canGoPrev = windowStart > 0;
  const canGoNext = windowStart + VISIBLE_SWATCHES < carouselItems.length;

  return (
    <section 
      className="relative w-full py-14 lg:py-24 overflow-hidden"
    >
      {/* Background Gradients — exact match to DataRoom */}
      <div
        className="absolute pointer-events-none right-0 translate-x-1/3 top-1/4 -translate-y-1/2 w-[clamp(44rem,14.769rem+116.923vw,120rem)] h-[clamp(25rem,8.654rem+65.385vw,67.5rem)]"
        style={{ background: "radial-gradient(50% 50%, rgba(255, 182, 55, 0.08), rgba(255, 182, 55, 0.04) 50%, rgba(255, 182, 55, 0))" }}
      />
      <div
        className="absolute pointer-events-none right-0 translate-x-1/3 top-1/4 -translate-y-[-35%] w-[clamp(44rem,14.769rem+116.923vw,120rem)] h-[clamp(25rem,8.654rem+65.385vw,67.5rem)]"
        style={{ background: "radial-gradient(50% 50%, rgba(255, 182, 55, 0.08), rgba(255, 182, 55, 0.04) 50%, rgba(255, 182, 55, 0))" }}
      />
      <div
        className="absolute pointer-events-none left-0 -translate-x-1/2 top-1/2 -translate-y-1/4 w-[clamp(44rem,14.769rem+116.923vw,120rem)] h-[clamp(25rem,8.654rem+65.385vw,67.5rem)]"
        style={{ background: "radial-gradient(50% 50%, rgba(255, 182, 55, 0.08), rgba(255, 182, 55, 0.04) 50%, rgba(255, 182, 55, 0))" }}
      />
      <div className="max-w-[1440px] mx-auto px-6 md:px-12 lg:px-16 relative z-10">

        <div className="grid grid-cols-1 gap-y-12">

          {/* Heading */}
          <div className="flex flex-col gap-2 md:gap-3 mb-4">
            <RevealOnScroll>
              <h2 className="text-[2rem] tracking-tight md:text-[2.5rem] lg:text-[3.5rem] text-left leading-tight text-sandstone-500 font-bold">
                Village Center
              </h2>
            </RevealOnScroll>
            <RevealOnScroll delay="delay-100">
              <div className="flex flex-col items-start gap-3 mt-2">
                <p className="text-sandstone-500/80 text-base md:text-lg tracking-wide">
                  15 Integrated facilities · 90,000+ SF of community space
                </p>
                <div className="h-[1px] w-full bg-[linear-gradient(to_right,#6BCEFF,#0c007a,#AA3DAD,#FF6136,#FFE366)] rounded-full"></div>
              </div>
            </RevealOnScroll>
          </div>

          {/* Carousel */}
          <RevealOnScroll delay="delay-200">
            <div className="relative h-[540px] w-full overflow-hidden rounded-2xl md:aspect-[3/2] md:h-auto lg:aspect-[2/1]">

              {/* Crossfade layers — each image sits stacked, only the active one is visible */}
              {carouselItems.map((item, index) => (
                <div
                  key={item.name}
                  className={`absolute inset-0 transition-all duration-[2000ms] ease-in-out ${activeIndex === index ? "opacity-100 scale-105 z-10" : "opacity-0 scale-100 z-0"
                    }`}
                >
                  <img
                    src={item.image}
                    alt={item.name}
                    className="h-full w-full object-cover object-center"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/50 via-transparent to-transparent" />
                </div>
              ))}

              {/* Active facility label */}
              <div className="absolute bottom-24 md:bottom-28 left-6 md:left-10 z-10">
                <p className="text-white/70 text-xs font-semibold tracking-widest uppercase mb-1">
                  {activeIndex + 1} / {carouselItems.length}
                </p>
                <p className="text-white text-xl md:text-2xl font-bold drop-shadow-lg">
                  {carouselItems[activeIndex].name}
                </p>
              </div>

              {/* Compact navigation bar — 5 swatches + arrows */}
              <div className="absolute bottom-6 md:bottom-8 left-1/2 -translate-x-1/2 z-10 flex items-center gap-1.5 bg-white/90 backdrop-blur-md rounded-full px-2.5 py-1.5 shadow-xl">

                {/* Prev arrow */}
                <button
                  onClick={() => shiftWindow("prev")}
                  disabled={!canGoPrev}
                  aria-label="Previous"
                  className={`flex items-center justify-center w-7 h-7 rounded-full transition-all duration-200 ${canGoPrev ? "text-slate-700 hover:bg-slate-100" : "text-slate-300 cursor-default"
                    }`}
                >
                  <svg width="13" height="13" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2.5}>
                    <path strokeLinecap="round" strokeLinejoin="round" d="M15 19l-7-7 7-7" />
                  </svg>
                </button>

                {/* Visible swatch window */}
                <ul className="flex items-center gap-0.5">
                  {visibleItems.map((item) => {
                    const globalIndex = carouselItems.indexOf(item);
                    const isActive = activeIndex === globalIndex;
                    return (
                      <li key={item.name}>
                        <button
                          onClick={() => goTo(globalIndex)}
                          aria-label={`View ${item.name}`}
                          className="flex items-center"
                        >
                          <span className="flex size-10 items-center justify-center">
                            <span className={`box-border flex size-8 items-center justify-center rounded-full border-2 border-solid transition-all duration-300 ${isActive ? "border-slate-800 scale-110 shadow-md" : "border-transparent opacity-70 hover:opacity-100"
                              }`}>
                              <img
                                src={item.swatch}
                                alt={item.name}
                                className="block size-6 rounded-full object-cover"
                              />
                            </span>
                          </span>
                          {/* Expanding name label for the active item only */}
                          <span className={`flex items-center h-8 overflow-hidden transition-all duration-500 ease-in-out ${isActive ? "max-w-[130px] opacity-100 pr-2" : "max-w-0 opacity-0 pr-0"
                            }`}>
                            <span className="text-[11px] whitespace-nowrap text-slate-800 font-semibold">
                              {item.name}
                            </span>
                          </span>
                        </button>
                      </li>
                    );
                  })}
                </ul>

                {/* Next arrow */}
                <button
                  onClick={() => shiftWindow("next")}
                  disabled={!canGoNext}
                  aria-label="Next"
                  className={`flex items-center justify-center w-7 h-7 rounded-full transition-all duration-200 ${canGoNext ? "text-slate-700 hover:bg-slate-100" : "text-slate-300 cursor-default"
                    }`}
                >
                  <svg width="13" height="13" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2.5}>
                    <path strokeLinecap="round" strokeLinejoin="round" d="M9 5l7 7-7 7" />
                  </svg>
                </button>

              </div>
            </div>
          </RevealOnScroll>

          {/* Facilities Grid */}
          <RevealOnScroll delay="delay-300">
            <div className="mt-4 grid grid-cols-1 md:grid-cols-2 gap-3 md:gap-4 lg:gap-5">
              {facilitiesData.map((facility) => (
                <div
                  key={facility.name}
                  className="group flex items-center justify-between rounded-2xl bg-[#4A4741]/10 backdrop-blur-[32px] border border-[#4A4741]/10 p-4 transition-all duration-500 shadow-[0_8px_32px_rgba(0,0,0,0.05)] hover:shadow-[0_8px_32px_rgba(0,0,0,0.1)] hover:bg-[#4A4741]/10"
                >
                  <div className="flex items-center gap-4">
                    <div className={`h-2.5 w-2.5 rounded-full ${facility.color}`} />
                    <span className="font-medium text-sandstone-500 transition-colors group-hover:text-slate-900">
                      {facility.name}
                    </span>
                  </div>
                  <span className="text-sm font-semibold tracking-wide text-sandstone-500/80">
                    {facility.size}
                  </span>
                </div>
              ))}
            </div>
          </RevealOnScroll>

        </div>
      </div>
    </section>
  );
};