"use client";
import React, { useRef, useState, useEffect } from 'react';
import { motion, useScroll, AnimatePresence } from 'framer-motion';
import {
  ArrowUpRight,
  MapPin,
  Hammer,
  Activity,
  Database,
  CheckCircle,
  TrendingUp,
  Clock,
  DollarSign
} from 'lucide-react';

/* ─────────────────────────────────────────────
   Data
───────────────────────────────────────────── */
const steps = [
  {
    num: '01',
    title: 'Land',
    desc: 'AI-driven site selection, market intelligence, and entitlement.',
    bgColor: '#BFCCD8',
    bullets: [
      'Audit & benchmark',
      'AI site selection',
      'Market intelligence',
      'Zoning entitlement',
      'Predictive valuation',
      'Acquisition strategy',
    ]
  },
  {
    num: '02',
    title: 'Build',
    desc: 'Design kit, rapid 3D modelling, and streamlined construction.',
    bgColor: '#B692A1',
    bullets: [
      'Modular design kit',
      'Rapid 3D modeling',
      'Prefabricated assembly',
      'Supply optimization',
      'Site orchestration',
      'Sustainable building',
    ]
  },
  {
    num: '03',
    title: 'Operate',
    desc: 'HumanlyOS® powers every community service and transaction.',
    bgColor: '#798E7B',
    bullets: [
      'Embedded finance core',
      'Automated service flow',
      'Intelligent dispatch',
      'Resident engagement',
      'Ops orchestration',
      'Smart maintenance',
    ]
  },
  {
    num: '04',
    title: 'Compound',
    desc: 'Data flywheel drives continuous improvement across all communities.',
    bgColor: '#E49366',
    bullets: [
      'Feedback cycle loops',
      'Community asset yield',
      'Predictive maintenance',
      'Compound returns',
      'Tenant longevity',
      'Flywheel performance',
    ]
  },
];

/* ─────────────────────────────────────────────
   Right Column Mockup Components
───────────────────────────────────────────── */

/* ── Phase 1: Land Mockup ── */
const LandMockup = () => {
  return (
    <div 
      className="w-full h-full bg-[#111317] overflow-hidden"
      style={{
        backgroundImage: `url('/images/pexels-tomfisk-34115060.jpg')`,
        backgroundSize: 'cover',
        backgroundPosition: 'center'
      }}
    />
  );
};

/* ── Phase 2: Build Mockup ── */
const BuildMockup = () => {
  return (
    <div 
      className="w-full h-full bg-[#0a0c0f] overflow-hidden"
      style={{
        backgroundImage: `url('/images/pexels-mahmoudramadan-36444550.jpg')`,
        backgroundSize: 'cover',
        backgroundPosition: 'center'
      }}
    />
  );
};

/* ── Phase 3: Operate Mockup ── */
const OperateMockup = () => {
  return (
    <div 
      className="w-full h-full bg-[#0a0e12] overflow-hidden"
      style={{
        backgroundImage: `url('/images/pexels-karola-g-6627903.jpg')`,
        backgroundSize: 'cover',
        backgroundPosition: 'center'
      }}
    />
  );
};

