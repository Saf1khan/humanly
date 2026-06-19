"use client";
import React, { useRef, useState, useEffect } from "react";
import Image from "next/image";
import { motion } from "framer-motion";

const innovationTeam = [
  {
    id: "dale",
    name: "Dale Twardokus",
    title: "President",
    bio: "Dale leads Humanly’s vision and overall growth strategy, guiding the company’s direction, partnerships, and long-term impact.",
    srcFallback: "/images/asset 35.png",
    objectPosition: "50% 5%",
  },
  {
    id: "vincent",
    name: "Vincent Vernet",
    title: "Chief Strategy Officer",
    bio: "Vincent focuses on strategic planning, market expansion, and cross-functional initiatives that help Humanly scale with clarity and purpose.",
    srcFallback: "/images/asset 36.jpeg",
    objectPosition: "65% 5%",
  },
  {
    id: "sarah",
    name: "Dr. Sarah Taylor",
    title: "VP Health & Wellness",
    bio: "Sarah leads health and wellness programs, shaping initiatives that support better outcomes for members and strengthen community wellbeing.",
    srcFallback: "/images/asset 37.png",
    objectPosition: "75% 5%",
  },
  {
    id: "max",
    name: "Max Post",
    title: "VP Technology",
    bio: "Max oversees Humanly’s technology roadmap, product systems, and technical innovation to ensure the platform remains scalable and reliable.",
    srcFallback: "/images/asset 38.png",
    objectPosition: "50% 5%",
  },
];

const developmentTeam = [
  {
    id: "jeff",
    name: "Jeff Wagner",
    title: "EVP Development",
    bio: "Jeff leads development efforts across projects, aligning execution, partnerships, and delivery to support Humanly’s broader mission.",
    srcFallback: "/images/asset 39.png",
    objectPosition: "75% 5%",
  },
  {
    id: "josh",
    name: "Josh Kroll",
    title: "Director of Development",
    bio: "Josh manages development strategy and day-to-day execution, helping move initiatives from planning through implementation.",
    srcFallback: "/images/asset 40.png",
    objectPosition: "35% 5%",
  },
  {
    id: "mitch",
    name: "Mitch Gonzalez",
    title: "Director of Capital Markets",
    bio: "Mitch leads capital markets efforts, structuring opportunities and financial strategies that support sustainable organizational growth.",
    srcFallback: "/images/asset 41.png",
    objectPosition: "35% 5%",
  },
  {
    id: "janine",
    name: "Janine Meier",
    title: "Chief of Staff",
    bio: "Janine supports executive operations, team alignment, and organizational effectiveness, helping leadership priorities turn into action.",
    srcFallback: "/images/asset 42.png",
    objectPosition: "50% 5%",
  }
];

interface TeamMember {
  bio: string;
  id: string;
  name: string;
  title: string;
  srcFallback: string;
  objectPosition?: string;
}

