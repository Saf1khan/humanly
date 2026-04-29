"use client";

import { useRef, useState, useEffect } from "react";
import { RevealOnScroll } from "../ui/RevealOnScroll";
import { CardGlass } from "../ui/CardGlass";

const ArrowIcon = ({ direction }: { direction: "left" | "right" }) => (
  <svg aria-hidden="true" fill="none" height="12" viewBox="0 0 21 12" width="21" xmlns="http://www.w3.org/2000/svg">
    {direction === "left" ? (
      <path d="M0.469669 5.46967C0.176777 5.76256 0.176777 6.23744 0.469669 6.53033L5.24264 11.3033C5.53553 11.5962 6.01041 11.5962 6.3033 11.3033C6.59619 11.0104 6.59619 10.5355 6.3033 10.2426L2.06066 6L6.3033 1.75736C6.59619 1.46446 6.59619 0.989591 6.3033 0.696698C6.01041 0.403804 5.53553 0.403804 5.24264 0.696698L0.469669 5.46967ZM21 5.25L1 5.25L1 6.75L21 6.75L21 5.25Z" fill="currentColor" />
    ) : (
      <path d="M20.5303 6.53033C20.8232 6.23744 20.8232 5.76256 20.5303 5.46967L15.7574 0.696699C15.4645 0.403806 14.9896 0.403806 14.6967 0.696699C14.4038 0.989593 14.4038 1.46447 14.6967 1.75736L18.9393 6L14.6967 10.2426C14.4038 10.5355 14.4038 11.0104 14.6967 11.3033C14.9896 11.5962 15.4645 11.5962 15.7574 11.3033L20.5303 6.53033ZM0 6.75H20V5.25H0V6.75Z" fill="currentColor" />
    )}
  </svg>
);

const communitiesCards = [
  {
    id: "card-1",
    title: "Attainable Housing",
    description: "Quality homes at 80–120% AMI for workforce families.",
    bgImage: "https://ourahealth.imgix.net/blue-sky/home/take-walk-mask-mobile.jpg",
    overlayImage: "https://ourahealth.imgix.net/home-scenarios-walk-steps-ui-en.png"
  },
  {
    id: "card-2",
    title: "Integrated Services",
    description: "Healthcare, education, wellness — all on-site.",
  },
  {
    id: "card-3",
    title: "Financial Empowerment",
    description: "Credit building and savings from day one.",
  },
  {
    id: "card-4",
    title: "Community Connection",
    description: "Designed spaces that foster real relationships.",
  },
  {
    id: "card-5",
    title: "Economic Mobility",
    description: "Job training, co-working, and business incubation.",
  },
  {
    id: "card-6",
    title: "Health & Wellness",
    description: "Preventative care integrated into daily life.",
  },
];