/* ── Phase 4: Compound Mockup ── */
const CompoundMockup = () => {
  return (
    <div 
      className="w-full h-full bg-[#110c09] overflow-hidden"
      style={{
        backgroundImage: `url('/images/pexels-markus-winkler-1430818-4604639.jpg')`,
        backgroundSize: 'cover',
        backgroundPosition: 'center'
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
      {/* Simulator Content Area */}
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
    <>
      <section className="font-['AkkuratLL',sans-serif] text-[#4a4741] bg-transparent py-12 lg:py-24 relative z-10 w-full overflow-hidden">
        <div className="gap-y-2 grid grid-cols-[minmax(20px,1fr)_repeat(22,minmax(0,1fr))_minmax(20px,1fr)] gap-x-2 max-w-[1440px] mx-auto" data-cy="layout-grid">
          
          {/* Top Left: Title */}
          <div className="col-start-2 lg:col-start-2 col-end-[24] lg:col-end-14 lg:pb-8" data-cy="gridItem_div">
            <h2 className="text-[1.125rem] leading-[1.5] tracking-normal text-left text-[#4a4741] font-['AkkuratLL',sans-serif] font-bold mb-6 uppercase">
              THE PLATFORM
            </h2>
            <div className="motionComponent" style={{ filter: 'blur(0px)', opacity: 1 }}>
              <h3 className="text-[2.5rem] leading-[1.1] tracking-tight md:text-[3.75rem] md:leading-[1.1] lg:text-[5rem] lg:leading-[1] text-left text-[#4a4741] font-['AkkuratLL',sans-serif] font-light flex flex-col">
                One company, One <br />system. Full
                <span className="motionComponent" style={{ filter: 'blur(0px)', opacity: 1 }}>
                  <em className="font-['Editorial_New',serif] self-end italic text-[#4a4741]">vertical integration.</em>
                </span>
              </h3>
            </div>
          </div>

          {/* Top Right: Description */}
          <div className="col-start-2 lg:col-start-[15] col-end-[24] flex flex-col justify-center py-8 md:py-16 lg:py-0" data-cy="gridItem_div">
            <div>
              <p className="text-[1.125rem] leading-[1.5] tracking-normal text-left text-[#4a4741] font-['AkkuratLL',sans-serif] font-normal">
                HumanlyOS® powers every community service and transaction. It provides a data flywheel that drives continuous improvement across all communities, maximizing tenant longevity and predictive returns.
              </p>
            </div>
          </div>

          {/* Unified Tabs Layout (Mobile & Desktop) */}
          <div className="col-start-1 col-end-[25] lg:col-start-3 lg:col-end-[23] lg:min-h-[825px] xl:min-h-[715px]" data-cy="gridItem_div">
            <div className="motionComponent" style={{ opacity: 1 }}>
              <div className="flex gap-y-10 flex-col md:gap-y-12" data-cy="tabs" data-orientation="default" data-style="default">
                
                {/* Tab List */}
                <div>
                  <div className="relative">
                    <div className="flex gap-x-8 relative z-10 justify-start lg:justify-between overflow-x-auto scrollbar-hide px-0 lg:px-0" data-cy="tabs_tablist" role="tablist">
                      {steps.map((step, idx) => {
                        const isActive = activeStep === idx;
                        return (
                          <button
                            key={idx}
                            onClick={() => setActiveStep(idx)}
                            aria-controls={`_R_aekpinlaivb_-tabpanel-${idx}`}
                            id={`_R_aekpinlaivb_-tab-${idx}`}
                            aria-selected={isActive}
                            className={`whitespace-nowrap appearance-none duration-300 flex items-center justify-center bg-transparent border-0 border-b-[3px] border-solid pb-4 pt-3 relative text-sm transition-opacity hover:opacity-100 lg:pb-7 lg:pt-5 lg:px-12 lg:text-base px-0 ${
                              isActive ? 'border-b-current opacity-100' : 'border-b-transparent opacity-70'
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
                    <div className="absolute bottom-0 bg-[#CBCBCB] h-[1px] left-0 w-full" role="presentation"></div>
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
                        className="motionComponent relative flex flex-col justify-center gap-x-6 pt-12 pb-32 lg:flex-row lg:py-0"
                        data-cy="mobile-feature"
                        style={{ opacity: 1 }}
                      >

                        {/* Mobile Title (Hidden on Desktop) */}
                        <div className="gap-y-2 grid grid-cols-[minmax(20px,1fr)_repeat(22,minmax(0,1fr))_minmax(20px,1fr)] gap-x-2 max-w-[1440px] mx-auto pb-6 lg:hidden" data-cy="layout-grid">
                          <div className="col-start-2 col-end-[24]" data-cy="gridItem_div">
                            <div className="motionComponent" style={{ filter: 'blur(0px)', opacity: 1 }}>
                              <h4 className="text-[1.75rem] leading-[1.25] tracking-normal text-left text-[#4a4741] font-['AkkuratLL',sans-serif] font-light">
                                {step.title}
                              </h4>
                            </div>
                          </div>
                        </div>

                        {/* Mobile Simulator (Hidden on Desktop) */}
                        <div className="motionComponent relative h-[500px] lg:hidden" style={{ opacity: 1 }}>
                          <DashboardSimulator activeStep={idx} />
                        </div>

                        {/* Desktop Left: Main Simulator image — hidden on mobile */}
                        <div className="relative mt-14 hidden lg:block flex-shrink-0" data-cy="start-day" style={{ width: '520px', height: '520px' }}>
                          <DashboardSimulator activeStep={idx} />
                        </div>

                        {/* Desktop Middle: Two stacked feature cards — absolute on mobile, flex column on desktop */}
                        <div
                          className="absolute bottom-16 left-1/2 w-[80vw] max-w-[300px] -translate-x-1/2 flex-col gap-y-6 lg:relative lg:bottom-auto lg:left-0 lg:flex lg:w-auto lg:max-w-none lg:translate-x-0 lg:self-center"
                        >
                          {/* Card 1: Stage info */}
                          <div
                            style={{
                              backgroundImage: `linear-gradient(135deg, ${step.bgColor}cc, ${step.bgColor}88)`,
                              backdropFilter: 'blur(8px)',
                            }}
                            className="overflow-hidden rounded-lg px-5 py-5 w-[300px] h-[228px] flex flex-col justify-between"
                          >
                            <div className="flex items-center justify-between mb-3">
                              <span className="text-[10px] font-mono font-bold tracking-widest uppercase text-white/70">Stage {step.num}</span>
                              <span className="text-[10px] font-mono text-white/50">ACTIVE</span>
                            </div>
                            <p className="text-white font-['AkkuratLL',sans-serif] text-sm font-semibold leading-snug mb-3">{step.title}</p>
                            <p className="text-white/80 font-['AkkuratLL',sans-serif] text-xs leading-relaxed">{step.desc}</p>
                          </div>

                          {/* Card 2: Bullet list */}
                          <div
                            style={{
                              backgroundColor: '#fff',
                            }}
                            className="overflow-hidden rounded-lg px-5 pt-4 pb-5 w-[300px] h-[270px] flex flex-col border border-[#d3d1ce]"
                          >
                            <p className="text-[10px] font-mono font-bold tracking-widest uppercase text-[#5b6550] mb-3">Key Capabilities</p>
                            <div className="flex flex-col gap-1.5">
                              {step.bullets.slice(0, 4).map((b, i) => (
                                <p key={i} className="text-xs font-['AkkuratLL',sans-serif] text-[#4a4741] flex items-start gap-2">
                                  <span style={{ color: step.bgColor }} className="mt-0.5 text-base leading-none">•</span>
                                  {b}
                                </p>
                              ))}
                            </div>
                          </div>
                        </div>

                        {/* Desktop Right: Quote box — hidden on mobile */}
                        <div
                          className="hidden self-center rounded-lg border border-[#d3d1ce] px-10 py-12 lg:block lg:self-center shrink-0 max-w-[260px]"
                        >
                          <svg aria-hidden="true" fill="none" height="9" viewBox="0 0 13 9" width="13" xmlns="http://www.w3.org/2000/svg" className="text-[#5b6550]">
                            <path d="M3.89374 4.16051C4.97735 4.16051 5.67646 4.99943 5.67646 6.08305C5.67646 7.27152 4.80257 8.25027 3.2995 8.25027C1.79642 8.25027 0.607943 7.02684 0.607943 5.13925C0.607943 3.18176 1.86633 1.25922 4.97735 0.315425V1.22426C3.01986 1.74859 1.93624 2.97203 1.93624 4.0906C1.93624 4.51006 2.11102 4.75475 2.35571 4.75475C2.74021 4.75475 2.94995 4.16051 3.89374 4.16051ZM10.6051 4.16051C11.6888 4.16051 12.3879 4.99943 12.3879 6.08305C12.3879 7.27152 11.514 8.25027 10.0109 8.25027C8.50783 8.25027 7.31935 7.02684 7.31935 5.13925C7.31935 3.18176 8.57774 1.25922 11.6888 0.315425V1.22426C9.73127 1.74859 8.64766 2.97203 8.64766 4.0906C8.64766 4.51006 8.82243 4.75475 9.06712 4.75475C9.48658 4.75475 9.66136 4.16051 10.6051 4.16051Z" fill="currentColor"></path>
                          </svg>
                          <p className="text-left text-[#4a4741] font-['Editorial_New',serif] leading-normal font-thin mt-10 text-[1.875rem]">
                            {step.title} has become<br />our daily compass,<br />keeping residents on the<br />right track.
                          </p>
                          <p className="text-[0.875rem] leading-[1.5] tracking-normal text-left font-['AkkuratLL',sans-serif] font-normal mt-4 text-[#5b6550]">
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
    </>
  );
};