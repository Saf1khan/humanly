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

      sections.forEach((section, i) => {
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

          if (card) {
            tl.to(card, {
              scale: 0.6,              // Shrinks to 60%
              opacity: 0.2,            // Fades out
              ease: "none"
            });
          }
        }
      });
    }, containerRef);

    return () => ctx.revert();
  }, []);

  return (
    <div className="wh-prob-wrapper" ref={containerRef}>
      {problems.map((p, i) => (
        <section key={i} className="wh-prob-pin-container">
          <div className="wh-prob-main">
            <div className="wh-prob-grid">
              
              {/* Left Column: Info */}
              <div className="wh-prob-info">
                <div className="wh-prob-info-top">
                   <div className="wh-prob-stats-top">
                     <p className="wh-prob-stat-line">from <span>$ {p.stat1.value}</span> /metric</p>
                     <p className="wh-prob-stat-line">Impact range <strong>{p.stat2.value}</strong> level</p>
                     <p className="wh-prob-stat-line">System status <strong>{p.stat3.value}</strong></p>
                   </div>
                </div>

                <div className="wh-prob-info-bottom">
                  <div className="wh-prob-title-section">
                    <p className="wh-prob-count"><span>{p.id}</span> /04</p>
                    <h3 className="wh-prob-title">{p.title}</h3>
                    <p className="wh-prob-tagline">{p.tagline}</p>
                  </div>
                  
                  <div className="wh-prob-actions">
                    <button className="wh-prob-btn wh-prob-btn-primary">DETAILS</button>
                    <button className="wh-prob-btn wh-prob-btn-outline">ANALYSIS</button>
                  </div>
                </div>
              </div>

              {/* Right Column: Slider/Image */}
              <div className="wh-prob-slider">
                <div className="wh-prob-image-wrapper">
                  <img src={p.image} alt={p.title} />
                  <div className="wh-prob-badge">
                    <span className="wh-prob-badge-number">{p.badge}</span>
                    <p>{p.badgeLabel}</p>
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
