"use client";

import React, { Fragment } from "react";
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
  return (
    <section className="w-full bg-transparent py-16 lg:py-24 overflow-hidden">
      <div className="max-w-[1440px] mx-auto px-6 md:px-[64px]">

        {/* Section Header */}
        <RevealOnScroll>
          <header className="grid grid-cols-1 gap-6 mb-12 lg:mb-16">
            <div className="flex flex-col gap-4 lg:gap-6">
              <h2 className="text-[2rem] md:text-[2.75rem] lg:text-[3.5rem] font-sans font-bold text-[#1c1b1a] tracking-tight leading-tight">
                Transaction Flow
              </h2>
            </div>
          </header>
        </RevealOnScroll>

        {/* Desktop: Horizontal flow with arrows — equal-width cards via explicit grid */}
        <div
          className="hidden lg:grid items-stretch"
          style={{ gridTemplateColumns: "1fr auto 1fr auto 1fr auto 1fr auto 1fr" }}
          role="list"
        >
          {flowSteps.map((step, idx) => (
            <Fragment key={step.id}>
              <RevealOnScroll key={step.id} delay={`delay-${(idx + 1) * 100}` as any} className="h-full">
                <article
                  role="listitem"
                  className="flex flex-col bg-[#f7f1e8] text-[#1c1b1a] rounded-xl p-6 xl:p-8 h-full min-h-[260px] transition-all duration-300 hover:-translate-y-2 shadow-sm hover:shadow-[0_10px_40px_rgba(247,241,232,0.15)]"
                >
                  <header className="grow flex flex-col gap-2">
                    <p className="font-bold font-sans text-[#1c1b1a]/50 tracking-widest uppercase text-[0.7rem]">
                      {step.step}
                    </p>
                    <p className="text-[1.1rem] xl:text-[1.25rem] font-sans font-bold leading-snug text-[#1c1b1a]">
                      {step.title}
                    </p>
                    <p className="text-[0.85rem] text-[#1c1b1a]/60 font-sans leading-relaxed mt-1">
                      {step.description}
                    </p>
                  </header>
                  <footer className="mt-6 pt-5 border-t border-[#1c1b1a]/15 flex items-center gap-2">
                    <div
                      className="w-2.5 h-2.5 rounded-full flex-shrink-0"
                      style={{ backgroundColor: step.dotColor }}
                    />
                    <span className="text-[0.7rem] font-sans font-medium text-[#1c1b1a]/50 uppercase tracking-widest">
                      Active
                    </span>
                  </footer>
                </article>
              </RevealOnScroll>

              {/* Arrow connector */}
              {idx < flowSteps.length - 1 && (
                <div key={`arrow-${idx}`} className="flex items-center justify-center px-3 xl:px-4">
                  <svg width="20" height="12" viewBox="0 0 21 12" fill="none" xmlns="http://www.w3.org/2000/svg" className="text-[#1c1b1a]/30 flex-shrink-0">
                    <path d="M20.5303 6.53033C20.8232 6.23744 20.8232 5.76256 20.5303 5.46967L15.7574 0.696699C15.4645 0.403806 14.9896 0.403806 14.6967 0.696699C14.4038 0.989593 14.4038 1.46447 14.6967 1.75736L18.9393 6L14.6967 10.2426C14.4038 10.5355 14.4038 11.0104 14.6967 11.3033C14.9896 11.5962 15.4645 11.5962 15.7574 11.3033L20.5303 6.53033ZM0 6.75H20V5.25H0V6.75Z" fill="currentColor"/>
                  </svg>
                </div>
              )}
            </Fragment>
          ))}
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
                    <p className="text-[1.125rem] font-sans font-bold leading-snug text-[#1c1b1a]">
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
