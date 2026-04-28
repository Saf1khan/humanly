"use client";

import { useEffect, useRef, ReactNode } from "react";

interface HeroRevealProps {
  children: ReactNode;
  className?: string;
  delay?: "delay-100" | "delay-200" | "delay-300" | "delay-400" | "delay-500" | "delay-700";
}

export const HeroReveal = ({
  children,
  className = "",
  delay,
}: HeroRevealProps) => {
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;

    // Use a small timeout to ensure the browser has painted the initial state
    const timer = setTimeout(() => {
      el.classList.add("is-visible");
    }, 100);

    return () => clearTimeout(timer);
  }, []);

  return (
    <div ref={ref} className={`hero-reveal ${delay || ""} ${className}`.trim()}>
      {children}
    </div>
  );
};
