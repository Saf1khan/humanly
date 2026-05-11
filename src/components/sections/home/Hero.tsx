"use client";
import React from 'react';
import { motion } from 'framer-motion';

export const Hero = () => {
  return (
    <section className="relative h-[124vh] flex items-center overflow-hidden">
      {/* Background Image with Overlay */}
      <div className="absolute inset-0 z-0">
        <img 
          src="/images/AdobeStock_536583618.jpeg" 
          alt="Modern Community" 
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-black/30" />
      </div>

      {/* Decorative Glows */}
      <div className="absolute top-1/4 -left-20 w-[600px] h-[600px] bg-h-primary/20 rounded-full blur-[120px] pointer-events-none" />
      
      <div className="wrap relative z-10 w-full pt-20">
        <div className="max-w-[960px] mx-auto text-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
          >
            <div className="flex items-center justify-center gap-3 mb-6">
              <div className="h-[1px] w-12 bg-h-primary"></div>
              <p className="text-xs font-bold tracking-[0.2em] uppercase text-h-primary">
                AI-Native · Vertically Integrated
              </p>
              <div className="h-[1px] w-12 bg-h-primary"></div>
            </div>
            
            <h1 className="text-[3.5rem] md:text-[5rem] lg:text-[6rem] font-display font-bold text-white leading-[1.05] tracking-tight mb-8 drop-shadow-2xl">
              Every Neighborhood<br />
              <span className="text-h-primary">a Launchpad.</span>
            </h1>
            
            <p className="text-lg md:text-xl text-white max-w-2xl mx-auto mb-12 leading-relaxed drop-shadow-md">
              Humanly is building the future of workforce housing. From land acquisition through lifelong resident services, powered by HumanlyOS®.
            </p>
            
            <div className="flex flex-wrap justify-center gap-5">
              <a href="invest.html" className="group relative px-10 py-4 bg-h-primary text-white rounded-full font-bold overflow-hidden transition-all hover:pr-14">
                <span className="relative z-10">Request Data Room Access</span>
                <span className="absolute right-6 top-1/2 -translate-y-1/2 opacity-0 group-hover:opacity-100 transition-all">→</span>
              </a>
              <a href="platform.html" className="px-10 py-4 bg-white/10 backdrop-blur-md border border-white/20 text-white rounded-full font-bold hover:bg-white/20 transition-all">
                Explore the Platform
              </a>
            </div>
          </motion.div>
        </div>
      </div>

      {/* Bottom Gradient Fade */}
      <div className="absolute bottom-0 left-0 w-full h-32 bg-gradient-to-t from-[#f7f6f2] to-transparent z-10"></div>
    </section>
  );
};
