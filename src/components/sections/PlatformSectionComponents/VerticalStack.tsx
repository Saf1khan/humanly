"use client";

import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

interface LayerProps {
  label: string;
  title: string;
  desc: string;
  cap: string;
  detail: string;
  phase: "acq" | "lease" | "mgmt";
  delay?: number;
}

const Layer = ({ label, title, desc, cap, detail, phase, delay = 0 }: LayerProps) => {
  const [isOpen, setIsOpen] = useState(false);

  const colors = {
    acq: "#D6C3A5",
    lease: "#4179F2",
    mgmt: "#6BCEFF"
  };

  const getPhaseColor = () => {
    switch (phase) {
      case "acq": return "text-[#D6C3A5]";
      case "lease": return "text-[#4179F2]";
      case "mgmt": return "text-[#6BCEFF]";
      default: return "text-white";
    }
  };

  return (
    <motion.div
      initial={{ opacity: 0, y: 40 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.8, delay, ease: [0.16, 1, 0.3, 1] }}
      className="group rounded-[24px] bg-white border border-black/5 overflow-hidden transition-all hover:border-black/10 shadow-xl relative"
      style={{
        borderLeft: `4px solid ${colors[phase]}`
      }}
    >
      <div
        className="grid grid-cols-[84px_1fr] md:grid-cols-[110px_1fr_auto_auto] gap-3 md:gap-[18px] items-center p-[22px_26px] cursor-pointer transition-all duration-500 ease-out group-hover:pl-12"
        onClick={() => setIsOpen(!isOpen)}
      >
        <div className="text-[11px] font-bold tracking-[0.09em] uppercase text-slate-400 group-hover:text-slate-600 transition-colors">
          {label}
        </div>
        <div className="transition-transform duration-500 ease-out">
          <div className={`text-[17px] font-extrabold tracking-[-0.4px] ${getPhaseColor()}`}>
            {title}
          </div>
          <div className="text-[13px] leading-[1.55] text-slate-600 mt-1 max-w-[500px]">
            {desc}
          </div>
        </div>
        <div className="hidden md:block px-3 py-2 rounded-full bg-black/5 text-[10px] font-bold text-[#4179F2] uppercase tracking-wider whitespace-nowrap">
          {cap}
        </div>
        <div className={`w-[34px] h-[34px] rounded-full flex items-center justify-center bg-black/5 text-[18px] text-slate-600 transition-all duration-300 ${isOpen ? 'bg-[#4179F2]/15 text-[#4179F2] rotate-180' : 'group-hover:bg-black/10'}`}>
          {isOpen ? "−" : "+"}
        </div>
      </div>

      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: "auto", opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.45, ease: [0.16, 1, 0.3, 1] }}
            className="overflow-hidden"
          >
            <div className="px-6 pb-6 pt-0 ml-[96px] md:ml-[128px]">
              <div className="h-[1px] w-full bg-black/5 mb-4" />
              <p className="text-[14px] leading-relaxed text-slate-500 max-w-[600px]">
                {detail}
              </p>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.div>
  );
};

