"use client";

import React, { Fragment, useState, useEffect } from "react";
import { RevealOnScroll } from "../ui/RevealOnScroll";

const flowSteps = [
  {
    id: "flow-1",
    step: "Step 01",
    title: "Resident Need",
    dotColor: "#67e8f9",
    description: "Resident identifies a need — housing, finance, or services.",
  },
  {
    id: "flow-2",
    step: "Step 02",
    title: "Circle of Services®",
    dotColor: "#3b82f6",
    description: "Request routed through the integrated services marketplace.",
  },
  {
    id: "flow-3",
    step: "Step 03",
    title: "HumanlyPay™",
    dotColor: "#d946ef",
    description: "Payment processed via embedded finance infrastructure.",
  },
  {
    id: "flow-4",
    step: "Step 04",
    title: "Revenue Capture",
    dotColor: "#f97316",
    description: "Operator captures revenue from every fulfilled transaction.",
  },
  {
    id: "flow-5",
    step: "Step 05",
    title: "Community Reinvestment",
    dotColor: "#facc15",
    description: "Surplus reinvested into community programs and amenities.",
  },
];

export const TransactionFlowSection = () => {
  const [activeIndex, setActiveIndex] = useState(-1);

  useEffect(() => {
    const duration = 8000;
    const start = Date.now();
    
    const animate = () => {
      const elapsed = (Date.now() - start) % duration;
      // Calculate which segment (0-4) the dot is currently in
      const currentIdx = Math.floor(elapsed / (duration / flowSteps.length));
      setActiveIndex(currentIdx);
      requestAnimationFrame(animate);
    };
    
    const frameId = requestAnimationFrame(animate);
    return () => cancelAnimationFrame(frameId);
  }, []);

  return (
    <section className="relative w-full bg-transparent py-20 lg:py-32 overflow-hidden">
      {/* Background Gradients — exact match to adjacent sections */}
      <div
        className="absolute pointer-events-none right-0 translate-x-1/2 top-0 -translate-y-1/2 w-[clamp(44rem,14.769rem+116.923vw,120rem)] h-[clamp(25rem,8.654rem+65.385vw,67.5rem)]"
        style={{ background: "radial-gradient(50% 50%, rgba(105, 165, 255, 0.08), rgba(105, 165, 255, 0.02) 50%, rgba(105, 165, 255, 0))" }}
      />
      <div
        className="absolute pointer-events-none left-1/2 -translate-x-1/2 top-1/2 -translate-y-1/2 w-[clamp(44rem,14.769rem+116.923vw,120rem)] h-[clamp(25rem,8.654rem+65.385vw,67.5rem)]"
        style={{ background: "radial-gradient(50% 50%, rgba(105, 165, 255, 0.06), rgba(105, 165, 255, 0.02) 50%, rgba(105, 165, 255, 0))" }}
      />

      <style>
        {`
          @keyframes slideRight {
            0% { left: 0%; opacity: 0; }
            5% { opacity: 1; }
            95% { opacity: 1; }
            100% { left: 100%; opacity: 0; }
          }
          @keyframes slideDown {
            0% { top: 0%; opacity: 0; }
            5% { opacity: 1; }
            95% { opacity: 1; }
            100% { top: 100%; opacity: 0; }
          }
        `}
      </style>

      <div className="max-w-[1440px] mx-auto px-6 md:px-12 lg:px-16 relative z-10">

        {/* Section Header */}
        <RevealOnScroll>
          <header className="flex flex-col items-center text-center mb-20 lg:mb-32">
            <h2 className="text-[2.25rem] md:text-[3rem] lg:text-[4rem] font-sans font-bold text-sandstone-500 tracking-tight leading-tight">
              Transaction Flow
            </h2>
          </header>
        </RevealOnScroll>

        {/* Desktop Timeline */}
        <div className="hidden lg:block relative w-full h-[600px]">
          {/* Full-width Background Line */}
          <div className="absolute top-1/2 left-1/2 w-[150vw] h-[1px] bg-gradient-to-r from-transparent via-[#1c1b1a]/15 to-transparent -translate-x-1/2 -translate-y-1/2" />
          
          {/* Moving Flowline Light */}
          <div className="absolute top-1/2 left-0 h-[2px] w-[200px] bg-gradient-to-r from-transparent via-white to-transparent -translate-y-1/2 blur-[1px] animate-[slideRight_8s_linear_infinite]" />
          
          {/* Moving Glowing Dot */}
          <div className="absolute top-1/2 left-0 w-2.5 h-2.5 rounded-full bg-white shadow-[0_0_15px_4px_rgba(255,255,255,0.9)] -translate-y-1/2 animate-[slideRight_8s_linear_infinite] z-20" />

          <div className="grid grid-cols-5 gap-8 h-full relative z-10">
            {flowSteps.map((step, idx) => {
              const isTop = idx % 2 === 0;
              return (
                <div key={step.id} className="relative flex flex-col justify-center h-full group" data-active={activeIndex === idx}>
                  
                  {/* Node on Line */}
                  <div 
                    className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-4 h-4 rounded-full border-[3px] border-white bg-[#f4f2ea] shadow-[0_0_10px_rgba(0,0,0,0.1)] z-10 transition-all duration-500 group-hover:scale-150 group-data-[active=true]:scale-150 group-hover:bg-white group-data-[active=true]:bg-white" 
                    style={{ borderColor: step.dotColor }}
                  >
                    <div className="absolute inset-0 rounded-full animate-ping opacity-20" style={{ backgroundColor: step.dotColor }} />
                  </div>

                  {/* Vertical Connector Line (creates the gap visually) */}
                  <div 
                    className={`absolute left-1/2 -translate-x-1/2 w-[1px] bg-gradient-to-b transition-all duration-500 opacity-40 group-hover:opacity-100 group-data-[active=true]:opacity-100 ${
                      isTop 
                        ? 'bottom-1/2 h-[70px] group-hover:h-[82px] group-data-[active=true]:h-[82px] from-transparent to-[#1c1b1a]/40 group-hover:to-[#1c1b1a]/70 group-data-[active=true]:to-[#1c1b1a]/70' 
                        : 'top-1/2 h-[70px] group-hover:h-[82px] group-data-[active=true]:h-[82px] from-[#1c1b1a]/40 group-hover:from-[#1c1b1a]/70 group-data-[active=true]:from-[#1c1b1a]/70 to-transparent'
                    }`} 
                  />

                  {/* Card Container - Positional precisely to create the gap */}
                  <div className={`absolute w-full ${isTop ? 'bottom-[calc(50%+70px)]' : 'top-[calc(50%+70px)]'}`}>
                    <RevealOnScroll delay={`delay-${(idx + 1) * 100}` as any} className="w-full">
                      <article
                        className="relative w-full flex flex-col h-full min-h-[260px] bg-[#4A4741]/10 backdrop-blur-[32px] border border-[#4A4741]/10 p-2 rounded-2xl transition-all duration-500 shadow-[0_8px_32px_rgba(0,0,0,0.05)] hover:shadow-[0_8px_32px_rgba(0,0,0,0.1)] hover:bg-[#4A4741]/10 group-hover:-translate-y-3 group-data-[active=true]:-translate-y-3 group-hover:shadow-[0_20px_40px_rgba(0,0,0,0.08)] group-data-[active=true]:shadow-[0_20px_40px_rgba(0,0,0,0.08)] group-hover:bg-white/60 group-data-[active=true]:bg-white/60 group-hover:border-white/80 group-data-[active=true]:border-white/80"
                      >
                        {/* Glow effect on hover */}
                        <div 
                          className="absolute inset-0 rounded-2xl opacity-0 group-hover:opacity-100 group-data-[active=true]:opacity-100 transition-opacity duration-500 pointer-events-none" 
                        />
                        
                        <header className="flex flex-col gap-3 relative z-10">
                          <div className="flex items-center gap-3">
                            <span 
                              className="font-bold font-sans text-[0.7rem] tracking-widest uppercase px-2 py-1 rounded-md bg-white/50 border border-white/40"
                              style={{ color: step.dotColor }}
                            >
                              {step.step}
                            </span>
                          </div>
                          <h3 className="text-[1.1rem] xl:text-[1.25rem] font-sans font-bold leading-snug text-sandstone-500">
                            {step.title}
                          </h3>
                          <p className="text-[0.85rem] text-[#1c1b1a]/70 font-sans leading-relaxed mt-1">
                            {step.description}
                          </p>
                        </header>

                        <footer className="mt-auto pt-4 border-t border-[#1c1b1a]/10 flex items-center gap-2 relative z-10">
                          <div className="w-2 h-2 rounded-full flex-shrink-0 shadow-[0_0_5px_rgba(0,0,0,0.2)]" style={{ backgroundColor: step.dotColor }} />
                          <span className="text-[0.65rem] font-sans font-medium text-[#1c1b1a]/50 uppercase tracking-widest">Active</span>
                        </footer>
                      </article>
                    </RevealOnScroll>
                  </div>

                </div>
              );
            })}
          </div>
        </div>

        {/* Mobile: Vertical stack */}
        <div className="flex lg:hidden flex-col gap-4" role="list">
          {flowSteps.map((step, idx) => (
            <div key={step.id} className="flex flex-col items-center">
              <RevealOnScroll delay={`delay-${(idx + 1) * 100}` as any} className="w-full">
                <article
                  role="listitem"
                  className="flex flex-col bg-[#f7f1e8] text-[#1c1b1a] rounded-xl p-6 w-full"
                >
                  <header className="flex flex-col gap-2 mb-4">
                    <p className="font-bold font-sans text-[#1c1b1a]/50 tracking-widest uppercase text-[0.7rem]">
                      {step.step}
                    </p>
                    <p className="text-[1.125rem] font-sans font-bold leading-snug text-sandstone-500">
                      {step.title}
                    </p>
                    <p className="text-[0.875rem] text-[#1c1b1a]/60 font-sans leading-relaxed">
                      {step.description}
                    </p>
                  </header>
                  <footer className="pt-4 border-t border-[#1c1b1a]/15 flex items-center gap-2">
                    <div className="w-2.5 h-2.5 rounded-full flex-shrink-0" style={{ backgroundColor: step.dotColor }} />
                    <span className="text-[0.7rem] font-sans font-medium text-[#1c1b1a]/50 uppercase tracking-widest">Active</span>
                  </footer>
                </article>
              </RevealOnScroll>

              {idx < flowSteps.length - 1 && (
                <div className="py-2 text-[#1c1b1a]/25">
                  <svg width="12" height="20" viewBox="0 0 12 21" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M5.46967 20.5303C5.76256 20.8232 6.23744 20.8232 6.53033 20.5303L11.3033 15.7574C11.5962 15.4645 11.5962 14.9896 11.3033 14.6967C11.0104 14.4038 10.5355 14.4038 10.2426 14.6967L6 18.9393L1.75736 14.6967C1.46447 14.4038 0.989592 14.4038 0.696699 14.6967C0.403806 14.9896 0.403806 15.4645 0.696699 15.7574L5.46967 20.5303ZM5.25 0L5.25 20H6.75L6.75 0L5.25 0Z" fill="currentColor"/>
                  </svg>
                </div>
              )}
            </div>
          ))}
        </div>

      </div>
    </section>
  );
};
