"use client";

import { useRef, useState, useEffect } from "react";
import Image from "next/image";



const innovationTeam = [
  {
    id: "dale",
    name: "Dale Twardokus",
    title: "President",
    srcFallback: "/images/asset 35.png",
    objectPosition: "50% 5%",
  },
  {
    id: "vincent",
    name: "Vincent Vernet",
    title: "Chief Strategy Officer",
    srcFallback: "/images/asset 36.jpeg",
    objectPosition: "65% 5%",
  },
  {
    id: "sarah",
    name: "Dr. Sarah Taylor",
    title: "VP Health & Wellness",
    srcFallback: "/images/asset 37.png",
    objectPosition: "75% 5%",
  },
  {
    id: "max",
    name: "Max Post",
    title: "VP Technology",
    srcFallback: "/images/asset 38.png",
    objectPosition: "50% 5%",
  }
];

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

const TeamCarousel = ({ members, title }: { members: any[], title: string }) => {
  const scrollRef = useRef<HTMLDivElement>(null);
  const [activeIdx, setActiveIdx] = useState<number>(-1);
  const [scrollProgress, setScrollProgress] = useState(0);

  useEffect(() => {
    const el = scrollRef.current;
    if (!el) return;

    const handleScroll = () => {
      const scrollMax = Math.max(0, el.scrollWidth - el.clientWidth);
      const progress = scrollMax > 0 ? el.scrollLeft / scrollMax : 0;
      setScrollProgress(progress);
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
      const nextIdx = activeIdx + 1 >= members.length ? 0 : activeIdx + 1;
      setActiveIdx(nextIdx);

      const cardWidth = 277 + 16;
      const offset = nextIdx * cardWidth;
      scrollRef.current.scrollTo({ left: offset, behavior: 'smooth' });
    }
  };

  const handlePrev = () => {
    if (scrollRef.current) {
      const prevIdx = activeIdx - 1 < 0 ? members.length - 1 : activeIdx - 1;
      setActiveIdx(prevIdx);

      const cardWidth = 277 + 16;
      const offset = prevIdx * cardWidth;
      scrollRef.current.scrollTo({ left: offset, behavior: 'smooth' });
    }
  };

  const toggleCard = (idx: number) => {
    setActiveIdx((prev) => (prev === idx ? -1 : idx));
  };

  const indicatorLeft = scrollProgress * 98;
  const indicatorRight = 100 - (scrollProgress * 98) - 1.35;

  return (
    <div className="col-start-main col-end-main flex flex-col 2xl:justify-self-center 2xl:w-fit max-w-full">
      {/* Sub-label */}
      <div className="relative mb-4">
        <h3 className="text-xl font-bold text-[#1c1b1a] tracking-tight">{title}</h3>
      </div>

      {/* CARDS */}
      <div className="relative w-full" data-cy="gridItem_div">
        <div className="motionComponent" style={{ opacity: 1 }}>
          <div
            ref={scrollRef}
            className="no-scrollbar flex flex-row gap-4 overflow-x-scroll sm:snap-x sm:snap-mandatory lg:snap-none pb-4 max-w-full"
            style={{ scrollbarWidth: "none", msOverflowStyle: "none" }}
          >
            <style>{`.no-scrollbar::-webkit-scrollbar { display: none; }`}</style>

            {members.map((member, idx) => {
              const isExpanded = activeIdx === idx;

              return (
                <div 
                  key={member.id} 
                  className={`relative shrink-0 overflow-hidden rounded-xl transition-all duration-300 ${isExpanded ? "w-[277px] lg:w-[565px]" : "w-[277px]"} h-[370px] bg-white/80 backdrop-blur-md border border-[#1c1b1a]/5 shadow-sm hover:shadow-md transition-shadow`} 
                  data-cy="landing-page-profile-card"
                >
                  {/* Expand Button (Desktop) */}
                  <div className="absolute top-4 right-4 z-10 hidden transition-transform lg:block">
                    <button
                      aria-label={`Read more about ${member.name}`}
                      className="rounded-full text-center inline-block transition bg-white/90 text-sandstone-500 hover:bg-white p-5"
                      type="button"
                      onClick={() => toggleCard(idx)}
                    >
                      <span data-cy="expand-open">
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
                      </span>
                    </button>
                  </div>

                  <div className="flex h-full flex-col lg:flex-row">
                    {/* Image Source Content */}
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
                      <div 
                        className="flex h-full w-72 flex-col justify-end gap-4 overflow-hidden p-6 text-[#1c1b1a]"
                      >
                        <p className="tracking-normal text-left text-inherit font-sans leading-normal text-2xl font-bold">{member.name}</p>
                        <p className="text-base tracking-normal text-left text-blue-600 font-sans leading-normal font-normal">{member.title}</p>
                        <button className="rounded-full inline-block transition text-stroke-color-transparent text-stroke-width-0.5 hover:text-stroke-color-current p-0 text-left text-[#1c1b1a] hover:opacity-70" data-cy="landing-page-profile-card-desktop-button" type="button" aria-label="View Full Bio" tabIndex={isExpanded ? 0 : -1}>
                          <span className="items-center inline-flex gap-2 content-center justify-center underline" data-cy="button-compartment">
                            <span><span className="underline">View Full Bio</span></span>
                            <svg aria-hidden="true" fill="none" height="6" viewBox="0 0 20 6" width="20" xmlns="http://www.w3.org/2000/svg" data-cy="link_button_arrow_icon">
                              <path d="M20 3L15 0.11325L15 5.88675L20 3ZM-4.37114e-08 3.5L15.5 3.5L15.5 2.5L4.37114e-08 2.5L-4.37114e-08 3.5Z" fill="currentColor"></path>
                            </svg>
                          </span>
                        </button>
                      </div>
                    </div>

                    {/* Mobile Always-Visible Panel */}
                    <div 
                      className="flex h-full w-[277px] grow flex-col justify-between overflow-hidden p-6 transition-all lg:hidden bg-transparent"
                    >
                      <div className="flex flex-col justify-between gap-2 text-[#1c1b1a]">
                        <p className="tracking-normal text-left text-inherit font-sans leading-normal text-lg font-bold">{member.name}</p>
                        <p className="text-[0.875rem] tracking-normal text-left text-blue-600 font-sans leading-normal font-normal">{member.title}</p>
                      </div>
                      <button className="rounded-full inline-block transition text-stroke-color-transparent text-stroke-width-0.5 hover:text-stroke-color-current p-0 text-left text-[#1c1b1a] hover:opacity-70 mt-4" data-cy="landing-page-profile-card-mobile-button" type="button" aria-label="View Full Bio">
                        <span className="items-center inline-flex gap-2 content-center justify-center underline" data-cy="button-compartment">
                          <span><span className="underline">View Full Bio</span></span>
                          <svg aria-hidden="true" fill="none" height="6" viewBox="0 0 20 6" width="20" xmlns="http://www.w3.org/2000/svg" data-cy="link_button_arrow_icon">
                            <path d="M20 3L15 0.11325L15 5.88675L20 3ZM-4.37114e-08 3.5L15.5 3.5L15.5 2.5L4.37114e-08 2.5L-4.37114e-08 3.5Z" fill="currentColor"></path>
                          </svg>
                        </span>
                      </button>
                    </div>

                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </div>

      {/* Scroll Progress Bar */}
      <div className="relative w-full" data-cy="gridItem_div">
        <div className="relative mt-2 h-px bg-sandstone-500">
          <div
            className="absolute inset-y-0 h-full bg-gray-300 rounded-full transition-all duration-300"
            data-cy="landing-page-profile-cards-scroll-indicator"
            style={{ left: `${Math.max(0, indicatorLeft)}%`, right: `${Math.max(0, indicatorRight)}%` }}
          />
        </div>
      </div>

      {/* Navigation Arrows */}
      <div className="relative mb-16 w-full" data-cy="gridItem_div">
        <div className="flex flex-row justify-end gap-4 pt-2">
          <button
            aria-label="Previous Profile"
            className="rounded-full text-center inline-block transition p-5 rotate-180 bg-white/10 backdrop-blur-md border border-white/10 text-sandstone-200 hover:bg-white/20 disabled:bg-neutral-700/50 disabled:text-neutral-400 disabled:opacity-30"
            data-cy="landing-page-profile-cards-previous-button"
            type="button"
            onClick={handlePrev}
          >
            <svg aria-hidden="true" fill="none" height="13" viewBox="0 0 13 13" width="13" xmlns="http://www.w3.org/2000/svg">
              <path d="M12.5303 6.53033C12.8232 6.23744 12.8232 5.76256 12.5303 5.46967L7.75736 0.696699C7.46447 0.403806 6.98959 0.403806 6.6967 0.696699C6.40381 0.989593 6.40381 1.46447 6.6967 1.75736L10.9393 6L6.6967 10.2426C6.40381 10.5355 6.40381 11.0104 6.6967 11.3033C6.98959 11.5962 7.46447 11.5962 7.75736 11.3033L12.5303 6.53033ZM0 6.75L12 6.75V5.25L0 5.25L0 6.75Z" fill="currentColor"></path>
            </svg>
          </button>
          <button
            aria-label="Next Profile"
            className="rounded-full text-center inline-block transition p-5 bg-[#f7f1e8] backdrop-blur-md border border-[#1c1b1a]/10 text-[#1c1b1a] hover:bg-white disabled:bg-neutral-200/50 disabled:text-neutral-400 disabled:opacity-30 shadow-sm"
            data-cy="landing-page-profile-cards-next-button"
            type="button"
            onClick={handleNext}
          >
            <svg aria-hidden="true" fill="none" height="13" viewBox="0 0 13 13" width="13" xmlns="http://www.w3.org/2000/svg">
              <path d="M12.5303 6.53033C12.8232 6.23744 12.8232 5.76256 12.5303 5.46967L7.75736 0.696699C7.46447 0.403806 6.98959 0.403806 6.6967 0.696699C6.40381 0.989593 6.40381 1.46447 6.6967 1.75736L10.9393 6L6.6967 10.2426C6.40381 10.5355 6.40381 11.0104 6.6967 11.3033C6.98959 11.5962 7.46447 11.5962 7.75736 11.3033L12.5303 6.53033ZM0 6.75L12 6.75V5.25L0 5.25L0 6.75Z" fill="currentColor"></path>
            </svg>
          </button>
        </div>
      </div>
    </div>
  );
};

export const TeamSection = () => {
  return (
    <section className="relative w-full bg-transparent py-20 pb-32 overflow-hidden">
      {/* Background Gradients — exact match to DataRoom */}
      <div
        className="absolute pointer-events-none right-0 translate-x-1/2 top-0 -translate-y-1/2 w-[clamp(44rem,14.769rem+116.923vw,120rem)] h-[clamp(25rem,8.654rem+65.385vw,67.5rem)]"
        style={{ background: "radial-gradient(50% 50%, rgba(105, 165, 255, 0.08), rgba(105, 165, 255, 0.02) 50%, rgba(105, 165, 255, 0))" }}
      />
      <div
        className="absolute pointer-events-none left-1/2 -translate-x-1/2 top-1/2 -translate-y-1/2 w-[clamp(44rem,14.769rem+116.923vw,120rem)] h-[clamp(25rem,8.654rem+65.385vw,67.5rem)]"
        style={{ background: "radial-gradient(50% 50%, rgba(105, 165, 255, 0.06), rgba(105, 165, 255, 0.02) 50%, rgba(105, 165, 255, 0))" }}
      />

      <div className="relative z-10 gap-y-2 gridContainerV3" data-cy="landing-page-profile-cards">

        {/* Title Section */}
        <div className="col-start-main col-end-main relative flex flex-col items-center mb-16 pt-8">
          <div className="flex flex-col items-center gap-2 mb-6">
            <p className="text-[11px] font-bold tracking-[0.2em] uppercase text-[#A8A5A0]">
              THE TEAM
            </p>
            <div className="w-10 h-[2px] bg-gradient-to-r from-[#A8A5A0] to-[#A855F7]"></div>
          </div>
          <h2 className="text-4xl md:text-5xl font-bold text-[#1c1b1a] text-center tracking-tight">
            Builders, operators, innovators.
          </h2>
        </div>

        {/* Carousel 1: Innovation Team */}
        <TeamCarousel title="Innovation Team" members={innovationTeam} />

        {/* Carousel 2: Development Team */}
        <TeamCarousel title="Development Team" members={developmentTeam} />

      </div>
    </section>
  );
};
