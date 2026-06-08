"use client";

import React, { useState, useRef, useCallback } from "react";
import { motion, AnimatePresence } from "framer-motion";

// ─── Icons ───────────────────────────────────────────────────────────────────

const AcqIcon = () => (
  <svg width="22" height="22" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg" fill="currentColor">
    <path clipRule="evenodd" d="M9.35462 0.470653C9.50015 0.674849 9.50956 0.946258 9.37851 1.16004C8.58337 2.45718 8.12484 3.98276 8.12484 5.61735C8.12484 9.66621 10.9425 13.0585 14.7247 13.9375C15.0609 14.0156 15.2701 14.3515 15.1919 14.6877C15.1138 15.0239 14.7779 15.2332 14.4417 15.155C10.106 14.1474 6.87484 10.2605 6.87484 5.61735C6.87484 4.28976 7.13935 3.023 7.61866 1.86766C4.49425 3.1376 2.2915 6.20413 2.2915 9.78401C2.2915 14.5014 6.11574 18.3257 10.8332 18.3257C13.9163 18.3257 16.6185 16.6926 18.1212 14.2413C18.3016 13.947 18.6864 13.8547 18.9807 14.0351C19.2749 14.2155 19.3673 14.6003 19.1869 14.8946C17.4665 17.7011 14.369 19.5757 10.8332 19.5757C5.42538 19.5757 1.0415 15.1918 1.0415 9.78401C1.0415 5.10448 4.32354 1.19298 8.71075 0.223135C8.9556 0.169011 9.20908 0.266457 9.35462 0.470653Z" fillRule="evenodd"></path>
  </svg>
);

const LeaseIcon = () => (
  <svg width="22" height="22" viewBox="0 0 16 20" xmlns="http://www.w3.org/2000/svg" fill="currentColor">
    <path clipRule="evenodd" d="M4.45095 5.5117C4.73428 3.67008 6.05393 1.87404 8.09191 1.52088C7.87 3.93585 9.16508 6.22092 10.9827 7.70813C11.7822 8.36225 12.5567 9.12287 13.1274 9.94975C13.6986 10.7773 14.0416 11.6357 14.0416 12.5C14.0416 14.4344 13.3821 15.9313 12.3284 16.9455C11.7028 17.5476 10.9213 17.9959 10.0213 18.2617C10.3223 17.8622 10.4999 17.3306 10.4999 16.6667C10.4999 14.6204 9.66248 12.5742 8.67308 11.4419C8.43837 11.1733 8.05572 11.3873 8.03086 11.7431C7.94516 12.9702 7.30981 13.6392 6.6972 14.2842C6.08728 14.9263 5.49989 15.5448 5.49989 16.6667C5.49989 17.2843 5.72388 17.8497 6.09505 18.2859C3.77124 17.6208 2.36883 15.7411 1.94609 13.6274C1.55658 11.6799 1.95462 10.1547 2.30891 9.44618C2.46328 9.13744 2.33815 8.76202 2.02941 8.60765C1.72068 8.45328 1.34525 8.57842 1.19088 8.88715C0.711819 9.84525 0.276544 11.6535 0.720367 13.8726C1.34807 17.0111 3.85096 19.7917 7.9999 19.7917C10.0418 19.7917 11.8718 19.12 13.1952 17.8461C14.5224 16.5687 15.2916 14.7323 15.2916 12.5C15.2916 11.2998 14.8162 10.1961 14.1562 9.23973C13.4957 8.28274 12.6263 7.4378 11.7743 6.74069C10.0428 5.32399 8.99677 3.20252 9.40747 1.14904C9.50396 0.6666 9.13159 0.192803 8.61205 0.212508C5.48704 0.331034 3.58739 2.90426 3.21549 5.32163C2.98407 6.82588 3.3324 8.09555 3.73237 8.9812C3.93249 9.42431 4.14729 9.77555 4.31407 10.0185C4.39762 10.1401 4.46958 10.2353 4.52233 10.302C4.54872 10.3353 4.57035 10.3616 4.58628 10.3806L4.6058 10.4035L4.61215 10.4107L4.61443 10.4133L4.61534 10.4144C4.61534 10.4144 4.6161 10.4152 5.08323 10L4.6161 10.4152C4.84543 10.6732 5.24047 10.6965 5.49846 10.4671C5.75591 10.2383 5.77959 9.8444 5.55178 9.58638L5.55068 9.58513L5.54295 9.57601C5.53466 9.56616 5.5209 9.5495 5.50253 9.52629C5.46576 9.47983 5.41077 9.40737 5.34457 9.31096C5.21187 9.11767 5.03605 8.83089 4.87158 8.46671C4.54238 7.73778 4.26571 6.71579 4.45095 5.5117Z" fillRule="evenodd"></path>
  </svg>
);

