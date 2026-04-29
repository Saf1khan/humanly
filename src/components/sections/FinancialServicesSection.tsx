"use client";

import { useRef, useState, useEffect } from "react";
import { RevealOnScroll } from "../ui/RevealOnScroll";

const ArrowIcon = ({ direction }: { direction: "left" | "right" }) => (
  <svg aria-hidden="true" fill="none" height="12" viewBox="0 0 21 12" width="21" xmlns="http://www.w3.org/2000/svg">
    {direction === "left" ? (
      <path d="M0.469669 5.46967C0.176777 5.76256 0.176777 6.23744 0.469669 6.53033L5.24264 11.3033C5.53553 11.5962 6.01041 11.5962 6.3033 11.3033C6.59619 11.0104 6.59619 10.5355 6.3033 10.2426L2.06066 6L6.3033 1.75736C6.59619 1.46446 6.59619 0.989591 6.3033 0.696698C6.01041 0.403804 5.53553 0.403804 5.24264 0.696698L0.469669 5.46967ZM21 5.25L1 5.25L1 6.75L21 6.75L21 5.25Z" fill="currentColor" />
    ) : (
      <path d="M20.5303 6.53033C20.8232 6.23744 20.8232 5.76256 20.5303 5.46967L15.7574 0.696699C15.4645 0.403806 14.9896 0.403806 14.6967 0.696699C14.4038 0.989593 14.4038 1.46447 14.6967 1.75736L18.9393 6L14.6967 10.2426C14.4038 10.5355 14.4038 11.0104 14.6967 11.3033C14.9896 11.5962 15.4645 11.5962 15.7574 11.3033L20.5303 6.53033ZM0 6.75H20V5.25H0V6.75Z" fill="currentColor" />
    )}
  </svg>
);

const financialCards = [
  {
    id: "card-1",
    title: "Credit Building",
    description: "Rent reporting and credit coaching from move-in.",
  },
  {
    id: "card-2",
    title: "Savings Programs",
    description: "Automated savings with community-matched deposits.",
  },
  {
    id: "card-3",
    title: "Insurance Products",
    description: "Renters, health, and life insurance at group rates.",
  },
  {
    id: "card-4",
    title: "Bill Pay",
    description: "Unified billing for rent, utilities, and services.",
  },
  {
    id: "card-5",
    title: "Emergency Fund",
    description: "Community safety net for unexpected expenses.",
  },
  {
    id: "card-6",
    title: "Financial Coaching",
    description: "1:1 financial literacy and goal planning.",
  },
];

