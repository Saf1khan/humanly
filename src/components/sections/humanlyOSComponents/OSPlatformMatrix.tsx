"use client";

import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

const stakeholders = [
  { key: 'r', label: 'Resident', color: '#2d7dd2' },
  { key: 'o', label: 'Operator', color: '#d96a2b' },
  { key: 'm', label: 'Municipality', color: '#0d9e87' },
] as const;

type StakeholderKey = 'r' | 'o' | 'm';

const rows: { feature: string; sub: string; r: boolean; o: boolean; m: boolean }[] = [
  { feature: 'Service Access', sub: 'Circle of Services® marketplace', r: true, o: true, m: false },
  { feature: 'Financial Tools', sub: 'Credit, savings & HELOC programs', r: true, o: true, m: false },
  { feature: 'AI Navigator', sub: 'Personalized resident AI assistant', r: true, o: true, m: false },
  { feature: 'Property Management', sub: 'Maintenance, compliance & operations', r: false, o: true, m: false },
  { feature: 'Data Insights', sub: 'Platform-wide analytics & reporting', r: false, o: true, m: true },
  { feature: 'Community Events', sub: 'Scheduling, booking & participation', r: true, o: true, m: true },
  { feature: 'Maintenance Requests', sub: 'Submit, track & resolve tickets', r: true, o: true, m: false },
  { feature: 'Reporting & Compliance', sub: 'Regulatory, audit & compliance dashboards', r: false, o: true, m: true },
  { feature: 'Digital Twin Access', sub: 'Real-time infrastructure layer', r: false, o: true, m: true },
  { feature: 'Licensing & Scale', sub: 'Multi-site rollout & licensing model', r: false, o: true, m: true },
];

const Check = ({ color }: { color: string }) => (
  <svg width="18" height="18" viewBox="0 0 16 16" fill="none">
    <circle cx="8" cy="8" r="7.25" stroke={color} strokeWidth="1.5" fill={`${color}22`} />
    <path d="M4.5 8L7 10.5L11.5 6" stroke={color} strokeWidth="1.75" strokeLinecap="round" strokeLinejoin="round" />
  </svg>
);

const Dash = () => (
  <svg width="16" height="16" viewBox="0 0 16 16" fill="none">
    <path d="M5 8H11" stroke="rgba(255,255,255,0.12)" strokeWidth="1.5" strokeLinecap="round" />
  </svg>
);

// Dynamic gradient generator based on active stakeholders
const getFeatureGradient = (row: typeof rows[0]) => {
  const activeColors = [];
  if (row.r) activeColors.push('#2d7dd2');
  if (row.o) activeColors.push('#d96a2b');
  if (row.m) activeColors.push('#0d9e87');

  if (activeColors.length === 1) return activeColors[0];
  if (activeColors.length === 2) return `linear-gradient(to bottom, ${activeColors[0]}, ${activeColors[1]})`;
  if (activeColors.length === 3) return `linear-gradient(to bottom, ${activeColors[0]}, ${activeColors[1]}, ${activeColors[2]})`;
  return 'rgba(255,255,255,0.2)';
};

