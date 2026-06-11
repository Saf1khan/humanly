"use client";

import React, { useState, useRef, useCallback } from "react";
import { motion, AnimatePresence } from "framer-motion";

// ─── Data ─────────────────────────────────────────────────────────────────────

const tabs = [
  {
    id: "acquisitions",
    label: "Acquisitions",
    phase: "Phase 01",
    headline: ["From finding land", "to knowing exactly", "what to build."],
    headlineAccent: "what to build.",
    accentColor: "#3E2242",
    body: "Humanly compresses the earliest, riskiest part of development by combining proprietary land intelligence with rapid design modelling.",
    heroImg: "/images/AdobeStock_176738514.jpeg",
    heroAlt: "Site acquisition aerial view",
    cards: [
      {
        num: "01",
        title: "Faster Discovery",
        desc: "AI surfaces off-market parcels that meet buy criteria and reduces dependence on expensive broker-driven sourcing.",
        img: "/images/AdobeStock_1011273017.jpeg",
      },
      {
        num: "02",
        title: "Design Clarity",
        desc: "Market intelligence feeds test-fit models and a repeatable kit of parts so the site is understood before capital is wasted.",
        img: "/images/AdobeStock_117288790.jpeg",
      },
      {
        num: "03",
        title: "Entitlement",
        desc: "Shared 3D visualizations align municipalities, planners, and communities earlier to build trust and reduce friction.",
        img: "/images/AdobeStock_129235823.jpeg",
      },
      {
        num: "04",
        title: "Disciplined Basis",
        desc: "Density and product mix are defined with precision, improving long-term value and reducing avoidable soft costs.",
        img: "/images/AdobeStock_152634981.jpeg",
      },
      {
        num: "05",
        title: "Feasibility Model",
        desc: "Instant financial pro formas and zoning checks run automatically to prove project viability before submitting offers.",
        img: "/images/AdobeStock_1909482653.jpeg",
      },
    ],
  },
  {
    id: "lease-up",
    label: "Lease-Up",
    phase: "Phase 02",
    headline: ["Transforming space", "into a vibrant", "community."],
    headlineAccent: "community.",
    accentColor: "#3E2242",
    body: "The Lease-Up engine drives rapid occupancy through high-fidelity marketing, immersive viewing, and digital workflows.",
    heroImg: "/images/AdobeStock_277652706.jpeg",
    heroAlt: "Lease-up marketing visual",
    cards: [
      {
        num: "01",
        title: "Immersive Tours",
        desc: "Photorealistic 3D environments allow prospective residents to experience their future home long before the first brick is laid.",
        img: "/images/AdobeStock_170131280.jpeg",
      },
      {
        num: "02",
        title: "Precision Targeting",
        desc: "Data-driven marketing clusters identify and engage the most qualified tenant profiles with surgical accuracy.",
        img: "/images/AdobeStock_170554793.jpeg",
      },
      {
        num: "03",
        title: "Digital Leasing",
        desc: "A streamlined, paperless workflow reduces approval times and provides a frictionless path from tour to move-in.",
        img: "/images/AdobeStock_167813129.jpeg",
      },
      {
        num: "04",
        title: "Brand Narrative",
        desc: "Cohesive visual storytelling establishes a premium market position and builds long-term community value.",
        img: "/images/AdobeStock_188223905.jpeg",
      },
      {
        num: "05",
        title: "Resident Onboarding",
        desc: "Digital move-in checklists and smart lock activations integrate seamlessly to deliver an unforgettable first-day experience.",
        img: "/images/AdobeStock_152634981.jpeg",
      },
    ],
  },
  {
    id: "management",
    label: "Management",
    phase: "Phase 03",
    headline: ["One platform.", "Permanent value.", "Compounding returns."],
    headlineAccent: "Compounding returns.",
    accentColor: "#3E2242",
    body: "Humanly operates the community as a connected system — improving service access, resident outcomes, and asset performance simultaneously.",
    heroImg: "/images/AdobeStock_1909482653.jpeg",
    heroAlt: "Management platform visual",
    cards: [
      {
        num: "01",
        title: "HumanlyOS®",
        desc: "The resident AI navigator manages access to services, while the community Digital Twin captures operational data to improve experience over time.",
        img: "/images/AdobeStock_176738514.jpeg",
      },
      {
        num: "02",
        title: "Asset Optimization",
        desc: "Real-time monitoring of energy, maintenance, and utility performance ensures institutional-scale efficiency and long-term value.",
        img: "/images/AdobeStock_188223905.jpeg",
      },
      {
        num: "03",
        title: "Recurring Revenue",
        desc: "Five discrete revenue streams — from NOI to platform fees — compound into a diversified and stable return profile.",
        img: "/images/AdobeStock_152634981.jpeg",
      },
      {
        num: "04",
        title: "The Moat",
        desc: "Every resident interaction generates anonymized data that improves service delivery and creates network effects across the ecosystem.",
        img: "/images/AdobeStock_129235823.jpeg",
      },
      {
        num: "05",
        title: "Ecosystem Data",
        desc: "Aggregated data streams optimize future community planning, design iterations, and utility procurement across the portfolio.",
        img: "/images/AdobeStock_1011273017.jpeg",
      },
    ],
  },
];

