"use client";

import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

/* ─────────────────────────────────────────────
   Data
───────────────────────────────────────────── */
const steps = [
  {
    num: "01",
    title: "Land",
    desc: "AI-driven site selection, market intelligence, and entitlement.",
    bgColor: "#BFCCD8",
    image: "/images/pexels-tomfisk-34115060.jpg",
    bullets: [
      "Audit & benchmark",
      "AI site selection",
      "Market intelligence",
      "Zoning entitlement",
      "Predictive valuation",
      "Acquisition strategy",
    ],
  },
  {
    num: "02",
    title: "Build",
    desc: "Design kit, rapid 3D modelling, and streamlined construction.",
    bgColor: "#B692A1",
    image: "/images/pexels-mahmoudramadan-36444550.jpg",
    bullets: [
      "Modular design kit",
      "Rapid 3D modeling",
      "Prefabricated assembly",
      "Supply optimization",
      "Site orchestration",
      "Sustainable building",
    ],
  },
  {
    num: "03",
    title: "Operate",
    desc: "HumanlyOS® powers every community service and transaction.",
    bgColor: "#798E7B",
    image: "/images/pexels-karola-g-6627903.jpg",
    bullets: [
      "Embedded finance core",
      "Automated service flow",
      "Intelligent dispatch",
      "Resident engagement",
      "Ops orchestration",
      "Smart maintenance",
    ],
  },
  {
    num: "04",
    title: "Compound",
    desc: "Data flywheel drives continuous improvement across all communities.",
    bgColor: "#E49366",
    image: "/images/pexels-khwanchai-4174740.jpg",
    bullets: [
      "Feedback cycle loops",
      "Community asset yield",
      "Predictive maintenance",
      "Compound returns",
      "Tenant longevity",
      "Flywheel performance",
    ],
  },
];

/* ─────────────────────────────────────────────
   Right Column Mockup Components
───────────────────────────────────────────── */

const LandMockup = () => {
  return (
    <div
      className="w-full h-full bg-[#111317] overflow-hidden"
      style={{
        backgroundImage: `url('/images/pexels-tomfisk-34115060.jpg')`,
        backgroundSize: "cover",
        backgroundPosition: "center",
      }}
    />
  );
};

const BuildMockup = () => {
  return (
    <div
      className="w-full h-full bg-[#0a0c0f] overflow-hidden"
      style={{
        backgroundImage: `url('/images/pexels-mahmoudramadan-36444550.jpg')`,
        backgroundSize: "cover",
        backgroundPosition: "center",
      }}
    />
  );
};

const OperateMockup = () => {
  return (
    <div
      className="w-full h-full bg-[#0a0e12] overflow-hidden"
      style={{
        backgroundImage: `url('/images/pexels-karola-g-6627903.jpg')`,
        backgroundSize: "cover",
        backgroundPosition: "center",
      }}
    />
  );
};

const CompoundMockup = () => {
  return (
    <div
      className="w-full h-full bg-[#110c09] overflow-hidden"
      style={{
        backgroundImage: `url('/images/pexels-khwanchai-4174740.jpg')`,
        backgroundSize: "cover",
        backgroundPosition: "center",
      }}
    />
  );
};

/* ─────────────────────────────────────────────
   macOS Style Simulator Mockup Window
───────────────────────────────────────────── */
interface SimulatorProps {
  activeStep: number;
}

const DashboardSimulator = ({ activeStep }: SimulatorProps) => {
  return (
    <div className="w-full h-full rounded-2xl shadow-[0_30px_60px_rgba(0,0,0,0.4)] flex flex-col overflow-hidden">
      <div className="flex-1 relative overflow-hidden">
        <AnimatePresence mode="wait">
          <motion.div
            key={activeStep}
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: -20 }}
            transition={{ duration: 0.35, ease: "easeInOut" }}
            className="absolute inset-0 w-full h-full"
          >
            {activeStep === 0 && <LandMockup />}
            {activeStep === 1 && <BuildMockup />}
            {activeStep === 2 && <OperateMockup />}
            {activeStep === 3 && <CompoundMockup />}
          </motion.div>
        </AnimatePresence>
      </div>
    </div>
  );
};

