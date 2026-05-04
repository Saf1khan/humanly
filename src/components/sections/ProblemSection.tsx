"use client";

import { useRef, useState, useEffect } from "react";

const ArrowIcon = ({ direction }: { direction: "left" | "right" }) => (
  <svg aria-hidden="true" fill="none" height="12" viewBox="0 0 21 12" width="21" xmlns="http://www.w3.org/2000/svg">
    {direction === "left" ? (
      <path d="M0.469669 5.46967C0.176777 5.76256 0.176777 6.23744 0.469669 6.53033L5.24264 11.3033C5.53553 11.5962 6.01041 11.5962 6.3033 11.3033C6.59619 11.0104 6.59619 10.5355 6.3033 10.2426L2.06066 6L6.3033 1.75736C6.59619 1.46446 6.59619 0.989591 6.3033 0.696698C6.01041 0.403804 5.53553 0.403804 5.24264 0.696698L0.469669 5.46967ZM21 5.25L1 5.25L1 6.75L21 6.75L21 5.25Z" fill="currentColor" />
    ) : (
      <path d="M20.5303 6.53033C20.8232 6.23744 20.8232 5.76256 20.5303 5.46967L15.7574 0.696699C15.4645 0.403806 14.9896 0.403806 14.6967 0.696699C14.4038 0.989593 14.4038 1.46447 14.6967 1.75736L18.9393 6L14.6967 10.2426C14.4038 10.5355 14.4038 11.0104 14.6967 11.3033C14.9896 11.5962 15.4645 11.5962 15.7574 11.3033L20.5303 6.53033ZM0 6.75H20V5.25H0V6.75Z" fill="currentColor" />
    )}
  </svg>
);

const cards = [
  {
    id: "problem-1",
    dot: "bg-orange-400",
    title: "Fragmented Development",
    description: "Housing, services, and technology developed in silos with no integration.",
    image: "https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?q=80&w=800&auto=format&fit=crop"
  },
  {
    id: "problem-2",
    dot: "bg-blue-400",
    title: "Affordability Crisis",
    description: "Workforce families priced out of quality housing in thriving communities.",
    image: "https://images.unsplash.com/photo-1560518883-ce09059eeffa?q=80&w=800&auto=format&fit=crop"
  },
  {
    id: "problem-3",
    dot: "bg-purple-400",
    title: "Disconnected Services",
    description: "Residents navigate dozens of providers with no unified access point.",
    image: "https://images.unsplash.com/photo-1517245386807-bb43f82c33c4?q=80&w=800&auto=format&fit=crop"
  },
  {
    id: "problem-4",
    dot: "bg-yellow-400",
    title: "No Wealth Building",
    description: "Traditional rentership extracts value with zero path to financial growth.",
    image: "https://images.unsplash.com/photo-1554224155-8d04cb21cd6c?q=80&w=800&auto=format&fit=crop"
  },
];

import { RevealOnScroll } from "../ui/RevealOnScroll";
import { CardGlass } from "../ui/CardGlass";

