"use client";
import React from 'react';
import { motion } from 'framer-motion';

export const CommunityPreview = () => {
  return (
    <section className="py-32 bg-h-bg relative overflow-hidden">
      {/* Background Accent */}
      <div className="absolute top-1/2 right-0 -translate-y-1/2 w-[800px] h-[800px] bg-h-primary/5 rounded-full blur-[120px] pointer-events-none" />
      
      <div className="wrap relative z-10">
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-20"
        >
          <div className="flex flex-col items-center gap-2 mb-6">
            <p className="text-[11px] font-bold tracking-[0.2em] uppercase text-h-primary">
              COMMUNITIES
            </p>
            <div className="h-[2px] w-12 bg-h-primary rounded-full"></div>
          </div>
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-display font-bold text-h-dark leading-[1.1] tracking-tight">
            Flagship Communities.
          </h2>
        </motion.div>
        
        <motion.div 
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 1 }}
          className="relative bg-white/40 backdrop-blur-3xl rounded-[3rem] overflow-hidden shadow-2xl border border-white/60 group"
        >
          <div className="grid grid-cols-1 lg:grid-cols-2">
            <div className="aspect-[4/3] lg:aspect-auto relative overflow-hidden">
              <img 
                src="/images/pexels-ianr-21853691.jpg" 
                alt="Community Preview" 
                className="absolute inset-0 w-full h-full object-cover group-hover:scale-105 transition-transform duration-1000"
              />
              <div className="absolute inset-0 bg-gradient-to-r from-black/20 to-transparent" />
            </div>
            
            <div className="p-12 md:p-16 lg:p-20 flex flex-col justify-center text-h-dark">
              <div className="flex gap-3 mb-8">
                <span className="inline-flex px-3 py-1 rounded-full text-[10px] font-bold uppercase tracking-widest text-h-primary bg-h-primary/10">Flagship</span>
                <span className="inline-flex px-3 py-1 rounded-full text-[10px] font-bold uppercase tracking-widest text-h-blue bg-h-blue/10">Coming 2027</span>
              </div>
              
              <h3 className="text-3xl md:text-4xl lg:text-5xl font-bold font-display mb-8 tracking-tight leading-[1.1]">The Launchpad <br className="hidden md:block" /> @ North Austin</h3>
              
              <p className="text-lg text-h-muted mb-12 leading-relaxed font-medium opacity-90">
                Our flagship community features 420 attainably priced units, a 20,000 sq ft Circle of Services® hub, and full HumanlyOS® integration. Designed as a blueprint for the future of workforce living.
              </p>
              
              <div className="grid grid-cols-2 gap-10 mb-12 border-t border-h-dark/10 pt-10">
                <div>
                  <div className="text-3xl font-bold font-display text-h-dark mb-1">80–120%</div>
                  <div className="text-[10px] font-bold text-h-muted uppercase tracking-[0.2em]">AMI Target</div>
                </div>
                <div>
                  <div className="text-3xl font-bold font-display text-h-dark mb-1">~70%</div>
                  <div className="text-[10px] font-bold text-h-muted uppercase tracking-[0.2em]">Lots Retained</div>
                </div>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};
