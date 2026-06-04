"use client";

import React, { useState, useCallback, useRef } from "react";
import { motion, LayoutGroup } from "framer-motion";

const layerRows = [
  {
    id: "intelligence",
    eyebrow: "layer 0",
    title: "Intelligence",
    content:
      "AI-driven site selection, market analysis, and community design. Machine learning models evaluate 200+ data points per site.",
    media: { type: "image", src: "/images/AdobeStock_117288790.jpeg" },
  },
  {
    id: "layer1",
    eyebrow: "LAYER 1",
    title: "Land & Entitlement",
    content:
      "Strategic acquisition paired with municipal partnerships to secure entitlements, tax incentives, and below-market financing.",
    media: { type: "image", src: "/images/pexels-khwanchai-4175028.jpg" },
  },
  {
    id: "layer2",
    eyebrow: "LAYER 2",
    title: "Development",
    content:
      "A hybrid construction approach combining modular efficiency with traditional quality — reducing build timelines by 30% and costs by 20%.",
    media: { type: "image", src: "/images/AdobeStock_446591769.jpeg" },
  },
  {
    id: "layer3",
    eyebrow: "LAYER 3",
    title: "Operations",
    content:
      "HumanlyOS® manages leasing, maintenance, resident communications, and compliance — reducing cost per unit while improving resident satisfaction.",
    media: { type: "image", src: "/images/AdobeStock_481834806.jpeg" },
  },
  {
    id: "layer4",
    eyebrow: "LAYER 4",
    title: "Services",
    content:
      "Eight integrated service categories transacted through the Humanly platform — healthcare, childcare, education, food, legal, mobility, financial wellness, and workforce.",
    media: { type: "image", src: "/images/AdobeStock_316858529.jpeg" },
  },
  {
    id: "layer5",
    eyebrow: "LAYER 5",
    title: "Financial",
    content:
      "HumanlyPay™ delivers embedded credit building, savings, micro-lending, and insurance products directly to residents.",
    media: { type: "image", src: "/images/AdobeStock_456566813.jpeg" },
  },
  {
    id: "layer6",
    eyebrow: "LAYER 6",
    title: "Compounding",
    content:
      "Every resident interaction generates anonymized data that improves service delivery and creates compounding network effects across the ecosystem.",
    media: { type: "image", src: "/images/AdobeStock_815248903.jpeg" },
  },
  {
    id: "capture-rev",
    eyebrow: "CAPTURE",
    title: "Revenue Aggregation",
    content:
      "Five discrete revenue streams — NOI, service fees, financial product margins, data licensing, and platform fees — compound into a diversified return profile.",
    media: { type: "image", src: "/images/AdobeStock_331233554.jpeg" },
  },
  {
    id: "moat",
    eyebrow: "MOAT",
    title: "Vertical Integration",
    content:
      "By owning the land, building, operating system, services, and financial layer, Humanly creates a defensible moat no horizontal competitor can replicate.",
    media: {
      type: "image",
      src: "/images/Aerial_image_of_Schwerin_Castle_(view_from_the_east).jpg",
    },
  },
];

