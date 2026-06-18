"use client";

import { useState, useEffect } from "react";
import { RevealOnScroll } from "@/components/ui/RevealOnScroll";

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
  { name: "Outdoor Amphitheater", size: "10,000 SF", image: "/images/pexels-maxchen2k-18090276.jpg", swatch: "/images/pexels-maxchen2k-18090276.jpg" },
];

export const VillageCenterSection = () => {
  const [activeIndex, setActiveIndex] = useState(0);
  const [windowStart, setWindowStart] = useState(0);
  const [visibleSwatches, setVisibleSwatches] = useState(5);

  useEffect(() => {
    const mediaQuery = window.matchMedia("(max-width: 767px)");

    const updateVisibleSwatches = (e?: MediaQueryListEvent) => {
      const isMobile = e ? e.matches : mediaQuery.matches;
      setVisibleSwatches(isMobile ? 3 : 5);
    };

    updateVisibleSwatches();

    mediaQuery.addEventListener("change", updateVisibleSwatches);
    return () => mediaQuery.removeEventListener("change", updateVisibleSwatches);
  }, []);

  const goTo = (index: number) => {
    setActiveIndex(index);
    const ideal = index - Math.floor(visibleSwatches / 2);
    const maxStart = Math.max(0, carouselItems.length - visibleSwatches);
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
    }, 4500);
    return () => clearInterval(timer);
  }, [activeIndex, visibleSwatches]);

  useEffect(() => {
    const ideal = activeIndex - Math.floor(visibleSwatches / 2);
    const maxStart = Math.max(0, carouselItems.length - visibleSwatches);
    setWindowStart(Math.max(0, Math.min(ideal, maxStart)));
  }, [activeIndex, visibleSwatches]);

  const visibleItems = carouselItems.slice(
    windowStart,
    windowStart + visibleSwatches
  );

  return (
    <section className="relative w-full overflow-x-clip bg-transparent py-14 lg:py-24">
      <div
        className="absolute bottom-1/5 left-0 pointer-events-none h-[clamp(25rem,8.654rem+65.385vw,67.5rem)] w-[clamp(44rem,14.769rem+116.923vw,120rem)] translate-x-1/2 -translate-y-1/3"
        style={{
          background:
            "radial-gradient(50% 50%, rgba(var(--radial-gradient-color, 170, 61, 173), 0.12), rgba(var(--radial-gradient-color, 170, 61, 173), 0.09) 50%, rgba(var(--radial-gradient-color, 170, 61, 173), 0))",
        }}
      />
      <div className="relative z-10 mx-auto max-w-[1440px] px-6 md:px-12 lg:px-16">
        <div className="grid grid-cols-1 gap-y-12">
          <div className="flex flex-col gap-2 md:gap-3">
            <RevealOnScroll>
              <h2 className="text-left font-cormorant text-3xl font-normal leading-[40px] tracking-tight text-sandstone-500 md:text-5xl md:leading-[60px]">
                Village Center
              </h2>
            </RevealOnScroll>
            <RevealOnScroll delay="delay-100">
              <p className="font-albert text-base font-light leading-[28px] text-sandstone-500 md:text-lg md:leading-[30px]">
                15 Integrated facilities · 90,000+ SF of community space
              </p>
            </RevealOnScroll>
          </div>

          <RevealOnScroll delay="delay-200">
            <div className="relative h-[540px] w-full overflow-hidden rounded-2xl md:aspect-[3/2] md:h-auto lg:aspect-[2/1]">
              {carouselItems.map((item, index) => (
                <div
                  key={item.name}
                  className={`absolute inset-0 transition-all duration-[2000ms] ease-in-out ${activeIndex === index
                      ? "z-10 scale-105 opacity-100"
                      : "z-0 scale-100 opacity-0"
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

              <div className="absolute left-6 top-6 right-6 z-10 md:left-10 md:top-10 md:right-10">
                <div className="flex flex-col gap-2">
                  <p className="line-clamp-2 font-cormorant text-[28px] leading-[30px] font-medium text-white drop-shadow-lg md:text-4xl md:leading-none">
                    {carouselItems[activeIndex].name}
                  </p>

                  <span className="font-albert text-xl font-medium text-white drop-shadow-lg md:absolute md:right-0 md:top-0 md:text-2xl">
                    {carouselItems[activeIndex].size}
                  </span>
                </div>
              </div>

              <div className="absolute bottom-6 left-1/2 z-10 flex -translate-x-1/2 flex-col items-center gap-2 md:bottom-8">
                <div className="flex items-center gap-1.5 rounded-full bg-white/90 px-2.5 py-1.5 shadow-xl backdrop-blur-md">
                  <button
                    onClick={handlePrev}
                    aria-label="Previous"
                    className="flex h-7 w-7 items-center justify-center rounded-full text-sandstone-500 transition-all duration-200 hover:bg-slate-100"
                  >
                    <svg
                      width="13"
                      height="13"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                      strokeWidth={2.5}
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        d="M15 19l-7-7 7-7"
                      />
                    </svg>
                  </button>

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
                              <span
                                className={`box-border flex size-8 items-center justify-center rounded-full border-2 border-solid transition-all duration-300 ${isActive
                                    ? "scale-110 border-slate-800 shadow-md"
                                    : "border-transparent opacity-70 hover:opacity-100"
                                  }`}
                              >
                                <img
                                  src={item.swatch}
                                  alt={item.name}
                                  className="block size-6 rounded-full object-cover"
                                />
                              </span>
                            </span>

                            <span
                              className={`flex h-8 items-center overflow-hidden transition-all duration-500 ease-in-out ${isActive
                                  ? "max-w-[130px] opacity-100 pr-2"
                                  : "max-w-0 opacity-0 pr-0"
                                }`}
                            >
                              <span className="whitespace-nowrap font-albert text-xs font-medium text-sandstone-500 hidden sm:block">
                                {item.name}
                              </span>
                            </span>
                          </button>
                        </li>
                      );
                    })}
                  </ul>

                  <button
                    onClick={handleNext}
                    aria-label="Next"
                    className="flex h-7 w-7 items-center justify-center rounded-full text-sandstone-500 transition-all duration-200 hover:bg-slate-100"
                  >
                    <svg
                      width="13"
                      height="13"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                      strokeWidth={2.5}
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        d="M9 5l7 7-7 7"
                      />
                    </svg>
                  </button>
                </div>

                <p className="mb-1 font-albert text-xs font-bold tracking-widest text-white">
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