"use client";

import { useState, useEffect } from "react";
import clsx from "clsx";

const layerRows = [
  {
    id: "intelligence",
    eyebrow: "CAPTURE",
    title: "Intelligence",
    content:
      "AI-driven site selection, market analysis, and community design. Machine learning models evaluate 200+ data points per site.",
  },
  {
    id: "layer1",
    eyebrow: "LAYER 1",
    title: "Land & Entitlement",
    content:
      "Strategic acquisition paired with municipal partnerships to secure entitlements, tax incentives, and below-market financing.",
  },
  {
    id: "layer2",
    eyebrow: "LAYER 2",
    title: "Development",
    content:
      "A hybrid construction approach combining modular efficiency with traditional quality — reducing build timelines by 30% and costs by 20%.",
  },
  {
    id: "layer3",
    eyebrow: "LAYER 3",
    title: "Operations",
    content:
      "HumanlyOS® manages leasing, maintenance, resident communications, and compliance — reducing cost per unit while improving resident satisfaction.",
  },
  {
    id: "layer4",
    eyebrow: "LAYER 4",
    title: "Services",
    content:
      "Eight integrated service categories transacted through the Humanly platform — healthcare, childcare, education, food, legal, mobility, financial wellness, and workforce.",
  },
  {
    id: "layer5",
    eyebrow: "LAYER 5",
    title: "Financial",
    content:
      "HumanlyPay™ delivers embedded credit building, savings, micro-lending, and insurance products directly to residents.",
  },
  {
    id: "layer6",
    eyebrow: "LAYER 6",
    title: "Compounding",
    content:
      "Every resident interaction generates anonymized data that improves service delivery and creates compounding network effects across the ecosystem.",
  },
  {
    id: "capture-rev",
    eyebrow: "CAPTURE",
    title: "Revenue Aggregation",
    content:
      "Five discrete revenue streams — NOI, service fees, financial product margins, data licensing, and platform fees — compound into a diversified return profile.",
  },
  {
    id: "moat",
    eyebrow: "MOAT",
    title: "Vertical Integration",
    content:
      "By owning the land, building, operating system, services, and financial layer, Humanly creates a defensible moat no horizontal competitor can replicate.",
  },
];

import { RevealOnScroll } from "../ui/RevealOnScroll";

