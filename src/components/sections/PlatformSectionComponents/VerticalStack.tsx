"use client";

import React from "react";
import { motion } from "framer-motion";

interface LayerProps {
  label: string;
  title: string;
  desc: string;
  cap: string;
  detail: string;
  phase: "acq" | "lease" | "mgmt";
  imgSrc: string;
  delay?: number;
}

const Layer = ({ label, title, desc, cap, detail, phase, imgSrc, delay = 0 }: LayerProps) => {
  const phaseMap = {
    acq: "Acquisitions",
    lease: "Lease-up",
    mgmt: "Management"
  };

  return (
    <motion.div
      initial={{ opacity: 0, y: 40 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.8, delay, ease: [0.16, 1, 0.3, 1] }}
      className="flex flex-col md:flex-row items-center mb-10 md:mb-20 gap-6 md:gap-12 font-sans"
    >
      <div className="w-full md:w-5/12 overflow-hidden rounded-[20px] shadow-lg group cursor-pointer">
        <div className="aspect-[4/3] w-full relative overflow-hidden bg-slate-100">
           <img
             src={imgSrc}
             alt={title}
             className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
           />
        </div>
      </div>
      <div className="w-full md:w-7/12 flex flex-col md:pl-6">
        <div className="flex items-center gap-3 mb-3">
          <h4 className="text-[13px] font-albert font-normal text-[#3E2242] uppercase tracking-[0.15em]">{label}</h4>
          <span className="w-1 h-1 rounded-full bg-[rgba(62,34,66,0.3)]" />
          <h5 className="text-[14px] text-[rgba(62,34,66,0.6)] font-light">{phaseMap[phase]}</h5>
        </div>
        <h3 className="text-[clamp(24px,3vw,32px)] font-cormorant font-normal leading-tight tracking-tight text-[#3E2242] mb-4 hover:text-[#6B3FA0] transition-colors cursor-pointer">
          {title}
        </h3>
        <p className="text-[16px] md:text-[18px] leading-relaxed text-[rgba(15,23,42,0.75)] mb-6 max-w-[600px] font-light">
          {desc}
        </p>
        <div className="flex flex-col gap-3 mt-2 bg-white/40 rounded-xl p-5 border border-[rgba(62,34,66,0.08)]">
           <div className="text-[11px] font-albert font-normal text-[#3E2242] uppercase tracking-[0.15em]">
             {cap}
           </div>
           <p className="text-[14px] leading-relaxed text-[rgba(15,23,42,0.65)] font-light">
             {detail}
           </p>
        </div>
      </div>
    </motion.div>
  );
};