// ─── Card Slider ──────────────────────────────────────────────────────────────

interface Card {
  num: string;
  title: string;
  desc: string;
  img: string;
}

const CardSlider = ({ cards, accentColor }: { cards: Card[]; accentColor: string }) => {
  const [scrollIdx, setScrollIdx] = useState(0);
  const sliderRef = useRef<HTMLUListElement>(null);

  const handleScroll = useCallback(() => {
    if (!sliderRef.current) return;
    const container = sliderRef.current;
    const scrollLeft = container.scrollLeft;
    const items = container.querySelectorAll("li");
    if (items.length === 0) return;

    let closestIdx = 0;
    let minDiff = Infinity;
    items.forEach((item, idx) => {
      const itemLeft = (item as HTMLElement).offsetLeft;
      const diff = Math.abs(itemLeft - scrollLeft);
      if (diff < minDiff) {
        minDiff = diff;
        closestIdx = idx;
      }
    });

    setScrollIdx(closestIdx);
  }, []);

  const scrollTo = useCallback(
    (dir: "prev" | "next") => {
      if (!sliderRef.current) return;
      const container = sliderRef.current;
      const items = container.querySelectorAll("li");
      if (items.length === 0) return;

      const newIdx =
        dir === "next"
          ? Math.min(scrollIdx + 1, cards.length - 1)
          : Math.max(scrollIdx - 1, 0);

      const targetItem = items[newIdx] as HTMLElement;
      if (targetItem) {
        container.scrollTo({
          left: targetItem.offsetLeft - (newIdx === 0 ? 0 : 20),
          behavior: "smooth",
        });
        setScrollIdx(newIdx);
      }
    },
    [scrollIdx, cards.length]
  );

  const progress = cards.length > 1 ? scrollIdx / (cards.length - 1) : 1;

  return (
    <div className="phases-slider-root">
      {/* Slider */}
      <ul
        ref={sliderRef}
        className="phases-slider-list"
        tabIndex={0}
        onScroll={handleScroll}
      >
        {cards.map((card, i) => (
          <li key={i} className="phases-slider-item">
            <div className="phases-card">
              <div className="phases-card-img-wrap">
                <img src={card.img} alt={card.title} className="phases-card-img" />
                <div className="phases-card-img-overlay" />
                <span className="phases-card-num" style={{ color: accentColor }}>
                  {card.num}
                </span>
                <div className="phases-card-text-overlay">
                  <h4 className="phases-card-title">{card.title}</h4>
                  <p className="phases-card-desc">{card.desc}</p>
                </div>
              </div>
            </div>
          </li>
        ))}
      </ul>

      {/* Nav */}
      <div className="phases-slider-nav">
        <button
          type="button"
          aria-label="go to previous slide"
          disabled={scrollIdx === 0}
          onClick={() => scrollTo("prev")}
          className="phases-nav-btn"
        >
          <svg aria-hidden="true" fill="none" height="15" viewBox="0 0 15 15" width="15" xmlns="http://www.w3.org/2000/svg">
            <path clipRule="evenodd" d="M8.20711 14.7071C8.59763 14.3166 8.59763 13.6834 8.20711 13.2929L3.41421 8.5H14C14.5523 8.5 15 8.05228 15 7.5C15 6.94772 14.5523 6.5 14 6.5H3.41421L8.20711 1.70711C8.59763 1.31658 8.59763 0.683418 8.20711 0.292894C7.81658 -0.0976312 7.18342 -0.0976312 6.79289 0.292894L0.292893 6.79289C-0.0976309 7.18342 -0.0976309 7.81658 0.292893 8.20711L6.79289 14.7071C7.18342 15.0976 7.81658 15.0976 8.20711 14.7071Z" fill="currentColor" fillRule="evenodd" />
          </svg>
        </button>
        {/* Progress bar */}
        <div className="phases-progress-track" role="presentation">
          <motion.div
            className="phases-progress-fill"
            animate={{ scaleX: progress }}
            transition={{ duration: 0.35, ease: "easeOut" }}
          />
        </div>
        <button
          type="button"
          aria-label="go to next slide"
          disabled={scrollIdx === cards.length - 1}
          onClick={() => scrollTo("next")}
          className="phases-nav-btn"
        >
          <svg aria-hidden="true" fill="none" height="15" viewBox="0 0 15 15" width="15" xmlns="http://www.w3.org/2000/svg">
            <path clipRule="evenodd" d="M6.79289 14.7071C6.40237 14.3166 6.40237 13.6834 6.79289 13.2929L11.5858 8.5H1C0.447715 8.5 0 8.05228 0 7.5C0 6.94772 0.447715 6.5 1 6.5H11.5858L6.79289 1.70711C6.40237 1.31658 6.40237 0.683418 6.79289 0.292894C7.18342 -0.0976312 7.81658 -0.0976312 8.20711 0.292894L14.7071 6.79289C15.0976 7.18342 15.0976 7.81658 14.7071 8.20711L8.20711 14.7071C7.81658 15.0976 7.18342 15.0976 6.79289 14.7071Z" fill="currentColor" fillRule="evenodd" />
          </svg>
        </button>
      </div>
    </div>
  );
};

