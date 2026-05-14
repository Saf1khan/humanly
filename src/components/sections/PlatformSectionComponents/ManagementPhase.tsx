import React, { useRef } from "react";
import { motion, useScroll, useTransform, useSpring } from "framer-motion";

export const ManagementPhase = () => {
  const containerRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start end", "end start"]
  });

  const pathHeight = useSpring(useTransform(scrollYProgress, [0.1, 0.9], ["0%", "100%"]), { stiffness: 100, damping: 30 });
  const visualScale = useTransform(scrollYProgress, [0, 0.5, 1], [0.98, 1.05, 1]);
  const visualY = useTransform(scrollYProgress, [0, 1], ["-12%", "12%"]);
  
  // Floating HUD Parallax
  const labelDrift = useTransform(scrollYProgress, [0, 1], [0, -80]);

  const cards = [
    { title: "HumanlyOS®", desc: "The resident AI navigator manages access to services, while the community Digital Twin captures operational data to improve experience over time.", mini: "01", side: "left", rotate: -1.0 },
    { title: "Asset Optimization", desc: "Real-time monitoring of energy, maintenance, and utility performance ensures institutional-scale efficiency and long-term value.", mini: "02", side: "right", rotate: 1.2 },
    { title: "Recurring Revenue", desc: "Five discrete revenue streams — from NOI to platform fees — compound into a diversified and stable return profile.", mini: "03", side: "left", rotate: -1.5 },
    { title: "The Moat", desc: "Every resident interaction generates anonymized data that improves service delivery and creates network effects across the ecosystem.", mini: "04", side: "right", rotate: 1.0 }
  ];

  return (
    <section ref={containerRef} className="pt-[60px] pb-[120px] relative overflow-hidden bg-[#F2F0EE]">
      {/* ── High-Fidelity Textures (Shared) ── */}
      <div className="absolute inset-0 pointer-events-none opacity-[0.03]" 
        style={{ backgroundImage: 'radial-gradient(#000 1px, transparent 1px)', backgroundSize: '40px 40px' }} 
      />
      <div className="absolute inset-0 pointer-events-none opacity-[0.02] mix-blend-overlay" 
        style={{ backgroundImage: 'url("https://grainy-gradients.vercel.app/noise.svg")' }} 
      />
      
      {/* ── Central Neural Path ── */}
      <div className="absolute left-1/2 -translate-x-1/2 top-0 bottom-[400px] w-[1px] bg-slate-900/5 hidden md:block">
        <motion.div 
          style={{ height: pathHeight }}
          className="w-full bg-gradient-to-b from-[#4179F2] to-[#6BCEFF] shadow-[0_0_20px_rgba(65,121,242,0.3)]"
        />
      </div>

      <div className="container mx-auto px-6 md:px-12 max-w-[1200px] relative z-10">
        
        {/* ── Section Header ── */}
        <div className="max-w-[800px] mb-32">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 1.4, ease: [0.16, 1, 0.3, 1] }}
          >
            <div className="flex items-center gap-4 mb-8">
              <span className="w-12 h-[1px] bg-[#6BCEFF]/30" />
              <span className="text-[11px] font-bold uppercase tracking-[0.3em] text-[#6BCEFF]">Phase 03 / Management</span>
            </div>
            <h3 className="text-[clamp(40px,5.5vw,72px)] font-extrabold leading-[1.0] tracking-[-0.05em] text-slate-900 mb-10">
              One platform. <br />
              Permanent value. <br />
              <span className="text-[#6BCEFF]/60">Compounding returns.</span>
            </h3>
            <p className="max-w-[580px] text-[19px] md:text-[22px] leading-[1.6] text-slate-800/80 font-medium tracking-tight">
              Humanly operates the community as a connected system — improving service access, resident outcomes, and asset performance simultaneously.
            </p>
          </motion.div>
        </div>

        {/* ── Centralized Alternating Grid ── */}
        <div className="relative flex flex-col gap-24 md:gap-48 mb-48">
          {cards.map((card, i) => (
            <div key={i} className={`flex w-full ${card.side === 'left' ? 'justify-start' : 'justify-end'} relative`}>
              {/* Connector Dot */}
              <div className="absolute left-1/2 -translate-x-1/2 top-1/2 -translate-y-1/2 w-4 h-4 rounded-full border border-slate-200 bg-[#F2F0EE] z-20 hidden md:flex items-center justify-center">
                <div className="w-1.5 h-1.5 rounded-full bg-[#4179F2]" />
              </div>
              
              <motion.div
                initial={{ opacity: 0, x: card.side === 'left' ? -80 : 80, y: 40, rotate: card.rotate * 2 }}
                whileInView={{ opacity: 1, x: 0, y: 0, rotate: card.rotate }}
                viewport={{ once: true, margin: "-15%" }}
                transition={{ duration: 1.4, ease: [0.16, 1, 0.3, 1] }}
                className={`relative w-full md:w-[46%] p-12 md:p-16 rounded-[48px] bg-white/30 backdrop-blur-[40px] border border-white/50 shadow-[0_8px_32px_rgba(0,0,0,0.04),inset_0_1px_1px_rgba(255,255,255,0.4)] group cursor-default transition-all duration-700 hover:bg-white/50 hover:shadow-[0_60px_100px_-20px_rgba(0,0,0,0.08),inset_0_1px_1px_rgba(255,255,255,0.6)]`}
              >
                <div className="flex justify-between items-start mb-12">
                  <span className="text-[14px] font-bold text-slate-300 font-mono tracking-[0.2em]">[{card.mini}]</span>
                </div>
                <h4 className="text-[30px] md:text-[38px] font-extrabold leading-tight tracking-[-0.04em] text-slate-900 mb-6">{card.title}</h4>
                <p className="text-[18px] md:text-[20px] leading-[1.7] text-slate-700/90 max-w-[420px] tracking-tight">{card.desc}</p>
                
                <div className={`absolute ${card.side === 'left' ? '-right-6' : '-left-6'} top-1/2 -translate-y-1/2 hidden md:block opacity-20`}>
                   <div className="w-12 h-[1px] bg-slate-900" />
                </div>
              </motion.div>
            </div>
          ))}
        </div>

        {/* ── Visual Panel ── */}
        <div className="relative mt-40">
          {/* Label Removed */}

          <motion.div
            style={{ scale: visualScale }}
            className="relative rounded-[64px] overflow-hidden border border-white/50 shadow-[0_80px_120px_-40px_rgba(0,0,0,0.18)] group bg-slate-100"
          >
            <div className="aspect-[21/9] w-full relative overflow-hidden">
              <motion.img 
                style={{ y: visualY, scale: 1.3 }}
                src="/images/AdobeStock_1909482653.jpeg" 
                alt="Management Visual" 
                className="w-full h-full object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-black/20" />
              <div className="absolute inset-0 bg-[#6BCEFF]/5 mix-blend-overlay" />
              
              <div className="absolute inset-0 p-12 md:p-20 flex flex-col justify-between">
                {/* HUD Removed */}
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};