const OSPlatformMatrix = () => {
  const [hoveredRow, setHoveredRow] = useState<number | null>(null);
  const [hoveredStakeholder, setHoveredStakeholder] = useState<StakeholderKey | null>(null);

  return (
    <section className="bg-[#4C5C68] py-[clamp(5rem,10vw,8rem)] relative overflow-hidden">

      {/* Cinematic ambient dynamic glow — floating/pulsating */}
      <motion.div
        className="absolute top-0 left-1/2 -translate-x-1/2 w-[800px] h-[300px] pointer-events-none"
        style={{
          background: 'radial-gradient(ellipse at top, rgba(255,255,255,0.08) 0%, rgba(45,125,210,0.06) 40%, transparent 80%)',
        }}
        animate={{
          scale: [1, 1.05, 1],
          opacity: [0.8, 1, 0.8],
        }}
        transition={{
          duration: 8,
          repeat: Infinity,
          ease: 'easeInOut',
        }}
      />

      <div className="max-w-[1240px] mx-auto px-6 md:px-12 relative z-10">

        {/* ── Header ── */}
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
          className="mb-14 grid grid-cols-1 lg:grid-cols-2 gap-8 items-end"
        >
          <div>
            <p className="text-[10px] font-semibold tracking-[0.25em] uppercase text-[#aeb6be] mb-5">
              p18 / PLATFORM MATRIX
            </p>
            <div className="h-[2px] rounded-full w-[80px] bg-gradient-to-r from-[#1a4f82] via-[#2d7dd2] to-[#d96a2b] mb-6" />
            <h2 className="font-serif text-[clamp(2.2rem,4vw,3.2rem)] font-normal leading-[1.1] text-white">
              One platform.<br />
              <span className="text-[#aeb6be]">Three-sided impact.</span>
            </h2>
          </div>
          <p className="text-[#94a3b8] text-[0.95rem] leading-relaxed font-light max-w-md">
            HumanlyOS® aligns resident experience, operator efficiency, and municipal visibility inside one vertically integrated system. Hover a group to filter.
          </p>
        </motion.div>

        {/* ── Interactive Stakeholder Legend ── */}
        <motion.div
          initial={{ opacity: 0, y: 12 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.1, ease: [0.16, 1, 0.3, 1] }}
          className="flex flex-wrap gap-4 mb-8"
        >
          {stakeholders.map((s) => (
            <motion.button
              key={s.key}
              onMouseEnter={() => setHoveredStakeholder(s.key)}
              onMouseLeave={() => setHoveredStakeholder(null)}
              className="flex items-center gap-2.5 px-4.5 py-2.5 rounded-full border transition-colors select-none"
              style={{
                background: hoveredStakeholder === s.key ? `${s.color}18` : 'rgba(0,0,0,0.15)',
                borderColor: hoveredStakeholder === s.key ? `${s.color}60` : 'rgba(255,255,255,0.08)',
              }}
              whileHover={{ y: -1 }}
              whileTap={{ y: 1 }}
            >
              <div
                className="w-2 h-2 rounded-full"
                style={{
                  background: s.color,
                  boxShadow: hoveredStakeholder === s.key ? `0 0 10px ${s.color}` : 'none'
                }}
              />
              <span
                className="text-[0.68rem] font-bold tracking-[0.16em] uppercase"
                style={{ color: hoveredStakeholder === s.key ? '#ffffff' : s.color }}
              >
                {s.label}
              </span>
            </motion.button>
          ))}
        </motion.div>

        {/* ── Matrix Table ── */}
        <motion.div
          initial={{ opacity: 0, y: 28 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.15, ease: [0.16, 1, 0.3, 1] }}
          className="relative"
        >
          {/* Volumetric ambient perimeter glass highlight */}
          <div
            className="absolute -inset-px rounded-[2rem] pointer-events-none"
            style={{
              background: 'linear-gradient(135deg, rgba(255,255,255,0.1) 0%, transparent 60%, rgba(255,255,255,0.03) 100%)',
              filter: 'blur(0.5px)',
            }}
          />

          <div
            className="relative rounded-[2rem] overflow-hidden overflow-x-auto"
            style={{
              background: 'rgba(0,0,0,0.22)',
              backdropFilter: 'blur(28px)',
              border: '1px solid rgba(255,255,255,0.08)',
              boxShadow: '0 24px 80px rgba(0,0,0,0.35), inset 0 1px 0 rgba(255,255,255,0.05)',
            }}
          >
            <table className="w-full border-collapse min-w-[640px]">
              <thead>
                <tr className="border-b border-white/[0.07]">
                  <th className="px-8 py-6 text-left w-[46%]">
                    <span className="text-[0.62rem] font-bold tracking-[0.22em] uppercase text-[#7a8a96]">
                      OPERATIONAL VECTOR
                    </span>
                  </th>
                  {stakeholders.map((s) => (
                    <th key={s.key} className="px-5 py-6 text-center">
                      <span
                        className="text-[0.62rem] font-bold tracking-[0.2em] uppercase transition-opacity duration-300"
                        style={{
                          color: s.color,
                          opacity: hoveredStakeholder && hoveredStakeholder !== s.key ? 0.35 : 1
                        }}
                      >
                        {s.label}
                      </span>
                    </th>
                  ))}
                </tr>
              </thead>

              <tbody className="relative">
                {rows.map((row, idx) => {
                  const gradient = getFeatureGradient(row);
                  return (
                    <motion.tr
                      key={idx}
                      initial={{ opacity: 0, x: -12 }}
                      whileInView={{ opacity: 1, x: 0 }}
                      viewport={{ once: true, margin: '-20px' }}
                      transition={{ delay: idx * 0.045, duration: 0.5, ease: [0.16, 1, 0.3, 1] }}
                      onMouseEnter={() => setHoveredRow(idx)}
                      onMouseLeave={() => setHoveredRow(null)}
                      className="border-b border-white/[0.04] last:border-b-0 relative"
                      style={{ originX: 0 }}
                    >
                      {/* Feature cell */}
                      <td className="px-8 py-5.5 relative z-10">
                        {/* Dynamic Multi-Stakeholder Ribbon Glow */}
                        <motion.div
                          className="absolute left-0 top-3.5 bottom-3.5 w-[3px] rounded-r-full"
                          style={{ background: gradient }}
                          animate={{
                            scaleY: hoveredRow === idx ? 1 : 0.4,
                            opacity: hoveredRow === idx ? 1 : 0.12
                          }}
                          transition={{ duration: 0.35, ease: [0.16, 1, 0.3, 1] }}
                        />
                        <motion.span
                          animate={{ color: hoveredRow === idx ? '#ffffff' : 'rgba(255,255,255,0.82)' }}
                          transition={{ duration: 0.28, ease: 'easeOut' }}
                          className="block font-sans text-[0.98rem] font-medium leading-tight mb-0.5"
                        >
                          {row.feature}
                        </motion.span>
                        <span className="block text-[0.74rem] font-light text-[#7a8a96]">
                          {row.sub}
                        </span>
                      </td>

                      {/* Stakeholder check/dash cells */}
                      {(['r', 'o', 'm'] as StakeholderKey[]).map((key, sIdx) => {
                        const s = stakeholders[sIdx];
                        const active = row[key];
                        const isFilteredDimmed = hoveredStakeholder && hoveredStakeholder !== key;

                        return (
                          <td key={key} className="px-5 py-5.5 text-center relative z-10">
                            <motion.div
                              className="flex justify-center"
                              animate={{
                                scale: hoveredRow === idx && active ? 1.15 : 1,
                                opacity: isFilteredDimmed ? 0.15 : (hoveredRow === idx || active ? 1 : 0.45)
                              }}
                              transition={{ duration: 0.28, ease: [0.16, 1, 0.3, 1] }}
                            >
                              {active
                                ? <Check color={s.color} />
                                : <Dash />
                              }
                            </motion.div>
                          </td>
                        );
                      })}

                      {/* Cinematic liquid glass spotlight sweep sliding on layout */}
                      <AnimatePresence>
                        {hoveredRow === idx && (
                          <td className="absolute inset-0 pointer-events-none z-0 p-0" colSpan={4}>
                            <motion.div
                              layoutId="rowHighlight"
                              className="absolute inset-0 pointer-events-none"
                              initial={{ opacity: 0 }}
                              animate={{ opacity: 1 }}
                              exit={{ opacity: 0 }}
                              transition={{ type: 'spring', stiffness: 350, damping: 32 }}
                            >
                              {/* Volumetric backlight glass sheet */}
                              <div className="absolute inset-0 bg-white/[0.045]" />
                              {/* Subtle micro shine ribbon */}
                              <div className="absolute top-0 bottom-0 left-[20%] w-[1px] bg-gradient-to-b from-white/10 to-transparent blur-[0.5px]" />
                            </motion.div>
                          </td>
                        )}
                      </AnimatePresence>

                    </motion.tr>
                  );
                })}
              </tbody>
            </table>
          </div>
        </motion.div>

      </div>
    </section>
  );
};

export default OSPlatformMatrix;
