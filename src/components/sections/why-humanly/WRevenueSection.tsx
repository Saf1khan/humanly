"use client";
import React, { useEffect, useRef } from "react";

const layers = [
  {
    num: "Layer 1",
    title: "Real Estate Operations",
    desc: "NOI from attainable housing serving workforce households in the 80–120% AMI segment.",
    color: "#0099ff",
  },
  {
    num: "Layer 2",
    title: "Service Revenue",
    desc: "Circle of Services® transaction fees across healthcare, food, wellness, work, transportation, education, entertainment, and general services.",
    color: "#6BCEFF",
  },
  {
    num: "Layer 3",
    title: "Financial Products",
    desc: "HumanlyPay™ supports credit building, savings, insurance, and embedded resident financial progression.",
    color: "#AA3DAD",
  },
  {
    num: "Layer 4",
    title: "Data Intelligence",
    desc: "Anonymized community insights, operational learning loops, and municipal or partner intelligence products.",
    color: "#ff7e5d",
  },
  {
    num: "Layer 5",
    title: "Platform Licensing",
    desc: "HumanlyOS® can be licensed to third-party operators, municipalities, and future development partners.",
    color: "#FFE366",
  },
];

export const WRevenueSection = () => {
  const headRefs = useRef<(HTMLElement | null)[]>([]);
  const cardRefs = useRef<(HTMLDivElement | null)[]>([]);

  useEffect(() => {
    const obs = new IntersectionObserver(
      (entries) =>
        entries.forEach((e) => {
          if (e.isIntersecting) {
            e.target.classList.add("wh-on");
            obs.unobserve(e.target);
          }
        }),
      { threshold: 0.12 }
    );
    headRefs.current.forEach((el) => el && obs.observe(el));
    cardRefs.current.forEach((el) => el && obs.observe(el));
    return () => obs.disconnect();
  }, []);

  return (
    <section className="wh-sp wh-bg-cool">
      <div className="wh-container">
        <div className="wh-rev-grid">
          {/* Left */}
          <div>
            <p
              className="wh-eyebrow wh-rvl"
              ref={(el) => { headRefs.current[0] = el; }}
            >
              Designed Revenue Model
            </p>
            <div
              className="wh-gline wh-rvl"
              ref={(el) => { headRefs.current[1] = el as HTMLElement | null; }}
            />
            <h2
              className="wh-rvl"
              ref={(el) => { headRefs.current[2] = el; }}
              style={{
                fontSize: "clamp(28px,3vw,44px)",
                fontWeight: 800,
                letterSpacing: "-1.5px",
                lineHeight: 1.1,
              }}
            >
              Five revenue layers. One integrated platform.
            </h2>
            <p
              className="wh-rvl"
              ref={(el) => { headRefs.current[3] = el; }}
              style={{
                marginTop: 20,
                fontSize: 16,
                lineHeight: 1.7,
                color: "#827e7a",
                transitionDelay: "0.1s",
              }}
            >
              Unlike a traditional developer that captures only one value
              stream, Humanly is designed to compound value across the built
              environment, daily service flows, and platform intelligence.
            </p>
          </div>

          {/* Right — stacked cards */}
          <div className="wh-rev-stack">
            {layers.map((l, i) => (
              <div
                key={i}
                className="wh-rev-card wh-sg"
                ref={(el) => { cardRefs.current[i] = el; }}
                style={{
                  borderLeftColor: l.color,
                  transitionDelay: `${i * 0.1}s`,
                }}
              >
                <div className="wh-rev-num" style={{ color: l.color }}>
                  {l.num}
                </div>
                <h4>{l.title}</h4>
                <p>{l.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};
