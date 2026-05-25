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
    <div className="w-full h-full bg-[#111317] text-slate-200 font-sans flex flex-col p-5 overflow-hidden relative select-none">
      {/* Map area */}
      <div className="flex-1 rounded-2xl border border-slate-800 bg-[#0c0e11] overflow-hidden relative flex items-center justify-center">
        {/* Grid pattern background */}
        <div className="absolute inset-0 opacity-15 bg-[linear-gradient(to_right,#334155_1px,transparent_1px),linear-gradient(to_bottom,#334155_1px,transparent_1px)] bg-[size:20px_20px]" />
        
        {/* Pulsing selection ring */}
        <div className="absolute w-24 h-24 rounded-full border border-teal-500/30 flex items-center justify-center animate-ping duration-[3s]" />
        <div className="absolute w-12 h-12 rounded-full bg-teal-500/10 border border-teal-400/50 flex items-center justify-center">
          <div className="w-3 h-3 rounded-full bg-teal-400" />
        </div>
        
        {/* Scatter points representing site options */}
        <div className="absolute top-1/4 left-1/3 flex flex-col items-center">
          <div className="w-2 h-2 rounded-full bg-slate-500/40" />
          <span className="text-[7px] text-slate-500/60 font-mono mt-1">#401</span>
        </div>
        <div className="absolute bottom-1/3 right-1/4 flex flex-col items-center">
          <div className="w-2 h-2 rounded-full bg-slate-500/40" />
          <span className="text-[7px] text-slate-500/60 font-mono mt-1">#402</span>
        </div>
        
        {/* Active site tag popup */}
        <div className="absolute top-12 right-12 bg-slate-900/90 backdrop-blur border border-teal-500/30 rounded-lg p-2.5 flex flex-col gap-1 shadow-lg text-left">
          <div className="flex items-center gap-1.5">
            <MapPin className="w-3 h-3 text-teal-400" />
            <span className="text-[9px] font-bold text-white tracking-wide uppercase">SITE 084 SECURED</span>
          </div>
          <span className="text-[8px] text-teal-400 font-mono">94.6% VALUE MATCH</span>
        </div>

        {/* Floating coordinates */}
        <div className="absolute bottom-3 left-3 bg-slate-900/80 backdrop-blur border border-slate-800 rounded-lg p-2 text-left font-mono">
          <div className="text-[7.5px] text-slate-400 uppercase tracking-widest">COORDINATES</div>
          <div className="text-[9px] font-bold text-white">34.0522° N, 118.2437° W</div>
        </div>
      </div>

      {/* Audit metrics footer */}
      <div className="mt-3.5 flex justify-between gap-3 text-left">
        <div className="flex-1 bg-[#171a20] border border-slate-800/85 rounded-xl p-3">
          <div className="text-[8.5px] font-mono text-slate-400 uppercase tracking-wider mb-1">Entitlement</div>
          <div className="text-xs font-bold text-teal-400 flex items-center gap-1">
            <CheckCircle className="w-3.5 h-3.5" />
            ZONING COMPLETED
          </div>
        </div>
        <div className="flex-1 bg-[#171a20] border border-slate-800/85 rounded-xl p-3">
          <div className="text-[8.5px] font-mono text-slate-400 uppercase tracking-wider mb-1">Audit Score</div>
          <div className="text-xs font-bold text-white flex items-center gap-1">
            <TrendingUp className="w-3.5 h-3.5 text-teal-400" />
            98.2 / 100 <span className="text-[8.5px] text-slate-500 font-normal">A+</span>
          </div>
        </div>
      </div>
    </div>
  );
};