const MgmtIcon = () => (
  <svg width="22" height="22" viewBox="0 0 25 24" xmlns="http://www.w3.org/2000/svg" fill="currentColor">
    <path d="M13.4263 6.00781C13.4263 3.6606 15.3291 1.75781 17.6763 1.75781H22.9263V3.00781C22.9263 5.35502 21.0235 7.25781 18.6763 7.25781H16.6763C16.2621 7.25781 15.9263 7.5936 15.9263 8.00781C15.9263 8.42203 16.2621 8.75781 16.6763 8.75781H18.6763C21.8519 8.75781 24.4263 6.18345 24.4263 3.00781V1.00781C24.4263 0.593599 24.0905 0.257812 23.6763 0.257812H17.6763C14.5006 0.257812 11.9263 2.83217 11.9263 6.00781V11.1348C10.8747 9.98149 9.35999 9.25781 7.67627 9.25781H1.67627C1.26206 9.25781 0.92627 9.5936 0.92627 10.0078V12.0078C0.92627 15.1834 3.50063 17.7578 6.67627 17.7578H11.9263V23.0078C11.9263 23.422 12.2621 23.7578 12.6763 23.7578C13.0905 23.7578 13.4263 23.422 13.4263 23.0078V6.00781ZM11.9263 16.2578H6.67627C4.32906 16.2578 2.42627 14.355 2.42627 12.0078V10.7578H7.67627C10.0235 10.7578 11.9263 12.6606 11.9263 15.0078V16.2578Z"></path>
  </svg>
);

// ─── Data ─────────────────────────────────────────────────────────────────────

const tabs = [
  {
    id: "acquisitions",
    label: "Acquisitions",
    phase: "Phase 01",
    icon: AcqIcon,
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
    ],
  },
  {
    id: "lease-up",
    label: "Lease-Up",
    phase: "Phase 02",
    icon: LeaseIcon,
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
    ],
  },
  {
    id: "management",
    label: "Management",
    phase: "Phase 03",
    icon: MgmtIcon,
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

  const scrollTo = useCallback(
    (dir: "prev" | "next") => {
      if (!sliderRef.current) return;
      const newIdx =
        dir === "next"
          ? Math.min(scrollIdx + 1, cards.length - 1)
          : Math.max(scrollIdx - 1, 0);
      setScrollIdx(newIdx);
      const items = sliderRef.current.querySelectorAll("li");
      if (items[newIdx]) {
        items[newIdx].scrollIntoView({ behavior: "smooth", block: "nearest", inline: "start" });
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
              </div>
              <h4 className="phases-card-title">{card.title}</h4>
              <p className="phases-card-desc">{card.desc}</p>
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

// ─── Tab Panel Content ────────────────────────────────────────────────────────

const TabPanel = ({
  tab,
  activeIdx,
  setActiveIdx,
}: {
  tab: (typeof tabs)[0];
  activeIdx: number;
  setActiveIdx: (idx: number) => void;
}) => (
  <motion.div
    key={tab.id}
    initial={{ opacity: 0, y: 18 }}
    animate={{ opacity: 1, y: 0 }}
    exit={{ opacity: 0, y: -12 }}
    transition={{ duration: 0.55, ease: [0.16, 1, 0.3, 1] }}
    className="phases-panel"
  >
    {/* Header Grid */}
    <div className="custom-grid-container">
      {/* Title / Heading Content */}
      <div className="grid-item-title">
        <h3 className="phases-panel-headline font-cormorant">
          {tab.headline.map((line, i) =>
            line === tab.headlineAccent ? (
              <span key={i} style={{ color: "rgba(62, 34, 66, 0.6)" }}>
                {line}
                {i < tab.headline.length - 1 && <br />}
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
        <p className="phases-panel-body">{tab.body}</p>
      </div>
    </div>

    {/* Tab list below title & description - centered alignment */}
    <div className="phases-tablist-wrap">
      <div className="phases-tablist" role="tablist">
        {tabs.map((t, i) => {
          const Icon = t.icon;
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
              <Icon />
              {t.label}
            </button>
          );
        })}
      </div>
    </div>

    {/* Cards */}
    <CardSlider cards={tab.cards} accentColor={tab.accentColor} />

    {/* Hero image */}
    <div className="phases-hero-wrap">
      <div className="phases-hero-inner">
        <img src={tab.heroImg} alt={tab.heroAlt} className="phases-hero-img" />
        <div className="phases-hero-overlay" />
        <div className="phases-hero-badge" style={{ borderColor: "rgba(62, 34, 66, 0.2)" }}>
          <span className="phases-hero-badge-dot" style={{ backgroundColor: tab.accentColor }} />
          <span className="phases-hero-badge-text" style={{ color: tab.accentColor }}>
            {tab.phase} — {tab.label}
          </span>
        </div>
      </div>
    </div>
  </motion.div>
);

// ─── Main Component ───────────────────────────────────────────────────────────

export const PhasesTabSection = () => {
  const [activeIdx, setActiveIdx] = useState(0);
  const activeTab = tabs[activeIdx];

  return (
    <section
      className="phases-section"
      style={{
        position: "relative",
        zIndex: 3,
        marginTop: "-80px",
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
            "radial-gradient(circle at 90% 10%, rgba(160, 161, 208, 0.3) 0px, transparent 28%)",
          ].join(", "),
        }}
      />

      <div className="phases-container">
        {/* Panels containing header, sub tab list and content */}
        <div>
          <AnimatePresence mode="wait">
            <TabPanel
              key={activeTab.id}
              tab={activeTab}
              activeIdx={activeIdx}
              setActiveIdx={setActiveIdx}
            />
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
          background: linear-gradient(to top, rgba(0,0,0,0.18), transparent);
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
        }
        .phases-card-title {
          font-size: 20px;
          font-weight: 400;
          color: #3E2242;
          margin-bottom: 10px;
          letter-spacing: -0.02em;
          line-height: 1.2;
          font-family: Cormorant, Garamond, serif;
        }
        .phases-card-desc {
          font-size: 14px;
          line-height: 1.6;
          color: rgba(15, 23, 42, 0.65);
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
  );
};