export const ProblemSection = () => {
  const sliderRef = useRef<HTMLUListElement>(null);
  const [canScrollLeft, setCanScrollLeft] = useState(false);
  const [canScrollRight, setCanScrollRight] = useState(true);

  const updateScrollState = () => {
    const el = sliderRef.current;
    if (!el) return;
    setCanScrollLeft(el.scrollLeft > 0);
    setCanScrollRight(el.scrollLeft + el.clientWidth < el.scrollWidth - 1);
  };

  useEffect(() => {
    const el = sliderRef.current;
    if (!el) return;
    el.addEventListener("scroll", updateScrollState);
    updateScrollState();
    return () => el.removeEventListener("scroll", updateScrollState);
  }, []);

  const scrollTo = (direction: "left" | "right") => {
    const el = sliderRef.current;
    if (!el) return;
    const itemWidth = el.clientWidth * 0.75 + 24;
    el.scrollBy({ left: direction === "left" ? -itemWidth : itemWidth, behavior: "smooth" });
  };

  return (
    <section 
      className="gridContainerV3 relative w-full pt-14 lg:py-20 overflow-hidden"
    >
      {/* Background Gradients — exact match to DataRoom */}
      <div
        className="absolute pointer-events-none right-0 translate-x-1/3 top-1/3 -translate-y-1/2 w-[clamp(44rem,14.769rem+116.923vw,120rem)] h-[clamp(25rem,8.654rem+65.385vw,67.5rem)]"
        style={{ background: "radial-gradient(50% 50%, rgba(255, 182, 55, 0.08), rgba(255, 182, 55, 0.02) 50%, rgba(255, 182, 55, 0))" }}
      />
      <div
        className="absolute pointer-events-none left-1/5 -translate-x-1/3 top-2/3 -translate-y-1/2 w-[clamp(44rem,14.769rem+116.923vw,120rem)] h-[clamp(25rem,8.654rem+65.385vw,67.5rem)]"
        style={{ background: "radial-gradient(50% 50%, rgba(255, 182, 55, 0.08), rgba(255, 182, 55, 0.02) 50%, rgba(255, 182, 55, 0))" }}
      />

      {/* Section Header */}
      <div className="col-start-main col-end-main relative z-10 pl-6 md:pl-16 lg:pl-24 xl:pl-32">
        <RevealOnScroll>
          <div className="mb-10 lg:mb-14">
            <p className="text-xs font-bold tracking-widest uppercase text-sandstone-500 mb-3">The Problem</p>
            <div className="h-[1px] w-[96px] bg-[linear-gradient(to_right,#6BCEFF,#0c007a,#AA3DAD,#FF6136,#FFE366)] rounded-full mb-3"></div>
            <h2 className="text-4xl md:text-5xl lg:text-[3.5rem] leading-tight tracking-tight text-sandstone-500 max-w-3xl">
              Housing is broken.<br />Communities are fragmented.
            </h2>
          </div>
        </RevealOnScroll>
      </div>
      {/* Main Slider */}
      <div className="col-start-main col-end-full relative z-10 pl-6 md:pl-16 lg:pl-24 xl:pl-32">
        <RevealOnScroll delay="delay-100">
          <div className="overflow-hidden">
            <div className="flex flex-col-reverse">
              <div className="relative mr-6 max-w-[1312px]">
                  <div className="relative h-[1px] w-full overflow-hidden bg-gray-200" role="presentation">
                    <div className="absolute inset-0 h-[1px] origin-left bg-black/10" />
                  </div>
                  <div className="flex justify-end gap-x-4 pt-6 pb-4">
                    <button
                      type="button"
                      aria-label="go to previous slide"
                      onClick={() => scrollTo("left")}
                      disabled={!canScrollLeft}
                      className="rounded-full px-3 py-4 bg-sandstone-200 text-gray-400 disabled:opacity-40 transition-opacity hover:text-sandstone-500"
                    >
                      <ArrowIcon direction="left" />
                    </button>
                    <button
                      type="button"
                      aria-label="go to next slide"
                      onClick={() => scrollTo("right")}
                      disabled={!canScrollRight}
                      className="rounded-full px-3 py-4 bg-sandstone-200 text-gray-400 disabled:opacity-40 transition-opacity hover:text-sandstone-500"
                    >
                      <ArrowIcon direction="right" />
                    </button>
                  </div>
                </div>

                <ul
                  ref={sliderRef}
                  className="no-scrollbar flex snap-x snap-mandatory snap-always items-stretch overflow-x-auto gap-x-6 pr-6"
                  tabIndex={0}
                >
                  {cards.map((card) => (
                    <li key={card.id} className="snap-start shrink-0">
                      <div aria-label={card.title} className="motion-safe:transition-all motion-safe:duration-500 motion-safe:ease-in-out h-[388px] w-[80vw] max-w-[1440px] pb-8 md:h-[658px] md:w-[493px] group cursor-pointer">
                        <div className="h-full w-full overflow-hidden rounded-xl">
                          <div className="grid h-full grid-cols-4 grid-rows-4 gap-4">
                            <div className="col-start-1 col-end-5 row-start-1 row-end-5 relative">
                              <div style={{ height: "110%", position: "relative", transform: "translateY(-5.41763%)" }} className="transition-transform duration-700 group-hover:scale-105">
                                <img alt={card.title} src={card.image} className="object-cover absolute w-full h-full left-0 top-0 right-0 bottom-0" draggable="false" loading="lazy" />
                              </div>
                            </div>
                            <div className="col-start-1 col-end-4 row-start-1 row-end-2 pt-6 pl-6">
                              <div className="relative inline-flex items-center justify-center overflow-hidden px-4 py-2 md:px-5 md:py-2.5 rounded-full border border-white/30 bg-white/20 backdrop-blur-lg shadow-sm">
                                <span className="text-sm md:text-base text-left text-white font-sans leading-normal font-medium relative tracking-wide drop-shadow-sm">{card.title}</span>
                              </div>
                            </div>
                            <div className="col-start-1 md:col-start-1 lg:col-start-1 col-end-5 md:col-end-5 lg:col-end-4 row-start-4 row-end-5 relative self-end px-6 pb-6 md:pb-8 md:pr-0">
                              <h3 className="text-xl md:text-2xl lg:text-3xl text-left text-white font-sans leading-tight font-medium">{card.description}</h3>
                            </div>
                          </div>
                        </div>
                      </div>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </RevealOnScroll>
        </div>
    </section>
  );
};