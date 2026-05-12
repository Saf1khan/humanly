"use client";

import { useRef, useState, useEffect } from "react";
import Image from "next/image";
import { motion } from "framer-motion";

const developmentTeam = [
  {
    id: "jeff",
    name: "Jeff Wagner",
    title: "EVP Development",
    srcFallback: "/images/asset 39.png",
    objectPosition: "75% 5%",
  },
  {
    id: "josh",
    name: "Josh Kroll",
    title: "Director of Development",
    srcFallback: "/images/asset 40.png",
    objectPosition: "35% 5%",
  },
  {
    id: "mitch",
    name: "Mitch Gonzalez",
    title: "Director of Capital Markets",
    srcFallback: "/images/asset 41.png",
    objectPosition: "35% 5%",
  },
  {
    id: "janine",
    name: "Janine Meier",
    title: "Chief of Staff",
    srcFallback: "/images/asset 42.png",
    objectPosition: "50% 5%",
  }
];

export const DevTeamGrid = () => {
  const scrollRef = useRef<HTMLDivElement>(null);
  const [activeIdx, setActiveIdx] = useState<number>(-1);
  const [scrollProgress, setScrollProgress] = useState(0);
  const [indicatorWidth, setIndicatorWidth] = useState(10);

  useEffect(() => {
    const el = scrollRef.current;
    if (!el) return;

    const handleScroll = () => {
      const scrollMax = Math.max(0, el.scrollWidth - el.clientWidth);
      const progress = scrollMax > 0 ? el.scrollLeft / scrollMax : 0;
      setScrollProgress(progress);
      
      const ratio = el.clientWidth / el.scrollWidth;
      setIndicatorWidth(Math.max(10, ratio * 100)); // Minimum 10% width
    };

    el.addEventListener("scroll", handleScroll, { passive: true });
    window.addEventListener("resize", handleScroll);
    handleScroll();

    return () => {
      el.removeEventListener("scroll", handleScroll);
      window.removeEventListener("resize", handleScroll);
    };
  }, []);

  const handleNext = () => {
    if (scrollRef.current) {
      const cardWidth = 277 + 16;
      scrollRef.current.scrollBy({ left: cardWidth, behavior: 'smooth' });
    }
  };

  const handlePrev = () => {
    if (scrollRef.current) {
      const cardWidth = 277 + 16;
      scrollRef.current.scrollBy({ left: -cardWidth, behavior: 'smooth' });
    }
  };

  const toggleCard = (idx: number) => {
    setActiveIdx((prev) => (prev === idx ? -1 : idx));
    // Trigger scroll recalculation after state update
    setTimeout(() => {
      if (scrollRef.current) {
        const el = scrollRef.current;
        const ratio = el.clientWidth / el.scrollWidth;
        setIndicatorWidth(Math.max(10, ratio * 100));
      }
    }, 500);
  };

  const indicatorLeft = scrollProgress * (100 - indicatorWidth);

  return (
    <section className="relative w-full bg-transparent py-20 overflow-hidden">
      {/* Background Gradient */}
      <div
        className="absolute pointer-events-none left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 w-[clamp(44rem,14.769rem+116.923vw,120rem)] h-[clamp(25rem,8.654rem+65.385vw,67.5rem)]"
        style={{ background: "radial-gradient(50% 50%, rgba(255, 182, 55, 0.05), rgba(255, 182, 55, 0.08) 50%, rgba(255, 182, 55, 0))" }}
      />

      <div className="container mx-auto px-6 relative z-10 max-w-[1200px]">
        {/* Title Section */}
        <div className="relative mb-6">
          <h3 className="text-xl font-medium text-sandstone-500 tracking-tight">Development Team</h3>
        </div>

        {/* CARDS CAROUSEL */}
        <div className="relative w-full">
          <div
            ref={scrollRef}
            className="no-scrollbar flex flex-row gap-4 overflow-x-scroll sm:snap-x sm:snap-mandatory lg:snap-none pb-4 max-w-full pr-[300px]"
            style={{ scrollbarWidth: "none", msOverflowStyle: "none" }}
          >
            <style>{`.no-scrollbar::-webkit-scrollbar { display: none; }`}</style>

            {developmentTeam.map((member, idx) => {
              const isExpanded = activeIdx === idx;

              return (
                <div
                  key={member.id}
                  className={`relative shrink-0 overflow-hidden rounded-2xl transition-all duration-500 ${isExpanded ? "w-[277px] lg:w-[565px]" : "w-[277px]"} h-[370px] bg-[#4A4741]/10 backdrop-blur-[32px] border border-[#4A4741]/10 shadow-[0_8px_32px_rgba(0,0,0,0.05)] hover:shadow-[0_8px_32px_rgba(0,0,0,0.1)] hover:bg-[#4A4741]/10`}
                >
                  {/* Expand Button (Desktop) */}
                  <div className="absolute top-4 right-4 z-10 hidden transition-transform lg:block">
                    <button
                      aria-label={`Read more about ${member.name}`}
                      className="rounded-full text-center inline-block transition bg-white/90 text-sandstone-500 hover:bg-white p-5"
                      type="button"
                      onClick={() => toggleCard(idx)}
                    >
                      <svg aria-hidden="true" fill="none" height="13" viewBox="0 0 13 13" width="13" xmlns="http://www.w3.org/2000/svg">
                        {isExpanded ? (
                          <rect fill="currentColor" height="2" width="13" x="0" y="5.5" />
                        ) : (
                          <>
                            <rect fill="currentColor" height="13" width="2" x="5.5" y="0"></rect>
                            <rect fill="currentColor" height="13" transform="rotate(90 13 5)" width="2" x="13" y="5"></rect>
                          </>
                        )}
                      </svg>
                    </button>
                  </div>

                  <div className="flex h-full flex-col lg:flex-row">
                    {/* Image Section */}
                    <div className="relative w-[277px] shrink-0 overflow-hidden sm:aspect-square sm:h-[277px] lg:aspect-auto lg:h-full">
                      <Image
                        src={member.srcFallback}
                        alt={`${member.name} headshot`}
                        fill
                        className="object-cover"
                        sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                        quality={100}
                        style={{ objectPosition: member.objectPosition || "center 5%" }}
                      />
                    </div>

                    {/* Desktop Expansion Panel */}
                    <div className={`h-full overflow-hidden transition-all duration-300 sm:hidden lg:block ${isExpanded ? "w-72" : "w-0"}`}>
                      <div className="flex h-full w-72 flex-col justify-end gap-4 overflow-hidden p-6 text-[#1c1b1a]">
                        <p className="tracking-normal text-left text-inherit leading-normal text-2xl font-bold">{member.name}</p>
                        <p className="text-base tracking-normal text-left text-blue-600 leading-normal font-normal">{member.title}</p>
                        <button className="rounded-full inline-block transition text-left text-[#1c1b1a] hover:opacity-70 p-0" type="button">
                          <span className="items-center inline-flex gap-2 underline">
                            <span>View Full Bio</span>
                            <svg aria-hidden="true" fill="none" height="6" viewBox="0 0 20 6" width="20" xmlns="http://www.w3.org/2000/svg">
                              <path d="M20 3L15 0.11325L15 5.88675L20 3ZM-4.37114e-08 3.5L15.5 3.5L15.5 2.5L4.37114e-08 2.5L-4.37114e-08 3.5Z" fill="currentColor"></path>
                            </svg>
                          </span>
                        </button>
                      </div>
                    </div>

                    {/* Mobile Panel */}
                    <div className="flex h-full w-[277px] grow flex-col justify-between overflow-hidden p-6 transition-all lg:hidden bg-transparent">
                      <div className="flex flex-col gap-2 text-[#1c1b1a]">
                        <p className="tracking-normal text-left text-inherit leading-normal text-lg font-bold">{member.name}</p>
                        <p className="text-[0.875rem] tracking-normal text-left text-blue-600 leading-normal font-normal">{member.title}</p>
                      </div>
                      <button className="rounded-full inline-block transition text-left text-[#1c1b1a] hover:opacity-70 mt-4 underline" type="button">
                        <span className="items-center inline-flex gap-2">
                          <span>View Full Bio</span>
                          <svg aria-hidden="true" fill="none" height="6" viewBox="0 0 20 6" width="20" xmlns="http://www.w3.org/2000/svg">
                            <path d="M20 3L15 0.11325L15 5.88675L20 3ZM-4.37114e-08 3.5L15.5 3.5L15.5 2.5L4.37114e-08 2.5L-4.37114e-08 3.5Z" fill="currentColor"></path>
                          </svg>
                        </span>
                      </button>
                    </div>

                  </div>
                </div>
              );
            })}
            {/* Spacer to allow last card expansion */}
            <div className="shrink-0 w-24 lg:w-48" aria-hidden="true" />
          </div>
        </div>

        {/* Scroll Progress Bar */}
        <div className="relative mt-4 h-1 bg-sandstone-500/10 rounded-full overflow-hidden">
          <div
            className="absolute inset-y-0 h-full bg-[#1a4f82] rounded-full transition-all duration-300"
            style={{ 
              left: `${indicatorLeft}%`, 
              width: `${indicatorWidth}%` 
            }}
          />
        </div>

        {/* Navigation Arrows */}
        <div className="flex flex-row justify-end gap-4 pt-6">
          <button
            aria-label="Previous Profile"
            className="rounded-full text-center inline-block transition p-5 rotate-180 bg-white/10 backdrop-blur-md border border-black/5 text-[#1c1b1a] hover:bg-white/20 disabled:opacity-30 shadow-sm"
            type="button"
            onClick={handlePrev}
          >
            <svg aria-hidden="true" fill="none" height="13" viewBox="0 0 13 13" width="13" xmlns="http://www.w3.org/2000/svg">
              <path d="M12.5303 6.53033C12.8232 6.23744 12.8232 5.76256 12.5303 5.46967L7.75736 0.696699C7.46447 0.403806 6.98959 0.403806 6.6967 0.696699C6.40381 0.989593 6.40381 1.46447 6.6967 1.75736L10.9393 6L6.6967 10.2426C6.40381 10.5355 6.40381 11.0104 6.6967 11.3033C6.98959 11.5962 7.46447 11.5962 7.75736 11.3033L12.5303 6.53033ZM0 6.75L12 6.75V5.25L0 5.25L0 6.75Z" fill="currentColor"></path>
            </svg>
          </button>
          <button
            aria-label="Next Profile"
            className="rounded-full text-center inline-block transition p-5 bg-[#f7f1e8] backdrop-blur-md border border-[#1c1b1a]/10 text-[#1c1b1a] hover:bg-white disabled:opacity-30 shadow-sm"
            type="button"
            onClick={handleNext}
          >
            <svg aria-hidden="true" fill="none" height="13" viewBox="0 0 13 13" width="13" xmlns="http://www.w3.org/2000/svg">
              <path d="M12.5303 6.53033C12.8232 6.23744 12.8232 5.76256 12.5303 5.46967L7.75736 0.696699C7.46447 0.403806 6.98959 0.403806 6.6967 0.696699C6.40381 0.989593 6.40381 1.46447 6.6967 1.75736L10.9393 6L6.6967 10.2426C6.40381 10.5355 6.40381 11.0104 6.6967 11.3033C6.98959 11.5962 7.46447 11.5962 7.75736 11.3033L12.5303 6.53033ZM0 6.75L12 6.75V5.25L0 5.25L0 6.75Z" fill="currentColor"></path>
            </svg>
          </button>
        </div>
      </div>
    </section>
  );
};
