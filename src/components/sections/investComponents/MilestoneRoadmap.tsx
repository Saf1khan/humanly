"use client";
import React, { useRef } from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';

export const MilestoneRoadmap = () => {
  const sectionRef = useRef<HTMLElement>(null);

  return (
    <section ref={sectionRef} className="relative py-24 lg:py-40 bg-[#0f0f0f] text-white overflow-hidden">
      {/* Film Grain Noise Overlay — matveyan.com */}
      <div
        className="absolute inset-0 pointer-events-none z-[1] opacity-[0.04] mix-blend-overlay"
        style={{
          backgroundImage: `url("data:image/svg+xml,%3Csvg viewBox='0 0 200 200' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='n'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.85' numOctaves='4' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23n)'/%3E%3C/svg%3E")`,
          backgroundRepeat: 'repeat',
          backgroundSize: '128px',
        }}
      />
      {/* Edge Blur — matveyan.com */}
      <div className="absolute inset-x-0 top-0 h-24 bg-gradient-to-b from-[#0f0f0f] to-transparent pointer-events-none z-[2]" />
      <div className="absolute inset-x-0 bottom-0 h-24 bg-gradient-to-t from-[#0f0f0f] to-transparent pointer-events-none z-[2]" />
      {/* Corner crosshair marks — matveyan.com */}
      <svg width="5" height="5" viewBox="0 0 5 5" fill="none" className="absolute top-3 left-3 z-20 pointer-events-none text-white/30"><path d="M3 2H5V3H3V5H2V3H0V2H2V0H3V2Z" fill="currentColor" /></svg>
      <svg width="5" height="5" viewBox="0 0 5 5" fill="none" className="absolute top-3 right-3 z-20 pointer-events-none text-white/30"><path d="M3 2H5V3H3V5H2V3H0V2H2V0H3V2Z" fill="currentColor" /></svg>
      <svg width="5" height="5" viewBox="0 0 5 5" fill="none" className="absolute bottom-3 left-3 z-20 pointer-events-none text-white/30"><path d="M3 2H5V3H3V5H2V3H0V2H2V0H3V2Z" fill="currentColor" /></svg>
      <svg width="5" height="5" viewBox="0 0 5 5" fill="none" className="absolute bottom-3 right-3 z-20 pointer-events-none text-white/30"><path d="M3 2H5V3H3V5H2V3H0V2H2V0H3V2Z" fill="currentColor" /></svg>

      {/* Connector Tech Shape (Left - joining from top) */}
      <div className="absolute top-0 left-[2%] lg:left-[8%] w-[300px] h-[800px] pointer-events-none opacity-[0.35] z-[1]">
        <svg viewBox="0 0 300 800" className="w-full h-full">
          <motion.path 
            initial={{ pathLength: 0, opacity: 0 }}
            whileInView={{ pathLength: 1, opacity: 1 }}
            transition={{ duration: 2, ease: "easeOut" }}
            d="M 150 0 L 150 400 L 50 500 L 50 800" fill="none" stroke="#3daf98" strokeWidth="2" strokeDasharray="8 8" 
          />
          <motion.path 
            initial={{ pathLength: 0, opacity: 0 }}
            whileInView={{ pathLength: 1, opacity: 0.6 }}
            transition={{ duration: 2.5, ease: "easeOut", delay: 0.2 }}
            d="M 180 0 L 180 380 L 260 460 L 260 800" fill="none" stroke="#2d7dd2" strokeWidth="1" 
          />
          
          <motion.rect initial={{ opacity: 0 }} whileInView={{ opacity: 1 }} transition={{ delay: 1 }} x="146" y="200" width="8" height="8" fill="#3daf98" className="animate-pulse" />
          <motion.circle initial={{ opacity: 0 }} whileInView={{ opacity: 1 }} transition={{ delay: 1.2 }} cx="180" cy="250" r="4" fill="#2d7dd2" />
          <motion.rect initial={{ opacity: 0 }} whileInView={{ opacity: 1 }} transition={{ delay: 1.5 }} x="46" y="500" width="8" height="8" fill="none" stroke="#3daf98" strokeWidth="2" />
          <motion.circle initial={{ opacity: 0 }} whileInView={{ opacity: 1 }} transition={{ delay: 1.8 }} cx="260" cy="460" r="6" fill="#2d7dd2" />
          
          <circle cx="150" cy="400" r="140" fill="url(#glowLeftPipe)" />
          <defs>
            <radialGradient id="glowLeftPipe" cx="50%" cy="50%" r="50%">
              <stop offset="0%" stopColor="#3daf98" stopOpacity="0.15" />
              <stop offset="100%" stopColor="transparent" stopOpacity="0" />
            </radialGradient>
          </defs>
        </svg>
      </div>

      {/* Connector Tech Shape (Right - joining from top) */}
      <div className="absolute top-0 right-0 w-[400px] h-[700px] pointer-events-none opacity-[0.35] z-[1]">
        <svg viewBox="0 0 400 700" className="w-full h-full">
          <motion.path 
            initial={{ pathLength: 0, opacity: 0 }}
            whileInView={{ pathLength: 1, opacity: 1 }}
            transition={{ duration: 1.8, ease: "easeOut", delay: 0.3 }}
            d="M 250 0 L 250 200 L 100 350 L 100 700" fill="none" stroke="#f09050" strokeWidth="1.5" strokeDasharray="12 6" 
          />
          <motion.path 
            initial={{ pathLength: 0, opacity: 0 }}
            whileInView={{ pathLength: 1, opacity: 0.4 }}
            transition={{ duration: 2.2, ease: "easeOut", delay: 0.5 }}
            d="M 300 0 L 300 250 L 150 400 L 150 700" fill="none" stroke="#f09050" strokeWidth="1" 
          />

          <motion.rect initial={{ opacity: 0, rotate: 45 }} whileInView={{ opacity: 1, rotate: 45 }} transition={{ delay: 1.5 }} x="246" y="196" width="8" height="8" fill="none" stroke="#f09050" strokeWidth="2" style={{ transformOrigin: "250px 200px" }} />
          <motion.rect initial={{ opacity: 0, rotate: 45 }} whileInView={{ opacity: 1, rotate: 45 }} transition={{ delay: 1.7 }} x="97" y="347" width="6" height="6" fill="#f09050" className="animate-pulse" style={{ transformOrigin: "100px 350px" }} />

          <circle cx="150" cy="350" r="150" fill="url(#glowRightPipe)" />
          <defs>
            <radialGradient id="glowRightPipe" cx="50%" cy="50%" r="50%">
              <stop offset="0%" stopColor="#f09050" stopOpacity="0.15" />
              <stop offset="100%" stopColor="transparent" stopOpacity="0" />
            </radialGradient>
          </defs>
        </svg>
      </div>

      <div className="container relative z-10 mx-auto px-6 max-w-[1200px]">
        <div className="grid grid-cols-1 lg:grid-cols-[1.1fr_0.9fr] gap-16 lg:gap-24 items-center">

          {/* Left side: Bounding box with widgets */}
          <div className="w-full relative aspect-[4/5] md:aspect-[4/3] lg:aspect-[1.1/1] flex items-center justify-center">
            {/* Crosshairs for bounding box */}
            <svg className="absolute top-0 left-0 text-white/30" width="7" height="7" viewBox="0 0 7 7" fill="none"><path d="M3.5 0v7M0 3.5h7" stroke="currentColor" strokeWidth="1" /></svg>
            <svg className="absolute top-0 right-0 text-white/30" width="7" height="7" viewBox="0 0 7 7" fill="none"><path d="M3.5 0v7M0 3.5h7" stroke="currentColor" strokeWidth="1" /></svg>
            <svg className="absolute bottom-0 left-0 text-white/30" width="7" height="7" viewBox="0 0 7 7" fill="none"><path d="M3.5 0v7M0 3.5h7" stroke="currentColor" strokeWidth="1" /></svg>
            <svg className="absolute bottom-0 right-0 text-white/30" width="7" height="7" viewBox="0 0 7 7" fill="none"><path d="M3.5 0v7M0 3.5h7" stroke="currentColor" strokeWidth="1" /></svg>

            {/* Widget 2: Q4 2026 Upcoming */}
            <motion.div
              className="absolute top-[8%] left-[2%] w-[65%] max-w-[280px] bg-[#111316] border border-white/10 p-4 shadow-[0_15px_30px_-10px_rgba(0,0,0,0.6)] z-10 cursor-pointer group hover:border-[#e27d3b]/50 hover:shadow-[0_0_20px_rgba(226,125,59,0.15)] transition-all duration-300"
              initial={{ opacity: 0, scaleY: 0.01, filter: "brightness(2) hue-rotate(-90deg)" }}
              whileInView={{ opacity: [0, 1, 0, 1], scaleY: [0.01, 1, 1], filter: ["brightness(2)", "brightness(1)"], transition: { delay: 0.2, duration: 0.6, times: [0, 0.2, 0.4, 1] } }}
              whileHover={{ scale: 1.03, y: -5, zIndex: 50, transition: { duration: 0.2 } }}
              viewport={{ once: true }}
            >
              {/* Tech Corner Accents */}
              <div className="absolute top-0 left-0 w-2 h-2 border-t border-l border-white/20 group-hover:border-[#e27d3b] transition-colors" />
              <div className="absolute top-0 right-0 w-2 h-2 border-t border-r border-white/20 group-hover:border-[#e27d3b] transition-colors" />
              <div className="absolute bottom-0 left-0 w-2 h-2 border-b border-l border-white/20 group-hover:border-[#e27d3b] transition-colors" />
              <div className="absolute bottom-0 right-0 w-2 h-2 border-b border-r border-white/20 group-hover:border-[#e27d3b] transition-colors" />

              <div className="flex items-start justify-between mb-2">
                <div className="flex items-center gap-2">
                  <div className="w-5 h-5 rounded bg-[#e27d3b]/20 flex items-center justify-center text-[#e27d3b] animate-pulse">
                    <svg width="10" height="10" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M3 9l9-7 9 7v11a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z"></path><polyline points="9 22 9 12 15 12 15 22"></polyline></svg>
                  </div>
                  <h3 className="text-[#e27d3b] font-mono tracking-wider font-bold text-[0.7rem] uppercase">SYS.Q4.26</h3>
                </div>
                <span className="text-white/30 text-lg leading-none cursor-pointer hover:text-[#e27d3b] transition-colors font-mono">×</span>
              </div>
              <p className="text-white/50 text-[0.65rem] font-mono leading-relaxed mb-3 lowercase">
                // first residents move in. phase 1 homes delivered. village center services go live.
              </p>
              <button className="bg-white/5 border border-white/10 px-3 py-1.5 text-[#e27d3b] text-[0.65rem] font-mono uppercase tracking-widest transition-colors flex items-center gap-1.5 group-hover:bg-[#e27d3b]/10 group-hover:border-[#e27d3b]/30">
                <span className="w-1.5 h-1.5 bg-[#e27d3b] rounded-full group-hover:animate-ping"></span>
                [ UPCOMING ]
              </button>
            </motion.div>

            {/* Widget 3: 2028 Communities */}
            <motion.div
              className="absolute top-[35%] right-[-2%] w-[45%] max-w-[220px] bg-[#111316] border border-white/10 p-4 shadow-[0_20px_40px_-10px_rgba(0,0,0,0.5)] z-30 cursor-pointer group hover:border-[#3daf98]/50 hover:shadow-[0_0_20px_rgba(61,175,152,0.15)] transition-all duration-300"
              initial={{ opacity: 0, scaleY: 0.01, filter: "brightness(2) hue-rotate(90deg)" }}
              whileInView={{ opacity: [0, 1, 0, 1], scaleY: [0.01, 1, 1], filter: ["brightness(2)", "brightness(1)"], transition: { delay: 0.3, duration: 0.6, times: [0, 0.2, 0.4, 1] } }}
              whileHover={{ scale: 1.03, y: -5, zIndex: 50, transition: { duration: 0.2 } }}
              viewport={{ once: true }}
            >
              {/* Tech Corner Accents */}
              <div className="absolute top-0 left-0 w-2 h-2 border-t border-l border-white/20 group-hover:border-[#3daf98] transition-colors" />
              <div className="absolute top-0 right-0 w-2 h-2 border-t border-r border-white/20 group-hover:border-[#3daf98] transition-colors" />
              <div className="absolute bottom-0 left-0 w-2 h-2 border-b border-l border-white/20 group-hover:border-[#3daf98] transition-colors" />
              <div className="absolute bottom-0 right-0 w-2 h-2 border-b border-r border-white/20 group-hover:border-[#3daf98] transition-colors" />

              <h3 className="text-white font-mono text-[0.65rem] tracking-widest uppercase mb-1 opacity-50">&gt; COMMUNITIES 2-4</h3>
              <div className="text-[#3daf98] font-mono text-[0.6rem] tracking-widest uppercase mb-4 flex items-center gap-1 group-hover:animate-pulse">
                [ 2028_PLANNED ]
              </div>
              <div className="flex items-end justify-between h-10 gap-1 mb-2">
                {[40, 60, 30, 80, 50, 90].map((h, i) => (
                  <div key={i} className="w-full bg-white/5 relative group-hover:bg-white/10 transition-colors" style={{ height: '100%' }}>
                    <div className="absolute bottom-0 left-0 w-full bg-[#3daf98]/50 border-t border-[#3daf98] transition-all duration-700 ease-out group-hover:bg-[#3daf98] group-hover:shadow-[0_0_10px_#3daf98]" style={{ height: `${h}%` }}></div>
                  </div>
                ))}
              </div>
            </motion.div>

            {/* Widget 1: Main Active Phase */}
            <motion.div
              className="absolute top-[25%] left-[8%] w-[70%] max-w-[320px] bg-[#111316] border border-white/10 p-5 shadow-[0_20px_40px_-10px_rgba(0,0,0,0.5)] z-20 cursor-pointer group hover:border-white/30 transition-all duration-300"
              initial={{ opacity: 0, scaleX: 0.01, filter: "brightness(2) hue-rotate(90deg)" }}
              whileInView={{ opacity: [0, 1, 0, 1], scaleX: [0.01, 1, 1], filter: ["brightness(2)", "brightness(1)"], transition: { delay: 0.1, duration: 0.6, times: [0, 0.2, 0.4, 1] } }}
              whileHover={{ scale: 1.02, y: -5, zIndex: 50, transition: { duration: 0.2 } }}
              viewport={{ once: true }}
            >
              {/* Tech Corner Accents */}
              <div className="absolute top-0 left-0 w-3 h-3 border-t-2 border-l-2 border-white/30 group-hover:border-white group-hover:w-6 group-hover:h-6 transition-all duration-300" />
              <div className="absolute top-0 right-0 w-3 h-3 border-t-2 border-r-2 border-white/30 group-hover:border-white group-hover:w-6 group-hover:h-6 transition-all duration-300" />
              <div className="absolute bottom-0 left-0 w-3 h-3 border-b-2 border-l-2 border-white/30 group-hover:border-white group-hover:w-6 group-hover:h-6 transition-all duration-300" />
              <div className="absolute bottom-0 right-0 w-3 h-3 border-b-2 border-r-2 border-white/30 group-hover:border-white group-hover:w-6 group-hover:h-6 transition-all duration-300" />

              <div className="flex items-center justify-between mb-4">
                <div className="flex items-center gap-3">
                  <div className="flex -space-x-1">
                    <div className="w-7 h-7 bg-[#3daf98] flex items-center justify-center text-white text-[0.55rem] font-mono font-bold tracking-tighter">TX</div>
                    <div className="w-7 h-7 bg-[#d96a2b] flex items-center justify-center border-l border-[#111316] text-white text-[0.55rem] font-mono font-bold tracking-tighter animate-pulse">HQ</div>
                  </div>
                  <div>
                    <h3 className="text-white font-mono font-bold text-sm leading-tight uppercase tracking-widest">&gt; TEXAS_GB</h3>
                    <p className="text-white/40 text-[0.6rem] font-mono uppercase tracking-widest">// FLAGSHIP</p>
                  </div>
                </div>
                <div className="text-white/30 hover:text-white cursor-pointer transition-colors">
                  <span className="font-mono text-xs">[ + ]</span>
                </div>
              </div>
              <div className="text-[1.75rem] font-mono font-bold text-white mb-1 tracking-tighter group-hover:text-[#3daf98] group-hover:drop-shadow-[0_0_10px_#3daf98] transition-all">Q3.2025</div>
              <div className="text-[#3daf98] text-[0.65rem] font-mono tracking-widest uppercase mb-5 flex items-center gap-1 group-hover:animate-pulse">
                [ ACTIVE_PHASE :: 5K+ UNITS ]
              </div>
              <div className="flex items-center gap-2">
                <div className="bg-white/5 border border-white/10 px-2 py-1 text-white/60 text-[0.65rem] font-mono uppercase tracking-widest flex items-center gap-1">
                  <span className="w-1.5 h-1.5 bg-[#d96a2b]"></span> 1K+ ACRES
                </div>
                <div className="bg-white/5 border border-white/10 px-2 py-1 text-white/60 text-[0.65rem] font-mono uppercase tracking-widest">
                  $200M_RAISE
                </div>
              </div>
            </motion.div>

            {/* Widget 6: HumanlyOS Scale */}
            <motion.div
              className="absolute bottom-[2%] right-[2%] w-[65%] max-w-[280px] bg-[#111316] border border-white/10 p-4 shadow-[0_15px_30px_-10px_rgba(0,0,0,0.5)] z-20 overflow-hidden cursor-pointer group hover:border-[#8b5cf6]/50 hover:shadow-[0_0_20px_rgba(139,92,246,0.15)] transition-all duration-300"
              initial={{ opacity: 0, scaleY: 0.01, filter: "brightness(2) hue-rotate(-90deg)" }}
              whileInView={{ opacity: [0, 1, 0, 1], scaleY: [0.01, 1, 1], filter: ["brightness(2)", "brightness(1)"], transition: { delay: 0.6, duration: 0.6, times: [0, 0.2, 0.4, 1] } }}
              whileHover={{ scale: 1.03, y: -5, zIndex: 50, transition: { duration: 0.2 } }}
              viewport={{ once: true }}
            >
              {/* Tech Corner Accents */}
              <div className="absolute top-0 left-0 w-2 h-2 border-t border-l border-white/20 group-hover:border-[#8b5cf6] transition-colors" />
              <div className="absolute top-0 right-0 w-2 h-2 border-t border-r border-white/20 group-hover:border-[#8b5cf6] transition-colors" />
              <div className="absolute bottom-0 left-0 w-2 h-2 border-b border-l border-white/20 group-hover:border-[#8b5cf6] transition-colors" />
              <div className="absolute bottom-0 right-0 w-2 h-2 border-b border-r border-white/20 group-hover:border-[#8b5cf6] transition-colors" />

              <div className="relative z-10">
                <div className="flex items-center gap-2 mb-2">
                  <div className="w-5 h-5 bg-[#8b5cf6]/20 flex items-center justify-center text-[#8b5cf6]">
                    <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M21 16V8a2 2 0 0 0-1-1.73l-7-4a2 2 0 0 0-2 0l-7 4A2 2 0 0 0 3 8v8a2 2 0 0 0 1 1.73l7 4a2 2 0 0 0 2 0l7-4A2 2 0 0 0 21 16z"></path><polyline points="3.27 6.96 12 12.01 20.73 6.96"></polyline><line x1="12" y1="22.08" x2="12" y2="12"></line></svg>
                  </div>
                  <h3 className="text-white text-[0.7rem] font-mono tracking-widest uppercase">SYS.NAT_SCALE</h3>
                </div>
                <p className="text-white/40 text-[0.65rem] font-mono lowercase max-w-[80%] mb-12">
                  // 50 states coverage target by 2032 through licensing.
                </p>
              </div>

              <div className="absolute bottom-0 left-0 right-0 h-16 pointer-events-none mix-blend-screen group-hover:opacity-100 opacity-50 transition-opacity">
                <svg className="w-full h-full" preserveAspectRatio="none" viewBox="0 0 100 100">
                  <path d="M0,100 L0,80 L20,60 L40,70 L60,30 L80,40 L100,10 L100,100 Z" fill="url(#gradientChart)" opacity="0.2" />
                  <polyline points="0,80 20,60 40,70 60,30 80,40 100,10" fill="none" stroke="#8b5cf6" strokeWidth="1" strokeDasharray="4 2" className="animate-[dash_10s_linear_infinite]" />
                  <defs>
                    <linearGradient id="gradientChart" x1="0" y1="0" x2="0" y2="1">
                      <stop offset="0%" stopColor="#8b5cf6" />
                      <stop offset="100%" stopColor="transparent" />
                    </linearGradient>
                  </defs>
                </svg>
              </div>
            </motion.div>

            {/* Widget 4: Ticker */}
            <motion.div
              className="absolute top-[72%] left-[20%] flex items-center gap-3 bg-[#111316] border border-white/10 p-2 pr-4 shadow-[0_10px_20px_-5px_rgba(0,0,0,0.5)] z-40 cursor-pointer group hover:border-white/30 transition-all duration-300"
              initial={{ opacity: 0, x: -20, filter: "blur(4px)" }}
              whileInView={{ opacity: 1, x: 0, filter: "blur(0px)", transition: { delay: 0.4, duration: 0.6 } }}
              whileHover={{ scale: 1.05, x: 5, zIndex: 50, transition: { duration: 0.2 } }}
              viewport={{ once: true }}
            >
              <div className="w-6 h-6 bg-white text-black flex items-center justify-center text-[0.55rem] font-mono font-bold group-hover:bg-[#3daf98] group-hover:text-white transition-colors">OS</div>
              <div className="text-white text-[0.65rem] font-mono tracking-widest uppercase">HUMANLY_OS®</div>
              <div className="text-[#3daf98] font-mono tracking-widest font-bold text-[0.65rem]">[ 2030 ]</div>
            </motion.div>



          </div>

          {/* Right side: Text block */}
          <motion.div 
            className="flex flex-col items-start w-full lg:pl-10 relative z-10 origin-left"
            initial={{ opacity: 0, scaleX: 0, filter: "blur(4px)" }}
            whileInView={{ opacity: 1, scaleX: 1, filter: "blur(0px)" }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, ease: "easeOut" }}
          >
            <span className="text-[0.65rem] tracking-[0.2em] uppercase text-[#3daf98] font-mono mb-4 flex items-center gap-2">
              <span className="w-1.5 h-1.5 bg-[#3daf98] animate-pulse"></span>
              [ SYSTEM.ROADMAP :: STRATEGY ]
            </span>
            <h2 className="font-mono font-bold text-3xl md:text-4xl lg:text-[2.5rem] text-white tracking-tighter mb-6 uppercase flex items-center">
              <span className="text-[#3daf98] mr-2 opacity-50">&gt;</span> THE PATH TO SCALE
              <span className="inline-block w-3 h-8 bg-[#3daf98] ml-2 animate-pulse"></span>
            </h2>
            <p className="text-white/50 text-[0.8rem] font-mono leading-relaxed max-w-md mb-10 lowercase">
              // a disciplined, milestone-driven progression from our texas groundbreak to national humanlyos® licensing, unlocking a scalable recurring revenue stream.
            </p>

            {/* View Case button with crosshairs */}
            <div className="relative inline-block mt-4">
              <svg className="absolute -top-1.5 -left-1.5 text-white/40" width="5" height="5" viewBox="0 0 5 5" fill="none"><path d="M3 2H5V3H3V5H2V3H0V2H2V0H3V2Z" fill="currentColor" /></svg>
              <svg className="absolute -top-1.5 -right-1.5 text-white/40" width="5" height="5" viewBox="0 0 5 5" fill="none"><path d="M3 2H5V3H3V5H2V3H0V2H2V0H3V2Z" fill="currentColor" /></svg>
              <svg className="absolute -bottom-1.5 -left-1.5 text-white/40" width="5" height="5" viewBox="0 0 5 5" fill="none"><path d="M3 2H5V3H3V5H2V3H0V2H2V0H3V2Z" fill="currentColor" /></svg>
              <svg className="absolute -bottom-1.5 -right-1.5 text-white/40" width="5" height="5" viewBox="0 0 5 5" fill="none"><path d="M3 2H5V3H3V5H2V3H0V2H2V0H3V2Z" fill="currentColor" /></svg>

              {/* <button className="px-6 py-3 text-[0.7rem] font-mono tracking-[0.15em] uppercase text-white hover:bg-white/5 transition-colors border border-transparent hover:border-white/10 group">
                <span className="text-[#3daf98] mr-2 opacity-0 group-hover:opacity-100 transition-opacity">_</span>
                VIEW_DATA_ROOM
              </button> */}
            </div>
          </motion.div>

        </div>
      </div>
    </section>
  );
};