const TeamCarousel = ({ title, members }: { title: string, members: TeamMember[] }) => {
  const scrollRef = useRef<HTMLDivElement>(null);
  const [activeIdx, setActiveIdx] = useState<number>(-1);
  const [scrollProgress, setScrollProgress] = useState(0);
  const [indicatorWidth, setIndicatorWidth] = useState(10);
  const lastScrollRef = useRef(0);

  useEffect(() => {
    const el = scrollRef.current;
    if (!el) return;

    const handleScroll = () => {
      const scrollMax = Math.max(0, el.scrollWidth - el.clientWidth);
      const progress = scrollMax > 0 ? el.scrollLeft / scrollMax : 0;
      setScrollProgress(progress);

      const ratio = el.clientWidth / el.scrollWidth;
      setIndicatorWidth(Math.max(10, ratio * 100));
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
    const isExpanding = activeIdx !== idx;

    if (isExpanding && scrollRef.current) {
      lastScrollRef.current = scrollRef.current.scrollLeft;
    }

    setActiveIdx((prev) => (prev === idx ? -1 : idx));

    setTimeout(() => {
      if (scrollRef.current) {
        const el = scrollRef.current;

        if (isExpanding) {
          // Find the card element by its position in the flex container
          const cards = el.querySelectorAll<HTMLElement>(':scope > div:not([aria-hidden])');
          const card = cards[idx];
          if (card) {
            // Expanded card width is 565px; card's left offset relative to the scroll container
            const cardLeft = card.offsetLeft;
            const expandedWidth = 565;
            const cardRight = cardLeft + expandedWidth;
            const visibleRight = el.scrollLeft + el.clientWidth;

            if (cardRight > visibleRight) {
              // Scroll so the expanded card's right edge is visible (with a small margin)
              const targetScroll = cardRight - el.clientWidth + 32;
              el.scrollTo({ left: Math.max(0, targetScroll), behavior: 'smooth' });
            }
          }
        } else {
          el.scrollTo({ left: lastScrollRef.current, behavior: 'smooth' });
        }

        // Recalculate scroll indicator
        const ratio = el.clientWidth / el.scrollWidth;
        setIndicatorWidth(Math.max(10, ratio * 100));
      }
    }, 50);
  };

  const indicatorLeft = scrollProgress * (100 - indicatorWidth);

  return (
    <div className="mb-24 last:mb-0">
      <div className="relative mb-8">
        <h3 className="text-4xl font-cormorant font-normal text-[rgb(34,66,40)] tracking-tight">{title}</h3>
        <div className="h-[1px] w-full bg-[rgba(34,66,40,0.12)] mt-3" />
      </div>

      <div className="relative w-full">
        <div
          ref={scrollRef}
          className="no-scrollbar flex flex-row gap-4 overflow-x-scroll sm:snap-x sm:snap-mandatory lg:snap-none pb-4 max-w-full"
          style={{ scrollbarWidth: "none", msOverflowStyle: "none" }}
        >
          {members.map((member, idx) => {
            const isExpanded = activeIdx === idx;
            const isFirst = idx === 0;

            let shiftClass = "";
            if (isFirst && activeIdx !== -1) {
              if (activeIdx === 1) shiftClass = "lg:-ml-[96px]";
              else if (activeIdx === 2) shiftClass = "lg:-ml-[192px]";
              else if (activeIdx === 3) shiftClass = "lg:-ml-[288px]";
            }

            return (
              <div
                key={member.id}
                className={`relative shrink-0 overflow-hidden rounded-2xl transition-all duration-500 ${isExpanded ? "w-[277px] lg:w-[565px]" : "w-[277px]"
                  } ${shiftClass} h-[370px] ${isExpanded ? "z-20" : "z-10"}`}
                onMouseEnter={() => { if (activeIdx !== idx) toggleCard(idx); }}
                onMouseLeave={() => { if (activeIdx === idx) toggleCard(idx); }}
              >

                <div className="flex h-full flex-col lg:flex-row gap-0">
                  <motion.div
                    initial={{ opacity: 0, clipPath: "inset(20% 20% 20% 20%)" }}
                    whileInView={{ opacity: 1, clipPath: "inset(0% 0% 0% 0%)" }}
                    viewport={{ once: true, margin: "-60px" }}
                    transition={{ duration: 2.5, ease: [0.16, 1, 0.3, 1] }}
                    className="relative w-[277px] shrink-0 overflow-hidden h-[180px] lg:h-full mobile-no-clip"
                  >
                    <motion.div
                      initial={{ scale: 1.1, filter: "grayscale(40%)" }}
                      whileInView={{ scale: 1, filter: "grayscale(0%)" }}
                      viewport={{ once: true, margin: "-60px" }}
                      transition={{ duration: 2.5, ease: [0.16, 1, 0.3, 1] }}
                      className="absolute inset-0 w-full h-full"
                    >
                      <Image
                        src={member.srcFallback}
                        alt={`${member.name} headshot`}
                        fill
                        className="object-cover"
                        sizes="(max-width: 768px) 100vw, 300px"
                        quality={100}
                        style={{ objectPosition: member.objectPosition || "center 5%" }}
                      />
                    </motion.div>
                  </motion.div>
                  <div className={`h-full overflow-hidden transition-all duration-300 hidden lg:block ${isExpanded ? "w-72" : "w-0"} bg-[#5C6F5D]/15 border-1 border-[#5C6F5D]/25`}>
                    <div className="flex h-full w-72 flex-col justify-top gap-4 overflow-hidden p-6 text-[rgb(34,66,40)]">
                      <div className="h-[1px] w-8 bg-[rgba(34,66,40,0.2)] mb-1" />
                      <p className="text-2xl font-serif tracking-tight">{member.name}</p>
                      <p className="text-base text-[rgba(34,66,40,0.8)] font-light">{member.title}</p>
                      <p className="text-base text-[rgba(34,66,40,0.8)] font-light">{member.bio}</p>
                    </div>
                  </div>
                  <div className="flex w-[277px] h-[190px] flex-col justify-between p-5 lg:hidden bg-[#5C6F5D]/15 border-t border-[#5C6F5D]/25 backdrop-blur-sm -mt-[1px]">
                    <div className="flex flex-col gap-1 text-[rgb(34,66,40)]">
                      <p className="text-lg font-serif tracking-tight">{member.name}</p>
                      <p className="text-[0.875rem] text-[rgba(34,66,40,0.8)] font-light">{member.title}</p>
                    </div>
                    <p className="text-sm text-[rgba(34,66,40,0.8)] font-light leading-relaxed">{member.bio}</p>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>

      <div className="relative mt-4 h-[2px] bg-[rgba(34,66,40,0.05)] rounded-full overflow-hidden">
        <div
          className="absolute inset-y-0 h-full bg-[rgba(34,66,40,0.35)] rounded-full transition-all duration-300"
          style={{ left: `${indicatorLeft}%`, width: `${indicatorWidth}%` }}
        />
      </div>

      <div className="flex flex-row justify-end gap-4 pt-6">
        <button className="rounded-full p-5 rotate-180 bg-white border border-[rgba(34,66,40,0.08)] text-[rgb(34,66,40)] hover:border-[rgba(34,66,40,0.2)] hover:shadow-md transition-all duration-300" onClick={handlePrev}>
          <svg aria-hidden="true" fill="none" height="13" viewBox="0 0 13 13" width="13" xmlns="http://www.w3.org/2000/svg">
            <path d="M12.5303 6.53033C12.8232 6.23744 12.8232 5.76256 12.5303 5.46967L7.75736 0.696699C7.46447 0.403806 6.98959 0.403806 6.6967 0.696699C6.40381 0.989593 6.40381 1.46447 6.6967 1.75736L10.9393 6L6.6967 10.2426C6.40381 10.5355 6.40381 11.0104 6.6967 11.3033C6.98959 11.5962 7.46447 11.5962 7.75736 11.3033L12.5303 6.53033ZM0 6.75L12 6.75V5.25L0 5.25L0 6.75Z" fill="currentColor"></path>
          </svg>
        </button>
        <button className="rounded-full p-5 bg-[rgb(34,66,40)] text-[#faf9f6] hover:bg-[rgba(34,66,40,0.8)] transition-all duration-300" onClick={handleNext}>
          <svg aria-hidden="true" fill="none" height="13" viewBox="0 0 13 13" width="13" xmlns="http://www.w3.org/2000/svg">
            <path d="M12.5303 6.53033C12.8232 6.23744 12.8232 5.76256 12.5303 5.46967L7.75736 0.696699C7.46447 0.403806 6.98959 0.403806 6.6967 0.696699C6.40381 0.989593 6.40381 1.46447 6.6967 1.75736L10.9393 6L6.6967 10.2426C6.40381 10.5355 6.40381 11.0104 6.6967 11.3033C6.98959 11.5962 7.46447 11.5962 7.75736 11.3033L12.5303 6.53033ZM0 6.75L12 6.75V5.25L0 5.25L0 6.75Z" fill="currentColor"></path>
          </svg>
        </button>
      </div>
    </div>
  );
};

export const TeamGrid = () => {
  return (
    <section className="z-10 relative w-full bg-transparent py-24 overflow-x-clip">
      <div className="container mx-auto px-6 relative z-10 max-w-[1200px]">
        <TeamCarousel title="Leadership Team" members={innovationTeam} />
        <TeamCarousel title="Development Team" members={developmentTeam} />
      </div>
      <style jsx global>{`
        .no-scrollbar::-webkit-scrollbar { display: none; }
        @media (max-width: 1023px) {
          .mobile-no-clip {
            clip-path: none !important;
          }
        }
      `}</style>
    </section>
  );
};
