"use client";
import React from 'react';
import { motion } from 'framer-motion';

export const CommunityPreview = () => {
  return (
    <section className="py-24 lg:py-32 bg-transparent relative overflow-overflow">
      <div className="max-w-[1440px] mx-auto px-6 md:px-12 lg:px-16 relative z-10 w-full">
        
        <div className="flex flex-col lg:flex-row items-center gap-16 lg:gap-24">
          
          {/* Left Column: Text Content */}
          <div className="w-full lg:w-1/2 flex flex-col items-start text-left">
            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="mb-12"
            >
              <div className="flex flex-col items-start gap-2 mb-6">
                <p className="text-[11px] font-bold tracking-[0.2em] uppercase text-[#A8A5A0]">
                  COMMUNITIES
                </p>
                <div className="h-[1px] w-[72px] bg-[linear-gradient(to_right,#6BCEFF,#0c007a,#AA3DAD,#FF6136,#FFE366)] rounded-full"></div>
              </div>
              <h2 className="text-4xl md:text-5xl lg:text-7xl font-cormorant font-bold text-sandstone-500 leading-[1.1] tracking-tight mb-8">
                Flagship Communities.
              </h2>
              <h3 className="text-2xl md:text-3xl font-bold font-albert tracking-tight text-sandstone-500/90 mb-6">
                The Launchpad @ North Austin
              </h3>
              <p className="text-lg md:text-xl text-sandstone-500/70 font-albert leading-relaxed max-w-xl">
                Our flagship community features 420 attainably priced units, a 20,000 sq ft Circle of Services® hub, and full HumanlyOS® integration. Designed as a blueprint for the future of workforce living.
              </p>
            </motion.div>

            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.2 }}
              className="flex flex-wrap gap-12 w-full pt-10 border-t border-black/10"
            >
              <div>
                <div className="text-5xl md:text-6xl font-bold font-cormorant text-sandstone-500 mb-3">80–120%</div>
                <div className="text-[11px] font-bold text-sandstone-500/50 font-albert uppercase tracking-[0.2em]">AMI Target</div>
              </div>
              <div>
                <div className="text-5xl md:text-6xl font-bold font-cormorant text-sandstone-500 mb-3">~70%</div>
                <div className="text-[11px] font-bold text-sandstone-500/50 font-albert uppercase tracking-[0.2em]">Lots Retained</div>
              </div>
            </motion.div>
          </div>

          {/* Right Column: Stunning Imagery */}
          <div className="w-full lg:w-1/2 relative">
            <motion.div
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, ease: "easeOut" }}
              className="relative w-full aspect-[4/5] lg:aspect-[3/4] rounded-[2rem] lg:rounded-[3rem] overflow-hidden shadow-[0_20px_60px_rgba(0,0,0,0.08)] group"
            >
              <img 
                src="/images/pexels-ianr-21853691.jpg" 
                alt="Community Preview" 
                className="absolute inset-0 w-full h-full object-cover group-hover:scale-105 transition-transform duration-[1500ms] ease-out"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/50 via-transparent to-transparent pointer-events-none transition-opacity duration-700 opacity-80 group-hover:opacity-100"></div>
              
              {/* Floating Badges over the image */}
              <div className="absolute bottom-8 left-8 flex gap-3 z-10">
                <span className="px-4 py-2 bg-white/20 backdrop-blur-md rounded-full text-[10px] font-bold uppercase tracking-widest text-white border border-white/30 shadow-sm">
                  Flagship
                </span>
                <span className="px-4 py-2 bg-[#F55D33]/20 backdrop-blur-md rounded-full text-[10px] font-bold uppercase tracking-widest text-white border border-[#F55D33]/30 shadow-sm">
                  Coming 2027
                </span>
              </div>
            </motion.div>
            
            {/* Decorative Element Behind Image */}
            <div className="absolute -top-16 -right-16 w-72 h-72 bg-[linear-gradient(to_bottom_right,#6BCEFF,#AA3DAD)] opacity-20 blur-[100px] rounded-full -z-10 pointer-events-none"></div>
          </div>
          
        </div>
      </div>
    </section>
  );
};
