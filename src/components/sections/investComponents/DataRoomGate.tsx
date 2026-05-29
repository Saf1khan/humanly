"use client";
import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

const DocumentIcon = ({ label }: { label: string }) => {
  const icons: Record<string, React.ReactNode> = {
    "Pitch Deck": (
      <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
        <rect x="3" y="3" width="18" height="18" rx="2" />
        <path d="M3 9h18M9 21V9" />
      </svg>
    ),
    "Executive Summary": (
      <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
        <path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z" />
        <polyline points="14 2 14 8 20 8" />
        <line x1="16" y1="13" x2="8" y2="13" />
        <line x1="16" y1="17" x2="8" y2="17" />
        <line x1="10" y1="9" x2="8" y2="9" />
      </svg>
    ),
    "Financial Model": (
      <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
        <line x1="18" y1="20" x2="18" y2="10" />
        <line x1="12" y1="20" x2="12" y2="4" />
        <line x1="6" y1="20" x2="6" y2="14" />
      </svg>
    ),
  };
  return <>{icons[label]}</>;
};

const inputClass =
  "w-full bg-transparent border-b border-white/15 py-3.5 outline-none focus:border-[#d96a2b] transition-colors duration-300 text-white placeholder:text-white/25 text-[1rem] font-light";

const labelClass = "block text-[0.72rem] font-bold text-white/40 tracking-[0.18em] uppercase mb-2";