/* ── Phase 2: Build Mockup ── */
const BuildMockup = () => {
  return (
    <div className="w-full h-full bg-[#0a0c0f] text-slate-200 font-sans flex flex-col p-5 overflow-hidden relative select-none">
      {/* 3D Wireframe viewport */}
      <div className="flex-1 rounded-2xl border border-slate-800 bg-[#05070a] overflow-hidden relative flex items-center justify-center">
        {/* Isometric grid */}
        <div className="absolute inset-0 opacity-10 bg-[linear-gradient(45deg,#38bdf8_1px,transparent_1px),linear-gradient(-45deg,#38bdf8_1px,transparent_1px)] bg-[size:24px_24px]" />

        {/* 3D simulated wireframe cube/house drawing */}
        <svg className="w-44 h-44 text-sky-400/40" viewBox="0 0 100 100" fill="none" stroke="currentColor" strokeWidth="0.85">
          {/* Base */}
          <polygon points="50,20 85,38 50,56 15,38" stroke="currentColor" />
          <line x1="32.5" y1="29" x2="67.5" y2="47" />
          <line x1="67.5" y1="29" x2="32.5" y2="47" />
          {/* Pillars */}
          <line x1="15" y1="38" x2="15" y2="70" />
          <line x1="50" y1="56" x2="50" y2="88" />
          <line x1="85" y1="38" x2="85" y2="70" />
          {/* Top roof structure */}
          <polygon points="50,48 85,30 50,12 15,30" stroke="currentColor" strokeWidth="1" className="text-sky-400" />
          <line x1="15" y1="30" x2="15" y2="38" strokeWidth="1" className="text-sky-400" />
          <line x1="50" y1="48" x2="50" y2="56" strokeWidth="1" className="text-sky-400" />
          <line x1="85" y1="30" x2="85" y2="38" strokeWidth="1" className="text-sky-400" />
          <line x1="15" y1="30" x2="50" y2="48" strokeWidth="1" className="text-sky-400" />
          <line x1="50" y1="48" x2="85" y2="30" strokeWidth="1" className="text-sky-400" />
          <line x1="85" y1="30" x2="50" y2="12" strokeWidth="1" className="text-sky-400" />
          <line x1="50" y1="12" x2="15" y2="30" strokeWidth="1" className="text-sky-400" />
        </svg>

        {/* Floating parameters overlay */}
        <div className="absolute top-4 left-4 bg-sky-950/60 backdrop-blur border border-sky-500/30 rounded-lg px-2.5 py-1 text-left font-mono">
          <div className="text-[7.5px] text-sky-400 uppercase tracking-widest">KIT MODULE</div>
          <div className="text-[10px] font-bold text-white uppercase">A2 Studio - Modular</div>
        </div>

        <div className="absolute bottom-4 right-4 bg-sky-950/60 backdrop-blur border border-sky-500/30 rounded-lg px-2.5 py-1 text-left font-mono">
          <div className="text-[7.5px] text-sky-400 uppercase tracking-widest">3D SIMULATION</div>
          <div className="text-[10px] font-bold text-green-400 animate-pulse uppercase">OPTIMIZED (0.04s)</div>
        </div>

        {/* Live Generation Loader */}
        <div className="absolute bottom-4 left-4 flex flex-col gap-1 items-start text-left font-mono">
          <div className="text-[9px] text-sky-400 flex items-center gap-1.5">
            <span className="w-1.5 h-1.5 rounded-full bg-sky-400 animate-ping" />
            ASSEMBLY OPTIMIZATION...
          </div>
          <div className="w-32 bg-slate-800 h-1.5 rounded-full overflow-hidden relative">
            <motion.div 
              className="h-full bg-sky-400 rounded-full" 
              initial={{ width: "0%" }}
              animate={{ width: "100%" }}
              transition={{ repeat: Infinity, duration: 3, ease: "linear" }}
            />
          </div>
        </div>
      </div>

      {/* Assembly indicators */}
      <div className="mt-3.5 flex justify-between gap-3 text-left">
        <div className="flex-1 bg-[#12151a] border border-slate-800/85 rounded-xl p-3">
          <div className="text-[8.5px] font-mono text-slate-400 uppercase tracking-wider mb-1">Time to Assemble</div>
          <div className="text-[11px] font-bold text-white font-mono uppercase">24 DAYS <span className="text-[9px] text-green-400 font-normal">(-15%)</span></div>
        </div>
        <div className="flex-1 bg-[#12151a] border border-slate-800/85 rounded-xl p-3">
          <div className="text-[8.5px] font-mono text-slate-400 uppercase tracking-wider mb-1">Carbon Reduction</div>
          <div className="text-[11px] font-bold text-sky-400 font-mono uppercase">-38% SUSTAINED</div>
        </div>
      </div>
    </div>
  );
};

