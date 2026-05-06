"use client";

import { useEffect, useState, useRef } from "react";
import { motion, useScroll, useTransform } from "framer-motion";

const CountUpNumber = ({
  end,
  prefix = "",
  suffix = "",
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
      { threshold: 0.1 },
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
    <span ref={ref} className="tabular-nums">
      {prefix}
      {count}
      {suffix}
    </span>
  );
};

const StatCard = ({
  value,
  prefix,
  suffix,
  label,
  description,
  delay,
  className,
}: {
  value: number;
  prefix?: string;
  suffix?: string;
  label: string;
  description?: string;
  delay: string;
  className?: string;
}) => {
  return (
    <motion.div
      whileHover={{ y: -4, scale: 1.02, transition: { duration: 0.2 } }}
      className={`group relative h-full flex flex-col p-8 transition-all duration-500 overflow-hidden items-center text-center ${className || ""}`}
    >
      <div className="relative z-10 flex flex-col items-center justify-center w-full h-full gap-4">
        <div className="flex flex-col items-center">
          <p className="text-4xl md:text-5xl lg:text-6xl text-[#0c007a]/70  mb-3 tracking-tight font-medium">
            <CountUpNumber prefix={prefix} end={value} suffix={suffix} />
          </p>
          <h3 className="text-[1.25rem] font-bold text-[#0c007a]/80 mb-2">
            {label}
          </h3>
          {description && (
            <p className="text-[0.95rem] text-[#241f21]/70 leading-relaxed font-normal max-w-[280px]">
              {description}
            </p>
          )}
        </div>
      </div>
    </motion.div>
  );
};

export const StatsSection = () => {
  const containerRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start end", "end start"],
  });

  const blob1Y = useTransform(scrollYProgress, [0, 1], [0, -100]);
  const blob2Y = useTransform(scrollYProgress, [0, 1], [0, 100]);

  return (
    <section
      ref={containerRef}
      className="relative w-full flex flex-col justify-center p-4 md:p-10 pb-0 md:pb-0"
    >
      <div className="relative w-full rounded-[2rem] overflow-hidden pt-16 lg:pt-0 pb-0 z-10 border border-white/20 flex flex-col justify-center items-center">
        {/* Background Image replaced the CSS gradient */}
        <img
          src="/images/HeroGradient.jpg"
          alt="Background Gradient"
          className="absolute inset-0 w-full h-full object-cover z-0 pointer-events-none opacity-75"
        />

        <div className="relative z-10 max-w-6xl mx-auto px-6 md:px-12">
          <div className="grid grid-cols-1 mt-4 -mb-1 md:grid-cols-3 gap-8 lg:gap-12">
            <StatCard
              value={5}
              prefix="$"
              suffix="M"
              label="Flagship Investment"
              className=""
              delay="delay-100"
            />

            <StatCard
              value={100}
              prefix="$"
              suffix="M"
              label="Projected Value"
              delay="delay-200"
            />

            <StatCard
              value={20}
              prefix="$"
              suffix="M"
              label="Capital Expansion"
              delay="delay-300"
            />
          </div>
        </div>
      </div>
    </section>
  );
};
