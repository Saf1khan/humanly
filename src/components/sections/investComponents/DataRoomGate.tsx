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
    <section id="dataroom" className="bg-gradient-to-br from-[#0e1b26] via-[#152232] to-[#0d1e2e] py-20 lg:py-32">
      <div className="container mx-auto px-6 max-w-[760px] text-center">
        <motion.p 
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          className="text-[#3daf98] text-[0.75rem] font-bold tracking-[0.14em] uppercase mb-4"
        >
          Data Room Access
        </motion.p>
        <motion.h2 
          initial={{ opacity: 0, y: 10 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="font-serif text-3xl md:text-4xl text-white mb-4"
        >
          Access the Data Room
        </motion.h2>
        <motion.p 
          initial={{ opacity: 0, y: 10 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.1 }}
          className="text-[#f7f6f2]/65 leading-relaxed mb-10"
        >
          Submit your details to receive secure access to our Pitch Deck, Executive Summary, and Financial Model. All materials are governed by NDA.
        </motion.p>

        <div className="flex flex-wrap gap-4 justify-center mb-12">
          {["Pitch Deck", "Executive Summary", "Financial Model"].map((item, idx) => (
            <div key={idx} className="flex items-center gap-2 bg-white/5 border border-white/12 rounded-lg px-5 py-2.5 text-[0.82rem] font-semibold text-[#f7f6f2]/75">
              <span>🔒</span> {item}
            </div>
          ))}
        </div>

        <motion.div 
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="bg-white rounded-[2rem] p-8 md:p-12 text-left shadow-2xl"
        >
          {!submitted ? (
            <form onSubmit={handleSubmit} className="space-y-6">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="space-y-2">
                  <label htmlFor="f-name" className="text-[0.82rem] font-bold text-[#1a1a1a]">Full Name *</label>
                  <input type="text" id="f-name" required placeholder="Jane Smith" className="w-full bg-[#f2f0eb] border-1.5 border-black/10 rounded-xl px-4 py-3 outline-none focus:border-[#2d7dd2] focus:ring-4 focus:ring-[#2d7dd2]/10 transition-all" />
                </div>
                <div className="space-y-2">
                  <label htmlFor="f-email" className="text-[0.82rem] font-bold text-[#1a1a1a]">Email Address *</label>
                  <input type="email" id="f-email" required placeholder="jane@firm.com" className="w-full bg-[#f2f0eb] border-1.5 border-black/10 rounded-xl px-4 py-3 outline-none focus:border-[#2d7dd2] focus:ring-4 focus:ring-[#2d7dd2]/10 transition-all" />
                </div>
              </div>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="space-y-2">
                  <label htmlFor="f-firm" className="text-[0.82rem] font-bold text-[#1a1a1a]">Firm / Organization</label>
                  <input type="text" id="f-firm" placeholder="Acme Capital Partners" className="w-full bg-[#f2f0eb] border-1.5 border-black/10 rounded-xl px-4 py-3 outline-none focus:border-[#2d7dd2] focus:ring-4 focus:ring-[#2d7dd2]/10 transition-all" />
                </div>
                <div className="space-y-2">
                  <label htmlFor="f-range" className="text-[0.82rem] font-bold text-[#1a1a1a]">Investment Range *</label>
                  <select id="f-range" required defaultValue="" className="w-full bg-[#f2f0eb] border-1.5 border-black/10 rounded-xl px-4 py-3 outline-none focus:border-[#2d7dd2] focus:ring-4 focus:ring-[#2d7dd2]/10 transition-all appearance-none cursor-pointer">
                    <option value="" disabled>Select a range</option>
                    <option>$250K – $500K</option>
                    <option>$500K – $1M</option>
                    <option>$1M – $5M</option>
                    <option>$5M – $25M</option>
                    <option>$25M+</option>
                    <option>Evaluating / Exploring</option>
                  </select>
                </div>
              </div>
              <div className="space-y-2">
                <label htmlFor="f-message" className="text-[0.82rem] font-bold text-[#1a1a1a]">Message (optional)</label>
                <textarea id="f-message" placeholder="Tell us about your investment thesis..." className="w-full bg-[#f2f0eb] border-1.5 border-black/10 rounded-xl px-4 py-3 outline-none focus:border-[#2d7dd2] focus:ring-4 focus:ring-[#2d7dd2]/10 transition-all min-h-[100px] resize-vertical" />
              </div>
              <button type="submit" className="w-full bg-[#1a4f82] text-white font-bold py-4 rounded-xl hover:bg-[#2d7dd2] transition-all flex items-center justify-center gap-2">
                Request Access →
              </button>
              <p className="text-[0.78rem] text-[#5a5a5a] text-center leading-relaxed">
                By submitting, you agree to our privacy policy and NDA requirements. Materials are provided for accredited investors only.
              </p>
            </form>
          ) : (
            <div className="py-12 text-center space-y-4">
              <div className="w-16 h-16 bg-[#3daf98]/10 text-[#0d7d6a] rounded-full flex items-center justify-center text-3xl mx-auto mb-6">
                ✅
              </div>
              <h3 className="font-serif text-2xl text-[#1a1a1a]">Request Submitted</h3>
              <p className="text-[#5a5a5a]">Thank you for your interest. Our investor relations team will review your request and be in touch shortly with data room access.</p>
              <button onClick={() => setSubmitted(false)} className="text-[#1a4f82] font-semibold hover:underline mt-4">
                Back to form
              </button>
            </div>
          )}
        </motion.div>
      </div>
    </section>
  );
};
