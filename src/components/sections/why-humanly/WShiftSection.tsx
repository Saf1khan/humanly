"use client";
import React, { useEffect, useRef } from "react";

export const WShiftSection = () => {
  const ref = useRef<HTMLDivElement>(null);

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
    if (ref.current) obs.observe(ref.current);
    return () => obs.disconnect();
  }, []);

  return (
    <section className="wh-sp">
      <div className="wh-container">
        <div className="wh-shift wh-rv" ref={ref}>
          <p className="wh-eyebrow">The Shift</p>
          <h2>
            Humanly doesn&apos;t patch the problem. It rebuilds the system from
            the ground up.
          </h2>
          <p>
            Humanly deploys an AI-native, vertically integrated community
            platform that connects land acquisition, design, development,
            operations, service delivery, and resident financial tools into one
            coordinated ecosystem. The result is a neighborhood model engineered
            to improve both investor performance and human outcomes.
          </p>
        </div>
      </div>
    </section>
  );
};
