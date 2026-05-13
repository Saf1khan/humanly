"use client";
import React from 'react';
import { motion } from 'framer-motion';
import Image from 'next/image';

const partnerCategories = [
  {
    label: "Strategic Partners",
    type: "strategic",
    items: [
      { role: "Strategic Land Partner — provides access to large-acreage sites across Sun Belt markets at favorable terms.", icon: "/images/CJSarchitects.png" },
      { role: "Community Development Finance Partner — supports resident financial literacy and CDFI-backed mortgage programs.", icon: "/images/Figure.png"},
      { role: "Manufactured Housing Partner — preferred manufacturer for homes built to Humanly® quality and design standards.", icon: "/images/HeyHomie.png"}
    ]
  },
  {
    label: "Advisory Board",
    type: "advisory",
    items: [
      { role: "AI Technology Advisor — former executive at leading AI platform. Advises on HumanlyOS® architecture and LLM strategy.", icon: "/images/AutoDesk360.png" },
      { role: "Housing Policy Advisor — 20 years in federal and state housing policy. Guides regulatory navigation and AMI compliance.", icon: "/images/HarrisBeachMurtha.png" },
      { role: "Capital Markets Advisor — institutional real estate investor. Bridges Humanly® to REIT and family office capital channels.", icon: "/images/Tesla.png" }
    ]
  },
  {
    label: "Institutional Partners",
    type: "institutional",
    items: [
      { role: "Healthcare Integration Partner — provides on-site medical services, staffing, and telehealth infrastructure to village centers.", icon: "/images/FountainLife.png" },
      { role: "Education & Workforce Partner — delivers AI learning labs, job training programs, and continuous education pathways.", icon: "/images/GolisanoInstitute.png" },
      { role: "Technology Infrastructure Partner — provides connectivity, smart home integration, and digital twin data systems.", icon: "/images/Starlink.png" }
    ]
  }
];

export const PartnersAdvisors = () => {
  return (
    <section className="relative w-full bg-[#fdfcfb] py-24 overflow-hidden border-t border-black/5">
      {/* Subtle Background Decoration */}
      <div
        className="absolute pointer-events-none left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 w-[clamp(44rem,14.769rem+116.923vw,120rem)] h-[clamp(25rem,8.654rem+65.385vw,67.5rem)]"
        style={{ background: "radial-gradient(50% 50%, rgba(255, 182, 55, 0.03), rgba(255, 182, 55, 0.05) 50%, rgba(255, 182, 55, 0))" }}
      />

      <div className="container relative z-10 mx-auto px-6 max-w-[1200px]">
        <div className="mb-12">
          <div className="h-[3px] w-[72px] rounded-full bg-gradient-to-r from-[#1a4f82] via-[#2d7dd2] to-[#d96a2b] mb-4" />
          <h2 className="font-serif text-3xl md:text-4xl text-[#1a1a1a] mb-3">Partners & Advisors</h2>
          <p className="text-[#5a5a5a] max-w-2xl font-normal">The organizations and individuals who amplify Humanly®'s reach, credibility, and capabilities.</p>
        </div>

        {partnerCategories.map((category, catIndex) => (
          <div key={catIndex} className="mb-12 last:mb-0">
            <p className="text-[0.78rem] font-bold tracking-[0.12em] uppercase text-[#5a5a5a] pb-3 border-b border-black/10 mb-6">
              {category.label}
            </p>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
              {category.items.map((item, itemIndex) => (
                <motion.div 
                  key={itemIndex}
                  initial={{ opacity: 0, x: -10 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.4, delay: itemIndex * 0.1 }}
                  className={`bg-[#f2f0eb] rounded-2xl overflow-hidden flex items-stretch shadow-sm hover:shadow-md transition-all duration-300 border-l-[3px] ${
                    category.type === 'strategic' ? 'border-[#1a4f82]' : 
                    category.type === 'advisory' ? 'border-[#d96a2b]' : 
                    'border-[#0d7d6a]'
                  }`}
                >
                  <div className="w-24 shrink-0 flex items-center justify-center bg-white border-r border-black/5 p-4">
                    <div className="relative w-full h-full scale-150">
                      <Image 
                        src={item.icon} 
                        alt="Partner Icon" 
                        fill 
                        className="object-contain grayscale hover:grayscale-0 transition-all duration-500"
                      />
                    </div>
                  </div>
                  <div className="p-5 flex items-center">
                    <p className="text-[0.82rem] text-[#5a5a5a] leading-relaxed line-clamp-4">{item.role}</p>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};
