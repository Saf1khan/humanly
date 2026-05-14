"use client";
import React from 'react';
import { motion } from 'framer-motion';

export const IrContactCard = () => {
  return (
    <section id="ir-contact" className="relative bg-[#0e1b26] py-20 lg:py-32 px-6 overflow-hidden">
      {/* Background Gradients & Grid */}
      <div className="absolute inset-0 pointer-events-none">
        <div 
          className="absolute inset-0"
          style={{
            background: `
              radial-gradient(circle at 50% 50%, rgba(91,63,158,0.15) 0%, transparent 60%),
              radial-gradient(circle at 10% 90%, rgba(45,125,210,0.12) 0%, transparent 50%)
            `
          }}
        />
        <div 
          className="absolute inset-0 opacity-[0.12]"
          style={{
            backgroundImage: `
              linear-gradient(rgba(255,255,255,0.02) 1px, transparent 1px),
              linear-gradient(90deg, rgba(255,255,255,0.02) 1px, transparent 1px)
            `,
            backgroundSize: '120px 120px'
          }}
        />
      </div>

      <motion.div 
        initial={{ opacity: 0, scale: 0.95 }}
        whileInView={{ opacity: 1, scale: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
        className="max-w-[720px] mx-auto bg-white/[0.03] backdrop-blur-xl border border-white/10 rounded-[3rem] p-10 md:p-16 text-center shadow-2xl relative z-10"
      >
        {/* Subtle Background Glow */}
        <div className="absolute top-0 right-0 w-64 h-64 bg-[#f09050]/10 blur-[100px] rounded-full pointer-events-none" />
        <div className="absolute bottom-0 left-0 w-64 h-64 bg-[#2d7dd2]/10 blur-[100px] rounded-full pointer-events-none" />

        <div className="relative z-10">
          <p className="text-[#3daf98] text-[0.8rem] font-bold tracking-[0.18em] uppercase mb-4">Investor Relations</p>
          <h2 className="font-serif text-4xl md:text-5xl text-white mb-6">Let's talk about your investment.</h2>
          <p className="text-white/60 leading-relaxed mb-12 max-w-[48ch] mx-auto text-lg font-light">
            Our investor relations team is available to answer questions, walk through the data room, and arrange a direct conversation with leadership.
          </p>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-5 mb-12">
            <div className="bg-white/[0.04] border border-white/10 rounded-2xl p-7 text-center hover:bg-white/[0.08] transition-all group">
              <div className="text-3xl mb-4 group-hover:scale-110 transition-transform">✉️</div>
              <div className="text-[0.75rem] font-bold tracking-[0.12em] uppercase text-white/40 mb-2">Email</div>
              <div className="text-[0.95rem] text-white/90 break-all font-medium">
                <a href="mailto:investors@humanly.com" className="text-[#2d7dd2] hover:text-[#3daf98] transition-colors">investors@humanly.com</a>
              </div>
            </div>
            <div className="bg-white/[0.04] border border-white/10 rounded-2xl p-7 text-center hover:bg-white/[0.08] transition-all group">
              <div className="text-3xl mb-4 group-hover:scale-110 transition-transform">🌐</div>
              <div className="text-[0.75rem] font-bold tracking-[0.12em] uppercase text-white/40 mb-2">Website</div>
              <div className="text-[0.95rem] text-white/90 font-medium">
                <a href="https://humanly.us" target="_blank" className="text-[#2d7dd2] hover:text-[#3daf98] transition-colors">humanly.us</a>
              </div>
            </div>
            <div className="bg-white/[0.04] border border-white/10 rounded-2xl p-7 text-center hover:bg-white/[0.08] transition-all group">
              <div className="text-3xl mb-4 group-hover:scale-110 transition-transform">📍</div>
              <div className="text-[0.75rem] font-bold tracking-[0.12em] uppercase text-white/40 mb-2">Office</div>
              <div className="text-[0.95rem] text-white/90 font-medium italic">Dallas, Texas, US</div>
            </div>
          </div>

          <div className="flex flex-wrap gap-5 justify-center">
            <a href="#dataroom" className="px-10 py-4 bg-[#d96a2b] text-white font-bold rounded-xl hover:bg-[#f09050] transition-all hover:-translate-y-0.5 shadow-xl shadow-orange-950/40">
              Request Data Room Access
            </a>
            <a href="https://calendly.com" target="_blank" className="px-10 py-4 bg-white/5 text-white/90 border border-white/10 font-bold rounded-xl hover:bg-white/10 transition-all flex items-center gap-2 backdrop-blur-sm">
              📅 Schedule a Call
            </a>
          </div>
        </div>
      </motion.div>
    </section>
  );
};