export const PlatformSection = () => {
  const [activeLayer, setActiveLayer] = useState(layerRows[0].id);

  // ✅ Debounce mouse enter to avoid 9 rapid re-renders on fast sweeps
  const timerRef = useRef<ReturnType<typeof setTimeout> | null>(null);
  const handleMouseEnter = useCallback((id: string) => {
    if (timerRef.current) clearTimeout(timerRef.current);
    timerRef.current = setTimeout(() => setActiveLayer(id), 60);
  }, []);

  return (
    <section className="relative w-full overflow-clip text-sandstone-500 py-16 md:py-24">
      {/* Top Intro Section */}
      <div className="max-w-[1440px] mx-auto px-6 md:px-12 lg:px-16 relative z-10 w-full mb-16 md:mb-24">
        <div className="flex flex-col items-center text-center">
          <div className="flex flex-col items-center gap-2 mb-6">
            <p className="text-[11px] font-bold tracking-[0.2em] uppercase text-[#A8A5A0]">
              THE PLATFORM
            </p>
            <div className="h-[1px] w-[72px] bg-[linear-gradient(to_right,#6BCEFF,#0c007a,#AA3DAD,#FF6136,#FFE366)] rounded-full"></div>
          </div>
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold font-cormorant text-sandstone-500 leading-[1.1] tracking-tight max-w-4xl">
            Seven Layers.
            <br />
            One Vertical Stack.
          </h2>
          <p className="mt-6 text-lg text-sandstone-500/70 max-w-3xl mx-auto leading-relaxed font-albert">
            From intelligence-driven site selection through compounding network
            effects — every layer feeds the next, creating a moat no horizontal
            competitor can replicate.
          </p>
        </div>
      </div>

      {/* Accordion Container */}
      <div className="max-w-[1380px] mx-auto px-2 md:px-6 lg:px-8 pb-12">
        {/*
         * ✅ LayoutGroup ensures sibling panels coordinate their FLIP
         *    animations together as a single layout group
         */}
        <LayoutGroup>
          <div className="w-full flex flex-col md:flex-row h-[90vh] md:h-[75vh] gap-2 md:gap-3 lg:gap-4">
            {layerRows.map((layer, index) => {
              const isActive = activeLayer === layer.id;

              return (
                <motion.div
                  key={layer.id}
                  layout // ✅ FLIP animation — GPU transform only, zero reflow
                  onMouseEnter={() => handleMouseEnter(layer.id)}
                  onClick={() => setActiveLayer(layer.id)}
                  className={`relative rounded-2xl md:rounded-3xl overflow-hidden cursor-pointer ${
                    isActive ? "shadow-2xl" : "hover:opacity-80"
                  }`}
                  style={{
                    // ✅ CSS controls the target flex state;
                    //    Framer Motion's FLIP animates the transition
                    flexGrow: isActive ? 10 : 1,
                    flexShrink: 1,
                    flexBasis: 0,
                    minHeight: "50px",
                    minWidth: "40px",
                    willChange: "transform", // ✅ GPU layer hint
                  }}
                  transition={{
                    type: "spring",
                    stiffness: 300,
                    damping: 30,
                  }}
                >
                  {/* Background Media */}
                  <div className="absolute inset-0 w-full h-full bg-black">
                    {layer.media.type === "video" ? (
                      <video
                        autoPlay
                        loop
                        muted
                        playsInline
                        src={layer.media.src}
                        className="size-full object-cover object-center w-full h-full opacity-70"
                      />
                    ) : (
                      <img
                        alt={layer.title}
                        src={layer.media.src}
                        // ✅ Only load the first image eagerly; lazy-load the rest
                        loading={index === 0 ? "eager" : "lazy"}
                        decoding="async"
                        className="size-full object-cover object-center w-full h-full opacity-70"
                      />
                    )}
                    {/* Overlay */}
                    <div
                      className={`absolute inset-0 bg-gradient-to-t transition-opacity duration-500 ${
                        isActive
                          ? "from-black/90 via-black/40 to-black/10"
                          : "from-black/70 to-black/30"
                      }`}
                    ></div>
                  </div>

                  {/* Inactive State: Vertical Text on Desktop, Horizontal on Mobile */}
                  <div
                    className={`absolute inset-0 flex flex-col items-center justify-center md:justify-end pb-0 md:pb-8 transition-opacity duration-300 ${
                      isActive ? "opacity-0 pointer-events-none" : "opacity-100 delay-100"
                    }`}
                  >
                    <span
                      className="text-white/80 font-bold tracking-widest uppercase text-[10px] md:text-xs transform md:-rotate-180 whitespace-nowrap hidden md:block"
                      style={{ writingMode: "vertical-rl" }}
                    >
                      {layer.eyebrow}
                    </span>
                    <span className="text-white/80 font-bold tracking-widest uppercase text-[10px] whitespace-nowrap block md:hidden">
                      {layer.eyebrow}
                    </span>
                  </div>

                  {/* Active Content */}
                  <div
                    className={`absolute inset-0 p-6 md:p-8 lg:p-12 flex flex-col justify-end text-white transition-opacity duration-500 ${
                      isActive
                        ? "opacity-100 delay-150"
                        : "opacity-0 pointer-events-none"
                    }`}
                  >
                    <div className="max-w-2xl">
                      <div className="flex items-center gap-3 mb-3">
                        <span className="px-4 py-1.5 bg-white/20 backdrop-blur-md rounded-full text-[10px] md:text-xs font-bold tracking-[0.15em] uppercase text-white border border-white/20 shadow-sm">
                          {layer.eyebrow}
                        </span>
                      </div>
                      <h3 className="text-3xl md:text-4xl lg:text-5xl font-bold font-cormorant mb-3 md:mb-4 leading-tight drop-shadow-md">
                        {layer.title}
                      </h3>
                      <p className="text-sm md:text-base lg:text-lg text-white/90 font-albert leading-relaxed drop-shadow-md hidden md:block">
                        {layer.content}
                      </p>
                    </div>
                  </div>
                </motion.div>
              );
            })}
          </div>
        </LayoutGroup>
      </div>
    </section>
  );
};