export const CommunitiesSection = () => {
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
    <section className="relative w-full bg-transparent py-14 lg:py-24 overflow-hidden">
      {/* Background Gradients — exact match to DataRoom */}
      <div
        className="absolute pointer-events-none right-0 translate-x-1/3 top-1/4 -translate-y-1/2 w-[clamp(44rem,14.769rem+116.923vw,120rem)] h-[clamp(25rem,8.654rem+65.385vw,67.5rem)]"
        style={{ background: "radial-gradient(50% 50%, rgba(255, 182, 55, 0.08), rgba(255, 182, 55, 0.02) 50%, rgba(255, 182, 55, 0))" }}
      />
      <div
        className="absolute pointer-events-none left-0 -translate-x-1/2 top-1/2 -translate-y-1/3 w-[clamp(44rem,14.769rem+116.923vw,120rem)] h-[clamp(25rem,8.654rem+65.385vw,67.5rem)]"
        style={{ background: "radial-gradient(50% 50%, rgba(255, 182, 55, 0.08), rgba(255, 182, 55, 0.02) 50%, rgba(255, 182, 55, 0))" }}
      />
      <div className="max-w-[1440px] mx-auto px-6 md:px-12 lg:px-16 relative z-10">

        {/* Section Header */}
        <RevealOnScroll>
          <header className="grid grid-cols-1 gap-6 mb-10 lg:mb-14">
            <div className="flex flex-col gap-4 lg:gap-6">

              {/* Badge */}
              <div className="flex flex-col items-start gap-2">
                <span className="text-[#1C1B1A]/60 text-xs font-bold tracking-[0.2em] uppercase">
                  THE COMMUNITIES
                </span>
                <div className="h-0.5 w-[146px] bg-[linear-gradient(to_right,#6BCEFF,#0c007a,#AA3DAD,#FF6136,#FFE366)] rounded-full"></div>
              </div>

              <h2 className="text-4xl md:text-5xl lg:text-[4rem] font-serif leading-tight tracking-tight text-sandstone-500 max-w-3xl">
                Not just housing.<br />Launchpads for human potential.
              </h2>
            </div>
          </header>
        </RevealOnScroll>

        {/* Mobile Slider */}
        <div className="lg:hidden">
          <RevealOnScroll delay="delay-100">
            <div className="overflow-hidden">
              <div className="flex flex-col-reverse">
                <div className="relative mt-6 mr-6">
                  <div className="relative h-[1px] w-full overflow-hidden bg-gray-400" role="presentation">
                    <div className="absolute inset-0 h-[1px] origin-left bg-sandstone-500" />
                  </div>
                  <div className="flex justify-end gap-x-4 pt-6 pb-4">
                    <button
                      type="button"
                      aria-label="go to previous slide"
                      onClick={() => scrollTo("left")}
                      disabled={!canScrollLeft}
                      className="rounded-full px-3 py-4 bg-[#e6ded3] text-gray-500 disabled:opacity-40 transition-opacity hover:text-[#1e2427]"
                    >
                      <ArrowIcon direction="left" />
                    </button>
                    <button
                      type="button"
                      aria-label="go to next slide"
                      onClick={() => scrollTo("right")}
                      disabled={!canScrollRight}
                      className="rounded-full px-3 py-4 bg-[#e6ded3] text-gray-500 disabled:opacity-40 transition-opacity hover:text-[#1e2427]"
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
                  {communitiesCards.map((card) => (
                    <li key={card.id} className="snap-start shrink-0 h-auto">
                      <CardGlass
                        className="w-[65vw] md:w-[50vw] min-h-[260px]"
                        backgroundImage={card.bgImage}
                        overlayImage={card.overlayImage}
                      >
                        <div className="p-6">
                          <h3 className="text-left text-[#1C1B1A] font-sans leading-tight font-bold mb-2 text-[1.15rem] transition-colors duration-300 group-hover:text-white">
                            {card.title}
                          </h3>
                          <p className="text-left text-[#1C1B1A]/70 font-sans leading-relaxed font-medium text-base transition-colors duration-300 group-hover:text-white/90">
                            {card.description}
                          </p>
                        </div>
                      </CardGlass>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </RevealOnScroll>
        </div>

        {/* Desktop 3-column grid */}
        <div className="hidden grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 lg:grid ">
          {communitiesCards.map((card, idx) => (
            <RevealOnScroll key={card.id} delay={`delay-${(idx + 1) * 100}` as any}>
              <CardGlass
                className="h-full min-h-[260px]"
                backgroundImage={card.bgImage}
                overlayImage={card.overlayImage}
              >
                <div className="p-8">
                  <h3 className="text-left text-[#1C1B1A] font-sans leading-tight font-bold mb-3 text-2xl transition-colors duration-300 group-hover:text-white">
                    {card.title}
                  </h3>
                  <p className="text-left text-[#1C1B1A]/70 font-sans leading-relaxed font-medium text-lg transition-colors duration-300 group-hover:text-white/90">
                    {card.description}
                  </p>
                </div>
              </CardGlass>
            </RevealOnScroll>
          ))}
        </div>

      </div>
    </section>
  );
};
