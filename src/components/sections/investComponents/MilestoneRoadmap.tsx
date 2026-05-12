"use client";
import React from 'react';
import { motion } from 'framer-motion';

const milestones = [
  {
    id: "m1",
    date: "Q3 2025",
    title: "Texas Groundbreak",
    desc: "Break ground on flagship master-planned community — 5,000+ units, 1,000+ acres, Texas workforce market.",
    icon: "🏗️",
    status: "Active",
    statusClass: "bg-[#3daf98]/15 text-[#0d7d6a] border-[#3daf98]/30",
    orbClass: "bg-gradient-to-br from-[#1a4f82] to-[#2d7dd2]"
  },
  {
    id: "m2",
    date: "Q4 2026",
    title: "First Residents Move In",
    desc: "Phase 1 homes delivered. Village Center services go live. HumanlyOS® resident platform launches.",
    icon: "🏠",
    status: "Upcoming",
    statusClass: "bg-[#2d7dd2]/12 text-[#2d7dd2] border-[#2d7dd2]/25",
    orbClass: "bg-gradient-to-br from-[#2d7dd2] to-[#0d7d6a]"
  },
  {
    id: "m3",
    date: "2028",
    title: "Communities 2–4",
    desc: "Three additional communities break ground across new Sun Belt and Midwest markets — replicating the Texas prototype.",
    icon: "📍",
    status: "Planned",
    statusClass: "bg-black/5 text-[#5a5a5a] border-black/12",
    orbClass: "bg-gradient-to-br from-[#0d7d6a] to-[#d96a2b]"
  },
  {
    id: "m4",
    date: "2030",
    title: "HumanlyOS® Licensing",
    desc: "Platform licensing to third-party community operators begins — unlocking a recurring SaaS revenue stream at national scale.",
    icon: "⚙️",
    status: "Planned",
    statusClass: "bg-black/5 text-[#5a5a5a] border-black/12",
    orbClass: "bg-gradient-to-br from-[#d96a2b] to-[#5b3f9e]"
  }
];

export const MilestoneRoadmap = () => {
  return (
    <section className="bg-white py-20">
      <div className="container mx-auto px-6 max-w-[1200px]">
        <div className="text-center mb-16">
          <div className="h-[3px] w-[72px] rounded-full bg-gradient-to-r from-[#1a4f82] via-[#2d7dd2] to-[#d96a2b] mx-auto mb-4" />
          <h2 className="font-serif text-3xl md:text-4xl text-[#1a1a1a] mb-3">The path to scale.</h2>
          <p className="text-[#5a5a5a] max-w-2xl mx-auto">A disciplined, milestone-driven plan from Texas groundbreak to national HumanlyOS® licensing.</p>
        </div>

        <div className="relative">
          {/* Connecting Line (Desktop) */}
          <div className="absolute top-[44px] left-[12.5%] right-[12.5%] h-[2px] bg-gradient-to-r from-[#1a4f82] via-[#2d7dd2] to-[#d96a2b] hidden lg:block" />
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 lg:gap-0">
            {milestones.map((ms, index) => (
              <motion.div 
                key={ms.id}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="flex flex-col items-center text-center px-4 relative z-10"
              >
                {/* Milestone Orb */}
                <div className={`w-[90px] h-[90px] rounded-full flex flex-col items-center justify-center text-white mb-5 shadow-lg border-[3px] border-white ${ms.orbClass}`}>
                  <span className="text-2xl mb-0.5">{ms.icon}</span>
                  <span className="text-[0.65rem] font-bold uppercase tracking-wider">{ms.date}</span>
                </div>

                <div className="text-[0.75rem] font-bold tracking-[0.10em] uppercase text-[#5a5a5a] mb-2">{ms.date}</div>
                <h3 className="font-serif text-[1.1rem] text-[#1a1a1a] mb-2">{ms.title}</h3>
                <p className="text-[0.85rem] text-[#5a5a5a] leading-relaxed mb-4">{ms.desc}</p>
                
                <span className={`inline-flex items-center gap-1.5 text-[0.7rem] font-bold uppercase tracking-wider px-3 py-1 rounded-full border ${ms.statusClass}`}>
                  {ms.status === 'Active' && <span className="w-1.5 h-1.5 rounded-full bg-[#0d7d6a] animate-pulse" />}
                  {ms.status === 'Upcoming' && <span className="text-[0.8rem]">↗</span>}
                  {ms.status}
                </span>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};
