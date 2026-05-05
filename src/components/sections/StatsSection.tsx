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
      className={`group relative h-full flex flex-col p-6 transition-all duration-500 overflow-hidden ${className || ""}`}
    >


      <div className="relative z-10 flex flex-row items-center justify-between w-full h-full gap-6">
        <div className="flex flex-col flex-1">
          <p className="text-4xl md:text-5xl lg:text-6xl  text-[#f7f1e8] mb-2 tracking-tight font-medium">
            <CountUpNumber prefix={prefix} end={value} suffix={suffix} />
          </p>
          <h3 className="text-[1.25rem] font-medium text-[#f7f1e8] mb-1">
            {label}
          </h3>
          {description && (
            <p className="text-[0.95rem] text-white/70 leading-relaxed font-normal">
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
      className="relative w-full flex flex-col justify-center py-16 lg:py-0 overflow-hidden bg-transparent"
    >
      <div className="max-w-5xl mx-auto  px-6 md:px-12 lg:px-1 z-10">
        <div className="grid grid-cols-1 mt-4 -mb-1 md:grid-cols-3 gap-8 lg:gap-12">
          <StatCard
            value={5}
            prefix="$"
            suffix="M"
            label="Flagship Investment"
            className="

"
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
    </section>
  );
};