/* ── Phase 3: Operate Mockup ── */
const OperateMockup = () => {
  const [logs, setLogs] = useState<string[]>([
    "HumanlyOS® Core initialized...",
    "Payment portal: connection normal.",
    "Ops dispatch: smart maintenance active."
  ]);

  const logOptions = [
    "Rent payment processed via HumanlyPay™ (+$2,450)",
    "Resident ticket #102: Smart HVAC filter replaced",
    "EV charging station: Session started in lot A",
    "Security node check: All locks secured",
    "Circle of Services: Community cleaner dispatched",
    "Resident booking: Sky Lounge reserved"
  ];

  useEffect(() => {
    const interval = setInterval(() => {
      const randomLog = logOptions[Math.floor(Math.random() * logOptions.length)];
      const now = new Date();
      const timeStr = `${now.getHours().toString().padStart(2, '0')}:${now.getMinutes().toString().padStart(2, '0')}:${now.getSeconds().toString().padStart(2, '0')}`;
      const logMsg = `[${timeStr}] ${randomLog}`;
      
      setLogs((prev) => {
        const next = [...prev, logMsg];
        if (next.length > 5) {
          return next.slice(1);
        }
        return next;
      });
    }, 3000);

    return () => clearInterval(interval);
  }, []);

  return (
    <div className="w-full h-full bg-[#0a0e12] text-slate-200 font-sans flex flex-col p-5 overflow-hidden relative select-none">
      {/* Title / Status */}
      <div className="flex justify-between items-center mb-3">
        <div className="flex items-center gap-2">
          <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse" />
          <span className="text-[11px] font-mono font-bold text-emerald-400 uppercase tracking-wider">HumanlyOS® ACTIVE</span>
        </div>
        <span className="text-[9px] font-mono text-slate-500">RESIDENTS: 1,420</span>
      </div>

      {/* Log Feed Console */}
      <div className="flex-1 rounded-2xl border border-slate-800 bg-[#06080b] p-4 flex flex-col font-mono text-[9.5px] text-left overflow-hidden">
        <div className="text-[8.5px] text-slate-500 border-b border-slate-800/80 pb-2 mb-2 uppercase tracking-widest flex items-center gap-1.5">
          <Activity className="w-3.5 h-3.5 text-emerald-400" />
          Real-time Event Stream
        </div>
        <div className="flex-1 flex flex-col gap-2 overflow-y-auto [&::-webkit-scrollbar]:hidden" style={{ scrollbarWidth: "none" }}>
          {logs.map((log, idx) => (
            <div 
              key={idx} 
              className={`leading-relaxed ${
                log.includes("HumanlyPay") 
                  ? "text-emerald-400 font-semibold" 
                  : log.includes("dispatched") 
                    ? "text-amber-400" 
                    : "text-slate-300"
              }`}
            >
              {log}
            </div>
          ))}
        </div>
      </div>

      {/* Metrics */}
      <div className="mt-3.5 flex justify-between gap-3 text-left">
        <div className="flex-1 bg-[#10171e] border border-slate-800/85 rounded-xl p-3">
          <div className="text-[8.5px] font-mono text-slate-400 uppercase tracking-wider mb-1 flex items-center gap-1">
            <DollarSign className="w-3 h-3 text-emerald-400" />
            Embedded Finance
          </div>
          <div className="text-[11px] font-bold text-white font-mono uppercase">$184.2K <span className="text-[9px] text-emerald-400 font-normal">ARR</span></div>
        </div>
        <div className="flex-1 bg-[#10171e] border border-slate-800/85 rounded-xl p-3">
          <div className="text-[8.5px] font-mono text-slate-400 uppercase tracking-wider mb-1 flex items-center gap-1">
            <Clock className="w-3 h-3 text-amber-400" />
            Dispatch Time
          </div>
          <div className="text-[11px] font-bold text-white font-mono uppercase">12.4 MINS <span className="text-[9px] text-emerald-400 font-normal">(-40%)</span></div>
        </div>
      </div>
    </div>
  );
};