export const DataRoomGate = () => {
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
  };

  const documents = ["Pitch Deck", "Executive Summary", "Financial Model"];

  return (
    <section id="dataroom" className="relative bg-[#0f0f0f] py-24 lg:py-36 overflow-hidden">
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
      <div className="absolute inset-x-0 top-0 h-20 bg-gradient-to-b from-[#0f0f0f] to-transparent pointer-events-none z-[2]" />
      <div className="absolute inset-x-0 bottom-0 h-20 bg-gradient-to-t from-[#0f0f0f] to-transparent pointer-events-none z-[2]" />
      {/* Corner crosshair marks */}
      <svg width="5" height="5" viewBox="0 0 5 5" fill="none" className="absolute top-3 left-3 z-20 pointer-events-none text-white/30"><path d="M3 2H5V3H3V5H2V3H0V2H2V0H3V2Z" fill="currentColor" /></svg>
      <svg width="5" height="5" viewBox="0 0 5 5" fill="none" className="absolute top-3 right-3 z-20 pointer-events-none text-white/30"><path d="M3 2H5V3H3V5H2V3H0V2H2V0H3V2Z" fill="currentColor" /></svg>
      <svg width="5" height="5" viewBox="0 0 5 5" fill="none" className="absolute bottom-3 left-3 z-20 pointer-events-none text-white/30"><path d="M3 2H5V3H3V5H2V3H0V2H2V0H3V2Z" fill="currentColor" /></svg>
      <svg width="5" height="5" viewBox="0 0 5 5" fill="none" className="absolute bottom-3 right-3 z-20 pointer-events-none text-white/30"><path d="M3 2H5V3H3V5H2V3H0V2H2V0H3V2Z" fill="currentColor" /></svg>

      {/* ── Continuation Left – picking up the teal+blue pipes from MilestoneRoadmap ── */}
      <div className="absolute top-0 left-[2%] lg:left-[8%] w-[300px] h-[700px] pointer-events-none opacity-[0.35] z-[1]">
        <svg viewBox="0 0 300 700" className="w-full h-full">
          {/* Main teal pipe continues straight down from above */}
          <motion.path
            initial={{ pathLength: 0, opacity: 0 }}
            whileInView={{ pathLength: 1, opacity: 1 }}
            transition={{ duration: 1.8, ease: "easeOut" }}
            d="M 50 0 L 50 300 L 200 420 L 200 700"
            fill="none" stroke="#3daf98" strokeWidth="2" strokeDasharray="8 8"
          />
          {/* Parallel blue trace branches off */}
          <motion.path
            initial={{ pathLength: 0, opacity: 0 }}
            whileInView={{ pathLength: 1, opacity: 0.5 }}
            transition={{ duration: 2.2, ease: "easeOut", delay: 0.3 }}
            d="M 260 0 L 260 200 L 140 320 L 140 700"
            fill="none" stroke="#2d7dd2" strokeWidth="1"
          />
          {/* Diamond nodes at key bends */}
          <motion.rect initial={{ opacity: 0, rotate: 45 }} whileInView={{ opacity: 1, rotate: 45 }} transition={{ delay: 1 }}
            x="46" y="296" width="8" height="8" fill="none" stroke="#3daf98" strokeWidth="2"
            style={{ transformOrigin: "50px 300px" }}
          />
          <motion.circle initial={{ opacity: 0 }} whileInView={{ opacity: 1 }} transition={{ delay: 1.3 }}
            cx="200" cy="420" r="5" fill="#3daf98" className="animate-pulse"
          />
          <motion.rect initial={{ opacity: 0, rotate: 45 }} whileInView={{ opacity: 1, rotate: 45 }} transition={{ delay: 1.5 }}
            x="136" y="316" width="8" height="8" fill="#2d7dd2"
            style={{ transformOrigin: "140px 320px" }}
          />
          {/* Ambient glow blob */}
          <circle cx="150" cy="350" r="130" fill="url(#glowLeftGate)" />
          <defs>
            <radialGradient id="glowLeftGate" cx="50%" cy="50%" r="50%">
              <stop offset="0%" stopColor="#3daf98" stopOpacity="0.12" />
              <stop offset="100%" stopColor="transparent" stopOpacity="0" />
            </radialGradient>
          </defs>
        </svg>
      </div>

      {/* ── Continuation Right – picking up the orange pipes from MilestoneRoadmap ── */}
      <div className="absolute top-0 right-0 w-[420px] h-[650px] pointer-events-none opacity-[0.35] z-[1]">
        <svg viewBox="0 0 420 650" className="w-full h-full">
          {/* Primary orange pipe carries on */}
          <motion.path
            initial={{ pathLength: 0, opacity: 0 }}
            whileInView={{ pathLength: 1, opacity: 1 }}
            transition={{ duration: 2, ease: "easeOut", delay: 0.2 }}
            d="M 100 0 L 100 280 L 280 400 L 280 650"
            fill="none" stroke="#f09050" strokeWidth="1.5" strokeDasharray="12 6"
          />
          {/* Softer parallel trace */}
          <motion.path
            initial={{ pathLength: 0, opacity: 0 }}
            whileInView={{ pathLength: 1, opacity: 0.4 }}
            transition={{ duration: 2.5, ease: "easeOut", delay: 0.4 }}
            d="M 150 0 L 150 250 L 340 380 L 340 650"
            fill="none" stroke="#f09050" strokeWidth="1"
          />
          {/* Hexagon node at elbow */}
          <motion.polygon
            initial={{ opacity: 0 }} whileInView={{ opacity: 1 }} transition={{ delay: 1.2 }}
            points="100,265 109,270 109,280 100,285 91,280 91,270"
            fill="none" stroke="#f09050" strokeWidth="1.5"
          />
          <motion.circle initial={{ opacity: 0 }} whileInView={{ opacity: 1 }} transition={{ delay: 1.6 }}
            cx="280" cy="400" r="5" fill="#f09050" className="animate-pulse"
          />
          {/* Branching tick marks */}
          <motion.line initial={{ opacity: 0 }} whileInView={{ opacity: 1 }} transition={{ delay: 1.4 }}
            x1="90" y1="150" x2="70" y2="150" stroke="#f09050" strokeWidth="1" strokeDasharray="4 4"
          />
          <motion.line initial={{ opacity: 0 }} whileInView={{ opacity: 1 }} transition={{ delay: 1.4 }}
            x1="90" y1="200" x2="60" y2="200" stroke="#f09050" strokeWidth="1" strokeDasharray="4 4"
          />
          {/* Ambient glow */}
          <ellipse cx="200" cy="320" rx="180" ry="200" fill="url(#glowRightGate)" />
          <defs>
            <radialGradient id="glowRightGate" cx="50%" cy="50%" r="50%">
              <stop offset="0%" stopColor="#f09050" stopOpacity="0.1" />
              <stop offset="100%" stopColor="transparent" stopOpacity="0" />
            </radialGradient>
          </defs>
        </svg>
      </div>

      {/* Subtle top divider line */}
      <div className="absolute top-0 left-0 right-0 h-px bg-white/[0.06]" />

      <div className="container relative z-10 mx-auto px-6 max-w-[1100px]">

        {/* ── Header Row ── */}
        <div className="flex flex-col lg:flex-row lg:items-end lg:justify-between gap-10 mb-20 pb-12 border-b border-white/[0.07]">
          <div className="max-w-[520px]">
            <motion.p
              initial={{ opacity: 0, scaleX: 0, filter: "blur(4px)" }}
              whileInView={{ opacity: 1, scaleX: 1, filter: "blur(0px)" }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, ease: "easeOut" }}
              className="text-[#3daf98] text-[0.7rem] font-mono tracking-[0.25em] uppercase mb-5 flex items-center gap-2 origin-left"
            >
              <span className="w-1.5 h-1.5 bg-[#3daf98] animate-pulse" />
              [ SYSTEM.DATAROOM :: INVESTOR_PORTAL ]
            </motion.p>
            <motion.h2
              initial={{ opacity: 0, scaleY: 0.01, filter: "brightness(2) hue-rotate(90deg)" }}
              whileInView={{ opacity: [0, 1, 0, 1], scaleY: [0.01, 1, 1], filter: ["brightness(2)", "brightness(1)"] }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, times: [0, 0.2, 0.4, 1], delay: 0.1 }}
              className="font-mono font-bold text-4xl md:text-5xl lg:text-[3.25rem] text-white tracking-tighter leading-[1.1] mb-0 uppercase"
            >
              <span className="text-[#3daf98] opacity-50 mr-3">&gt;</span>Secure Data Room <br />
              <span className="text-[#f09050]">Access<span className="animate-pulse">_</span></span>
            </motion.h2>
          </div>

          {/* Document chips — right-aligned on desktop */}
          <motion.div
            initial={{ opacity: 0, x: 30, filter: "blur(4px)" }}
            whileInView={{ opacity: 1, x: 0, filter: "blur(0px)" }}
            viewport={{ once: true }}
            transition={{ delay: 0.2, duration: 0.6 }}
            className="flex flex-col gap-3 lg:items-end"
          >
            <p className="text-[0.65rem] font-mono tracking-[0.2em] uppercase text-[#3daf98]/60 mb-1 lg:text-right">[ INCLUDED_MATERIALS ]</p>
            {documents.map((doc, i) => (
              <motion.div
                key={doc}
                initial={{ opacity: 0, x: 16 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.2 + i * 0.07 }}
                className="group flex items-center gap-3 text-white/40 text-[0.75rem] font-mono uppercase tracking-widest hover:text-white/80 transition-colors cursor-default"
              >
                <span className="text-[#3daf98]/50 group-hover:text-[#3daf98] transition-colors">
                  <DocumentIcon label={doc} />
                </span>
                <span>&gt; {doc.replace(/ /g, '_')}</span>
                <span className="ml-1 w-5 h-5 border border-white/10 flex items-center justify-center group-hover:border-[#3daf98]/50 transition-colors">
                  <svg width="10" height="10" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-white/30 group-hover:text-[#3daf98] transition-colors">
                    <rect x="3" y="11" width="18" height="11" rx="2" ry="2" />
                    <path d="M7 11V7a5 5 0 0 1 10 0v4" />
                  </svg>
                </span>
              </motion.div>
            ))}
          </motion.div>
        </div>

        {/* ── Body: Description + Form ── */}
        <div className="grid grid-cols-1 lg:grid-cols-[1fr_1.6fr] gap-16 lg:gap-24 items-start">

          {/* Left column — context */}
          <motion.div
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.55 }}
            className="lg:pt-2"
          >
            <p className="text-white/55 leading-[1.8] text-[1rem] font-light mb-10">
              Submit your details to receive secure access to our Pitch Deck, Executive Summary, and Financial Model.
              All materials are governed by a mutual NDA and provided exclusively to accredited investors.
            </p>

            {/* Trust indicators */}
            <div className="space-y-5">
              {[
                { label: "NDA Protected", desc: "All materials bound by mutual non-disclosure" },
                { label: "Verified Access Only", desc: "Accredited investors reviewed within 24h" },
                { label: "Encrypted Distribution", desc: "Secure link delivery to your email" },
              ].map((item, i) => (
                <motion.div
                  key={item.label}
                  initial={{ opacity: 0, x: -10 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: 0.1 + i * 0.08 }}
                  className="flex items-start gap-4"
                >
                  <div className="mt-0.5 w-5 h-5 rounded-full border border-[#3daf98]/30 flex items-center justify-center flex-shrink-0">
                    <div className="w-1.5 h-1.5 rounded-full bg-[#3daf98]" />
                  </div>
                  <div>
                    <p className="text-white/80 text-[0.88rem] font-semibold mb-0.5">{item.label}</p>
                    <p className="text-white/35 text-[0.8rem] font-light leading-relaxed">{item.desc}</p>
                  </div>
                </motion.div>
              ))}
            </div>
          </motion.div>

          {/* Right column — form */}
          <motion.div
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.08 }}
          >
            <AnimatePresence mode="wait">
              {!submitted ? (
                <motion.form
                  key="form"
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  exit={{ opacity: 0, y: -12 }}
                  onSubmit={handleSubmit}
                  className="space-y-10"
                >
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-x-10 gap-y-10">
                    <div>
                      <label htmlFor="f-name" className={labelClass}>Full Name *</label>
                      <input type="text" id="f-name" required placeholder="Jane Smith" className={inputClass} />
                    </div>
                    <div>
                      <label htmlFor="f-email" className={labelClass}>Email Address *</label>
                      <input type="email" id="f-email" required placeholder="jane@firm.com" className={inputClass} />
                    </div>
                    <div>
                      <label htmlFor="f-firm" className={labelClass}>Firm / Organization</label>
                      <input type="text" id="f-firm" placeholder="Acme Capital Partners" className={inputClass} />
                    </div>
                    <div>
                      <label htmlFor="f-range" className={labelClass}>Investment Range *</label>
                      <div className="relative">
                        <select
                          id="f-range"
                          required
                          defaultValue=""
                          className={`${inputClass} appearance-none cursor-pointer pr-8`}
                        >
                          <option value="" disabled className="bg-[#0f0f0f]">Select a range</option>
                          <option className="bg-[#0f0f0f]">$250K – $500K</option>
                          <option className="bg-[#0f0f0f]">$500K – $1M</option>
                          <option className="bg-[#0f0f0f]">$1M – $5M</option>
                          <option className="bg-[#0f0f0f]">$5M – $25M</option>
                          <option className="bg-[#0f0f0f]">$25M+</option>
                          <option className="bg-[#0f0f0f]">Evaluating / Exploring</option>
                        </select>
                        <div className="absolute right-0 top-1/2 -translate-y-1/2 pointer-events-none text-white/25">
                          <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                            <polyline points="6 9 12 15 18 9" />
                          </svg>
                        </div>
                      </div>
                    </div>
                  </div>

                  <div>
                    <label htmlFor="f-message" className={labelClass}>Message (optional)</label>
                    <textarea
                      id="f-message"
                      placeholder="Tell us about your investment thesis…"
                      className={`${inputClass} min-h-[110px] resize-none`}
                    />
                  </div>

                  {/* Submit row */}
                  <div className="flex flex-col sm:flex-row sm:items-center gap-6 pt-2 border-t border-white/[0.07]">
                    <button
                      type="submit"
                      className="group relative inline-flex items-center justify-center gap-3 bg-[#d96a2b] hover:bg-[#f09050] text-white font-bold py-4 px-10 rounded-xl transition-all duration-300 hover:-translate-y-0.5 text-[0.95rem] tracking-wide flex-shrink-0"
                    >
                      <span>Request Access</span>
                      <svg
                        className="transition-transform duration-300 group-hover:translate-x-1"
                        width="16" height="16" viewBox="0 0 24 24" fill="none"
                        stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"
                      >
                        <line x1="5" y1="12" x2="19" y2="12" />
                        <polyline points="12 5 19 12 12 19" />
                      </svg>
                    </button>
                    <p className="text-[0.78rem] text-white/30 leading-relaxed font-light">
                      By submitting you agree to our{" "}
                      <a href="#" className="text-white/50 hover:text-white/80 transition-colors underline underline-offset-4">privacy policy</a>{" "}
                      and{" "}
                      <a href="#" className="text-white/50 hover:text-white/80 transition-colors underline underline-offset-4">NDA requirements</a>.
                    </p>
                  </div>
                </motion.form>
              ) : (
                <motion.div
                  key="success"
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0 }}
                  transition={{ duration: 0.5 }}
                  className="py-16 flex flex-col gap-8"
                >
                  <div className="flex items-center gap-5">
                    <div className="w-12 h-12 rounded-full border border-[#3daf98]/40 flex items-center justify-center flex-shrink-0">
                      <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="#3daf98" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                        <polyline points="20 6 9 17 4 12" />
                      </svg>
                    </div>
                    <div>
                      <p className="text-[0.72rem] font-bold tracking-[0.18em] uppercase text-[#3daf98] mb-1">Request Received</p>
                      <h3 className="font-serif text-2xl md:text-3xl text-white">You're on the list.</h3>
                    </div>
                  </div>

                  <div className="border-t border-white/[0.07] pt-8">
                    <p className="text-white/55 text-[0.95rem] leading-[1.8] font-light max-w-[42ch]">
                      Our investor relations team will review your request and reach out within <strong className="text-white/80 font-medium">24 hours</strong> with your secure data room credentials.
                    </p>
                  </div>

                  <button
                    onClick={() => setSubmitted(false)}
                    className="inline-flex items-center gap-2 text-[0.85rem] text-white/40 hover:text-white/80 transition-colors font-medium mt-2 self-start"
                  >
                    <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                      <line x1="19" y1="12" x2="5" y2="12" />
                      <polyline points="12 19 5 12 12 5" />
                    </svg>
                    Back to form
                  </button>
                </motion.div>
              )}
            </AnimatePresence>
          </motion.div>
        </div>

      </div>

      {/* Subtle bottom divider */}
      <div className="absolute bottom-0 left-0 right-0 h-px bg-white/[0.06]" />
    </section>
  );
};
