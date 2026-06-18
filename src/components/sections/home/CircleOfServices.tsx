"use client";
import React, { useState, useEffect, useRef } from 'react';
import Image from 'next/image';
import { motion, AnimatePresence } from "framer-motion";

const carouselItems = [
  {
    src: "/images/HealthcareSvg.svg", alt: "Healthcare", label: "HEALTHCARE",
    details: ["Preventative/Proactive", "On-call Consultants", "Integrated Provider Access", "Emotional Intelligence Programs"]
  },
  {
    src: "/images/wellnessSvg.svg", alt: "Wellness", label: "WELLNESS",
    details: ["AI-Enabled Fitness", "Pro Sports Ambassador Events", "Fitness Studios & Programs", "Pool & Spa"]
  },
  {
    src: "/images/FoodSvg.svg", alt: "Food", label: "FOOD",
    details: ["Restaurant", "Food Market", "Commercial Garden", "On-Demand Delivery"]
  },
  {
    src: "/images/EducationSvg.svg", alt: "Education", label: "EDUCATION",
    details: ["AI-Based Learning Lab", "AI Tutoring", "Weekly Workshops", "Continuous Learning Programs"]
  },
  {
    src: "/images/workSvg.svg", alt: "Work", label: "WORK",
    details: ["Shared & Private Office Space", "Conference Rooms", "Resource & Network Hub", "Daycare Services"]
  },
  {
    src: "/images/TransportationSvg.svg", alt: "Transportation", label: "TRANSPORTATION",
    details: ["Autonomous Car Service", "Ride Sharing", "Optimized Parking", "Trail Systems"]
  },
  {
    src: "/images/EntertainmentSvg.svg", alt: "Entertainment", label: "ENTERTAINMENT",
    details: ["Movie Theater", "Music Events", "Cultural Events & Activities", "Podcasts"]
  },
  {
    src: "/images/GeneralSvg.svg", alt: "General", label: "GENERAL",
    details: ["Home Maintenance", "Landscaping", "Housekeeping", "Dog Park/Pet Services"]
  }
];

