"use client";

import React, { useEffect, useRef, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

// ─── Data ────────────────────────────────────────────────────────────────────

const NODES = [
  {
    id: "community",
    label: "Community Data",
    sublabel: "Land · Design · Residents · Services",
    color: "#D6C3A5",
    glow: "rgba(214,195,165,0.6)",
    angle: 270, // top
    icon: (
      <svg viewBox="0 0 24 24" fill="none" className="w-5 h-5" stroke="currentColor" strokeWidth={1.5}>
        <path d="M3 9l9-7 9 7v11a2 2 0 01-2 2H5a2 2 0 01-2-2z" />
        <polyline points="9 22 9 12 15 12 15 22" />
      </svg>
    ),
  },
  {
    id: "intelligence",
    label: "AI Intelligence",
    sublabel: "Models sharpen with every cycle",
    color: "#4179F2",
    glow: "rgba(65,121,242,0.6)",
    angle: 30, // bottom right
    icon: (
      <svg viewBox="0 0 24 24" fill="none" className="w-5 h-5" stroke="currentColor" strokeWidth={1.5}>
        <circle cx="12" cy="12" r="3" />
        <path d="M12 2v3M12 19v3M2 12h3M19 12h3M4.22 4.22l2.12 2.12M17.66 17.66l2.12 2.12M17.66 6.34l-2.12 2.12M6.34 17.66l-2.12 2.12" />
      </svg>
    ),
  },
  {
    id: "growth",
    label: "Smarter Growth",
    sublabel: "Each new community launches ahead",
    color: "#6BCEFF",
    glow: "rgba(107,206,255,0.6)",
    angle: 150, // bottom left
    icon: (
      <svg viewBox="0 0 24 24" fill="none" className="w-5 h-5" stroke="currentColor" strokeWidth={1.5}>
        <polyline points="22 7 13.5 15.5 8.5 10.5 2 17" />
        <polyline points="16 7 22 7 22 13" />
      </svg>
    ),
  },
];

const STATS = [
  { value: "3×", label: "Faster planning cycles" },
  { value: "9", label: "Value-creation layers" },
  { value: "∞", label: "Recursive improvement" },
];

// ─── Helpers ─────────────────────────────────────────────────────────────────

const toRad = (deg: number) => (deg * Math.PI) / 180;

const nodePosition = (angleDeg: number, r: number, cx: number, cy: number) => ({
  x: cx + r * Math.cos(toRad(angleDeg)),
  y: cy + r * Math.sin(toRad(angleDeg)),
});

const NODE_IDS = NODES.map((n) => n.id);

// ─── Animated Arc between two nodes ─────────────────────────────────────────

const ArcConnector = ({
  from,
  to,
  color,
  delay = 0,
}: {
  from: { x: number; y: number };
  to: { x: number; y: number };
  color: string;
  delay?: number;
}) => {
  const mx = (from.x + to.x) / 2;
  const my = (from.y + to.y) / 2;
  // Pull control point toward center (200,200) for a gentle arc
  const cx = mx + (200 - mx) * 0.35;
  const cy = my + (200 - my) * 0.35;
  const d = `M${from.x},${from.y} Q${cx},${cy} ${to.x},${to.y}`;

  return (
    <g>
      {/* Static dim track */}
      <path d={d} fill="none" stroke={color} strokeWidth={1} strokeOpacity={0.12} />
      {/* Animated dash traveller */}
      <motion.path
        d={d}
        fill="none"
        stroke={color}
        strokeWidth={1.5}
        strokeLinecap="round"
        strokeDasharray="6 60"
        strokeOpacity={0.7}
        initial={{ strokeDashoffset: 0 }}
        animate={{ strokeDashoffset: -66 }}
        transition={{ duration: 1.8, delay, repeat: Infinity, ease: "linear" }}
      />
    </g>
  );
};

// ─── Single Flywheel Node ────────────────────────────────────────────────────

const FlywheelNode = ({
  node,
  pos,
  isActive,
  onClick,
}: {
  node: (typeof NODES)[0];
  pos: { x: number; y: number };
  isActive: boolean;
  onClick: () => void;
}) => (
  <g
    transform={`translate(${pos.x},${pos.y})`}
    style={{ cursor: "pointer" }}
    onClick={onClick}
  >
    {/* Outer pulse ring */}
    <motion.circle
      r={isActive ? 36 : 28}
      fill="none"
      stroke={node.color}
      strokeWidth={1}
      strokeOpacity={isActive ? 0.5 : 0.2}
      animate={{ r: isActive ? [36, 44, 36] : [28, 32, 28], strokeOpacity: isActive ? [0.5, 0.1, 0.5] : [0.2, 0.05, 0.2] }}
      transition={{ duration: 2.4, repeat: Infinity, ease: "easeInOut" }}
    />
    {/* Background fill */}
    <motion.circle
      r={26}
      fill={isActive ? node.color : "rgba(255,255,255,0.04)"}
      stroke={node.color}
      strokeWidth={isActive ? 0 : 1}
      strokeOpacity={0.35}
      animate={{ scale: isActive ? 1 : 0.95 }}
      transition={{ duration: 0.4 }}
    />
    {/* Glow when active */}
    {isActive && (
      <motion.circle
        r={26}
        fill={node.glow}
        initial={{ opacity: 0, r: 20 }}
        animate={{ opacity: [0.4, 0.1, 0.4], r: [26, 40, 26] }}
        transition={{ duration: 1.8, repeat: Infinity }}
      />
    )}
  </g>
);

// ─── Main Component ──────────────────────────────────────────────────────────

export const IntelligenceFlywheel = () => {
  const [activeNode, setActiveNode] = useState<string>("intelligence");
  const [autoRotate, setAutoRotate] = useState(true);
  const timerRef = useRef<ReturnType<typeof setInterval> | null>(null);

  useEffect(() => {
    if (!autoRotate) return;
    timerRef.current = setInterval(() => {
      setActiveNode((cur) => {
        const idx = NODE_IDS.indexOf(cur);
        return NODE_IDS[(idx + 1) % NODE_IDS.length];
      });
    }, 2800);
    return () => { if (timerRef.current) clearInterval(timerRef.current); };
  }, [autoRotate]);

  const handleNodeClick = (id: string) => {
    setAutoRotate(false);
    setActiveNode(id);
    if (timerRef.current) clearInterval(timerRef.current);
    // Resume auto-cycle after 5 s of inactivity
    setTimeout(() => setAutoRotate(true), 5000);
  };

  // SVG viewport 400×400; orbit radius 140; center 200,200
  const CX = 200, CY = 200, R = 140;
  const positions = NODES.map((n) => ({ ...n, pos: nodePosition(n.angle, R, CX, CY) }));

  return (
    <section className="py-[140px] relative overflow-hidden" style={{ background: "#0a0809" }}>
      {/* Mesh background glows */}
      <div className="pointer-events-none absolute inset-0">
        <div className="absolute top-[-10%] left-[-8%] w-[600px] h-[600px] rounded-full blur-[140px] opacity-20"
          style={{ background: "radial-gradient(circle, #4179F2, transparent 70%)" }} />
        <div className="absolute bottom-[-10%] right-[-6%] w-[500px] h-[500px] rounded-full blur-[140px] opacity-15"
          style={{ background: "radial-gradient(circle, #FF6136, transparent 70%)" }} />
        <div className="absolute top-[40%] left-[40%] w-[400px] h-[400px] rounded-full blur-[160px] opacity-10"
          style={{ background: "radial-gradient(circle, #6BCEFF, transparent 70%)" }} />
      </div>

      <div className="container mx-auto px-6 md:px-12 max-w-[1200px] relative z-10">

        {/* ── Section label ── */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
          className="mb-16"
        >
          <p className="text-[11px] font-bold uppercase tracking-[0.2em] text-[#4179F2] mb-4">
            Intelligence Flywheel
          </p>
          <div className="h-[2px] w-[74px] rounded-full mb-8"
            style={{ background: "linear-gradient(90deg, #4179F2, #FF6136)" }} />
          <h2 className="text-[clamp(32px,4vw,56px)] font-extrabold tracking-[-2px] leading-[1.06] text-white max-w-[700px]">
            The intelligence compounds with every community built.
          </h2>
        </motion.div>

        {/* ── Main Card ── */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 1.1, ease: [0.16, 1, 0.3, 1] }}
          className="rounded-[40px] border border-white/[0.06] relative overflow-hidden"
          style={{
            background: "linear-gradient(145deg, rgba(26,22,24,0.95) 0%, rgba(14,10,18,0.98) 100%)",
            backdropFilter: "blur(24px)",
            boxShadow: "0 40px 120px rgba(0,0,0,0.6), inset 0 1px 0 rgba(255,255,255,0.06)",
          }}
        >
          {/* inner glows */}
          <div className="absolute -top-32 -left-32 w-[500px] h-[500px] rounded-full blur-[100px] opacity-10 pointer-events-none"
            style={{ background: "#4179F2" }} />
          <div className="absolute -bottom-32 -right-32 w-[400px] h-[400px] rounded-full blur-[100px] opacity-10 pointer-events-none"
            style={{ background: "#FF6136" }} />

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-0 items-center">

            {/* ── LEFT: SVG Flywheel ── */}
            <div className="flex items-center justify-center p-8 md:p-16 relative">
              {/* Faint outer ring decorator */}
              <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
                <div className="w-[320px] h-[320px] rounded-full border border-white/[0.04]" />
                <div className="absolute w-[240px] h-[240px] rounded-full border border-white/[0.04]" />
              </div>

              <svg viewBox="0 0 400 400" className="w-full max-w-[380px] relative z-10" aria-label="Intelligence Flywheel diagram">
                <defs>
                  {NODES.map((n) => (
                    <radialGradient key={n.id} id={`grd-${n.id}`} cx="50%" cy="50%" r="50%">
                      <stop offset="0%" stopColor={n.color} stopOpacity="0.9" />
                      <stop offset="100%" stopColor={n.color} stopOpacity="0.2" />
                    </radialGradient>
                  ))}
                  <filter id="glow-filter" x="-50%" y="-50%" width="200%" height="200%">
                    <feGaussianBlur stdDeviation="3" result="blur" />
                    <feMerge><feMergeNode in="blur" /><feMergeNode in="SourceGraphic" /></feMerge>
                  </filter>
                </defs>

                {/* Orbit ring */}
                <circle cx={CX} cy={CY} r={R} fill="none" stroke="rgba(255,255,255,0.05)" strokeWidth={1} />

                {/* Animated rotating dashes on orbit */}
                <motion.circle
                  cx={CX} cy={CY} r={R}
                  fill="none"
                  stroke="rgba(65,121,242,0.15)"
                  strokeWidth={1.5}
                  strokeDasharray="4 18"
                  animate={{ rotate: 360 }}
                  transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
                  style={{ transformOrigin: `${CX}px ${CY}px` }}
                />

                {/* Arc connectors */}
                {positions.map((from, i) => {
                  const to = positions[(i + 1) % positions.length];
                  return (
                    <ArcConnector
                      key={`arc-${i}`}
                      from={from.pos}
                      to={to.pos}
                      color={from.color}
                      delay={i * 0.6}
                    />
                  );
                })}

                {/* Center Core */}
                <motion.circle
                  cx={CX} cy={CY} r={32}
                  fill="rgba(255,255,255,0.03)"
                  stroke="rgba(255,255,255,0.1)"
                  strokeWidth={1}
                />
                <motion.circle
                  cx={CX} cy={CY} r={28}
                  fill={`url(#grd-${activeNode})`}
                  animate={{ r: [28, 30, 28] }}
                  transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
                  filter="url(#glow-filter)"
                />
                <text x={CX} y={CY + 4} textAnchor="middle" fill="white" fontSize="9" fontWeight="bold"
                  letterSpacing="1" style={{ userSelect: "none" }}>
                  HUMANLY
                </text>

                {/* Nodes */}
                {positions.map((n) => (
                  <FlywheelNode
                    key={n.id}
                    node={n}
                    pos={n.pos}
                    isActive={activeNode === n.id}
                    onClick={() => handleNodeClick(n.id)}
                  />
                ))}

                {/* Node icon overlay (foreignObject for React SVG icons) */}
                {positions.map((n) => (
                  <foreignObject
                    key={`icon-${n.id}`}
                    x={n.pos.x - 12}
                    y={n.pos.y - 12}
                    width={24}
                    height={24}
                    style={{ pointerEvents: "none", overflow: "visible" }}
                  >
                    <div
                      style={{
                        color: activeNode === n.id ? "#fff" : n.color,
                        opacity: 0.9,
                        transform: "scale(0.85)",
                        transformOrigin: "center",
                      }}
                    >
                      {n.icon}
                    </div>
                  </foreignObject>
                ))}

                {/* Node labels (rendered outside circle) */}
                {positions.map((n) => {
                  // push label outward from center
                  const dx = n.pos.x - CX;
                  const dy = n.pos.y - CY;
                  const len = Math.sqrt(dx * dx + dy * dy);
                  const lx = CX + (dx / len) * (R + 52);
                  const ly = CY + (dy / len) * (R + 52);
                  const anchor = lx < CX - 10 ? "end" : lx > CX + 10 ? "start" : "middle";

                  return (
                    <g key={`label-${n.id}`}>
                      <text
                        x={lx} y={ly - 5}
                        textAnchor={anchor}
                        fill={n.color}
                        fontSize="9"
                        fontWeight="700"
                        letterSpacing="1.5"
                        opacity={activeNode === n.id ? 1 : 0.45}
                        style={{ userSelect: "none", textTransform: "uppercase" }}
                      >
                        {n.label}
                      </text>
                    </g>
                  );
                })}
              </svg>
            </div>

            {/* ── RIGHT: Detail panel ── */}
            <div className="p-8 md:p-14 lg:border-l border-white/[0.06]">
              {/* Paragraph */}
              <p className="text-[16px] leading-[1.8] text-white/50 mb-12 max-w-[460px]">
                Each community expands the system's understanding of product mix, service demand,
                design performance, operational efficiency, and resident behavior. That intelligence
                feeds the next community — which gets built smarter and faster than the last.
              </p>

              {/* Node selector tabs */}
              <div className="flex flex-col gap-3 mb-12">
                {NODES.map((n) => (
                  <button
                    key={n.id}
                    onClick={() => handleNodeClick(n.id)}
                    className="group flex items-start gap-4 text-left rounded-[16px] p-4 transition-all duration-300 border"
                    style={{
                      borderColor: activeNode === n.id ? `${n.color}40` : "rgba(255,255,255,0.05)",
                      background: activeNode === n.id ? `${n.color}0D` : "transparent",
                    }}
                  >
                    {/* Color dot + line */}
                    <div className="flex flex-col items-center gap-1 mt-1 flex-shrink-0">
                      <div
                        className="w-[8px] h-[8px] rounded-full transition-all duration-300"
                        style={{
                          background: n.color,
                          boxShadow: activeNode === n.id ? `0 0 10px ${n.color}` : "none",
                        }}
                      />
                      <div className="w-px h-8 opacity-20" style={{ background: n.color }} />
                    </div>

                    <div>
                      <p
                        className="text-[13px] font-extrabold uppercase tracking-[0.12em] mb-1 transition-colors"
                        style={{ color: activeNode === n.id ? n.color : "rgba(255,255,255,0.4)" }}
                      >
                        {n.label}
                      </p>
                      <AnimatePresence mode="wait">
                        {activeNode === n.id && (
                          <motion.p
                            key={n.id}
                            initial={{ opacity: 0, y: 4 }}
                            animate={{ opacity: 1, y: 0 }}
                            exit={{ opacity: 0, y: -4 }}
                            transition={{ duration: 0.3 }}
                            className="text-[13px] leading-[1.6] text-white/60"
                          >
                            {n.sublabel}
                          </motion.p>
                        )}
                      </AnimatePresence>
                    </div>
                  </button>
                ))}
              </div>

              {/* Stats row */}
              <div className="grid grid-cols-3 gap-4 pt-8 border-t border-white/[0.06]">
                {STATS.map((s, i) => (
                  <motion.div
                    key={s.label}
                    initial={{ opacity: 0, y: 16 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: 0.1 * i, duration: 0.7, ease: [0.16, 1, 0.3, 1] }}
                  >
                    <p
                      className="text-[clamp(22px,2.5vw,32px)] font-extrabold tracking-[-1px] mb-1"
                      style={{ color: NODES[i].color }}
                    >
                      {s.value}
                    </p>
                    <p className="text-[11px] uppercase tracking-[0.08em] text-white/30 leading-[1.4]">
                      {s.label}
                    </p>
                  </motion.div>
                ))}
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};
