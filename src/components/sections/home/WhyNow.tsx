"use client";
import React from 'react';
import { motion } from 'framer-motion';

export const WhyNow = () => {
  const cards = [
    {
      badge: 'Legislative',
      title: 'Legislative Tailwinds',
      desc: 'Zoning reform, YIMBY legislation, and federal workforce housing incentives are opening land markets at unprecedented scale.',
    },
    {
      badge: 'Technology',
      title: 'AI-Native Moment',
      desc: 'For the first time, AI can manage community operations, predict maintenance, and personalize resident services at scale.',
    },
    {
      badge: 'Capital',
      title: 'ESG Capital Demand',
      desc: 'Institutional investors are allocating billions to workforce housing and impact real estate. Humanly is purpose-built to capture this capital.',
    }
  ];

  return (
    <div className="bg-black">
      <section className="bg-sandstone-200 py-16 text-[#1c1b1a] font-sans box-border relative z-10 overflow-visible">
      <div className="grid max-w-[1440px] mx-auto gap-6 grid-cols-[repeat(24,1fr)] px-6 md:px-12 lg:px-16 box-border w-full">
        {/* Section Title */}
        <div className="col-span-full mb-8">
          <motion.div
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <h2 className="text-sm font-bold tracking-wider uppercase text-stone-600 m-0">THE OPPORTUNITY</h2>
          </motion.div>
        </div>

        {/* Featured Article (Left) */}
        <div className="col-span-full lg:col-[1/span_14]">
          <article className="relative h-[480px] lg:h-[771px] rounded-3xl overflow-hidden flex flex-col">
            {/* Background Image */}
            <div className="absolute inset-0 z-[1]">
               <img src="/images/pexels-pixabay-265755.jpg" alt="Why Humanly Why Now" className="w-full h-[115%] object-cover -translate-y-[8.7%] block" />
               <div className="absolute inset-0 bg-gradient-to-b from-transparent from-40% to-black/80"></div>
            </div>
            
            <div className="relative z-[2] h-full p-8 flex flex-col justify-between">
              <div className="bg-[#f7f1e8] text-[#1c1b1a] py-2 px-3 text-xs font-bold w-fit rounded-lg tracking-wider uppercase">FEATURED</div>
              <div className="bottom-content">
                <motion.h2
                  className="text-[#f7f1e8] text-[40px] leading-tight tracking-tight m-0 mb-8 font-normal max-w-[80%]"
                  initial={{ opacity: 0, y: 24 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.15, duration: 0.7 }}
                  viewport={{ once: true }}
                >
                  Why Humanly.<br />Why Now.
                </motion.h2>
                <motion.div
                  initial={{ opacity: 0, y: 10 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.25, duration: 0.6 }}
                  viewport={{ once: true }}
                >
                  <a href="#" className="bg-[#f7f1e8] text-stone-700 py-3 px-6 rounded-full no-underline inline-flex items-center gap-2 font-bold text-sm transition-colors duration-200 w-fit hover:bg-[#dcd7d0]">
                    Explore the Platform 
                    <svg width="13" height="13" viewBox="0 0 13 13" fill="none"><path d="M12.5303 6.53033C12.8232 5.76256 12.5303 5.46967L7.75736 0.696699C7.46447 0.403806 6.98959 0.403806 6.6967 0.696699C6.40381 0.989593 6.40381 1.46447 6.6967 1.75736L10.9393 6L6.6967 10.2426C6.40381 10.5355 6.40381 11.0104 6.6967 11.3033C6.98959 11.5962 7.46447 11.5962 7.75736 11.3033L12.5303 6.53033ZM0 6.75L12 6.75V5.25L0 5.25L0 6.75Z" fill="currentColor"/></svg>
                  </a>
                </motion.div>
              </div>
            </div>
          </article>
        </div>

        {/* Sidebar Articles (Right) */}
        <div className="col-span-full lg:col-[16/-1]">
          <div className="flex flex-col gap-4 lg:gap-6 h-full">
            {cards.map((card, index) => (
              <motion.article
                key={index}
                className="bg-white border border-[#1c1b1a]/10 text-[#1c1b1a] p-6 rounded-3xl flex flex-col justify-between flex-1 min-h-0 transition-colors duration-200 hover:bg-white/80 shadow-sm"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.1 * index, duration: 0.55 }}
                viewport={{ once: true }}
              >
                <div>
                  <div className="text-[11px] font-bold tracking-[0.12em] uppercase text-[#1c1b1a]/55 mb-2 block">{card.badge}</div>
                  <h2 className="text-[24px] leading-tight font-normal m-0">{card.title}</h2>
                  <p className="text-[13px] leading-relaxed text-[#1c1b1a]/75 mt-2.5">{card.desc}</p>
                </div>
                <div className="flex justify-end">
                  <a href="#" className="bg-stone-700 text-[#f7f1e8] w-11 h-11 rounded-full flex items-center justify-center -rotate-45 transition-colors duration-200 hover:bg-[#1c1b1a]" aria-label={`Learn more about ${card.title}`}>
                    <svg width="13" height="13" viewBox="0 0 13 13" fill="none"><path d="M12.5303 6.53033C12.8232 5.76256 12.5303 5.46967L7.75736 0.696699C7.46447 0.403806 6.98959 0.403806 6.6967 0.696699C6.40381 0.989593 6.40381 1.46447 6.6967 1.75736L10.9393 6L6.6967 10.2426C6.40381 10.5355 6.40381 11.0104 6.6967 11.3033C6.98959 11.5962 7.46447 11.5962 7.75736 11.3033L12.5303 6.53033ZM0 6.75L12 6.75V5.25L0 5.25L0 6.75Z" fill="currentColor"/></svg>
                  </a>
                </div>
              </motion.article>
            ))}
          </div>
        </div>
      </div>
    </section>
    </div>
  );
};
