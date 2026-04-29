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
  },
  {
    id: "problem-2",
    dot: "bg-blue-400",
    title: "Affordability Crisis",
    description: "Workforce families priced out of quality housing in thriving communities.",
  },
  {
    id: "problem-3",
    dot: "bg-purple-400",
    title: "Disconnected Services",
    description: "Residents navigate dozens of providers with no unified access point.",
  },
  {
    id: "problem-4",
    dot: "bg-yellow-400",
    title: "No Wealth Building",
    description: "Traditional rentership extracts value with zero path to financial growth.",
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
    <section className="relative w-full bg-transparent pt-14 lg:py-20 overflow-hidden">
      {/* Background Gradients — exact match to DataRoom */}
      <div
        className="absolute pointer-events-none right-0 translate-x-1/3 top-1/3 -translate-y-1/2 w-[clamp(44rem,14.769rem+116.923vw,120rem)] h-[clamp(25rem,8.654rem+65.385vw,67.5rem)]"
        style={{ background: "radial-gradient(50% 50%, rgba(255, 182, 55, 0.10), rgba(255, 182, 55, 0.02) 50%, rgba(255, 182, 55, 0))" }}
      />
      <div
        className="absolute pointer-events-none left-1/5 -translate-x-1/3 top-2/3 -translate-y-1/2 w-[clamp(44rem,14.769rem+116.923vw,120rem)] h-[clamp(25rem,8.654rem+65.385vw,67.5rem)]"
        style={{ background: "radial-gradient(50% 50%, rgba(255, 182, 55, 0.10), rgba(255, 182, 55, 0.02) 50%, rgba(255, 182, 55, 0))" }}
      />
      <div className="max-w-7xl mx-auto px-6 md:px-12 lg:px-16 relative z-10">

        {/* Section Header */}
        <RevealOnScroll>
          <div className="mb-10 lg:mb-14">
            <p className="text-xs font-bold tracking-widest uppercase text-sandstone-500 mb-4">The Problem</p>
            <h2 className="text-4xl md:text-5xl lg:text-[3.5rem] font-serif leading-tight tracking-tight text-sandstone-500 max-w-3xl">
              Housing is broken.<br />Communities are fragmented.
            </h2>
          </div>
        </RevealOnScroll>

        {/* Mobile Slider */}
        <div className="lg:hidden">
          <RevealOnScroll delay="delay-100">
            <div className="overflow-hidden">
              <div className="flex flex-col-reverse">
                <div className="relative mt-6 mr-6">
                  <div className="relative h-[1px] w-full overflow-hidden bg-gray-300" role="presentation">
                    <div className="absolute inset-0 h-[1px] origin-left bg-sandstone-500" />
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
                      <div className="p-[1px] rounded-2xl bg-gradient-to-r from-[#4ade80]/40 to-[#a855f7]/40 shadow-sm">
                        <article className="flex h-full flex-col p-6 w-[75vw] md:w-[60vw] min-h-[140px] bg-white backdrop-blur-xl rounded-2xl">
                          <div className={`relative z-10 w-2.5 h-2.5 rounded-full ${card.dot}`} />
                          <div className="flex-1" />
                          <div className="relative z-10">
                            <h3 className="text-[#1C1B1A] font-sans font-semibold text-xl leading-tight mb-3">
                              {card.title}
                            </h3>
                            <p className="text-[#1C1B1A]/70 font-sans font-normal text-base leading-snug">
                              {card.description}
                            </p>
                          </div>
                        </article>
                      </div>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </RevealOnScroll>
        </div>

        <div className="hidden grid-cols-2 gap-4 lg:grid">
          {cards.map((card, idx) => (
            <RevealOnScroll key={card.id} delay={`delay-${(idx + 1) * 100}` as any}>
              <div className="p-[1px] rounded-2xl transition-all duration-500 group hover:-translate-y-1 shadow-md">
                <article className="flex flex-col p-8 min-h-[160px] bg-white/5 backdrop-blur-sm rounded-2xl">
                  <div className={`relative z-10 w-2.5 h-2.5 rounded-full ${card.dot}`} />
                  <div className="flex-1" />
                  <div className="relative z-10">
                    <h3 className="text-[#1C1B1A] font-sans font-semibold text-xl leading-tight mb-3 transition-colors">
                      {card.title}
                    </h3>
                    <p className="text-[#1C1B1A]/70 font-sans font-normal text-base leading-snug transition-colors">
                      {card.description}
                    </p>
                  </div>
                </article>
              </div>
            </RevealOnScroll>
          ))}
        </div>

      </div>
    </section>
  );
};