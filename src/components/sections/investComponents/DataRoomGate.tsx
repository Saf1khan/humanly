"use client";
import React, { useState } from 'react';
import { motion } from 'framer-motion';

export const DataRoomGate = () => {
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
  };

  return (
    <section id="dataroom" className="relative bg-[#0e1b26] py-20 lg:py-32 overflow-hidden">
      {/* Background Gradients & Grid */}
      <div className="absolute inset-0 pointer-events-none">
        <div 
          className="absolute inset-0"
          style={{
            background: `
              radial-gradient(ellipse 60% 50% at 50% 100%, rgba(45,125,210,0.12) 0%, transparent 70%),
              radial-gradient(ellipse 40% 40% at 10% 0%, rgba(217,106,43,0.08) 0%, transparent 60%)
            `
          }}
        />
        <div 
          className="absolute inset-0 opacity-[0.1]"
          style={{
            backgroundImage: `
              linear-gradient(rgba(255,255,255,0.02) 1px, transparent 1px),
              linear-gradient(90deg, rgba(255,255,255,0.02) 1px, transparent 1px)
            `,
            backgroundSize: '100px 100px'
          }}
        />
      </div>

      <div className="container relative z-10 mx-auto px-6 max-w-[760px] text-center">
        <motion.p 
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          className="text-[#3daf98] text-[0.8rem] font-bold tracking-[0.2em] uppercase mb-4"
        >
          Data Room Access
        </motion.p>
        <motion.h2 
          initial={{ opacity: 0, y: 10 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="font-serif text-4xl md:text-5xl text-white mb-6"
        >
          Secure Investor Portal
        </motion.h2>
        <motion.p 
          initial={{ opacity: 0, y: 10 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.1 }}
          className="text-white/60 leading-relaxed mb-12 text-lg font-light"
        >
          Submit your details to receive secure access to our Pitch Deck, Executive Summary, and Financial Model. All materials are governed by NDA.
        </motion.p>

        <div className="flex flex-wrap gap-4 justify-center mb-16">
          {["Pitch Deck", "Executive Summary", "Financial Model"].map((item, idx) => (
            <div key={idx} className="flex items-center gap-3 bg-white/[0.03] border border-white/10 backdrop-blur-md rounded-xl px-6 py-3 text-[0.85rem] font-medium text-white/80">
              <span className="opacity-60">🔒</span> {item}
            </div>
          ))}
        </div>

        <motion.div 
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="bg-white/[0.03] backdrop-blur-2xl border border-white/10 rounded-[3rem] p-8 md:p-16 text-left shadow-2xl relative overflow-hidden"
        >
          {/* Internal Glow */}
          <div className="absolute -top-24 -right-24 w-48 h-48 bg-[#d96a2b]/10 blur-[60px] rounded-full pointer-events-none" />
          
          {!submitted ? (
            <form onSubmit={handleSubmit} className="space-y-8 relative z-10">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                <div className="space-y-3">
                  <label htmlFor="f-name" className="text-[0.85rem] font-bold text-white/70 tracking-wider uppercase">Full Name *</label>
                  <input 
                    type="text" 
                    id="f-name" 
                    required 
                    placeholder="Jane Smith" 
                    className="w-full bg-white/[0.03] border border-white/10 rounded-2xl px-6 py-4 outline-none focus:border-[#2d7dd2] focus:ring-4 focus:ring-[#2d7dd2]/10 transition-all text-white placeholder:text-white/20 text-lg font-light" 
                  />
                </div>
                <div className="space-y-3">
                  <label htmlFor="f-email" className="text-[0.85rem] font-bold text-white/70 tracking-wider uppercase">Email Address *</label>
                  <input 
                    type="email" 
                    id="f-email" 
                    required 
                    placeholder="jane@firm.com" 
                    className="w-full bg-white/[0.03] border border-white/10 rounded-2xl px-6 py-4 outline-none focus:border-[#2d7dd2] focus:ring-4 focus:ring-[#2d7dd2]/10 transition-all text-white placeholder:text-white/20 text-lg font-light" 
                  />
                </div>
              </div>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                <div className="space-y-3">
                  <label htmlFor="f-firm" className="text-[0.85rem] font-bold text-white/70 tracking-wider uppercase">Firm / Organization</label>
                  <input 
                    type="text" 
                    id="f-firm" 
                    placeholder="Acme Capital Partners" 
                    className="w-full bg-white/[0.03] border border-white/10 rounded-2xl px-6 py-4 outline-none focus:border-[#2d7dd2] focus:ring-4 focus:ring-[#2d7dd2]/10 transition-all text-white placeholder:text-white/20 text-lg font-light" 
                  />
                </div>
                <div className="space-y-3">
                  <label htmlFor="f-range" className="text-[0.85rem] font-bold text-white/70 tracking-wider uppercase">Investment Range *</label>
                  <div className="relative">
                    <select 
                      id="f-range" 
                      required 
                      defaultValue="" 
                      className="w-full bg-white/[0.03] border border-white/10 rounded-2xl px-6 py-4 outline-none focus:border-[#2d7dd2] focus:ring-4 focus:ring-[#2d7dd2]/10 transition-all appearance-none cursor-pointer text-white text-lg font-light"
                    >
                      <option value="" disabled className="bg-[#0e1b26]">Select a range</option>
                      <option className="bg-[#0e1b26]">$250K – $500K</option>
                      <option className="bg-[#0e1b26]">$500K – $1M</option>
                      <option className="bg-[#0e1b26]">$1M – $5M</option>
                      <option className="bg-[#0e1b26]">$5M – $25M</option>
                      <option className="bg-[#0e1b26]">$25M+</option>
                      <option className="bg-[#0e1b26]">Evaluating / Exploring</option>
                    </select>
                    <div className="absolute right-6 top-1/2 -translate-y-1/2 pointer-events-none text-white/30">▼</div>
                  </div>
                </div>
              </div>
              <div className="space-y-3">
                <label htmlFor="f-message" className="text-[0.85rem] font-bold text-white/70 tracking-wider uppercase">Message (optional)</label>
                <textarea 
                  id="f-message" 
                  placeholder="Tell us about your investment thesis..." 
                  className="w-full bg-white/[0.03] border border-white/10 rounded-2xl px-6 py-4 outline-none focus:border-[#2d7dd2] focus:ring-4 focus:ring-[#2d7dd2]/10 transition-all min-h-[140px] resize-vertical text-white placeholder:text-white/20 text-lg font-light" 
                />
              </div>
              <button type="submit" className="w-full bg-[#d96a2b] text-white font-bold py-5 rounded-2xl hover:bg-[#f09050] transition-all flex items-center justify-center gap-2 text-xl shadow-xl shadow-orange-950/40 hover:-translate-y-0.5">
                Request Data Room Access →
              </button>
              <p className="text-[0.85rem] text-white/40 text-center leading-relaxed font-light">
                By submitting, you agree to our <a href="#" className="text-white/60 hover:text-white underline underline-offset-4">privacy policy</a> and <a href="#" className="text-white/60 hover:text-white underline underline-offset-4">NDA requirements</a>. <br/>Materials are provided for accredited investors only.
              </p>
            </form>
          ) : (
            <div className="py-20 text-center space-y-8 relative z-10">
              <div className="w-24 h-24 bg-[#3daf98]/10 text-[#3daf98] rounded-full flex items-center justify-center text-5xl mx-auto mb-8 border border-[#3daf98]/20">
                ✓
              </div>
              <h3 className="font-serif text-4xl text-white">Request Submitted</h3>
              <p className="text-white/60 text-xl max-w-[32ch] mx-auto leading-relaxed font-light">Thank you for your interest. Our investor relations team will review your request and be in touch shortly.</p>
              <button onClick={() => setSubmitted(false)} className="text-[#3daf98] font-bold hover:text-white mt-10 transition-colors text-lg flex items-center justify-center gap-2 mx-auto">
                <span>←</span> Back to form
              </button>
            </div>
          )}
        </motion.div>

      </div>
    </section>
  );
};

