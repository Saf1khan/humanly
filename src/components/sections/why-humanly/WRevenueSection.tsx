"use client";
import React, { useState, useEffect, useRef } from "react";

const layers = [
  {
    id: "layer-1",
    num: "Layer 1",
    title: "Real Estate Operations",
    desc: "NOI from attainable housing serving workforce households in the 80–120% AMI segment.",
    color: "#6E7C8D",
    images: ["/images/pexels-simon-steiner-1108932161-28738232.jpg"],
  },
  {
    id: "layer-2",
    num: "Layer 2",
    title: "Service Revenue",
    desc: "Circle of Services® transaction fees across healthcare, food, wellness, work, transportation, education, entertainment, and general services.",
    color: "#A3B2C3",
    images: ["/images/pexels-spoton-pos-2160258094-37594419.jpg"],
  },
  {
    id: "layer-3",
    num: "Layer 3",
    title: "Financial Products",
    desc: "HumanlyPay™ supports credit building, savings, insurance, and embedded resident financial progression.",
    color: "#6E7C8D",
    images: ["/images/pexels-tima-miroshnichenko-4841700.jpg"],
  },
  {
    id: "layer-4",
    num: "Layer 4",
    title: "Data Intelligence",
    desc: "Anonymized community insights, operational learning loops, and municipal or partner intelligence products.",
    color: "#A3B2C3",
    images: ["/images/pexels-yankrukov-8867178.jpg"],
  },
  {
    id: "layer-5",
    num: "Layer 5",
    title: "Platform Licensing",
    desc: "HumanlyOS® can be licensed to third-party operators, municipalities, and future development partners.",
    color: "#6E7C8D",
    images: ["/images/pexels-owen-outdoors-409204690-26707855.jpg"],
  },
];

