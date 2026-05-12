"use client";
import React from 'react';
import { motion } from 'framer-motion';

export const IrContactCard = () => {
  return (
    <section id="ir-contact" className="bg-gradient-to-br from-[#0e1b26] to-[#1a2f42] py-20 lg:py-32 px-6">
      <motion.div 
        initial={{ opacity: 0, scale: 0.95 }}
        whileInView={{ opacity: 1, scale: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
        className="max-w-[680px] mx-auto bg-white/5 border border-white/10 rounded-[2.5rem] p-10 md:p-16 text-center shadow-2xl relative overflow-hidden"
      >
        {/* Subtle Background Glow */}
        <div className="absolute top-0 right-0 w-64 h-64 bg-[#f09050]/5 blur-[80px] rounded-full pointer-events-none" />
        <div className="absolute bottom-0 left-0 w-64 h-64 bg-[#2d7dd2]/5 blur-[80px] rounded-full pointer-events-none" />

        <div className="relative z-10">
          <p className="text-[#3daf98] text-[0.75rem] font-bold tracking-[0.14em] uppercase mb-4">Investor Relations</p>
          <h2 className="font-serif text-3xl md:text-4xl text-white mb-4">Let's talk about your investment.</h2>
          <p className="text-[#f7f6f2]/65 leading-relaxed mb-10 max-w-[50ch] mx-auto">
            Our investor relations team is available to answer questions, walk through the data room, and arrange a direct conversation with leadership.
          </p>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-10">
            <div className="bg-white/5 border border-white/80 rounded-2xl p-6 text-center">
              <div className="text-2xl mb-3">✉️</div>
              <div className="text-[0.72rem] font-bold tracking-[0.10em] uppercase text-[#f7f6f2]/45 mb-1">Email</div>
              <div className="text-[0.9rem] text-[#f7f6f2]/82 break-all">
                <a href="mailto:investors@humanly.com" className="text-[#5ba3e0] hover:underline">investors@humanly.com</a>
              </div>
            </div>
            <div className="bg-white/5 border border-white/80 rounded-2xl p-6 text-center">
              <div className="text-2xl mb-3">🌐</div>
              <div className="text-[0.72rem] font-bold tracking-[0.10em] uppercase text-[#f7f6f2]/45 mb-1">Website</div>
              <div className="text-[0.9rem] text-[#f7f6f2]/82">
                <a href="https://humanly.com" target="_blank" className="text-[#5ba3e0] hover:underline">humanly.com</a>
              </div>
            </div>
            <div className="bg-white/5 border border-white/80 rounded-2xl p-6 text-center">
              <div className="text-2xl mb-3">📍</div>
              <div className="text-[0.72rem] font-bold tracking-[0.10em] uppercase text-[#f7f6f2]/45 mb-1">Office</div>
              <div className="text-[0.9rem] text-[#f7f6f2]/82">Dallas, Texas, US</div>
            </div>
          </div>

          <div className="flex flex-wrap gap-4 justify-center">
            <a href="#dataroom" className="px-8 py-3.5 bg-[#d96a2b] text-white font-bold rounded-xl hover:bg-[#f09050] transition-all">
              Request Data Room Access
            </a>
            <a href="https://calendly.com" target="_blank" className="px-8 py-3.5 bg-white/10 text-white/85 border border-white/20 font-bold rounded-xl hover:bg-white/20 transition-all flex items-center gap-2">
              📅 Schedule a Call
            </a>
          </div>
        </div>
      </motion.div>
    </section>
  );
};
