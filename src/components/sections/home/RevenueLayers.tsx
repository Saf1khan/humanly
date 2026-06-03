"use client";

import { motion } from "framer-motion";

const layers = [
  {
    id: "layer1",
    eyebrow: "Layer 1",
    title: "Real Estate Operations",
    content: "Traditional NOI from attainable housing at 80–120% AMI.",
    image: "/images/pexels-tomfisk-34115060.jpg"
  },
  {
    id: "layer2",
    eyebrow: "Layer 2",
    title: "Service Revenue",
    content: "Circle of Services® transaction fees across 8 categories.",
    image: "/images/pexels-karola-g-6627903.jpg"
  },
  {
    id: "layer3",
    eyebrow: "Layer 3",
    title: "Financial Products",
    content: "HumanlyPay™ embedded financial services — credit building, savings, insurance.",
    image: "/images/pexels-mahmoudramadan-36444550.jpg"
  },
  {
    id: "layer4",
    eyebrow: "Layer 4",
    title: "Data & Intelligence",
    content: "Anonymized community insights and behavioral data products.",
    image: "/images/pexels-markus-winkler-1430818-4604639.jpg"
  },
  {
    id: "layer5",
    eyebrow: "Layer 5",
    title: "Platform Licensing",
    content: "HumanlyOS® licensing to third-party operators and municipalities.",
    image: "/images/pexels-pixabay-265755.jpg"
  }
];

export const RevenueLayers = () => {
  return (
    <section className="py-24 bg-transparent relative overflow-hidden">
      <div className="max-w-[1440px] mx-auto px-6 md:px-12 lg:px-16 relative z-10 w-full">
        
        <div className="flex flex-col items-center text-center mb-16">
          <div className="flex flex-col items-center gap-2 mb-6">
            <p className="text-[11px] font-bold tracking-[0.2em] uppercase text-[#A8A5A0]">
              INVESTMENT THESIS
            </p>
            <div className="h-[1px] w-[72px] bg-[linear-gradient(to_right,#6BCEFF,#0c007a,#AA3DAD,#FF6136,#FFE366)] rounded-full"></div>
          </div>
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold font-cormorant text-sandstone-500 leading-[1.1] tracking-tight max-w-4xl">
            Five Revenue Layers. <br/> One Integrated Platform.
          </h2>
          <p className="mt-6 text-lg text-sandstone-500/70 max-w-2xl mx-auto leading-relaxed font-albert">
            Traditional real estate captures one revenue stream. Humanly captures five — compounding returns through vertical integration from land to living to lifelong services.
          </p>
        </div>

        {/* 5-Column Hover Expansion Layout */}
        <div className="flex flex-col lg:flex-row w-full h-[800px] lg:h-[600px] gap-4">
          {layers.map((layer, idx) => (
            <motion.div
              key={layer.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: idx * 0.1, duration: 0.6 }}
              className="relative group flex-1 hover:flex-[3] transition-all duration-700 ease-[cubic-bezier(0.25,1,0.5,1)] rounded-3xl overflow-hidden cursor-pointer border border-black/10 shadow-sm hover:shadow-2xl h-full"
            >
              <img 
                src={layer.image} 
                alt={layer.title}
                className="absolute inset-0 w-full h-full object-cover transition-transform duration-1000 group-hover:scale-105"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/20 to-transparent opacity-70 group-hover:opacity-90 transition-opacity duration-500"></div>
              
              <div className="absolute inset-0 p-6 lg:p-8 flex flex-col justify-end">
                <div className="transform transition-transform duration-500 ease-out translate-y-6 group-hover:translate-y-0">
                  <div className="flex items-center gap-3 mb-3">
                     <span className="px-3 py-1 bg-white/20 backdrop-blur-md rounded-full text-[10px] font-bold tracking-[0.15em] uppercase text-white border border-white/20 shadow-sm">
                       {layer.eyebrow}
                     </span>
                  </div>
                  <h3 className="text-2xl lg:text-3xl font-bold font-cormorant text-white mb-2 leading-tight drop-shadow-md">
                    {layer.title}
                  </h3>
                  <div className="grid grid-rows-[0fr] group-hover:grid-rows-[1fr] transition-all duration-500 ease-out">
                    <p className="overflow-hidden text-white/90 font-albert text-sm lg:text-base leading-relaxed opacity-0 group-hover:opacity-100 transition-opacity duration-500 delay-100">
                      {layer.content}
                    </p>
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

      </div>
    </section>
  );
};