export const WRevenueSection = () => {
  const [activeIndex, setActiveIndex] = useState(0);
  const [mounted, setMounted] = useState(false);
  const groupRefs = useRef<(HTMLDivElement | null)[]>([]);
  const isClickScrolling = useRef(false);

  useEffect(() => {
    setMounted(true);
    const observer = new IntersectionObserver(
      (entries) => {
        // Only update active index if we aren't currently middle of a click-scroll
        if (isClickScrolling.current) return;

        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            const index = Number(entry.target.getAttribute("data-index"));
            setActiveIndex(index);
          }
        });
      },
      {
        // Broadened the hit area slightly so the observer slice is taller than the gap between images
        rootMargin: "-20% 0px -50% 0px",
        threshold: 0,
      },
    );

    groupRefs.current.forEach((ref) => {
      if (ref) observer.observe(ref);
    });

    return () => observer.disconnect();
  }, []);

  const handleAccordionClick = (idx: number) => {
    isClickScrolling.current = true;
    setActiveIndex(idx);

    const target = groupRefs.current[idx];
    if (target) {
      const targetTop = target.getBoundingClientRect().top + window.scrollY;
      const topOffset = targetTop - 100; // 100 matches the pt-[100px] or sticky top
      window.scrollTo({ top: topOffset, behavior: "smooth" });
    }

    // Resume observer after scroll animation finishes
    setTimeout(() => {
      isClickScrolling.current = false;
    }, 1000);
  };

  return (
    <section className="w-full text-[#111111] font-['Albert_Sans',-apple-system,BlinkMacSystemFont,sans-serif]">
      <div className="w-full px-[32px]">
        {/* Desktop View: Exact replica of reference layout */}
        <div className="desktop hidden lg:flex flex-row items-start gap-[105px] pt-[100px]">
          {/* LEFT: Sticky Column */}
          <div className="left sticky top-[100px] basis-[55%] self-start pb-[100px]">
            <p className="text-[11px] font-bold uppercase tracking-[0.15em] text-[#6E7C8D] mb-4">
              Designed Revenue Model
            </p>
            <h2
              className={`text-[56px] leading-[52px] tracking-[-0.8px] font-serif font-light not-italic mb-14 transition-opacity duration-700 ease-out ${
                mounted ? "opacity-100" : "opacity-0"
              }`}
            >
              Five revenue layers.
              <br />
              <span className="text-[#5F646B]/60 not-italic">
                One integrated platform.
              </span>
            </h2>

            <div className="accordions flex flex-col gap-[30px]">
              {layers.map((layer, idx) => {
                const isActive = activeIndex === idx;
                return (
                  <div
                    key={layer.id}
                    onClick={() => handleAccordionClick(idx)}
                    className={`group cursor-pointer border-b border-[rgba(17,17,17,0.08)] pb-4 transition-all duration-500 ease-[cubic-bezier(0.4,0,0.2,1)] ${
                      isActive ? "opacity-100" : "opacity-40"
                    }`}
                  >
                    <h4
                      className={`text-[14px] uppercase font-semibold tracking-[0.1em] transition-all duration-300 ease-linear text-[#111111] ${
                        isActive ? "pl-[48px]" : "pl-0"
                      }`}
                    >
                      <span style={{ color: layer.color }}>{layer.num}</span> —{" "}
                      {layer.title}
                    </h4>
                    <div
                      className={`overflow-hidden transition-all duration-300 ease-linear ${
                        isActive ? "max-h-40 pt-4 pl-[48px]" : "max-h-0"
                      }`}
                    >
                      <p className="text-[16px] leading-[22px] text-[#5F646B] max-w-[500px]">
                        {layer.desc}
                      </p>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>

          {/* RIGHT: Scroll Column */}
          <div className="right flex-1 flex flex-col">
            {layers.map((layer, idx) => (
              <div
                key={layer.id}
                id={layer.id}
                data-index={idx}
                ref={(el) => {
                  groupRefs.current[idx] = el;
                }}
                className="flex flex-col mb-[40px]"
              >
                {layer.images.map((img, i) => (
                  <img
                    key={i}
                    src={img}
                    alt=""
                    className="w-full aspect-[4/5] object-cover"
                  />
                ))}
              </div>
            ))}
          </div>
        </div>

        {/* Mobile View... */}
        <div className="mobile flex flex-col gap-10 pt-[50px] lg:hidden">
          <div>
            <p className="text-[11px] font-bold uppercase tracking-[0.15em] text-[#6E7C8D] mb-4">
              Designed Revenue Model
            </p>
            <h2
              className={`font-serif font-normal text-[clamp(28px,5vw,44px)] leading-[1.1] tracking-[-0.8px] text-[#111111] mb-4 transition-opacity duration-700 ease-out ${
                mounted ? "opacity-100" : "opacity-0"
              }`}
            >
              Five revenue layers.
              <br />
              <span className="text-[#5F646B]/60">
                One integrated platform.
              </span>
            </h2>
            <p className="font-normal text-[16px] leading-[24px] text-[#5F646B]">
              Unlike a traditional developer that captures only one value
              stream, Humanly is designed to compound value across the built
              environment, daily service flows, and platform intelligence.
            </p>
          </div>

          <div className="flex flex-col gap-[40px]">
            {layers.map((layer) => (
              <div key={layer.id} className="flex flex-col gap-4">
                <div className="heading w-full border-b border-[rgba(17,17,17,0.08)] pb-[10px]">
                  <h4 className="font-semibold uppercase text-[14px] leading-[16px] tracking-[0.1em] text-[#111111]">
                    <span className="mr-2" style={{ color: layer.color }}>
                      {layer.num}
                    </span>{" "}
                    {layer.title}
                  </h4>
                </div>
                <p className="font-normal text-[15px] leading-[22px] text-[#5F646B]">
                  {layer.desc}
                </p>
                <div className="flex flex-col gap-4 mt-2">
                  {layer.images.map((img, imgIdx) => (
                    <img
                      key={imgIdx}
                      loading="lazy"
                      src={img}
                      className="w-full aspect-[4/5] object-cover"
                      alt={layer.title}
                    />
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};
