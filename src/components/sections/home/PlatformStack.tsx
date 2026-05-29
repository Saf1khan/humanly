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
              className={`leading-relaxed ${log.includes("HumanlyPay")
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
  const [activeStep, setActiveStep] = useState(0);

  return (
    <>

      <style>{`
        .oura-scope {
          --font-mono: ui-monospace,SFMono-Regular,Menlo,Monaco,Consolas,"Liberation Mono","Courier New",monospace;
          --color-red-100: #f2d0cb;
          --color-red-400: oklch(70.4% .191 22.216);
          --color-red-600: #d22c15;
          --color-olive-400: #849671;
          --color-olive-500: #7b886d;
          --color-olive-600: #5c6f5d;
          --color-olive-700: #5b6550;
          --color-olive-800: #224228;
          --color-sandstone-100: #fefaef;
          --color-sandstone-200: #f7f1e8;
          --color-sandstone-300: #efeae2;
          --color-sandstone-400: #efe6db;
          --color-sandstone-450: #e6ded3;
          --color-sandstone-500: #4a4741;
          --color-gray-300: #d3d1ce;
          --text-body-sm: .875rem;
          --text-body-lg: 1.125rem;
          --text-heading-base: 1.75rem;
          --text-heading-lg: 2rem;
          --text-heading-xl: 2.5rem;
          --text-heading-6xl: 5rem;
          --font-sans: "AkkuratLL", sans-serif;
          --font-serif: "Editorial New", serif;
          --smallGutter: 24px;
          --largeGutter: 64px;
          --maxContent: 1440px;
          --maxCol: calc(var(--maxContent) / 22);
          font-family: var(--font-sans);
          color: var(--color-sandstone-500);
        }
        
        .oura-scope .text-sandstone-500 { color: var(--color-sandstone-500); }
        .oura-scope .text-olive-700 { color: var(--color-olive-700); }
        .oura-scope .border-gray-300 { border-color: var(--color-gray-300); }
        .oura-scope .bg-\\[\\#CBCBCB\\] { background-color: #CBCBCB; }
        
        .oura-scope .font-sans { font-family: var(--font-sans); }
        .oura-scope .font-serif { font-family: var(--font-serif); }
        
        .oura-scope .text-body-sm { font-size: var(--text-body-sm); line-height: 1.5; }
        .oura-scope .text-body-lg { font-size: var(--text-body-lg); line-height: 1.5; }
        .oura-scope .text-heading-base { font-size: var(--text-heading-base); line-height: 1.25; }
        .oura-scope .text-heading-lg { font-size: var(--text-heading-lg); line-height: 1.1; }
        .oura-scope .text-heading-xl { font-size: var(--text-heading-xl); line-height: 1.1; }
        .oura-scope .text-heading-6xl { font-size: var(--text-heading-6xl); line-height: 1; }

        @media (min-width: 768px) {
          .oura-scope .md\\:text-heading-lg { font-size: var(--text-heading-lg); line-height: 1.1; }
          .oura-scope .md\\:text-\\[length\\:var\\(--text-h1-md\\,3\\.75rem\\)\\] { font-size: 3.75rem; line-height: 1.1; }
        }

        @media (min-width: 1024px) {
          .oura-scope .lg\\:text-heading-xl { font-size: var(--text-heading-xl); line-height: 1.1; }
          .oura-scope .lg\\:text-heading-6xl { font-size: var(--text-heading-6xl); line-height: 1; }
        }

        /* 24-Column Grid System */
        .oura-scope .gridContainerV3 {
          display: grid;
          grid-template-columns: 
            [full-start] minmax(20px, 1fr) 
            [main-start] repeat(22, minmax(0, 1fr)) [main-end] 
            minmax(20px, 1fr) [full-end];
          column-gap: 8px;
          max-width: var(--maxContent);
          margin: 0 auto;
        }
        .oura-scope .col-start-main { grid-column-start: main-start; }
        .oura-scope .col-end-main { grid-column-end: main-end; }
        .oura-scope .col-start-full { grid-column-start: full-start; }
        .oura-scope .col-end-full { grid-column-end: full-end; }

        @media (min-width: 1024px) {
          .oura-scope .lg\\:col-start-main { grid-column-start: main-start; }
          .oura-scope .lg\\:col-end-14 { grid-column-end: 14; }
          .oura-scope .lg\\:col-start-16 { grid-column-start: 16; }
          .oura-scope .lg\\:col-start-3 { grid-column-start: 3; }
          .oura-scope .lg\\:col-end-23 { grid-column-end: 23; }

          /* Utility overrides needed inside tab panels */
          .oura-scope .lg\\:flex-row { flex-direction: row !important; }
          .oura-scope .lg\\:py-0 { padding-top: 0 !important; padding-bottom: 0 !important; }
          .oura-scope .lg\\:block { display: block !important; }
          .oura-scope .lg\\:hidden { display: none !important; }
          .oura-scope .lg\\:flex { display: flex !important; }
          .oura-scope .lg\\:relative { position: relative !important; }
          .oura-scope .lg\\:bottom-auto { bottom: auto !important; }
          .oura-scope .lg\\:left-0 { left: 0 !important; }
          .oura-scope .lg\\:translate-x-0 { transform: translateX(0) !important; }
          .oura-scope .lg\\:w-auto { width: auto !important; }
          .oura-scope .lg\\:max-w-none { max-width: none !important; }
          .oura-scope .lg\\:self-center { align-self: center !important; }
          .oura-scope .lg\\:pb-32 { padding-bottom: 8rem !important; }
          .oura-scope .lg\\:py-32 { padding-top: 8rem !important; padding-bottom: 8rem !important; }
          .oura-scope .lg\\:min-h-\\[825px\\] { min-height: 825px !important; }
          .oura-scope .lg\\:justify-between { justify-content: space-between !important; }
          .oura-scope .lg\\:px-12 { padding-left: 3rem !important; padding-right: 3rem !important; }
          .oura-scope .lg\\:pb-7 { padding-bottom: 1.75rem !important; }
          .oura-scope .lg\\:pt-5 { padding-top: 1.25rem !important; }
          .oura-scope .lg\\:text-base { font-size: 1rem !important; }
        }

        @media (min-width: 1280px) {
          .oura-scope .xl\\:min-h-\\[715px\\] { min-height: 715px !important; }
        }
      `}</style>

      <section className="oura-scope bg-[#f4f1ea] py-12 lg:py-24 relative z-10 w-full overflow-hidden">
        <div className="gap-y-2 gridContainerV3" data-cy="layout-grid">
          
          {/* Top Left: Title */}
          <div className="col-start-main lg:col-start-main col-end-main lg:col-end-14 lg:pb-32" data-cy="gridItem_div">
            <h2 className="text-body-lg tracking-normal text-left text-sandstone-500 font-sans leading-normal font-bold mb-6 uppercase">
              THE PLATFORM
            </h2>
            <div className="motionComponent" style={{ filter: 'blur(0px)', opacity: 1 }}>
              <h3 className="text-heading-xl tracking-tight md:text-[length:var(--text-h1-md,3.75rem)] lg:text-heading-6xl text-left text-sandstone-500 font-sans leading-none font-light flex flex-col">
                One company. One system.<br />
                <span className="motionComponent self-end" style={{ filter: 'blur(0px)', opacity: 1 }}>
                  <em className="font-serif italic text-sandstone-500">Full vertical integration.</em>
                </span>
              </h3>
            </div>
          </div>

          {/* Top Right: Description */}
          <div className="col-start-main lg:col-start-16 col-end-main flex flex-col justify-end py-8 md:py-16 lg:py-32" data-cy="gridItem_div">
            <div>
              <p className="text-body-lg tracking-normal text-left text-sandstone-500 font-sans leading-normal font-normal">
                HumanlyOS® powers every community service and transaction. It provides a data flywheel that drives continuous improvement across all communities, maximizing tenant longevity and predictive returns.
              </p>
            </div>
          </div>

          {/* Unified Tabs Layout (Mobile & Desktop) */}
          <div className="col-start-full col-end-full lg:col-start-3 lg:col-end-23 lg:min-h-[825px] xl:min-h-[715px]" data-cy="gridItem_div">
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
                        <div className="gap-y-2 gridContainerV3 pb-6 lg:hidden" data-cy="layout-grid">
                          <div className="col-start-main col-end-main" data-cy="gridItem_div">
                            <div className="motionComponent" style={{ filter: 'blur(0px)', opacity: 1 }}>
                              <h4 className="text-heading-base tracking-normal text-left text-sandstone-500 font-sans leading-normal font-light">
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
                          className="absolute bottom-16 left-1/2 w-[80vw] max-w-[300px] -translate-x-1/2 flex-col gap-y-6 lg:relative lg:bottom-auto lg:left-0 lg:flex lg:w-[300px] lg:flex-shrink-0 lg:translate-x-0 lg:self-center"
                        >
                          {/* Card 1: Stage info */}
                          <div
                            style={{
                              backgroundImage: `linear-gradient(135deg, ${step.bgColor}cc, ${step.bgColor}88)`,
                              backdropFilter: 'blur(8px)',
                            }}
                            className="overflow-hidden rounded-lg px-5 py-5"
                          >
                            <div className="flex items-center justify-between mb-3">
                              <span className="text-[10px] font-mono font-bold tracking-widest uppercase text-white/70">Stage {step.num}</span>
                              <span className="text-[10px] font-mono text-white/50">ACTIVE</span>
                            </div>
                            <p className="text-white font-sans text-sm font-semibold leading-snug mb-3">{step.title}</p>
                            <p className="text-white/80 font-sans text-xs leading-relaxed">{step.desc}</p>
                          </div>

                          {/* Card 2: Bullet list */}
                          <div
                            style={{
                              backgroundColor: '#fff',
                              border: '1px solid var(--color-gray-300)',
                            }}
                            className="overflow-hidden rounded-lg px-5 pt-4 pb-5"
                          >
                            <p className="text-[10px] font-mono font-bold tracking-widest uppercase text-olive-700 mb-3">Key Capabilities</p>
                            <div className="flex flex-col gap-1.5">
                              {step.bullets.slice(0, 4).map((b, i) => (
                                <p key={i} className="text-xs font-sans text-sandstone-500 flex items-start gap-2">
                                  <span style={{ color: step.bgColor }} className="mt-0.5 text-base leading-none">•</span>
                                  {b}
                                </p>
                              ))}
                            </div>
                          </div>
                        </div>

                        {/* Desktop Right: Quote box — hidden on mobile */}
                        <div
                          className="hidden self-center rounded-lg border border-gray-300 px-10 py-12 lg:block lg:self-center"
                          style={{ flexShrink: 0, maxWidth: '260px' }}
                        >
                          <svg aria-hidden="true" fill="none" height="9" viewBox="0 0 13 9" width="13" xmlns="http://www.w3.org/2000/svg" style={{ color: 'var(--color-olive-700)' }}>
                            <path d="M3.89374 4.16051C4.97735 4.16051 5.67646 4.99943 5.67646 6.08305C5.67646 7.27152 4.80257 8.25027 3.2995 8.25027C1.79642 8.25027 0.607943 7.02684 0.607943 5.13925C0.607943 3.18176 1.86633 1.25922 4.97735 0.315425V1.22426C3.01986 1.74859 1.93624 2.97203 1.93624 4.0906C1.93624 4.51006 2.11102 4.75475 2.35571 4.75475C2.74021 4.75475 2.94995 4.16051 3.89374 4.16051ZM10.6051 4.16051C11.6888 4.16051 12.3879 4.99943 12.3879 6.08305C12.3879 7.27152 11.514 8.25027 10.0109 8.25027C8.50783 8.25027 7.31935 7.02684 7.31935 5.13925C7.31935 3.18176 8.57774 1.25922 11.6888 0.315425V1.22426C9.73127 1.74859 8.64766 2.97203 8.64766 4.0906C8.64766 4.51006 8.82243 4.75475 9.06712 4.75475C9.48658 4.75475 9.66136 4.16051 10.6051 4.16051Z" fill="currentColor"></path>
                          </svg>
                          <p className="text-left text-sandstone-500 font-serif leading-normal font-thin mt-10"
                            style={{ fontSize: '1.875rem' }}>
                            {step.title} has become<br />our daily compass,<br />keeping residents on the<br />right track.
                          </p>
                          <p className="text-body-sm tracking-normal text-left font-sans leading-normal font-normal mt-4 text-olive-700">
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