// ─── Main Component ───────────────────────────────────────────────────────────

export const PhasesTabSection = () => {
  const [activeIdx, setActiveIdx] = useState(0);
  const activeTab = tabs[activeIdx];

  return (
    <div style={{ backgroundColor: "#000000" }}>
      <section
        className="phases-section"
        style={{
          position: "relative",
          zIndex: 3,
          marginTop: "-80px",
          borderRadius: "0 0 64px 64px",
        }}
      >
        {/* Gradient overlay — continuing the same atmospheric feel as VerticalStack */}
        <div
          className="absolute pointer-events-none"
          style={{
            top: "-120px",
            left: 0,
            right: 0,
            bottom: 0,
            opacity: 0.9,
            zIndex: 1,
            backgroundImage: [
              "radial-gradient(circle at 10% 30%, rgba(160, 161, 208, 0.4) 0px, transparent 30%)",
              "radial-gradient(circle at 99% 60%, rgba(160, 161, 208, 0.4) 0px, transparent 35%)",
              "radial-gradient(circle at 10% 80%, rgba(160, 161, 208, 0.3) 0px, transparent 28%)",
            ].join(", "),
          }}
        />

        <div className="phases-container">
          {/* Main Layout containing header, sub tab list and animated content */}
          <div className="phases-panel">
            {/* Header Grid */}
            <div className="custom-grid-container">
              {/* Title / Heading Content */}
              <div className="grid-item-title">
                <h3 className="phases-panel-headline font-cormorant">
                  {activeTab.headline.map((line, i) =>
                    line === activeTab.headlineAccent ? (
                      <span key={i} style={{ color: "rgba(62, 34, 66, 0.6)" }}>
                        {line}
                        {i < activeTab.headline.length - 1 && <br />}
                      </span>
                    ) : (
                      <React.Fragment key={i}>
                        {line}
                        <br />
                      </React.Fragment>
                    )
                  )}
                </h3>
              </div>

              {/* Description / Side Content */}
              <div className="grid-item-description">
                <p className="phases-panel-body">{activeTab.body}</p>
              </div>
            </div>

            {/* Tab list below title & description - centered alignment */}
            <div className="phases-tablist-wrap">
              <div className="phases-tablist" role="tablist">
                {tabs.map((t, i) => {
                  const isActive = i === activeIdx;
                  return (
                    <button
                      key={t.id}
                      id={`phases-tab-${i}`}
                      role="tab"
                      aria-selected={isActive}
                      aria-controls={`phases-panel-${i}`}
                      tabIndex={isActive ? 0 : -1}
                      type="button"
                      onClick={() => setActiveIdx(i)}
                      className={`phases-tab-btn${isActive ? " phases-tab-btn--active" : ""}`}
                      style={
                        isActive
                          ? {
                              borderColor: "#D6C3A5",
                              backgroundColor: "#2e2d2c",
                              color: "#F2F0EE",
                              boxShadow: `0 8px 24px rgba(0,0,0,0.12)`,
                            }
                          : {}
                      }
                    >
                      {t.label}
                    </button>
                  );
                })}
              </div>
            </div>

            {/* Content that transitions when tab changes */}
            <AnimatePresence mode="wait">
              <motion.div
                key={activeTab.id}
                initial={{ opacity: 0, y: 18 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -12 }}
                transition={{ duration: 0.55, ease: [0.16, 1, 0.3, 1] }}
                style={{ display: "flex", flexDirection: "column", gap: "64px" }}
              >
                {/* Cards */}
                <CardSlider cards={activeTab.cards} accentColor={activeTab.accentColor} />

                {/* Hero image */}
                <div className="phases-hero-wrap">
                  <div className="phases-hero-inner">
                    <img src={activeTab.heroImg} alt={activeTab.heroAlt} className="phases-hero-img" />
                    <div className="phases-hero-overlay" />
                    <div className="phases-hero-badge" style={{ borderColor: "rgba(62, 34, 66, 0.2)" }}>
                      <span className="phases-hero-badge-dot" style={{ backgroundColor: activeTab.accentColor }} />
                      <span className="phases-hero-badge-text" style={{ color: activeTab.accentColor }}>
                        {activeTab.phase} — {activeTab.label}
                      </span>
                    </div>
                  </div>
                </div>
              </motion.div>
            </AnimatePresence>
          </div>
        </div>

        {/* Styles */}
        <style>{`
          .phases-section {
            position: relative;
            overflow: visible;
            background: rgb(239, 234, 226);
            padding: 200px 0 100px;
          }
          .phases-bg-dots {
            position: absolute;
            inset: 0;
            pointer-events: none;
            opacity: 0.03;
            background-image: radial-gradient(#000 1px, transparent 1px);
            background-size: 40px 40px;
          }
          .phases-container {
            container: phases / inline-size;
            max-width: 1200px;
            margin: 0 auto;
            padding: 0 24px;
            position: relative;
            z-index: 10;
            font-family: inherit;
          }

          /* ── Tab list ── */
          .phases-tablist-wrap {
            display: flex;
            justify-content: center;
            margin-top: 56px;
            margin-bottom: 24px;
          }
          .phases-tablist {
            display: inline-flex;
            gap: 12px;
            flex-wrap: wrap;
            justify-content: center;
            max-width: 100%;
          }
          .phases-tab-btn {
            appearance: none;
            display: inline-flex;
            align-items: center;
            justify-content: center;
            gap: 8px;
            padding: 16px 24px;
            border-radius: 100px;
            border: 2px solid #CCCAC7;
            background: transparent;
            color: #55534F;
            font-size: 18px;
            font-weight: 700;
            line-height: 1.2;
            white-space: nowrap;
            cursor: pointer;
            transition: all 0.3s ease;
            font-family: inherit;
          }
          .phases-tab-btn:hover:not(.phases-tab-btn--active) {
            border-color: #999795;
            color: #1a1a2e;
            background: rgba(255,255,255,0.3);
          }

          /* ── Grid Layout Strategy ── */
          .custom-grid-container {
            display: grid;
            grid-template-columns: [full-start] 64px [main-start] repeat(22, 1fr) [main-end] 64px [full-end];
            row-gap: 8px;
            width: 100%;
          }
          .grid-item-title {
            grid-column: main-start / 14;
            display: block;
          }
          .grid-item-description {
            grid-column: 16 / main-end;
            display: flex;
            flex-direction: column;
            justify-content: flex-end;
            padding: 0 0 28px 0;
          }
          @media (max-width: 1024px) {
            .custom-grid-container {
              grid-template-columns: [full-start] 16px [main-start] 1fr [main-end] 16px [full-end];
              row-gap: 16px;
            }
            .grid-item-title, 
            .grid-item-description {
              grid-column: main-start / main-end;
              padding: 0;
            }
          }

          /* ── Panel ── */
          .phases-panel {
            display: flex;
            flex-direction: column;
            gap: 64px;
          }
          .phases-panel-headline {
            font-size: clamp(36px, 5.5vw, 68px);
            font-weight: 300;
            line-height: 1.08;
            letter-spacing: -0.02em;
            color: #3E2242;
            margin: 0;
          }
          .phases-panel-body {
            font-size: clamp(17px, 2vw, 22px);
            line-height: 1.6;
            color: rgba(15, 23, 42, 0.75);
            font-weight: 300;
            letter-spacing: -0.01em;
            margin: 0;
          }

          /* ── Slider ── */
          .phases-slider-root {
            display: flex;
            flex-direction: column;
            gap: 32px;
          }
          .phases-slider-list {
            display: flex;
            gap: 20px;
            overflow-x: auto;
            scroll-snap-type: x mandatory;
            scrollbar-width: none;
            -ms-overflow-style: none;
            list-style: none;
            padding: 4px 0 12px;
            margin: 0;
            scroll-behavior: smooth;
          }
          .phases-slider-list::-webkit-scrollbar { display: none; }
          .phases-slider-item {
            scroll-snap-align: start;
            flex-shrink: 0;
          }
          .phases-card {
            width: 280px;
            display: flex;
            flex-direction: column;
          }
          @media (min-width: 640px) {
            .phases-card { width: 300px; }
          }
          .phases-card-img-wrap {
            position: relative;
            width: 100%;
            aspect-ratio: 1 / 1;
            border-radius: 20px;
            overflow: hidden;
            margin-bottom: 20px;
            background: #e2e0de;
          }
          .phases-card-img {
            width: 100%;
            height: 100%;
            object-fit: cover;
            transition: transform 0.6s cubic-bezier(0.16,1,0.3,1);
          }
          .phases-card:hover .phases-card-img {
            transform: scale(1.04);
          }
          .phases-card-img-overlay {
            position: absolute;
            inset: 0;
            background: linear-gradient(to top, rgba(0,0,0,0.65) 0%, rgba(0,0,0,0.1) 100%);
          }
          .phases-card-num {
            position: absolute;
            top: 14px;
            left: 16px;
            font-size: 11px;
            font-weight: 800;
            font-family: monospace;
            letter-spacing: 0.15em;
            opacity: 0.9;
            z-index: 10;
          }
          .phases-card-text-overlay {
            position: absolute;
            bottom: 0;
            left: 0;
            right: 0;
            z-index: 10;
            padding: 20px 16px;
          }
          .phases-card-title {
            font-size: 20px;
            font-weight: 400;
            color: #fff;
            margin-bottom: 6px;
            letter-spacing: -0.02em;
            line-height: 1.2;
            font-family: Cormorant, Garamond, serif;
          }
          .phases-card-desc {
            font-size: 13px;
            line-height: 1.5;
            color: rgba(255, 255, 255, 0.8);
            font-weight: 300;
          }

          /* ── Nav ── */
          .phases-slider-nav {
            margin: 40px auto 0;
            display: flex;
            align-items: center;
            gap: 4px;
            width: 240px;
            background: rgba(217, 217, 217, 0.3);
            border-radius: 100px;
            padding: 8px 16px;
          }
          .phases-nav-btn {
            flex-shrink: 0;
            width: 40px;
            height: 40px;
            display: flex;
            align-items: center;
            justify-content: center;
            border: none;
            background: transparent;
            cursor: pointer;
            color: inherit;
            border-radius: 50%;
            transition: background 0.2s, opacity 0.2s;
          }
          .phases-nav-btn:disabled {
            opacity: 0.3;
            cursor: default;
          }
          .phases-nav-btn:not(:disabled):hover {
            background: rgba(0,0,0,0.06);
          }
          .phases-progress-track {
            flex: 1;
            height: 1px;
            background: #D1D5DB;
            position: relative;
            overflow: hidden;
          }
          .phases-progress-fill {
            position: absolute;
            inset: 0;
            height: 1px;
            transform-origin: left;
            background-color: #D6C3A5;
          }

          /* ── Hero image ── */
          .phases-hero-wrap {
            margin-top: 16px;
          }
          .phases-hero-inner {
            position: relative;
            border-radius: 40px;
            overflow: hidden;
            border: 1px solid rgba(255,255,255,0.5);
            box-shadow: 0 60px 100px -30px rgba(0,0,0,0.14);
            aspect-ratio: 21 / 9;
            background: #d0ceca;
          }
          @media (max-width: 640px) {
            .phases-hero-inner { aspect-ratio: 16 / 9; border-radius: 24px; }
          }
          .phases-hero-img {
            width: 100%;
            height: 100%;
            object-fit: cover;
          }
          .phases-hero-overlay {
            position: absolute;
            inset: 0;
            background: linear-gradient(to top, rgba(0,0,0,0.5) 0%, transparent 60%, rgba(0,0,0,0.1) 100%);
          }
          .phases-hero-badge {
            position: absolute;
            bottom: 24px;
            left: 24px;
            display: inline-flex;
            align-items: center;
            gap: 8px;
            background: rgba(255,255,255,0.12);
            backdrop-filter: blur(16px);
            border: 1px solid;
            border-radius: 999px;
            padding: 8px 16px;
          }
          .phases-hero-badge-dot {
            width: 6px;
            height: 6px;
            border-radius: 50%;
            flex-shrink: 0;
          }
          .phases-hero-badge-text {
            font-size: 11px;
            font-weight: 700;
            text-transform: uppercase;
            letter-spacing: 0.18em;
          }
        `}</style>
      </section>
    </div>
  );
};