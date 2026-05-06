"use client";

import React, { useEffect, useRef, useState } from "react";

const layerRows = [
  {
    id: "intelligence",
    eyebrow: "CAPTURE",
    title: "Intelligence",
    content:
      "AI-driven site selection, market analysis, and community design. Machine learning models evaluate 200+ data points per site.",
    media: { type: "video", src: "/images/5031099-uhd_3840_2160_30fps.mp4" }
  },
  {
    id: "layer1",
    eyebrow: "LAYER 1",
    title: "Land & Entitlement",
    content:
      "Strategic acquisition paired with municipal partnerships to secure entitlements, tax incentives, and below-market financing.",
    media: { type: "image", src: "/images/pexels-anastasia-shuraeva-8466021.jpg" }
  },
  {
    id: "layer2",
    eyebrow: "LAYER 2",
    title: "Development",
    content:
      "A hybrid construction approach combining modular efficiency with traditional quality — reducing build timelines by 30% and costs by 20%.",
    media: { type: "image", src: "/images/pexels-cedric-fauntleroy-4269934.jpg" }
  },
  {
    id: "layer3",
    eyebrow: "LAYER 3",
    title: "Operations",
    content:
      "HumanlyOS® manages leasing, maintenance, resident communications, and compliance — reducing cost per unit while improving resident satisfaction.",
    media: { type: "image", src: "/images/pexels-cflaten-5767823.jpg" }
  },
  {
    id: "layer4",
    eyebrow: "LAYER 4",
    title: "Services",
    content:
      "Eight integrated service categories transacted through the Humanly platform — healthcare, childcare, education, food, legal, mobility, financial wellness, and workforce.",
    media: { type: "image", src: "/images/pexels-cottonbro-7484164.jpg" }
  },
  {
    id: "layer5",
    eyebrow: "LAYER 5",
    title: "Financial",
    content:
      "HumanlyPay™ delivers embedded credit building, savings, micro-lending, and insurance products directly to residents.",
    media: { type: "image", src: "/images/pexels-enginakyurt-19996231.jpg" }
  },
  {
    id: "layer6",
    eyebrow: "LAYER 6",
    title: "Compounding",
    content:
      "Every resident interaction generates anonymized data that improves service delivery and creates compounding network effects across the ecosystem.",
    media: { type: "image", src: "/images/pexels-hiroom-17227606.jpg" }
  },
  {
    id: "capture-rev",
    eyebrow: "CAPTURE",
    title: "Revenue Aggregation",
    content:
      "Five discrete revenue streams — NOI, service fees, financial product margins, data licensing, and platform fees — compound into a diversified return profile.",
    media: { type: "video", src: "/images/7982599-hd_1920_1080_30fps.mp4" }
  },
  {
    id: "moat",
    eyebrow: "MOAT",
    title: "Vertical Integration",
    content:
      "By owning the land, building, operating system, services, and financial layer, Humanly creates a defensible moat no horizontal competitor can replicate.",
    media: { type: "image", src: "/images/pexels-ron-lach-10037036.jpg" }
  },
];