/* ── Phase 4: Compound Mockup ── */
const CompoundMockup = () => {
  return (
    <div className="w-full h-full bg-[#110c09] text-slate-200 font-sans flex flex-col p-5 overflow-hidden relative select-none">
      {/* Vector visual */}
      <div className="flex-1 rounded-2xl border border-slate-800 bg-[#090605] overflow-hidden relative flex flex-col lg:flex-row items-center justify-around p-4 gap-4">
        
        {/* Flywheel animation */}
        <div className="relative w-36 h-36 flex items-center justify-center flex-shrink-0">
          {/* Pulsing circular rings */}
          <div className="absolute inset-0 rounded-full border border-orange-500/10 animate-pulse" />
          <div className="absolute inset-4 rounded-full border border-dashed border-orange-500/20 animate-[spin_40s_linear_infinite]" />
          <div className="absolute inset-8 rounded-full border border-orange-500/30 animate-[spin_20s_linear_infinite_reverse]" />
          
          {/* Core logo */}
          <div className="relative z-10 flex flex-col items-center">
            <Database className="w-5 h-5 text-orange-400" />
            <span className="text-[7.5px] font-mono font-bold tracking-widest text-orange-300 mt-1 uppercase">Flywheel</span>
          </div>

          {/* Node text tags */}
          <div className="absolute top-1 text-[7px] font-mono uppercase bg-slate-900/90 border border-orange-500/20 px-1 rounded">Ops Feed</div>
          <div className="absolute bottom-1 text-[7px] font-mono uppercase bg-slate-900/90 border border-orange-500/20 px-1 rounded">Asset Yield</div>
          <div className="absolute left-1 text-[7px] font-mono uppercase bg-slate-900/90 border border-orange-500/20 px-1 rounded">Optimize</div>
        </div>

        {/* Rising chart */}
        <div className="flex-1 w-full h-full flex flex-col justify-end text-left pt-2 font-mono">
          <div className="text-[8.5px] text-slate-400 mb-1.5 flex items-center gap-1 uppercase tracking-wider">
            <TrendingUp className="w-3.5 h-3.5 text-orange-400" />
            Cumulative Yield Curve
          </div>
          
          <div className="flex-1 relative flex items-end border-b border-l border-slate-800/80 p-1 min-h-[75px]">
            {/* SVG line chart */}
            <svg className="w-full h-full absolute inset-0 text-orange-500" viewBox="0 0 100 40" preserveAspectRatio="none">
              <motion.path 
                d="M0,40 Q25,38 50,30 T100,5" 
                fill="none" 
                stroke="currentColor" 
                strokeWidth="1.5" 
                initial={{ pathLength: 0 }}
                animate={{ pathLength: 1 }}
                transition={{ duration: 2, ease: "easeOut" }}
              />
              <path 
                d="M0,40 Q25,38 50,30 T100,5 L100,40 Z" 
                fill="url(#orange-grad)" 
                opacity="0.1" 
              />
              <defs>
                <linearGradient id="orange-grad" x1="0%" y1="0%" x2="0%" y2="100%">
                  <stop offset="0%" stopColor="#f97316" stopOpacity="0.8" />
                  <stop offset="100%" stopColor="#f97316" stopOpacity="0" />
                </linearGradient>
              </defs>
            </svg>
            <div className="absolute top-2 right-2 text-[10px] font-bold text-white">1.42x</div>
          </div>
          
          <div className="flex justify-between text-[8px] text-slate-500 mt-1">
            <span>START</span>
            <span>YEAR 3</span>
            <span>YEAR 5</span>
          </div>
        </div>
      </div>

      {/* Flywheel indicators */}
      <div className="mt-3.5 flex justify-between gap-3 text-left">
        <div className="flex-1 bg-[#1a1411] border border-slate-800/85 rounded-xl p-3">
          <div className="text-[8.5px] font-mono text-slate-400 uppercase tracking-wider mb-1">Compound IRR</div>
          <div className="text-[11px] font-bold text-orange-400 font-mono uppercase">12.8% PROJ.</div>
        </div>
        <div className="flex-1 bg-[#1a1411] border border-slate-800/85 rounded-xl p-3">
          <div className="text-[8.5px] font-mono text-slate-400 uppercase tracking-wider mb-1">Tenant Longevity</div>
          <div className="text-[11px] font-bold text-white font-mono uppercase">+42% VALUE</div>
        </div>
      </div>
    </div>
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
    <div className="w-full h-full rounded-2xl bg-[#090b0e] border border-slate-800 shadow-[0_30px_60px_rgba(0,0,0,0.4)] flex flex-col overflow-hidden">
      {/* macOS Style Window controls */}
      <div className="bg-[#12161b] border-b border-slate-800/80 px-4 py-3 flex items-center gap-2 flex-shrink-0 select-none">
        {/* Circle buttons */}
        <div className="flex gap-1.5 mr-2">
          <div className="w-2.5 h-2.5 rounded-full bg-red-500/70" />
          <div className="w-2.5 h-2.5 rounded-full bg-yellow-500/70" />
          <div className="w-2.5 h-2.5 rounded-full bg-green-500/70" />
        </div>
        {/* Simulated browser address */}
        <div className="flex-1 max-w-sm mx-auto bg-[#07090c] border border-slate-800/80 rounded-md py-1 px-3 text-[9px] font-mono text-slate-400 text-center select-all tracking-wide">
          humanly.app / platform / {steps[activeStep].title.toLowerCase()}
        </div>
        {/* Status */}
        <div className="flex items-center gap-1.5">
          <div className="w-1.5 h-1.5 rounded-full bg-teal-400 animate-pulse" />
          <span className="text-[8px] font-mono font-bold tracking-widest text-teal-400/90 uppercase">SYS_LIVE</span>
        </div>
      </div>
      
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
  const containerRef = useRef<HTMLDivElement>(null);
  const [activeStep, setActiveStep] = useState(0);

  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ['start start', 'end end'],
  });

  useEffect(() => {
    return scrollYProgress.on("change", (latest) => {
      // 4 steps split evenly from 0.0 to 1.0
      if (latest < 0.25) {
        setActiveStep(0);
      } else if (latest < 0.5) {
        setActiveStep(1);
      } else if (latest < 0.75) {
        setActiveStep(2);
      } else {
        setActiveStep(3);
      }
    });
  }, [scrollYProgress]);

  return (
    <>
      {/* ── Static header ── */}
      <section className="py-24 bg-[#f4f1ea] text-center relative z-10">
        <div className="flex flex-col items-center gap-2 mb-6">
          <p className="text-[11px] font-bold tracking-[0.2em] uppercase text-slate-800/55">
            THE PLATFORM
          </p>
          <div className="h-[2px] w-10 bg-slate-800/35 rounded-full" />
        </div>
        <h2 className="text-4xl md:text-5xl lg:text-6xl font-display font-bold text-slate-900 leading-[1.1] tracking-tight">
          One company. One system.<br />Full vertical integration.
        </h2>
        <p className="mt-8 text-xs font-mono text-slate-900/35 uppercase tracking-[0.25em] animate-pulse">
          ↓ &nbsp; Scroll to explore each stage
        </p>
      </section>

      {/* ── Sticky Scroll-linked Dashboard Simulator ── */}
      <div className="bg-[#f4f1ea] pb-24 relative z-15">
        <div className="max-w-[1440px] mx-auto px-6 md:px-16">
          
          <div ref={containerRef} className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start relative">
            
            {/* Left Column: Vertical Timeline Steps */}
            <div className="col-span-1 lg:col-span-5 flex flex-col gap-12">
              {steps.map((step, idx) => {
                const isActive = activeStep === idx;
                return (
                  <div
                    key={idx}
                    className="rounded-3xl p-8 lg:p-12 min-h-[55vh] flex flex-col justify-between transition-all duration-500 border border-slate-900/5 select-none"
                    style={{
                      backgroundColor: step.bgColor,
                    }}
                  >
                    {/* Top indicator bar */}
                    <div className="flex justify-between items-center mb-6">
                      <span className="text-[10px] font-mono font-bold tracking-[0.35em] text-slate-900/40 uppercase">
                        {step.num}
                      </span>
                      <div 
                        className={`w-2.5 h-2.5 rounded-full transition-all duration-300 ${
                          isActive ? 'bg-slate-900 scale-125 shadow-md' : 'bg-slate-900/10'
                        }`}
                      />
                    </div>

                    {/* Content copy */}
                    <div className="flex-1 flex flex-col justify-center gap-4">
                      <h3 className="font-display font-extrabold text-slate-900 text-3xl lg:text-4xl uppercase tracking-tight leading-[0.95]">
                        {step.title}
                      </h3>
                      <p className="text-sm md:text-base text-slate-800/80 leading-relaxed font-medium">
                        {step.desc}
                      </p>
                      
                      {/* Grid lists */}
                      <div className="grid grid-cols-2 gap-x-6 gap-y-2.5 border-t border-slate-900/10 pt-5 mt-2">
                        {step.bullets.map((bullet, bIdx) => (
                          <div
                            key={bIdx}
                            className="text-[9.5px] font-mono font-bold tracking-wider text-slate-900/70 hover:text-slate-900 transition-colors duration-200 flex items-center gap-1.5 cursor-default"
                          >
                            <span className="text-slate-900/30 text-xs font-light">/</span>
                            {bullet.toUpperCase()}
                          </div>
                        ))}
                      </div>
                    </div>

                    {/* Inline interactive mockup display (Mobile Only) */}
                    <div className="block lg:hidden mt-8 h-[320px] w-full rounded-2xl overflow-hidden border border-slate-900/10 shadow-lg">
                      {idx === 0 && <LandMockup />}
                      {idx === 1 && <BuildMockup />}
                      {idx === 2 && <OperateMockup />}
                      {idx === 3 && <CompoundMockup />}
                    </div>

                    {/* Call to action */}
                    <div className="mt-8 flex items-center gap-4 group cursor-pointer w-fit">
                      <div className="border border-slate-900/20 rounded-full px-5 py-2.5 text-[9.5px] font-mono font-bold tracking-widest uppercase text-slate-900 transition-colors duration-300 group-hover:border-slate-900">
                        See the stage
                      </div>
                      <div className="relative w-10 h-10 rounded-full border border-slate-900/20 flex items-center justify-center overflow-hidden transition-colors duration-300 group-hover:border-slate-900">
                        <div className="absolute inset-0 flex items-center justify-center">
                          <div className="w-1.5 h-1.5 rounded-full bg-slate-900 transition-transform duration-500 ease-out group-hover:scale-[15]" />
                        </div>
                        <div className="relative z-10 flex items-center justify-center w-full h-full overflow-hidden">
                          <ArrowUpRight className="w-4.5 h-4.5 text-slate-900 transition-all duration-500 ease-out group-hover:text-white group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
                        </div>
                      </div>
                    </div>

                  </div>
                );
              })}
            </div>

            {/* Right Column: Sticky Simulator (Desktop Only) */}
            <div className="hidden lg:block col-span-7 sticky top-[15vh] h-[65vh]">
              <DashboardSimulator activeStep={activeStep} />
            </div>

          </div>

        </div>
      </div>
    </>
  );
};