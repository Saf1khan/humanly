"use client";

import React from "react";
import { motion } from "framer-motion";

const outcomes = [
  {
    icon: "🏠",
    title: "Attainable Housing",
    desc: "High-quality manufactured, modular, multi-family, and site-built homes priced for the 80–120% AMI workforce — making ownership achievable.",
    color: "#1a4f82",
  },
  {
    icon: "🏥",
    title: "Integrated Services",
    desc: "Medical, educational, wellness, and community services embedded within walking distance — removing barriers that fracture daily life.",
    color: "#0d7d6a",
  },
  {
    icon: "💰",
    title: "Financial Empowerment",
    desc: "Ground lease structures lower entry costs. Residents build equity in their home while the operator stewards long-term community value.",
    color: "#d96a2b",
  },
  {
    icon: "🤝",
    title: "Community Connection",
    desc: "Walkable design, shared spaces, and a village center that fosters real human connection — engineered for belonging, not just density.",
    color: "#5b3f9e",
  },
  {
    icon: "📈",
    title: "Economic Mobility",
    desc: "On-site employment, training centers, and AI-assisted resident navigation create pathways for upward mobility from within the community.",
    color: "#2d7dd2",
  },
  {
    icon: "🌱",
    title: "Health & Wellness",
    desc: "Integrated preventive care, occupational therapy, IDD services, and recreational spaces designed for whole-person community health.",
    color: "#3daf98",
  },
];

export const COutcomeCards = () => {
  return (
    <section className="bg-[#f2f0eb] py-20 lg:py-32">
      <div className="max-w-[1200px] mx-auto px-6 lg:px-12">
        <div className="text-center mb-12">
          <div className="h-[3px] rounded-[2px] bg-gradient-to-r from-[#1a4f82] via-[#2d7dd2] to-[#d96a2b] w-[72px] mx-auto mb-4" />
          <h2 className="text-[clamp(1.75rem,3vw,2.5rem)] font-normal text-[#1a1a1a] mb-4">
            What every Humanly® community delivers.
          </h2>
          <p className="text-[#5a5a5a] text-center max-w-[60ch] mx-auto">
            Six interconnected outcomes built into every community — by design, not by accident.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {outcomes.map((outcome, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: idx * 0.1 }}
              className="bg-white rounded-[20px] p-8 shadow-[0_1px_4px_rgba(0,0,0,0.07)] border-t-4 transition-all duration-300 hover:-translate-y-[5px] hover:shadow-[0_12px_40px_rgba(0,0,0,0.15)] flex flex-col gap-3"
              style={{ borderTopColor: outcome.color }}
            >
              <div className="text-[2rem] leading-none">{outcome.icon}</div>
              <h3 className="text-[1.15rem] font-normal text-[#1a1a1a]">{outcome.title}</h3>
              <p className="text-[0.9rem] text-[#5a5a5a] leading-[1.65]">{outcome.desc}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};