export const VerticalStack = () => {
  return (
    <section
      className="overflow-hidden font-sans"
      style={{
        position: "relative",
        zIndex: 2,
        backgroundColor: "rgb(239, 234, 226)",
        borderTopLeftRadius: "80px",
        borderTopRightRadius: "80px",
        marginTop: 0,
        paddingTop: "100px",
        paddingBottom: "100px",
        boxShadow: "0 -20px 40px rgba(0,0,0,0.1)",
        clipPath: "inset(-200px -200px 0px -200px)",
      }}
    >
      {/* Gradient overlay — exact match to PlatformHero's hero-container-sandstone::before */}
      <div
        className="absolute inset-0 pointer-events-none"
        style={{
          opacity: 0.9,
          zIndex: 1,
          backgroundImage: [
            "radial-gradient(circle at 10% 20%, rgba(160, 161, 208, 0.4) 0px, transparent 30%)",
            "radial-gradient(circle at 99% 40%, rgba(160, 161, 208, 0.4) 0px, transparent 35%)",
          ].join(", "),
        }}
      />

      <div className="container mx-auto px-6 md:px-12 max-w-[1200px] relative z-10">


        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 1, ease: [0.16, 1, 0.3, 1] }}
          className="text-[clamp(36px,5vw,64px)] font-cormorant font-light leading-[1.08] tracking-[-0.02em] text-[#3E2242] max-w-[880px] mb-24 text-center md:text-left mx-auto md:mx-0"
        >
          Nine layers of value creation across acquisitions, lease-up, and management.
        </motion.h2>

        <div className="flex flex-col">
          <Layer
            label="Layer 0"
            phase="acq"
            title="Smarter, Faster Land Acquisition"
            desc="Proprietary AI finds off-market parcels and replaces traditional market study guesswork."
            cap="Deal flow + eliminated soft costs"
            detail="Humanly's intelligence layer identifies parcels, recommends product mix, defines village center services, and determines onsite versus online delivery requirements."
            imgSrc="/images/pexels-masoodaslami-32047262.jpg"
            delay={0}
          />
          <Layer
            label="Layer 1a"
            phase="acq"
            title="Design System & Rapid Test Modelling"
            desc="Market intelligence feeds form-based code and rapid 3D test-fit models from day one."
            cap="Speed to design + reduced soft costs"
            detail="The kit of parts for homes, amenities, and infrastructure collapses the time between site discovery and development clarity."
            imgSrc="/images/pexels-jakubzerdzicki-29148783.jpg"
            delay={0.1}
          />
          <Layer
            label="Layer 1b"
            phase="acq"
            title="Accelerated Entitlement & Transparency"
            desc="Co-create with municipalities through shared 3D simulations and early alignment."
            cap="Faster entitlement + alignment"
            detail="Planners, community members, and elected officials evaluate the smart neighborhood together, improving trust and compressing approval timelines."
            imgSrc="/images/pexels-mahmoudramadan-36444550.jpg"
            delay={0.15}
          />
          <Layer
            label="Layer 2"
            phase="acq"
            title="Land, Density & Human-Centered Design"
            desc="Acquire at disciplined basis, entitle for density, and retain ~70% of lots on long-term lease."
            cap="Land appreciation + lease income"
            detail="This substrate layer transforms land into long-duration infrastructure, aligning value creation with long-term community stewardship."
            imgSrc="/images/pexels-fotoaibe-1643389.jpg"
            delay={0.2}
          />
          <Layer
            label="Layer 3"
            phase="acq"
            title="Product Mix Intelligence"
            desc="Configurable home kit of parts driven by market intelligence rather than guesswork."
            cap="Soft cost savings + upgrades"
            detail="A curated design system improves permitting speed, margin reliability, and finish upsell potential while keeping the product aligned to actual demand."
            imgSrc="/images/AdobeStock_383551453.jpeg"
            delay={0.25}
          />
          <Layer
            label="Layer 4a"
            phase="lease"
            title="Open World & Immersive Sales"
            desc="Walk streets, enter homes, and explore the neighborhood before ground is broken."
            cap="Emotional conviction + deposits"
            detail="Design models become a buyer-facing experience online and onsite, turning planning assets into a differentiated pre-sale and lease-up engine."
            imgSrc="/images/AdobeStock_188223905.jpeg"
            delay={0.3}
          />
          <Layer
            label="Layer 4b"
            phase="lease"
            title="Immersive Buying Experience"
            desc="Choose lot, configure home, view total cost, and transact before construction is complete."
            cap="Velocity + capital efficiency"
            detail="The same experience layer accelerates sales and leasing by reducing uncertainty and turning interest into action with clear pricing and customization."
            imgSrc="/images/pexels-steph-320380194-13727724.jpg"
            delay={0.35}
          />
          <Layer
            label="Layer 5"
            phase="mgmt"
            title="HumanlyOS®"
            desc="Resident AI navigator, service marketplace, and Digital Twin operations in one platform."
            cap="Rev share + data ownership"
            detail="HumanlyOS® manages access to on and offline services, captures operational intelligence, and improves community performance through recursive data loops."
            imgSrc="/images/AdobeStock_308963762.jpeg"
            delay={0.4}
          />
          <Layer
            label="Layer 6"
            phase="mgmt"
            title="Recurring Revenue & Asset Value"
            desc="Permanent cash flow from leases, services, and commercial rents at institutional scale."
            cap="NOI + asset value + learning"
            detail="Community data feeds learning loops that improve operations, support refinance, and compound performance over time as each neighborhood matures."
            imgSrc="/images/pexels-jonathanborba-14820419.jpg"
            delay={0.45}
          />
        </div>
      </div>
    </section>
  );
};