export const FinancialServicesSection = () => {
  const sliderRef = useRef<HTMLUListElement>(null);
  const [canScrollLeft, setCanScrollLeft] = useState(false);
  const [canScrollRight, setCanScrollRight] = useState(true);

  const updateScrollState = () => {
    const el = sliderRef.current;
    if (!el) return;
    setCanScrollLeft(el.scrollLeft > 0);
    setCanScrollRight(Math.ceil(el.scrollLeft + el.clientWidth) < el.scrollWidth);
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
    <section className="relative w-full bg-transparent py-14 lg:py-24">
      {/* Background Gradients — exact match to DataRoom */}
      <div
        className="absolute pointer-events-none right-0 translate-x-1/2 top-0 -translate-y-1/2 w-[clamp(44rem,14.769rem+116.923vw,120rem)] h-[clamp(25rem,8.654rem+65.385vw,67.5rem)]"
        style={{ background: "radial-gradient(50% 50%, rgba(105, 165, 255, 0.08), rgba(105, 165, 255, 0.02) 50%, rgba(105, 165, 255, 0))" }}
      />
      <div
        className="absolute pointer-events-none left-1/2 -translate-x-1/2 top-1/2 -translate-y-1/2 w-[clamp(44rem,14.769rem+116.923vw,120rem)] h-[clamp(25rem,8.654rem+65.385vw,67.5rem)]"
        style={{ background: "radial-gradient(50% 50%, rgba(105, 165, 255, 0.06), rgba(105, 165, 255, 0.02) 50%, rgba(105, 165, 255, 0))" }}
      />

      <div className="max-w-[1440px] mx-auto px-6 md:px-12 lg:px-16">

        {/* Section Header */}
        <RevealOnScroll>
          <header className="flex flex-col items-start gap-4 mb-10 lg:mb-14">
            <h2 className="text-[2rem] md:text-5xl font-sans font-bold text-[#1c1b1a] tracking-tight">
              Financial Services
            </h2>
            <div className="text-[#a8a5a0] text-lg lg:text-[1.25rem] font-sans relative">
              <span className="text-blue-600 relative inline-block mr-1">
                HumanlyPay™
                <div className="absolute -bottom-1.5 left-0 w-full h-[3px] bg-gradient-to-r from-blue-500 via-indigo-500 to-purple-500 rounded-full"></div>
              </span>
              — embedded finance for residents
            </div>
          </header>
        </RevealOnScroll>

        {/* Mobile Slider */}
        <div className="lg:hidden">
          <RevealOnScroll delay="delay-100">
            <div className="overflow-hidden">
              <div className="flex flex-col-reverse">
                <div className="relative mt-6 mr-6">
                  <div className="relative h-[1px] w-full overflow-hidden bg-black/10" role="presentation">
                    <div className="absolute inset-0 h-[1px] origin-left bg-black/40" />
                  </div>
                  <div className="flex justify-end gap-x-4 pt-6 pb-4">
                    <button
                      type="button"
                      aria-label="go to previous slide"
                      onClick={() => scrollTo("left")}
                      disabled={!canScrollLeft}
                      className="rounded-full px-3 py-4 bg-[#f7f1e8] border border-[#1c1b1a]/10 text-[#1c1b1a]/50 disabled:opacity-30 transition-all hover:bg-white hover:text-black shadow-sm"
                    >
                      <ArrowIcon direction="left" />
                    </button>
                    <button
                      type="button"
                      aria-label="go to next slide"
                      onClick={() => scrollTo("right")}
                      disabled={!canScrollRight}
                      className="rounded-full px-3 py-4 bg-[#f7f1e8] border border-[#1c1b1a]/10 text-[#1c1b1a]/50 disabled:opacity-30 transition-all hover:bg-white hover:text-black shadow-sm"
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
                  {financialCards.map((card) => (
                    <li key={card.id} className="snap-start shrink-0 h-auto">
                      <article className="flex h-full flex-col justify-center overflow-hidden rounded-[1rem] p-8 w-[75vw] bg-white border border-[#1c1b1a]/5 md:w-[60vw] lg:w-full min-h-[160px] shadow-sm">
                        <h3 className="text-left text-[#1c1b1a] font-sans leading-tight font-bold mb-3 text-[1.125rem]">
                          {card.title}
                        </h3>
                        <p className="text-left text-[#4a4741] font-sans leading-relaxed text-[0.95rem]">
                          {card.description}
                        </p>
                      </article>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </RevealOnScroll>
        </div>

        {/* Desktop 3-column grid */}
        <div className="hidden lg:grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {financialCards.map((card, idx) => (
            <RevealOnScroll key={card.id} delay={`delay-${(idx % 3 + 1) * 100}` as any}>
            <article className="flex flex-col justify-center overflow-hidden rounded-[1.25rem] p-8 bg-white/80 backdrop-blur-sm border border-[#1c1b1a]/5 min-h-[160px] transition-all duration-300 hover:bg-white hover:border-[#1c1b1a]/10 hover:-translate-y-1 hover:shadow-xl group">
              <h3 className="text-left text-[#1c1b1a] font-sans leading-tight font-bold mb-3 text-[1.125rem] group-hover:text-blue-600 transition-colors">
                {card.title}
              </h3>
              <p className="text-left text-[#4a4741] font-sans leading-relaxed text-[0.95rem] pr-4">
                  {card.description}
                </p>
              </article>
            </RevealOnScroll>
          ))}
        </div>

      </div>
    </section>
  );
};