/* ─────────────────────────────────────────────
   PlatformStack Component
───────────────────────────────────────────── */
export const PlatformStack = () => {
  const [activeStep, setActiveStep] = useState(0);

  return (
    <section className="text-sandstone-500 bg-transparent py-12 lg:pt-24 lg:pb-40 relative z-10 w-full overflow-x-clip">
      <div
        className="absolute pointer-events-none right-0 top-1/5 translate-x-1/2 -translate-y-1/3 w-[clamp(44rem,14.769rem+116.923vw,120rem)] h-[clamp(25rem,8.654rem+65.385vw,67.5rem)]"
        style={{
          background:
            "radial-gradient(50% 50%, rgba(107,206,255, 0.25), rgba(107,206,255, 0.09) 50%, rgba(107,206,255, 0))",
        }}
      />

      <div
        className="absolute pointer-events-none left-0 bottom-1/5 -translate-x-1/2 translate-y-1/3 w-[clamp(44rem,14.769rem+116.923vw,120rem)] h-[clamp(25rem,8.654rem+65.385vw,67.5rem)]"
        style={{
          background:
            "radial-gradient(50% 50%, rgba(107,206,255, 0.25), rgba(107,206,255, 0.06) 50%, rgba(107,206,255, 0))",
        }}
      />
     
      <div
        className="grid grid-cols-[minmax(20px,1fr)_repeat(22,minmax(0,1fr))_minmax(20px,1fr)] gap-x-2 max-w-[1440px] mx-auto relative z-10"
        data-cy="layout-grid"
      >
        {/* Top Row: Title + Description */}
        <div className="col-start-2 col-end-[24] mb-10 lg:mb-6">
          <div className="flex flex-col items-center text-center">
            <div
              className="motionComponent w-full"
              style={{ filter: "blur(0px)", opacity: 1 }}
            >
              <h3 className="mx-auto max-w-5xl text-4xl leading-[44px] tracking-tight md:text-5xl md:leading-[60px] text-sandstone-500 font-cormorant font-light mb-4">
                One Company, One System <br />
                Full Vertical Integration
              </h3>
            </div>

            <p className="mt-6 lg:mt-4 max-w-4xl text-lg leading-[28px] tracking-normal text-sandstone-500 font-albert font-light">
              HumanlyOS® powers every community service and transaction. It
              provides a data flywheel that drives continuous improvement across
              all communities, maximizing tenant longevity and predictive
              returns.
            </p>
          </div>
        </div>

        {/* Bottom Row: Tabs + Panels */}
        <div
          className="col-start-1 col-end-[25] lg:col-start-3 lg:col-end-[23] mt-10 lg:mt-16 lg:min-h-[825px] xl:min-h-[715px]"
          data-cy="gridItem_div"
        >
          <div className="motionComponent" style={{ opacity: 1 }}>
            <div
              className="flex gap-y-10 flex-col md:gap-y-12"
              data-cy="tabs"
              data-orientation="default"
              data-style="default"
            >
              {/* Tab List */}
              <div>
                <div className="relative">
                  <div
                    className="flex gap-x-8 relative z-10 justify-start lg:justify-between overflow-x-auto scrollbar-hide px-0 lg:px-0"
                    data-cy="tabs_tablist"
                    role="tablist"
                  >
                    {steps.map((step, idx) => {
                      const isActive = activeStep === idx;

                      return (
                        <button
                          key={idx}
                          onClick={() => setActiveStep(idx)}
                          aria-controls={`_R_aekpinlaivb_-tabpanel-${idx}`}
                          id={`_R_aekpinlaivb_-tab-${idx}`}
                          aria-selected={isActive}
                          className={`whitespace-nowrap appearance-none font-medium text-sandstone-500 font-albert duration-300 flex items-center justify-center bg-transparent border-0 border-b-[3px] border-solid pb-4 pt-3 relative text-sm transition-opacity hover:opacity-100 lg:pb-7 lg:pt-5 lg:px-12 lg:text-base px-0 ${isActive
                            ? "border-b-current opacity-100"
                            : "border-b-transparent opacity-70"
                            }`}
                          data-classname="px-0"
                          data-cy="tabs_tab"
                          role="tab"
                          tabIndex={isActive ? 0 : -1}
                          type="button"
                        >
                          {step.title}
                        </button>
                      );
                    })}
                  </div>
                  <div
                    className="absolute bottom-0 bg-[#CBCBCB] h-[1px] left-0 w-full"
                    role="presentation"
                  ></div>
                </div>
              </div>

              {/* Tab Panels */}
              {steps.map((step, idx) => {
                const isActive = activeStep === idx;

                return (
                  <div
                    key={idx}
                    aria-labelledby={`_R_aekpinlaivb_-tab-${idx}`}
                    data-cy="tabs_tabpanel"
                    id={`_R_aekpinlaivb_-tabpanel-${idx}`}
                    role="tabpanel"
                    tabIndex={isActive ? 0 : -1}
                    hidden={!isActive}
                  >
                    <div
                      className="motionComponent relative flex flex-col justify-center gap-x-6 pt-12 pb-32 lg:flex-row lg:items-center lg:py-0"
                      data-cy="mobile-feature"
                      style={{ opacity: 1 }}
                    >
                      {/* Mobile Title */}
                      <div
                        className="gap-y-2 grid grid-cols-[minmax(20px,1fr)_repeat(22,minmax(0,1fr))_minmax(20px,1fr)] gap-x-2 max-w-[1440px] mx-auto pb-6 lg:hidden"
                        data-cy="layout-grid"
                      >
                        <div
                          className="col-start-2 col-end-[24]"
                          data-cy="gridItem_div"
                        >
                          <div
                            className="motionComponent"
                            style={{ filter: "blur(0px)", opacity: 1 }}
                          >
                            <h4 className="text-[1.75rem] leading-[1.25] tracking-normal text-left text-[#4a4741] font-['AkkuratLL',sans-serif] font-light">
                              {step.title}
                            </h4>
                          </div>
                        </div>
                      </div>

                      {/* Mobile Simulator */}
                      <div
                        className="motionComponent relative h-[500px] lg:hidden"
                        style={{ opacity: 1 }}
                      >
                        <DashboardSimulator activeStep={idx} />
                      </div>

                      {/* Desktop Simulator */}
                      <div
                        className="relative mt-14 hidden lg:block shrink-0"
                        style={{ width: "520px", height: "520px" }}
                      >
                        <DashboardSimulator activeStep={idx} />
                      </div>

                      {/* Left Cards */}
                      <div className="absolute bottom-16 left-1/2 w-[80vw] max-w-[300px] -translate-x-1/2 flex-col gap-y-6 lg:relative lg:bottom-auto lg:left-0 lg:flex lg:w-auto lg:max-w-none lg:translate-x-0 lg:self-center">
                        {/* Stage Info Card */}
                        <div
                          style={{
                            backgroundImage: `linear-gradient(135deg, ${step.bgColor}cc, ${step.bgColor}88)`,
                          }}
                          className="overflow-hidden rounded-lg px-5 py-5 w-[300px] h-[212px] flex flex-col"
                        >
                          <div className="flex items-center justify-between mb-3">
                            <span className="text-xs font-mono font-bold tracking-widest uppercase text-white/80">
                              Stage {step.num}
                            </span>
                            <span className="text-xs font-mono text-white/60">
                              ACTIVE
                            </span>
                          </div>

                          <div className="mt-auto">
                            <p className="text-white font-cormorant text-xl font-normal leading-snug mb-3">
                              {step.title}
                            </p>
                            <p className="text-white/80 font-albert font-light text-sm leading-relaxed">
                              {step.desc}
                            </p>
                          </div>
                        </div>

                        {/* Key Capabilities Card with image + blur */}
                        <div
                          className="relative overflow-hidden rounded-lg w-[300px] h-[270px] bg-cover bg-center"
                          style={{
                            backgroundImage: `url('${step.image}')`,
                          }}
                        >
                          <div className="absolute inset-0" />

                          <div
                            className="absolute inset-0"
                            style={{ backgroundColor: step.bgColor, opacity: 0.2 }}
                          />

                          <div className="absolute inset-0 backdrop-blur-xl" />

                          <div className="relative z-10 flex h-full flex-col items-center justify-center px-6 py-6 text-center">
                            <p className="text-xl font-cormorant font-normal tracking-normal uppercase text-white/90 mb-4">
                              Key Capabilities
                            </p>

                            <div className="flex flex-col gap-1.5">
                              {step.bullets.slice(0, 4).map((b, i) => (
                                <p
                                  key={i}
                                  className="text-sm font-albert font-light text-white/90"
                                >
                                  {b}
                                </p>
                              ))}
                            </div>
                          </div>
                        </div>
                      </div>

                      {/* Quote */}
                      <div className="hidden self-center rounded-lg border border-[#d3d1ce] px-10 py-12 lg:block shrink-0 max-w-[260px]">
                        <svg
                          aria-hidden="true"
                          fill="none"
                          height="9"
                          viewBox="0 0 13 9"
                          width="13"
                          xmlns="http://www.w3.org/2000/svg"
                          className="text-[#5b6550]"
                        >
                          <path
                            d="M3.89374 4.16051C4.97735 4.16051 5.67646 4.99943 5.67646 6.08305C5.67646 7.27152 4.80257 8.25027 3.2995 8.25027C1.79642 8.25027 0.607943 7.02684 0.607943 5.13925C0.607943 3.18176 1.86633 1.25922 4.97735 0.315425V1.22426C3.01986 1.74859 1.93624 2.97203 1.93624 4.0906C1.93624 4.51006 2.11102 4.75475 2.35571 4.75475C2.74021 4.75475 2.94995 4.16051 3.89374 4.16051ZM10.6051 4.16051C11.6888 4.16051 12.3879 4.99943 12.3879 6.08305C12.3879 7.27152 11.514 8.25027 10.0109 8.25027C8.50783 8.25027 7.31935 7.02684 7.31935 5.13925C7.31935 3.18176 8.57774 1.25922 11.6888 0.315425V1.22426C9.73127 1.74859 8.64766 2.97203 8.64766 4.0906C8.64766 4.51006 8.82243 4.75475 9.06712 4.75475C9.48658 4.75475 9.66136 4.16051 10.6051 4.16051Z"
                            fill="currentColor"
                          ></path>
                        </svg>

                        <p className="text-left text-sandstone-500 font-cormorant leading-normal font-light text-3xl">
                          {step.title} has become
                          <br />
                          our daily compass,
                          <br />
                          keeping residents on the
                          <br />
                          right track.
                        </p>

                        <p className="text-sm leading-[1.5] tracking-normal text-left font-albert font-normal mt-4 text-sandstone-500">
                          HumanlyOS®, {step.title} Stage
                        </p>
                      </div>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};