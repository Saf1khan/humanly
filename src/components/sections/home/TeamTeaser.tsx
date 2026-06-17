"use client";

import React, { useRef, useState, useEffect } from "react";
import Image from "next/image";

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
  },
];

interface TeamMember {
  id: string;
  name: string;
  title: string;
  bio: string;
  srcFallback: string;
  objectPosition?: string;
}

const TeamCarousel = ({
  title,
  members,
}: {
  title: string;
  members: TeamMember[];
}) => {
  const scrollRef = useRef<HTMLDivElement>(null);
  const [activeIdx, setActiveIdx] = useState<number>(-1);
  const [scrollProgress, setScrollProgress] = useState(0);
  const [indicatorWidth, setIndicatorWidth] = useState(10);
  const [isDesktop, setIsDesktop] = useState(false);
  const lastScrollRef = useRef(0);

  const getCssVarPx = (el: HTMLElement, name: string, fallback: number) => {
    const raw = getComputedStyle(el).getPropertyValue(name).trim();
    const parsed = parseFloat(raw);
    return Number.isFinite(parsed) ? parsed : fallback;
  };

  useEffect(() => {
    const checkDesktop = () => {
      setIsDesktop(window.innerWidth >= 1024);
    };

    checkDesktop();
    window.addEventListener("resize", checkDesktop);

    return () => {
      window.removeEventListener("resize", checkDesktop);
    };
  }, []);

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

  useEffect(() => {
    setActiveIdx(-1);
  }, [isDesktop]);

  const handleNext = () => {
    if (!scrollRef.current) return;

    const gap = getCssVarPx(scrollRef.current, "--card-gap", 16);
    const cardWidth = isDesktop
      ? getCssVarPx(scrollRef.current, "--card-w", 277)
      : activeIdx !== -1
      ? 554
      : 277;

    scrollRef.current.scrollBy({
      left: cardWidth + gap,
      behavior: "smooth",
    });
  };

  const handlePrev = () => {
    if (!scrollRef.current) return;

    const gap = getCssVarPx(scrollRef.current, "--card-gap", 16);
    const cardWidth = isDesktop
      ? getCssVarPx(scrollRef.current, "--card-w", 277)
      : activeIdx !== -1
      ? 554
      : 277;

    scrollRef.current.scrollBy({
      left: -(cardWidth + gap),
      behavior: "smooth",
    });
  };

  const toggleCard = (idx: number) => {
    const isExpanding = activeIdx !== idx;

    if (isExpanding && scrollRef.current) {
      lastScrollRef.current = scrollRef.current.scrollLeft;
    }

    setActiveIdx((prev) => (prev === idx ? -1 : idx));

    setTimeout(() => {
      if (!scrollRef.current) return;

      const el = scrollRef.current;
      const cards = el.querySelectorAll<HTMLElement>(
        ":scope > div:not([aria-hidden])"
      );
      const card = cards[idx];
      if (!card) return;

      if (isDesktop && isExpanding) {
        const expandedWidth = getCssVarPx(el, "--card-expanded-w", 565);
        const cardLeft = card.offsetLeft;
        const cardRight = cardLeft + expandedWidth;
        const visibleRight = el.scrollLeft + el.clientWidth;

        if (cardRight > visibleRight) {
          const targetScroll = cardRight - el.clientWidth + 32;
          el.scrollTo({
            left: Math.max(0, targetScroll),
            behavior: "smooth",
          });
        }
      } else if (!isDesktop && isExpanding) {
        const expandedWidth = 554;
        const cardLeft = card.offsetLeft;
        const cardRight = cardLeft + expandedWidth;
        const visibleRight = el.scrollLeft + el.clientWidth;

        if (cardRight > visibleRight) {
          el.scrollTo({
            left: Math.max(0, cardRight - el.clientWidth + 16),
            behavior: "smooth",
          });
        }
      } else if (isDesktop && !isExpanding) {
        el.scrollTo({
          left: lastScrollRef.current,
          behavior: "smooth",
        });
      }

      const ratio = el.clientWidth / el.scrollWidth;
      setIndicatorWidth(Math.max(10, ratio * 100));
    }, 50);
  };

  const indicatorLeft = scrollProgress * (100 - indicatorWidth);

  return (
    <div className="mb-24 last:mb-0">
      <div className="relative mb-8">
        <h3 className="text-3xl font-cormorant font-light tracking-tight text-[#11161a] md:text-4xl">
          {title}
        </h3>
        <div className="mt-3 h-[1px] w-full bg-[#c2a077]" />
      </div>

      <div
        className="relative w-full"
        style={
          {
            "--card-gap": "16px",
            "--card-w":
              "clamp(212px, calc(212px + 104 * ((100vw - 1024px) / 416)), 316px)",
            "--card-expanded-w":
              "clamp(428px, calc(428px + 210 * ((100vw - 1024px) / 416)), 638px)",
            "--card-h":
              "clamp(308px, calc(308px + 112 * ((100vw - 1024px) / 416)), 420px)",
            "--content-w":
              "clamp(224px, calc(224px + 104 * ((100vw - 1024px) / 416)), 328px)",
            "--shift-1":
              "clamp(60px, calc(60px + 36 * ((100vw - 1024px) / 416)), 96px)",
            "--shift-2":
              "clamp(120px, calc(120px + 72 * ((100vw - 1024px) / 416)), 192px)",
            "--shift-3":
              "clamp(180px, calc(180px + 108 * ((100vw - 1024px) / 416)), 288px)",
          } as React.CSSProperties
        }
      >
        <div
          ref={scrollRef}
          className="no-scrollbar flex max-w-full flex-row gap-[var(--card-gap)] overflow-x-scroll pb-4 sm:snap-x sm:snap-mandatory lg:snap-none"
          style={{ scrollbarWidth: "none", msOverflowStyle: "none" }}
        >
          {members.map((member, idx) => {
            const isExpanded = activeIdx === idx;
            const isFirst = idx === 0;

            let shiftClass = "";
            if (isDesktop && isFirst && activeIdx !== -1) {
              if (activeIdx === 1) shiftClass = "lg:-ml-[var(--shift-1)]";
              else if (activeIdx === 2) shiftClass = "lg:-ml-[var(--shift-2)]";
              else if (activeIdx === 3) shiftClass = "lg:-ml-[var(--shift-3)]";
            }

            return (
              <div
                key={member.id}
                className={`relative shrink-0 overflow-hidden rounded-2xl transition-all duration-500 ${
                  isDesktop
                    ? isExpanded
                      ? "w-[277px] lg:w-[var(--card-expanded-w)]"
                      : "w-[277px] lg:w-[var(--card-w)]"
                    : isExpanded
                    ? "w-[554px]"
                    : "w-[277px]"
                } ${shiftClass} h-[370px] lg:h-[var(--card-h)] shadow-[0_8px_32px_rgba(17,22,26,0.04)] hover:shadow-[0_8px_32px_rgba(17,22,26,0.1)] ${
                  isExpanded ? "z-20" : "z-10"
                }`}
                onClick={() => {
                  if (!isDesktop) toggleCard(idx);
                }}
                onMouseEnter={() => {
                  if (isDesktop && activeIdx !== idx) toggleCard(idx);
                }}
                onMouseLeave={() => {
                  if (isDesktop && activeIdx === idx) toggleCard(idx);
                }}
              >
                <div className="flex h-full flex-row">
                  <div className="relative h-full w-[277px] shrink-0 overflow-hidden lg:w-[var(--card-w)]">
                    <div className="absolute inset-0 h-full w-full">
                      <Image
                        src={member.srcFallback}
                        alt={`${member.name} headshot`}
                        fill
                        className="object-cover"
                        sizes="(max-width: 1023px) 277px, (max-width: 1440px) 316px, 316px"
                        quality={100}
                        style={{
                          objectPosition: member.objectPosition || "center 5%",
                        }}
                      />
                    </div>
                  </div>

                  <div
                    className={`h-full overflow-hidden transition-all duration-300 ${
                      isDesktop
                        ? `hidden lg:block ${isExpanded ? "w-[var(--content-w)]" : "w-0"}`
                        : isExpanded
                        ? "w-[277px]"
                        : "w-0"
                    }`}
                  >
                    <div
                      className={`flex h-full flex-col justify-start gap-3 overflow-hidden p-6 text-[#11161a] ${
                        isDesktop ? "w-[var(--content-w)]" : "w-[277px]"
                      }`}
                    >
                      <p className="text-2xl font-cormorant font-light tracking-tight">
                        {member.name}
                      </p>
                      <p className="font-albert text-base font-light text-[#c2a077]">
                        {member.title}
                      </p>
                      <div className="mb-1 h-[1px] w-8 bg-[#c2a077]" />
                      <p className="font-albert text-sm font-light leading-6 text-[#11161a]/80">
                        {member.bio}
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>

      <div className="relative mt-4 h-[4px] overflow-hidden rounded-full bg-[#11161a]/8">
        <div
          className="absolute inset-y-0 h-full rounded-full bg-[#c2a077] transition-all duration-300"
          style={{ left: `${indicatorLeft}%`, width: `${indicatorWidth}%` }}
        />
      </div>

      <div className="flex flex-row justify-end gap-4 pt-6">
        <button
          className="rotate-180 rounded-full border border-[#11161a]/[0.08] bg-white p-5 text-[#11161a] transition-all duration-300 hover:border-[#c2a077]/40 hover:shadow-md"
          onClick={handlePrev}
          aria-label={`Previous ${title}`}
        >
          <svg
            aria-hidden="true"
            fill="none"
            height="13"
            viewBox="0 0 13 13"
            width="13"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M12.5303 6.53033C12.8232 6.23744 12.8232 5.76256 12.5303 5.46967L7.75736 0.696699C7.46447 0.403806 6.98959 0.403806 6.6967 0.696699C6.40381 0.989593 6.40381 1.46447 6.6967 1.75736L10.9393 6L6.6967 10.2426C6.40381 10.5355 6.40381 11.0104 6.6967 11.3033C6.98959 11.5962 7.46447 11.5962 7.75736 11.3033L12.5303 6.53033ZM0 6.75L12 6.75V5.25L0 5.25L0 6.75Z"
              fill="currentColor"
            />
          </svg>
        </button>

        <button
          className="rounded-full bg-[#11161a] p-5 text-[#faf9f6] transition-all duration-300 hover:bg-[#c2a077]"
          onClick={handleNext}
          aria-label={`Next ${title}`}
        >
          <svg
            aria-hidden="true"
            fill="none"
            height="13"
            viewBox="0 0 13 13"
            width="13"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M12.5303 6.53033C12.8232 6.23744 12.8232 5.76256 12.5303 5.46967L7.75736 0.696699C7.46447 0.403806 6.98959 0.403806 6.6967 0.696699C6.40381 0.989593 6.40381 1.46447 6.6967 1.75736L10.9393 6L6.6967 10.2426C6.40381 10.5355 6.40381 11.0104 6.6967 11.3033C6.98959 11.5962 7.46447 11.5962 7.75736 11.3033L12.5303 6.53033ZM0 6.75L12 6.75V5.25L0 5.25L0 6.75Z"
              fill="currentColor"
            />
          </svg>
        </button>
      </div>
    </div>
  );
};

export const TeamGrid = () => {
  return (
    <section className="relative z-10 w-full overflow-x-clip bg-transparent py-24">
      <div
        className="pointer-events-none absolute right-0 top-1/4 h-[clamp(25rem,8.654rem+65.385vw,67.5rem)] w-[clamp(44rem,14.769rem+116.923vw,120rem)] -translate-x-1/2 translate-y-1/2"
        style={{
          background:
            "radial-gradient(50% 50%, rgba(var(--radial-gradient-color, 107, 206, 255), 0.15), rgba(var(--radial-gradient-color, 107, 206, 255), 0.1) 50%, rgba(var(--radial-gradient-color, 107, 206, 255), 0))",
        }}
      />
      <div
        className="pointer-events-none absolute bottom-1/5 left-0 h-[clamp(25rem,8.654rem+65.385vw,67.5rem)] w-[clamp(44rem,14.769rem+116.923vw,120rem)] translate-x-1/2 -translate-y-1/3"
        style={{
          background:
            "radial-gradient(50% 50%, rgba(var(--radial-gradient-color, 107, 206, 255), 0.15), rgba(var(--radial-gradient-color, 107, 206, 255), 0.1) 50%, rgba(var(--radial-gradient-color, 107, 206, 255), 0))",
        }}
      />

      <div className="relative z-10 mx-auto w-full max-w-[1440px] px-6 md:px-12 lg:px-16">
        <h2 className="mb-24 text-center text-4xl font-cormorant font-light tracking-tight text-sandstone-500 md:text-5xl">
          Team behind Humanly
        </h2>

        <TeamCarousel title="Leadership Team" members={innovationTeam} />
        <TeamCarousel title="Development Team" members={developmentTeam} />
      </div>

      <style jsx global>{`
        .no-scrollbar::-webkit-scrollbar {
          display: none;
        }
      `}</style>
    </section>
  );
};