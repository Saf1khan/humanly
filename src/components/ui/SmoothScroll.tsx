"use client";

import React, { useEffect, useLayoutEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { ScrollSmoother } from "gsap/ScrollSmoother";

const useIsomorphicLayoutEffect = typeof window !== "undefined" ? useLayoutEffect : useEffect;

interface SmoothScrollProps {
  children: React.ReactNode;
}

export const SmoothScroll = ({ children }: SmoothScrollProps) => {
  const containerRef = useRef<HTMLDivElement>(null);

  useIsomorphicLayoutEffect(() => {
    if (typeof window === "undefined") return;

    // Register plugins
    gsap.registerPlugin(ScrollTrigger, ScrollSmoother);

    // Create the ScrollSmoother instance
    const smoother = ScrollSmoother.create({
      wrapper: "#smooth-wrapper",
      content: "#smooth-content",
      smooth: 1.1,
      effects: true,
      smoothTouch: 0.08,
    });

    // Refresh ScrollTrigger to calculate bounds correctly with ScrollSmoother active
    ScrollTrigger.refresh();

    return () => {
      if (smoother) {
        smoother.kill();
      }
    };
  }, []);

  return (
    <div id="smooth-wrapper" ref={containerRef} className="w-full min-h-screen">
      <div id="smooth-content" className="w-full">
        {children}
      </div>
    </div>
  );
};
export default SmoothScroll;