export const VerticalStack = () => {
  return (
    <section className="py-[160px] relative overflow-hidden bg-white">
      {/* Background Image Layer with fixed opacity */}
      <div
        className="absolute inset-0 pointer-events-none opacity-[21]"
        style={{
          backgroundImage: "url('/images/AdobeStock_322369552.jpeg')",
          backgroundSize: 'cover',
          backgroundPosition: 'center',
          backgroundAttachment: 'fixed'
        }}
      />

      {/* Subtle Luminous Glows */}
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_right,rgba(214,195,165,0.4),transparent_50%)] pointer-events-none" />

      {/* Logo-inspired Background Shapes */}
      <div
        className="absolute inset-0 pointer-events-none overflow-hidden opacity-[0.03]"
        style={{ mixBlendMode: 'soft-light' }}
      >
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 2.5, ease: [0.16, 1, 0.3, 1] }}
          className="absolute -right-[15%] top-[10%] w-[40%] h-[80%] border-l-[1px] border-white/10 rounded-[200px] blur-[2px] opacity-20"
        />
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 2.5, ease: [0.16, 1, 0.3, 1], delay: 0.3 }}
          className="absolute -left-[10%] bottom-[5%] w-[30%] h-[60%] border-r-[1px] border-white/10 rounded-[150px] blur-[1px] opacity-15"
        />
      </div>

      {/* Subtle Background Glows */}
      <div className="absolute top-0 left-0 w-full h-full pointer-events-none">
        <div className="absolute top-[10%] left-[5%] w-[400px] h-[400px] rounded-full bg-[#4179F2]/5 blur-[120px]" />
      </div>

      <div className="container mx-auto px-6 md:px-12 max-w-[1200px] relative z-10">
        <motion.p
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          className="text-[11px] font-bold uppercase tracking-[0.15em] text-[#4179F2] mb-4"
        >
          Vertical Layer Stack
        </motion.p>
        <div className="h-[2px] w-[74px] bg-gradient-to-r from-[#D6C3A5] via-[#4179F2] to-[#6BCEFF] rounded-[1px] mb-8" />

        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 1, ease: [0.16, 1, 0.3, 1] }}
          className="text-[clamp(36px,5vw,64px)] font-extrabold leading-[1.08] tracking-[-2px] text-slate-900 max-w-[880px] mb-16"
        >
          Nine layers of value creation across acquisitions, lease-up, and management.
        </motion.h2>

        <div className="grid grid-cols-1 lg:grid-cols-[1fr_120px] gap-[22px] items-start">
          <div className="flex flex-col gap-[10px]">
            <Layer
              label="Layer 6"
              phase="mgmt"
              title="Recurring Revenue & Asset Value"
              desc="Permanent cash flow from leases, services, and commercial rents at institutional scale."
              cap="NOI + asset value + learning"
              detail="Community data feeds learning loops that improve operations, support refinance, and compound performance over time as each neighborhood matures."
              delay={0}
            />
            <Layer
              label="Layer 5"
              phase="mgmt"
              title="HumanlyOS®"
              desc="Resident AI navigator, service marketplace, and Digital Twin operations in one platform."
              cap="Rev share + data ownership"
              detail="HumanlyOS® manages access to on and offline services, captures operational intelligence, and improves community performance through recursive data loops."
              delay={0.1}
            />
            <Layer
              label="Layer 4b"
              phase="lease"
              title="Immersive Buying Experience"
              desc="Choose lot, configure home, view total cost, and transact before construction is complete."
              cap="Velocity + capital efficiency"
              detail="The same experience layer accelerates sales and leasing by reducing uncertainty and turning interest into action with clear pricing and customization."
              delay={0.15}
            />
            <Layer
              label="Layer 4a"
              phase="lease"
              title="Open World & Immersive Sales"
              desc="Walk streets, enter homes, and explore the neighborhood before ground is broken."
              cap="Emotional conviction + deposits"
              detail="Design models become a buyer-facing experience online and onsite, turning planning assets into a differentiated pre-sale and lease-up engine."
              delay={0.2}
            />
            <Layer
              label="Layer 3"
              phase="acq"
              title="Product Mix Intelligence"
              desc="Configurable home kit of parts driven by market intelligence rather than guesswork."
              cap="Soft cost savings + upgrades"
              detail="A curated design system improves permitting speed, margin reliability, and finish upsell potential while keeping the product aligned to actual demand."
              delay={0.25}
            />
            <Layer
              label="Layer 2"
              phase="acq"
              title="Land, Density & Human-Centered Design"
              desc="Acquire at disciplined basis, entitle for density, and retain ~70% of lots on long-term lease."
              cap="Land appreciation + lease income"
              detail="This substrate layer transforms land into long-duration infrastructure, aligning value creation with long-term community stewardship."
              delay={0.3}
            />
            <Layer
              label="Layer 1b"
              phase="acq"
              title="Accelerated Entitlement & Transparency"
              desc="Co-create with municipalities through shared 3D simulations and early alignment."
              cap="Faster entitlement + alignment"
              detail="Planners, community members, and elected officials evaluate the smart neighborhood together, improving trust and compressing approval timelines."
              delay={0.35}
            />
            <Layer
              label="Layer 1a"
              phase="acq"
              title="Design System & Rapid Test Modelling"
              desc="Market intelligence feeds form-based code and rapid 3D test-fit models from day one."
              cap="Speed to design + reduced soft costs"
              detail="The kit of parts for homes, amenities, and infrastructure collapses the time between site discovery and development clarity."
              delay={0.4}
            />
            <Layer
              label="Layer 0"
              phase="acq"
              title="Smarter, Faster Land Acquisition"
              desc="Proprietary AI finds off-market parcels and replaces traditional market study guesswork."
              cap="Deal flow + eliminated soft costs"
              detail="Humanly's intelligence layer identifies parcels, recommends product mix, defines village center services, and determines onsite versus online delivery requirements."
              delay={0.45}
            />
          </div>

          {/* Phase Rail */}
          <motion.div
            initial={{ opacity: 0, x: 40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 1, ease: [0.16, 1, 0.3, 1] }}
            className="hidden lg:flex sticky top-[110px] flex-col gap-[10px]"
          >
            <div className="rounded-[24px] p-[14px_12px] min-h-[150px] bg-white border border-black/5 border-r-[3px] border-r-[#6BCEFF] flex items-center justify-center text-center shadow-sm">
              <span className="[writing-mode:vertical-rl] rotate-180 text-[11px] font-extrabold tracking-[0.12em] uppercase text-[#6BCEFF]">Management</span>
            </div>
            <div className="rounded-[24px] p-[14px_12px] min-h-[150px] bg-white border border-black/5 border-r-[3px] border-r-[#4179F2] flex items-center justify-center text-center shadow-sm">
              <span className="[writing-mode:vertical-rl] rotate-180 text-[11px] font-extrabold tracking-[0.12em] uppercase text-[#4179F2]">Lease-up</span>
            </div>
            <div className="rounded-[24px] p-[14px_12px] min-h-[150px] bg-white border border-black/5 border-r-[3px] border-r-[#D6C3A5] flex items-center justify-center text-center shadow-sm">
              <span className="[writing-mode:vertical-rl] rotate-180 text-[11px] font-extrabold tracking-[0.12em] uppercase text-[#D6C3A5]">Acquisitions</span>
            </div>
          </motion.div>
        </div>
      </div>

    </section>
  );
};