export const PlatformSection = () => {
  const [activeIndex, setActiveIndex] = useState<number | null>(null);

  useEffect(() => {
    let ticking = false;

    const handleScroll = () => {
      if (!ticking) {
        window.requestAnimationFrame(() => {
          const elements = document.querySelectorAll(".scroll-reveal-card");
          let minDistance = Infinity;
          let closestIndex: string | null = null;
          const viewportCenter = window.innerHeight / 2;

          elements.forEach((el) => {
            const rect = el.getBoundingClientRect();
            const elCenter = rect.top + rect.height / 2;
            const distance = Math.abs(elCenter - viewportCenter);

            if (distance < minDistance) {
              minDistance = distance;
              closestIndex = el.getAttribute("data-index");
            }
          });

          if (
            closestIndex !== null &&
            minDistance < window.innerHeight * 0.35
          ) {
            setActiveIndex(Number(closestIndex));
          }

          ticking = false;
        });
        ticking = true;
      }
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    setTimeout(handleScroll, 100);

    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <section className="relative w-full bg-[#fefaef] overflow-x-clip text-sandstone-500">
      <style>{`
        .gridContainerV3 {
          --smallGutter: 24px;
          --largeGutter: 64px;
          --maxContent: 1440px;
          display: grid;
          grid-template-columns: [full-start] minmax(var(--smallGutter), 1fr) [main-start] repeat(22, minmax(0, calc(var(--maxContent) / 22))) [main-end] minmax(var(--smallGutter), 1fr) [full-end];
          align-items: center;
        }
        @media (min-width: 1024px) {
          .gridContainerV3 {
            grid-template-columns: [full-start] minmax(var(--largeGutter), 1fr) [main-start] repeat(22, minmax(0, calc(var(--maxContent) / 22))) [main-end] minmax(var(--largeGutter), 1fr) [full-end];
          }
        }
        .col-start-main { grid-column-start: main-start; }
        .col-end-main { grid-column-end: main-end; }
        
        @media (min-width: 1024px) {
          .lg\\:col-start-12 { grid-column-start: 13; }
          .lg\\:col-end-11 { grid-column-end: 12; }
          .lg\\:order-1 { order: 1; }
          .lg\\:order-2 { order: 2; }
          .lg\\:aspect-4\\/3 { aspect-ratio: 4/3; }
          .lg\\:ml-auto { margin-left: auto; }
        }
        @media (min-width: 1280px) {
          .xl\\:col-start-9 { grid-column-start: 10; }
          .xl\\:col-end-8 { grid-column-end: 9; }
        }
        
        .text-sandstone-500 { color: #4a4741; }
        .text-heading-lg { font-size: 2rem; }
        .text-heading-xl { font-size: 2.5rem; }
        .text-heading-3xl { font-size: 3.5rem; }
        .leading-snug { line-height: 1.375; }
        .leading-tighter { line-height: 1.1; }
        .tracking-tighter { letter-spacing: -0.05em; }
        .font-sans { font-family: "AkkuratLL", sans-serif; }
        @keyframes mouse-scroll {
          0% { transform: translateY(0); opacity: 0; }
          20% { opacity: 1; }
          80% { opacity: 1; }
          100% { transform: translateY(12px); opacity: 0; }
        }
        .animate-mouse-scroll {
          animation: mouse-scroll 2s ease-in-out infinite;
        }
      `}</style>

      {/* Top Intro Section */}
      <div className="max-w-[1440px] mx-auto px-6 md:px-12 lg:px-16 pt-8 pb-0 lg:pt-12 relative flex flex-col items-center text-center gap-6 z-10 bg-[#fefaef]">
        <div className="flex flex-col items-center gap-2">
          <span className="text-[#A8A5A0] text-xs font-bold tracking-widest uppercase">
            THE PLATFORM
          </span>
          <div className="h-[1px] w-[104px] bg-[linear-gradient(to_right,#6BCEFF,#0c007a,#AA3DAD,#FF6136,#FFE366)] rounded-full" />
        </div>
        <h2 className="text-4xl md:text-5xl lg:text-[4rem] leading-tight tracking-tight text-sandstone-500">
          Seven layers.<br />One vertical stack.
        </h2>
        <p className="text-base text-[#4a4741] max-w-2xl mx-auto leading-relaxed">
          From intelligence-driven site selection through compounding
          network effects — every layer feeds the next, creating a moat
          no horizontal competitor can replicate.
        </p>
      </div>

        {/* Two column: text left, image right */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-10 md:gap-16 items-center">

                  return (
                    <div
                      key={`media-${layer.id}`}
                      className="absolute inset-0"
                      style={{
                        zIndex: index, // Sequential stacking so higher indexes always fade in OVER lower indexes
                        clipPath: isVisible ? "inset(0% 0 0 0)" : "inset(100% 0 0 0)",
                        WebkitClipPath: isVisible ? "inset(0% 0 0 0)" : "inset(100% 0 0 0)",
                        transition: "clip-path 1.2s cubic-bezier(0.19, 1, 0.22, 1), -webkit-clip-path 1.2s cubic-bezier(0.19, 1, 0.22, 1)",
                        pointerEvents: isVisible ? "auto" : "none",
                      }}
                    >
                      <div className="size-full overflow-hidden" style={{ height: "100%" }}>
                        <div
                          className="relative size-full"
                          style={{
                            height: "100%",
                            transform: isVisible ? "scale(1)" : "scale(1.2)",
                            transition: "transform 1.2s cubic-bezier(0.19, 1, 0.22, 1)",
                          }}
                        >
                          {layer.media.type === "video" ? (
                            <video
                              autoPlay
                              loop
                              muted
                              playsInline
                              className="size-full object-cover object-center w-full h-full"
                              style={{ maskImage: "none", backfaceVisibility: "hidden" }}
                            >
                              <source
                                type="video/mp4"
                                src={layer.media.src}
                              />
                            </video>
                          ) : (
                            <img
                              alt={layer.title}
                              src={layer.media.src}
                              className="size-full object-cover object-center w-full h-full"
                              style={{ maskImage: "none", backfaceVisibility: "hidden" }}
                            />
                          )}
                          <div className="absolute inset-0 bg-black/10 mix-blend-overlay"></div>
                        </div>
                      </div>
                    </div>
                  );
                })}

                {/* Scroll Indicator */}
                <div className={`absolute bottom-12 left-1/2 -translate-x-1/2 z-[100] flex flex-col items-center pointer-events-none transition-opacity duration-500 ${activeIndex === layerRows.length - 1 ? 'opacity-0' : 'opacity-100'}`}>
                  <div className="w-6 h-10 border-2 border-white rounded-full flex justify-center p-1.5 shadow-[0_0_15px_rgba(0,0,0,0.5)] backdrop-blur-[2px]">
                    <div className="text-white animate-mouse-scroll">
                      <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round">
                        <path d="M12 5v14M19 12l-7 7-7-7" />
                      </svg>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </RevealOnScroll>

          {/* Right: Image */}
          <RevealOnScroll delay="delay-100">
            <div className="relative w-full aspect-square md:aspect-auto md:h-[560px] bg-slate-800/40 backdrop-blur-md rounded-2xl overflow-hidden border border-white/10 shadow-2xl">
              <img
                alt="Humanly Platform"
                loading="lazy"
                className="w-full h-full object-cover transition-transform duration-1000 hover:scale-105"
                src="/images/pexels-ron-lach-10037036.jpg"
              />
            </div>
          </RevealOnScroll>

        </div>

        {/* Bottom: Accordion cards with scroll + hover activation */}
        <div className="flex flex-col gap-3">
          {layerRows.map((item, index) => {
            const isActive = activeIndex === index;
            return (
              <RevealOnScroll
                key={item.id}
                delay={`delay-${(index % 5 + 1) * 100}` as any}
              >
                {/* ↓ data-index + onMouseEnter + scroll-reveal-card from the later version */}
                <div
                  data-index={index}
                  onMouseEnter={() => setActiveIndex(index)}
                  className={clsx(
                    "group scroll-reveal-card backdrop-blur-[32px] border p-2 rounded-2xl transition-all duration-500 shadow-lg cursor-pointer",
                    isActive
                      ? "bg-white/30 border-blue-500/30 scale-[1.01] shadow-xl"
                      : "bg-[#4A4741]/10 border-[#4A4741]/10 hover:bg-white/20 hover:border-white/20 hover:scale-[1.005]"
                  )}
                >
                  <div className="w-full p-3 md:p-5 flex items-center justify-between gap-4 md:gap-6 text-left rounded-lg">
                    <div className="flex flex-col gap-1">
                      <span className="text-[0.65rem] md:text-xs font-medium tracking-wider uppercase text-[#8f96a3]">
                        {item.eyebrow}
                      </span>
                      {/* ↓ group-hover:text-blue-500 from the later version */}
                      <h3
                        className={clsx(
                          "text-lg md:text-xl font-medium transition-colors duration-300",
                          isActive
                            ? "text-blue-600"
                            : "text-sandstone-500 group-hover:text-blue-500"
                        )}
                      >
                        {item.title}
                      </h3>
                    </div>
                  </div>

                  <div
                    className={clsx(
                      "overflow-hidden transition-all duration-500 ease-in-out px-3 md:px-5",
                      isActive
                        ? "max-h-48 opacity-100 pb-4"
                        : "max-h-0 opacity-0"
                    )}
                  >
                    <div className="mb-4 md:mb-6">
                      <div className="inline-flex px-4 py-1.5 bg-black/15 backdrop-blur-2xl saturate-[180%] border border-white/20 rounded-full shadow-[0_4px_12px_rgba(0,0,0,0.2)]">
                        <span className="text-white text-[10px] md:text-xs font-bold tracking-[0.2em] uppercase">
                          {layer.eyebrow}
                        </span>
                      </div>
                    </div>
                    <h2 
                      className="text-heading-lg md:text-heading-xl lg:text-heading-3xl text-left text-white font-sans mb-4 md:mb-6 leading-tighter font-normal tracking-tighter"
                      style={{ textShadow: "0 2px 16px rgba(0,0,0,0.8)" }}
                    >
                      {layer.title}
                    </h2>
                    <p 
                      className="text-left text-[#fefaef] font-sans font-normal text-lg md:text-xl leading-snug tracking-tighter lg:text-2xl"
                      style={{ textShadow: "0 2px 12px rgba(0,0,0,0.6)" }}
                    >
                      {layer.content}
                    </p>
                  </div>
                </div>
              </RevealOnScroll>
            );
          })}
        </div>

      </div>
    </section>
  );
};