export const PlatformSection = () => {
  const containerRef = useRef<HTMLDivElement>(null);
  const [activeIndex, setActiveIndex] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      if (!containerRef.current) return;
      
      const { top } = containerRef.current.getBoundingClientRect();
      const scrollY = -top;
      const sectionHeight = window.innerHeight;
      
      if (scrollY < 0) {
        setActiveIndex(0);
      } else {
        const index = Math.round(scrollY / sectionHeight);
        setActiveIndex(Math.max(0, Math.min(index, layerRows.length - 1)));
      }
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    handleScroll(); // Initial check
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
          <span className="text-[#A8A5A0] text-xs font-normal tracking-widest uppercase">
            THE PLATFORM
          </span>
          <div className="h-[1px] w-[104px] bg-[linear-gradient(to_right,#6BCEFF,#0c007a,#AA3DAD,#FF6136,#FFE366)] rounded-full" />
        </div>
        <h2 className="text-4xl md:text-5xl lg:text-[4rem] leading-tight font-medium tracking-tight text-sandstone-500">
          Seven layers.<br />One vertical stack.
        </h2>
        <p className="text-base text-[#4a4741] max-w-2xl mx-auto leading-relaxed font-normal">
          From intelligence-driven site selection through compounding
          network effects — every layer feeds the next, creating a moat
          no horizontal competitor can replicate.
        </p>
      </div>

      {/* Sticky Scroll Section */}
      <div ref={containerRef} className="relative w-full" style={{ height: `${layerRows.length * 100}vh` }}>
        <div className="sticky top-0 h-screen w-full overflow-hidden flex items-center bg-[#fefaef]">
          <div
            className="w-full gap-y-14 gridContainerV3 h-full items-center"
            data-cy="layout-grid"
            style={{
              "--col-start-main": "main-start",
              "--col-end-main": "main-end",
              "--col-end-8": "9",
              "--radius-2xl": "1rem",
            } as React.CSSProperties}
          >
            {/* Full-Width Background Media Container */}
            <div
              className="px-4 md:px-6 lg:px-8 h-[70vh] md:h-[80vh] w-full"
              data-cy="gridItem_div"
              style={{ gridColumn: "full-start / full-end", gridRow: "1 / -1" }}
            >
              <div
                className="relative h-full w-full overflow-hidden rounded-lg md:rounded-3xl"
                data-cy="pop-highlighted-features-media"
                style={{
                  position: "relative",
                  overflow: "hidden",
                  backgroundColor: "#f5f5f5", // The base frame placeholder color
                }}
              >
                {layerRows.map((layer, index) => {
                  // Any layer that is the current or a past layer remains opaque
                  const isVisible = activeIndex >= index;

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
                      <div className="size-full overflow-hidden bg-black" style={{ height: "100%" }}>
                        <div
                          className="relative size-full bg-black"
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
                              src={layer.media.src}
                              className="size-full object-cover object-center w-full h-full"
                              style={{ maskImage: "none", backfaceVisibility: "hidden" }}
                            />
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

            {/* Left Side Text Content Overlaid */}
            <div
              className="col-start-main col-end-main lg:col-end-11 xl:col-end-8 relative h-full flex items-center z-10 px-6 md:px-12 lg:px-16"
              data-cy="gridItem_div"
              style={{ gridRow: "1 / -1" }}
            >
              {layerRows.map((layer, index) => {
                const isActive = activeIndex === index;
                const isPast = activeIndex > index;
                const isFuture = activeIndex < index;

                return (
                  <div
                    key={`text-${layer.id}`}
                    className="absolute inset-0 flex flex-col justify-center transition-all duration-1000 ease-[cubic-bezier(0.25,1,0.5,1)]"
                    style={{
                      opacity: isActive ? 1 : 0,
                      filter: isActive ? "blur(0px)" : "blur(5px)",
                      transform: isActive ? "translateY(0px)" : isFuture ? "translateY(32px)" : "translateY(-32px)",
                      pointerEvents: isActive ? "auto" : "none",
                      zIndex: isActive ? 10 : 0,
                    }}
                    data-cy="pop-highlighted-features-content"
                  >
                    <div className="mb-4 md:mb-6">
                      <div className="inline-flex px-4 py-1.5 bg-black/15 backdrop-blur-2xl saturate-[180%] border border-white/20 rounded-full shadow-[0_4px_12px_rgba(0,0,0,0.2)]">
                        <span className="text-white text-[10px] md:text-xs font-normal tracking-[0.2em] uppercase">
                          {layer.eyebrow}
                        </span>
                      </div>
                    </div>
                    <h2 
                      className="text-heading-lg md:text-heading-xl lg:text-heading-3xl text-left text-white mb-4 md:mb-6 leading-relaxed font-medium"
                      style={{ textShadow: "0 2px 16px rgba(0,0,0,0.8)" }}
                    >
                      {layer.title}
                    </h2>
                    <p 
                      className="text-left text-[#fefaef] font-normal text-lg md:text-xl leading-relaxed lg:text-2xl"
                      style={{ textShadow: "0 2px 12px rgba(0,0,0,0.6)" }}
                    >
                      {layer.content}
                    </p>
                  </div>
                );
              })}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};