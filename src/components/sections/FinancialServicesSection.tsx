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
    image: "/images/pexels-anastasia-shuraeva-8466021.jpg"
  },
  {
    id: "card-2",
    title: "Savings Programs",
    description: "Automated savings with community-matched deposits.",
    image: "/images/pexels-cottonbro-7484164.jpg"
  },
  {
    id: "card-3",
    title: "Insurance Products",
    description: "Renters, health, and life insurance at group rates.",
    image: "/images/pexels-shkrabaanthony-5214992.jpg"
  },
  {
    id: "card-4",
    title: "Bill Pay",
    description: "Unified billing for rent, utilities, and services.",
    image: "/images/pexels-tima-miroshnichenko-6914062.jpg"
  },
  {
    id: "card-5",
    title: "Emergency Fund",
    description: "Community safety net for unexpected expenses.",
    image: "/images/pexels-rdne-6647050.jpg"
  },
  {
    id: "card-6",
    title: "Financial Coaching",
    description: "1:1 financial literacy and goal planning.",
    image: "/images/pexels-silverkblack-23496452.jpg"
  },
];

export const FinancialServicesSection = () => {
  const [activeIndex, setActiveIndex] = useState(0);
  const activeCard = financialCards[activeIndex];

  return (
    <section className="relative w-full bg-transparent py-14 lg:py-24">
      {/* Background Gradients */}
      <div
        className="absolute pointer-events-none right-0 translate-x-1/3 top-1/4 -translate-y-1/2 w-[clamp(44rem,14.769rem+116.923vw,120rem)] h-[clamp(25rem,8.654rem+65.385vw,67.5rem)]"
        style={{ background: "radial-gradient(50% 50%, rgba(255, 182, 55, 0.08), rgba(255, 182, 55, 0.02) 50%, rgba(255, 182, 55, 0))" }}
      />
      <div
        className="absolute pointer-events-none left-0 -translate-x-1/2 top-1/2 -translate-y-1/4 w-[clamp(44rem,14.769rem+116.923vw,120rem)] h-[clamp(25rem,8.654rem+65.385vw,67.5rem)]"
        style={{ background: "radial-gradient(50% 50%, rgba(255, 182, 55, 0.08), rgba(255, 182, 55, 0.02) 50%, rgba(255, 182, 55, 0))" }}
      />

      <div className="max-w-[1440px] mx-auto px-6 md:px-12 lg:px-16 relative z-10">

        {/* Section Header */}
        <RevealOnScroll>
          <header className="flex flex-col items-start gap-4 mb-10 lg:mb-14">
            <h2 className="text-[2rem] md:text-5xl font-bold text-sandstone-500 tracking-tight">
              Financial Services
            </h2>
            <div className="text-[#a8a5a0] text-lg lg:text-[1.25rem] relative">
              <span className="text-blue-600 relative inline-block mr-1">
                HumanlyPay™
                <div className="absolute -bottom-1.5 left-0 h-[1px] w-[108px] bg-[linear-gradient(to_right,#6BCEFF,#0c007a,#AA3DAD,#FF6136,#FFE366)] rounded-full"></div>
              </span>
              — embedded finance for residents
            </div>
          </header>
        </RevealOnScroll>

        {/* Gallery Carousel */}
        <div className="mt-12 flex flex-col  gap-10">

          {/* Main Display Area */}

          <div className="grid grid-cols-1 lg:grid-cols-3 gap-4 md:gap-8 items-center border border-[#4A4741]/15 shadow-[0_16px_40px_rgba(0,0,0,0.15)] bg-[#4A4741]/5 backdrop-blur-xl transition-opacity rounded-[2.5rem] overflow-hidden">

            {/* Main Image Container */}
            <div className="lg:col-span-2 relative aspect-video md:aspect-[16/9] lg:aspect-auto lg:h-[560px] rounded-3xl overflow-hidden">
              {financialCards.map((card, index) => (
                <div
                  key={card.id}
                  className={`absolute inset-0 transition-opacity duration-1000 ease-in-out ${index === activeIndex ? "opacity-100 z-10" : "opacity-0 z-0"
                    }`}
                >
                  <img
                    src={card.image}
                    alt={card.title}
                    className="w-full h-full object-cover transition-transform duration-[3000ms] ease-out group-hover:scale-105"
                  />
                </div>
              ))}
            </div>

            {/* Text Content */}
            <div className="flex flex-col justify-end p-2 lg:pb-10 lg:pr-10 h-full">
              <RevealOnScroll delay="delay-100">
                <h3 className="text-3xl md:text-4xl lg:text-5xl font-bold text-sandstone-500 leading-[1.1] transition-all duration-500 lg:mb-4">
                  {activeCard.title}
                </h3>
                <p className="text-lg md:text-xl text-[#1C1B1A]/70 leading-relaxed max-w-md font-medium">
                  {activeCard.description}
                </p>
              </RevealOnScroll>
            </div>

          </div>


          {/* Thumbnails Area */}
          <RevealOnScroll delay="delay-200">
            <div className="flex flex-wrap md:flex-nowrap justify-center gap-4 md:gap-6 px-4">
              {financialCards.map((card, index) => (
                <button
                  key={card.id}
                  onClick={() => setActiveIndex(index)}
                  className={`relative flex-shrink-0 w-20 h-20 sm:w-24 sm:h-24 md:w-32 md:h-32 rounded-2xl overflow-hidden transition-all duration-500 transform ${index === activeIndex
                    ? "ring-4 ring-blue-500 ring-offset-4 ring-offset-white scale-110 shadow-2xl z-20"
                    : "opacity-100 hover:grayscale-0 hover:opacity-100 hover:scale-105 z-10"
                    }`}
                  aria-label={`View ${card.title}`}
                >
                  <img
                    src={card.image}
                    alt={card.title}
                    className="w-full h-full object-cover"
                  />
                  {index === activeIndex && (
                    <div className="absolute inset-0 bg-blue-500/10 pointer-events-none" />
                  )}
                </button>
              ))}
            </div>
          </RevealOnScroll>

        </div>

      </div>
    </section>
  );
};