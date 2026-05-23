"use client";
import React from 'react';
import { motion } from 'framer-motion';
import Image from 'next/image';
import { Mail, Globe, MapPin, Calendar } from 'lucide-react';

export const IrContactCard = () => {
  return (
    <section id="ir-contact" className="relative bg-[#0a0f14] py-20 lg:py-32 overflow-hidden">
      {/* Background Image & Overlays */}
      <div className="absolute inset-0 pointer-events-none z-0 overflow-hidden">
        <motion.div
          initial={{ opacity: 0, scale: 1.15 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: false, amount: 0.25 }}
          transition={{ duration: 1.6, ease: [0.16, 1, 0.3, 1] }}
          className="w-full h-full relative"
        >
          <Image
            src="/images/AdobeStock_195533712.jpeg"
            alt="Investor Relations Background"
            fill
            className="object-cover opacity-100 mix-blend-luminosity"
            priority
          />
        </motion.div>
        {/* Deep, premium dark gradient overlay for text contrast
        <div className="absolute inset-0 bg-gradient-to-b from-[#0a1118] via-[#0e1b26]/75 to-[#050a0e] mix-blend-multiply" />
        <div className="absolute inset-0 bg-gradient-to-tr from-[#0a1118]/90 via-transparent to-[#0a1118]/90" /> */}

        {/* Subtle grid pattern overlay */}
        <div
          className="absolute inset-0 opacity-[0.07]"
          style={{
            backgroundImage: `
              linear-gradient(rgba(255,255,255,0.03) 1px, transparent 1px),
              linear-gradient(90deg, rgba(255,255,255,0.03) 1px, transparent 1px)
            `,
            backgroundSize: '100px 100px'
          }}
        />
      </div>

      {/* Floating Fluid Glass Blobs */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none z-0">
        {/* Blob 1: Orange/Amber - floating and morphing */}
        <motion.div
          animate={{
            x: [-40, 40, -20],
            y: [-30, 50, -10],
            scale: [1, 1.2, 0.9],
            rotate: [0, 120, 240]
          }}
          transition={{
            duration: 20,
            repeat: Infinity,
            repeatType: "mirror",
            ease: "easeInOut"
          }}
          className="absolute top-1/4 left-1/4 w-[350px] h-[350px] md:w-[500px] md:h-[500px] rounded-full bg-gradient-to-tr from-[#d96a2b]/20 to-[#f09050]/5 blur-[80px] md:blur-[120px] mix-blend-screen"
        />

        {/* Blob 2: Teal/Green - floating in opposite phase */}
        <motion.div
          animate={{
            x: [50, -30, 20],
            y: [40, -40, 10],
            scale: [0.9, 1.15, 1],
            rotate: [360, 240, 120]
          }}
          transition={{
            duration: 24,
            repeat: Infinity,
            repeatType: "mirror",
            ease: "easeInOut"
          }}
          className="absolute bottom-1/4 right-1/4 w-[400px] h-[400px] md:w-[600px] md:h-[600px] rounded-full bg-gradient-to-br from-[#3daf98]/15 to-transparent blur-[90px] md:blur-[140px] mix-blend-screen"
        />

        {/* Blob 3: Deep Royal Blue/Purple */}
        <motion.div
          animate={{
            x: [-20, 30, -50],
            y: [50, -20, 30],
            scale: [1.1, 0.9, 1.2],
            rotate: [180, 0, 360]
          }}
          transition={{
            duration: 18,
            repeat: Infinity,
            repeatType: "mirror",
            ease: "easeInOut"
          }}
          className="absolute top-1/2 left-1/3 w-[300px] h-[300px] md:w-[450px] md:h-[450px] rounded-full bg-gradient-to-bl from-[#2d7dd2]/15 to-[#5b3f9e]/10 blur-[80px] md:blur-[120px] mix-blend-screen"
        />
      </div>

      <div className="container relative z-10 mx-auto px-6 max-w-[1200px] w-full">
        <motion.div
          initial={{ opacity: 0, y: 40, scale: 0.97 }}
          whileInView={{ opacity: 1, y: 0, scale: 1 }}
          viewport={{ once: false, amount: 0.25 }}
          transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
          className="max-w-[720px] mr-auto ml-0 bg-[#0b121a]/55 backdrop-blur-[32px] border border-white/15 rounded-[2.5rem] md:rounded-[3rem] p-8 md:p-16 text-left shadow-[0_25px_60px_-15px_rgba(0,0,0,0.6)] relative z-10"
        >
          {/* Subtle Background Glow inside the card for warmth and cool tones */}
          <div className="absolute top-0 right-0 w-64 h-64 bg-[#f09050]/10 blur-[100px] rounded-full pointer-events-none" />
          <div className="absolute bottom-0 left-0 w-64 h-64 bg-[#2d7dd2]/10 blur-[100px] rounded-full pointer-events-none" />

          <div className="relative z-10">
            <p className="text-[#3daf98] text-[0.8rem] font-bold tracking-[0.18em] uppercase mb-4">Investor Relations</p>
            <h2 className="font-serif text-4xl md:text-5xl text-white font-medium mb-6">Let's talk about your investment.</h2>
            <p className="text-white/90 leading-relaxed mb-12 max-w-[48ch] text-lg font-normal">
              Our investor relations team is available to answer questions, walk through the data room, and arrange a direct conversation with leadership.
            </p>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-5 mb-12">
              <div className="bg-white/[0.05] border border-white/10 rounded-2xl p-6 text-left hover:bg-white/[0.09] hover:border-white/20 transition-all duration-300 group shadow-[inset_0_1px_1px_rgba(255,255,255,0.05)]">
                <div className="mb-4 group-hover:scale-110 transition-transform duration-300 origin-left">
                  <Mail className="w-6 h-6 text-[#3daf98]" strokeWidth={1.5} />
                </div>
                <div className="text-[0.75rem] font-bold tracking-[0.12em] uppercase text-white/60 mb-2">Email</div>
                <div className="text-[0.95rem] text-white break-all font-medium">
                  <a href="mailto:investors@humanly.com" className="text-[#58a6ff] hover:text-[#3daf98] font-semibold transition-colors duration-300">investors@humanly.com</a>
                </div>
              </div>
              <div className="bg-white/[0.05] border border-white/10 rounded-2xl p-6 text-left hover:bg-white/[0.09] hover:border-white/20 transition-all duration-300 group shadow-[inset_0_1px_1px_rgba(255,255,255,0.05)]">
                <div className="mb-4 group-hover:scale-110 transition-transform duration-300 origin-left">
                  <Globe className="w-6 h-6 text-[#3daf98]" strokeWidth={1.5} />
                </div>
                <div className="text-[0.75rem] font-bold tracking-[0.12em] uppercase text-white/60 mb-2">Website</div>
                <div className="text-[0.95rem] text-white font-medium">
                  <a href="https://humanly.us" target="_blank" className="text-[#58a6ff] hover:text-[#3daf98] font-semibold transition-colors duration-300">humanly.us</a>
                </div>
              </div>
              <div className="bg-white/[0.05] border border-white/10 rounded-2xl p-6 text-left hover:bg-white/[0.09] hover:border-white/20 transition-all duration-300 group shadow-[inset_0_1px_1px_rgba(255,255,255,0.05)]">
                <div className="mb-4 group-hover:scale-110 transition-transform duration-300 origin-left">
                  <MapPin className="w-6 h-6 text-[#3daf98]" strokeWidth={1.5} />
                </div>
                <div className="text-[0.75rem] font-bold tracking-[0.12em] uppercase text-white/60 mb-2">Office</div>
                <div className="text-[0.95rem] text-white font-semibold">Dallas, Texas, US</div>
              </div>
            </div>

            <div className="flex flex-wrap gap-5 justify-start">
              <a href="#dataroom" className="px-10 py-4 bg-[#d96a2b] text-white font-bold rounded-xl hover:bg-[#f09050] transition-all hover:-translate-y-0.5 shadow-xl shadow-orange-950/40 duration-300">
                Request Data Room Access
              </a>
              <a href="https://calendly.com" target="_blank" className="px-10 py-4 bg-white/10 text-white border border-white/20 font-bold rounded-xl hover:bg-white/15 transition-all duration-300 flex items-center gap-2 backdrop-blur-sm">
                <Calendar className="w-5 h-5 text-white" strokeWidth={1.5} />
                Schedule a Call
              </a>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

