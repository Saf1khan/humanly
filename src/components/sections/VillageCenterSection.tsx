"use client";

import { useState, useEffect } from "react";
import { RevealOnScroll } from "../ui/RevealOnScroll";

const carouselItems = [
  { name: "Primary Care Clinic", size: "8,000 SF", image: "/images/pexels-shkrabaanthony-5214992.jpg", swatch: "/images/pexels-shkrabaanthony-5214992.jpg" },
  { name: "Behavioral Health", size: "4,000 SF", image: "/images/pexels-silverkblack-23496452.jpg", swatch: "/images/pexels-silverkblack-23496452.jpg" },
  { name: "Dental Care", size: "3,000 SF", image: "/images/pexels-cedric-fauntleroy-4269934.jpg", swatch: "/images/pexels-cedric-fauntleroy-4269934.jpg" },
  { name: "Pharmacy", size: "3,500 SF", image: "/images/pexels-yuugen-rai-924575946-25242198.jpg", swatch: "/images/pexels-yuugen-rai-924575946-25242198.jpg" },
  { name: "Fitness Center", size: "6,000 SF", image: "/images/pexels-hiroom-17227606.jpg", swatch: "/images/pexels-hiroom-17227606.jpg" },
  { name: "Childcare Center", size: "8,000 SF", image: "/images/pexels-kseniachernaya-8535629.jpg", swatch: "/images/pexels-kseniachernaya-8535629.jpg" },
  { name: "After-School Programs", size: "4,000 SF", image: "/images/pexels-anastasia-shuraeva-8466021.jpg", swatch: "/images/pexels-anastasia-shuraeva-8466021.jpg" },
  { name: "Co-Working Space", size: "5,000 SF", image: "/images/pexels-enginakyurt-19996231.jpg", swatch: "/images/pexels-enginakyurt-19996231.jpg" },
  { name: "Community Kitchen", size: "3,500 SF", image: "/images/pexels-rdne-6647050.jpg", swatch: "/images/pexels-rdne-6647050.jpg" },
  { name: "Fresh Market / Grocery", size: "12,000 SF", image: "/images/pexels-matthew-baxter-1366354232-33975355.jpg", swatch: "/images/pexels-matthew-baxter-1366354232-33975355.jpg" },
  { name: "Restaurant / Café", size: "4,000 SF", image: "/images/pexels-tkirkgoz-19535595.jpg", swatch: "/images/pexels-tkirkgoz-19535595.jpg" },
  { name: "Event Space", size: "6,000 SF", image: "/images/pexels-cflaten-5767823.jpg", swatch: "/images/pexels-cflaten-5767823.jpg" },
  { name: "Maker Space", size: "4,000 SF", image: "/images/pexels-cottonbro-7484164.jpg", swatch: "/images/pexels-cottonbro-7484164.jpg" },
  { name: "Business Incubator", size: "5,000 SF", image: "/images/pexels-tima-miroshnichenko-6914062.jpg", swatch: "/images/pexels-tima-miroshnichenko-6914062.jpg" },
  { name: "Outdoor Amphitheater", size: "10,000 SF", image: "/images/pexels-maxchen2k-18090276.jpg", swatch: "/images/pexels-maxchen2k-18090276.jpg" }
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

  const handlePrev = () => {
    goTo((activeIndex - 1 + carouselItems.length) % carouselItems.length);
  };

  const handleNext = () => {
    goTo((activeIndex + 1) % carouselItems.length);
  };

  useEffect(() => {
    const timer = setInterval(() => {
      handleNext();
    }, 4500); // Perfectly balanced 6.5s interval
    return () => clearInterval(timer);
  }, [activeIndex]);

  const visibleItems = carouselItems.slice(windowStart, windowStart + VISIBLE_SWATCHES);

  return (
    <section className="relative w-full bg-transparent py-14 lg:py-24 overflow-hidden">
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
          <div className="flex flex-col gap-2 md:gap-3">
            <RevealOnScroll>
              <h2 className="text-[2rem] tracking-tight md:text-[2.5rem] lg:text-[3.5rem] text-left leading-tight text-sandstone-500 font-bold">
                Village Center
              </h2>
            </RevealOnScroll>
            <RevealOnScroll delay="delay-100">
              <p className="text-sandstone-500/80 text-base md:text-lg tracking-wide font-normal">
                15 Integrated facilities · 90,000+ SF of community space
              </p>
            </RevealOnScroll>
          </div>

          {/* Gradient Line */}
          <RevealOnScroll delay="delay-100">
            <div className="h-[1px] w-full bg-[linear-gradient(to_right,#6BCEFF,#0c007a,#AA3DAD,#FF6136,#FFE366)] rounded-full mb-2"></div>
          </RevealOnScroll>

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
                  <div className="absolute inset-0 bg-gradient-to-b from-black/15 via-transparent to-black/15" />
                </div>
              ))}

              {/* Active facility label - Title (Left Top) */}
              <div className="absolute top-6 left-6 md:top-10 md:left-10 z-10">
                <p className="text-white text-2xl md:text-3xl font-medium drop-shadow-lg">
                  {carouselItems[activeIndex].name}
                </p>
              </div>

              {/* Active facility label - Size (Right Top) */}
              <div className="absolute top-6 right-6 md:top-10 md:right-10 z-10">
                <span className="text-white text-xl md:text-2xl font-medium drop-shadow-lg">
                  {carouselItems[activeIndex].size}
                </span>
              </div>

              {/* Compact navigation bar & Counter */}
              <div className="absolute bottom-6 md:bottom-8 left-1/2 -translate-x-1/2 z-10 flex flex-col items-center gap-2">
                {/* Compact navigation bar — 5 swatches + arrows */}
                <div className="flex items-center gap-1.5 bg-white/90 backdrop-blur-md rounded-full px-2.5 py-1.5 shadow-xl">

                  {/* Prev arrow */}
                  <button
                    onClick={handlePrev}
                    aria-label="Previous"
                    className="flex items-center justify-center w-7 h-7 rounded-full transition-all duration-200 text-slate-700 hover:bg-slate-100"
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
                              <span className="text-[11px] whitespace-nowrap text-slate-800 font-medium">
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
                    onClick={handleNext}
                    aria-label="Next"
                    className="flex items-center justify-center w-7 h-7 rounded-full transition-all duration-200 text-slate-700 hover:bg-slate-100"
                  >
                    <svg width="13" height="13" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2.5}>
                      <path strokeLinecap="round" strokeLinejoin="round" d="M9 5l7 7-7 7" />
                    </svg>
                  </button>

                </div>

                <p className="text-white/80 text-xs tracking-widest uppercase mb-1 drop-shadow- font-medium">
                  {activeIndex + 1} / {carouselItems.length}
                </p>
              </div>
            </div>
          </RevealOnScroll>
        </div>
      </div>
    </section>
  );
};