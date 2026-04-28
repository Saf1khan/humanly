"use client";

import { useEffect, useState, useRef } from "react";

const CountUpNumber = ({ 
  end, 
  prefix = "", 
  suffix = "" 
}: { 
  end: number; 
  prefix?: string; 
  suffix?: string; 
}) => {
  const [count, setCount] = useState(0);
  const [isVisible, setIsVisible] = useState(false);
  const ref = useRef<HTMLSpanElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        if (entries[0].isIntersecting) {
          setIsVisible(true);
          observer.disconnect();
        }
      },
      { threshold: 0.1 }
    );

    if (ref.current) {
      observer.observe(ref.current);
    }

    return () => observer.disconnect();
  }, []);

  useEffect(() => {
    if (!isVisible) return;

    let startTimestamp: number;
    const duration = 2000;

    const step = (timestamp: number) => {
      if (!startTimestamp) startTimestamp = timestamp;
      const progress = Math.min((timestamp - startTimestamp) / duration, 1);
      
      const easeProgress = progress === 1 ? 1 : 1 - Math.pow(2, -10 * progress);
      
      setCount(Math.floor(easeProgress * end));

      if (progress < 1) {
        window.requestAnimationFrame(step);
      }
    };

    window.requestAnimationFrame(step);
  }, [isVisible, end]);

  return (
    <span ref={ref}>
      {prefix}{count}{suffix}
    </span>
  );
};

import { RevealOnScroll } from "../ui/RevealOnScroll";

export const StatsSection = () => {
  return (
    <section className="relative w-full bg-transparent py-20 lg:py-32 overflow-hidden">
      <div className="max-w-7xl mx-auto px-6 md:px-12 lg:px-16 relative z-10">
        <div className="grid grid-cols-1 gap-16 md:grid-cols-3 md:gap-x-24 md:gap-y-12 lg:gap-8 xl:gap-24">
          
          {/* Stat 1 */}
          <RevealOnScroll delay="delay-100">
            <div className="flex w-full flex-col items-center text-center md:items-start md:text-left">
              <p className="text-[2rem] tracking-normal md:text-[2.5rem] lg:text-[3.5rem] text-sandstone-500 font-serif leading-none mb-4 font-normal flex items-end min-h-[3.5rem] md:min-h-[2.5rem] lg:min-h-[3.5rem]">
                <CountUpNumber prefix="$" end={5} suffix="M" />
              </p>
              <p className="text-base tracking-normal text-sandstone-500 font-sans font-normal max-w-96 leading-snug">
                Flagship Investment
              </p>
            </div>
          </RevealOnScroll>
          
          {/* Stat 2 */}
          <RevealOnScroll delay="delay-200">
            <div className="flex w-full flex-col items-center text-center md:items-start md:text-left">
              <p className="text-[2rem] tracking-normal md:text-[2.5rem] lg:text-[3.5rem] text-sandstone-500 font-serif leading-none mb-4 font-normal flex items-end min-h-[3.5rem] md:min-h-[2.5rem] lg:min-h-[3.5rem]">
                <CountUpNumber prefix="$" end={100} suffix="M" />
              </p>
              <p className="text-base tracking-normal text-sandstone-500 font-sans font-normal max-w-96 leading-snug">
                Projected Value
              </p>
            </div>
          </RevealOnScroll>
          
          {/* Stat 3 */}
          <RevealOnScroll delay="delay-300">
            <div className="flex w-full flex-col items-center text-center md:items-start md:text-left">
              <p className="text-[2rem] tracking-normal md:text-[2.5rem] lg:text-[3.5rem] text-sandstone-500 font-serif leading-none mb-4 font-normal flex items-end min-h-[3.5rem] md:min-h-[2.5rem] lg:min-h-[3.5rem]">
                <CountUpNumber prefix="$" end={20} suffix="M" />
              </p>
              <p className="text-base tracking-normal text-sandstone-500 font-sans font-normal max-w-96 leading-snug">
                Raising for Next 4 Communities
              </p>
            </div>
          </RevealOnScroll>

        </div>
      </div>
    </section>
  );
};
