"use client";
import React, { useLayoutEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

const problems = [
  {
    id: "01",
    title: "Fragmented Development",
    tagline: "Siloed housing systems weaken outcomes.",
    description: "Housing, services, financing, and operations are built in silos. Every handoff adds cost, loses intelligence, and weakens resident outcomes.",
    stat1: { label: "Cost Inefficiency", value: "30%" },
    stat2: { label: "Intelligence Loss", value: "High" },
    stat3: { label: "Handover Gaps", value: "Frequent" },
    image: "/images/AdobeStock_194151140.jpeg",
    badge: "30%",
    badgeLabel: "more expensive"
  },
  {
    id: "02",
    title: "Affordability Crisis",
    tagline: "Workforce families are routinely priced out.",
    description: "Workforce families earning 80–120% AMI are routinely priced out of quality housing options in the communities that rely on them.",
    stat1: { label: "AMI Target", value: "80-120%" },
    stat2: { label: "Housing Gap", value: "7M+" },
    stat3: { label: "Price Increase", value: "12%/yr" },
    image: "/images/AdobeStock_288039334.jpeg",
    badge: "120%",
    badgeLabel: "AMI average"
  },
  {
    id: "03",
    title: "Disconnected Services",
    tagline: "Residents navigate providers with no unified access.",
    description: "Residents must navigate disconnected providers for healthcare, education, food, transport, and support with no unified point of access.",
    stat1: { label: "Time Wasted", value: "15hr/mo" },
    stat2: { label: "Trust Gap", value: "Widening" },
    stat3: { label: "Unified Access", value: "0%" },
    image: "/images/AdobeStock_289876368.jpeg",
    badge: "15h",
    badgeLabel: "time lost"
  },
  {
    id: "04",
    title: "No Wealth Building",
    tagline: "Traditional rentership extracts value every month.",
    description: "Traditional rentership extracts value every month without helping residents build credit, savings, financial literacy, or long-term security.",
    stat1: { label: "Wealth Built", value: "$0" },
    stat2: { label: "Equity Gap", value: "$240k" },
    stat3: { label: "Savings Rate", value: "Neg." },
    image: "/images/AdobeStock_1909482653.jpeg",
    badge: "0$",
    badgeLabel: "equity built"
  }
];

export const WProblemSection = () => {
  const containerRef = useRef<HTMLDivElement>(null);

  useLayoutEffect(() => {
    const ctx = gsap.context(() => {
      const sections = gsap.utils.toArray<HTMLElement>(".wh-prob-pin-container");

      sections.forEach((section: HTMLElement, i: number) => {
        const card = section.querySelector(".wh-prob-main");
        const isLast = i === sections.length - 1;

        // We only pin and shrink if there's a NEXT card to overlap this one
        if (!isLast) {
          const tl = gsap.timeline({
            scrollTrigger: {
              trigger: section,
              start: "top top",      // Start shrinking when card hits the top
              end: "+=100%",         // Finish shrinking when the next card is fully up
              scrub: true,           // Link animation to scroll position
              pin: true,             // Keep the card fixed
              pinSpacing: false      // Allow next card to overlap
            }
          });

          if (tl.scrollTrigger) {
            const spacer = (tl.scrollTrigger as any).spacer;
            if (spacer) {
              spacer.style.zIndex = String(i + 10);
            }
          }

          if (card) {
            tl.to(card, {
              scale: 0.6,              // Shrinks to 60%
              autoAlpha: 0,            // Fades out and sets visibility: hidden to completely prevent background text leaks
              ease: "none"
            });
          }
        }
      });
    }, containerRef);

    return () => ctx.revert();
  }, []);

  return (
    <div className="wh-prob-wrapper w-full bg-[#f0edeb]" ref={containerRef}>
      {problems.map((p, i) => (
        <section 
          key={i} 
          className="wh-prob-pin-container h-[100vh] w-full flex items-center justify-center relative overflow-hidden [perspective:1000px] max-[900px]:h-auto max-[900px]:min-h-[100vh] max-[900px]:py-10"
          style={{ zIndex: i + 10 }}
        >
          <div 
            className={`wh-prob-main w-[95%] max-w-[1787px] h-[85vh] bg-white rounded-[40px] overflow-hidden border border-[#e0e4e5] ${i > 0 ? "shadow-[0_-20px_80px_rgba(0,0,0,0.12),0_40px_100px_rgba(0,0,0,0.06)]" : "shadow-[0_40px_100px_rgba(0,0,0,0.06)]"} [transform-origin:center_center] [will-change:transform,opacity] relative max-[900px]:h-auto max-[900px]:rounded-[24px]`}
            style={{ zIndex: i + 10 }}
          >
            <div className="wh-prob-grid grid grid-cols-[repeat(24,1fr)] h-full gap-6 max-[900px]:flex max-[900px]:flex-col">

              {/* Left Column: Info */}
              <div className="wh-prob-info [grid-column:1/span_8] max-[1200px]:[grid-column:1/span_10] flex flex-col justify-between py-[60px] pl-[60px] pr-0 max-[1200px]:p-10 max-[900px]:p-10 max-[900px]:order-2">
                <div className="wh-prob-info-top flex flex-col gap-6">
                  <div className="wh-prob-stats-top flex flex-col gap-4">
                    <p className="wh-prob-stat-line text-[15px] text-[#827e7a] m-0">
                      from <span className="text-[22px] font-bold text-[#ff7e5d] ml-1">$ {p.stat1.value}</span> /metric
                    </p>
                    <p className="wh-prob-stat-line text-[15px] text-[#827e7a] m-0">
                      Impact range <strong className="text-[#111111] font-bold">{p.stat2.value}</strong> level
                    </p>
                    <p className="wh-prob-stat-line text-[15px] text-[#827e7a] m-0">
                      System status <strong className="text-[#111111] font-bold">{p.stat3.value}</strong>
                    </p>
                  </div>
                </div>

                <div className="wh-prob-info-bottom flex flex-col gap-10">
                  <div className="wh-prob-title-section flex flex-col gap-3">
                    <p className="wh-prob-count text-base font-semibold text-[#827e7a] tracking-[0.15em] uppercase">
                      <span className="text-[#ff7e5d]">{p.id}</span> /04
                    </p>
                    <h3 className="wh-prob-title text-[clamp(36px,4vw,56px)] font-extrabold leading-[1.05] tracking-[-2px] text-[#111111] m-0">{p.title}</h3>
                    <p className="wh-prob-tagline text-lg font-medium text-[#827e7a] leading-normal max-w-[90%]">{p.tagline}</p>
                  </div>

                  <div className="wh-prob-actions flex gap-3 mt-5">
                    <button className="wh-prob-btn px-8 py-4 rounded-[100px] text-[13px] font-bold tracking-[0.08em] uppercase transition-all duration-300 ease-[cubic-bezier(0.16,1,0.3,1)] cursor-pointer bg-[#ff7e5d] text-white border-none hover:bg-[#111111] hover:-translate-y-[2px]">DETAILS</button>
                    <button className="wh-prob-btn px-8 py-4 rounded-[100px] text-[13px] font-bold tracking-[0.08em] uppercase transition-all duration-300 ease-[cubic-bezier(0.16,1,0.3,1)] cursor-pointer bg-transparent border border-[#e0e4e5] text-[#111111] hover:bg-[#f0edeb] hover:border-[#111111]">ANALYSIS</button>
                  </div>
                </div>
              </div>

              {/* Right Column: Slider/Image */}
              <div className="wh-prob-slider [grid-column:9/span_16] max-[1200px]:[grid-column:11/span_14] w-full h-full relative overflow-hidden max-[900px]:h-[400px] max-[900px]:order-1">
                <div className="wh-prob-image-wrapper w-full h-full relative">
                  <img src={p.image} alt={p.title} className="w-full h-full object-cover" />
                  <div className="wh-prob-badge absolute bottom-10 left-10 bg-[#111111] text-white px-8 py-6 rounded-[24px] flex flex-col items-center min-w-[140px] shadow-[0_10px_30px_rgba(0,0,0,0.2)] max-[900px]:bottom-5 max-[900px]:left-5 max-[900px]:p-4 max-[900px]:min-w-[100px]">
                    <span className="wh-prob-badge-number text-[48px] font-extrabold leading-none text-[#ff7e5d] max-[900px]:text-[32px]">{p.badge}</span>
                    <p className="text-xs font-bold uppercase tracking-[0.1em] mt-2 text-center leading-normal opacity-90">{p.badgeLabel}</p>
                  </div>
                </div>
              </div>

            </div>
          </div>
        </section>
      ))}
    </div>
  );
};
