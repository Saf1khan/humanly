"use client";
import React from 'react';
import { motion } from 'framer-motion';

const partnerCategories = [
  {
    label: "Strategic Partners",
    type: "strategic",
    items: [
      { name: "[Partner Name]", role: "Strategic Land Partner — provides access to large-acreage sites across Sun Belt markets at favorable terms.", icon: "🏗️", color: "bg-[#1a4f82]/10" },
      { name: "[Partner Name]", role: "Community Development Finance Partner — supports resident financial literacy and CDFI-backed mortgage programs.", icon: "🤝", color: "bg-[#0d7d6a]/10" },
      { name: "[Partner Name]", role: "Manufactured Housing Partner — preferred manufacturer for homes built to Humanly® quality and design standards.", icon: "🏠", color: "bg-[#1a4f82]/10" }
    ]
  },
  {
    label: "Advisory Board",
    type: "advisory",
    items: [
      { name: "[Advisor Name]", role: "AI Technology Advisor — former executive at leading AI platform. Advises on HumanlyOS® architecture and LLM strategy.", icon: "💡", color: "bg-[#d96a2b]/10" },
      { name: "[Advisor Name]", role: "Housing Policy Advisor — 20 years in federal and state housing policy. Guides regulatory navigation and AMI compliance.", icon: "🏛️", color: "bg-[#d96a2b]/10" },
      { name: "[Advisor Name]", role: "Capital Markets Advisor — institutional real estate investor. Bridges Humanly® to REIT and family office capital channels.", icon: "📊", color: "bg-[#5b3f9e]/10" }
    ]
  },
  {
    label: "Institutional Partners",
    type: "institutional",
    items: [
      { name: "[Institution Name]", role: "Healthcare Integration Partner — provides on-site medical services, staffing, and telehealth infrastructure to village centers.", icon: "🏦", color: "bg-[#0d7d6a]/10" },
      { name: "[Institution Name]", role: "Education & Workforce Partner — delivers AI learning labs, job training programs, and continuous education pathways.", icon: "🎓", color: "bg-[#0d7d6a]/10" },
      { name: "[Institution Name]", role: "Technology Infrastructure Partner — provides connectivity, smart home integration, and digital twin data systems.", icon: "🌐", color: "bg-[#0d7d6a]/10" }
    ]
  }
];

export const PartnersAdvisors = () => {
  return (
    <section className="bg-white py-20">
      <div className="container mx-auto px-6 max-w-[1200px]">
        <div className="mb-12">
          <div className="h-[3px] w-[72px] rounded-full bg-gradient-to-r from-[#1a4f82] via-[#2d7dd2] to-[#d96a2b] mb-4" />
          <h2 className="font-serif text-3xl md:text-4xl text-[#1a1a1a] mb-3">Partners & Advisors</h2>
          <p className="text-[#5a5a5a] max-w-2xl">The organizations and individuals who amplify Humanly®'s reach, credibility, and capabilities.</p>
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
                  className={`bg-[#f2f0eb] rounded-2xl p-6 flex items-start gap-4 shadow-sm hover:shadow-md transition-all duration-300 border-l-[3px] ${
                    category.type === 'strategic' ? 'border-[#1a4f82]' : 
                    category.type === 'advisory' ? 'border-[#d96a2b]' : 
                    'border-[#0d7d6a]'
                  }`}
                >
                  <div className={`w-12 h-12 rounded-xl flex-shrink-0 flex items-center justify-center text-2xl ${item.color}`}>
                    {item.icon}
                  </div>
                  <div>
                    <h4 className="font-serif text-[1.05rem] text-[#1a1a1a]">{item.name}</h4>
                    <p className="text-[0.82rem] text-[#5a5a5a] mt-1 leading-relaxed">{item.role}</p>
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
