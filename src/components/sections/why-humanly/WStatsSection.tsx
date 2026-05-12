"use client";
import React, { useState } from "react";

const slides = [
  {
    title: "Housing Shortage",
    count: "7M",
    sub: "+ units",
    description: "Unit housing shortage nationwide — workforce families earning 80–120% AMI are systematically excluded from quality options.",
    image: "/images/AdobeStock_279224695.jpeg",
    color: "#0099ff",
  },
  {
    title: "Market Opportunity",
    count: "$1T",
    sub: "+ gap",
    description: "Market opportunity gap left untapped by fragmented, siloed development that fails to serve the workforce segment.",
    image: "/images/AdobeStock_1011273017.jpeg",
    color: "#FFE366",
  },
  {
    title: "Cost Burden",
    count: "40",
    sub: "% burdened",
    description: "Workforce families cost-burdened — spending more than 30% of income on housing, leaving little for savings or stability.",
    image: "/images/AdobeStock_300644895.jpeg",
    color: "#AA3DAD",
  },
];

export const WStatsSection = () => {
  const [active, setActive] = useState(2); // default last item, like reference

  return (
    <section className="wh-stats-section wh-bg-warm">
      <div className="wh-stats-wrapper">
        {slides.map((s, i) => (
          <div
            key={i}
            className={`wh-stats-slide${i === active ? " active" : ""}`}
            onMouseEnter={() => setActive(i)}
          >
            <div className="wh-stats-item">
              <div className="wh-stats-info">
                <p className="wh-stats-title">{s.title}</p>
                <p className="wh-stats-count" style={{ color: s.color }}>
                  {s.count}
                  <sub>{s.sub}</sub>
                </p>
                <div className="wh-stats-line" />
                <p className="wh-stats-desc">{s.description}</p>
              </div>
              <div className="wh-stats-thumb">
                <img src={s.image} alt={s.title} />
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};
