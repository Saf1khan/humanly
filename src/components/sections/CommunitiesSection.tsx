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
    image: "/images/pexels-anastasia-shuraeva-8466021.jpg"
  },
  {
    id: "card-2",
    title: "Integrated Services",
    description: "Healthcare, education, wellness — all on-site.",
    image: "/images/pexels-cottonbro-7484164.jpg"
  },
  {
    id: "card-3",
    title: "Financial Empowerment",
    description: "Credit building and savings from day one.",
    image: "/images/pexels-shkrabaanthony-5214992.jpg"
  },
  {
    id: "card-4",
    title: "Community Connection",
    description: "Designed spaces that foster real relationships.",
    image: "/images/pexels-tima-miroshnichenko-6914062.jpg"
  },
  {
    id: "card-5",
    title: "Economic Mobility",
    description: "Job training, co-working, and business incubation.",
    image: "/images/pexels-rdne-6647050.jpg"
  },
  {
    id: "card-6",
    title: "Health & Wellness",
    description: "Preventative care integrated into daily life.",
    image: "/images/pexels-silverkblack-23496452.jpg"
  },
];

export const CommunitiesSection = () => {
  const [activeIndex, setActiveIndex] = useState(0);
  const hoverTimeoutRef = useRef<NodeJS.Timeout | null>(null);

  const next = () => {
    setActiveIndex((current) => (current + 1) % communitiesCards.length);
  };

  const prev = () => {
    setActiveIndex((current) => (current - 1 + communitiesCards.length) % communitiesCards.length);
  };

  const handleMouseEnter = (index: number) => {
    if (hoverTimeoutRef.current) clearTimeout(hoverTimeoutRef.current);

    hoverTimeoutRef.current = setTimeout(() => {
      let relativeOffset = index - activeIndex;
      const length = communitiesCards.length;
      if (relativeOffset > length / 2) relativeOffset -= length;
      if (relativeOffset < -length / 2) relativeOffset += length;

      if (relativeOffset === -1) prev();
      else if (relativeOffset === 1) next();
    }, 1000); // Increased to 500ms for more deliberate navigation
  };

  const handleMouseLeave = () => {
    if (hoverTimeoutRef.current) {
      clearTimeout(hoverTimeoutRef.current);
      hoverTimeoutRef.current = null;
    }
  };

  // calculate relative position for 3D effect
  const getCardStyle = (index: number) => {
    const offset = index - activeIndex;
    const length = communitiesCards.length;

    // Normalize offset for wrapping
    let relativeOffset = offset;
    if (relativeOffset > length / 2) relativeOffset -= length;
    if (relativeOffset < -length / 2) relativeOffset += length;

    if (relativeOffset === 0) {
      return "z-30 scale-100 opacity-100 translate-x-0 pointer-events-auto shadow-2xl";
    } else if (relativeOffset === -1) {
      return "z-20 scale-[0.85] opacity-60 -translate-x-[60%] md:-translate-x-[55%] pointer-events-auto cursor-pointer shadow-lg";
    } else if (relativeOffset === 1) {
      return "z-20 scale-[0.85] opacity-60 translate-x-[60%] md:translate-x-[55%] pointer-events-auto cursor-pointer shadow-lg";
    } else {
      return "z-10 scale-75 opacity-0 pointer-events-none translate-x-0";
    }
  };

  return (
    <section
      className="relative w-full bg-transparent py-14 lg:py-24 overflow-hidden"
      style={{ fontFamily: "'Neue Haas Grotesk', sans-serif" }}
    >
      {/* Background Gradients */}
      <div
        className="absolute pointer-events-none right-0 translate-x-1/3 top-1/4 -translate-y-1/2 w-[clamp(44rem,14.769rem+116.923vw,120rem)] h-[clamp(25rem,8.654rem+65.385vw,67.5rem)]"
        style={{ background: "radial-gradient(50% 50%, rgba(255, 182, 55, 0.08), rgba(255, 182, 55, 0.02) 50%, rgba(255, 182, 55, 0))" }}
      />
      <div
        className="absolute pointer-events-none left-0 -translate-x-1/2 top-1/2 -translate-y-1/3 w-[clamp(44rem,14.769rem+116.923vw,120rem)] h-[clamp(25rem,8.654rem+65.385vw,67.5rem)]"
        style={{ background: "radial-gradient(50% 50%, rgba(255, 182, 55, 0.08), rgba(255, 182, 55, 0.02) 50%, rgba(255, 182, 55, 0))" }}
      />
      <div className="max-w-[1440px] mx-auto px-6 md:px-12 lg:px-16 relative z-10">

        {/* Section Header - Centered for more balance */}
        <RevealOnScroll>
          <header className="flex flex-col items-center text-center gap-6 mb-16 lg:mb-20">
            <div className="flex flex-col items-center gap-4 lg:gap-6">
              {/* Badge */}
              <span className="text-[#1C1B1A]/60 text-xs font-bold tracking-[0.2em] uppercase">
                THE COMMUNITIES
              </span>

              <h2 className="text-4xl md:text-5xl lg:text-[4.5rem] leading-tight tracking-tight text-sandstone-500 max-w-5xl">
                Not just housing.<br />Launchpads for human potential.
              </h2>
              <div className="h-[1.5px] w-full max-w-[600px] bg-[linear-gradient(to_right,#6BCEFF,#0c007a,#AA3DAD,#FF6136,#FFE366)] rounded-full"></div>
            </div>
          </header>
        </RevealOnScroll>

        {/* 3D Carousel - Increased height for larger cards */}
        <RevealOnScroll delay="delay-100">
          <div className="relative w-full max-w-7xl mx-auto mt-12 mb-12 h-[550px] md:h-[650px] flex items-center justify-center">

            {/* Left Nav Arrow */}
            <button
              onClick={prev}
              className="absolute left-0 md:left-4 lg:left-0 z-40 p-5 rounded-full bg-[#e6ded3]/80 backdrop-blur-md text-gray-500 shadow-[0_4px_24px_rgba(0,0,0,0.1)] hover:bg-white hover:text-[#1e2427] transition-all -translate-x-4 md:-translate-x-1/2"
              aria-label="Previous slide"
            >
              <ArrowIcon direction="left" />
            </button>

            {/* Cards Container */}
            <div className="relative w-full h-full flex items-center justify-center perspective-[1200px]">
              {communitiesCards.map((card, index) => {
                const className = getCardStyle(index);
                // Handle clicking on adjacent cards to navigate
                const handleClick = () => {
                  handleMouseLeave(); // Clear timeout on click
                  let relativeOffset = index - activeIndex;
                  const length = communitiesCards.length;
                  if (relativeOffset > length / 2) relativeOffset -= length;
                  if (relativeOffset < -length / 2) relativeOffset += length;

                  if (relativeOffset === -1) prev();
                  else if (relativeOffset === 1) next();
                };

                return (
                  <div
                    key={card.id}
                    className={`absolute w-[85vw] sm:w-[70vw] md:w-[480px] lg:w-[550px] h-[480px] md:h-[580px] rounded-[2.5rem] transition-all duration-700 ease-[cubic-bezier(0.25,1,0.5,1)] origin-center ${className}`}
                    onClick={handleClick}
                    onMouseEnter={() => handleMouseEnter(index)}
                    onMouseLeave={handleMouseLeave}
                  >
                    <div className="bg-transparent rounded-[2.5rem] w-full h-full flex flex-col overflow-hidden transition-all duration-500 relative group shadow-[0_12px_48px_rgba(0,0,0,0.08)] hover:shadow-[0_12px_48px_rgba(0,0,0,0.15)]">
                      {/* Background Image */}
                      <div
                        className="absolute inset-0 z-0 bg-cover bg-center transition-transform duration-1000 group-hover:scale-110"
                        style={{ backgroundImage: `url('${card.image}')` }}
                      >
                        {/* Gradient Overlay */}
                        <div className="absolute inset-0 bg-gradient-to-t from-black/30 via-black/10 to-transparent"></div>
                      </div>

                      <div className="relative z-10 p-10 md:p-14 flex flex-col justify-end h-full transition-transform duration-500 group-hover:translate-y-[-8px]">
                        <h3 className="text-left text-white leading-tight font-bold mb-5 text-3xl md:text-4xl transition-colors duration-300">
                          {card.title}
                        </h3>
                        <p className="text-left text-white/90 leading-relaxed font-medium text-lg md:text-xl transition-colors duration-300">
                          {card.description}
                        </p>
                      </div>
                    </div>
                  </div>
                );
              })}
            </div>

            {/* Right Nav Arrow */}
            <button
              onClick={next}
              className="absolute right-0 md:right-4 lg:right-0 z-40 p-5 rounded-full bg-[#e6ded3]/80 backdrop-blur-md text-gray-500 shadow-[0_4px_24px_rgba(0,0,0,0.1)] hover:bg-white hover:text-[#1e2427] transition-all translate-x-4 md:translate-x-1/2"
              aria-label="Next slide"
            >
              <ArrowIcon direction="right" />
            </button>

          </div>

          {/* Pagination Indicators */}
          <div className="flex justify-center items-center gap-3 mt-6">
            {communitiesCards.map((_, index) => (
              <button
                key={index}
                onClick={() => {
                  handleMouseLeave();
                  setActiveIndex(index);
                }}
                aria-label={`Go to slide ${index + 1}`}
                className={`h-2.5 rounded-full transition-all duration-500 ease-[cubic-bezier(0.25,1,0.5,1)] ${index === activeIndex
                  ? "w-10 bg-[#1e2427] shadow-sm"
                  : "w-2.5 bg-[#1e2427]/30 hover:bg-[#1e2427]/50"
                  }`}
              />
            ))}
          </div>
        </RevealOnScroll>

      </div>
    </section>
  );
};