export const CircleOfServicesSection = () => {
  const [activeIndex, setActiveIndex] = useState(2);
  const [rotation, setRotation] = useState(0);
  const [lastInteraction, setLastInteraction] = useState(Date.now());

  useEffect(() => {
    const interval = setInterval(() => {
      setRotation(prev => prev + 45);
      setActiveIndex(prev => (prev - 1 + 8) % 8);
    }, 6000); // 6s cycle: 2.5s for rotation, 3.5s pause to read
    return () => clearInterval(interval);
  }, [lastInteraction]);

  const handleCardClick = (index: number) => {
    if (index === activeIndex) return;
    let diff = activeIndex - index;
    if (diff > 4) diff -= 8;
    if (diff < -3) diff += 8;

    setRotation(prev => prev + diff * 45);
    setActiveIndex(index);
    setLastInteraction(Date.now());
  };

  return (
    <section className="relative w-full flex flex-col items-center overflow-x-clip pt-24 pb-32">

      {/* Background Gradients */}
      <div
        className="absolute pointer-events-none left-0 -translate-x-1/2 bottom-0 translate-y-1/3 w-[clamp(25rem,50vw,60rem)] h-[clamp(25rem,50vw,60rem)]"
        style={{ background: "radial-gradient(50% 50%, rgba(var(--radial-gradient-color, 107, 206, 255), 0.20), rgba(var(--radial-gradient-color, 107, 206, 255), 0.12) 50%, rgba(var(--radial-gradient-color, 107, 206, 255), 0))" }}
      />
      <div
        className="absolute pointer-events-none right-0 top-0 translate-x-1/2 -translate-y-1/4 w-[clamp(25rem,50vw,60rem)] h-[clamp(25rem,50vw,60rem)]"
        style={{ background: "radial-gradient(50% 50%, rgba(var(--radial-gradient-color, 107, 206, 255), 0.25), rgba(var(--radial-gradient-color, 107, 206, 255), 0.12) 50%, rgba(var(--radial-gradient-color, 107, 206, 255), 0))" }}
      />

      {/* Title & Description - Top Left */}
      <div className="w-full z-20 mb-12 md:mb-24">
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.35 }}
          transition={{ duration: 1 }}>
        <div className="max-w-[1440px] mx-auto px-6 md:px-12 lg:px-16 w-full flex flex-col items-start"> 
          <h2 className="text-left text-sandstone-500 leading-tight font-light font-cormorant text-4xl md:text-5xl tracking-tight mb-4 md:mb-6">
            Circle of Services
          </h2>
          <p className="text-left text-[#1C1B1A]/70 max-w-[22rem] md:max-w-lg lg:max-w-xl text-sm md:text-lg leading-relaxed font-albert font-light mb-8 md:mb-12 text-pretty">
            Humanly’s Circle of Services is a fully integrated ecosystem designed to support the whole person by bringing everyday essentials together in one seamless experience.
          </p>
        </div>
        </motion.div>
      </div>

      {/* Carousel Container */}
      <div className="relative w-full max-w-[1440px] mx-auto flex justify-center items-center min-h-[900] md:min-h-[42.5rem]">

        {/* Central Gradient Glow */}
        <div
          className="absolute top-[20rem] md:top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[14rem] h-[14rem] md:w-[20rem] md:h-[20rem] rounded-full pointer-events-none z-[1]"
          style={{
            background: 'linear-gradient(90deg, #4179F2 0%, #F55D33 50%, #FFE366 100%)',
            filter: 'blur(80px)',
            opacity: 0.25
          }}
        />

        <div className="absolute z-[3] pointer-events-none flex flex-col justify-center items-center box-border top-[20rem] md:top-1/2 -translate-y-1/2 left-1/2 -translate-x-1/2 md:left-0 md:-translate-x-[50%] lg:left-0 lg:-translate-x-[50%] xl:left-1/2 xl:-translate-x-[72%]">
          <div className="relative flex justify-center items-center rotate-90 md:rotate-0 transition-transform duration-[1000ms] ease-in-out">
            <div
              className="relative flex justify-center items-center w-[480px] h-[480px] md:w-[640px] md:h-[640px] transition-transform duration-[2500ms] ease-in-out"
              style={{ transform: `rotate(${rotation}deg)` }}
            >
              {carouselItems.map((item, index) => {
                const angle = index * 45 - 90;
                const rad = (angle * Math.PI) / 180;
                const x = 50 + 54 * Math.cos(rad);
                const y = 50 + 54 * Math.sin(rad);

                return (
                  <div
                    key={index}
                    onClick={() => handleCardClick(index)}
                    className={`absolute w-28 h-28 md:w-36 md:h-36 -translate-x-1/2 -translate-y-1/2 rounded-[2rem] overflow-visible pointer-events-auto group cursor-pointer transition-all duration-[1000ms] ease-in-out ${activeIndex === index ? 'opacity-100 scale-125 bg-white shadow-[0_0_60px_rgba(245,93,51,0.3)] z-20' : 'opacity-80 scale-95 bg-white shadow-[0_8px_24px_rgba(0,0,0,0.08)] z-10'}`}
                    style={{ left: `${x}%`, top: `${y}%` }}
                  >
                    <div className="absolute inset-0 rounded-[2rem] overflow-hidden -rotate-90 md:rotate-0 transition-transform duration-[1000ms] ease-in-out">
                      <div
                        className="absolute w-[150%] h-[150%] -top-[25%] -left-[25%] origin-center transition-transform duration-[2500ms] ease-in-out"
                        style={{ transform: `rotate(${-rotation}deg)` }}
                      >
                        <Image
                          src={item.src}
                          alt={item.alt}
                          width={100}
                          height={100}
                          className="absolute w-[60%] h-[60%] top-[20%] left-[20%] object-contain"
                        />
                        {/* Full Image Overlay & Text - Shown on Hover */}
                        <div className="absolute inset-0 flex items-center justify-center pointer-events-none p-4 opacity-0 group-hover:opacity-100 transition-opacity duration-300 bg-black/60">
                          <p
                            className="text-white text-xs md:text-[13px] font-medium font-albert text-center leading-tight tracking-wider uppercase whitespace-pre-line"
                            style={{ WebkitFontSmoothing: 'antialiased', transform: 'translateZ(0)', backfaceVisibility: 'hidden' }}
                          >
                            {item.label}
                          </p>
                        </div>
                      </div>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>

          {/* Central Logo Component */}
          <div className="absolute inset-0 z-10 flex flex-col items-center justify-center pointer-events-none">
            <div
              className="w-40 h-40 md:w-44 md:h-44 rounded-full border border-white/20 flex items-center justify-center pointer-events-auto shadow-2xl p-4 relative overflow-hidden"
              style={{
                backgroundImage: 'url("/images/Humanly_HeroGradient_NoGrain_CMYK.jpg")',
                backgroundSize: 'cover',
                backgroundPosition: 'center'
              }}
            >
              <Image
                src="/images/asset%200.png"
                alt="Humanly Logo"
                width={200}
                height={200}
                className="w-full h-full object-contain relative z-10 scale-[1.15] block md:hidden xl:block"
              />
              <Image
                src="/images/Humanly_Logo_Mark_Gradient%20on%20Light.svg"
                alt="Humanly Logo"
                width={200}
                height={200}
                className="w-full h-full object-contain object-right relative z-10 hidden md:block xl:hidden scale-90 translate-x-5"
              />
            </div>
          </div>
        </div>

        {/* Right Side Details Panel */}
        <div className="absolute top-[660px] md:top-1/2 md:-translate-y-1/2 w-[90%] md:w-80 lg:w-[26rem] z-20 pointer-events-none md:left-[510px] lg:left-[600px] xl:left-[calc(50%+380px)]">
          <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.35 }}
          transition={{ duration: 1 }}>
          <div className="relative flex flex-col items-center md:items-start text-center md:text-left w-full h-[22rem]">
            {carouselItems.map((item, index) => (
              <div
                key={index}
                className={`absolute inset-0 z-10 transition-opacity duration-500 ease-in-out flex flex-col justify-center items-center md:items-start ${activeIndex === index ? 'opacity-100' : 'opacity-0'}`}
              >

                <h3 className="text-sandstone-500 text-2xl font-medium font-cormorant tracking-normal mb-6 w-full text-center md:text-left">
                  {item.label}
                </h3>
                <ul className="flex flex-col gap-4 items-center md:items-start w-full">
                  {item.details.map((detail, idx) => (
                    <li key={idx} className="flex items-start text-sandstone-500 text-base leading-normal font-light font-albert text-center md:text-left">
                      <span className="mr-3 text-sandstone-500/50 font-bold mt-1 hidden md:block">•</span>
                      <span>{detail}</span>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};
